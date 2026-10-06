import React from 'react';
import { ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CategoriesPage = () => {
  const { categories, products, navigateTo } = useApp();

  return (
    <div className="categories-page" style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tagline">Ayurvedic Classifications</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
            Sacred Remedies by Category
          </h1>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
            Explore classical Ayurvedic treatments formulated according to traditional texts for hair health, glowing skin, vital immunity, and full-body wellness.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid-3" style={{ gap: '2.5rem' }}>
          {categories.map((cat) => {
            const count = products.filter(p => p.category === cat.slug).length;
            return (
              <div 
                key={cat.id}
                className="category-card"
                style={{ height: '380px' }}
                onClick={() => navigateTo('shop', { category: cat.slug })}
              >
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="category-card-img"
                  loading="lazy"
                />
                <div className="category-card-overlay" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span className="category-card-badge">{cat.subtitle || 'Classical Herbal'}</span>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: 'var(--radius-full)', color: '#FFF' }}>
                      {count} {count === 1 ? 'Product' : 'Products'}
                    </span>
                  </div>
                  
                  <h3 className="category-card-title" style={{ fontSize: '1.6rem' }}>
                    {cat.name}
                  </h3>
                  
                  <p className="category-card-desc" style={{ fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                    {cat.description}
                  </p>

                  <span className="category-card-cta" style={{ fontSize: '0.9rem' }}>
                    <span>Browse {cat.name}</span>
                    <ChevronRight size={18} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div style={{ marginTop: '5rem', backgroundColor: '#FFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '3.5rem 2.5rem', textAlign: 'center' }}>
          <span className="brand-emblem" style={{ width: '48px', height: '48px', margin: '0 auto 1rem auto' }}>
            <Sparkles size={22} />
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            Unsure which category matches your body constitution?
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '540px', margin: '0 auto 2rem auto', fontSize: '1rem' }}>
            Take our 2-minute Ayurvedic Dosha Quiz to receive personalized regimen recommendations tailored to your unique biological blueprint.
          </p>
          <button 
            className="btn btn-gold btn-lg"
            onClick={() => navigateTo('home')}
          >
            <span>Take the Free Dosha Assessment</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};
