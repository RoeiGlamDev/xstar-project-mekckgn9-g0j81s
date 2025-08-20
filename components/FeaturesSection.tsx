import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const featuresData = [
  {
    title: 'Luxurious Accommodations',
    description: 'Experience the ultimate comfort in our high-end properties.',
    icon: '🏨',
  },
  {
    title: 'Stunning Locations',
    description: 'Discover breathtaking views and prime locations.',
    icon: '🌅',
  },
  {
    title: 'Personalized Services',
    description: 'Enjoy tailored experiences to make your stay unforgettable.',
    icon: '🤵',
  },
  {
    title: 'Exclusive Amenities',
    description: 'Indulge in top-notch facilities and services.',
    icon: '🍾',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <span className="feature-icon">{feature.icon}</span>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;