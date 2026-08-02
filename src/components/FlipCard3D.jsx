import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, ArrowLeft, ChevronRight, Zap, Heart, Shield, Activity, Dumbbell, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FlipCard3D = ({ id, badge, title, desc, highlights, isFeatured, bgClass, backTag, backTitle, items }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`flip-card ${isFeatured ? 'featured-flip' : ''}`} style={{ perspective: 1000, height: 480 }}>
      <motion.div
        className="flip-card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
        style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', position: 'relative' }}
      >
        {/* FRONT SIDE */}
        <div 
          className="flip-card-front card-glass" 
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            borderRadius: 16, 
            display: 'flex', 
            flexDirection: 'column' 
          }}
        >
          <div className={`card-front-img ${bgClass}`}>
            <span className={`card-badge-top ${isFeatured ? 'featured-tag-top' : ''}`}>{badge}</span>
          </div>
          <div className="card-front-body">
            <h3 className="program-card-title">{title}</h3>
            <p className="program-card-desc">{desc}</p>
            <div className="program-highlights">
              {highlights.map((h, idx) => (
                <span key={idx}><Zap size={12} className="inline mr-1" /> {h}</span>
              ))}
            </div>
            <button className={`btn-flip ${isFeatured ? 'btn-flip-orange' : ''}`} onClick={() => setIsFlipped(true)}>
              Ver Pilares & Evaluaciones Físicas <RotateCw size={14} />
            </button>
          </div>
        </div>

        {/* BACK SIDE */}
        <div 
          className="flip-card-back" 
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            borderRadius: 16, 
            transform: 'rotateY(180deg)' 
          }}
        >
          <div className="back-header">
            <span className="back-tag">{backTag}</span>
            <h4>{backTitle}</h4>
          </div>
          <div className="back-pillars-list">
            {items.map((item, idx) => (
              <div key={idx} className="back-pillar-item">
                <i className={`fa-solid ${item.icon} ${item.colorClass}`}></i>
                <div>
                  <strong>{item.label}:</strong> {item.text}
                </div>
              </div>
            ))}
          </div>
          <div className="back-actions">
            <button className="btn-flip-back" onClick={() => setIsFlipped(false)}>
              <ArrowLeft size={14} /> Volver
            </button>
            <a href="/#contacto" className="btn-primary-xs">
              Inscribirse <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
