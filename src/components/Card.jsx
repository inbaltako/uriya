import React from 'react';
import './Card.css';

const Card = ({ title, description, price, image }) => {
  return (
    <div className="card">
      <div className="card-image-placeholder">
        {image ? (
          <img src={image} alt={title} className="card-image" />
        ) : (
          <span className="card-image-icon">🎨</span>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <span className="card-price">₪{price}</span>
          <button className="btn btn-primary btn-sm">קנה עכשיו</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
