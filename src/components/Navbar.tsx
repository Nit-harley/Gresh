import React from 'react';
import { ShoppingBag, Phone, Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
   { label: 'Catalogue', path: '/catalog' },
  { label: 'À Propos', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="bg-primary text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="text-gold" size={32} />
            <h1 className="text-3xl font-bold">Gresh</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-gold transition-colors ${
                  location.pathname === item.path ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Phone className="text-gold" size={24} />
            <span>+241 04 52 23 65</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 hover:text-gold transition-colors ${
                  location.pathname === item.path ? 'text-gold' : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 pt-4 border-t border-gray-700 mt-4">
              <Phone className="text-gold" size={20} />
              <span>+241 77 98 23 45</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}