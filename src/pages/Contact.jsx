import React from 'react';
import { Send, Heart } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <div className="contact-header">
          <h1 className="contact-title">בואו נדבר! 🚀</h1>
          <p className="contact-subtitle">
            אם תרצו לקנות את אחת היצירות שלי, או סתם להגיד שלום, תבקשו מההורים לשלוח לי אימייל. אשמח לשמוע מכם!
          </p>
        </div>

        <div className="contact-actions">
          <a href="mailto:hello@uriya-gallery.com?subject=שלום אוריה!" className="btn btn-primary btn-large">
            <Send size={24} />
            שלחו לי אימייל
          </a>
          
          <div className="divider">
            <span>או</span>
          </div>

          <p className="contact-hint">
            אתם יכולים גם להגיד לאמא או אבא שלי אם אתם רואים אותם במגרש הכדורגל!
          </p>
        </div>

        <div className="contact-footer">
          <Heart fill="var(--color-accent-pink)" color="var(--color-accent-pink)" size={24} className="heart-bounce" />
          <p>תודה שביקרתם בגלריה שלי!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
