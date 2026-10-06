import React from 'react';

export const TermsPage = () => {
  return (
    <div className="policy-page" style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container-narrow">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tagline">Legal & Terms</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
            Terms & Conditions
          </h1>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Last Updated: October 2026 • Governing terms for website usage and purchases
          </p>
        </div>

        <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '3rem', boxShadow: 'var(--shadow-sm)', color: 'var(--color-text-main)', lineHeight: '1.75' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            1. Agreement to Terms
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
            By accessing or using the VedaPure website and services, you agree to be bound by these Terms and Conditions. All products listed on this platform are manufactured under Ayurvedic drug manufacturing licenses certified by the Ministry of AYUSH, Government of India.
          </p>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            2. Product Usage & Traditional Guidance
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
            VedaPure formulas are prepared using traditional Ayurvedic principles and natural botanical herbs. While rigorously tested for heavy metals and safety, individual body constitutions (Prakriti) respond differently. We advise performing a 24-hour patch test before full application of any botanical formulation.
          </p>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            3. Pricing & Promotions
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
            All prices are stated in Indian Rupees (INR) and are inclusive of applicable Goods and Services Tax (GST). Promo codes and coupon discounts (e.g. VEDA15, WELCOME20) are subject to stated minimum order values and validity windows.
          </p>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            4. Governing Law & Jurisdiction
          </h3>
          <p style={{ color: 'var(--color-text-muted)' }}>
            These terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
          </p>
        </div>

      </div>
    </div>
  );
};
