import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="h-[300px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534702718572-448a8d5df8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-Nous</h1>
            <p className="text-xl">Nous sommes là pour vous aider</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Informations de Contact</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Téléphone</h3>
                  <p className="text-gray-600">+241 77 98 23 45</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Email</h3>
                  <p className="text-gray-600">contact@gresh.ga</p>
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
                  <h3 className="font-semibold mb-1 text-primary">Heures d'Ouverture</h3>
                  <p className="text-gray-600">Lundi - Samedi: 9h00 - 18h00</p>
                  <p className="text-gray-600">Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Envoyez-nous un Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-primary py-3 px-6 rounded-md hover:bg-gold-light transition-colors"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}