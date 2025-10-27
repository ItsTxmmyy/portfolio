import React, { useState, useEffect } from 'react'

const navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '/faris_eltayib_resume.pdf', target: '_blank' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <a href="#home">Tommy Le</a>
          </div>
          
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
                target={item.target}
                rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default navbar