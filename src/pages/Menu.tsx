import React from 'react'

const Menu: React.FC = () => {
  const menuData = {
    bundles: [
      {
        name: 'Chicken & Lamb Combo Over Rice Bundle',
        price: '$15.99',
        note: 'Each bundle is served with your choice of Coca-Cola product'
      },
      {
        name: 'Chicken Over Rice Bundle',
        price: '$14.99',
      },
      {
        name: 'Lamb Over Rice Bundle',
        price: '$14.99',
      },
    ],
    platters: [
      {
        name: 'Chicken Over Rice Platter',
        price: '$6.99',
      },
      {
        name: 'Lamb Over Rice Platter',
        price: '$6.99',
      },
      {
        name: 'Chicken Kofta Over Rice Platter',
        price: '$7.99',
      },
      {
        name: 'Chicken & Lamb Combo Over Rice Platter',
        price: '$7.50',
      },
      {
        name: 'Chicken Salad Platter',
        price: '$12.99',
      },
      {
        name: 'Lamb Salad Platter',
        price: '$12.99',
      },
      {
        name: 'Falafel Over Rice Platter',
        price: '$12.99',
      },
      {
        name: 'Falafel Salad Platter',
        price: '$12.99',
      },
      {
        name: 'Vegetable Platter',
        price: '',
      },
    ],
    sandwiches: [
      {
        name: 'Chicken Gyro',
        price: '$11.00',
      },
      {
        name: 'Lamb Gyro',
        price: '$11.00',
      },
      {
        name: 'Chicken & Lamb Combo Sandwich',
        price: '$6.50',
      },
      {
        name: 'Kofta Kebab Sandwich',
        price: '$6.50',
      },
      {
        name: 'Falafel Sandwich',
        price: '$11.00',
      },
    ],
    beverages: [
      {
        name: 'Soda',
        price: '$2.00',
      },
      {
        name: 'Iced Tea',
        price: '$2.00',
      },
      {
        name: 'Water',
        price: '$2.00',
      },
    ],
  }

  const MenuSection: React.FC<{
    title: string
    tagline: string
    items: typeof menuData.bundles
  }> = ({ title, tagline, items }) => (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <svg className="w-8 h-8 text-accent-600 animate-flame-flicker" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12.39 5.21c.33-.67.15-1.48-.38-1.95-.53-.47-1.29-.54-1.89-.18l-1.12.68c-.33.2-.71.3-1.09.3H6.5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h.41c.38 0 .76.1 1.09.3l1.12.68c.6.36 1.36.29 1.89-.18.53-.47.71-1.28.38-1.95l-.68-1.37c-.2-.4-.2-.86 0-1.26l.68-1.37z"/>
          </svg>
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary-900">
              {title}
            </h2>
            <p className="text-warm-600 italic mt-1">{tagline}</p>
          </div>
        </div>
        <span className="badge badge-primary">
          {items.length} items
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="flex-1">
              <div className="menu-item-name">{item.name}</div>
              {item.note && (
                <div className="menu-item-description">{item.note}</div>
              )}
            </div>
            <div className="dotted-leader"></div>
            <div className="menu-item-price">{item.price || 'Market Price'}</div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-accent-900"></div>
        </div>
        
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Made with Fire <span className="text-gradient-gold">& Love</span>
          </h1>
          <p className="text-xl text-warm-200 max-w-2xl mx-auto">
            Every dish is prepared fresh daily with authentic halal ingredients 
            and traditional recipes passed down through generations.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 bg-warm-50">
        <div className="container-custom">
          <MenuSection
            title="Bundles"
            tagline="Complete meals with drinks included"
            items={menuData.bundles}
          />
          
          <MenuSection
            title="Platters"
            tagline="Generous portions over fragrant saffron rice"
            items={menuData.platters}
          />
          
          <MenuSection
            title="Sandwiches"
            tagline="Wrapped in warm pita with fresh toppings"
            items={menuData.sandwiches}
          />
          
          <MenuSection
            title="Beverages"
            tagline="Refreshing drinks to complement your meal"
            items={menuData.beverages}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-fiery text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to <span className="text-white">dig in?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Skip the line and get your favorite dishes delivered hot and fresh to your door.
          </p>
          <a 
            href="https://www.doordash.com/store/madina-halal-food-bellerose-801402/1129135/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xl px-12 py-6"
          >
            Order on DoorDash
          </a>
        </div>
      </section>
    </div>
  )
}

export default Menu
