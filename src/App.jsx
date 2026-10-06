import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Toast } from './components/common/Toast';
import { SearchModal } from './components/common/SearchModal';
import { QuickViewModal } from './components/common/QuickViewModal';
import { DoshaQuizModal } from './components/common/DoshaQuizModal';
import { CartDrawer } from './components/common/CartDrawer';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { AboutPage } from './pages/AboutPage';
import { WellnessGuidePage } from './pages/WellnessGuidePage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { OrderTrackingPage } from './pages/OrderTrackingPage';
import { AuthPage } from './pages/AuthPage';
import { MyAccountPage } from './pages/MyAccountPage';
import { WishlistPage } from './pages/WishlistPage';
import { FAQPage } from './pages/FAQPage';
import { ShippingReturnsPage } from './pages/ShippingReturnsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

// Mobile Bottom Nav Icons
import { Home, Compass, Heart, ShoppingBag, User } from 'lucide-react';
import './styles/app.css';

const MainRouter = () => {
  const { activePage, navigateTo, cartCount, wishlist, currentUser } = useApp();

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product':
        return <ProductDetailsPage />;
      case 'categories':
        return <CategoriesPage />;
      case 'about':
        return <AboutPage />;
      case 'wellness':
        return <WellnessGuidePage />;
      case 'contact':
        return <ContactPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'confirmation':
        return <OrderConfirmationPage />;
      case 'tracking':
        return <OrderTrackingPage />;
      case 'auth':
        return <AuthPage />;
      case 'account':
        return <MyAccountPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'faq':
        return <FAQPage />;
      case 'shipping':
        return <ShippingReturnsPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      case 'admin':
        return <AdminDashboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ flex: 1 }}>
        {renderActivePage()}
      </main>

      <Footer />

      {/* Global Modals & Notifications */}
      <SearchModal />
      <QuickViewModal />
      <DoshaQuizModal />
      <CartDrawer />
      <Toast />

      {/* Mobile Bottom Navigation Bar */}
      <nav className="mobile-bottom-bar">
        <div 
          className={`mobile-bottom-item ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => navigateTo('home')}
        >
          <Home size={20} />
          <span>Home</span>
        </div>

        <div 
          className={`mobile-bottom-item ${activePage === 'shop' ? 'active' : ''}`}
          onClick={() => navigateTo('shop')}
        >
          <Compass size={20} />
          <span>Shop</span>
        </div>

        <div 
          className={`mobile-bottom-item ${activePage === 'wishlist' ? 'active' : ''}`}
          onClick={() => navigateTo('wishlist')}
        >
          <Heart size={20} />
          <span>Wishlist</span>
          {wishlist.length > 0 && (
            <span style={{ position: 'absolute', top: '-4px', right: '12px', background: 'var(--color-primary)', color: '#FFF', fontSize: '0.65rem', width: '15px', height: '15px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {wishlist.length}
            </span>
          )}
        </div>

        <div 
          className={`mobile-bottom-item ${activePage === 'cart' ? 'active' : ''}`}
          onClick={() => navigateTo('cart')}
        >
          <ShoppingBag size={20} />
          <span>Bag</span>
          {cartCount > 0 && (
            <span style={{ position: 'absolute', top: '-4px', right: '8px', background: 'var(--color-gold)', color: '#153323', fontWeight: 700, fontSize: '0.65rem', width: '15px', height: '15px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {cartCount}
            </span>
          )}
        </div>

        <div 
          className={`mobile-bottom-item ${activePage === 'account' || activePage === 'auth' ? 'active' : ''}`}
          onClick={() => navigateTo(currentUser ? 'account' : 'auth')}
        >
          <User size={20} />
          <span>{currentUser ? 'Account' : 'Sign In'}</span>
        </div>
      </nav>

    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainRouter />
    </AppProvider>
  );
}
