import React from 'react';
import { 
  Sparkles, 
  Leaf, 
  ShieldCheck, 
  Heart, 
  Award, 
  Clock, 
  Droplet, 
  Sun,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutPage = () => {
  const { ingredients, navigateTo } = useApp();

  return (
    <div className="about-page" style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container">
        
        {/* 1. Header Hero */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <span className="section-tagline">Our Heritage & Story</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', color: 'var(--color-primary)', marginBottom: '1.25rem', lineHeight: '1.2' }}>
            Ancient Wisdom. <br />
            <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Modern Scientific Rigor.</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.75' }}>
            VedaPure was born from a timeless conviction: that authentic Ayurveda should not be diluted into marketing trends or filled with synthetic chemicals, nor kept inaccessible in ancient Sanskrit texts.
          </p>
        </div>

        {/* 2. Story Grid with Generated Harvest Photo */}
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem', marginBottom: '6rem' }}>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '4px solid #FFF', boxShadow: 'var(--shadow-lg)' }}>
            <img 
              src="/images/harvest.jpg" 
              alt="Ayurvedic Herb Harvesting in Kerala"
              style={{ width: '100%', height: '440px', objectFit: 'cover' }}
            />
          </div>

          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
              The VedaPure Standard
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
              From Sacred Soil to Pure Alchemy
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.75', marginBottom: '1.25rem', fontSize: '0.975rem' }}>
              For generations, our master Ayurvedic physicians (Vaidyas) have preserved traditional palm-leaf manuscripts detailing the restorative power of whole botanicals. We reject petroleum-derived mineral oils, artificial chemical fragrances, and synthetic thickeners.
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.75', marginBottom: '2rem', fontSize: '0.975rem' }}>
              Every single bottle is slow-crafted in small, controlled batches in our GMP-certified laboratory adhering to Ministry of AYUSH guidelines and verified by independent third-party NABL heavy metal tests.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
              <div style={{ background: '#FAF7F2', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>100% Traceable</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Direct single-origin farm harvest</span>
              </div>
              <div style={{ background: '#FAF7F2', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>72-Hour Brewing</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Classical Taila Pak Vidhi</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. The 4 Pillars of Our Philosophy */}
        <section style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '4rem 3rem', marginBottom: '6rem' }}>
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="section-tagline">Core Values</span>
            <h2 className="section-title">The Four Pillars of VedaPure</h2>
          </div>

          <div className="grid-4">
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-sage-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <Leaf size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Pure Botanicals
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                We use whole roots, fresh leaves, and cold-pressed seed oils with zero artificial fillers or petrochemicals.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-gold-light)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <Clock size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Patience in Alchemy
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                True potency cannot be rushed. Our formulas are slow-simmered over 72 hours for deep cellular bio-availability.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#FAF0E6', color: '#B3541E', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <Sun size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Ethical Sourcing
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                We pay above fair-trade wages to smallholder farmers and practice sustainable, non-destructive wildcrafting.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#E8F4F8', color: '#1A73E8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Clinical Purity Assays
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Every single batch is independently tested for heavy metals (Lead, Mercury, Arsenic) and microbiological safety.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Sacred Ingredients Glossary */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="section-header">
            <span className="section-tagline">Herbal Encyclopedia</span>
            <h2 className="section-title">Our Sacred Botanical Ingredients</h2>
            <p className="section-desc">
              Discover the profound therapeutic properties of the herbs and flowers powering VedaPure formulations.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {ingredients.map((herb) => (
              <div 
                key={herb.id}
                style={{
                  backgroundColor: '#FFF',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.725rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)', letterSpacing: '0.08em' }}>
                      {herb.tag}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-primary)', marginTop: '2px' }}>
                      {herb.name}
                    </h3>
                  </div>
                  <span style={{ fontSize: '0.75rem', background: 'var(--color-sage-light)', color: 'var(--color-primary)', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>
                    {herb.dosha}
                  </span>
                </div>

                <div style={{ fontSize: '0.825rem', fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '0.85rem' }}>
                  {herb.botanicalName} • Origin: {herb.origin}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                  {herb.description}
                </p>

                <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '1rem', marginTop: 'auto' }}>
                  <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'block', marginBottom: '6px' }}>
                    Key Therapeutic Actions:
                  </strong>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'var(--color-text-main)' }}>
                    {herb.benefits?.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                        <span style={{ color: 'var(--color-gold)' }}>•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Doctor Consultation CTA */}
        <div style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #1c4a32 100%)', color: '#FFF', borderRadius: 'var(--radius-lg)', padding: '4rem 3rem', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#FFF', marginBottom: '1rem' }}>
            Experience Authentic Ayurveda
          </h2>
          <p style={{ color: '#D2DFD8', maxWidth: '560px', margin: '0 auto 2rem auto', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Explore our classical remedies or connect directly with our certified Ayurvedic doctors for personalized wellness guidance.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-gold btn-lg" onClick={() => navigateTo('shop')}>
              <span>Shop All Formulations</span>
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary btn-lg" style={{ color: '#FFF', borderColor: '#FFF' }} onClick={() => navigateTo('contact')}>
              <span>Book Doctor Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
