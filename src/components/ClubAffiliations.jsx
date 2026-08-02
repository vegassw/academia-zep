import React from 'react';
import { Award, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ClubAffiliations = () => {
  const clubs = [
    {
      name: "C.S.D. Colo-Colo",
      tag: "Primera A",
      colors: "linear-gradient(135deg, #111111 0%, #333333 100%)",
      borderColor: "#ffffff",
      desc: "Veedurías directas y partidos amistosos de prueba para las categorías Sub-12 a Sub-16.",
      badgeText: "⚪⚫ ALBO",
      logoUrl: "/logos/colo-colo.png"
    },
    {
      name: "Universidad de Chile",
      tag: "Primera A",
      colors: "linear-gradient(135deg, #002b7a 0%, #001948 100%)",
      borderColor: "#e30613",
      desc: "Convenio de formación pedagógica y pruebas periódicas en el Centro Deportivo Azul (CDA).",
      badgeText: "🔵🔴 LA U",
      logoUrl: "/logos/udechile.png"
    },
    {
      name: "CD Palestino",
      tag: "Primera A",
      colors: "linear-gradient(135deg, #007a3d 0%, #004d26 100%)",
      borderColor: "#ee2e24",
      desc: "Intercambio de talentos juveniles, clínicas de perfeccionamiento táctico y pruebas formativas.",
      badgeText: "🟢🔴 ÁRABE",
      logoUrl: "/logos/palestino.png"
    },
    {
      name: "Universidad Católica",
      tag: "Primera A",
      colors: "linear-gradient(135deg, #0050a0 0%, #003366 100%)",
      borderColor: "#ffffff",
      desc: "Medición antropométrica conjunta y proyección de talentos en el Complejo Raimundo Tupper.",
      badgeText: "⚪🔵 CRUZADOS",
      logoUrl: "/logos/ucatolica.png"
    },
    {
      name: "Unión Española",
      tag: "Primera A",
      colors: "linear-gradient(135deg, #c8102e 0%, #8b0000 100%)",
      borderColor: "#ffc72c",
      desc: "Visitas técnicas de evaluadores oficiales al Complejo Deportivo ZEP.",
      badgeText: "🔴🟡 HISPANO",
      logoUrl: "/logos/uespanola.png"
    }
  ];

  return (
    <section className="section section-dark" id="convenios">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag"><ShieldCheck size={16} className="inline mr-1 text-orange" /> PROYECCIÓN PROFESIONAL</span>
          <h2 className="section-title">Convenios & Afiliaciones con Clubes de Primera A</h2>
          <p className="section-subtitle">
            Nuestra metodología ZEP mantiene vínculos de veeduría y pruebas formativas directas con los mejores clubes del fútbol profesional chileno.
          </p>
        </div>

        <div className="clubs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {clubs.map((c, idx) => (
            <div 
              key={idx} 
              className="card-glass" 
              style={{ 
                padding: '1.8rem', 
                borderRadius: '16px', 
                border: `1px solid ${c.borderColor}`, 
                background: 'rgba(15, 17, 24, 0.85)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-sports)', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                    {c.tag}
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {c.logoUrl && <img src={c.logoUrl} alt={c.name} style={{ width: 24, height: 24, objectFit: 'contain' }} />}
                    {c.badgeText}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.6rem' }}>
                  {c.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--zep-text-muted)', lineHeight: '1.5' }}>
                  {c.desc}
                </p>
              </div>

              <div style={{ marginTop: '1.2rem', paddingTop: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--zep-orange)', fontWeight: 700 }}>
                <i className="fa-solid fa-star"></i> Veeduría Formativa Oficial
              </div>
            </div>
          ))}
        </div>

        {/* CTA BANNER */}
        <div 
          className="card-glass" 
          style={{ 
            padding: '2rem 2.5rem', 
            borderRadius: '16px', 
            border: '1px solid var(--zep-border-orange)', 
            background: 'linear-gradient(90deg, rgba(255,85,0,0.1) 0%, rgba(15,17,24,0.9) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.3rem' }}>
              ¿Quieres proyectar el talento de tu hijo a clubes profesionales?
            </h4>
            <p style={{ color: 'var(--zep-text-muted)', fontSize: '0.9rem' }}>
              Agenda una clase de evaluación técnica y física con nuestro cuerpo técnico.
            </p>
          </div>
          <Link to="/plantilla" className="btn btn-primary btn-glow">
            Ver Plantilla Formativa <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
