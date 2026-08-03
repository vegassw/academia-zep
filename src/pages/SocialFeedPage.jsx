import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Instagram, CheckCircle2 } from 'lucide-react';

export const SocialFeedPage = () => {
  const [likes, setLikes] = useState({ 1: 142, 2: 98, 3: 215 });

  const handleLike = (id) => {
    setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const feedPosts = [
    {
      id: 1,
      author: "academiazep_cl",
      location: "Complejo Deportivo ZEP — Cancha 1",
      image: "/assets/sub14-team.jpg",
      caption: "⚡ ¡Rumbo a las semifinales! Nuestra categoría Sub-14 disputando con garra y deportividad la Copa Santiago 2026. Orgullosos de cada uno de los futbolistas de la academia. #AcademiaZEP #FutbolFormativo #Sub14",
      comments: 18,
      time: "HACE 2 HORAS"
    },
    {
      id: 2,
      author: "academiazep_cl",
      location: "Escuela de Arqueros ZEP",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
      caption: "🧤 Trabajo específico de reflejos, biomecánica y achiques en 1vs1 con nuestra escuela especializada de guardametas. ¡La seguridad bajo los tres palos se entrena día a día! #ArquerosZEP #GuantesPuestos",
      comments: 12,
      time: "HACE 1 DÍA"
    },
    {
      id: 3,
      author: "academiazep_cl",
      location: "Laboratorio de Evaluación ZEP",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80",
      caption: "📊 Evaluaciones científicas en terreno: Test Yo-Yo y plataforma de salto en centímetros. La tecnología aplicada al servicio del desarrollo físico de nuestros atletas. #CienciaDelDeporte #MetodoZEP",
      comments: 24,
      time: "HACE 3 DÍAS"
    }
  ];

  return (
    <section className="section page-top-padding">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-header center">
          <span className="section-tag"><Instagram size={16} className="inline mr-1 text-orange" /> COMUNIDAD DIGITAL</span>
          <h1 className="section-title">Instagram @academiazep_cl</h1>
          <p className="section-subtitle">Sigue nuestras publicaciones diarias, fotos de entrenamientos y resúmenes de partidos.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {feedPosts.map(post => (
            <div key={post.id} className="card-glass" style={{ borderRadius: 16, overflow: 'hidden' }}>
              <div style={{ padding: '1rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <img src="/assets/logo-official.jpg" alt="Logo ZEP" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--zep-orange)' }} />
                <div>
                  <div style={{ fontWeight: 800, color: '#fff', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {post.author} <CheckCircle2 size={14} className="text-orange" />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--zep-text-muted)' }}>{post.location}</span>
                </div>
              </div>

              <div style={{ width: '100%', maxHeight: 450, overflow: 'hidden', background: '#000' }}>
                <img src={post.image} alt="Post ZEP" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ padding: '1.2rem' }}>
                <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '0.8rem' }}>
                  <button 
                    onClick={() => handleLike(post.id)}
                    style={{ background: 'none', border: 'none', color: '#ff5500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1rem', fontWeight: 700 }}
                  >
                    <Heart size={20} fill="#ff5500" /> {likes[post.id]} Me gusta
                  </button>
                  <span style={{ color: 'var(--zep-text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
                    <MessageCircle size={18} /> {post.comments} Comentarios
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#e0e0e0', lineHeight: '1.6', marginBottom: '0.6rem' }}>
                  {post.caption}
                </p>
                <span style={{ fontSize: '0.75rem', color: 'var(--zep-text-muted)', fontWeight: 600 }}>
                  {post.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
