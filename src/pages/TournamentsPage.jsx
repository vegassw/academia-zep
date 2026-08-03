import React, { useState } from 'react';
import { Trophy, Calendar, CheckCircle, Flame, Star } from 'lucide-react';

export const TournamentsPage = () => {
  const [activeTab, setActiveTab] = useState('copa-santiago');

  return (
    <section className="section section-dark page-top-padding">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag"><i className="fa-solid fa-shield-halved"></i> COMPETENCIA REGIONAL</span>
          <h1 className="section-title">Torneos & Tabla de Posiciones</h1>
          <p className="section-subtitle">
            Seguimiento en tiempo real del desempeño competitivo de Academia ZEP en campeonatos locales y nacionales.
          </p>
        </div>

        {/* TOURNAMENT SELECTOR TABS */}
        <div className="tabs-container" style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <button className={`tab-btn ${activeTab === 'copa-santiago' ? 'active' : ''}`} onClick={() => setActiveTab('copa-santiago')}>
            <i className="fa-solid fa-fire"></i> Copa Santiago 2026 <span className="tag-status live">En Curso</span>
          </button>
          <button className={`tab-btn ${activeTab === 'liga-junior' ? 'active' : ''}`} onClick={() => setActiveTab('liga-junior')}>
            <i className="fa-solid fa-star"></i> Liga Junior ZEP <span className="tag-status next">Próximo</span>
          </button>
          <button className={`tab-btn ${activeTab === 'apertura-2025' ? 'active' : ''}`} onClick={() => setActiveTab('apertura-2025')}>
            <i className="fa-solid fa-trophy"></i> Apertura Formativo <span className="tag-status finished">Finalizado</span>
          </button>
        </div>

        <div className="tournament-layout">
          {/* STANDINGS TABLE */}
          <div className="standings-card card-glass">
            <div className="card-header">
              <h3><i className="fa-solid fa-table-list"></i> Tabla de Posiciones — Sub-14</h3>
              <span className="table-badge">Fecha 8 de 10</span>
            </div>
            <div className="table-responsive">
              <table className="standings-table">
                <thead>
                  <tr>
                    <th>POS</th>
                    <th>EQUIPO</th>
                    <th>PJ</th>
                    <th>PG</th>
                    <th>PE</th>
                    <th>PP</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>DIF</th>
                    <th>PTS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="highlight-zep">
                    <td className="pos-num pos-1">1</td>
                    <td className="team-cell">
                      <div className="team-badge-sm zep-bg"><i className="fa-solid fa-bolt"></i></div>
                      <strong>Academia ZEP</strong>
                    </td>
                    <td>8</td><td>7</td><td>1</td><td>0</td><td>26</td><td>5</td><td>+21</td>
                    <td className="pts-bold">22</td>
                  </tr>
                  <tr>
                    <td className="pos-num pos-2">2</td>
                    <td className="team-cell"><div className="team-badge-sm blue-bg">CS</div><span>Cordillera Stars</span></td>
                    <td>8</td><td>6</td><td>0</td><td>2</td><td>19</td><td>8</td><td>+11</td><td className="pts-bold">18</td>
                  </tr>
                  <tr>
                    <td className="pos-num pos-3">3</td>
                    <td className="team-cell"><div className="team-badge-sm red-bg">FC</div><span>Formatorio Central</span></td>
                    <td>8</td><td>4</td><td>2</td><td>2</td><td>15</td><td>11</td><td>+4</td><td className="pts-bold">14</td>
                  </tr>
                  <tr>
                    <td className="pos-num">4</td>
                    <td className="team-cell"><div className="team-badge-sm yellow-bg">AD</div><span>Atlético Deportivo</span></td>
                    <td>8</td><td>3</td><td>1</td><td>4</td><td>12</td><td>14</td><td>-2</td><td className="pts-bold">10</td>
                  </tr>
                  <tr>
                    <td className="pos-num">5</td>
                    <td className="team-cell"><div className="team-badge-sm green-bg">SL</div><span>Sporting Lautaro</span></td>
                    <td>8</td><td>2</td><td>0</td><td>6</td><td>9</td><td>18</td><td>-9</td><td className="pts-bold">6</td>
                  </tr>
                  <tr>
                    <td className="pos-num">6</td>
                    <td className="team-cell"><div className="team-badge-sm purple-bg">UJ</div><span>Unión Juvenil</span></td>
                    <td>8</td><td>0</td><td>0</td><td>8</td><td>3</td><td>28</td><td>-25</td><td className="pts-bold">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FIXTURE & RESULTS COLUMN */}
          <div className="fixture-column">
            {/* RECENT RESULT */}
            <div className="match-card card-glass">
              <div className="match-card-label"><i className="fa-solid fa-check-circle"></i> ÚLTIMO RESULTADO</div>
              <div className="match-body">
                <div className="team-side">
                  <div className="team-badge-lg zep-bg"><i className="fa-solid fa-bolt"></i></div>
                  <span className="team-name">Academia ZEP</span>
                </div>
                <div className="score-box">
                  <span className="score">3 - 1</span>
                  <span className="match-date">Sáb 26 Jul</span>
                </div>
                <div className="team-side">
                  <div className="team-badge-lg red-bg">FC</div>
                  <span className="team-name">Formatorio Central</span>
                </div>
              </div>
              <div className="match-footer">
                <span><i className="fa-solid fa-futbol"></i> Goles ZEP: M. Silva (2), C. Rojas (1)</span>
              </div>
            </div>

            {/* NEXT MATCH */}
            <div className="match-card card-glass match-highlight">
              <div className="match-card-label live-text"><i className="fa-solid fa-calendar-days"></i> PRÓXIMO PARTIDO — SEMIFINAL</div>
              <div className="match-body">
                <div className="team-side">
                  <div className="team-badge-lg zep-bg"><i className="fa-solid fa-bolt"></i></div>
                  <span className="team-name">Academia ZEP</span>
                </div>
                <div className="vs-box">
                  <span className="vs-text">VS</span>
                  <span className="match-time">11:00 HRS</span>
                </div>
                <div className="team-side">
                  <div className="team-badge-lg blue-bg">CS</div>
                  <span className="team-name">Cordillera Stars</span>
                </div>
              </div>
              <div className="match-footer">
                <span><i className="fa-solid fa-location-dot"></i> Estadio Complejo Deportivo ZEP — Cancha 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
