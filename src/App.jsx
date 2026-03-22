import { useState, useEffect } from 'react'
import './index.css'
import TopHeader from './components/layout/TopHeader'
import BottomNav from './components/layout/BottomNav'
import HomePage from './pages/HomePage'
import PatientsPage from './pages/PatientsPage'
import TriagePage from './pages/TriagePage'
import AnalyticsPage from './pages/AnalyticsPage'
import SettingsPage from './pages/SettingsPage'
import LoginPage from './pages/LoginPage'

const PAGE_TITLES = {
  home: 'Dashboard',
  patients: 'Patients',
  triage: 'New Triage',
  analytics: 'Analytics',
  settings: 'Settings',
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activePage, setActivePage] = useState('home')

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage onNavigate={setActivePage} />
      case 'patients': return <PatientsPage />
      case 'triage': return <TriagePage />
      case 'analytics': return <AnalyticsPage />
      case 'settings': return <SettingsPage isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} onLogout={() => { setIsLoggedIn(false); setActivePage('home'); }} />
      default: return <HomePage onNavigate={setActivePage} />
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100dvh',
        maxWidth: '480px',
        margin: '0 auto',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {!isLoggedIn ? (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <TopHeader title={PAGE_TITLES[activePage]} />
          <div className="page-content" style={{ marginTop: '72px' }}>
            {renderPage()}
          </div>
          <BottomNav activePage={activePage} onNavigate={setActivePage} />
        </>
      )}
    </div>
  )
}

export default App
