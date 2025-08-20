import React from 'react';
import './ContactSection.css'; // Importing CSS for styling

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section" style={{ backgroundColor: '#000', color: '#fff' }}>
            <div className="contact-container">
                <h2 style={{ color: '#ff69b4' }}>Get in Touch</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" style={{ backgroundColor: '#ff69b4', color: '#000' }}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;