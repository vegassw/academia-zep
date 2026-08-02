import React from 'react';
import { UserCheck, Shield, HeartPulse, Award } from 'lucide-react';

export const StaffPage = () => {
  const staffMembers = [
    {
      role: "DIRECTOR TÉCNICO SUB-14",
      name: "Prof. Matías Valenzuela",
      bio: "Entrenador Profesional INAF con especialización en perfeccionamiento táctico juvenil y toma de decisiones.",
      icon: "fa-user-tie"
    },
    {
      role: "DIRECTOR DEPORTIVO ZEP",
      name: "Prof. Esteban Morales",
      bio: "Licenciado en Educación Física. Diseñador del modelo pedagógico deportivo y seguimiento de talentos ZEP.",
      icon: "fa-clipboard-check"
    },
    {
      role: "PREPARADOR DE PORTEROS",
      name: "Prof. Claudio Bravo R.",
      bio: "Especialista en desarrollo de reflejos, biomecánica de vuelo y juego de pies moderno para guardametas.",
      icon: "fa-hands-holding"
    },
    {
      role: "PREPARADORA FÍSICA",
      name: "Dra. Camila Sepúlveda",
      bio: "Especialista en fisiología del ejercicio infanto-juvenil, evaluación antropométrica y nutrición.",
      icon: "fa-heart-pulse"
    }
  ];

  return (
    <section className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        <div className="section-header center">
          <span className="section-tag"><i className="fa-solid fa-clipboard-user"></i> LIDERAZGO FORMATIVO</span>
          <h1 className="section-title">Cuerpo Técnico & Staff ZEP</h1>
          <p className="section-subtitle">
            Profesionales titulados dedicados al crecimiento deportivo y humano de cada alumno en la academia.
          </p>
        </div>

        <div className="staff-grid">
          {staffMembers.map((member, idx) => (
            <div key={idx} className="staff-card card-glass">
              <div className="staff-avatar"><i className={`fa-solid ${member.icon}`}></i></div>
              <span className="staff-role">{member.role}</span>
              <h3 className="staff-name">{member.name}</h3>
              <p className="staff-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
