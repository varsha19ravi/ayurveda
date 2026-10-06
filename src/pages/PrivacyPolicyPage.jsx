import React from 'react';

export const PrivacyPolicyPage = () => {
  return (
    <div className="policy-page" style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container-narrow">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tagline">Legal & Trust</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Last Updated: October 2026 • Effective for all VedaPure customers
          </p>
        </div>

        <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '3rem', boxShadow: 'var(--shadow-sm)', color: 'var(--color-text-main)', lineHeight: '1.75' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            1. Commitment to Customer Privacy
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
            VedaPure Ayurveda Pvt. Ltd. values and respects your personal data. This Privacy Policy outlines our transparent protocols for collecting, safeguarding, and utilizing your information when you browse our website, place orders, or complete our Ayurvedic Dosha assessment.
          </p>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            2. Information We Collect
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
            We only collect information necessary to fulfill your orders and personalize your wellness experience: name, shipping address, email, phone number, and voluntary health profile inputs (e.g. skin tendencies, dosha quiz results). We NEVER sell or rent your personal information to third-party marketing brokers.
          </p>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            3. Payment Security & Encryption
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
            All payment transactions (UPI, credit/debit cards, Net Banking) are encrypted using 256-bit Secure Socket Layer (SSL) protocols processed via PCI-DSS compliant payment gateways. VedaPure never stores complete card numbers or banking PINs on our servers.
          </p>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            4. Contact Our Privacy Officer
          </h3>
          <p style={{ color: 'var(--color-text-muted)' }}>
            If you have questions regarding your data or wish to request data erasure, please write to our Data Privacy Officer at <strong>privacy@vedapure.com</strong>.
          </p>
        </div>

      </div>
    </div>
  );
};
