/* ==========================================================================
   ACADEMIA ZEP — INTERACTIVE ENGINE & MOCK DATA
   ========================================================================== */

// --- MOCK PLAYERS DATABASE (TRANSFERMARKT STYLE) ---
const playersData = [
  {
    id: "p1",
    name: "Matías Ovalles",
    number: 5,
    category: "sub14",
    categoryLabel: "Sub-14",
    positionShort: "MED",
    positionFull: "Mediocampista de Creación / Volante Central",
    positionGroup: "med",
    age: 14,
    height: "1.68 m",
    foot: "Diestro",
    nation: "Chile 🇨🇱",
    marketValue: "€180,000",
    rating: 5.0,
    avatar: "assets/sub14-player-action.jpg",
    portraitAvatar: "assets/sub14-player-portrait.jpg",
    stats: { velocidad: 90, tecnica: 95, tiro: 92, pase: 94, resistencia: 88, disciplina: 98 },
    objectives: {
      tech: { title: "Objetivo Técnico", desc: "Golpeo de balón en suspensión y pase filtrado de primera intención", progress: 92 },
      phys: { title: "Objetivo Físico", desc: "Aceleración de 0 a 30m y cambio de ritmo en espacio reducido", progress: 95 },
      attitude: { title: "Objetivo Actitudinal", desc: "Liderazgo positivo en campo y fair play institucional", progress: 100 },
      season: { title: "Meta de Temporada", desc: "15 Goles + 12 Asistencias en Copa Santiago (Actual: 11 Goles, 9 Asist)", progress: 85 }
    },
    history: { partidos: 18, minutos: 1440, goles: 11, asistencias: 9, contribuciones: 20, amarillas: 1, rojas: 0, mvp: 5 },
    trajectory: [
      { year: "2024", club: "Academia ZEP Sub-12", games: 14, goals: 8, assists: 6, title: "Subcampeón Liga Infantil" },
      { year: "2025", club: "Academia ZEP Sub-13", games: 16, goals: 12, assists: 10, title: "Campeón Copa Apertura Formativa (MVP)" },
      { year: "2026", club: "Academia ZEP Sub-14", games: 18, goals: 11, assists: 9, title: "Semifinalista Copa Santiago (En curso)" }
    ],
    awards: ["Botín de Oro Sub-13 (2025)", "Mejor Mediocampista Formativo (2025)", "Capitán Sub-14 (2026)"]
  },
  {
    id: "p2",
    name: "Benjamín Zepeda",
    number: 10,
    category: "sub14",
    categoryLabel: "Sub-14",
    positionShort: "DEL",
    positionFull: "Extremo Izquierdo / Delantero",
    positionGroup: "del",
    age: 14,
    height: "1.70 m",
    foot: "Diestro",
    nation: "Chile 🇨🇱",
    marketValue: "€150,000",
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=500&q=80",
    portraitAvatar: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=500&q=80",
    stats: { velocidad: 94, tecnica: 91, tiro: 89, pase: 87, resistencia: 90, disciplina: 96 },
    objectives: {
      tech: { title: "Objetivo Técnico", desc: "Enganche hacia adentro y remate al segundo palo", progress: 88 },
      phys: { title: "Objetivo Físico", desc: "Potencia de sprint repetido en transición de ataque", progress: 92 },
      attitude: { title: "Objetivo Actitudinal", desc: "Presión alta constante tras pérdida de posesión", progress: 94 },
      season: { title: "Meta de Temporada", desc: "Superar los 12 goles en el torneo actual (Actual: 9 goles)", progress: 78 }
    },
    history: { partidos: 16, minutos: 1280, goles: 9, asistencias: 6, contribuciones: 15, amarillas: 2, rojas: 0, mvp: 3 },
    trajectory: [
      { year: "2024", club: "Academia ZEP Sub-12", games: 12, goals: 6, assists: 4, title: "Tercer Lugar Regional" },
      { year: "2025", club: "Academia ZEP Sub-13", games: 15, goals: 10, assists: 5, title: "Campeón Copa Apertura Formativa" },
      { year: "2026", club: "Academia ZEP Sub-14", games: 16, goals: 9, assists: 6, title: "Semifinalista Copa Santiago (En curso)" }
    ],
    awards: ["Máximo Goleador Sub-13 (2025)"]
  },
  {
    id: "p3",
    name: "Camilo Rojas",
    number: 9,
    category: "sub14",
    categoryLabel: "Sub-14",
    positionShort: "DEL",
    positionFull: "Centrodelantero / Goleador",
    positionGroup: "del",
    age: 14,
    height: "1.74 m",
    foot: "Diestro",
    nation: "Chile 🇨🇱",
    marketValue: "€165,000",
    rating: 4.8,
    avatar: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=500&q=80",
    portraitAvatar: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=500&q=80",
    stats: { velocidad: 92, tecnica: 86, tiro: 95, pase: 78, resistencia: 89, disciplina: 90 },
    objectives: {
      tech: { title: "Objetivo Técnico", desc: "Remate de primera intención en centro al primer palo", progress: 90 },
      phys: { title: "Objetivo Físico", desc: "Potencia de salto vertical en juego aéreo", progress: 85 },
      attitude: { title: "Objetivo Actitudinal", desc: "Presión constante tras pérdida de balón", progress: 94 },
      season: { title: "Meta de Temporada", desc: "Superar los 15 goles en Copa Santiago (Actual: 13 goles)", progress: 86 }
    },
    history: { partidos: 16, minutos: 1200, goles: 13, asistencias: 4, contribuciones: 17, amarillas: 3, rojas: 0, mvp: 4 },
    trajectory: [
      { year: "2025", club: "Academia ZEP Sub-13", games: 14, goals: 11, assists: 3, title: "Campeón Apertura" },
      { year: "2026", club: "Academia ZEP Sub-14", games: 16, goals: 13, assists: 4, title: "Líder de Goleo Sub-14" }
    ],
    awards: ["Goleador Destacado 2026"]
  },
  {
    id: "p4",
    name: "Lucas Valenzuela",
    number: 1,
    category: "sub14",
    categoryLabel: "Sub-14",
    positionShort: "POR",
    positionFull: "Guardameta Principal",
    positionGroup: "por",
    age: 14,
    height: "1.76 m",
    foot: "Zurdo",
    nation: "Chile 🇨🇱",
    marketValue: "€140,000",
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=500&q=80",
    portraitAvatar: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=500&q=80",
    stats: { velocidad: 78, tecnica: 89, tiro: 60, pase: 85, resistencia: 88, disciplina: 97 },
    objectives: {
      tech: { title: "Objetivo Técnico", desc: "Juego de pies en salida corta y saques largos de mano", progress: 90 },
      phys: { title: "Objetivo Físico", desc: "Tiempo de reacción en achiques 1vs1", progress: 94 },
      attitude: { title: "Objetivo Actitudinal", desc: "Concentración total los 90 minutos de juego", progress: 98 },
      season: { title: "Meta de Temporada", desc: "Promedio de menos de 1 gol recibido por encuentro", progress: 92 }
    },
    history: { partidos: 17, minutos: 1360, goles: 0, asistencias: 1, contribuciones: 1, amarillas: 0, rojas: 0, mvp: 3, atajadas: 64, vallaInvicta: 7 },
    trajectory: [
      { year: "2025", club: "Academia ZEP Sub-13", games: 15, goals: 0, assists: 1, title: "Mejor Portero de la Liga" },
      { year: "2026", club: "Academia ZEP Sub-14", games: 17, goals: 0, assists: 1, title: "7 Vallas Invictas" }
    ],
    awards: ["Guante de Oro 2025"]
  },
  {
    id: "p5",
    name: "Benjamín Fuentes",
    number: 4,
    category: "sub14",
    categoryLabel: "Sub-14",
    positionShort: "DEF",
    positionFull: "Defensa Central / Líder ZEP",
    positionGroup: "def",
    age: 14,
    height: "1.75 m",
    foot: "Diestro",
    nation: "Chile 🇨🇱",
    marketValue: "€130,000",
    rating: 4.7,
    avatar: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=500&q=80",
    portraitAvatar: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=500&q=80",
    stats: { velocidad: 82, tecnica: 84, tiro: 68, pase: 88, resistencia: 94, disciplina: 98 },
    objectives: {
      tech: { title: "Objetivo Técnico", desc: "Salida limpia desde el fondo y temporización", progress: 92 },
      phys: { title: "Objetivo Físico", desc: "Resistencia continua 80 min de alta intensidad", progress: 96 },
      attitude: { title: "Objetivo Actitudinal", desc: "Voz de mando y ordenamiento táctico de la línea defensiva", progress: 100 },
      season: { title: "Meta de Temporada", desc: "Mantener la valla invicta en 8 partidos (Actual: 6 vallas)", progress: 75 }
    },
    history: { partidos: 18, minutos: 1440, goles: 2, asistencias: 3, contribuciones: 5, amarillas: 2, rojas: 0, mvp: 2 },
    trajectory: [
      { year: "2025", club: "Academia ZEP Sub-13", games: 16, goals: 1, assists: 2, title: "Capitán Sub-13" },
      { year: "2026", club: "Academia ZEP Sub-14", games: 18, goals: 2, assists: 3, title: "Pilar Defensivo 2026" }
    ],
    awards: ["Mejor Defensor Formativo 2025"]
  },
  {
    id: "p6",
    name: "Valentina Morales",
    number: 7,
    category: "sub12",
    categoryLabel: "Sub-12",
    positionShort: "DEL",
    positionFull: "Extrema Izquierda / Velocista",
    positionGroup: "del",
    age: 11,
    height: "1.52 m",
    foot: "Zurda",
    nation: "Chile 🇨🇱",
    marketValue: "€95,000",
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    portraitAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    stats: { velocidad: 96, tecnica: 91, tiro: 88, pase: 86, resistencia: 90, disciplina: 95 },
    objectives: {
      tech: { title: "Objetivo Técnico", desc: "Doble enganche hacia adentro y centro rasante", progress: 85 },
      phys: { title: "Objetivo Físico", desc: "Agilidad y aceleración de 0 a 20 metros", progress: 98 },
      attitude: { title: "Objetivo Actitudinal", desc: "Constancia en el repliegue defensivo por banda", progress: 90 },
      season: { title: "Meta de Temporada", desc: "10 Goles + 10 Asistencias (Actual: 8 Goles, 9 Asist)", progress: 85 }
    },
    history: { partidos: 14, minutos: 980, goles: 8, asistencias: 9, contribuciones: 17, amarillas: 0, rojas: 0, mvp: 4 }
  },
  {
    id: "p7",
    name: "Diego Tapia",
    number: 8,
    category: "sub12",
    categoryLabel: "Sub-12",
    positionShort: "MED",
    positionFull: "Mediocampista Mixto (Box to Box)",
    positionGroup: "med",
    age: 12,
    height: "1.55 m",
    foot: "Ambidextro",
    nation: "Chile 🇨🇱",
    marketValue: "€85,000",
    rating: 4.6,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    portraitAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    stats: { velocidad: 84, tecnica: 87, tiro: 82, pase: 90, resistencia: 92, disciplina: 94 },
    objectives: {
      tech: { title: "Objetivo Técnico", desc: "Recuperación de balón limpia sin cometer falta", progress: 88 },
      phys: { title: "Objetivo Físico", desc: "Aumento de fuerza de tronco superior en disputa", progress: 82 },
      attitude: { title: "Objetivo Actitudinal", desc: "Resiliencia ante marcadores adversos", progress: 96 },
      season: { title: "Meta de Temporada", desc: "Alcanzar 80% de efectividad de pases en todos los encuentros", progress: 91 }
    },
    history: { partidos: 15, minutos: 1050, goles: 4, asistencias: 7, contribuciones: 11, amarillas: 1, rojas: 0, mvp: 1 }
  },
  {
    id: "p8",
    name: "Joaquín Mendoza",
    number: 11,
    category: "sub16",
    categoryLabel: "Sub-16",
    positionShort: "DEL",
    positionFull: "Extremo Derecho / Goleador",
    positionGroup: "del",
    age: 15,
    height: "1.78 m",
    foot: "Diestro",
    nation: "Chile 🇨🇱",
    marketValue: "€240,000",
    rating: 4.8,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
    portraitAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
    stats: { velocidad: 94, tecnica: 90, tiro: 91, pase: 84, resistencia: 88, disciplina: 92 },
    objectives: {
      tech: { title: "Objetivo Técnico", desc: "Diagonal sin balón atacando el espacio a la espalda del lateral", progress: 92 },
      phys: { title: "Objetivo Físico", desc: "Potenciación musculación tren inferior", progress: 88 },
      attitude: { title: "Objetivo Actitudinal", desc: "Mentalidad competitiva y liderazgo de grupo", progress: 94 },
      season: { title: "Meta de Temporada", desc: "Convocatoria a selección regional Sub-16", progress: 100 }
    },
    history: { partidos: 20, minutos: 1600, goles: 15, asistencias: 8, contribuciones: 23, amarillas: 2, rojas: 0, mvp: 5 }
  },
  {
    id: "p9",
    name: "Tomasito Castro",
    number: 10,
    category: "sub10",
    categoryLabel: "Sub-10",
    positionShort: "MED",
    positionFull: "Organizador de Juego Sub-10",
    positionGroup: "med",
    age: 9,
    height: "1.38 m",
    foot: "Diestro",
    nation: "Chile 🇨🇱",
    marketValue: "€60,000",
    rating: 4.7,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    portraitAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    stats: { velocidad: 82, tecnica: 93, tiro: 78, pase: 89, resistencia: 84, disciplina: 98 },
    objectives: {
      tech: { title: "Objetivo Técnico", desc: "Conducción con la cabeza levantada y visión de juego", progress: 90 },
      phys: { title: "Objetivo Físico", desc: "Coordinación motriz fina y equilibrio postural", progress: 92 },
      attitude: { title: "Objetivo Actitudinal", desc: "Disfrute del juego, respeto a compañeros y árbitros", progress: 100 },
      season: { title: "Meta de Temporada", desc: "Participar en el 100% de los entrenamientos y torneos", progress: 95 }
    },
    history: { partidos: 12, minutos: 720, goles: 6, asistencias: 9, contribuciones: 15, amarillas: 0, rojas: 0, mvp: 2 }
  },
  {
    id: "p10",
    name: "Agustín Silva",
    number: 3,
    category: "sub16",
    categoryLabel: "Sub-16",
    positionShort: "DEF",
    positionFull: "Lateral Izquierdo",
    positionGroup: "def",
    age: 16,
    height: "1.76 m",
    foot: "Zurdo",
    nation: "Chile 🇨🇱",
    marketValue: "€190,000",
    rating: 4.7,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80",
    portraitAvatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80",
    stats: { velocidad: 91, tecnica: 85, tiro: 75, pase: 88, resistencia: 95, disciplina: 96 },
    objectives: {
      tech: { title: "Objetivo Técnico", desc: "Centros con rosca al segundo palo", progress: 88 },
      phys: { title: "Objetivo Físico", desc: "Recorrido idavuelta por la banda 90 min", progress: 95 },
      attitude: { title: "Objetivo Actitudinal", desc: "Comunicación táctica con centrales", progress: 92 },
      season: { title: "Meta de Temporada", desc: "10 asistencias de gol", progress: 80 }
    },
    history: { partidos: 19, minutos: 1520, goles: 3, asistencias: 8, contribuciones: 11, amarillas: 3, rojas: 0, mvp: 2 }
  },
  {
    id: "p11",
    name: "Gabriel Henríquez",
    number: 12,
    category: "pro",
    categoryLabel: "Sub-18 Pro",
    positionShort: "POR",
    positionFull: "Guardameta Sub-18 Pro",
    positionGroup: "por",
    age: 17,
    height: "1.86 m",
    foot: "Diestro",
    nation: "Chile 🇨🇱",
    marketValue: "€250,000",
    rating: 5.0,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    portraitAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    stats: { velocidad: 80, tecnica: 92, tiro: 65, pase: 88, resistencia: 92, disciplina: 99 },
    objectives: {
      tech: { title: "Objetivo Técnico", desc: "Liderazgo en balón parado y achiques en 1v1", progress: 95 },
      phys: { title: "Objetivo Físico", desc: "Salto plio-métrico máximo", progress: 94 },
      attitude: { title: "Objetivo Actitudinal", desc: "Mando de equipo y temple", progress: 100 },
      season: { title: "Meta de Temporada", desc: "Prueba profesional en club Primera A", progress: 90 }
    },
    history: { partidos: 22, minutos: 1980, goles: 0, asistencias: 2, contribuciones: 2, amarillas: 1, rojas: 0, mvp: 6, vallaInvicta: 11 }
  }
];

// --- CATEGORY CONFIGURATIONS ---
const categoryConfigs = {
  sub8: {
    label: "Sub-8",
    title: "Categoría Sub-8 — Iniciación Motriz y Recreativa",
    desc: "Enfocada en el amor por el deporte, desarrollo psicomotor, coordinación básica y primeros contactos con el balón.",
    coach: "Prof. Matías Henríquez",
    schedule: "Mar y Jue 16:30 - Sáb 10:00",
    count: "18 Jugadores"
  },
  sub10: {
    label: "Sub-10",
    title: "Categoría Sub-10 — Fundamentos Técnicos",
    desc: "Desarrollo del pase, control orientado, conducción en velocidad y conceptos básicos de juego colectivo.",
    coach: "Prof. Esteban Guerra",
    schedule: "Lun y Mié 17:00 - Sáb 10:00",
    count: "20 Jugadores"
  },
  sub12: {
    label: "Sub-12",
    title: "Categoría Sub-12 — Pre-Táctica y Posicionamiento",
    desc: "Ocupación de espacios, principios ofensivos/defensivos y transición a cancha reglamentaria.",
    coach: "Prof. Andrés Sepúlveda",
    schedule: "Mar y Jue 17:30 - Sáb 11:30",
    count: "24 Jugadores"
  },
  sub14: {
    label: "Sub-14",
    title: "Categoría Sub-14 — Perfeccionamiento Táctico",
    desc: "Enfocados en el desarrollo de visión de juego, toma de decisiones bajo presión y acondicionamiento físico adaptado.",
    coach: "Prof. Rodrigo Morales",
    schedule: "Mar y Jue 17:30 - Sáb 09:30",
    count: "22 Jugadores"
  },
  sub16: {
    label: "Sub-16",
    title: "Categoría Sub-16 — Alto Rendimiento Formativo",
    desc: "Preparación física avanzada, sistemas tácticos complejos y proyección a competencias de nivel nacional.",
    coach: "Prof. Claudio Bravo",
    schedule: "Lun, Mié y Vie 18:00 - Sáb 11:30",
    count: "25 Jugadores"
  },
  pro: {
    label: "Sub-18 / Pro",
    title: "Categoría Sub-18 Pro — Proyección Profesional",
    desc: "Etapa final del proceso formativo ZEP. Preparación para pruebas en clubes profesionales y fútbol universitario.",
    coach: "Prof. Francisco Palma",
    schedule: "Lun a Vie 18:30 - Sáb 12:00",
    count: "20 Jugadores"
  }
};

// --- CURRENT STATE ---
let currentCategory = "sub14";
let currentSelectedPlayerId = "p1";

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCategoryTabs();
  renderRosterGrid(currentCategory);
  renderPlayerQuickChips();
  renderPlayerProfileBoard(currentSelectedPlayerId);
  renderProStatsTable('all');
  showPillar('tecnico');
  initHeroParticles();
  init3DTilt();
  initLogoFireCanvas();
  initHeroShieldFireCanvas();
  initHeroShield3DTilt();
});

// --- NAVBAR & MOBILE TOGGLE ---
function initNavigation() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // Active section spy on scroll
  window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// --- CATEGORY TABS & FILTERING ---
function initCategoryTabs() {
  const pillBtns = document.querySelectorAll(".pill-btn");
  pillBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      pillBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-cat");
      currentCategory = cat;
      updateCategoryMeta(cat);
      renderRosterGrid(cat);
    });
  });
}

function updateCategoryMeta(catKey) {
  const config = categoryConfigs[catKey] || categoryConfigs.sub14;
  const metaContainer = document.getElementById("categoryMeta");
  if (!metaContainer) return;

  metaContainer.innerHTML = `
    <div class="meta-main">
      <div class="meta-badge-cat">${config.label.toUpperCase()}</div>
      <div>
        <h3 class="meta-title">${config.title}</h3>
        <p class="meta-desc">${config.desc}</p>
      </div>
    </div>
    <div class="meta-details">
      <div class="meta-item">
        <i class="fa-solid fa-user-tie"></i>
        <div>
          <span class="item-label">Entrenador Principal</span>
          <span class="item-val">${config.coach}</span>
        </div>
      </div>
      <div class="meta-item">
        <i class="fa-solid fa-clock"></i>
        <div>
          <span class="item-label">Horarios</span>
          <span class="item-val">${config.schedule}</span>
        </div>
      </div>
      <div class="meta-item">
        <i class="fa-solid fa-users"></i>
        <div>
          <span class="item-label">Plantilla</span>
          <span class="item-val">${config.count}</span>
        </div>
      </div>
    </div>
  `;
}

// --- RENDER ROSTER GRID (CARNETS DE JUGADOR) ---
function renderRosterGrid(catKey) {
  const grid = document.getElementById("rosterGrid");
  if (!grid) return;

  let filtered = playersData.filter(p => p.category === catKey);
  if (filtered.length === 0) {
    // Fallback so grid is never empty in demo
    filtered = playersData;
  }

  grid.innerHTML = filtered.map(player => `
    <div class="fut-card" onclick="selectPlayerForDetail('${player.id}')">
      <div class="card-top-row">
        <div class="card-number-box">
          <span class="card-number">#${player.number}</span>
          <span class="card-pos">${player.positionShort}</span>
        </div>
        <div class="card-stars">
          ${renderStars(player.rating)}
        </div>
      </div>

      <div class="card-avatar-wrap">
        <img src="${player.avatar}" alt="${player.name}" class="card-avatar-img">
      </div>

      <h4 class="card-player-name">${player.name}</h4>
      <p class="card-player-meta">${player.positionFull} • ${player.categoryLabel}</p>

      <div class="card-mini-stats">
        <div class="mini-stat">
          <span class="m-val">${player.stats.velocidad}</span>
          <span class="m-lbl">VEL</span>
        </div>
        <div class="mini-stat">
          <span class="m-val">${player.stats.tecnica}</span>
          <span class="m-lbl">TEC</span>
        </div>
        <div class="mini-stat">
          <span class="m-val">${player.stats.tiro}</span>
          <span class="m-lbl">TIR</span>
        </div>
      </div>

      <div class="card-cta-bar">
        <span><i class="fa-solid fa-id-card"></i> Ver Carnet y Metas</span>
      </div>
    </div>
  `).join('');
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  let starsHtml = '';
  for (let i = 0; i < fullStars; i++) {
    starsHtml += `<i class="fa-solid fa-star"></i>`;
  }
  if (rating % 1 !== 0) {
    starsHtml += `<i class="fa-solid fa-star-half-stroke"></i>`;
  }
  return starsHtml;
}

// --- PLAYER QUICK CHIPS SELECTOR IN PERFIL SECTION ---
function renderPlayerQuickChips() {
  const container = document.getElementById("playerChips");
  if (!container) return;

  container.innerHTML = playersData.map(player => `
    <button class="chip-btn ${player.id === currentSelectedPlayerId ? 'active' : ''}" 
            onclick="selectPlayerForDetail('${player.id}')">
      #${player.number} ${player.name} (${player.categoryLabel})
    </button>
  `).join('');
}

// --- SELECT PLAYER & SCROLL TO DETAIL ---
function selectPlayerForDetail(playerId) {
  currentSelectedPlayerId = playerId;
  renderPlayerQuickChips();
  renderPlayerProfileBoard(playerId);
  
  // Smooth scroll to profile board
  const profileSection = document.getElementById("jugadores");
  if (profileSection) {
    profileSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// --- RENDER DETAILED PLAYER PROFILE & OBJECTIVES BOARD ---
function renderPlayerProfileBoard(playerId) {
  const board = document.getElementById("playerProfileBoard");
  if (!board) return;

  const player = playersData.find(p => p.id === playerId) || playersData[0];
  const { stats, objectives } = player;

  board.innerHTML = `
    <!-- LEFT SIDEBAR: CARNET SHOWCASE BADGE -->
    <div class="profile-sidebar">
      <div class="profile-carnet-badge">
        <div class="card-top-row">
          <span class="card-number">#${player.number}</span>
          <div class="card-stars">${renderStars(player.rating)}</div>
        </div>

        <div class="profile-avatar-lg">
          <img src="${player.avatar}" alt="${player.name}">
        </div>

        <h3 class="profile-name">${player.name}</h3>
        <span class="profile-position-badge">${player.positionFull}</span>
        
        <div class="profile-quick-meta">
          <div>
            <span>Categoría</span>
            <strong>${player.categoryLabel}</strong>
          </div>
          <div>
            <span>Edad</span>
            <strong>${player.age} años</strong>
          </div>
          <div>
            <span>Pie Hábil</span>
            <strong>${player.foot}</strong>
          </div>
          <div>
            <span>Partidos ZEP</span>
            <strong>${player.history.partidos} P.J.</strong>
          </div>
        </div>
      </div>
    </div>

    <!-- RIGHT MAIN: DETAILED STATS & OBJECTIVES -->
    <div class="profile-details-main">
      
      <!-- STATS ATTRIBUTES BARS -->
      <div>
        <h4 class="details-block-title">
          <i class="fa-solid fa-chart-simple"></i> Evaluación de Atributos Técnicos & Físicos
        </h4>
        <div class="stats-bars-grid">
          <div class="stat-bar-item">
            <div class="stat-bar-header">
              <span>Velocidad & Aceleración</span>
              <span class="stat-bar-val">${stats.velocidad}%</span>
            </div>
            <div class="bar-track">
              <div class="bar-fill" style="width: ${stats.velocidad}%"></div>
            </div>
          </div>

          <div class="stat-bar-item">
            <div class="stat-bar-header">
              <span>Técnica & Control</span>
              <span class="stat-bar-val">${stats.tecnica}%</span>
            </div>
            <div class="bar-track">
              <div class="bar-fill" style="width: ${stats.tecnica}%"></div>
            </div>
          </div>

          <div class="stat-bar-item">
            <div class="stat-bar-header">
              <span>Potencia de Tiro / Definición</span>
              <span class="stat-bar-val">${stats.tiro}%</span>
            </div>
            <div class="bar-track">
              <div class="bar-fill" style="width: ${stats.tiro}%"></div>
            </div>
          </div>

          <div class="stat-bar-item">
            <div class="stat-bar-header">
              <span>Precisión de Pase & Visión</span>
              <span class="stat-bar-val">${stats.pase}%</span>
            </div>
            <div class="bar-track">
              <div class="bar-fill" style="width: ${stats.pase}%"></div>
            </div>
          </div>

          <div class="stat-bar-item">
            <div class="stat-bar-header">
              <span>Resistencia Aeróbica</span>
              <span class="stat-bar-val">${stats.resistencia}%</span>
            </div>
            <div class="bar-track">
              <div class="bar-fill" style="width: ${stats.resistencia}%"></div>
            </div>
          </div>

          <div class="stat-bar-item">
            <div class="stat-bar-header">
              <span>Disciplina & Fair Play</span>
              <span class="stat-bar-val">${stats.disciplina}%</span>
            </div>
            <div class="bar-track">
              <div class="bar-fill" style="width: ${stats.disciplina}%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- OBJECTIVES PROGRESS BARS (KEY REQUIREMENT) -->
      <div>
        <h4 class="details-block-title">
          <i class="fa-solid fa-bullseye"></i> Objetivos Individuales de Desarrollo (Metas ZEP)
        </h4>
        <div class="objectives-list">
          
          <!-- OBJECTIVE 1: TÉCNICO -->
          <div class="objective-item">
            <div class="obj-header">
              <div class="obj-title-group">
                <div class="obj-icon"><i class="fa-solid fa-futbol"></i></div>
                <span class="obj-name">${objectives.tech.title}</span>
              </div>
              <span class="obj-percentage">${objectives.tech.progress}%</span>
            </div>
            <p class="obj-desc">${objectives.tech.desc}</p>
            <div class="bar-track">
              <div class="bar-fill bar-fill-obj" style="width: ${objectives.tech.progress}%"></div>
            </div>
          </div>

          <!-- OBJECTIVE 2: FÍSICO -->
          <div class="objective-item">
            <div class="obj-header">
              <div class="obj-title-group">
                <div class="obj-icon"><i class="fa-solid fa-person-running"></i></div>
                <span class="obj-name">${objectives.phys.title}</span>
              </div>
              <span class="obj-percentage">${objectives.phys.progress}%</span>
            </div>
            <p class="obj-desc">${objectives.phys.desc}</p>
            <div class="bar-track">
              <div class="bar-fill bar-fill-obj" style="width: ${objectives.phys.progress}%"></div>
            </div>
          </div>

          <!-- OBJECTIVE 3: ACTITUDINAL / DISCIPLINA -->
          <div class="objective-item">
            <div class="obj-header">
              <div class="obj-title-group">
                <div class="obj-icon"><i class="fa-solid fa-brain"></i></div>
                <span class="obj-name">${objectives.attitude.title}</span>
              </div>
              <span class="obj-percentage">${objectives.attitude.progress}%</span>
            </div>
            <p class="obj-desc">${objectives.attitude.desc}</p>
            <div class="bar-track">
              <div class="bar-fill bar-fill-obj" style="width: ${objectives.attitude.progress}%"></div>
            </div>
          </div>

          <!-- OBJECTIVE 4: META DE TEMPORADA -->
          <div class="objective-item">
            <div class="obj-header">
              <div class="obj-title-group">
                <div class="obj-icon"><i class="fa-solid fa-trophy"></i></div>
                <span class="obj-name">${objectives.season.title}</span>
              </div>
              <span class="obj-percentage">${objectives.season.progress}%</span>
            </div>
            <p class="obj-desc">${objectives.season.desc}</p>
            <div class="bar-track">
              <div class="bar-fill bar-fill-obj" style="width: ${objectives.season.progress}%"></div>
            </div>
          </div>

        </div>
      </div>

      <!-- TRAYECTORIA Y CLUBES (ESTILO LIGA PROFESIONAL) -->
      <div>
        <h4 class="details-block-title">
          <i class="fa-solid fa-clock-rotate-left"></i> Trayectoria e Historial de Temporadas
        </h4>
        <div class="trajectory-timeline">
          ${(player.trajectory || [
            { year: "2024", club: `Academia ZEP ${player.categoryLabel}`, games: 12, goals: 6, assists: 4, title: "Torneo Apertura Formativo" },
            { year: "2025", club: `Academia ZEP ${player.categoryLabel}`, games: 15, goals: 8, assists: 7, title: "Campeón Regional Sub-13" },
            { year: "2026", club: `Academia ZEP ${player.categoryLabel}`, games: player.history.partidos, goals: player.history.goles, assists: player.history.asistencias, title: "Torneo en Curso (Titular)" }
          ]).map(t => `
            <div class="timeline-item">
              <div class="timeline-year">${t.year}</div>
              <div class="timeline-content">
                <div class="timeline-club">${t.club}</div>
                <div class="timeline-meta">
                  <span><strong>${t.games}</strong> Partidos</span>
                  <span><strong>${t.goals}</strong> Goles</span>
                  <span><strong>${t.assists}</strong> Asistencias</span>
                </div>
                <div class="timeline-badge-title"><i class="fa-solid fa-medal"></i> ${t.title}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

// --- SOCIAL LIKE TOGGLE ---
function toggleLike(btn) {
  const countSpan = btn.querySelector(".like-count");
  let currentCount = parseInt(countSpan.textContent, 10);
  
  if (btn.classList.contains("liked")) {
    btn.classList.remove("liked");
    countSpan.textContent = currentCount - 1;
  } else {
    btn.classList.add("liked");
    countSpan.textContent = currentCount + 1;
    showToast("❤️ ¡Te ha gustado la publicación!");
  }
}

// --- FORM SUBMISSION HANDLER ---
function handleFormSubmit(e) {
  e.preventDefault();
  const nombre = document.getElementById("postNombre").value;
  showToast(`¡Gracias ${nombre}! Tu solicitud ha sido registrada en la demo.`);
  document.getElementById("demoContactForm").reset();
}

// --- PRO STATS LEADERBOARD TABLE ---
function renderProStatsTable(filterType = 'all') {
  const tbody = document.getElementById("proStatsBody");
  if (!tbody) return;

  let list = [...playersData];
  
  if (filterType === 'goles') {
    list.sort((a, b) => b.history.goles - a.history.goles);
  } else if (filterType === 'asistencias') {
    list.sort((a, b) => b.history.asistencias - a.history.asistencias);
  } else if (filterType === 'contribuciones') {
    list.sort((a, b) => (b.history.goles + b.history.asistencias) - (a.history.goles + a.history.asistencias));
  }

  tbody.innerHTML = list.map(player => `
    <tr class="${player.id === 'p1' ? 'highlight-matias' : ''}">
      <td class="num-bold">#${player.number}</td>
      <td class="player-cell">
        <img src="${player.avatar}" class="player-table-avatar" alt="${player.name}">
        <div>
          <strong>${player.name}</strong>
          <span class="sub-label">${player.categoryLabel}</span>
        </div>
      </td>
      <td><span class="pos-badge">${player.positionShort}</span></td>
      <td class="num-sports">${player.history.partidos}</td>
      <td class="num-dim">${player.history.minutos || (player.history.partidos * 80)}'</td>
      <td class="num-bold text-orange">${player.history.goles}</td>
      <td class="num-bold text-gold">${player.history.asistencias}</td>
      <td class="num-bold text-green">${(player.history.goles + player.history.asistencias)}</td>
      <td><span class="cards-lbl">${player.history.amarillas || 0}🟨 / ${player.history.rojas || 0}🟥</span></td>
      <td class="rating-cell">⭐ ${player.rating.toFixed(1)}</td>
      <td>
        <button class="table-btn-action" onclick="selectPlayerForDetail('${player.id}')">
          Ver Ficha <i class="fa-solid fa-chevron-right"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

// --- 3D FLIP CARDS & METHODOLOGY PILLARS ---
function toggleFlip(cardId) {
  const card = document.getElementById(cardId);
  if (card) {
    card.classList.toggle("flipped");
  }
}

const pillarsData = {
  tecnico: {
    title: "1. Aspecto Técnico & Manejo de Balón",
    icon: "fa-futbol",
    desc: "Es el aspecto primordial del fútbol moderno. En Academia ZEP desarrollamos todas las habilidades y destrezas que permiten una mejor utilización y control del balón en alta velocidad y espacio reducido.",
    items: [
      { name: "Dominio de Balón Multiprofil", desc: "Manejo fluido de pierna hábil e inhábil, superficie de contacto y amortiguación." },
      { name: "Controles Orientados", desc: "Recepción perfilada que permite la toma de decisiones inmediata antes del acoso defensivo." },
      { name: "Pase y Golpeo de Precisión", desc: "Pases filtrados de primera intención, cambios de frente y definición colocada." }
    ]
  },
  fisico: {
    title: "2. Aspecto Físico & Evaluaciones Periódicas (Test de Campo)",
    icon: "fa-bolt",
    desc: "Desarrollo de las 6 cualidades físicas del deportista: Resistencia, Velocidad, Agilidad, Fuerza, Flexibilidad y Coordinación con seguimiento mediante test estandarizados.",
    evaluations: [
      { name: "Test Course Navette", desc: "Evaluación de resistencia aeróbica continua y cálculo de consumo máximo de oxígeno (VO2 Máx)." },
      { name: "Test Yo-Yo Intermitente", desc: "Medición de la capacidad de realizar esfuerzos repetidos a máxima intensidad con pausas activas." },
      { name: "Plataforma de Salto (SJ / CMJ)", desc: "Medición de la fuerza explosiva y potencia de piernas en centímetros de elevación." }
    ]
  },
  tactico: {
    title: "3. Aspecto Táctico & Modelo de Juego ZEP",
    icon: "fa-diagram-project",
    desc: "Comprensión profunda de las acciones del juego colectivo mediante ejercicios técnico-tácticos por líneas (defensa, medio, ataque), por bloques y como equipo.",
    items: [
      { name: "Principios de Juego Ofensivos", desc: "Desmarques, creación de líneas de pase, ocupación de espacios y amplitud por bandas." },
      { name: "Organización Defensiva", desc: "Pressing tras pérdida, basculación por líneas y coberturas defensivas coordinadas." },
      { name: "Transiciones Rápidas", desc: "Velocidad de cambio mental de defensa a ataque en menos de 5 segundos." }
    ]
  },
  psicologico: {
    title: "4. Aspecto Psicológico, Formación en Valores & Fair Play",
    icon: "fa-brain",
    desc: "Objetivos para fortalecer la templanza, la resiliencia y la inteligencia emocional del deportista tanto en victorias como en momentos adversos del partido.",
    items: [
      { name: "Fair Play Institucional", desc: "El juego limpio como pilar valórico innegociable de todos los alumnos ZEP." },
      { name: "Resiliencia & Tolerancia a la Frustración", desc: "Manejo constructivo de marcadores adversos, errores y decisiones arbitrales." },
      { name: "Concentración & Liderazgo", desc: "Foco mental continuo los 80/90 minutos de juego y apoyo constante a los compañeros." }
    ]
  }
};

function showPillar(pillarKey) {
  const container = document.getElementById("pillarContentBox");
  if (!container) return;

  const btns = document.querySelectorAll(".pillar-tab-btn");
  btns.forEach(b => b.classList.remove("active"));
  if (event && event.target) {
    event.target.classList.add("active");
  }

  const p = pillarsData[pillarKey] || pillarsData.tecnico;

  let bodyHtml = '';
  if (p.evaluations) {
    bodyHtml = `
      <div class="pillar-evals-grid">
        ${p.evaluations.map(e => `
          <div class="pillar-eval-card">
            <i class="fa-solid fa-microscope eval-icon"></i>
            <div>
              <strong>${e.name}</strong>
              <p>${e.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    bodyHtml = `
      <div class="pillar-items-list">
        ${p.items.map(i => `
          <div class="pillar-item-row">
            <i class="fa-solid fa-circle-check text-orange"></i>
            <div>
              <strong>${i.name}</strong>
              <p>${i.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  container.innerHTML = `
    <div class="pillar-detail-wrapper">
      <div class="pillar-detail-header">
        <i class="fa-solid ${p.icon} pillar-main-icon"></i>
        <div>
          <h4>${p.title}</h4>
          <p class="pillar-main-desc">${p.desc}</p>
        </div>
      </div>
      ${bodyHtml}
    </div>
  `;
}

// --- HERO PARTICLES CANVAS (ESTILO STUDIO/GAMING) ---
function initHeroParticles() {
  const canvas = document.getElementById("heroParticles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 1,
      color: Math.random() > 0.4 ? "rgba(255, 85, 0, " : "rgba(255, 183, 0, ",
      alpha: Math.random() * 0.6 + 0.2,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -Math.random() * 0.8 - 0.3
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ")";
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}

// --- 3D TILT EFFECT ON CARDS ---
function init3DTilt() {
  document.querySelectorAll(".fut-card, .program-card, .news-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 12;
      const rotateY = (centerX - x) / 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
}

// --- FIRE SHIELD ENGINE (LOGO FLAMES & PLASMA RING) ---
function initLogoFireCanvas() {
  const canvas = document.getElementById("logoFireCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  const particles = [];
  for (let i = 0; i < 20; i++) {
    particles.push({
      x: w / 2 + (Math.random() - 0.5) * 24,
      y: h / 2 + (Math.random() - 0.5) * 24,
      r: Math.random() * 2 + 1,
      vy: -Math.random() * 0.9 - 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      color: Math.random() > 0.5 ? "rgba(255, 85, 0," : "rgba(255, 200, 0,"
    });
  }

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
      ctx.fillStyle = p.color + p.alpha + ")";
      ctx.shadowBlur = 6;
      ctx.shadowColor = "#ff5500";
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

function initHeroShieldFireCanvas() {
  const canvas = document.getElementById("heroShieldFireCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;

  const sparks = [];
  for (let i = 0; i < 50; i++) {
    sparks.push({
      angle: Math.random() * Math.PI * 2,
      dist: Math.random() * 80 + 20,
      r: Math.random() * 3 + 1,
      speed: Math.random() * 0.02 + 0.005,
      alpha: Math.random() * 0.7 + 0.3,
      color: Math.random() > 0.3 ? "rgba(255, 85, 0," : "rgba(255, 215, 0,"
    });
  }

  function renderShieldFire() {
    ctx.clearRect(0, 0, w, h);

    const grad = ctx.createRadialGradient(cx, cy, 30, cx, cy, 120);
    grad.addColorStop(0, "rgba(255, 85, 0, 0.35)");
    grad.addColorStop(0.6, "rgba(255, 140, 0, 0.15)");
    grad.addColorStop(1, "rgba(255, 85, 0, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, 120, 0, Math.PI * 2);
    ctx.fill();

    sparks.forEach(s => {
      s.angle += s.speed;
      s.dist += Math.sin(s.angle * 2) * 0.4;
      const x = cx + Math.cos(s.angle) * s.dist;
      const y = cy + Math.sin(s.angle) * s.dist;

      ctx.beginPath();
      ctx.arc(x, y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color + s.alpha + ")";
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#ff5500";
      ctx.fill();
    });

    requestAnimationFrame(renderShieldFire);
  }
  renderShieldFire();
}

function initHeroShield3DTilt() {
  const wrap = document.getElementById("heroShieldWrap");
  if (!wrap) return;

  wrap.addEventListener("mousemove", e => {
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = (y - cy) / 6;
    const ry = (cx - x) / 6;

    wrap.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.08, 1.08, 1.08)`;
  });

  wrap.addEventListener("mouseleave", () => {
    wrap.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
}
