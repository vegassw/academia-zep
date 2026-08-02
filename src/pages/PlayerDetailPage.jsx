import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { playersData } from '../data/playersData';
import { ArrowLeft, Volume2, Target, Trophy, Award } from 'lucide-react';
import '../styles-tm-override.css';


export const PlayerDetailPage = () => {
  const { id } = useParams();
  const player = playersData.find(p => p.id === (id || 'p1')) || playersData[0];
  const { stats, history, objectives } = player;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fa-solid fa-star text-gold mr-1"></i>);
    }
    return stars;
  };

  // Helper for Circular Progress
  const CircularProgress = ({ value, label }) => {
    const angle = (value / 100) * 360;
    return (
      <div className="tm-circle-container">
        <div 
          className="tm-circle-chart" 
          style={{ background: `conic-gradient(var(--zep-orange) ${angle}deg, rgba(255,255,255,0.1) ${angle}deg)` }}
        >
          <div className="tm-circle-inner">
            <span className="tm-circle-val">{value}%</span>
          </div>
        </div>
        <span className="tm-circle-label">{label}</span>
      </div>
    );
  };

  return (
    <section className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        
        {/* SUBNAVEGACION */}
        <div className="tm-subnav">
          <Link to="/plantilla" className="tm-back-link">
            <ArrowLeft size={16} /> Volver a la Plantilla
          </Link>
          <div className="tm-subnav-title">
            Ficha Técnica de {player.name}
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="tm-player-layout">
          
          {/* LEFT COL: CARNET & PERSONAL DATA */}
          <div className="tm-col-left">
            
            {/* CARNET HEADER */}
            <div className="tm-card tm-carnet-card">
              <div className="tm-carnet-top">
                <span className="tm-carnet-number">#{player.number}</span>
                <div className="tm-carnet-stars">{renderStars(player.rating)}</div>
              </div>
              <div className="tm-carnet-avatar">
                <img src={player.avatar} alt={player.name} />
              </div>
              <h2 className="tm-carnet-name">{player.name}</h2>
              <div className="tm-carnet-position">{player.positionFull}</div>
            </div>

            {/* DATOS DEL JUGADOR */}
            <div className="tm-card">
              <div className="tm-header">
                DATOS DEL JUGADOR
              </div>
              
              <div className="tm-data-list">
                <div className="tm-data-row">
                  <span className="tm-data-label">Categoría:</span>
                  <span className="tm-data-value">{player.categoryLabel}</span>
                </div>
                <div className="tm-data-row">
                  <span className="tm-data-label">Edad / F. Nac.:</span>
                  <span className="tm-data-value">{player.age} años (Aprox. {new Date().getFullYear() - player.age})</span>
                </div>
                <div className="tm-data-row">
                  <span className="tm-data-label">Altura:</span>
                  <span className="tm-data-value">{player.height || '1,70 m'}</span>
                </div>
                <div className="tm-data-row">
                  <span className="tm-data-label">Nacionalidad:</span>
                  <span className="tm-data-value">{player.nation}</span>
                </div>
                <div className="tm-data-row">
                  <span className="tm-data-label">Posición principal:</span>
                  <span className="tm-data-value text-bold">{player.positionFull}</span>
                </div>
                <div className="tm-data-row">
                  <span className="tm-data-label">Pie hábil:</span>
                  <span className="tm-data-value">{player.foot}</span>
                </div>
                <div className="tm-data-row">
                  <span className="tm-data-label">Club actual:</span>
                  <span className="tm-data-value tm-text-link">
                    <img src="/logo.png" alt="ZEP" className="tm-inline-logo" /> Academia ZEP
                  </span>
                </div>
                <div className="tm-data-row">
                  <span className="tm-data-label">Proyección:</span>
                  <span className="tm-data-value">Alto Rendimiento Formativo</span>
                </div>
              </div>
            </div>

            {/* AUDIO PRONUNCIATION (Visual Mockup) */}
            <div className="tm-card">
              <div className="tm-data-row" style={{ borderBottom: 'none' }}>
                <span className="tm-data-label">Pronunciación del nombre</span>
              </div>
              <div className="tm-audio-player">
                <i className="fa-solid fa-play tm-audio-icon"></i>
                <div className="tm-audio-track"></div>
                <Volume2 size={16} className="tm-audio-icon" />
              </div>
            </div>

          </div>

          {/* RIGHT COL: PERFORMANCE & STATS */}
          <div className="tm-col-right">
            
            {/* RENDIMIENTO BOX */}
            <div className="tm-card">
              <div className="tm-header">
                <i className="fa-solid fa-trophy" style={{marginRight: '8px', color: 'var(--zep-gold)'}}></i> 
                RENDIMIENTO EN TEMPORADA ACTUAL
              </div>
              
              <div className="tm-perf-summary">
                <div className="tm-perf-item">
                  <div className="tm-perf-icon"><i className="fa-solid fa-futbol"></i> Partidos</div>
                  <div className="tm-perf-number text-blue">{history?.partidos || 0}</div>
                </div>
                <div className="tm-perf-item">
                  <div className="tm-perf-icon"><div className="tm-yellow-card"></div> Amarillas</div>
                  <div className="tm-perf-number text-blue">{history?.amarillas || 0}</div>
                </div>
                <div className="tm-perf-item">
                  <div className="tm-perf-icon"><i className="fa-solid fa-bullseye"></i> Goles</div>
                  <div className="tm-perf-number text-blue">{history?.goles || 0}</div>
                </div>
                <div className="tm-perf-item">
                  <div className="tm-perf-icon">
                    <div className="tm-yellow-card"></div><div className="tm-red-card" style={{marginLeft: '-4px'}}></div> Expulsiones
                  </div>
                  <div className="tm-perf-number text-blue">0</div>
                </div>
                <div className="tm-perf-item" style={{ borderBottom: 'none' }}>
                  <div className="tm-perf-icon"><i className="fa-solid fa-shoe-prints"></i> Asistencias</div>
                  <div className="tm-perf-number text-blue">{history?.asistencias || 0}</div>
                </div>
                <div className="tm-perf-item" style={{ borderBottom: 'none' }}>
                  <div className="tm-perf-icon"><div className="tm-red-card"></div> Rojas Directas</div>
                  <div className="tm-perf-number text-blue">{history?.rojas || 0}</div>
                </div>
              </div>

              {/* CIRCULAR STATS */}
              <div className="tm-circular-stats-container">
                <CircularProgress value={stats.velocidad || 90} label="Cuota de Ritmo" />
                <CircularProgress value={stats.tecnica || 85} label="Técnica / Posesión" />
                <CircularProgress value={stats.resistencia || 80} label="Minutos Jugados" />
                <CircularProgress value={stats.tiro || 82} label="Definición" />
                <CircularProgress value={stats.pase || 88} label="Pase / Visión" />
                <CircularProgress value={stats.disciplina || 95} label="Disciplina Tactica" />
              </div>

              <button className="tm-btn-primary">
                DATOS DE RENDIMIENTO DETALLADOS
              </button>
            </div>

            {/* OBJETIVOS Y TRAYECTORIA */}
            <div className="tm-card" style={{ marginTop: '1.5rem' }}>
              <div className="tm-header">
                <i className="fa-solid fa-bullseye" style={{marginRight: '8px'}}></i> OBJETIVOS DE DESARROLLO
              </div>
              <div className="objectives-list tm-obj-list">
                <div className="objective-item">
                  <div className="obj-header">
                    <div className="obj-title-group">
                      <div className="obj-icon"><i className="fa-solid fa-futbol"></i></div>
                      <span className="obj-name">{objectives.tech.title}</span>
                    </div>
                    <span className="obj-percentage">{objectives.tech.progress}%</span>
                  </div>
                  <p className="obj-desc">{objectives.tech.desc}</p>
                  <div className="bar-track"><div className="bar-fill bar-fill-obj" style={{ width: `${objectives.tech.progress}%` }}></div></div>
                </div>
                <div className="objective-item">
                  <div className="obj-header">
                    <div className="obj-title-group">
                      <div className="obj-icon"><i className="fa-solid fa-person-running"></i></div>
                      <span className="obj-name">{objectives.phys.title}</span>
                    </div>
                    <span className="obj-percentage">{objectives.phys.progress}%</span>
                  </div>
                  <p className="obj-desc">{objectives.phys.desc}</p>
                  <div className="bar-track"><div className="bar-fill bar-fill-obj" style={{ width: `${objectives.phys.progress}%` }}></div></div>
                </div>
              </div>
            </div>

            {/* TRAJECTORY TIMELINE */}
            <div className="tm-card" style={{ marginTop: '1.5rem' }}>
              <div className="tm-header">
                <i className="fa-solid fa-clock-rotate-left" style={{marginRight: '8px'}}></i> TRAYECTORIA DE TEMPORADAS
              </div>
              <div className="trajectory-timeline tm-timeline-override">
                {(player.trajectory || [
                  { year: "2024", club: `Academia ZEP ${player.categoryLabel}`, games: 12, goals: 6, assists: 4, title: "Torneo Apertura Formativo" },
                  { year: "2025", club: `Academia ZEP ${player.categoryLabel}`, games: 15, goals: 8, assists: 7, title: "Campeón Regional" },
                ]).map((t, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-year">{t.year}</div>
                    <div className="timeline-content">
                      <div className="timeline-club">
                        <img src="/assets/logo-zep.svg" className="tm-inline-logo" alt="ZEP" style={{height: '20px', marginRight: '8px'}} />
                        {t.club}
                      </div>
                      <div className="timeline-meta">
                        <span><strong>{t.games}</strong> PJ</span>
                        <span><strong>{t.goals}</strong> G</span>
                        <span><strong>{t.assists}</strong> A</span>
                      </div>
                      <div className="timeline-badge-title"><i className="fa-solid fa-medal"></i> {t.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

