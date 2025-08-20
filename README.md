import React from 'react';

const ReadMe: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#ff69b4' }}>HouseIL</h1>
      <h2>Luxury Dark AirBNB Website</h2>
      <p>Welcome to HouseIL, your premier destination for luxury accommodation.</p>
      
      <h3>Features</h3>
      <ul>
        <li>Elegant and high-end design</li>
        <li>Dark theme with pink accents</li>
        <li>User-friendly interface</li>
        <li>Responsive design for all devices</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To get started with the project, clone the repository and install the dependencies:</p>
      <pre>
        <code>
          git clone https://github.com/yourusername/HouseIL.git
          cd HouseIL
          npm install
        </code>
      </pre>
      
      <h3>Usage</h3>
      <p>Run the development server:</p>
      <pre>
        <code>
          npm start
        </code>
      </pre>
      
      <h3>Contributing</h3>
      <p>We welcome contributions! Please fork the repository and submit a pull request.</p>
      
      <h3>License</h3>
      <p>This project is licensed under the MIT License.</p>
      
      <h3>Contact</h3>
      <p>For inquiries, please reach out to <a href="mailto:contact@houseil.com" style={{ color: '#ff69b4' }}>contact@houseil.com</a>.</p>
    </div>
  );
};

export default ReadMe;