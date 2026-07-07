import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-panel/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center">
              <GraduationCap size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">SkillSphere</p>
              <p className="text-muted text-[10px]">Learning Nexus</p>
            </div>
          </div>
          <p className="text-muted text-xs leading-relaxed">
            Empowering learners to achieve their goals through quality education and continuous learning.
          </p>
        </div>

        <div>
          <p className="text-white text-sm font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-muted text-xs">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#courses" className="hover:text-white transition">Courses</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
          </ul>
        </div>

        <div>
          <p className="text-white text-sm font-semibold mb-3">Support</p>
          <ul className="space-y-2 text-muted text-xs">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms &amp; Conditions</a></li>
          </ul>
        </div>

        <div>
          <p className="text-white text-sm font-semibold mb-3">Contact Us</p>
          <ul className="space-y-3 text-muted text-xs">
            <li className="flex items-center gap-2"><Mail size={14} /> support@skillsphere.com</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> Bengaluru, India</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-muted text-[11px] py-4 border-t border-white/5">
        © {new Date().getFullYear()} SkillSphere Learning Nexus. All rights reserved.
      </div>
    </footer>
  )
}
