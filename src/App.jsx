import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InscriptionModal } from './components/InscriptionModal';

import { HomePage } from './pages/HomePage';
import { SquadPage } from './pages/SquadPage';
import { PlayerDetailPage } from './pages/PlayerDetailPage';
import { SchoolsPage } from './pages/SchoolsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { TournamentsPage } from './pages/TournamentsPage';
import { StaffPage } from './pages/StaffPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { SocialFeedPage } from './pages/SocialFeedPage';

// Scroll to top helper on every page route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [isInscriptionOpen, setIsInscriptionOpen] = useState(false);

  const handleOpenInscription = (e) => {
    if (e) e.preventDefault();
    setIsInscriptionOpen(true);
  };

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target.closest('a, button');
      if (target) {
        const href = target.getAttribute('href');
        const text = target.innerText ? target.innerText.toLowerCase() : '';
        if (href === '#contacto' || text.includes('inscribir') || text.includes('clase demo')) {
          e.preventDefault();
          setIsInscriptionOpen(true);
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar onOpenInscription={handleOpenInscription} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage onOpenInscription={handleOpenInscription} />} />
            <Route path="/plantilla" element={<SquadPage />} />
            <Route path="/jugador/:id" element={<PlayerDetailPage />} />
            <Route path="/escuelas" element={<SchoolsPage onOpenInscription={handleOpenInscription} />} />
            <Route path="/categorias" element={<CategoriesPage />} />
            <Route path="/torneos" element={<TournamentsPage />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="/noticia/:id" element={<NewsDetailPage />} />
            <Route path="/redes" element={<SocialFeedPage />} />
          </Routes>
        </main>
        <Footer onOpenInscription={handleOpenInscription} />
        <InscriptionModal isOpen={isInscriptionOpen} onClose={() => setIsInscriptionOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
