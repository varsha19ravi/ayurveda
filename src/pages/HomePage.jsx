import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Leaf, 
  Heart, 
  CheckCircle2, 
  ChevronRight, 
  Star, 
  Award, 
  Sparkle,
  BookOpen,
  Calendar
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TrustBadges } from '../components/common/TrustBadges';
import { ProductCard } from '../components/common/ProductCard';
import { StarRating } from '../components/common/StarRating';

export const HomePage = () => {
  const { 
    products, 
    categories, 
    ingredients, 
    articles, 
    navigateTo, 
    setIsDoshaQuizOpen 
  } = useApp();

  const bestSellers = products.slice(0, 4);
  const featuredIngredients = ingredients.slice(0, 4);
  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="home-page">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            
            {/* Left Content */}
            <div>
              <div className="hero-pill-badge">
                <Sparkles size={15} />
                <span>Ancient Wisdom • Modern Wellness</span>
              </div>

              <h1 className="hero-heading">
                Natural Ayurveda for <br />
                <span className="gold-text">Everyday Wellness</span>
              </h1>

              <p className="hero-desc">
                Pure classical Ayurvedic formulations crafted with hand-harvested herbs, cold-pressed seed oils, and certified botanical integrity for radiant skin, dense hair, and tridoshic vitality.
              </p>

              <div className="hero-cta-group">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => navigateTo('shop')}
                >
                  <span>Shop Remedies</span>
                  <ArrowRight size={18} />
                </button>

                <button 
                  className="btn btn-secondary btn-lg"
                  onClick={() => navigateTo('about')}
                >
                  <span>Our Philosophy</span>
                </button>
              </div>

              {/* Trust Metrics */}
              <div className="hero-trust-metrics">
                <div className="hero-metric-item">
                  <span className="hero-metric-number">100%</span>
                  <span className="hero-metric-label">Botanical Purity</span>
                </div>
                <div className="hero-metric-item">
                  <span className="hero-metric-number">72 Hrs</span>
                  <span className="hero-metric-label">Classical Decoction</span>
                </div>
                <div className="hero-metric-item">
                  <span className="hero-metric-number">4.9 / 5</span>
                  <span className="hero-metric-label">50,000+ Reviews</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image */}
            <div className="hero-image-wrap">
              <div className="hero-image-box">
                <img 
                  src="/images/hero.jpg" 
                  alt="VedaPure Luxury Ayurveda Formulations"
                  className="hero-img"
                />
              </div>

              {/* Floating Trust Card */}
              <div className="hero-floating-card">
                <div className="floating-icon-circle">
                  <Award size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    Ministry of AYUSH Certified
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    100% Classical Taila Pak Vidhi
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST BADGES STRIP */}
      <TrustBadges />

      {/* 3. FEATURED CATEGORIES */}
      <section style={{ padding: '5rem 0 4rem 0' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tagline">Curated Herbals</span>
            <h2 className="section-title">Explore by Category</h2>
            <p className="section-desc">
              Discover time-tested formulations tailored to revitalize your skin, hair, and internal vitality.
            </p>
          </div>

          <div className="grid-3">
            {categories.slice(0, 6).map((cat) => (
              <div 
                key={cat.id} 
                className="category-card"
                onClick={() => navigateTo('shop', { category: cat.slug })}
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="category-card-img"
                  loading="lazy"
                />
                <div className="category-card-overlay">
                  <span className="category-card-badge">{cat.badge || 'Essential'}</span>
                  <h3 className="category-card-title">{cat.name}</h3>
                  <p className="category-card-desc">{cat.description}</p>
                  <span className="category-card-cta">
                    <span>Explore Collection</span>
                    <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BEST SELLERS */}
      <section style={{ padding: '4rem 0 5rem 0', backgroundColor: '#FFF', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-tagline">Loved by Thousands</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-primary)' }}>
                Our Most Cherished Remedies
              </h2>
            </div>

            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => navigateTo('shop')}
            >
              <span>View All Remedies</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid-4">
            {bestSellers.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE DOSHA ASSESSMENT BANNER */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="dosha-banner-card">
            
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)', letterSpacing: '0.14em', display: 'block', marginBottom: '0.6rem' }}>
                Interactive Ayurvedic Diagnosis
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Discover Your Unique Dosha: <br />
                <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Vata, Pitta, or Kapha?</span>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.75rem', maxWidth: '520px' }}>
                Ayurveda teaches that true radiance begins when your unique mind-body constitution is in equilibrium. Take our physician-designed 2-minute diagnostic quiz to unlock personalized daily rituals and herbal formulas.
              </p>
              
              <button 
                className="btn btn-gold btn-lg"
                onClick={() => setIsDoshaQuizOpen(true)}
              >
                <Sparkle size={18} />
                <span>Start Free Dosha Quiz</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.85)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-gold-light)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                  V
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem' }}>Vata (Air & Space)</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Governs motion, nervous system, and cellular hydration.</div>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.85)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-sage-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                  P
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem' }}>Pitta (Fire & Water)</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Governs metabolism, skin glow, and cellular transformation.</div>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.85)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F2ECE4', color: '#8C6C42', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                  K
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem' }}>Kapha (Earth & Water)</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Governs physical structure, deep moisture, and vital immunity.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SACRED INGREDIENTS SPOTLIGHT */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFF', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tagline">Farm-To-Bottle Transparency</span>
            <h2 className="section-title">Sacred Botanical Sourcing</h2>
            <p className="section-desc">
              We partner directly with multigenerational organic forest farmers in Kerala, Kashmir, and Central India.
            </p>
          </div>

          <div className="grid-4">
            {featuredIngredients.map((herb) => (
              <div 
                key={herb.id}
                style={{
                  backgroundColor: '#FAF7F2',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  {herb.tag}
                </span>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.2rem' }}>
                  {herb.name}
                </h3>

                <div style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '0.85rem' }}>
                  {herb.botanicalName} • {herb.origin}
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.55', marginBottom: '1.25rem' }}>
                  {herb.description}
                </p>

                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-border-light)', paddingTop: '0.85rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-sage)', display: 'block' }}>
                    {herb.dosha}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button 
              className="btn btn-secondary"
              onClick={() => navigateTo('about')}
            >
              <span>Explore All 12 Sacred Ingredients</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* 7. VERIFIED REVIEWS & SOCIAL PROOF */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FAF7F2' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-tagline">Real Results</span>
            <h2 className="section-title">Verified Customer Experiences</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: '0.75rem' }}>
              <StarRating rating={4.9} size={20} />
              <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.1rem' }}>4.9 / 5</span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>• Based on 1,245 verified reviews</span>
            </div>
          </div>

          <div className="grid-3">
            {[
              {
                name: 'Pooja Sharma',
                location: 'Bengaluru',
                product: 'Kumkumadi Miraculous Beauty Fluid',
                rating: 5,
                title: 'Real Kashmiri saffron glow in 2 weeks!',
                comment: 'I was skeptical because many brands sell fake yellow scented oil. But VedaPure Kumkumadi is the real deal! The natural saffron aroma is heavenly, and my acne scars and pigmentation around cheeks have noticeably faded.'
              },
              {
                name: 'Rhea Nambiar',
                location: 'Mumbai',
                product: 'Bhringraj & Amla Intensive Hair Growth Oil',
                rating: 5,
                title: 'Hair fall stopped within 3 washes!',
                comment: 'I was losing chunks of hair after fever. Started using this oil twice a week with warm oil massage. Within 3 weeks, my hair fall has almost stopped and baby hair is sprouting along my hairline.'
              },
              {
                name: 'Tanvi Iyer',
                location: 'Hyderabad',
                product: 'Ashwagandha & Brahmi Vitality Elixir',
                rating: 5,
                title: 'Unbelievable sleep quality after just 1 week',
                comment: 'I used to wake up 3-4 times every night with racing thoughts. Taking 1 capsule with warm almond milk before sleeping has transformed my sleep. I wake up calm and energized!'
              }
            ].map((rev, index) => (
              <div 
                key={index}
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <StarRating rating={rev.rating} size={16} />
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-success)', background: '#EAF6EE', padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>
                    <CheckCircle2 size={12} /> Verified Buyer
                  </span>
                </div>

                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
                  "{rev.title}"
                </h4>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  {rev.comment}
                </p>

                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-border-light)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                    {rev.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                    {rev.location} • Reviewed <em>{rev.product}</em>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. AYURVEDA WELLNESS GUIDE PREVIEWS */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFF' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-tagline">Ancient Knowledge for Modern Life</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-primary)' }}>
                From the Ayurveda Journal
              </h2>
            </div>

            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => navigateTo('wellness')}
            >
              <span>Explore All Guides</span>
              <BookOpen size={16} />
            </button>
          </div>

          <div className="grid-3">
            {featuredArticles.map((art) => (
              <div 
                key={art.id}
                className="card"
                style={{ overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => navigateTo('wellness', { slug: art.slug })}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={art.image} 
                    alt={art.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem', color: 'var(--color-sage)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    <span>{art.category}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-primary)', lineHeight: '1.35', marginBottom: '0.6rem' }}>
                    {art.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.55', marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {art.excerpt}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-gold-dark)' }}>
                    <span>Read Guide</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
