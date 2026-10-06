import React, { useState } from 'react';
import { 
  Search, 
  Package, 
  Truck, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const OrderTrackingPage = () => {
  const { orders, pageParams, navigateTo, showToast } = useApp();

  const [query, setQuery] = useState(pageParams?.orderId || 'VEDA-2026-9842');
  const [searchedOrder, setSearchedOrder] = useState(() => {
    return orders.find(o => o.id === (pageParams?.orderId || 'VEDA-2026-9842')) || orders[0];
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const clean = query.trim().toUpperCase();
    const found = orders.find(o => 
      o.id.toUpperCase() === clean || 
      o.customerPhone.includes(query.trim()) ||
      o.trackingNumber.toUpperCase().includes(clean)
    );

    if (found) {
      setSearchedOrder(found);
      showToast(`Found tracking details for Order #${found.id}`, 'success');
    } else {
      showToast('No order found with that ID or Phone. Please check your details.', 'error');
    }
  };

  return (
    <div className="tracking-page" style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container-narrow">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tagline">Real-Time Dispatch Tracking</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
            Track Your Ayurvedic Order
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', maxWidth: '540px', margin: '0 auto 2rem auto' }}>
            Enter your Order ID (e.g. <strong>VEDA-2026-9842</strong>) or phone number to view live transit progress from our Kerala Botanical Center.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.5rem', maxWidth: '520px', margin: '0 auto' }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Enter Order ID or Mobile Number"
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{ fontSize: '0.95rem', padding: '0.85rem 1.25rem', textTransform: 'uppercase' }}
              required
            />
            <button type="submit" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
              <Search size={18} />
              <span>Track</span>
            </button>
          </form>
        </div>

        {searchedOrder && (
          <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
            
            {/* Order Header Summary */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-sage)' }}>
                  Order Number
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)' }}>
                  {searchedOrder.id}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Status</div>
                  <span className={`status-badge status-${searchedOrder.status.toLowerCase()}`}>
                    {searchedOrder.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Courier & Transit Info Strip */}
            <div className="grid-3" style={{ gap: '1.25rem', padding: '1.25rem', backgroundColor: '#FAF7F2', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '3rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 700, display: 'block' }}>Courier Partner</span>
                <strong style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>{searchedOrder.courierName}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 700, display: 'block' }}>AWB Tracking Number</span>
                <strong style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>{searchedOrder.trackingNumber}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 700, display: 'block' }}>Estimated Delivery</span>
                <strong style={{ fontSize: '0.95rem', color: 'var(--color-success)' }}>{searchedOrder.estimatedDelivery}</strong>
              </div>
            </div>

            {/* 5-Stage Visual Progress Timeline */}
            <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', fontSize: '1.3rem', marginBottom: '2rem' }}>
              Shipment Journey
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', paddingLeft: '2rem', marginBottom: '3rem' }}>
              
              {/* Vertical line connecting nodes */}
              <div style={{ position: 'absolute', top: '15px', bottom: '15px', left: '23px', width: '2px', backgroundColor: 'var(--color-border)' }} />

              {searchedOrder.trackingHistory?.map((step, idx) => (
                <div key={idx} style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  
                  {/* Circle Pin */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: '-2rem',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: step.done ? 'var(--color-primary)' : '#FFF',
                      border: `2px solid ${step.done ? 'var(--color-primary)' : 'var(--color-border)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2
                    }}
                  >
                    {step.done && <CheckCircle2 size={14} color="#FFF" />}
                  </div>

                  <div>
                    <div style={{ fontWeight: 700, color: step.done ? 'var(--color-primary)' : 'var(--color-text-muted)', fontSize: '1rem' }}>
                      {step.status}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '2px' }}>
                      {step.date} • Location: {step.location}
                    </div>
                  </div>

                </div>
              ))}

            </div>

            {/* Delivery Destination Address */}
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 700 }}>
                  Destination Address:
                </span>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', marginTop: '2px' }}>
                  {searchedOrder.shippingAddress?.fullName}, {searchedOrder.shippingAddress?.addressLine}, {searchedOrder.shippingAddress?.city} ({searchedOrder.shippingAddress?.pincode})
                </div>
              </div>

              <button className="btn btn-secondary btn-sm" onClick={() => navigateTo('shop')}>
                <span>Continue Shopping</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
