import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FAQPage = () => {
  const { faqs, navigateTo } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({ '0-0': true, '1-0': true });

  const toggleItem = (key) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="faq-page" style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container-narrow">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tagline">Answers & Guidance</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', maxWidth: '580px', margin: '0 auto 2rem auto' }}>
            Everything you need to know about our traditional Ayurvedic recipes, safety certifications, shipping timelines, and dosage rituals.
          </p>

          {/* Search Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#FFF', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-full)', padding: '0.6rem 1.4rem', maxWidth: '480px', margin: '0 auto', boxShadow: 'var(--shadow-sm)' }}>
            <Search size={18} color="var(--color-sage)" />
            <input 
              type="text" 
              placeholder="Search questions (e.g. shipping, Kumkumadi, dosage)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ border: 'none', background: 'transparent', width: '100%', fontSize: '0.925rem' }}
            />
          </div>
        </div>

        {/* Categorized FAQs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {faqs.map((cat, catIdx) => {
            const matchingItems = cat.items.filter(item => 
              item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
              item.a.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (matchingItems.length === 0) return null;

            return (
              <div key={catIdx}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                  {cat.category}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {matchingItems.map((item, itemIdx) => {
                    const key = `${catIdx}-${itemIdx}`;
                    const isOpen = !!openItems[key];

                    return (
                      <div 
                        key={itemIdx}
                        style={{
                          backgroundColor: '#FFF',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          overflow: 'hidden',
                          transition: 'var(--transition)'
                        }}
                      >
                        <button
                          onClick={() => toggleItem(key)}
                          style={{
                            width: '100%',
                            padding: '1.25rem 1.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'left',
                            backgroundColor: isOpen ? '#FAF7F2' : '#FFF',
                            cursor: 'pointer',
                            color: 'var(--color-primary)',
                            fontWeight: 600,
                            fontSize: '1rem'
                          }}
                        >
                          <span>{item.q}</span>
                          <ChevronDown 
                            size={18} 
                            style={{ 
                              transform: isOpen ? 'rotate(180deg)' : 'none', 
                              transition: 'transform 0.3s ease',
                              color: 'var(--color-gold-dark)',
                              flexShrink: 0,
                              marginLeft: '1rem'
                            }} 
                          />
                        </button>

                        {isOpen && (
                          <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid var(--color-border-light)', color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.7' }}>
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Help Banner */}
        <div style={{ marginTop: '4rem', backgroundColor: '#FAF7F2', borderRadius: 'var(--radius-md)', padding: '2.5rem', textAlign: 'center', border: '1px solid var(--color-border)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
            Still have questions?
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Our Ayurvedic practitioners and customer support specialists are available Monday to Saturday.
          </p>
          <button className="btn btn-primary" onClick={() => navigateTo('contact')}>
            <MessageCircle size={16} />
            <span>Contact Our Team</span>
          </button>
        </div>

      </div>
    </div>
  );
};
