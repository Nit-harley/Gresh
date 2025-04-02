import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://africanpeopleemergence.wordpress.com/wp-content/uploads/2019/02/main-1024x687-1.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Mode Africaine Moderne</h2>
            <p className="text-xl md:text-2xl mb-8">Découvrez notre collection unique de tenues en pagne wax, où tradition rencontre modernité</p>
            <Link
              to="/catalog"
              className="inline-flex items-center space-x-2 bg-gold text-primary px-8 py-3 rounded-full hover:bg-gold-light transition-colors"
            >
              <span>Voir le Catalogue</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Pourquoi Choisir Gresh?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-gold transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-primary">Design Unique</h3>
              <p className="text-gray-600">Chaque pièce est créée avec soin pour refléter votre personnalité tout en célébrant notre héritage africain.</p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-gold transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-primary">Qualité Premium</h3>
              <p className="text-gray-600">Nous utilisons uniquement les meilleurs pagnes wax et matériaux pour garantir durabilité et confort.</p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-gold transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-primary">Sur Mesure</h3>
              <p className="text-gray-600">Chaque vêtement peut être ajusté selon vos mesures pour une tenue parfaitement adaptée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gold">Nos Créations Populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured products will be mapped here */}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="inline-flex items-center space-x-2 bg-gold text-primary px-8 py-3 rounded-full hover:bg-gold-light transition-colors"
            >
              <span>Voir Plus</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Ce Que Disent Nos Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-primary-light p-6 rounded-lg text-white">
              <p className="text-gray-300 mb-4">"J'ai trouvé la robe parfaite pour mon mariage civil. Le design était unique et le service impeccable!"</p>
              <p className="font-semibold text-gold">Marie K.</p>
            </div>
            <div className="bg-primary-light p-6 rounded-lg text-white">
              <p className="text-gray-300 mb-4">"Les tenues couple que nous avons commandées étaient magnifiques. Tout le monde nous a complimentés!"</p>
              <p className="font-semibold text-gold">Pierre et Sarah M.</p>
            </div>
            <div className="bg-primary-light p-6 rounded-lg text-white">
              <p className="text-gray-300 mb-4">"La qualité des tissus et la finition sont exceptionnelles. Je recommande vivement!"</p>
              <p className="font-semibold text-gold">Jean B.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}