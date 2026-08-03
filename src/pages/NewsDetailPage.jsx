import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import { ArrowLeft, Calendar, User, Tag, Share2, Flame } from 'lucide-react';

export const NewsDetailPage = () => {
  const { id } = useParams();
  const article = newsData.find(n => n.id === id) || newsData[0];

  return (
    <section className="section page-top-padding">
      <div className="container" style={{ maxWidth: 900 }}>
        
        {/* BACK BUTTON */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link to="/noticias" className="btn-flip-back" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Volver a Noticias & Novedades
          </Link>
        </div>

        {/* ARTICLE HEADER & HERO IMAGE */}
        <article className="card-glass news-detail-article">
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="news-category-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>
              {article.category}
            </span>
            <h1 className="news-detail-title">
              {article.title}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--zep-text-muted)', fontSize: '0.85rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={14} className="text-orange" /> {article.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <User size={14} className="text-orange" /> {article.author}
              </span>
            </div>
          </div>
          {/* SUMMARY CALLOUT */}
          <div style={{ background: 'rgba(255,85,0,0.08)', borderLeft: '4px solid var(--zep-orange)', padding: '1.2rem 1.5rem', borderRadius: '0 10px 10px 0', marginBottom: '2rem' }}>
            <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.6 }}>
              "{article.summary}"
            </p>
          </div>

          {/* MAIN FEATURED PHOTO */}
          <div className="news-detail-hero-img">
            <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* ARTICLE BODY PARAGRAPHS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', color: '#e2e8f0', fontSize: '1.05rem', lineHeight: '1.8' }}>
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* TAGS FOOTER */}
          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <Tag size={16} className="text-orange" />
              {article.tags.map((t, idx) => (
                <span key={idx} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: 4, fontSize: '0.78rem', color: '#ccc', fontWeight: 600 }}>
                  #{t}
                </span>
              ))}
            </div>

            <Link to="/noticias" className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              Ver Más Noticias <ArrowLeft size={14} style={{ transform: 'rotate(180deg)' }} />
            </Link>
          </div>
        </article>

      </div>
    </section>
  );
};
