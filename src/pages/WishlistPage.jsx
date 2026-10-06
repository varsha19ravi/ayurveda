import React from 'react';
import { Heart, ShoppingBag, Trash2, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/common/ProductCard';

export const WishlistPage = () => {
  const { wishlist, products, moveWishlistToCart, toggleWishlist, navigateTo, addToCart, showToast } = useApp();

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  const handleMoveAllToCart = () => {
    wishlistProducts.forEach(p => {
      addToCart(p, 1, p.volume, false);
    });
    showToast('Moved all wishlist items to your Cart!', 'success');
    navigateTo('cart');
  };

  return (
    <div className="wishlist-page" style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="section-tagline">Saved Sanctuary</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-primary)' }}>
              My Sacred Wishlist ({wishlistProducts.length})
            </h1>
          </div>

          {wishlistProducts.length > 0 && (
            <button 
              className="btn btn-primary"
              onClick={handleMoveAllToCart}
            >
              <ShoppingBag size={18} />
              <span>Move All to Cart</span>
            </button>
          )}
        </div>

        {wishlistProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 2rem', backgroundColor: '#FFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-gold-light)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <Heart size={36} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              Save your favourites for later.
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem auto' }}>
              Your wishlist is currently empty. Tap the heart icon on any product to save it to your personalized wellness wish list.
            </p>
            <button className="btn btn-primary btn-lg" onClick={() => navigateTo('shop')}>
              <span>Explore All Remedies</span>
              <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <div className="grid-3" style={{ gap: '2rem' }}>
            {wishlistProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
