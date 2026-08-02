import React, { useEffect, useRef } from 'react';
import { Flame, Sparkles } from 'lucide-react';

export const Hero3DShield = () => {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = (canvas.width = 400);
    const h = (canvas.height = 400);
    const cx = w / 2;
    const cy = h / 2;

    // Embers and orbiting football particles
    const particles = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        dist: Math.random() * 120 + 50,
        r: Math.random() * 3 + 1,
        speed: Math.random() * 0.015 + 0.005,
        alpha: Math.random() * 0.8 + 0.2,
        color: Math.random() > 0.4 ? 'rgba(255, 85, 0,' : 'rgba(255, 200, 0,'
      });
    }

    let ballAngle = 0;
    let animId;

    function renderEffect() {
      ctx.clearRect(0, 0, w, h);

      // Core glow
      const grad = ctx.createRadialGradient(cx, cy, 50, cx, cy, 180);
      grad.addColorStop(0, 'rgba(255, 85, 0, 0.4)');
      grad.addColorStop(1, 'rgba(255, 85, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, 180, 0, Math.PI * 2);
      ctx.fill();

      // Orbital fire sparks
      particles.forEach(p => {
        p.angle += p.speed;
        p.dist += Math.sin(p.angle * 2) * 0.2;
        const x = cx + Math.cos(p.angle) * p.dist;
        const y = cy + Math.sin(p.angle) * p.dist;

        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ff5500';
        ctx.fill();
      });

      // 3D Spinning Soccer Ball Orbiting the Shield
      ballAngle += 0.02;
      const bx = cx + Math.cos(ballAngle) * 160;
      const by = cy + Math.sin(ballAngle) * 60;
      const bSize = Math.sin(ballAngle) > 0 ? 16 : 10;

      // Draw Orbiting Football
      ctx.beginPath();
      ctx.arc(bx, by, bSize, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#ff5500';
      ctx.fill();

      // Football pentagon pattern
      ctx.beginPath();
      ctx.arc(bx, by, bSize * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = '#111111';
      ctx.fill();

      animId = requestAnimationFrame(renderEffect);
    }

    renderEffect();
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = (e) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = (y - cy) / 10;
    const ry = (cx - x) / 10;

    wrap.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    wrap.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div className="hero-shield-showcase" style={{ position: 'relative', width: 400, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      <div className="shield-fire-ring" style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
        <canvas ref={canvasRef} width="400" height="400" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></canvas>
      </div>

      <div 
        ref={wrapRef}
        className="shield-img-wrap"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative', zIndex: 10, width: 220, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.1s ease-out' }}
      >
        <img 
          src="/assets/logo-official.jpg" 
          alt="Escudo Oficial ZEP" 
          className="hero-zep-shield-3d"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', filter: 'drop-shadow(0 0 20px rgba(255,85,0,0.6))' }}
        />
      </div>

      <div className="shield-hologram-label" style={{ position: 'absolute', bottom: -30, background: 'rgba(15,17,24,0.8)', border: '1px solid var(--zep-orange)', padding: '0.5rem 1rem', borderRadius: 30, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#fff', fontWeight: 800, whiteSpace: 'nowrap' }}>
        <Flame size={16} className="text-orange" /> ESCUDO OFICIAL & BALÓN 3D
      </div>
    </div>
  );
};

