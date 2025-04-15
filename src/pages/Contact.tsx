import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="h-[300px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("../images/col1.JPG")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-Nous</h1>
            <p className="text-xl">Nous sommes là pour vous accompagner</p>
          </div>
        </div>
      </div>

       

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Alternative Content */}
       <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Pourquoi Nous Contacter ?</h2>
            <p className="text-gray-700 mb-4">
              Que ce soit pour une question, une collaboration ou une commande personnalisée, notre équipe est à votre écoute pour vous offrir une expérience unique.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Réponse rapide sous 24h</li>
              <li>Service client chaleureux et professionnel</li>
              <li>Conseils personnalisés selon vos besoins</li>
            </ul>
            <a
              href="https://wa.me/24104522365"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-primary py-3 px-6 rounded-md hover:bg-gold-light transition-colors text-center"
            >
              Discutons sur WhatsApp
            </a>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Nos Coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Téléphone</h3>
                  <p className="text-gray-600">+241 04 52 23 65</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Adresse</h3>
                  <p className="text-gray-600">Quartier Louis, Libreville, Gabon</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Heures d'ouverture</h3>
                  <p className="text-gray-600">Lundi - Samedi: 9h00 - 18h00</p>
                  <p className="text-gray-600">Dimanche: Fermé</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Email</h3>
                  <p className="text-gray-600">contact@votreentreprise.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
