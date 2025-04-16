import React from 'react';
import { ShoppingBag, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
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

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigation('/')} className="text-left text-gray-300 hover:text-gold transition-colors w-full">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/about')} className="text-left text-gray-300 hover:text-gold transition-colors w-full">
                  À Propos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/catalog')} className="text-left text-gray-300 hover:text-gold transition-colors w-full">
                  Catalogue
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/contact')} className="text-left text-gray-300 hover:text-gold transition-colors w-full">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Collections</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigation('/catalog?category=Eliang Mine ga')} className="text-left text-gray-300 hover:text-gold transition-colors w-full">
                  Eliang Mine ga
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/catalog?category=Coupe Sirène')} className="text-left text-gray-300 hover:text-gold transition-colors w-full">
                  Coupe Sirène
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/catalog?category=La Mav')} className="text-left text-gray-300 hover:text-gold transition-colors w-full">
                  La Mav
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/catalog?category=Bango')} className="text-left text-gray-300 hover:text-gold transition-colors w-full">
                  Bango
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="text-gold" size={20} />
                <span>+241 04 52 23 65</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="text-gold" size={20} />
                <span>Quartier Louis, Libreville, Gabon</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Harley_Dev - Mode Africaine Moderne. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
