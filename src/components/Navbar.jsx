import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = (canvas.width = 60);
    const h = (canvas.height = 60);

    const particles = [];
    for (let i = 0; i < 22; i++) {
      particles.push({
        x: w / 2 + (Math.random() - 0.5) * 26,
        y: h / 2 + (Math.random() - 0.5) * 26,
        r: Math.random() * 2 + 1,
        vy: -Math.random() * 0.9 - 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        color: Math.random() > 0.5 ? 'rgba(255, 85, 0,' : 'rgba(255, 200, 0,'
      });
    }

    let animId;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.y += p.vy;
        p.alpha -= 0.015;
        if (p.alpha <= 0 || p.y < 0) {
          p.y = h / 2 + 15;
          p.x = w / 2 + (Math.random() - 0.5) * 28;
          p.alpha = Math.random() * 0.8 + 0.2;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#ff5500';
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span className="badge-live"><i className="fa-solid fa-circle-dot"></i> EN VIVO</span>
          <span className="top-bar-text">Copa Santiago Formativa: Sub-14 disputará las semifinales este Sábado 11:00 hrs.</span>
          <Link to="/torneos" className="top-bar-link">Ver Torneos & Posiciones <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar" id="navbar">
        <div className="container navbar-container">
          <Link to="/" className="navbar-brand">
            <div className="logo-fire-wrap">
              <canvas ref={canvasRef} width="60" height="60" id="logoFireCanvas"></canvas>
              {/* Uses real logo-official.jpg with circular mask */}
              <img src="/assets/logo-official.jpg" alt="Academia ZEP Logo" className="brand-logo" id="navLogo3D" />
            </div>
            <div className="brand-text">
              <span className="brand-title">ACADEMIA <span className="text-orange">ZEP</span></span>
              <span className="brand-sub">FÚTBOL FORMATIVO DE ALTO NIVEL</span>
            </div>
          </Link>

          <nav className={`nav-menu ${mobileOpen ? 'active' : ''}`} id="navMenu">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Inicio
            </NavLink>
            <NavLink to="/plantilla" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Plantilla Formativa
            </NavLink>
            <NavLink to="/categorias" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Categorías
            </NavLink>
            <NavLink to="/escuelas" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Escuelas & Pilares
            </NavLink>
            <NavLink to="/torneos" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Torneos
            </NavLink>
            <NavLink to="/staff" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Staff
            </NavLink>
            <NavLink to="/noticias" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Noticias
            </NavLink>
            <NavLink to="/redes" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Redes
            </NavLink>
            <a href="/#contacto" className="nav-link nav-btn-cta" onClick={() => setMobileOpen(false)}>
              Inscribirse
            </a>
          </nav>

          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Abrir menú">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
};
