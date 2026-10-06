import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ShippingReturnsPage = () => {
  const { navigateTo } = useApp();

  return (
    <div className="policy-page" style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container-narrow">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tagline">Hassle-Free & Trustworthy</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
            Shipping & Returns Policy
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            Fast, temperature-controlled delivery across India and a 15-day complete satisfaction guarantee.
          </p>
        </div>

        <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '3rem', boxShadow: 'var(--shadow-sm)', color: 'var(--color-text-main)', lineHeight: '1.75' }}>
          
          {/* Section 1: Shipping */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <Truck size={24} color="var(--color-primary)" />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)' }}>
                1. Shipping & Dispatch Timelines
              </h2>
            </div>

            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
              All VedaPure formulations are freshly compounded, packed in protective eco-friendly corrugated packaging with botanical wax seals, and dispatched within 24 business hours from our central Kerala and Bengaluru fulfillment hubs.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
              <div style={{ background: '#FAF7F2', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '4px' }}>Free Standard Express</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Free on all orders above ₹999 across 22,000+ Indian PIN codes (3–5 business days). Flat ₹99 for smaller orders.</span>
              </div>

              <div style={{ background: '#FAF7F2', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '4px' }}>Priority Air Express</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Guaranteed 24–48 hour delivery via dedicated air cargo for a flat fee of ₹150.</span>
              </div>
            </div>
          </div>

          {/* Section 2: 15-Day Satisfaction Guarantee & Returns */}
          <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '2.5rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <RotateCcw size={24} color="var(--color-gold-dark)" />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)' }}>
                2. 15-Day Free Returns Guarantee
              </h2>
            </div>

            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
              We take immense pride in the therapeutic purity of our classical preparations. If you are not completely satisfied with the results or experience any unexpected adverse response, you may return the product within 15 days of delivery for a 100% full refund.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.925rem', paddingLeft: '1.25rem' }}>
              <li>• Free doorstep courier pickup arranged at zero extra cost to you.</li>
              <li>• Refunds processed back to your original payment method within 3 business days of return receipt.</li>
              <li>• For Cash on Delivery orders, refunds are credited directly to your bank account via instant IMPS transfer.</li>
            </ul>
          </div>

          {/* Section 3: Damaged or Missing Shipments */}
          <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <ShieldCheck size={24} color="var(--color-sage)" />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)' }}>
                3. Damaged or Tampered Shipments
              </h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)' }}>
              In the rare event that your shipment arrives damaged or with a broken seal, please contact our support desk immediately at <strong>care@vedapure.com</strong> or WhatsApp <strong>+91 98200 12345</strong> with a photo of the package. We will dispatch a fresh replacement on the exact same day.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
