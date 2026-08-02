import React from 'react';
import { FlipCard3D } from '../components/FlipCard3D';
import { PillarsAccordion } from '../components/PillarsAccordion';
import { Sparkles } from 'lucide-react';

export const SchoolsPage = () => {
  return (
    <section className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        <div className="section-header center">
          <span className="section-tag"><Sparkles size={16} className="inline mr-1" /> METODOLOGÍA PRO INTEGRAL</span>
          <h1 className="section-title">Escuelas Especializadas ZEP</h1>
          <p className="section-subtitle">
            Modelos de entrenamiento adaptados para cada etapa del desarrollo deportivo. 
            Haz clic en el botón de cada tarjeta para girarla 3D y conocer sus evaluaciones de campo.
          </p>
        </div>

        {/* 3D FLIP CARDS GRID */}
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

        {/* ACCORDION PILLARS */}
        <PillarsAccordion />
      </div>
    </section>
  );
};
