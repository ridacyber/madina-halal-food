import React from 'react'

const Location: React.FC = () => {
  const hours = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ]

  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Find the <span className="text-gradient-gold">Cart</span>
          </h1>
          <p className="text-xl text-warm-200 max-w-2xl mx-auto">
            Visit us at our corner location in Bellerose, Queens for the best halal street food in NYC
          </p>
        </div>
      </section>

      {/* Cart Photo Section */}
      <section className="py-16 bg-warm-50">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16">
            {/* Placeholder for cart photo - will need to be updated with actual cart image */}
            <div className="h-96 bg-gradient-to-br from-primary-800 to-primary-600 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-24 h-24 mx-auto mb-4 text-gold-400 animate-flame-flicker" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.39 5.21c.33-.67.15-1.48-.38-1.95-.53-.47-1.29-.54-1.89-.18l-1.12.68c-.33.2-.71.3-1.09.3H6.5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h.41c.38 0 .76.1 1.09.3l1.12.68c.6.36 1.36.29 1.89-.18.53-.47.71-1.28.38-1.95l-.68-1.37c-.2-.4-.2-.86 0-1.26l.68-1.37z"/>
                </svg>
                <h3 className="text-2xl font-playfair font-bold mb-2">The Madina Cart</h3>
                <p className="text-warm-200">Open daily, late into the night</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <div className="text-center text-white">
                <h3 className="text-3xl font-playfair font-bold mb-2">The Madina Cart</h3>
                <p className="text-lg text-warm-200">Open daily, late into the night</p>
              </div>
            </div>
          </div>

          {/* Two Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Info Cards */}
            <div className="space-y-8">
              {/* Address Card */}
              <div className="card p-8">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-primary-900 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-primary-900">Address</h3>
                </div>
                <address className="text-warm-700 not-italic mb-4">
                  <p className="font-semibold">Q36 Bus Stop</p>
                  <p>253-11 Hillside Ave</p>
                  <p>Bellerose, NY 11426</p>
                  <p className="text-sm text-warm-600 mt-2">Corner of Little Neck Pkwy & Hillside Ave</p>
                </address>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Madina+Halal+Food%2C+253-11+Hillside+Ave%2C+Bellerose%2C+NY+11426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Get Directions
                </a>
              </div>

              {/* Hours Card */}
              <div className="card p-8">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-primary-900 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-primary-900">Hours</h3>
                </div>
                <div className="space-y-2">
                  {hours.map((day) => (
                    <div key={day} className="flex justify-between py-2 border-b border-warm-100 last:border-b-0">
                      <span className="font-medium text-warm-900">{day}</span>
                      <span className="text-primary-900 font-bold">9:00 AM - 5:00 AM</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-gold-100 rounded-lg">
                  <p className="text-gold-800 font-semibold text-center">
                    Open 20 Hours Daily!
                  </p>
                </div>
              </div>

              {/* Call Ahead Block */}
              <div className="bg-gradient-burgundy p-8 rounded-2xl text-white text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-2xl font-playfair font-bold mb-2">Call Ahead</h3>
                <p className="text-warm-200 mb-4">Place your order for faster pickup</p>
                <a 
                  href="tel:+19174970774"
                  className="btn-gold w-full"
                >
                  (917) 497-0774
                </a>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="card overflow-hidden">
                <div className="aspect-w-16 aspect-h-12">
                  <iframe
                    src="https://www.google.com/maps?q=Madina+Halal+Food%2C+253-11+Hillside+Ave%2C+Bellerose%2C+NY+11426&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-96 lg:h-[500px]"
                    title="Madina Halal Food Location Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Location
