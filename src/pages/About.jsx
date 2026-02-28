import React from 'react';
import { Camera, Smile } from 'lucide-react';
import uriyaImage from '../assets/uriya.png';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className="about-title">שלום, אני אוריה! ⚽</h1>
        
        <div className="about-text-content">
          <p className="about-paragraph">
            אני בן 10 ואני אוהב מאוד ליצור דברים מגניבים. כשאני לא משחק כדורגל עם החברים שלי במגרש, אני בטח בחדר שלי מצייר, בונה או יוצר משהו מגניב.
          </p>
          <p className="about-paragraph">
            פתחתי את הגלריה הזאת כדי להראות לכולם את כל יצירות ה-DIY (עשה זאת בעצמך) שלי. בין אם זה צביעת אבנים, בניית טירות או יצירת צעצועים מגניבים, אני פשוט אוהב להפוך רעיונות למציאות.
          </p>
          <p className="about-paragraph highlight-text" style={{fontWeight: 700}}>
            הצבעים האהובים עלי הם כחול וצהוב, והספורט האהוב עלי הוא כדורגל!
          </p>
          
          <div className="about-badges">
            <span className="badge badge-blue">יוצר</span>
            <span className="badge badge-yellow">אוהד שרוף של כדורגל</span>
            <span className="badge badge-pink">בן 10</span>
          </div>
        </div>
      </div>

      <div className="about-image-wrapper">
        <div className="about-image-frame">
          <img src={uriyaImage} alt="אוריה" className="about-image" />
          {/* Decorative Elements */}
          <div className="frame-decoration text-blue">🎨</div>
          <div className="frame-decoration text-yellow">⚽</div>
        </div>
      </div>
    </div>
  );
};

export default About;
