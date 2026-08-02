import React, { useState } from 'react';

const pillarsData = {
  tecnico: {
    title: "1. Aspecto Técnico & Manejo de Balón",
    icon: "fa-futbol",
    desc: "Es el aspecto primordial del fútbol moderno. En Academia ZEP desarrollamos todas las habilidades y destrezas que permiten una mejor utilización y control del balón en alta velocidad y espacio reducido.",
    items: [
      { name: "Dominio de Balón Multiprofil", desc: "Manejo fluido de pierna hábil e inhábil, superficie de contacto y amortiguación." },
      { name: "Controles Orientados", desc: "Recepción perfilada que permite la toma de decisiones inmediata antes del acoso defensivo." },
      { name: "Pase y Golpeo de Precisión", desc: "Pases filtrados de primera intención, cambios de frente y definición colocada." }
    ]
  },
  fisico: {
    title: "2. Aspecto Físico & Evaluaciones Periódicas (Test de Campo)",
    icon: "fa-bolt",
    desc: "Desarrollo de las 6 cualidades físicas del deportista: Resistencia, Velocidad, Agilidad, Fuerza, Flexibilidad y Coordinación con seguimiento mediante test estandarizados.",
    evaluations: [
      { name: "Test Course Navette", desc: "Evaluación de resistencia aeróbica continua y cálculo de consumo máximo de oxígeno (VO2 Máx)." },
      { name: "Test Yo-Yo Intermitente", desc: "Medición de la capacidad de realizar esfuerzos repetidos a máxima intensidad con pausas activas." },
      { name: "Plataforma de Salto (SJ / CMJ)", desc: "Medición de la fuerza explosiva y potencia de piernas en centímetros de elevación." }
    ]
  },
  tactico: {
    title: "3. Aspecto Táctico & Modelo de Juego ZEP",
    icon: "fa-diagram-project",
    desc: "Comprensión profunda de las acciones del juego colectivo mediante ejercicios técnico-tácticos por líneas (defensa, medio, ataque), por bloques y como equipo.",
    items: [
      { name: "Principios de Juego Ofensivos", desc: "Desmarques, creación de líneas de pase, ocupación de espacios y amplitud por bandas." },
      { name: "Organización Defensiva", desc: "Pressing tras pérdida, basculación por líneas y coberturas defensivas coordinadas." },
      { name: "Transiciones Rápidas", desc: "Velocidad de cambio mental de defensa a ataque en menos de 5 segundos." }
    ]
  },
  psicologico: {
    title: "4. Aspecto Psicológico, Formación en Valores & Fair Play",
    icon: "fa-brain",
    desc: "Objetivos para fortalecer la templanza, la resiliencia y la inteligencia emocional del deportista tanto en victorias como en momentos adversos del partido.",
    items: [
      { name: "Fair Play Institucional", desc: "El juego limpio como pilar valórico innegociable de todos los alumnos ZEP." },
      { name: "Resiliencia & Tolerancia a la Frustración", desc: "Manejo constructivo de marcadores adversos, errores y decisiones arbitrales." },
      { name: "Concentración & Liderazgo", desc: "Foco mental continuo los 80/90 minutos de juego y apoyo constante a los compañeros." }
    ]
  }
};

export const PillarsAccordion = () => {
  const [activeTab, setActiveTab] = useState('tecnico');
  const p = pillarsData[activeTab];

  return (
    <div className="pillars-accordion-section">
      <h3 className="pillars-main-title">
        <i className="fa-solid fa-layer-group"></i> Los 4 Pilares Metodológicos del Método ZEP
      </h3>

      <div className="pillars-tabs">
        <button className={`pillar-tab-btn ${activeTab === 'tecnico' ? 'active' : ''}`} onClick={() => setActiveTab('tecnico')}>
          <i className="fa-solid fa-futbol"></i> 1. Aspecto Técnico
        </button>
        <button className={`pillar-tab-btn ${activeTab === 'fisico' ? 'active' : ''}`} onClick={() => setActiveTab('fisico')}>
          <i className="fa-solid fa-bolt"></i> 2. Físico & Evaluaciones
        </button>
        <button className={`pillar-tab-btn ${activeTab === 'tactico' ? 'active' : ''}`} onClick={() => setActiveTab('tactico')}>
          <i className="fa-solid fa-diagram-project"></i> 3. Aspecto Táctico
        </button>
        <button className={`pillar-tab-btn ${activeTab === 'psicologico' ? 'active' : ''}`} onClick={() => setActiveTab('psicologico')}>
          <i className="fa-solid fa-brain"></i> 4. Psicológico & Fair Play
        </button>
      </div>

      <div className="pillar-content-box card-glass">
        <div className="pillar-detail-wrapper">
          <div className="pillar-detail-header">
            <i className={`fa-solid ${p.icon} pillar-main-icon`}></i>
            <div>
              <h4>{p.title}</h4>
              <p className="pillar-main-desc">{p.desc}</p>
            </div>
          </div>

          {p.evaluations ? (
            <div className="pillar-evals-grid">
              {p.evaluations.map((e, idx) => (
                <div key={idx} className="pillar-eval-card">
                  <i className="fa-solid fa-microscope eval-icon"></i>
                  <div>
                    <strong>{e.name}</strong>
                    <p>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="pillar-items-list">
              {p.items.map((item, idx) => (
                <div key={idx} className="pillar-item-row">
                  <i className="fa-solid fa-circle-check text-orange"></i>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
