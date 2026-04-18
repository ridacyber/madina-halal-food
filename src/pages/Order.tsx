import React from 'react'
import food3 from '../assets/food-3.jpg'
import food5 from '../assets/food-5.jpg'

const Order: React.FC = () => {
  const perks = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast Delivery',
      description: 'Get your food delivered hot and fresh in minutes',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Open Late',
      description: 'Available 20 hours daily from 9 AM to 5 AM',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Made Fresh',
      description: 'Every order is prepared fresh when you order',
    },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-warm-50"></div>
        <div className="absolute inset-0 opacity-5">
          <img 
            src={food5} 
            alt="Madina Halal Food Background" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container-custom py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="badge bg-accent-100 text-accent-800 animate-fade-up">
              <svg className="w-4 h-4 mr-2 animate-flame-flicker" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12.39 5.21c.33-.67.15-1.48-.38-1.95-.53-.47-1.29-.54-1.89-.18l-1.12.68c-.33.2-.71.3-1.09.3H6.5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h.41c.38 0 .76.1 1.09.3l1.12.68c.6.36 1.36.29 1.89-.18.53-.47.71-1.28.38-1.95l-.68-1.37c-.2-.4-.2-.86 0-1.26l.68-1.37z"/>
              </svg>
              SKIP THE LINE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary-900 mb-4">
            Feeling hungry yet?
          </h1>
          
          <p className="text-2xl text-gold-600 italic font-playfair mb-8">
            Don't hesitate &mdash; order now.
          </p>
          
          <p className="text-warm-600 text-lg max-w-2xl mx-auto mb-12">
            Get Madina delivered straight to your door, hot and fresh, through DoorDash.
          </p>
          
          <a 
            href="https://www.doordash.com/store/madina-halal-food-bellerose-801402/1129135/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-2xl px-16 py-6 mb-4 inline-block"
          >
            Order on DoorDash
          </a>
          
          <p className="text-warm-500 text-sm">
            Opens DoorDash in a new tab
          </p>
        </div>

        {/* Perk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {perks.map((perk, index) => (
            <div key={index} className="card p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 text-primary-900">
                {perk.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">{perk.title}</h3>
              <p className="text-warm-600">{perk.description}</p>
            </div>
          ))}
        </div>

        {/* Food Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img 
              src={food3} 
              alt="Fresh Halal Food" 
              className="rounded-2xl shadow-2xl hover-lift"
            />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center animate-steam-rise">
              <svg className="w-10 h-10 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12.39 5.21c.33-.67.15-1.48-.38-1.95-.53-.47-1.29-.54-1.89-.18l-1.12.68c-.33.2-.71.3-1.09.3H6.5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h.41c.38 0 .76.1 1.09.3l1.12.68c.6.36 1.36.29 1.89-.18.53-.47.71-1.28.38-1.95l-.68-1.37c-.2-.4-.2-.86 0-1.26l.68-1.37z"/>
              </svg>
            </div>
          </div>
          
          <div className="relative md:mt-12">
            <img 
              src={food5} 
              alt="Halal Food Delivery" 
              className="rounded-2xl shadow-2xl hover-lift"
            />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-fiery rounded-full flex items-center justify-center animate-flame-flicker">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12.39 5.21c.33-.67.15-1.48-.38-1.95-.53-.47-1.29-.54-1.89-.18l-1.12.68c-.33.2-.71.3-1.09.3H6.5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h.41c.38 0 .76.1 1.09.3l1.12.68c.6.36 1.36.29 1.89-.18.53-.47.71-1.28.38-1.95l-.68-1.37c-.2-.4-.2-.86 0-1.26l.68-1.37z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-burgundy p-12 rounded-3xl text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Still thinking about it?
            </h2>
            <p className="text-warm-200 text-lg mb-8">
              Your favorite halal food is just a few clicks away. Don't let hunger win!
            </p>
            <a 
              href="https://www.doordash.com/store/madina-halal-food-bellerose-801402/1129135/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xl px-12 py-4"
            >
              Order Now &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
