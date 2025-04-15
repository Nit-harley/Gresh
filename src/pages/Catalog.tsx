import React, { useState, useRef } from 'react';
import { products, categories } from '../data';
import type { Product } from '../types';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const touchStartX = useRef<number | null>(null); // ref au lieu de state

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleWhatsApp = (product: Product) => {
    const message = `Bonjour, je suis intéressé(e) par ${product.name} à ${product.price} FCFA`;
    const whatsappUrl = `https://wa.me/+24104522365?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openModal = (images: string[]) => {
    setModalImages(images);
    setCarouselIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
    setCarouselIndex(0);
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % modalImages.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext(); // Swipe gauche
    } else if (diff < -50) {
      handlePrev(); // Swipe droite
    }

    touchStartX.current = null;
  };

  return (
    <div className="bg-primary-light min-h-screen">
      {/* Hero Section */}
      <div
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("../images/contactcover.jpeg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Catalogue</h1>
            <p className="text-lg md:text-xl">Nos tenues sont faites de wax hollandais et de organza et la couture de base est faite en élastique, alors découvrez des tenues africaines modernes qui vous feront rayonner</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex gap-4 overflow-x-auto md:justify-center scrollbar-hide mb-10 pb-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex-shrink-0 px-6 py-2 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 ${selectedCategory === 'all' ? 'bg-gold text-primary' : 'bg-white text-primary border-2 border-gold hover:bg-gold hover:text-primary'}`}
          >
            Tous
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-6 py-2 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 ${selectedCategory === category ? 'bg-gold text-primary' : 'bg-white text-primary border-2 border-gold hover:bg-gold hover:text-primary'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover cursor-pointer"
                onClick={() => openModal(product.images || [product.image])}
              />
              <div className="p-4 flex flex-col">
                <h3 className="text-xl font-semibold text-primary mb-3">{product.name}</h3>
                <p className="text-gray-700 text-sm mb-4 flex-1">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gold">{product.price} FCFA</span>
                  <button
                    onClick={() => handleWhatsApp(product)}
                    className="bg-accent-green text-white px-6 py-2 rounded-full hover:bg-accent-orange transition-colors text-sm font-medium"
                  >
                    Acheter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with carousel */}
      {isModalOpen && modalImages.length > 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative max-w-4xl mx-4 w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <div className="flex justify-center items-center space-x-4 sm:space-x-6">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="bg-white bg-opacity-30 p-4 rounded-full text-white hover:bg-opacity-70 transition duration-200 sm:text-xl text-lg"
              >
                &lt;
              </button>

              {/* Image */}
              <img
                src={modalImages[carouselIndex]}
                alt="Enlarged product"
                className="w-full max-h-[80vh] object-contain rounded-lg transition-transform duration-300 ease-in-out"
              />

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="bg-white bg-opacity-30 p-4 rounded-full text-white hover:bg-opacity-70 transition duration-200 sm:text-xl text-lg"
              >
                &gt;
              </button>
            </div>

            {/* Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4">
              {modalImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${carouselIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
