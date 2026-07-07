import { Users, BookOpen, UserCheck, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, value: '10K+', label: 'Happy Learners' },
  { icon: BookOpen, value: '200+', label: 'Expert Courses' },
  { icon: UserCheck, value: '50+', label: 'Expert Instructors' },
  { icon: TrendingUp, value: '95%', label: 'Success Rate' },
]

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-panel/40">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3 justify-center md:justify-start">
            <Icon size={20} className="text-primary" />
            <div>
              <p className="text-white font-bold">{value}</p>
              <p className="text-muted text-xs">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
