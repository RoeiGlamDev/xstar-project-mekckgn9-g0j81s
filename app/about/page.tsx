import React from 'react';
import styles from './About.module.css'; // Importing CSS module for styling

const AboutPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Welcome to HouseIL</h1>
                <p className={styles.subtitle}>Luxury Redefined</p>
            </header>
            <section className={styles.content}>
                <h2 className={styles.sectionTitle}>About Us</h2>
                <p className={styles.description}>
                    At HouseIL, we offer a curated selection of high-end properties that embody elegance and sophistication. 
                    Our mission is to provide an unparalleled experience in luxury accommodations.
                </p>
                <h2 className={styles.sectionTitle}>Our Vision</h2>
                <p className={styles.description}>
                    We envision a world where every stay feels like a retreat, blending comfort with style in the most exquisite settings.
                </p>
            </section>
            <footer className={styles.footer}>
                <p className={styles.footerText}>© 2023 HouseIL. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;