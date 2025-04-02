import React from 'react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589363360147-4f2d51541551?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Histoire</h1>
            <p className="text-xl">Découvrez l'histoire de Gresh et notre passion pour la mode africaine</p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">Notre Vision</h2>
            <p className="text-gray-600 mb-8">
              Fondée en 2020 à Libreville, Gresh est née d'une passion pour la mode africaine et d'une vision 
              de moderniser les tenues traditionnelles. Notre objectif est de créer des vêtements qui célèbrent 
              la richesse de notre culture tout en embrassant les tendances contemporaines.
            </p>
            <p className="text-gray-600 mb-8">
              Chaque pièce que nous créons raconte une histoire, celle de notre héritage africain 
              réinventé pour le monde moderne. Nous travaillons avec les meilleurs artisans locaux 
              et utilisons des tissus wax de haute qualité pour garantir des créations uniques et durables.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gold">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary-light rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gold">Authenticité</h3>
              <p className="text-gray-300">
                Nous restons fidèles à nos racines tout en innovant dans nos designs.
              </p>
            </div>
            <div className="text-center p-6 bg-primary-light rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gold">Excellence</h3>
              <p className="text-gray-300">
                Chaque détail compte dans la création de nos pièces.
              </p>
            </div>
            <div className="text-center p-6 bg-primary-light rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gold">Durabilité</h3>
              <p className="text-gray-300">
                Nous nous engageons à utiliser des pratiques responsables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Marie Koumba"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-gold"
              />
              <h3 className="text-xl font-semibold text-primary">Marie Koumba</h3>
              <p className="text-gold">Fondatrice & Directrice Créative</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Jean Moussa"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-gold"
              />
              <h3 className="text-xl font-semibold text-primary">Jean Moussa</h3>
              <p className="text-gold">Chef Designer</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Sarah Ndong"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-gold"
              />
              <h3 className="text-xl font-semibold text-primary">Sarah Ndong</h3>
              <p className="text-gold">Responsable Production</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}