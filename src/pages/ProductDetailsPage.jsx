import React, { useState } from 'react';
import { 
  Heart, 
  ShoppingBag, 
  Check, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Sparkles, 
  ChevronRight, 
  Star, 
  Feather, 
  Droplet, 
  Zap, 
  Leaf, 
  Plus, 
  CheckCircle2, 
  Award,
  ArrowRight,
  MessageSquarePlus
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { StarRating } from '../components/common/StarRating';
import { ProductCard } from '../components/common/ProductCard';

export const ProductDetailsPage = () => {
  const { 
    products, 
    pageParams, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    navigateTo, 
    addProductReview,
    showToast 
  } = useApp();

  // Find product by slug or default to first
  const product = products.find(p => p.slug === pageParams?.slug) || products[0];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('benefits');
  const [isAdding, setIsAdding] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // Review form state
  const [newRating, setNewRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const [reviewName, setReviewName] = useState('');

  const inWishlist = isInWishlist(product.id);
  const gallery = product.galleryImages && product.galleryImages.length > 0 ? product.galleryImages : [product.image];

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity, product.volume, true);
    setTimeout(() => {
      setIsAdding(false);
    }, 800);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, product.volume, false);
    navigateTo('checkout');
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewTitle.trim() || !reviewComment.trim()) {
      showToast('Please fill in your review title and thoughts.', 'error');
      return;
    }
    addProductReview(product.id, {
      userName: reviewName.trim() || 'Verified Buyer',
      rating: newRating,
      title: reviewTitle.trim(),
      comment: reviewComment.trim()
    });
    setReviewTitle('');
    setReviewComment('');
    setReviewName('');
    setIsReviewModalOpen(false);
  };

  // Frequently bought together bundle
  const bundleProducts = (product.frequentlyBoughtTogether || [])
    .map(id => products.find(p => p.id === id))
    .filter(Boolean);

  const bundleTotal = product.price + bundleProducts.reduce((sum, p) => sum + p.price, 0);
  const bundleSavings = Math.round(bundleTotal * 0.1);
  const bundleDiscountedTotal = bundleTotal - bundleSavings;

  const handleAddBundleToCart = () => {
    addToCart(product, 1, product.volume, false);
    bundleProducts.forEach(bp => addToCart(bp, 1, bp.volume, false));
    showToast(`Added Complete Ayurvedic Ritual Bundle to Cart!`, 'success');
    navigateTo('cart');
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="product-details-page" style={{ padding: '2rem 0 5rem 0' }}>
      <div className="container">
        
        {/* Breadcrumb Trail */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => navigateTo('home')}>Home</span>
          <ChevronRight size={14} />
          <span style={{ cursor: 'pointer' }} onClick={() => navigateTo('shop')}>Shop</span>
          <ChevronRight size={14} />
          <span style={{ cursor: 'pointer' }} onClick={() => navigateTo('shop', { category: product.category })}>
            {product.categoryName}
          </span>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{product.name}</span>
        </nav>

        {/* Product Details Main Grid */}
        <div className="product-details-grid">
          
          {/* Left Column: Image Gallery */}
          <div className="product-gallery-wrap">
            <div className="main-product-image-box">
              <img 
                src={gallery[selectedImageIndex] || product.image} 
                alt={product.name}
                className="main-product-image"
              />
              {product.discount > 0 && (
                <span className="product-discount-tag" style={{ top: '16px', left: '16px', right: 'auto', fontSize: '0.85rem' }}>
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Thumbnail Strip */}
            {gallery.length > 1 && (
              <div className="thumbnail-strip">
                {gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    className={`thumbnail-btn ${selectedImageIndex === idx ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img src={imgUrl} alt={`${product.name} thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Actions & Specs */}
          <div className="product-details-content">
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-sage)', letterSpacing: '0.1em' }}>
                {product.categoryName} • {product.sku}
              </span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: product.stock <= 5 ? 'var(--color-warning)' : 'var(--color-success)', background: product.stock <= 5 ? '#FEF7E0' : '#EAF6EE', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
                {product.stock <= 5 ? `Only ${product.stock} units remaining` : '✓ In Stock & Freshly Prepared'}
              </span>
            </div>

            {product.sanskritName && (
              <div className="product-sanskrit-tag">
                {product.sanskritName}
              </div>
            )}

            <h1 className="product-big-title">
              {product.name}
            </h1>

            <div style={{ fontSize: '1rem', color: 'var(--color-gold-dark)', fontWeight: 500, marginBottom: '0.85rem' }}>
              {product.subtitle}
            </div>

            {/* Rating & Reviews */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <StarRating rating={product.rating} showNumber reviewsCount={product.reviewsCount} size={18} />
              <span style={{ color: 'var(--color-text-light)' }}>•</span>
              <span 
                style={{ fontSize: '0.85rem', color: 'var(--color-primary)', textDecoration: 'underline', cursor: 'pointer', fontWeight: 600 }}
                onClick={() => {
                  setActiveTab('reviews');
                  document.getElementById('product-tabs-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Read {product.reviews?.length || product.reviewsCount} verified reviews
              </span>
            </div>

            {/* Price Box */}
            <div className="product-price-box">
              <span className="price-box-current">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="price-box-original">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              {product.discount > 0 && (
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-gold-dark)', background: 'var(--color-gold-light)', padding: '3px 8px', borderRadius: 'var(--radius-sm)' }}>
                  Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')} ({product.discount}% OFF)
                </span>
              )}
            </div>

            <p style={{ fontSize: '0.975rem', color: 'var(--color-text-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              {product.shortDescription}
            </p>

            {/* Volume Size Pill */}
            {product.volume && (
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-text-main)', display: 'block', marginBottom: '0.4rem' }}>
                  Select Volume / Size:
                </span>
                <span style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '2px solid var(--color-primary)', background: '#FAF7F2', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                  {product.volume}
                </span>
              </div>
            )}

            {/* Quantity Selector & Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <div className="qty-selector">
                <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <div className="qty-display">{quantity}</div>
                <button className="qty-btn" onClick={() => setQuantity(Math.min(product.stock || 10, quantity + 1))}>+</button>
              </div>

              <button 
                className="btn btn-primary"
                style={{ flex: 1, minWidth: '180px' }}
                onClick={handleAddToCart}
                disabled={product.stock <= 0 || isAdding}
              >
                {isAdding ? (
                  <>
                    <Check size={18} /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} /> Add to Cart
                  </>
                )}
              </button>

              <button 
                className={`icon-btn ${inWishlist ? 'active' : ''}`}
                style={{ width: '48px', height: '48px', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}
                onClick={() => toggleWishlist(product.id)}
                title="Save to Wishlist"
              >
                <Heart size={22} fill={inWishlist ? '#C53030' : 'none'} color={inWishlist ? '#C53030' : 'currentColor'} />
              </button>
            </div>

            {/* Direct Buy Now Button */}
            <button 
              className="btn btn-gold btn-block"
              style={{ marginBottom: '1.75rem' }}
              onClick={handleBuyNow}
              disabled={product.stock <= 0}
            >
              <Zap size={18} />
              <span>Buy Now with 1-Click Checkout</span>
            </button>

            {/* Trust Badges Minimal */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', padding: '1rem', background: '#F8F5EE', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--color-text-main)', fontWeight: 600 }}>
                <Truck size={16} color="var(--color-sage)" /> Free Express Delivery
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--color-text-main)', fontWeight: 600 }}>
                <ShieldCheck size={16} color="var(--color-gold)" /> AYUSH Certified
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--color-text-main)', fontWeight: 600 }}>
                <RotateCcw size={16} color="var(--color-sage)" /> 15-Day Free Returns
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Tabs / Expandable Information Section */}
        <section id="product-tabs-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid var(--color-border)' }}>
          
          <div className="tabs-nav">
            <button className={`tab-btn ${activeTab === 'benefits' ? 'active' : ''}`} onClick={() => setActiveTab('benefits')}>
              Benefits & Efficacy
            </button>
            <button className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`} onClick={() => setActiveTab('ingredients')}>
              Key Sacred Herbs
            </button>
            <button className={`tab-btn ${activeTab === 'howToUse' ? 'active' : ''}`} onClick={() => setActiveTab('howToUse')}>
              How to Use & Rituals
            </button>
            <button className={`tab-btn ${activeTab === 'ayurveda' ? 'active' : ''}`} onClick={() => setActiveTab('ayurveda')}>
              Ayurvedic Dosha Profile
            </button>
            <button className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>
              Customer Reviews ({product.reviews?.length || product.reviewsCount})
            </button>
          </div>

          <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '2.5rem', marginBottom: '4rem' }}>
            
            {/* Tab 1: Benefits */}
            {activeTab === 'benefits' && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '1.25rem' }}>
                  Holistic Benefits & Proven Results
                </h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {product.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  {product.benefits?.map((benefit, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <CheckCircle2 size={18} color="var(--color-sage)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.95rem', color: 'var(--color-text-main)' }}>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#FAF7F2', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    Who Is It Recommended For?
                  </strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    {product.whoIsItFor}
                  </span>
                </div>
              </div>
            )}

            {/* Tab 2: Ingredients */}
            {activeTab === 'ingredients' && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '1.25rem' }}>
                  Active Botanical Bio-Actives
                </h3>

                <div className="grid-2" style={{ marginBottom: '2rem' }}>
                  {product.keyIngredients?.map((herb, i) => (
                    <div key={i} style={{ backgroundColor: '#FAF7F2', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
                        <Leaf size={16} color="var(--color-sage)" />
                        <strong style={{ fontSize: '1rem', color: 'var(--color-primary)' }}>{herb.name}</strong>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{herb.benefit}</p>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '1.25rem' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--color-text-main)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                    Complete INCI Ingredients Declaration:
                  </strong>
                  <p style={{ fontSize: '0.825rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                    {product.ingredientsList}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: How to Use */}
            {activeTab === 'howToUse' && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                  The Daily Dinacharya Ritual
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {product.howToUse?.map((stepItem, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--color-gold-light)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                        {stepItem.step}
                      </div>
                      <div>
                        <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                          {stepItem.title}
                        </h4>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem' }}>
                          {stepItem.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Ayurvedic Profile */}
            {activeTab === 'ayurveda' && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '1.25rem' }}>
                  Ayurvedic Energetics & Doshic Action
                </h3>

                {product.ayurvedicProperties && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                    <div style={{ background: '#FAF7F2', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 700, display: 'block' }}>Dosha Balance</span>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>{product.ayurvedicProperties.dosha}</strong>
                    </div>
                    {product.ayurvedicProperties.rasa && (
                      <div style={{ background: '#FAF7F2', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 700, display: 'block' }}>Rasa (Taste)</span>
                        <strong style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>{product.ayurvedicProperties.rasa}</strong>
                      </div>
                    )}
                    {product.ayurvedicProperties.guna && (
                      <div style={{ background: '#FAF7F2', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 700, display: 'block' }}>Guna (Qualities)</span>
                        <strong style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>{product.ayurvedicProperties.guna}</strong>
                      </div>
                    )}
                    {product.ayurvedicProperties.virya && (
                      <div style={{ background: '#FAF7F2', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 700, display: 'block' }}>Virya (Potency)</span>
                        <strong style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>{product.ayurvedicProperties.virya}</strong>
                      </div>
                    )}
                  </div>
                )}

                <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '1.5rem' }}>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Certifications & Authenticity Marks:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {product.certifications?.map((cert, i) => (
                      <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--color-sage-light)', color: 'var(--color-primary)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.825rem', fontWeight: 600 }}>
                        <Award size={15} color="var(--color-gold-dark)" /> {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 5: Customer Reviews */}
            {activeTab === 'reviews' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', fontSize: '1.5rem' }}>
                      Customer Reviews & Feedback
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                      <StarRating rating={product.rating} size={20} showNumber />
                      <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                        Based on {product.reviews?.length || product.reviewsCount} verified experiences
                      </span>
                    </div>
                  </div>

                  <button 
                    className="btn btn-gold"
                    onClick={() => setIsReviewModalOpen(true)}
                  >
                    <MessageSquarePlus size={16} />
                    <span>Write an Ayurvedic Review</span>
                  </button>
                </div>

                {/* Reviews List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((rev) => (
                      <div 
                        key={rev.id}
                        style={{
                          backgroundColor: '#FAF7F2',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '1.5rem'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <StarRating rating={rev.rating} size={15} />
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>{rev.date}</span>
                        </div>
                        <h4 style={{ fontSize: '1rem', color: 'var(--color-primary)', marginBottom: '0.4rem' }}>
                          {rev.title}
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                          {rev.comment}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.775rem', color: 'var(--color-text-light)' }}>
                          <span style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                            {rev.userName} {rev.verified && <span style={{ color: 'var(--color-success)' }}>✓ Verified Buyer</span>}
                          </span>
                          <span>{rev.helpful || 0} people found this helpful</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                      No reviews submitted yet for this newly prepared batch. Be the first to review!
                    </p>
                  )}
                </div>

              </div>
            )}

          </div>
        </section>

        {/* Frequently Bought Together Bundle */}
        {bundleProducts.length > 0 && (
          <section style={{ backgroundColor: '#FAF7F2', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.4rem' }}>
              Synergistic Ritual Combination
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
              Frequently Bought Together
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={product.image} alt={product.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>{product.name}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-gold-dark)' }}>₹{product.price}</div>
                  </div>
                </div>

                {bundleProducts.map((bp, i) => (
                  <React.Fragment key={bp.id}>
                    <Plus size={18} color="var(--color-gold-dark)" />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <img src={bp.image} alt={bp.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>{bp.name}</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-gold-dark)' }}>₹{bp.price}</div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Bundle Action */}
              <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>
                  Bundle Price (Save 10% on Combo)
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '8px', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    ₹{bundleDiscountedTotal.toLocaleString('en-IN')}
                  </span>
                  <span style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', textDecoration: 'line-through' }}>
                    ₹{bundleTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <button 
                  className="btn btn-primary btn-block"
                  onClick={handleAddBundleToCart}
                >
                  <ShoppingBag size={16} />
                  <span>Add All {bundleProducts.length + 1} to Cart</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* You May Also Like Section */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="section-header">
              <span className="section-tagline">Complementary Remedies</span>
              <h2 className="section-title">You May Also Like</h2>
            </div>
            <div className="grid-3">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* Write Review Modal */}
        {isReviewModalOpen && (
          <div className="modal-backdrop" onClick={() => setIsReviewModalOpen(false)}>
            <div className="modal-content-box" style={{ maxWidth: '540px', padding: '2rem' }} onClick={e => e.stopPropagation()}>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Share Your Experience with {product.name}
              </h3>
              <form onSubmit={handleReviewSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Rating</label>
                  <select 
                    className="form-select"
                    value={newRating}
                    onChange={e => setNewRating(Number(e.target.value))}
                  >
                    <option value={5}>★★★★★ 5 Stars (Extraordinary Experience)</option>
                    <option value={4}>★★★★☆ 4 Stars (Very Good)</option>
                    <option value={3}>★★★☆☆ 3 Stars (Average)</option>
                    <option value={2}>★★☆☆☆ 2 Stars (Needs Improvement)</option>
                    <option value={1}>★☆☆☆☆ 1 Star (Not Satisfied)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Ananya S."
                    value={reviewName}
                    onChange={e => setReviewName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Review Headline</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Glowing results within 10 days!"
                    value={reviewTitle}
                    onChange={e => setReviewTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Detailed Review</label>
                  <textarea 
                    className="form-textarea" 
                    rows={4}
                    placeholder="Tell us about the aroma, texture, how your skin/hair feels..."
                    value={reviewComment}
                    onChange={e => setReviewComment(e.target.value)}
                    required
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setIsReviewModalOpen(false)} style={{ flex: 1 }}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
