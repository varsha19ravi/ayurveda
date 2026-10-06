import React, { useState } from 'react';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown, 
  ShieldCheck, 
  LogOut, 
  Package, 
  MapPin, 
  SlidersHorizontal,
  Sparkle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Header = () => {
  const { 
    activePage, 
    navigateTo, 
    cartCount, 
    wishlist, 
    currentUser, 
    logoutUser,
    setIsSearchOpen, 
    setIsCartDrawerOpen,
    setIsDoshaQuizOpen,
    freeShippingThreshold,
    cartSubtotal
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const amountLeftForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  return (
    <header>
      {/* 1. Announcement Bar */}
      <div className="announcement-bar">
        <span>🌿</span>
        <span>
          {amountLeftForFreeShipping === 0 ? (
            <strong>✨ Congratulations! You unlocked Free Express Shipping</strong>
          ) : (
            <>
              Free shipping on orders above ₹{freeShippingThreshold} | Add <strong>₹{amountLeftForFreeShipping}</strong> more
            </>
          )}
        </span>
        <span style={{ opacity: 0.6 }}>•</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          Use Code <strong style={{ textDecoration: 'underline', cursor: 'pointer' }}>VEDA15</strong> for 15% Off
        </span>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="header-sticky">
        <div className="container">
          <div className="nav-inner">
            
            {/* Left: Mobile Menu Trigger + Brand Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button 
                className="icon-btn" 
                style={{ display: 'none' }}
                id="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Mobile Menu"
              >
                <Menu size={22} />
              </button>

              <div 
                className="brand-logo-group"
                onClick={() => navigateTo('home')}
              >
                <div className="brand-emblem">
                  <Sparkles size={20} />
                </div>
                <div className="brand-text-wrap">
                  <span className="brand-title">VEDAPURE</span>
                  <span className="brand-subtitle">Ayurveda • Modern Wellness</span>
                </div>
              </div>
            </div>

            {/* Center: Navigation Links */}
            <nav className="nav-links-center">
              <span 
                className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => navigateTo('home')}
              >
                Home
              </span>

              <span 
                className={`nav-link ${activePage === 'shop' ? 'active' : ''}`}
                onClick={() => navigateTo('shop')}
              >
                Shop All
              </span>

              <span 
                className={`nav-link ${activePage === 'categories' ? 'active' : ''}`}
                onClick={() => navigateTo('categories')}
              >
                Categories
              </span>

              <span 
                className={`nav-link ${activePage === 'wellness' ? 'active' : ''}`}
                onClick={() => navigateTo('wellness')}
              >
                Wellness Guide
              </span>

              <span 
                className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
                onClick={() => navigateTo('about')}
              >
                Our Story
              </span>

              {/* Interactive Dosha Quiz Trigger */}
              <button 
                onClick={() => setIsDoshaQuizOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'linear-gradient(135deg, #FAF4EB 0%, #F5E8D3 100%)',
                  border: '1px solid var(--color-gold)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  color: 'var(--color-gold-dark)',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                <Sparkle size={14} color="var(--color-gold-dark)" />
                <span>Dosha Quiz</span>
                <span className="nav-badge-pill">Free</span>
              </button>
            </nav>

            {/* Right: Action Icons */}
            <div className="nav-actions-right">
              
              {/* Search Trigger */}
              <button 
                className="icon-btn"
                onClick={() => setIsSearchOpen(true)}
                title="Search Products & Remedies"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Wishlist Icon */}
              <button 
                className="icon-btn"
                onClick={() => navigateTo('wishlist')}
                title="My Wishlist"
                aria-label="Wishlist"
              >
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="badge-count">{wishlist.length}</span>
                )}
              </button>

              {/* User Account / Dropdown */}
              <div style={{ position: 'relative' }}>
                <button 
                  className="icon-btn"
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  title={currentUser ? `Account: ${currentUser.name}` : 'Login / Register'}
                  aria-label="User Account"
                >
                  <User size={20} />
                </button>

                {/* User Dropdown Menu */}
                {isUserDropdownOpen && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: '110%',
                      right: 0,
                      width: '230px',
                      backgroundColor: '#FFF',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: 'var(--shadow-lg)',
                      border: '1px solid var(--color-border)',
                      padding: '0.75rem',
                      zIndex: 90,
                      animation: 'fadeIn 0.2s ease'
                    }}
                  >
                    {currentUser ? (
                      <>
                        <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--color-border-light)', marginBottom: '0.5rem' }}>
                          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                            {currentUser.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                            {currentUser.email}
                          </div>
                          {currentUser.role === 'admin' && (
                            <span style={{ display: 'inline-block', fontSize: '0.65rem', background: '#153323', color: '#FFF', padding: '2px 6px', borderRadius: '4px', marginTop: '4px' }}>
                              Admin Master
                            </span>
                          )}
                        </div>

                        <div 
                          className="nav-link" 
                          style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}
                          onClick={() => { navigateTo('account'); setIsUserDropdownOpen(false); }}
                        >
                          <Package size={16} /> My Account & Orders
                        </div>

                        <div 
                          className="nav-link" 
                          style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}
                          onClick={() => { navigateTo('tracking'); setIsUserDropdownOpen(false); }}
                        >
                          <MapPin size={16} /> Track Order Status
                        </div>

                        {currentUser.role === 'admin' && (
                          <div 
                            className="nav-link" 
                            style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem', color: 'var(--color-gold-dark)', fontWeight: 700 }}
                            onClick={() => { navigateTo('admin'); setIsUserDropdownOpen(false); }}
                          >
                            <SlidersHorizontal size={16} /> Admin Portal
                          </div>
                        )}

                        <div 
                          className="nav-link" 
                          style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem', color: 'var(--color-danger)', borderTop: '1px solid var(--color-border-light)', marginTop: '0.4rem' }}
                          onClick={() => { logoutUser(); setIsUserDropdownOpen(false); }}
                        >
                          <LogOut size={16} /> Sign Out
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ padding: '0.5rem 0.75rem', marginBottom: '0.5rem' }}>
                          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
                            Welcome to VedaPure
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                            Sign in to access orders and rewards
                          </div>
                        </div>

                        <button 
                          className="btn btn-primary btn-sm btn-block"
                          style={{ marginBottom: '0.5rem' }}
                          onClick={() => { navigateTo('auth'); setIsUserDropdownOpen(false); }}
                        >
                          Sign In / Register
                        </button>

                        <div 
                          className="nav-link" 
                          style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}
                          onClick={() => { navigateTo('tracking'); setIsUserDropdownOpen(false); }}
                        >
                          <MapPin size={16} /> Track Order
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Cart Drawer Trigger */}
              <button 
                className="icon-btn"
                style={{ backgroundColor: 'var(--color-primary)', color: '#FFF' }}
                onClick={() => setIsCartDrawerOpen(true)}
                title="Shopping Cart"
                aria-label="Shopping Cart"
              >
                <ShoppingBag size={19} />
                {cartCount > 0 && (
                  <span className="badge-count" style={{ backgroundColor: 'var(--color-gold)', color: '#153323' }}>
                    {cartCount}
                  </span>
                )}
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* 3. Mobile Off-Canvas Menu Drawer */}
      {isMobileMenuOpen && (
        <div 
          className="modal-backdrop" 
          style={{ justifyContent: 'flex-start', padding: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            style={{
              width: '82%',
              maxWidth: '320px',
              height: '100%',
              backgroundColor: 'var(--color-bg)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-lg)'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div className="brand-logo-group" onClick={() => { navigateTo('home'); setIsMobileMenuOpen(false); }}>
                <span className="brand-title">VEDAPURE</span>
              </div>
              <button className="icon-btn" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div className="nav-link" onClick={() => { navigateTo('home'); setIsMobileMenuOpen(false); }}>Home</div>
              <div className="nav-link" onClick={() => { navigateTo('shop'); setIsMobileMenuOpen(false); }}>Shop All Products</div>
              <div className="nav-link" onClick={() => { navigateTo('categories'); setIsMobileMenuOpen(false); }}>Categories</div>
              <div className="nav-link" onClick={() => { navigateTo('wellness'); setIsMobileMenuOpen(false); }}>Ayurveda & Wellness Guide</div>
              <div className="nav-link" onClick={() => { navigateTo('about'); setIsMobileMenuOpen(false); }}>Our Story & Heritage</div>
              <div className="nav-link" onClick={() => { navigateTo('contact'); setIsMobileMenuOpen(false); }}>Contact & Vaidya Consult</div>
              <div className="nav-link" onClick={() => { navigateTo('tracking'); setIsMobileMenuOpen(false); }}>Track Order</div>

              <button 
                className="btn btn-gold btn-block"
                style={{ marginTop: '1rem' }}
                onClick={() => { setIsDoshaQuizOpen(true); setIsMobileMenuOpen(false); }}
              >
                <Sparkles size={16} /> Take Dosha Quiz
              </button>

              <button 
                className="btn btn-secondary btn-block"
                style={{ marginTop: '0.5rem' }}
                onClick={() => { navigateTo(currentUser ? 'account' : 'auth'); setIsMobileMenuOpen(false); }}
              >
                <User size={16} /> {currentUser ? 'My Account' : 'Sign In / Register'}
              </button>

              {currentUser?.role === 'admin' && (
                <button 
                  className="btn btn-primary btn-block"
                  style={{ marginTop: '0.5rem' }}
                  onClick={() => { navigateTo('admin'); setIsMobileMenuOpen(false); }}
                >
                  <SlidersHorizontal size={16} /> Admin Portal
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Media Query rule helper for mobile hamburger button */}
      <style>{`
        @media (max-width: 900px) {
          #mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
