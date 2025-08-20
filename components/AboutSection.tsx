import React from 'react';
import './AboutSection.css'; // Assuming you have a CSS file for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to HouseIL</h1>
                <p className="about-description">
                    Experience luxury living in our exquisite properties. 
                    HouseIL offers a unique blend of elegance and comfort, 
                    tailored for those who appreciate the finer things in life.
                </p>
                <p className="about-description">
                    Our curated selection of high-end accommodations 
                    ensures a memorable stay, whether for business or leisure. 
                    Indulge in the sophistication and style that HouseIL 
                    has to offer.
                </p>
                <button className="about-button">Discover More</button>
            </div>
        </section>
    );
};

export default AboutSection;