import React from 'react';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

export const NewsPage = () => {
  return (
    <section className="section page-top-padding">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag"><Newspaper size={16} className="inline mr-1 text-orange" /> ACTUALIDAD DEPORTIVA</span>
          <h1 className="section-title">Noticias & Novedades ZEP</h1>
          <p className="section-subtitle">Últimas noticias de la academia, convocatorias a partidos y talleres de desarrollo.</p>
        </div>

        {newsData.length > 0 && (
          <>
            <div className="news-featured">
              <Link to={`/noticia/${newsData[0].id}`} className="news-featured-card card-glass">
                <img src={newsData[0].image} alt={newsData[0].title} className="news-featured-img" />
                <div className="news-featured-body">
                  <h3 className="news-featured-title">{newsData[0].title}</h3>
                  <span className="news-date" style={{ color: 'var(--zep-text-muted)' }}>
                    {newsData[0].date}
                  </span>
                </div>
              </Link>
            </div>

            {newsData.length > 1 && (
              <div className="news-carousel">
                {newsData.slice(1).map(news => (
                  <Link key={news.id} to={`/noticia/${news.id}`} className="news-carousel-card card-glass">
                    <div className="news-carousel-img-wrap">
                      <img src={news.image} alt={news.title} className="news-carousel-img" />
                    </div>
                    <div className="news-carousel-body">
                      <h4 className="news-carousel-title">{news.title}</h4>
                      <span className="news-date" style={{ color: 'var(--zep-text-muted)' }}>
                        {news.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
