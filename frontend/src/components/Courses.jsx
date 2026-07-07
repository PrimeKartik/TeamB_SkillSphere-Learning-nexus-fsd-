import { useEffect, useState } from 'react'
import { Star, Users } from 'lucide-react'
import { courseApi } from '../api/client'

// Place images inside: public/images/
const fallbackCourses = [
  {
    id: 1,
    badge: 'BESTSELLER',
    badgeColor: 'bg-orange-500',
    title: 'Full Stack Development',
    level: 'Beginner',
    duration: '12 Weeks',
    rating: 4.8,
    reviews: '1.2K',
    price: 4999,
    image: '/images/Full Stack Development.png',
  },
  {
    id: 2,
    badge: 'POPULAR',
    badgeColor: 'bg-blue-500',
    title: 'React.js Essentials',
    level: 'Beginner',
    duration: '6 Weeks',
    rating: 4.7,
    reviews: '836',
    price: 3499,
    image: '/images/reactjs.png',
  },
  {
    id: 3,
    badge: 'TRENDING',
    badgeColor: 'bg-emerald-500',
    title: 'Java Programming',
    level: 'Intermediate',
    duration: '8 Weeks',
    rating: 4.6,
    reviews: '1.1K',
    price: 3499,
    image: '/images/java.png',
  },
  {
    id: 4,
    badge: 'NEW',
    badgeColor: 'bg-fuchsia-500',
    title: 'Database Management',
    level: 'Intermediate',
    duration: '5 Weeks',
    rating: 4.5,
    reviews: '654',
    price: 2499,
    image: '/images/database.png',
  },
]

export default function Courses() {
  const [courses, setCourses] = useState(fallbackCourses)
  const [showLoginPopup, setShowLoginPopup] = useState(false)

  useEffect(() => {
    courseApi
      .getAll()
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length) {
          setCourses(res.data)
        }
      })
      .catch(() => {
        // Keep fallback data if backend is unavailable
      })
  }, [])

  return (
    <>
      <section id="courses" className="max-w-7xl mx-auto px-6 py-14 scroll-mt-24">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest mb-2">
              POPULAR COURSES
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Explore Our Top Courses
            </h2>
          </div>

          <button
            onClick={() => setShowLoginPopup(true)}
            className="hidden sm:block px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition"
          >
            View All Courses
          </button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {courses.map((c) => (
            <div
              key={c.id}
              className="card-glow rounded-xl overflow-hidden flex flex-col"
            >
              {/* Course Image */}
              {/* Course Image */}
              <div className="relative h-40">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover"
                  onError={() => console.log("Image not found:", c.image)}
                />

                <span
                  className={`absolute top-2 left-2 text-[10px] font-bold text-white px-2 py-1 rounded ${c.badgeColor || 'bg-primary'
                    }`}
                >
                  {c.badge}
                </span>
              </div>

              {/* Course Details */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-white text-sm font-semibold mb-2">
                  {c.title}
                </h3>

                <div className="flex items-center gap-3 text-muted text-[11px] mb-2">
                  <span className="flex items-center gap-1">
                    <Users size={12} />
                    {c.level}
                  </span>
                  <span>{c.duration}</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-amber-400 mb-3">
                  <Star size={12} fill="currentColor" />
                  {c.rating} ({c.reviews})
                </div>

                <p className="text-white font-bold mt-auto">
                  ₹{c.price.toLocaleString('en-IN')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showLoginPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="card-glow rounded-2xl p-6 w-[90%] max-w-md text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Login Required
            </h2>

            <p className="text-muted mb-5">
              Please login to view all available courses and access premium learning content.
            </p>

            <button
              onClick={() => setShowLoginPopup(false)}
              className="px-5 py-2 rounded-lg bg-brand-gradient text-white font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}