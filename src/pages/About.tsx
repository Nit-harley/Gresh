import React from 'react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("../images/col4a (5).JPG")'
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
            Grecy est une jeune entrepreneure de 21 ans en 2025 passionnée et créative, résolument engagée dans la valorisation du patrimoine culturel africain à travers la mode. Depuis toujours fascinée par les tissus traditionnels, elle a su transformer cette passion en une véritable aventure entrepreneuriale en créant GRESH. 
            </p>

            <h2 className="text-3xl font-bold mb-6 text-primary"> Un Parcours Inspiré par la Culture et l’Innovation</h2>

            <p className="text-gray-600 mb-8">Dès le début de son parcours, Grecy a démontré une sensibilité particulière pour l’esthétique et le savoir-faire artisanal. Son parcours se caractérise par : </p>
	•	Un héritage culturel : Grandir dans un environnement riche en traditions lui a permis de puiser dans l’authenticité du pagne et des motifs ancestraux. <br/>
	•	La quête de l’originalité : Grecy réinvente ces codes traditionnels en les associant à des coupes modernes et des designs contemporains, créant ainsi des pièces uniques qui racontent une histoire.<br/> 
	•	L’engagement sur mesure : La personnalisation et le sur-mesure sont au cœur de sa démarche, permettant à chaque client de porter une création qui reflète sa personnalité et son identité. <br/><br/>
         
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

    
    </div>
  );
}