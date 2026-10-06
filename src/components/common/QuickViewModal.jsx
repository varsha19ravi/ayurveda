import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { StarRating } from './StarRating';
import { useApp } from '../../context/AppContext';

export const QuickViewModal = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    navigateTo 
  } = useApp();

  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!quickViewProduct) return null;

  const inWishlist = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    setIsAdded(true);
    addToCart(quickViewProduct, quantity, quickViewProduct.volume, true);
    setTimeout(() => {
      setIsAdded(false);
      setQuickViewProduct(null);
    }, 800);
  };

  const handleViewFullDetails = () => {
    setQuickViewProduct(null);
    navigateTo('product', { slug: quickViewProduct.slug });
  };

  return (
    <div className="modal-backdrop" onClick={() => setQuickViewProduct(null)}>
      <div 
        className="modal-content-box" 
        style={{ maxWidth: '780px', padding: '2rem' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn"
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          {/* Left: Product Image */}
          <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: '#F8F5EE', border: '1px solid var(--color-border)' }}>
            <img 
              src={quickViewProduct.image} 
              alt={quickViewProduct.name}
              style={{ width: '100%', height: '100%', maxHeight: '380px', objectFit: 'cover' }}
            />
            {quickViewProduct.discount > 0 && (
              <span className="product-discount-tag" style={{ top: '12px', left: '12px', right: 'auto' }}>
                {quickViewProduct.discount}% OFF
              </span>
            )}
          </div>

          {/* Right: Info */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-sage)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
              {quickViewProduct.categoryName}
            </span>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
              {quickViewProduct.name}
            </h2>

            {quickViewProduct.sanskritName && (
              <div style={{ fontSize: '0.9rem', color: 'var(--color-gold-dark)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
                {quickViewProduct.sanskritName}
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <StarRating rating={quickViewProduct.rating} showNumber reviewsCount={quickViewProduct.reviewsCount} />
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                ₹{quickViewProduct.price.toLocaleString('en-IN')}
              </span>
              {quickViewProduct.originalPrice && (
                <span style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', textDecoration: 'line-through' }}>
                  ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.55', marginBottom: '1.25rem' }}>
              {quickViewProduct.shortDescription}
            </p>

            {/* Quantity Selector & Action */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div className="qty-selector">
                <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <div className="qty-display">{quantity}</div>
                <button className="qty-btn" onClick={() => setQuantity(Math.min(quickViewProduct.stock || 10, quantity + 1))}>+</button>
              </div>

              <button 
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={handleAddToCart}
                disabled={quickViewProduct.stock <= 0}
              >
                {isAdded ? (
                  <>
                    <Check size={18} /> Added to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} /> Add to Cart
                  </>
                )}
              </button>

              <button 
                className={`icon-btn ${inWishlist ? 'active' : ''}`}
                style={{ width: '46px', height: '46px', border: '1.5px solid var(--color-border)' }}
                onClick={() => toggleWishlist(quickViewProduct.id)}
                title="Wishlist"
              >
                <Heart size={20} fill={inWishlist ? '#C53030' : 'none'} color={inWishlist ? '#C53030' : 'currentColor'} />
              </button>
            </div>

            {/* View Full Specs Link */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-gold-dark)',
                cursor: 'pointer',
                marginTop: 'auto'
              }}
              onClick={handleViewFullDetails}
            >
              <span>View full Ayurvedic properties, rituals & ingredients</span>
              <ArrowRight size={16} />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
