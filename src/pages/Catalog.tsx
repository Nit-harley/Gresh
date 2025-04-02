import React, { useState } from 'react';
import { products, categories } from '../data';
import type { Product } from '../types';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleWhatsApp = (product: Product) => {
    const message = `Bonjour, je suis intéressé(e) par ${product.name} à ${product.price} FCFA`;
    const whatsappUrl = `https://wa.me/+24177982345?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-primary-light min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[300px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534702718572-448a8d5df8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Catalogue</h1>
            <p className="text-xl">Découvrez notre collection de tenues africaines modernes</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={'px-6 py-2 rounded-full transition-colors ' + (
              selectedCategory === 'all'
                ? 'bg-gold text-primary'
                : 'bg-white text-primary border border-gold hover:bg-gold hover:text-primary'
            )}
          >
            Tous
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={'px-6 py-2 rounded-full transition-colors ' + (
                selectedCategory === category
                  ? 'bg-gold text-primary'
                  : 'bg-white text-primary border border-gold hover:bg-gold hover:text-primary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gold">{product.price} FCFA</span>
                  <button
                    onClick={() => handleWhatsApp(product)}
                    className="bg-accent-green text-white px-6 py-2 rounded-full hover:bg-accent-orange transition-colors"
                  >
                    Acheter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}