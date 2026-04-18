import React from 'react'

const Contact: React.FC = () => {
  const infoCards = [
    {
      title: 'Visit Us',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      content: (
        <div>
          <p className="font-semibold mb-2">Q36 Bus Stop</p>
          <p className="mb-2">253-11 Hillside Ave</p>
          <p className="mb-2">Bellerose, NY 11426</p>
          <p className="text-sm text-warm-600 mb-4">Corner of Little Neck Pkwy & Hillside Ave</p>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Madina+Halal+Food%2C+253-11+Hillside+Ave%2C+Bellerose%2C+NY+11426"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
          >
            Get Directions
          </a>
        </div>
      ),
    },
    {
      title: 'Hours',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <div>
          <p className="font-semibold text-primary-900 mb-3">Open Daily</p>
          <p className="text-2xl font-bold text-gold-600">9:00 AM - 5:00 AM</p>
          <p className="text-warm-600 mt-2">20 Hours of Service Every Day!</p>
        </div>
      ),
    },
    {
      title: 'Catering & Large Orders',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      content: (
        <div>
          <p className="text-warm-700 mb-4">
            Planning an event or feeding a crowd? We offer catering services and large order discounts.
          </p>
          <a 
            href="tel:+19174970774"
            className="btn-primary w-full"
          >
            Call Us
          </a>
        </div>
      ),
    },
  ]

  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Talk to <span className="text-gradient-gold">Madina</span>
          </h1>
          <p className="text-xl text-warm-200 max-w-2xl mx-auto">
            Get in touch with us for orders, questions, or catering inquiries
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-warm-50">
        <div className="container-custom">
          {/* Phone Call Centerpiece */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-fiery p-12 rounded-3xl text-white text-center shadow-2xl">
              <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-flame-flicker">
                <svg className="w-12 h-12 text-primary-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              
              <div className="mb-6">
                <p className="text-lg text-warm-200 mb-2">TAP TO CALL</p>
                <a 
                  href="tel:+19174970774"
                  className="text-5xl md:text-6xl font-playfair font-bold text-white hover:text-gold-300 transition-colors duration-200"
                >
                  (917) 497-0774
                </a>
              </div>
              
              <a 
                href="tel:+19174970774"
                className="btn-gold text-xl px-12 py-4"
              >
                Call Now
              </a>
              
              <p className="text-warm-200 mt-4 text-sm">
                Click to call or save this number for later
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoCards.map((card, index) => (
              <div key={index} className="card p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 text-primary-900">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">{card.title}</h3>
                <div className="text-center">
                  {card.content}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-warm max-w-2xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold text-primary-900 mb-4">
                Have a question?
              </h3>
              <p className="text-warm-600 mb-6">
                We're here to help! Whether you need to place a large order, want to know about our 
                catering options, or have questions about our menu, don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+19174970774"
                  className="btn-primary"
                >
                  Call Us
                </a>
                <a 
                  href="https://www.doordash.com/store/madina-halal-food-bellerose-801402/1129135/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Order Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
