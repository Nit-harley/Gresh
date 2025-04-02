import React from 'react';
import { ShoppingBag, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="text-gold" size={32} />
              <span className="text-2xl font-bold">Gresh</span>
            </div>
            <p className="text-gray-300">
              Votre destination pour la mode africaine moderne à Libreville. Nous fusionnons
              tradition et contemporain pour créer des pièces uniques.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors">À Propos</Link></li>
              <li><Link to="/catalog" className="text-gray-300 hover:text-gold transition-colors">Catalogue</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Catégories</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog?category=Hommes" className="text-gray-300 hover:text-gold transition-colors">Hommes</Link></li>
              <li><Link to="/catalog?category=Femmes" className="text-gray-300 hover:text-gold transition-colors">Femmes</Link></li>
              <li><Link to="/catalog?category=Couples" className="text-gray-300 hover:text-gold transition-colors">Couples</Link></li>
              <li><Link to="/catalog?category=Accessoires" className="text-gray-300 hover:text-gold transition-colors">Accessoires</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="text-gold" size={20} />
                <span>+241 77 98 23 45</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="text-gold" size={20} />
                <span>contact@gresh.ga</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="text-gold" size={20} />
                <span>Quartier Louis, Libreville, Gabon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Gresh - Mode Africaine Moderne. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}