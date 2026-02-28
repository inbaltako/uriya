import React from 'react';
import { Send, Heart } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <div className="contact-header">
          <h1 className="contact-title">Let's Talk! 🚀</h1>
          <p className="contact-subtitle">
            If you want to buy one of my creations, or just say hi, ask your parents to send me an email. I'd love to hear from you!
          </p>
        </div>

        <div className="contact-actions">
          <a href="mailto:hello@uriya-gallery.com?subject=Hello Uriya!" className="btn btn-primary btn-large">
            <Send size={24} />
            Send me an Email
          </a>
          
          <div className="divider">
            <span>or</span>
          </div>

          <p className="contact-hint">
            You can also tell my mom or dad if you see them at the football field!
          </p>
        </div>

        <div className="contact-footer">
          <Heart fill="var(--color-accent-pink)" color="var(--color-accent-pink)" size={24} className="heart-bounce" />
          <p>Thanks for visiting my gallery!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
