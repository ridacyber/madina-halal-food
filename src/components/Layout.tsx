import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-warm border-b border-warm-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-gold-600 p-1">
                <img 
                  src={logo} 
                  alt="Madina Halal Food" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="font-playfair text-xl font-bold text-primary-900">
                Madina Halal Food
              </span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className={`nav-link ${isActive('/menu') ? 'nav-link-active' : ''}`}
              >
                Menu
              </Link>
              <Link 
                to="/location" 
                className={`nav-link ${isActive('/location') ? 'nav-link-active' : ''}`}
              >
                Location
              </Link>
              <Link 
                to="/order" 
                className={`nav-link ${isActive('/order') ? 'nav-link-active' : ''}`}
              >
                Order Online
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
              >
                Contact
              </Link>
            </div>
            
            {/* Phone CTA */}
            <a 
              href="tel:+19174970774" 
              className="bg-gradient-gold text-primary-900 px-6 py-2 rounded-full font-semibold hover:shadow-warm transform hover:scale-105 transition-all duration-300"
            >
              (917) 497-0774
            </a>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-warm-700 hover:text-primary-900">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-primary-900 text-white">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-gold-600 p-1">
                  <img 
                    src={logo} 
                    alt="Madina Halal Food" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="font-playfair text-2xl font-bold">
                  Madina Halal Food
                </span>
              </div>
              <p className="text-warm-200 mb-4">
                Authentic halal street food served fresh daily from our cart in Bellerose, Queens.
              </p>
              <div className="flex items-center space-x-4">
                <a href="tel:+19174970774" className="text-gold-400 hover:text-gold-300 font-semibold">
                  (917) 497-0774
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-warm-200 hover:text-gold-400 transition-colors">Home</Link></li>
                <li><Link to="/menu" className="text-warm-200 hover:text-gold-400 transition-colors">Menu</Link></li>
                <li><Link to="/location" className="text-warm-200 hover:text-gold-400 transition-colors">Location</Link></li>
                <li><Link to="/order" className="text-warm-200 hover:text-gold-400 transition-colors">Order Online</Link></li>
                <li><Link to="/contact" className="text-warm-200 hover:text-gold-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Address */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Visit Us</h3>
              <address className="text-warm-200 not-italic">
                <p className="mb-2">Q36 Bus Stop</p>
                <p className="mb-2">253-11 Hillside Ave</p>
                <p className="mb-2">Bellerose, NY 11426</p>
                <p className="text-sm">Corner of Little Neck Pkwy & Hillside Ave</p>
              </address>
              <div className="mt-4">
                <p className="text-gold-400 font-semibold">Open Daily</p>
                <p className="text-warm-200">9:00 AM - 5:00 AM</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-warm-700 mt-8 pt-8 text-center">
            <p className="text-warm-300 text-sm">
              © 2026 Madina Halal Food. All rights reserved. | Proudly Designed by TawakalStudio
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
