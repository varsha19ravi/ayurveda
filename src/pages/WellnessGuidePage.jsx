import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  User, 
  Calendar, 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  ShoppingBag,
  Share2,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const WellnessGuidePage = () => {
  const { articles, products, pageParams, addToCart, navigateTo } = useApp();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingArticleSlug, setReadingArticleSlug] = useState(pageParams?.slug || null);

  const categories = ['All', 'Hair Care', 'Skin Care', 'Stress & Relaxation', 'Daily Wellness'];

  const filteredArticles = articles.filter(art => {
    const catMatch = selectedCategory === 'All' || art.category === selectedCategory;
    const searchMatch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch;
  });

  const activeArticle = readingArticleSlug 
    ? articles.find(a => a.slug === readingArticleSlug) 
    : null;

  return (
    <div className="wellness-guide-page" style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container">
        
        {/* Full Article Reader View */}
        {activeArticle ? (
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <button 
              className="btn btn-secondary btn-sm"
              style={{ marginBottom: '2rem' }}
              onClick={() => setReadingArticleSlug(null)}
            >
              <ArrowLeft size={16} />
              <span>Back to Wellness Guides</span>
            </button>

            <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-sage)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
              {activeArticle.category} • {activeArticle.readTime}
            </span>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-primary)', lineHeight: '1.25', marginBottom: '1.25rem' }}>
              {activeArticle.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem', marginBottom: '2.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={16} /> {activeArticle.author}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={16} /> {activeArticle.publishDate}
              </span>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2.5rem', border: '1px solid var(--color-border)' }}>
              <img 
                src={activeArticle.image} 
                alt={activeArticle.title} 
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>

            {/* Article Content formatted */}
            <div style={{ color: 'var(--color-text-main)', fontSize: '1.05rem', lineHeight: '1.85', marginBottom: '3rem' }}>
              <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--color-primary)', borderLeft: '4px solid var(--color-gold)', paddingLeft: '1.25rem', marginBottom: '2rem' }}>
                "{activeArticle.excerpt}"
              </p>
              
              <div style={{ whiteSpace: 'pre-line' }}>
                {activeArticle.content}
              </div>
            </div>

            {/* Related Ayurvedic Remedies for this article */}
            {activeArticle.relatedProducts && activeArticle.relatedProducts.length > 0 && (
              <div style={{ backgroundColor: '#FAF7F2', borderRadius: 'var(--radius-md)', padding: '2rem', border: '1px solid var(--color-border)', marginTop: '3rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', fontSize: '1.4rem', marginBottom: '1rem' }}>
                  Recommended Formulations for This Ritual
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  {activeArticle.relatedProducts.map(prodId => {
                    const p = products.find(prod => prod.id === prodId);
                    if (!p) return null;
                    return (
                      <div key={p.id} style={{ backgroundColor: '#FFF', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
                        <img src={p.image} alt={p.name} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '0.65rem' }} />
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.4rem' }}>{p.name}</div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-gold-dark)', marginTop: 'auto', marginBottom: '0.75rem' }}>₹{p.price}</div>
                        <button className="btn btn-primary btn-sm btn-block" onClick={() => addToCart(p, 1, p.volume, true)}>
                          <ShoppingBag size={14} /> Add to Cart
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Medical Disclaimer Alert */}
            <div style={{ marginTop: '2.5rem', padding: '1rem 1.25rem', backgroundColor: '#F8F5EE', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-sage)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              <strong>Educational Disclaimer:</strong> The information provided in this guide is rooted in classical Ayurvedic literature and holistic wellness traditions. It is intended for educational purposes only and not as a substitute for professional medical diagnosis or treatment.
            </div>

          </div>
        ) : (
          /* Main Journal Overview List */
          <div>
            
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="section-tagline">Ayurvedic Magazine & Wisdom</span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
                The VedaPure Living Journal
              </h1>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
                In-depth clinical and traditional guides on Dinacharya (daily rituals), herb pharmacology, sleep optimization, and dosha balance.
              </p>
            </div>

            {/* Filter & Search Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              
              {/* Category Pills */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.55rem 1.2rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      backgroundColor: selectedCategory === cat ? 'var(--color-primary)' : '#FFF',
                      color: selectedCategory === cat ? '#FFF' : 'var(--color-text-main)',
                      border: `1.5px solid ${selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-border)'}`,
                      cursor: 'pointer',
                      transition: 'var(--transition)'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#FFF', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-full)', padding: '0.45rem 1.2rem', minWidth: '280px' }}>
                <Search size={18} color="var(--color-text-muted)" />
                <input
                  type="text"
                  placeholder="Search articles & herbs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ border: 'none', background: 'transparent', fontSize: '0.875rem', width: '100%' }}
                />
              </div>

            </div>

            {/* Articles Grid */}
            <div className="grid-3" style={{ gap: '2.5rem' }}>
              {filteredArticles.map((art) => (
                <div 
                  key={art.id}
                  className="card"
                  style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                  onClick={() => setReadingArticleSlug(art.slug)}
                >
                  <div style={{ height: '220px', overflow: 'hidden' }}>
                    <img 
                      src={art.image} 
                      alt={art.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.75rem', color: 'var(--color-sage)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                      <span>{art.category}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-primary)', lineHeight: '1.35', marginBottom: '0.75rem' }}>
                      {art.title}
                    </h3>

                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {art.excerpt}
                    </p>

                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--color-border-light)', paddingTop: '1rem' }}>
                      <span style={{ fontSize: '0.775rem', color: 'var(--color-text-light)' }}>
                        {art.author.split(',')[0]}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-gold-dark)' }}>
                        Read Guide <ArrowRight size={14} />
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
