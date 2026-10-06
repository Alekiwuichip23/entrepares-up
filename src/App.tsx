import { useState } from 'react'
import DashboardPage from './pages/DashboardPage'
import LandingPage from './pages/LandingPage'

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false)
  const [initialSearch, setInitialSearch] = useState('')

  function openDashboard(query = '') {
    setInitialSearch(query)
    setShowDashboard(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return showDashboard ? (
    <DashboardPage initialSearch={initialSearch} onBack={() => setShowDashboard(false)} />
  ) : (
    <LandingPage onEnter={openDashboard} />
  )
}
