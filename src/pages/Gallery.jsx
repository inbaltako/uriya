import React from 'react';
import Card from '../components/Card';
import './Gallery.css';
import { Sparkles } from 'lucide-react';

const mockCreations = [
  { id: 1, title: 'Blue Football', description: 'A custom painted mini football in blue and yellow.', price: 15 },
  { id: 2, title: 'Wooden Sword', description: 'Handcrafted wooden sword for epic backyard battles.', price: 25 },
  { id: 3, title: 'Lego Stand', description: 'A neat stand to display your favorite Lego minifigures.', price: 10 },
  { id: 4, title: 'Painted Rock Mascot', description: 'A cute rock painted to look like a little monster.', price: 5 },
  { id: 5, title: 'Popsicle Stick Fort', description: 'A detailed mini fort made out of ice cream sticks.', price: 20 },
  { id: 6, title: 'Origami Dragon', description: 'Blue and yellow folded paper dragon.', price: 8 },
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Welcome to my Gallery! <Sparkles className="highlight-text" size={32} /></h1>
        <p className="subtitle">Check out all the cool things I've built. Everything is made with love (and lots of glue).</p>
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
