import React, { useState } from 'react';
import { products, categories } from '../data';
import type { Product } from '../types';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: Product) => setCartItems(prev => [...prev, product]);
  const removeFromCart = (index: number) =>
    setCartItems(prev => prev.filter((_, i) => i !== index));
  const getTotal = () => cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCartWhatsApp = () => {
    if (cartItems.length === 0) return;
    const message = `Bonjour, je suis intéressé(e) par les articles suivants :\n\n${cartItems
      .map((item, i) => `${i + 1}. ${item.name} - ${item.price} FCFA`)
      .join('\n')}\n\nTotal : ${getTotal()} FCFA`;
    const whatsappUrl = `https://wa.me/+24104522365?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openImageModal = (images: string[]) => {
    setModalImages(images);
    setCarouselIndex(0);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setModalImages([]);
    setCarouselIndex(0);
  };

  const handleNext = () =>
    setCarouselIndex((prev) => (prev + 1) % modalImages.length);
  const handlePrev = () =>
    setCarouselIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);

  return (
    <div className="bg-primary-light min-h-screen relative">
      {/* Hero */}
      <div className="h-[400px] bg-cover bg-center relative" style={{ backgroundImage: 'url("../images/contactcover.jpeg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Catalogue</h1>
            <p className="text-lg md:text-xl">
              Nos tenues sont faites de wax hollandais et d’organza avec une couture de base élastique. Découvrez nos tenues africaines modernes qui vous feront rayonner.
            </p>
          </div>
        </div>
      </div>

      {/* Catégories */}
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex gap-4 overflow-x-auto md:justify-center scrollbar-hide mb-10 pb-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex-shrink-0 px-6 py-2 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gold text-primary'
                : 'bg-white text-primary border-2 border-gold hover:bg-gold hover:text-primary'
            }`}
          >
            Tous
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-6 py-2 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold text-primary'
                  : 'bg-white text-primary border-2 border-gold hover:bg-gold hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover cursor-pointer"
                onClick={() => openImageModal(product.images || [product.image])}
              />
              <div className="p-4 flex flex-col">
                <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>
                <p className="text-gray-700 text-sm mb-4 flex-1">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gold">{product.price} FCFA</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-accent-green text-white px-4 py-2 rounded-full hover:bg-accent-orange text-sm"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Panier Mobile - icône flottante */}
      {cartItems.length > 0 && (
        <button
          onClick={() => setIsCartModalOpen(true)}
          className="fixed bottom-4 right-4 bg-gold text-primary px-4 py-3 rounded-full shadow-lg z-50 md:hidden"
        >
          🛒 {cartItems.length}
        </button>
      )}

      {/* Modal Panier Mobile */}
      {isCartModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center md:hidden">
          <div className="bg-white w-full h-full p-6 overflow-y-auto rounded-t-3xl relative">
            <button
              onClick={() => setIsCartModalOpen(false)}
              className="absolute top-4 right-4 text-3xl text-black"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-primary">🛒 Votre Panier</h2>
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Le panier est vide.</p>
            ) : (
              <>
                <ul className="mb-6">
                  {cartItems.map((item, index) => (
                    <li key={index} className="flex justify-between items-center mb-3">
                      <span>{item.name} - {item.price} FCFA</span>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 font-bold text-lg"
                      >
                        &times;
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mb-4">
                  <strong>Total :</strong>
                  <span className="text-gold font-bold">{getTotal()} FCFA</span>
                </div>
                <button
                  onClick={handleCartWhatsApp}
                  className="w-full bg-gold text-primary py-3 rounded-full font-semibold hover:bg-primary hover:text-white"
                >
                  Commander via WhatsApp
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Panier Desktop */}
      {cartItems.length > 0 && (
        <div className="hidden md:block fixed bottom-4 right-4 bg-white border border-gold shadow-lg rounded-xl p-4 max-w-sm w-full z-50">
          <h2 className="text-lg font-semibold mb-3 text-primary">🛒 Votre Panier</h2>
          <ul className="mb-4 max-h-60 overflow-y-auto">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <span className="text-sm">{item.name} - {item.price} FCFA</span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700 text-lg font-bold"
                  title="Supprimer"
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-3">
            <strong>Total :</strong>
            <span className="text-gold font-semibold">{getTotal()} FCFA</span>
          </div>
          <button
            onClick={handleCartWhatsApp}
            className="bg-gold text-primary font-semibold w-full py-2 rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Commander via WhatsApp
          </button>
        </div>
      )}

      {/* Modal Image Carousel */}
      {isImageModalOpen && modalImages.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
            >
              &times;
            </button>
            <div className="relative flex items-center justify-center">
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-3 rounded-full z-30"
              >
                &lt;
              </button>
              <img
                src={modalImages[carouselIndex]}
                alt="Produit"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-3 rounded-full z-30"
              >
                &gt;
              </button>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {modalImages.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${carouselIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

