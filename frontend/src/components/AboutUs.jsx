import { BookOpen, Target, Lightbulb } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
        <p className="text-muted max-w-3xl mx-auto">
          SkillSphere is a modern learning platform designed to empower
          students and professionals with industry-relevant skills through
          interactive courses, expert guidance, and personalized learning
          experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Mission */}
        <div className="card-glow rounded-2xl p-6">
          <div className="w-12 h-12 rounded-lg bg-brand-gradient flex items-center justify-center mb-4">
            <Target className="text-white" size={24} />
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">
            Our Mission
          </h3>

          <p className="text-muted leading-relaxed">
            To make quality education accessible to everyone by providing
            practical, career-focused learning opportunities that bridge the
            gap between education and industry requirements.
          </p>
        </div>

        {/* Vision */}
        <div className="card-glow rounded-2xl p-6">
          <div className="w-12 h-12 rounded-lg bg-brand-gradient flex items-center justify-center mb-4">
            <Lightbulb className="text-white" size={24} />
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">
            Our Vision
          </h3>

          <p className="text-muted leading-relaxed">
            To become a trusted global learning ecosystem where learners can
            continuously develop their skills, explore new technologies, and
            achieve their professional goals.
          </p>
        </div>

        {/* What We Offer */}
        <div className="card-glow rounded-2xl p-6">
          <div className="w-12 h-12 rounded-lg bg-brand-gradient flex items-center justify-center mb-4">
            <BookOpen className="text-white" size={24} />
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">
            What We Offer
          </h3>

          <p className="text-muted leading-relaxed">
            From programming and web development to emerging technologies,
            SkillSphere provides structured learning paths, progress tracking,
            and certification programs to help learners grow confidently.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          At SkillSphere, we believe learning should be engaging, flexible, and
          rewarding. Our platform is built to help learners gain practical
          knowledge, enhance their careers, and stay ahead in a rapidly evolving
          digital world.
        </p>
      </div>
    </section>
  );
}