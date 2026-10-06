import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  ShieldCheck, 
  Leaf, 
  Heart, 
  MessageCircle, 
  CheckCircle2,
  Lock,
  Award
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer = () => {
  const { navigateTo, showToast } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Thank you for subscribing to VedaPure Wisdom!', 'success');
    setNewsletterEmail('');
  };

  return (
    <footer style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FAF7F2', paddingTop: '4.5rem', borderTop: '2px solid var(--color-gold)' }}>
      {/* 1. Top Newsletter Section */}
      <div className="container" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', paddingBottom: '3.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.14em', display: 'block', marginBottom: '0.4rem' }}>
              Ayurvedic Dinacharya & Wisdom
            </span>
            <h3 style={{ color: '#FAF7F2', fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '0.6rem' }}>
              Discover the Living Science of Ayurveda
            </h3>
            <p style={{ color: '#B6C4BC', fontSize: '0.925rem' }}>
              Receive seasonal Dosha balancing tips, physician formulated rituals, and exclusive access to limited-harvest botanical releases.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255, 255, 255, 0.1)', padding: '1rem 1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gold)' }}>
                <CheckCircle2 color="var(--color-gold)" size={24} />
                <div>
                  <div style={{ fontWeight: 600, color: '#FFF' }}>You are subscribed!</div>
                  <div style={{ fontSize: '0.8rem', color: '#B6C4BC' }}>Welcome gift coupon code <strong>VEDA15</strong> has been sent to your inbox.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} style={{ display: 'flex', gap: '0.5rem', maxWidth: '480px' }}>
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.85rem 1.25rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#FFF',
                    fontSize: '0.925rem'
                  }}
                  required
                />
                <button 
                  type="submit" 
                  className="btn btn-gold"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  <span>Subscribe</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Columns */}
      <div className="container" style={{ padding: '4rem 1.5rem 3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          
          {/* Col 1: Brand & Philosophy */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', cursor: 'pointer' }} onClick={() => navigateTo('home')}>
              <div className="brand-emblem" style={{ width: '38px', height: '38px' }}>
                <Sparkles size={18} />
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: '#FAF7F2', letterSpacing: '0.05em' }}>
                VEDAPURE
              </span>
            </div>
            <p style={{ color: '#B6C4BC', fontSize: '0.875rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              Authentic classical Ayurvedic formulations crafted with hand-harvested herbs, cold-pressed seed oils, and certified AYUSH botanical purity.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon-btn" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FAF7F2' }} title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon-btn" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FAF7F2' }} title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="icon-btn" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FAF7F2' }} title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
              </a>
              <a href="https://wa.me/919820012345" target="_blank" rel="noreferrer" className="icon-btn" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FAF7F2' }} title="WhatsApp Support">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Shop Remedies */}
          <div>
            <h4 style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>
              Shop Formulations
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('shop')}>All Products</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('shop', { category: 'hair-care' })}>Hair Growth & Care</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('shop', { category: 'skin-care' })}>Skin & Radiance</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('shop', { category: 'wellness' })}>Wellness & Immunity</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('shop', { category: 'oils' })}>Abhyanga & Body Oils</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('shop', { category: 'face-care' })}>Face Creams & Mists</span></li>
            </ul>
          </div>

          {/* Col 3: Ayurveda & Brand */}
          <div>
            <h4 style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>
              About & Wisdom
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('about')}>Our Story & Philosophy</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('about')}>Sacred Herbal Ingredients</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('wellness')}>Ayurveda Wellness Guide</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('contact')}>Book Vaidya Consultation</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('contact')}>Contact Us</span></li>
            </ul>
          </div>

          {/* Col 4: Customer Care & Legal */}
          <div>
            <h4 style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-sans)', fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>
              Customer Care & Trust
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('tracking')}>Track Order</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('faq')}>Frequently Asked Questions</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('shipping')}>Shipping & Delivery Policy</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('shipping')}>15-Day Return Guarantee</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('privacy')}>Privacy Policy</span></li>
              <li><span style={{ color: '#B6C4BC', cursor: 'pointer' }} onClick={() => navigateTo('terms')}>Terms of Service</span></li>
            </ul>
          </div>

        </div>

        {/* 3. Trust Certifications & Payment Strip */}
        <div style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', color: '#B6C4BC', fontSize: '0.8rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Award size={16} color="var(--color-gold)" /> Ministry of AYUSH Certified
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Leaf size={16} color="var(--color-sage)" /> 100% Botanical Ingredients
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Lock size={16} color="var(--color-gold)" /> 256-Bit SSL Encrypted Checkout
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFF', fontSize: '0.75rem' }}>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '4px' }}>UPI / GPay / PhonePe</span>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '4px' }}>Visa / Mastercard</span>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '4px' }}>Net Banking</span>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '4px' }}>Cash On Delivery</span>
          </div>

        </div>

        {/* 4. Bottom Copyright */}
        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.775rem', color: '#7E8E85' }}>
          © 2026 VedaPure Ayurveda & Wellness Pvt Ltd. All rights reserved. Classical formulations preserved under traditional Ayurvedic principles.
        </div>
      </div>
    </footer>
  );
};
