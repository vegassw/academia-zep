import React from 'react';
import { Hero3DShield } from '../components/Hero3DShield';
import { FlipCard3D } from '../components/FlipCard3D';
import { PillarsAccordion } from '../components/PillarsAccordion';
import { ClubAffiliations } from '../components/ClubAffiliations';
import { Trophy, Users, Shield, Award, Calendar, ChevronRight, ArrowRight, Layers, Newspaper, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage = ({ onOpenInscription }) => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero" id="inicio">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fa-solid fa-trophy"></i> ACADEMIA DE FÚTBOL FORMATIVO CHILE
            </div>
            <h1 className="hero-title">
              Formando Talentos, <br />
              <span className="text-gradient">Construyendo Campeones</span>
            </h1>
            <p className="hero-description">
              Desarrollo deportivo integral con metodología profesional, seguimiento de estadísticas individuales, 
              metas por jugador y proyección a clubes profesionales de Primera A (Colo-Colo, U. de Chile, Palestino).
            </p>
            <div className="hero-actions">
              <button onClick={onOpenInscription} className="btn btn-primary btn-glow">
                <i className="fa-solid fa-bolt"></i> Inscribir a Mi Hijo (Clase Demo Gratis)
              </button>
              <Link to="/escuelas" className="btn btn-outline">
                <i className="fa-solid fa-circle-play"></i> Ver Método ZEP
              </Link>
            </div>
          </div>

          {/* 3D FIRE SHIELD SHOWCASE */}
          <Hero3DShield />
        </div>

        {/* HERO STATS COUNTER */}
        <div className="container">
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">6</div>
              <div className="stat-label">Categorías Formativas</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <div className="stat-number">180+</div>
              <div className="stat-label">Jugadores Activos</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <div className="stat-number">14</div>
              <div className="stat-label">Torneos Disputados</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <div className="stat-number">5</div>
              <div className="stat-label">Clubes en Convenio</div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINK BAR */}
      <section className="section" style={{ background: 'linear-gradient(180deg, rgba(15,17,24,0.95) 0%, rgba(10,11,16,0.98) 100%)', padding: '2rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="section-tag" style={{ marginBottom: '0.4rem' }}><i className="fa-solid fa-users"></i> PLANTILLA & SEGUIMIENTO</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 900, color: '#fff' }}>
              Revisa la Plantilla Formativa y Métricas por Jugador
            </h3>
            <p style={{ color: 'var(--zep-text-muted)', fontSize: '0.95rem' }}>
              Filtra por categorías de edad, posiciones y estadísticas académicas sin precios ni transferencias.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/plantilla" className="btn btn-primary btn-glow" style={{ padding: '0.8rem 1.6rem' }}>
              Ver Plantilla <ChevronRight size={18} />
            </Link>
            <Link to="/categorias" className="btn btn-outline" style={{ padding: '0.8rem 1.6rem' }}>
              Ver Categorías Sub-8 a Sub-18 <Layers size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CLUB AFFILIATION & SCOUTING CONVENIOS (COLO COLO, U DE CHILE, PALESTINO) */}
      <ClubAffiliations />

      {/* SECTION: ESCUELAS ESPECIALIZADAS & 3D CARDS */}
      <section className="section" id="escuelas">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag"><i className="fa-solid fa-wand-magic-sparkles"></i> METODOLOGÍA INTEGRAL ZEP</span>
            <h2 className="section-title">Escuelas Especializadas & Pilares Deportivo</h2>
            <p className="section-subtitle">Gira las tarjetas 3D para descubrir las evaluaciones físicas y la táctica por bloques de cada programa.</p>
          </div>

          <div className="flip-cards-grid">
            <FlipCard3D 
              id="card-infantil"
              badge="EDADES 6 A 12 AÑOS"
              title="Escuela Fútbol Infantil"
              desc="Desarrollo psicomotor, coordinación básica, dominio de balón y primeros fundamentos colectivos."
              highlights={["Control Orientado", "Valores ZEP"]}
              bgClass="bg-infantil"
              backTag="METODOLOGÍA INFANTIL"
              backTitle="Detalle Pedagógico & Evaluaciones"
              items={[
                { icon: "fa-futbol", colorClass: "text-orange", label: "Técnica", text: "Dominio de ambos perfiles y pase en espacio reducido." },
                { icon: "fa-vial", colorClass: "text-green", label: "Evaluaciones Físicas", text: "Test Navette / Yo-Yo Intermitente y plataforma de salto." },
                { icon: "fa-brain", colorClass: "text-gold", label: "Psicológico & Fair Play", text: "Manejo de la frustración y compañerismo." }
              ]}
            />

            <FlipCard3D 
              id="card-arqueros"
              badge="ESPECIALIDAD PRO ARQUEROS"
              title="Escuela de Arqueros ZEP"
              desc="Programa especializado para guardametas. Biomecánica, achiques 1vs1 y juego de pies."
              highlights={["Achiques 1vs1", "Tiempo Reacción"]}
              bgClass="bg-arqueros"
              backTag="CENTRO DE PORTEROS"
              backTitle="Detalle de Especialización"
              items={[
                { icon: "fa-hands-holding", colorClass: "text-orange", label: "Bloqueo", text: "Embolse seguro, caídas amortiguadas y despejes de puños." },
                { icon: "fa-shoe-prints", colorClass: "text-green", label: "Juego de Pies", text: "Salida limpia desde el fondo para romper líneas." },
                { icon: "fa-gauge-high", colorClass: "text-gold", label: "Métricas", text: "Medición en ms de tiempo de respuesta ante tiros." }
              ]}
            />

            <FlipCard3D 
              id="card-juvenil"
              badge="SUB-14 A SUB-18 PRO"
              title="Fútbol Formativo & Pro"
              desc="Perfeccionamiento táctico por bloques, sistemas complejos y proyección a pruebas en clubes."
              highlights={["Táctica por Bloques", "Proyección Pro"]}
              bgClass="bg-juvenil"
              backTag="FORMATIVO Y COMPETENCIA"
              backTitle="Detalle Táctico & Físico"
              items={[
                { icon: "fa-chess-board", colorClass: "text-orange", label: "Sistemas", text: "Modelos 4-3-3 / 4-2-3-1 y pressings tras pérdida." },
                { icon: "fa-dumbbell", colorClass: "text-green", label: "Acondicionamiento", text: "Trabajo de fuerza explosiva y VAM." }
              ]}
            />

            <FlipCard3D 
              id="card-adultos"
              badge="COMUNIDAD APODERADOS"
              title="Escuela Fútbol Adultos"
              desc="Cardio fútbol, reacondicionamiento saludable y liga interna nocturna para apoderados y adultos."
              highlights={["Cardio Fútbol", "Torneo Interno"]}
              bgClass="bg-adultos"
              backTag="SALUD Y RECREACIÓN"
              backTitle="Detalle para Adultos"
              items={[
                { icon: "fa-fire", colorClass: "text-orange", label: "Salud", text: "Dejar el sedentarismo con pautas adaptadas." },
                { icon: "fa-users-gear", colorClass: "text-green", label: "Partidos Guiados", text: "Entrenamientos con árbitros oficiales e indumentaria." }
              ]}
            />
          </div>

          <PillarsAccordion />
        </div>
      </section>

      {/* QUICK NAV TO NEWS & SOCIAL */}
      <section className="section" style={{ background: 'rgba(15,17,24,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="card-glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <span className="section-tag" style={{ marginBottom: '0.5rem' }}><Newspaper size={14} className="inline mr-1" /> ACTUALIDAD</span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.6rem' }}>Noticias y Convocatorias ZEP</h3>
            <p style={{ color: 'var(--zep-text-muted)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              Revisa los resúmenes de los últimos torneos, test de campo y llamados a selección.
            </p>
            <Link to="/noticias" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Ver Noticias <ArrowRight size={16} />
            </Link>
          </div>

          <div className="card-glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <span className="section-tag" style={{ marginBottom: '0.5rem' }}><Instagram size={14} className="inline mr-1" /> REDES SOCIALES</span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.6rem' }}>Comunidad en @academiazep_cl</h3>
            <p style={{ color: 'var(--zep-text-muted)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              Interactúa con las publicaciones oficiales, fotos de entrenamientos y momentos destacados.
            </p>
            <Link to="/redes" className="btn btn-primary btn-glow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Ver Feed de Instagram <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
