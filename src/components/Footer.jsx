import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
            <img src="/assets/logo-official.jpg" alt="Academia ZEP Logo" style={{ height: '44px', borderRadius: '8px' }} />
            <span className="brand-title" style={{ fontSize: '1.4rem', fontWeight: 800 }}>ACADEMIA <span className="text-orange">ZEP</span></span>
          </div>
          <p className="footer-desc">Formación integral de futbolistas con valores, tecnología aplicada y desarrollo humano en Chile.</p>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <Link to="/">Inicio</Link>
          <Link to="/plantilla">Plantilla Formativa</Link>
          <Link to="/escuelas">Escuelas & Pilares ZEP</Link>
          <Link to="/jugador/p1">Perfil Matías Ovalles</Link>
        </div>

        <div className="footer-contact">
          <h4>Contacto & Complejo</h4>
          <p><i className="fa-solid fa-location-dot text-orange"></i> Santiago de Chile</p>
          <p><i class="fa-solid fa-phone text-orange"></i> +56 9 8765 4321</p>
          <p><i className="fa-solid fa-envelope text-orange"></i> contacto@academiazep.cl</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Academia ZEP — Plataforma Web Oficial de Fútbol Formativo.</p>
        </div>
      </div>
    </footer>
  );
};
