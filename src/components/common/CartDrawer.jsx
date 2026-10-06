import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Heart, 
  ArrowRight, 
  Tag, 
  Sparkles, 
  ShieldCheck, 
  Check 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CartDrawer = () => {
  const { 
    isCartDrawerOpen, 
    setIsCartDrawerOpen, 
    cartItemsDetailed, 
    cartSubtotal, 
    cartOriginalTotal,
    cartDiscount, 
    cartShipping, 
    cartTaxes, 
    cartTotal, 
    cartCount, 
    updateCartQuantity, 
    removeFromCart, 
    toggleWishlist,
    appliedCoupon, 
    applyCoupon, 
    removeCoupon, 
    freeShippingThreshold,
    navigateTo 
  } = useApp();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartDrawerOpen) return null;

  const amountLeftForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const progressPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyCoupon(couponInput);
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartDrawerOpen(false);
    navigateTo('checkout');
  };

  return (
    <div className="cart-drawer-backdrop" onClick={() => setIsCartDrawerOpen(false)}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} color="var(--color-primary)" />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-primary)' }}>
              Your Wellness Bag ({cartCount})
            </h3>
          </div>
          <button className="icon-btn" onClick={() => setIsCartDrawerOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div style={{ padding: '0.85rem 1.5rem', backgroundColor: '#F8F5EE', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-main)', fontWeight: 500, display: 'flex', justifyContent: 'space-between' }}>
            <span>
              {amountLeftForFreeShipping === 0 ? (
                <strong style={{ color: 'var(--color-success)' }}>✨ Free Express Shipping Unlocked!</strong>
              ) : (
                <>Add <strong>₹{amountLeftForFreeShipping}</strong> more for Free Shipping</>
              )}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>₹{cartSubtotal} / ₹{freeShippingThreshold}</span>
          </div>
          <div className="shipping-progress-bar">
            <div className="shipping-progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem 1.5rem' }}>
          {cartItemsDetailed.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#F8F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <ShoppingBag size={28} color="var(--color-sage)" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '0.4rem' }}>
                Your cart is waiting for something natural.
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Explore classical Ayurvedic remedies for radiant skin, thick hair, and tridoshic vitality.
              </p>
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => { setIsCartDrawerOpen(false); navigateTo('shop'); }}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {cartItemsDetailed.map((item) => (
                <div 
                  key={item.productId}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid var(--color-border-light)'
                  }}
                >
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    style={{ width: '74px', height: '74px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', backgroundColor: '#F8F5EE' }}
                  />

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div 
                        style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-main)', cursor: 'pointer', lineHeight: '1.3' }}
                        onClick={() => {
                          setIsCartDrawerOpen(false);
                          navigateTo('product', { slug: item.product.slug });
                        }}
                      >
                        {item.product.name}
                      </div>
                      <button 
                        style={{ background: 'transparent', color: 'var(--color-text-light)', cursor: 'pointer', padding: '2px' }}
                        onClick={() => removeFromCart(item.productId)}
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <span style={{ fontSize: '0.75rem', color: 'var(--color-sage)', marginTop: '2px' }}>
                      {item.volume || item.product.volume}
                    </span>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.5rem' }}>
                      {/* Qty Selector */}
                      <div className="qty-selector" style={{ transform: 'scale(0.85)', transformOrigin: 'left center' }}>
                        <button className="qty-btn" onClick={() => updateCartQuantity(item.productId, -1)}>-</button>
                        <div className="qty-display">{item.quantity}</div>
                        <button className="qty-btn" onClick={() => updateCartQuantity(item.productId, 1)}>+</button>
                      </div>

                      {/* Item Total */}
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItemsDetailed.length > 0 && (
          <div style={{ padding: '1.25rem 1.5rem', backgroundColor: '#FAF7F2', borderTop: '1px solid var(--color-border)' }}>
            
            {/* Coupon Code Input */}
            <div style={{ marginBottom: '1rem' }}>
              {appliedCoupon ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'var(--color-gold-light)', padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gold)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.825rem', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                    <Tag size={15} />
                    <span>Coupon: <strong>{appliedCoupon.code}</strong> applied (-₹{cartDiscount})</span>
                  </div>
                  <button 
                    style={{ background: 'transparent', color: 'var(--color-danger)', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                    onClick={removeCoupon}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.4rem' }}>
                  <input
                    type="text"
                    placeholder="Enter Coupon Code (e.g. VEDA15)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.55rem 0.85rem',
                      fontSize: '0.85rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      textTransform: 'uppercase'
                    }}
                  />
                  <button type="submit" className="btn btn-secondary btn-sm">
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Price Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.875rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                <span>Subtotal</span>
                <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>

              {cartDiscount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-success)', fontWeight: 600 }}>
                  <span>Coupon Discount</span>
                  <span>- ₹{cartDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                <span>Estimated Shipping</span>
                <span>{cartShipping === 0 ? <strong style={{ color: 'var(--color-success)' }}>FREE</strong> : `₹${cartShipping}`}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                <span>GST (5% Included)</span>
                <span>₹{cartTaxes.toLocaleString('en-IN')}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)', borderTop: '1px solid var(--color-border)', paddingTop: '0.6rem', marginTop: '0.2rem' }}>
                <span>Estimated Total</span>
                <span>₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <button 
                className="btn btn-primary btn-block"
                onClick={handleProceedToCheckout}
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </button>

              <button 
                className="btn btn-secondary btn-sm btn-block"
                onClick={() => {
                  setIsCartDrawerOpen(false);
                  navigateTo('cart');
                }}
              >
                View Full Cart Page
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
