import React, { useState } from 'react';
import { playersData } from '../data/playersData';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, Clock, Users } from 'lucide-react';

const categoryConfigs = {
  sub8: { label: "Sub-8", title: "Categoría Sub-8 — Iniciación Motriz y Recreativa", desc: "Enfocada en el amor por el deporte, desarrollo psicomotor, coordinación básica y primeros contactos con el balón.", coach: "Prof. Matías Henríquez", schedule: "Mar y Jue 16:30 - Sáb 10:00", count: "18 Jugadores" },
  sub10: { label: "Sub-10", title: "Categoría Sub-10 — Fundamentos Técnicos", desc: "Desarrollo del pase, control orientado, conducción en velocidad y conceptos básicos de juego colectivo.", coach: "Prof. Esteban Guerra", schedule: "Lun y Mié 17:00 - Sáb 10:00", count: "20 Jugadores" },
  sub12: { label: "Sub-12", title: "Categoría Sub-12 — Pre-Táctica y Posicionamiento", desc: "Ocupación de espacios, principios ofensivos/defensivos y transición a cancha reglamentaria.", coach: "Prof. Andrés Sepúlveda", schedule: "Mar y Jue 17:30 - Sáb 11:30", count: "24 Jugadores" },
  sub14: { label: "Sub-14", title: "Categoría Sub-14 — Perfeccionamiento Táctico", desc: "Enfocados en el desarrollo de visión de juego, toma de decisiones bajo presión y acondicionamiento físico adaptado.", coach: "Prof. Rodrigo Morales", schedule: "Mar y Jue 17:30 - Sáb 09:30", count: "22 Jugadores" },
  sub16: { label: "Sub-16", title: "Categoría Sub-16 — Alto Rendimiento Formativo", desc: "Preparación física avanzada, sistemas tácticos complejos y proyección a competencias de nivel nacional.", coach: "Prof. Claudio Bravo", schedule: "Lun, Mié y Vie 18:00 - Sáb 11:30", count: "25 Jugadores" },
  pro: { label: "Sub-18 Pro", title: "Categoría Sub-18 Pro — Proyección Profesional", desc: "Etapa final del proceso formativo ZEP. Preparación para pruebas en clubes profesionales y fútbol universitario.", coach: "Prof. Francisco Palma", schedule: "Lun a Vie 18:30 - Sáb 12:00", count: "20 Jugadores" }
};

export const CategoriesPage = () => {
  const [currentCategory, setCurrentCategory] = useState('sub14');
  const config = categoryConfigs[currentCategory] || categoryConfigs.sub14;
  const filtered = playersData.filter(p => p.category === currentCategory);
  const displayPlayers = filtered.length > 0 ? filtered : playersData.slice(0, 4);

  return (
    <section className="section page-top-padding">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag"><Layers size={16} className="inline mr-1 text-orange" /> ESTRUCTURA DEPORTIVA</span>
          <h1 className="section-title">Categorías Formativas ZEP</h1>
          <p className="section-subtitle">Plantillas estructuradas por edades con seguimiento técnico individual.</p>
        </div>

        {/* CATEGORY PILLS SELECTOR */}
        <div className="category-pills" style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {Object.keys(categoryConfigs).map(catKey => (
            <button 
              key={catKey} 
              className={`pill-btn ${currentCategory === catKey ? 'active' : ''}`}
              onClick={() => setCurrentCategory(catKey)}
            >
              {categoryConfigs[catKey].label}
            </button>
          ))}
        </div>

        {/* METADATA CARD */}
        <div className="category-meta-card card-glass" style={{ marginBottom: '3rem' }}>
          <div className="meta-main">
            <div className="meta-badge-cat">{config.label.toUpperCase()}</div>
            <div>
              <h3 className="meta-title">{config.title}</h3>
              <p className="meta-desc">{config.desc}</p>
            </div>
          </div>
          <div className="meta-details">
            <div className="meta-item">
              <i className="fa-solid fa-user-tie"></i>
              <div>
                <span className="item-label">Entrenador Principal</span>
                <span className="item-val">{config.coach}</span>
              </div>
            </div>
            <div className="meta-item">
              <i className="fa-solid fa-clock"></i>
              <div>
                <span className="item-label">Horarios</span>
                <span className="item-val">{config.schedule}</span>
              </div>
            </div>
            <div className="meta-item">
              <i className="fa-solid fa-users"></i>
              <div>
                <span className="item-label">Plantilla</span>
                <span className="item-val">{config.count}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SQUAD ROSTER GRID */}
        <div className="roster-grid">
          {displayPlayers.map(player => (
            <div key={player.id} className="fut-card">
              <div className="card-top-row">
                <div className="card-number-box">
                  <span className="card-number">#{player.number}</span>
                  <span className="card-pos">{player.positionShort}</span>
                </div>
                <div className="card-stars">⭐ {player.rating.toFixed(1)}</div>
              </div>

              <div className="card-avatar-wrap">
                <img src={player.avatar} alt={player.name} className="card-avatar-img" />
              </div>

              <h4 className="card-player-name">{player.name}</h4>
              <p className="card-player-meta">{player.positionFull} • {player.categoryLabel}</p>

              <div className="card-mini-stats">
                <div className="mini-stat"><span className="m-val">{player.stats.velocidad}</span><span className="m-lbl">VEL</span></div>
                <div className="mini-stat"><span className="m-val">{player.stats.tecnica}</span><span className="m-lbl">TEC</span></div>
                <div className="mini-stat"><span className="m-val">{player.stats.tiro}</span><span className="m-lbl">TIR</span></div>
              </div>

              <div className="card-cta-bar">
                <Link to={`/jugador/${player.id}`} style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', width: '100%' }}>
                  <i className="fa-solid fa-id-card"></i> Ver Carnet Táctico <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
