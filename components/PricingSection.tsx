import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Our Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Luxury Suite</h3>
                        <p className="price">$250/night</p>
                        <ul className="features">
                            <li>King-size bed</li>
                            <li>Private balcony</li>
                            <li>Complimentary breakfast</li>
                        </ul>
                        <button className="btn-book">Book Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Deluxe Room</h3>
                        <p className="price">$180/night</p>
                        <ul className="features">
                            <li>Queen-size bed</li>
                            <li>City view</li>
                            <li>Free Wi-Fi</li>
                        </ul>
                        <button className="btn-book">Book Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Standard Room</h3>
                        <p className="price">$120/night</p>
                        <ul className="features">
                            <li>Double bed</li>
                            <li>Shared bathroom</li>
                            <li>Air conditioning</li>
                        </ul>
                        <button className="btn-book">Book Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;