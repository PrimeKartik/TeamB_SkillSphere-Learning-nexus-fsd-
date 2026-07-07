import { Construction } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="card-glow rounded-2xl p-10 text-center max-w-lg">
        <Construction
          size={60}
          className="mx-auto text-primary mb-4"
        />

        <h1 className="text-3xl font-bold text-white mb-3">
          Dashboard Coming Soon 🚀
        </h1>

        <p className="text-muted">
          We're currently building your personalized learning dashboard.
          Soon you'll be able to track progress, manage courses,
          view certificates, and much more.
        </p>
      </div>
    </div>
  )
}