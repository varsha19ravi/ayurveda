import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Sparkles, ArrowRight, Tag, CornerDownLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, products, navigateTo } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState(['hair fall', 'kumkumadi', 'dry skin', 'ashwagandha']);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const normalizedQuery = searchTerm.trim().toLowerCase();

  // Search algorithm matching name, sanskrit name, category, concern array, ingredients list, and description
  const filteredResults = normalizedQuery === '' ? [] : products.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(normalizedQuery);
    const sanskritMatch = product.sanskritName ? product.sanskritName.toLowerCase().includes(normalizedQuery) : false;
    const catMatch = product.categoryName.toLowerCase().includes(normalizedQuery);
    const descMatch = product.description.toLowerCase().includes(normalizedQuery);
    const ingredientsMatch = product.ingredientsList ? product.ingredientsList.toLowerCase().includes(normalizedQuery) : false;
    const concernMatch = product.concern ? product.concern.some(c => c.toLowerCase().includes(normalizedQuery)) : false;

    return nameMatch || sanskritMatch || catMatch || descMatch || ingredientsMatch || concernMatch;
  });

  const handleSelectProduct = (slug) => {
    if (searchTerm.trim() && !recentSearches.includes(searchTerm.trim())) {
      setRecentSearches(prev => [searchTerm.trim(), ...prev.slice(0, 4)]);
    }
    setIsSearchOpen(false);
    navigateTo('product', { slug });
  };

  const handleTagClick = (tag) => {
    setSearchTerm(tag);
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsSearchOpen(false)}>
      <div 
        className="modal-content-box" 
        style={{ maxWidth: '680px', maxHeight: '85vh', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Input */}
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Search size={22} color="var(--color-primary)" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search remedies, concerns (e.g. hair fall, dry skin, stress)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              fontSize: '1.1rem',
              color: 'var(--color-text-main)',
              background: 'transparent'
            }}
          />
          {searchTerm && (
            <button className="icon-btn" onClick={() => setSearchTerm('')} style={{ width: '32px', height: '32px' }}>
              <X size={16} />
            </button>
          )}
          <button className="modal-close-btn" style={{ position: 'static' }} onClick={() => setIsSearchOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Quick Concern Tags */}
        <div style={{ padding: '0.85rem 1.5rem', backgroundColor: '#F8F5EE', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Popular Searches:
          </span>
          {['Hair Fall', 'Dry Skin', 'Pigmentation', 'Stress & Sleep', 'Dandruff', 'Joint Pain'].map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              style={{
                fontSize: '0.775rem',
                padding: '3px 10px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: '#FFF',
                border: '1px solid var(--color-border)',
                color: 'var(--color-primary)',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
          {searchTerm.trim() === '' ? (
            <div>
              <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                Recent Searches
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {recentSearches.map((term, i) => (
                  <div 
                    key={i} 
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0.85rem', borderRadius: 'var(--radius-sm)', backgroundColor: '#FAF7F2', cursor: 'pointer' }}
                    onClick={() => setSearchTerm(term)}
                  >
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Tag size={15} color="var(--color-sage)" /> {term}
                    </span>
                    <CornerDownLeft size={14} color="var(--color-text-light)" />
                  </div>
                ))}
              </div>
            </div>
          ) : filteredResults.length > 0 ? (
            <div>
              <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-sage)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                Found {filteredResults.length} Ayurvedic {filteredResults.length === 1 ? 'Formula' : 'Formulas'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {filteredResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product.slug)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#FFF',
                      border: '1px solid var(--color-border)',
                      cursor: 'pointer',
                      transition: 'var(--transition)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-sage)', fontWeight: 600 }}>
                        {product.categoryName}
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                        {product.name}
                      </div>
                      {product.sanskritName && (
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-dark)', fontStyle: 'italic' }}>
                          {product.sanskritName}
                        </div>
                      )}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                        ₹{product.price}
                      </div>
                      {product.originalPrice && (
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textDecoration: 'line-through' }}>
                          ₹{product.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#F8F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <Search size={28} color="var(--color-sage)" />
              </div>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.4rem' }}>
                We couldn't find what you're looking for.
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                Try searching for specific concerns like "hair fall", "dry skin", "pigmentation", or classic herbs like "saffron", "amla", or "ashwagandha".
              </p>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => { setIsSearchOpen(false); navigateTo('shop'); }}
              >
                Browse All Remedies
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
