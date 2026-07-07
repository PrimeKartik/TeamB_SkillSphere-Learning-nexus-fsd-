package com.skillsphere.service;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.skillsphere.dto.AuthResponse;
import com.skillsphere.dto.LoginRequest;
import com.skillsphere.dto.RegisterRequest;
import com.skillsphere.model.User;
import com.skillsphere.repository.UserRepository;
import com.skillsphere.security.GoogleTokenVerifier;
import com.skillsphere.security.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final GoogleTokenVerifier googleTokenVerifier;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder,
                        JwtUtil jwtUtil, GoogleTokenVerifier googleTokenVerifier) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
        this.googleTokenVerifier = googleTokenVerifier;
    }

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("An account with this email already exists");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole("STUDENT");
        userRepository.save(user);

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());
        return new AuthResponse(token, user.getName(), user.getEmail(), user.getRole());
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());
        return new AuthResponse(token, user.getName(), user.getEmail(), user.getRole());
    }

    /**
     * Verifies the Google ID token from the frontend, then finds an existing
     * account by email or creates a new one, and issues our own app JWT.
     */
    public AuthResponse googleLogin(String googleIdToken) throws Exception {
        GoogleIdToken.Payload payload = googleTokenVerifier.verify(googleIdToken);

        String email = payload.getEmail();
        String name = (String) payload.get("name");
        String googleId = payload.getSubject();

        if (Boolean.FALSE.equals(payload.getEmailVerified())) {
            throw new IllegalArgumentException("Google account email is not verified");
        }

        User user = userRepository.findByEmail(email).orElse(null);

        if (user == null) {
            user = new User();
            user.setName(name != null ? name : email);
            user.setEmail(email);
            user.setPassword(null); // no local password for Google-only accounts
            user.setRole("STUDENT");
            user.setProvider("GOOGLE");
            user.setGoogleId(googleId);
            userRepository.save(user);
        } else if (user.getGoogleId() == null) {
            // An account with this email already existed (e.g. registered locally) —
            // link the Google identity to it so they can sign in either way.
            user.setGoogleId(googleId);
            userRepository.save(user);
        }

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());
        return new AuthResponse(token, user.getName(), user.getEmail(), user.getRole());
    }
}
