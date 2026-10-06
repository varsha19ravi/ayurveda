import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Trash2, 
  Heart, 
  ArrowRight, 
  Tag, 
  ShieldCheck, 
  Truck, 
  ArrowLeft,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CartPage = () => {
  const { 
    cartItemsDetailed, 
    cartSubtotal, 
    cartOriginalTotal,
    cartDiscount, 
    cartShipping, 
    cartTaxes, 
    cartTotal, 
    updateCartQuantity, 
    removeFromCart, 
    toggleWishlist,
    appliedCoupon, 
    applyCoupon, 
    removeCoupon, 
    freeShippingThreshold,
    navigateTo 
  } = useApp();

  const [couponCode, setCouponCode] = useState('');

  const amountLeftForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const progressPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim()) {
      applyCoupon(couponCode);
      setCouponCode('');
    }
  };

  return (
    <div className="cart-page" style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="section-tagline">Review Your Ritual</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-primary)' }}>
            Shopping Cart
          </h1>
        </div>

        {cartItemsDetailed.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 2rem', backgroundColor: '#FFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#FAF7F2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <ShoppingBag size={36} color="var(--color-sage)" />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              Your cart is waiting for something natural.
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem auto' }}>
              Discover classical Ayurvedic preparations for healthy skin, dense hair, and daily restorative vitality.
            </p>
            <button className="btn btn-primary btn-lg" onClick={() => navigateTo('shop')}>
              <span>Explore All Remedies</span>
              <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <div className="grid-2" style={{ gridTemplateColumns: '1.4fr 0.8fr', gap: '3rem', alignItems: 'start' }}>
            
            {/* Left: Cart Items List */}
            <div>
              
              {/* Free shipping banner */}
              <div className="shipping-meter-wrap" style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem' }}>
                  <span>
                    {amountLeftForFreeShipping === 0 ? (
                      <strong style={{ color: 'var(--color-success)' }}>✨ You have qualified for Free Express Shipping!</strong>
                    ) : (
                      <>Add <strong>₹{amountLeftForFreeShipping}</strong> more to get Free Express Shipping</>
                    )}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>₹{cartSubtotal} / ₹{freeShippingThreshold}</span>
                </div>
                <div className="shipping-progress-bar">
                  <div className="shipping-progress-fill" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>

              {/* Items Card */}
              <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                {cartItemsDetailed.map((item, idx) => (
                  <div 
                    key={item.productId}
                    style={{
                      display: 'flex',
                      gap: '1.25rem',
                      padding: '1.5rem',
                      borderBottom: idx < cartItemsDetailed.length - 1 ? '1px solid var(--color-border-light)' : 'none',
                      alignItems: 'center'
                    }}
                  >
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      style={{ width: '88px', height: '88px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', backgroundColor: '#F8F5EE' }}
                    />

                    <div style={{ flex: 1 }}>
                      <div 
                        style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-primary)', cursor: 'pointer', marginBottom: '3px' }}
                        onClick={() => navigateTo('product', { slug: item.product.slug })}
                      >
                        {item.product.name}
                      </div>

                      <div style={{ fontSize: '0.8rem', color: 'var(--color-sage)', marginBottom: '0.6rem' }}>
                        {item.volume || item.product.volume} • ₹{item.product.price} each
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        {/* Qty Selector */}
                        <div className="qty-selector">
                          <button className="qty-btn" onClick={() => updateCartQuantity(item.productId, -1)}>-</button>
                          <div className="qty-display">{item.quantity}</div>
                          <button className="qty-btn" onClick={() => updateCartQuantity(item.productId, 1)}>+</button>
                        </div>

                        <button 
                          style={{ background: 'transparent', color: 'var(--color-text-light)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                          onClick={() => {
                            toggleWishlist(item.productId);
                            removeFromCart(item.productId);
                          }}
                        >
                          <Heart size={14} /> Save for Later
                        </button>

                        <button 
                          style={{ background: 'transparent', color: 'var(--color-danger)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                          onClick={() => removeFromCart(item.productId)}
                        >
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                      {item.product.originalPrice && (
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', textDecoration: 'line-through' }}>
                          ₹{(item.product.originalPrice * item.quantity).toLocaleString('en-IN')}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping Link */}
              <div style={{ marginTop: '1.5rem' }}>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => navigateTo('shop')}
                >
                  <ArrowLeft size={16} />
                  <span>Continue Shopping</span>
                </button>
              </div>

            </div>

            {/* Right: Order Summary Box */}
            <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
              
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                Order Summary
              </h3>

              {/* Coupon Code Section */}
              <div style={{ marginBottom: '1.5rem' }}>
                {appliedCoupon ? (
                  <div style={{ backgroundColor: 'var(--color-gold-light)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                      <Tag size={16} />
                      <span>Code <strong>{appliedCoupon.code}</strong> applied</span>
                    </div>
                    <button 
                      style={{ background: 'transparent', color: 'var(--color-danger)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
                      onClick={removeCoupon}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem' }}>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Promo Code (VEDA15)" 
                      value={couponCode}
                      onChange={e => setCouponCode(e.target.value)}
                      style={{ padding: '0.65rem 0.85rem', fontSize: '0.875rem', textTransform: 'uppercase' }}
                    />
                    <button type="submit" className="btn btn-secondary btn-sm">
                      Apply
                    </button>
                  </form>
                )}
              </div>

              {/* Summary Line Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                  <span>Bag Subtotal</span>
                  <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>

                {cartDiscount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-success)', fontWeight: 600 }}>
                    <span>Coupon Savings</span>
                    <span>- ₹{cartDiscount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                  <span>Express Shipping</span>
                  <span>{cartShipping === 0 ? <strong style={{ color: 'var(--color-success)' }}>FREE</strong> : `₹${cartShipping}`}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                  <span>Taxes (5% GST)</span>
                  <span>₹{cartTaxes.toLocaleString('en-IN')}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-primary)', borderTop: '2px solid var(--color-border)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                  <span>Grand Total</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                className="btn btn-primary btn-lg btn-block"
                style={{ marginBottom: '1.25rem' }}
                onClick={() => navigateTo('checkout')}
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={18} />
              </button>

              {/* Security Indicators */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid var(--color-border-light)', paddingTop: '1.25rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="var(--color-gold-dark)" /> 256-Bit Bank-Grade Secure Payment
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Truck size={16} color="var(--color-sage)" /> Free Doorstep Returns & Exchanges
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
