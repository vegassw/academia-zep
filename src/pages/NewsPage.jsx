import React from 'react';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

export const NewsPage = () => {
  return (
    <section className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        <div className="section-header center">
          <span className="section-tag"><Newspaper size={16} className="inline mr-1 text-orange" /> ACTUALIDAD DEPORTIVA</span>
          <h1 className="section-title">Noticias & Novedades ZEP</h1>
          <p className="section-subtitle">Últimas noticias de la academia, convocatorias a partidos y talleres de desarrollo.</p>
        </div>

        <div className="news-grid">
          {newsData.map(news => (
            <article key={news.id} className="news-card card-glass">
              <div className="news-img-wrap">
                <img src={news.image} alt={news.title} className="news-img" />
                <span className="news-category-badge">{news.category}</span>
              </div>
              <div className="news-body">
                <span className="news-date"><Calendar size={14} className="inline mr-1 text-orange" /> {news.date}</span>
                <h3 className="news-title">{news.title}</h3>
                <p className="news-desc">{news.summary}</p>
                <Link to={`/noticia/${news.id}`} className="news-link">
                  Leer noticia completa <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
