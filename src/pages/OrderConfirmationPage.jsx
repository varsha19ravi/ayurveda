import React from 'react';
import { 
  CheckCircle2, 
  Package, 
  MapPin, 
  Truck, 
  ArrowRight, 
  Printer, 
  Sparkles 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const OrderConfirmationPage = () => {
  const { pageParams, orders, navigateTo } = useApp();

  const orderId = pageParams?.orderId || orders[0]?.id;
  const order = orders.find(o => o.id === orderId) || orders[0];

  if (!order) {
    return (
      <div className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2>Order Not Found</h2>
        <button className="btn btn-primary" onClick={() => navigateTo('home')}>Return Home</button>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="confirmation-page" style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container-narrow">
        
        {/* Celebration Box */}
        <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '3rem 2rem', textAlign: 'center', boxShadow: 'var(--shadow-md)', marginBottom: '2.5rem' }}>
          
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'var(--color-sage-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
            <CheckCircle2 size={40} color="var(--color-primary)" />
          </div>

          <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)', letterSpacing: '0.14em', display: 'block', marginBottom: '0.4rem' }}>
            Auspicious Beginning
          </span>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
            Thank You for Your Order!
          </h1>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
            Your order <strong>#{order.id}</strong> has been received by our Ayurvedic Apothecary in Kerala. Our herbalists will now formulate and pack your batch.
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FAF7F2', padding: '0.6rem 1.4rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '2rem' }}>
            <Truck size={18} color="var(--color-sage)" />
            <span>Estimated Delivery: <strong>{order.estimatedDelivery}</strong> via {order.courierName}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              className="btn btn-primary"
              onClick={() => navigateTo('tracking', { orderId: order.id })}
            >
              <Package size={18} />
              <span>Track Live Delivery Status</span>
            </button>

            <button 
              className="btn btn-secondary"
              onClick={handlePrint}
            >
              <Printer size={16} />
              <span>Print Tax Invoice</span>
            </button>
          </div>

        </div>

        {/* Invoice Summary Card */}
        <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Tax Invoice Reference</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                {order.id}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Order Date</div>
              <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>{order.date}</div>
            </div>
          </div>

          {/* Customer & Shipping Summary */}
          <div className="grid-2" style={{ gap: '2rem', marginBottom: '2rem', padding: '1.25rem', backgroundColor: '#FAF7F2', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <div>
              <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-gold-dark)', display: 'block', marginBottom: '4px' }}>
                Delivery Destination:
              </strong>
              <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{order.shippingAddress?.fullName}</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                {order.shippingAddress?.addressLine}, {order.shippingAddress?.city}, {order.shippingAddress?.state} - {order.shippingAddress?.pincode}
              </div>
              <div style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                Phone: {order.shippingAddress?.phone}
              </div>
            </div>

            <div>
              <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-gold-dark)', display: 'block', marginBottom: '4px' }}>
                Payment Summary:
              </strong>
              <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{order.paymentMethod}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-success)', fontWeight: 600 }}>Status: {order.paymentStatus}</div>
              <div style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                AWB Tracking: {order.trackingNumber}
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Formulations in this Order</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {order.items?.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-border-light)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={item.image} alt={item.name} style={{ width: '54px', height: '54px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.95rem' }}>{item.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Qty: {item.quantity} • {item.volume}</div>
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1rem' }}>
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Totals */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', maxWidth: '320px', marginLeft: 'auto', borderTop: '2px solid var(--color-border)', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
              <span>Subtotal</span>
              <span>₹{order.subtotal?.toLocaleString('en-IN')}</span>
            </div>
            {order.discount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-success)', fontWeight: 600 }}>
                <span>Discount ({order.couponCode})</span>
                <span>- ₹{order.discount?.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
              <span>Shipping</span>
              <span>{order.shipping === 0 ? 'FREE' : `₹${order.shipping}`}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
              <span>Taxes (GST)</span>
              <span>₹{order.taxes?.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', borderTop: '1px solid var(--color-border)', paddingTop: '0.6rem', marginTop: '0.3rem' }}>
              <span>Total Paid</span>
              <span>₹{order.total?.toLocaleString('en-IN')}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
