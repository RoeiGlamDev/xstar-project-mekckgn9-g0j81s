import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="header">
                <h1 className="title">Luxury Pricing</h1>
                <p className="subtitle">Experience elegance with HouseIL</p>
            </header>
            <main className="pricing-container">
                <section className="pricing-option">
                    <h2 className="option-title">Standard Suite</h2>
                    <p className="option-description">Enjoy a cozy stay with top-notch amenities.</p>
                    <span className="price">$200/night</span>
                    <button className="book-button">Book Now</button>
                </section>
                <section className="pricing-option">
                    <h2 className="option-title">Deluxe Suite</h2>
                    <p className="option-description">Indulge in luxury with breathtaking views.</p>
                    <span className="price">$350/night</span>
                    <button className="book-button">Book Now</button>
                </section>
                <section className="pricing-option">
                    <h2 className="option-title">Presidential Suite</h2>
                    <p className="option-description">Experience the pinnacle of luxury living.</p>
                    <span className="price">$600/night</span>
                    <button className="book-button">Book Now</button>
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">© 2023 HouseIL. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;