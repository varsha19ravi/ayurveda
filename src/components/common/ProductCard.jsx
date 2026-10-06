import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Check } from 'lucide-react';
import { StarRating } from './StarRating';
import { useApp } from '../../context/AppContext';

export const ProductCard = ({ product }) => {
  const { 
    navigateTo, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setQuickViewProduct 
  } = useApp();

  const [isAdding, setIsAdding] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1, product.volume, true);
    setTimeout(() => {
      setIsAdding(false);
    }, 900);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div 
      className="product-card"
      onClick={() => navigateTo('product', { slug: product.slug })}
    >
      {/* 1. Image Container */}
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          loading="lazy"
        />

        {/* Badge Tag */}
        {product.badge && (
          <span className={`product-badge-tag ${product.stock <= 5 ? 'badge-lowstock' : ''}`}>
            {product.stock <= 5 ? `Only ${product.stock} Left` : product.badge}
          </span>
        )}

        {/* Discount Tag */}
        {product.discount > 0 && (
          <span className="product-discount-tag">
            {product.discount}% OFF
          </span>
        )}

        {/* Wishlist Button */}
        <button 
          className={`product-wishlist-btn ${inWishlist ? 'active' : ''}`}
          onClick={handleToggleWishlist}
          title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          aria-label="Wishlist"
        >
          <Heart size={18} fill={inWishlist ? '#C53030' : 'none'} color={inWishlist ? '#C53030' : 'currentColor'} />
        </button>

        {/* Quick View Button Hover Overlay */}
        <div className="product-quick-view-overlay">
          <button 
            className="btn btn-gold btn-sm"
            onClick={handleQuickView}
            style={{ width: '90%', fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
          >
            <Eye size={15} />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* 2. Product Info */}
      <div className="product-info">
        <div className="product-category-label">
          {product.categoryName}
        </div>

        <h3 className="product-title" title={product.name}>
          {product.name}
        </h3>

        {/* Star Rating */}
        <div className="product-rating-row">
          <StarRating rating={product.rating} reviewsCount={product.reviewsCount} />
        </div>

        {/* Price Row */}
        <div className="product-price-row">
          <span className="price-current">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <span className="price-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>

        {/* Action Button */}
        <div className="product-action-row">
          <button 
            className="btn btn-primary btn-block"
            onClick={handleAddToCart}
            disabled={product.stock <= 0 || isAdding}
            style={{ padding: '0.65rem 1rem', fontSize: '0.85rem' }}
          >
            {isAdding ? (
              <>
                <Check size={16} /> Added
              </>
            ) : product.stock <= 0 ? (
              'Out of Stock'
            ) : (
              <>
                <ShoppingBag size={16} /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
