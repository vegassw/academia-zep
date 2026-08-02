import React, { useState } from 'react';
import { playersData } from '../data/playersData';
import { Link } from 'react-router-dom';
import { Filter, Search, Award, ArrowRight, UserCheck, Shield } from 'lucide-react';

export const SquadPage = () => {
  const [posFilter, setPosFilter] = useState('all');
  const [catFilter, setCatFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = playersData.filter(player => {
    const matchesPos = posFilter === 'all' || player.positionGroup === posFilter;
    const matchesCat = catFilter === 'all' || player.category === catFilter;
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPos && matchesCat && matchesSearch;
  });

  return (
    <div>
      {/* BANNER DE PLANTILLA FORMATIVA */}
      <section className="tm-banner-section">
        <div className="container">
          <div className="tm-header-card card-glass">
            <div className="tm-header-main">
              <div className="tm-badge-shield">
                <img src="/assets/logo-official.jpg" alt="Escudo ZEP Logo" style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div className="tm-sub-title">PLANTILLA OFICIAL FORMATIVA 2026/2027</div>
                <h1 className="tm-title">Academia ZEP — Squad & Performance Data</h1>
                <p className="tm-meta-desc">
                  Registro completo de futbolistas formativos por categoría de edad, dorsales, posiciones en campo, 
                  estatura, pie dominante y estadísticas oficiales de competencia.
                </p>
              </div>
            </div>

            <div className="tm-stats-grid">
              <div className="tm-stat-box">
                <span className="tm-stat-label">Jugadores Formativos</span>
                <span className="tm-stat-val text-gold">180+ Alumnos</span>
              </div>
              <div className="tm-stat-box">
                <span className="tm-stat-label">Promedio de Edad</span>
                <span className="tm-stat-val">13.8 Años</span>
              </div>
              <div className="tm-stat-box">
                <span className="tm-stat-label">Selección Regional</span>
                <span className="tm-stat-val text-orange">4 Convocados</span>
              </div>
              <div className="tm-stat-box">
                <span className="tm-stat-label">Complejo Base</span>
                <span className="tm-stat-val">Cancha 1 ZEP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SQUAD LISTING & FILTERS */}
      <section className="section">
        <div className="container">
          
          {/* FILTERS TOOLBAR */}
          <div className="tm-filters-bar card-glass">
            <div className="filter-group">
              <label><Filter size={16} /> Posición:</label>
              <select value={posFilter} onChange={e => setPosFilter(e.target.value)}>
                <option value="all">Todas las posiciones</option>
                <option value="por">Guardametas (POR)</option>
                <option value="def">Defensas (DEF)</option>
                <option value="med">Centrocampistas (MED)</option>
                <option value="del">Delanteros (DEL)</option>
              </select>
            </div>

            <div className="filter-group">
              <label><Shield size={16} /> Categoría:</label>
              <select value={catFilter} onChange={e => setCatFilter(e.target.value)}>
                <option value="all">Todas las categorías</option>
                <option value="sub8">Sub-8</option>
                <option value="sub10">Sub-10</option>
                <option value="sub12">Sub-12</option>
                <option value="sub14">Sub-14</option>
                <option value="sub16">Sub-16</option>
                <option value="pro">Sub-18 Pro</option>
              </select>
            </div>

            <div className="filter-group search-group">
              <input 
                type="text" 
                placeholder="Buscar jugador por nombre..." 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <Search size={16} className="search-icon" />
            </div>
          </div>

          {/* SQUAD TABLE */}
          <div className="card-glass tm-table-card">
            <div className="table-responsive">
              <table className="tm-squad-table">
                <thead>
                  <tr>
                    <th style={{ width: 50 }}>#</th>
                    <th>FUTBOLISTA</th>
                    <th>POSICIÓN</th>
                    <th>EDAD</th>
                    <th>ALTURA</th>
                    <th>PIE</th>
                    <th>NAC.</th>
                    <th>PJ</th>
                    <th>GOLES</th>
                    <th>ASIST</th>
                    <th>RATING</th>
                    <th style={{ textAlign: 'right' }}>FICHA</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPlayers.length === 0 ? (
                    <tr>
                      <td colSpan="12" style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--zep-text-muted)' }}>
                        No se encontraron jugadores que coincidan con los filtros.
                      </td>
                    </tr>
                  ) : (
                    filteredPlayers.map(player => (
                      <tr key={player.id} className={player.id === 'p1' ? 'highlight-matias-row' : ''}>
                        <td className="num-bold">#{player.number}</td>
                        <td className="player-tm-cell">
                          <img src={player.avatar} alt={player.name} className="tm-avatar-img" />
                          <div>
                            <strong className="tm-player-name">
                              {player.name}
                              {player.isNationalCall && <span className="ml-2 text-xs text-gold font-bold"> [Selección 🇨🇱]</span>}
                            </strong>
                            <span className="tm-player-sub">{player.categoryLabel} • {player.positionFull}</span>
                          </div>
                        </td>
                        <td>
                          <span className={`pos-badge pos-${player.positionShort.toLowerCase()}`}>
                            {player.positionShort}
                          </span>
                        </td>
                        <td>{player.age} años</td>
                        <td>{player.height || '1.70 m'}</td>
                        <td>{player.foot}</td>
                        <td>{player.nation}</td>
                        <td className="num-sports">{player.history.partidos}</td>
                        <td className="num-bold text-orange">{player.history.goles}</td>
                        <td className="num-bold text-gold">{player.history.asistencias}</td>
                        <td className="rating-cell">⭐ {player.rating.toFixed(1)}</td>
                        <td style={{ textAlign: 'right' }}>
                          <Link to={`/jugador/${player.id}`} className="table-btn-action">
                            Ver Ficha <ArrowRight size={14} className="inline ml-1" />
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
