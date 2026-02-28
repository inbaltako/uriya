import React from 'react';
import { Camera, Smile } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className="about-title">Hi, I'm Uriya! ⚽</h1>
        
        <div className="about-text-content">
          <p className="about-paragraph">
            I'm a 10-year-old boy who loves creating cool things. When I'm not on the football field playing with my friends, I'm probably in my room crafting, painting, or building something awesome.
          </p>
          <p className="about-paragraph">
            I started this gallery to show everyone the DIY projects I've been working on. Whether it's painting rocks, building castles, or making cool toys, I love bringing ideas to life.
          </p>
          <p className="about-paragraph highlight-text" style={{fontWeight: 700}}>
            My favorite colors are Blue and Yellow, and my favorite sport is Football!
          </p>
          
          <div className="about-badges">
            <span className="badge badge-blue">Creator</span>
            <span className="badge badge-yellow">Football Fan</span>
            <span className="badge badge-pink">10 y/o</span>
          </div>
        </div>
      </div>

      <div className="about-image-wrapper">
        <div className="about-image-frame">
          <div className="about-image-placeholder">
            <div className="placeholder-content">
              <Camera size={48} className="placeholder-icon" />
              <span>Photo of Uriya</span>
              <Smile size={24} className="placeholder-emoji" />
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="frame-decoration text-blue">🎨</div>
          <div className="frame-decoration text-yellow">⚽</div>
        </div>
      </div>
    </div>
  );
};

export default About;
