import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { playersData } from '../data/playersData';
import { ArrowLeft, Target, Trophy, Award, Activity, Brain, Dumbbell } from 'lucide-react';

export const PlayerDetailPage = () => {
  const { id } = useParams();
  const player = playersData.find(p => p.id === (id || 'p1')) || playersData[0];
  const { stats, objectives } = player;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fa-solid fa-star text-gold mr-1"></i>);
    }
    return stars;
  };

  return (
    <section className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        
        {/* BACK BUTTON */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link to="/plantilla" className="btn-flip-back" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Volver a la Plantilla Formativa
          </Link>
        </div>

        {/* DETAILED PLAYER PROFILE BOARD */}
        <div className="player-profile-board card-glass" id="playerProfileBoard">
          
          {/* LEFT SIDEBAR: CARNET SHOWCASE BADGE */}
          <div className="profile-sidebar">
            <div className="profile-carnet-badge">
              <div className="card-top-row">
                <span className="card-number">#{player.number}</span>
                <div className="card-stars">{renderStars(player.rating)}</div>
              </div>

              <div className="profile-avatar-lg">
                <img src={player.avatar} alt={player.name} />
              </div>

              <h3 className="profile-name">{player.name}</h3>
              <span className="profile-position-badge">{player.positionFull}</span>
              
              <div className="profile-quick-meta">
                <div>
                  <span>Categoría</span>
                  <strong>{player.categoryLabel}</strong>
                </div>
                <div>
                  <span>Edad</span>
                  <strong>{player.age} años</strong>
                </div>
                <div>
                  <span>Pie Hábil</span>
                  <strong>{player.foot}</strong>
                </div>
                <div>
                  <span>Nacionalidad</span>
                  <strong>{player.nation}</strong>
                </div>
                <div>
                  <span>Partidos ZEP</span>
                  <strong>{player.history.partidos} P.J.</strong>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT MAIN: STATS & OBJECTIVES */}
          <div className="profile-details-main">
            
            {/* STATS ATTRIBUTES BARS */}
            <div>
              <h4 className="details-block-title">
                <i className="fa-solid fa-chart-simple"></i> Evaluación de Atributos Formativos ZEP
              </h4>
              <div className="stats-bars-grid">
                <div className="stat-bar-item">
                  <div className="stat-bar-header"><span>Velocidad & Aceleración</span><span className="stat-bar-val">{stats.velocidad}%</span></div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: `${stats.velocidad}%` }}></div></div>
                </div>

                <div className="stat-bar-item">
                  <div className="stat-bar-header"><span>Técnica & Control</span><span className="stat-bar-val">{stats.tecnica}%</span></div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: `${stats.tecnica}%` }}></div></div>
                </div>

                <div className="stat-bar-item">
                  <div className="stat-bar-header"><span>Tiro / Definición</span><span className="stat-bar-val">{stats.tiro}%</span></div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: `${stats.tiro}%` }}></div></div>
                </div>

                <div className="stat-bar-item">
                  <div className="stat-bar-header"><span>Pase & Visión</span><span className="stat-bar-val">{stats.pase}%</span></div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: `${stats.pase}%` }}></div></div>
                </div>

                <div className="stat-bar-item">
                  <div className="stat-bar-header"><span>Resistencia Aeróbica</span><span className="stat-bar-val">{stats.resistencia}%</span></div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: `${stats.resistencia}%` }}></div></div>
                </div>

                <div className="stat-bar-item">
                  <div className="stat-bar-header"><span>Disciplina & Fair Play</span><span className="stat-bar-val">{stats.disciplina}%</span></div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: `${stats.disciplina}%` }}></div></div>
                </div>
              </div>
            </div>

            {/* OBJECTIVES PROGRESS BARS */}
            <div>
              <h4 className="details-block-title">
                <i className="fa-solid fa-bullseye"></i> Objetivos Individuales de Desarrollo ZEP
              </h4>
              <div className="objectives-list">
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

                <div className="objective-item">
                  <div className="obj-header">
                    <div className="obj-title-group">
                      <div className="obj-icon"><i className="fa-solid fa-brain"></i></div>
                      <span className="obj-name">{objectives.attitude.title}</span>
                    </div>
                    <span className="obj-percentage">{objectives.attitude.progress}%</span>
                  </div>
                  <p className="obj-desc">{objectives.attitude.desc}</p>
                  <div className="bar-track"><div className="bar-fill bar-fill-obj" style={{ width: `${objectives.attitude.progress}%` }}></div></div>
                </div>

                <div className="objective-item">
                  <div className="obj-header">
                    <div className="obj-title-group">
                      <div className="obj-icon"><i className="fa-solid fa-trophy"></i></div>
                      <span className="obj-name">{objectives.season.title}</span>
                    </div>
                    <span className="obj-percentage">{objectives.season.progress}%</span>
                  </div>
                  <p className="obj-desc">{objectives.season.desc}</p>
                  <div className="bar-track"><div className="bar-fill bar-fill-obj" style={{ width: `${objectives.season.progress}%` }}></div></div>
                </div>
              </div>
            </div>

            {/* TRAJECTORY TIMELINE */}
            <div>
              <h4 className="details-block-title">
                <i className="fa-solid fa-clock-rotate-left"></i> Trayectoria de Temporadas
              </h4>
              <div className="trajectory-timeline">
                {(player.trajectory || [
                  { year: "2024", club: `Academia ZEP ${player.categoryLabel}`, games: 12, goals: 6, assists: 4, title: "Torneo Apertura Formativo" },
                  { year: "2025", club: `Academia ZEP ${player.categoryLabel}`, games: 15, goals: 8, assists: 7, title: "Campeón Regional" },
                  { year: "2026", club: `Academia ZEP ${player.categoryLabel}`, games: player.history.partidos, goals: player.history.goles, assists: player.history.asistencias, title: "Torneo en Curso (Titular)" }
                ]).map((t, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-year">{t.year}</div>
                    <div className="timeline-content">
                      <div className="timeline-club">{t.club}</div>
                      <div className="timeline-meta">
                        <span><strong>{t.games}</strong> Partidos</span>
                        <span><strong>{t.goals}</strong> Goles</span>
                        <span><strong>{t.assists}</strong> Asistencias</span>
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
