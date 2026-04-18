import React from 'react'
import { Link } from 'react-router-dom'
import food5 from '../assets/food-5.jpg'
import food1 from '../assets/food-1.jpg'
import food2 from '../assets/food-2.jpg'
import food3 from '../assets/food-3.jpg'
import food4 from '../assets/food-4.jpg'

const Home: React.FC = () => {
  const featuredDishes = [
    {
      id: 1,
      name: 'Chicken Over Rice',
      price: '$6.99',
      tag: 'Best Seller',
      image: food1,
    },
    {
      id: 2,
      name: 'Lamb Gyro',
      price: '$11.00',
      tag: 'Sizzling',
      image: food2,
    },
    {
      id: 3,
      name: 'Combo Platter',
      price: '$7.50',
      tag: 'Crowd Favorite',
      image: food3,
    },
    {
      id: 4,
      name: 'Falafel Platter',
      price: '$12.99',
      tag: 'Vegetarian',
      image: food4,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={food5} 
            alt="Madina Halal Food" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-overlay-dark"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="badge bg-gold-100 text-gold-800 animate-fade-up">
              <svg className="w-4 h-4 mr-2 animate-flame-flicker" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12.39 5.21c.33-.67.15-1.48-.38-1.95-.53-.47-1.29-.54-1.89-.18l-1.12.68c-.33.2-.71.3-1.09.3H6.5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h.41c.38 0 .76.1 1.09.3l1.12.68c.6.36 1.36.29 1.89-.18.53-.47.71-1.28.38-1.95l-.68-1.37c-.2-.4-.2-.86 0-1.26l.68-1.37z"/>
              </svg>
              AUTHENTIC HALAL STREET FOOD
            </span>
          </div>
          
          <h1 className="section-title text-white mb-6 animate-fade-up">
            Sizzling. Savory. <span className="text-gradient-gold">Straight from the Cart.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 animate-fade-up max-w-3xl mx-auto leading-relaxed">
            Hand-carved chicken & lamb over saffron rice, smoky kofta, crispy falafel and warm gyros 
            &mdash; fired up fresh on the corner of Hillside & Little Neck.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-up">
            <a 
              href="https://www.doordash.com/store/madina-halal-food-bellerose-801402/1129135/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Order on DoorDash
            </a>
            <Link to="/menu" className="btn-secondary">
              See the Menu
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up">
            <span className="badge bg-white/20 text-white backdrop-blur-sm">
              Open Daily 9 AM &ndash; 5 AM
            </span>
            <span className="badge bg-white/20 text-white backdrop-blur-sm">
              Bellerose, Queens NY
            </span>
            <span className="badge bg-white/20 text-white backdrop-blur-sm">
              100% Halal
            </span>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-warm-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Featured Dishes</h2>
            <p className="text-warm-600 text-lg max-w-2xl mx-auto">
              Our most popular items, fired up fresh and served with pride
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="card hover-lift group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="badge bg-gold-100 text-gold-800 text-sm">
                      {dish.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{dish.name}</h3>
                    <p className="text-gold-300 font-bold">{dish.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Strip */}
      <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Real halal. <span className="text-gradient-gold">Real flavor.</span> Real fast.
              </h2>
              <p className="text-warm-200 text-lg mb-8 leading-relaxed">
                For years, we've been serving the Bellerose community with authentic halal street food 
                that's cooked with passion and served with pride. Every dish is prepared fresh daily using 
                traditional recipes and the finest ingredients.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold-400 mb-2">100%</div>
                  <div className="text-warm-300 font-medium">Halal Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold-400 mb-2">20hr</div>
                  <div className="text-warm-300 font-medium">Open Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold-400 mb-2">20+</div>
                  <div className="text-warm-300 font-medium">Menu Items</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={food2} 
                alt="Madina Halal Food" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center animate-flame-flicker">
                <svg className="w-12 h-12 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.39 5.21c.33-.67.15-1.48-.38-1.95-.53-.47-1.29-.54-1.89-.18l-1.12.68c-.33.2-.71.3-1.09.3H6.5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h.41c.38 0 .76.1 1.09.3l1.12.68c.6.36 1.36.29 1.89-.18.53-.47.71-1.28.38-1.95l-.68-1.37c-.2-.4-.2-.86 0-1.26l.68-1.37z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-warm-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-6">
            Hungry yet? <span className="text-gradient-gold">We thought so.</span>
          </h2>
          <p className="text-warm-600 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait another minute to satisfy your cravings. Order now and get the best halal 
            street food delivered right to your door.
          </p>
          <a 
            href="https://www.doordash.com/store/madina-halal-food-bellerose-801402/1129135/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xl px-12 py-6"
          >
            Order Now on DoorDash
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
