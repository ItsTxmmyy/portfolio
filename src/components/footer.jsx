import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <p>&copy; {currentYear} Tommy Le.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer