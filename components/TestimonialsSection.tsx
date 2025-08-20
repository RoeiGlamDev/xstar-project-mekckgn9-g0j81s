import React from 'react';
import './TestimonialsSection.css'; // Assuming you have a CSS file for styling

const testimonials = [
  {
    name: "John Doe",
    feedback: "An unforgettable experience! The luxury and comfort were beyond my expectations.",
    image: "/images/testimonial1.jpg", // Replace with actual image path
  },
  {
    name: "Jane Smith",
    feedback: "A perfect getaway! The ambiance was exquisite and the service was top-notch.",
    image: "/images/testimonial2.jpg", // Replace with actual image path
  },
  {
    name: "Emily Johnson",
    feedback: "HouseIL is a gem! Every detail was meticulously crafted for a luxurious stay.",
    image: "/images/testimonial3.jpg", // Replace with actual image path
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Guests Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="guest-name">{testimonial.name}</h3>
            <p className="guest-feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;