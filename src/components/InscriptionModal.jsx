import React, { useState } from 'react';
import { X, Flame, CheckCircle2, User, Phone, Mail, Calendar, Shield } from 'lucide-react';

export const InscriptionModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    playerName: '',
    age: 'sub14',
    parentName: '',
    phone: '',
    email: '',
    sede: 'cancha1'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <div 
        className="card-glass"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '520px',
          borderRadius: '20px',
          border: '1px solid var(--zep-border-orange)',
          padding: '2.2rem',
          boxShadow: '0 0 40px rgba(255, 85, 0, 0.3)',
          background: '#0d0e14',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            color: '#fff',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(0, 184, 148, 0.2)', border: '2px solid #00b894', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
              <CheckCircle2 size={40} className="text-green" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '0.6rem' }}>
              ¡Inscripción Exitosa!
            </h3>
            <p style={{ color: 'var(--zep-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.8rem' }}>
              Hemos recibido la solicitud para <strong style={{ color: '#fff' }}>{formData.playerName || 'el alumno'}</strong>. 
              Nuestro coordinador deportivo se pondrá en contacto al WhatsApp <strong style={{ color: 'var(--zep-orange)' }}>{formData.phone || 'indicado'}</strong> en menos de 24 horas.
            </p>
            <button className="btn btn-primary btn-glow" onClick={handleReset} style={{ width: '100%' }}>
              Entendido / Cerrar
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <Flame size={20} className="text-orange" />
              <span style={{ fontFamily: 'var(--font-sports)', fontSize: '0.8rem', fontWeight: 800, color: 'var(--zep-orange)', letterSpacing: '1px' }}>
                CLASE DEMO FORMATIVA GRATIS
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '0.4rem' }}>
              Inscribir a Mi Hijo
            </h2>
            <p style={{ color: 'var(--zep-text-muted)', fontSize: '0.88rem', marginBottom: '1.6rem' }}>
              Completa los datos para agendar una clase de evaluación técnica y física sin costo.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#ccc', marginBottom: '0.4rem' }}>
                  Nombre del Futbolista (Alumno) *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej: Matías Ovalles"
                  value={formData.playerName}
                  onChange={e => setFormData({ ...formData, playerName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#ccc', marginBottom: '0.4rem' }}>
                    Categoría / Edad *
                  </label>
                  <select 
                    value={formData.age}
                    onChange={e => setFormData({ ...formData, age: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: '#151722',
                      color: '#fff',
                      outline: 'none'
                    }}
                  >
                    <option value="sub8">Sub-8 (6 a 8 años)</option>
                    <option value="sub10">Sub-10 (9 a 10 años)</option>
                    <option value="sub12">Sub-12 (11 a 12 años)</option>
                    <option value="sub14">Sub-14 (13 a 14 años)</option>
                    <option value="sub16">Sub-16 (15 a 16 años)</option>
                    <option value="pro">Sub-18 Pro (17 a 18 años)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#ccc', marginBottom: '0.4rem' }}>
                    Teléfono WhatsApp *
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+56 9 8765 4321"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'rgba(255,255,255,0.05)',
                      color: '#fff',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#ccc', marginBottom: '0.4rem' }}>
                  Nombre del Apoderado (Padre/Madre/Tutor) *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej: Carlos Ovalles"
                  value={formData.parentName}
                  onChange={e => setFormData({ ...formData, parentName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#ccc', marginBottom: '0.4rem' }}>
                  Correo Electrónico *
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="ejemplo@correo.cl"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-glow" style={{ marginTop: '0.8rem', padding: '1rem' }}>
                <Flame size={18} /> Confirmar Reserva de Clase Gratis
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
