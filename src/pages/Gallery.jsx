import React from 'react';
import Card from '../components/Card';
import './Gallery.css';
import { Sparkles } from 'lucide-react';

const mockCreations = [
  { id: 1, title: 'כדורגל כחול', description: 'כדורגל קטן צבוע בכחול וצהוב יפהייפה.', price: 15 },
  { id: 2, title: 'חרב עץ', description: 'חרב עץ בעבודת יד לקרבות הירואים בחצר.', price: 25 },
  { id: 3, title: 'מעמד ללגו', description: 'מעמד נוח ומגניב להציג בו את דמויות הלגו שלך.', price: 10 },
  { id: 4, title: 'בובת אבן מאוירת', description: 'אבן מתוקה צבועה כמו מפלצת קטנה.', price: 5 },
  { id: 5, title: 'מבצר ממקלות ארטיק', description: 'מבצר קטן ומפורט שעשוי ממקלות קרטיב.', price: 20 },
  { id: 6, title: 'דרקון אוריגמי', description: 'דרקון מנייר כחול וצהוב.', price: 8 },
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>ברוכים הבאים לגלריה שלי! <Sparkles className="highlight-text" size={32} /></h1>
        <p className="subtitle">תראו איזה דברים מגניבים בניתי. הכל מיוצר באהבה (והמון דבק עיצוב).</p>
      </div>

      <div className="gallery-grid">
        {mockCreations.map((item) => (
          <Card 
            key={item.id} 
            title={item.title} 
            description={item.description} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
