import { Play } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false)

  const scrollToCourses = () => {
    const section = document.getElementById('courses')
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <>
      <section id="home" className="relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary2/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest mb-4">
              LEARN &bull; GROW &bull; SUCCEED
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Learn Without Limits.
              <br />
              <span className="gradient-text">Achieve More.</span>
            </h1>
            <p className="text-muted mt-5 max-w-md text-sm leading-relaxed">
              SkillSphere Learning Nexus is your gateway to industry-relevant
              courses, expert guidance, and hands-on learning experience.
            </p>

            <div className="flex items-center gap-4 mt-8">
              {/* Updated Explore Courses Button */}
              <button
                onClick={scrollToCourses}
                className="px-6 py-3 rounded-full bg-brand-gradient text-white font-semibold text-sm hover:opacity-90 transition"
              >
                Explore Courses
              </button>

              {/* Updated Watch Demo Button */}
              <button
                onClick={() => setShowPopup(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition"
              >
                <Play size={16} /> Watch Demo
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="card-glow rounded-2xl p-5 w-full max-w-sm">
              <p className="text-white text-sm font-semibold mb-4">
                Track Your Learning Journey
              </p>
              <div className="bg-base/60 rounded-xl p-4 mb-4">
                <p className="text-muted text-xs">Your Progress</p>
                <p className="text-white text-2xl font-bold">75%</p>
                <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-brand-gradient rounded-full"
                    style={{ width: '75%' }}
                  />
                </div>
                <p className="text-muted text-[10px] mt-2">
                  Keep going, you're almost there!
                </p>
              </div>

              <p className="text-muted text-xs mb-2">Top Categories</p>
              <div className="flex gap-2 mb-4">
                {['Development', 'Design', 'Marketing', 'Business'].map((c) => (
                  <span
                    key={c}
                    className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <p className="text-muted text-xs mb-2">Recent Courses</p>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-2">
                <div className="w-8 h-8 rounded-full bg-brand-gradient" />
                <div>
                  <p className="text-white text-xs font-medium">
                    Web Development
                  </p>
                  <p className="text-muted text-[10px]">In Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="card-glow p-6 rounded-2xl max-w-sm w-[90%] text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Coming Soon 🚀
            </h2>

            <p className="text-muted mb-5">
              Demo videos will be available soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="px-5 py-2 rounded-lg bg-brand-gradient text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}