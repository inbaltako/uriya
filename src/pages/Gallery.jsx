import React from "react";
import Card from "../components/Card";
import "./Gallery.css";
import { Sparkles } from "lucide-react";
import img7522 from "../assets/bookmarks/IMG_7522.jpeg";
import img7515 from "../assets/bookmarks/IMG_7515.jpeg";
import img7516 from "../assets/bookmarks/IMG_7516.jpeg";
import img7517 from "../assets/bookmarks/IMG_7517.jpeg";
import img7514 from "../assets/bookmarks/IMG_7514.jpeg";

const mockCreations = [
  {
    id: 1,
    title: "מכבי תל אביב",
    description: "סימניה בצבעים כחול וצהוב",
    price: 15,
    image: img7522,
  },
  {
    id: 2,
    title: "רובוטים",
    description: "סימניית רובוטים",
    price: 25,
    image: img7515,
  },
  {
    id: 3,
    title: "הדלמטית",
    description: "סימנייה דלמטית",
    price: 10,
    image: img7516,
  },
  {
    id: 4,
    title: "המנומרת",
    description: "סימניה מנומרת",
    price: 5,
    image: img7517,
  },
  {
    id: 5,
    title: "רובוטים2",
    description: "סימניית רובוטים",
    price: 20,
    image: img7514,
  },
  { id: 6, title: "בקרוב", description: "בקרוב", price: 0 },
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>
          ברוכים הבאים לגלריה שלי!{" "}
          <Sparkles className="highlight-text" size={32} />
        </h1>
        <p className="subtitle">
          תראו איזה דברים מגניבים בניתי. הכל מיוצר באהבה (והמון דבק עיצוב).
        </p>
      </div>

      <div className="gallery-grid">
        {mockCreations.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
