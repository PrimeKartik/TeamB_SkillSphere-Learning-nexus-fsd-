# SkillSphere Learning Nexus

Full-stack recreation of the landing page: **React (Vite + Tailwind) frontend**, **Spring Boot + JWT backend**, **MySQL database**.

```
skillsphere/
├── frontend/     React + Vite + Tailwind (the landing page UI)
├── backend/      Spring Boot REST API with JWT auth
└── database/     MySQL schema.sql + seed.sql
```

## 1. Database (MySQL)

1. Make sure MySQL is running locally.
2. Create the database and tables:
   ```bash
   mysql -u root -p < database/schema.sql
   mysql -u root -p < database/seed.sql
   ```
   (You can skip this — Hibernate will auto-create the `users` and `courses` tables
   on first backend startup thanks to `spring.jpa.hibernate.ddl-auto=update` —
   but you'll still want `seed.sql` for sample course data.)

## 2. Backend (Spring Boot + JWT)

1. Open `backend/src/main/resources/application.properties` and set:
   - `spring.datasource.username` / `spring.datasource.password` to your MySQL credentials
   - `jwt.secret` to a long random string (32+ characters) for production
2. Run it:
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```
   The API starts on **http://localhost:8080**.

### API Endpoints

| Method | Endpoint             | Auth        | Description                    |
|--------|-----------------------|-------------|---------------------------------|
| POST   | `/api/auth/register`  | Public      | Create account, returns JWT     |
| POST   | `/api/auth/login`     | Public      | Log in, returns JWT             |
| POST   | `/api/auth/google`    | Public      | Sign in with Google, returns JWT |
| GET    | `/api/courses`        | Public      | List all courses                |

Register/Login request body:
```json
{ "name": "Jane Doe", "email": "jane@example.com", "password": "secret123" }
```
Response:
```json
{ "token": "eyJhbGciOi...", "name": "Jane Doe", "email": "jane@example.com", "role": "STUDENT" }
```

Use the token on protected routes with header: `Authorization: Bearer <token>`

## 2b. Google Sign-In setup (one-time)

1. Go to https://console.cloud.google.com/apis/credentials
2. Create a project (or pick an existing one).
3. Click **Create Credentials → OAuth client ID → Web application**.
4. Under **Authorized JavaScript origins**, add: `http://localhost:5173`
5. Save, then copy the generated **Client ID** (looks like `xxxx.apps.googleusercontent.com`).
6. Paste it in **two places**:
   - `backend/src/main/resources/application.properties` → `google.client-id=...`
   - `frontend/.env` (copy from `frontend/.env.example`) → `VITE_GOOGLE_CLIENT_ID=...`

If you already ran `database/schema.sql` before this feature was added, also run
the migration once: `mysql -u root -p < database/migration_add_google_auth.sql`
(or `source` it from inside the `mysql>` prompt).

## 3. Frontend (React + Vite + Tailwind)

```bash
cd frontend
npm install
npm run dev
```
Opens on **http://localhost:5173**. It's already configured to proxy `/api/*` calls to
the backend at `http://localhost:8080` (see `vite.config.js`), and the courses
section fetches live data from `/api/courses`, falling back to sample data if
the backend isn't running yet.

## Notes

- Passwords are hashed with BCrypt before being stored.
- JWTs are signed with HS256 and expire after 24h (`jwt.expiration-ms`).
- CORS is pre-configured to allow the Vite dev server origin (`localhost:5173`).
- To add protected pages (e.g. a student dashboard), add `.authenticated()` routes
  in `SecurityConfig.java` and check for the token in the frontend router.
