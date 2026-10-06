import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS as INITIAL_PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { INGREDIENTS } from '../data/ingredients';
import { ARTICLES } from '../data/articles';
import { FAQS } from '../data/faqs';
import { INITIAL_COUPONS, DEMO_USERS, INITIAL_ORDERS } from '../data/mockOrders';
import { DOSHA_RESULTS } from '../data/quizQuestions';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // 1. Navigation State
  const [activePage, setActivePage] = useState('home');
  const [pageParams, setPageParams] = useState({});

  // 2. Products State (with LocalStorage persistence for Admin additions/edits)
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('vedapure_products');
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vedapure_products', JSON.stringify(products));
    } catch (e) {
      console.error(e);
    }
  }, [products]);

  // 3. Cart State
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('vedapure_cart');
      return saved ? JSON.parse(saved) : [
        {
          productId: 'prod-01',
          quantity: 1,
          volume: '30 ml / 1.0 fl. oz.'
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vedapure_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // 4. Applied Coupon State
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // 5. Coupons State
  const [coupons, setCoupons] = useState(() => {
    try {
      const saved = localStorage.getItem('vedapure_coupons');
      return saved ? JSON.parse(saved) : INITIAL_COUPONS;
    } catch {
      return INITIAL_COUPONS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vedapure_coupons', JSON.stringify(coupons));
    } catch (e) {
      console.error(e);
    }
  }, [coupons]);

  // 6. Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('vedapure_wishlist');
      return saved ? JSON.parse(saved) : ['prod-02', 'prod-03'];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vedapure_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // 7. Orders State
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('vedapure_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vedapure_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  // 8. User State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('vedapure_user');
      return saved ? JSON.parse(saved) : DEMO_USERS[0];
    } catch {
      return DEMO_USERS[0];
    }
  });

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('vedapure_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('vedapure_user');
      }
    } catch (e) {
      console.error(e);
    }
  }, [currentUser]);

  // 9. Modals State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isDoshaQuizOpen, setIsDoshaQuizOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  // 10. Toast Notification State
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToast({ id, message, type });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 3800);
  };

  // Helper Navigation Function
  const navigateTo = (page, params = {}) => {
    setActivePage(page);
    setPageParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart Calculations
  const cartItemsDetailed = cart.map(item => {
    const product = products.find(p => p.id === item.productId) || {
      id: item.productId,
      name: 'Ayurvedic Formula',
      price: 999,
      image: '/images/kumkumadi.jpg',
      stock: 10,
      inStock: true
    };
    return {
      ...item,
      product
    };
  });

  const cartSubtotal = cartItemsDetailed.reduce(
    (sum, item) => sum + (item.product.price * item.quantity),
    0
  );

  const cartOriginalTotal = cartItemsDetailed.reduce(
    (sum, item) => sum + ((item.product.originalPrice || item.product.price) * item.quantity),
    0
  );

  let cartDiscount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.flatDiscount) {
      cartDiscount = appliedCoupon.flatDiscount;
    } else if (appliedCoupon.discountPercent) {
      cartDiscount = Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100);
      if (appliedCoupon.maxDiscount && cartDiscount > appliedCoupon.maxDiscount) {
        cartDiscount = appliedCoupon.maxDiscount;
      }
    }
  }

  const freeShippingThreshold = 999;
  const isFreeShipping = cartSubtotal >= freeShippingThreshold || (appliedCoupon && appliedCoupon.freeShipping);
  const cartShipping = cartSubtotal === 0 ? 0 : (isFreeShipping ? 0 : 99);
  const cartTaxes = Math.round((Math.max(0, cartSubtotal - cartDiscount) * 0.05)); // 5% GST
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount + cartShipping + cartTaxes);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Cart Actions
  const addToCart = (product, quantity = 1, volume = null, openDrawer = true) => {
    if (product.stock <= 0) {
      showToast(`${product.name} is currently out of stock.`, 'error');
      return;
    }

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.productId === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + quantity;
        if (newQty > product.stock) {
          showToast(`Only ${product.stock} units available in stock.`, 'error');
          updated[existingIndex].quantity = product.stock;
        } else {
          updated[existingIndex].quantity = newQty;
          showToast(`Updated ${product.name} quantity in cart.`, 'success');
        }
        return updated;
      } else {
        const itemQty = Math.min(quantity, product.stock);
        showToast(`Added ${product.name} to your cart.`, 'success');
        return [...prev, { productId: product.id, quantity: itemQty, volume: volume || product.volume }];
      }
    });

    if (openDrawer) {
      setIsCartDrawerOpen(true);
    }
  };

  const removeFromCart = (productId) => {
    const item = products.find(p => p.id === productId);
    setCart(prev => prev.filter(i => i.productId !== productId));
    showToast(`Removed ${item?.name || 'item'} from cart.`, 'info');
  };

  const updateCartQuantity = (productId, delta) => {
    const product = products.find(p => p.id === productId);
    setCart(prev => {
      return prev.map(item => {
        if (item.productId === productId) {
          const newQty = item.quantity + delta;
          if (newQty <= 0) return null;
          if (product && newQty > product.stock) {
            showToast(`Maximum ${product.stock} items available in stock.`, 'error');
            return item;
          }
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(Boolean);
    });
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  // Coupon Action
  const applyCoupon = (codeStr) => {
    const cleanCode = codeStr.trim().toUpperCase();
    const found = coupons.find(c => c.code === cleanCode && c.active);

    if (!found) {
      showToast('Invalid coupon code. Try VEDA15 or WELCOME20', 'error');
      return { success: false, message: 'Invalid coupon code.' };
    }

    if (found.minOrder && cartSubtotal < found.minOrder) {
      showToast(`Add items worth ₹${found.minOrder - cartSubtotal} more to use ${found.code}.`, 'error');
      return { success: false, message: `Minimum order value of ₹${found.minOrder} required.` };
    }

    setAppliedCoupon(found);
    showToast(`Coupon ${found.code} applied successfully!`, 'success');
    return { success: true, message: 'Coupon applied!' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed.', 'info');
  };

  // Wishlist Actions
  const toggleWishlist = (productId) => {
    const product = products.find(p => p.id === productId);
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast(`Removed ${product?.name || 'product'} from your Wishlist.`, 'info');
        return prev.filter(id => id !== productId);
      } else {
        showToast(`Saved ${product?.name || 'product'} to your Wishlist!`, 'success');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const moveWishlistToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart(product, 1, product.volume, true);
      toggleWishlist(productId);
    }
  };

  // User Auth Actions
  const loginUser = (email, role = 'customer') => {
    const foundDemo = DEMO_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (foundDemo) {
      setCurrentUser(foundDemo);
      showToast(`Welcome back, ${foundDemo.name}!`, 'success');
      return true;
    }

    // Default created user
    const newUser = {
      id: `user-${Date.now()}`,
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email,
      role: role || 'customer',
      phone: '+91 98765 00000',
      vedaPoints: 100,
      savedAddresses: [],
      doshaProfile: 'Tridoshic'
    };
    setCurrentUser(newUser);
    showToast(`Welcome to VedaPure, ${newUser.name}!`, 'success');
    return true;
  };

  const logoutUser = () => {
    setCurrentUser(null);
    showToast('You have been safely logged out.', 'info');
    navigateTo('home');
  };

  const updateProfile = (updatedData) => {
    setCurrentUser(prev => ({ ...prev, ...updatedData }));
    showToast('Profile updated successfully!', 'success');
  };

  const addSavedAddress = (address) => {
    const newAddr = {
      ...address,
      id: `addr-${Date.now()}`,
      isDefault: currentUser?.savedAddresses?.length === 0
    };
    setCurrentUser(prev => ({
      ...prev,
      savedAddresses: [...(prev.savedAddresses || []), newAddr]
    }));
    showToast('Address saved successfully!', 'success');
    return newAddr;
  };

  const updateSavedAddress = (updatedAddress) => {
    setCurrentUser(prev => ({
      ...prev,
      savedAddresses: prev.savedAddresses.map(a => a.id === updatedAddress.id ? updatedAddress : a)
    }));
    showToast('Address updated.', 'success');
  };

  const deleteSavedAddress = (addrId) => {
    setCurrentUser(prev => ({
      ...prev,
      savedAddresses: prev.savedAddresses.filter(a => a.id !== addrId)
    }));
    showToast('Address removed.', 'info');
  };

  const setDefaultAddress = (addrId) => {
    setCurrentUser(prev => ({
      ...prev,
      savedAddresses: prev.savedAddresses.map(a => ({
        ...a,
        isDefault: a.id === addrId
      }))
    }));
    showToast('Default address updated.', 'success');
  };

  // Order Placement
  const createOrder = (orderData) => {
    const newOrderId = `VEDA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder = {
      id: newOrderId,
      date: new Date().toISOString().split('T')[0],
      customerName: orderData.shippingAddress.fullName,
      customerEmail: orderData.shippingAddress.email || currentUser?.email || 'customer@vedapure.com',
      customerPhone: orderData.shippingAddress.phone,
      status: 'Processing',
      trackingNumber: `BD-${Math.floor(10000000 + Math.random() * 90000000)}`,
      courierName: 'BlueDart Express',
      estimatedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      items: cartItemsDetailed.map(item => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.image,
        volume: item.volume
      })),
      subtotal: cartSubtotal,
      discount: cartDiscount,
      couponCode: appliedCoupon?.code || null,
      shipping: cartShipping,
      taxes: cartTaxes,
      total: cartTotal,
      paymentMethod: orderData.paymentMethod,
      paymentStatus: orderData.paymentMethod === 'Cash on Delivery' ? 'Pending (COD)' : 'Paid',
      shippingAddress: orderData.shippingAddress,
      trackingHistory: [
        { status: 'Order Confirmed', date: 'Just now', location: 'VedaPure Central Facility', done: true },
        { status: 'Fresh Formulation & Packing', date: 'Underway', location: 'Kerala Herbal Apothecary', done: false },
        { status: 'Dispatched via Courier', date: 'Upcoming', location: 'Transit Hub', done: false },
        { status: 'Out for Delivery', date: 'Expected 3-4 days', location: 'Local Destination Center', done: false },
        { status: 'Delivered', date: 'Pending', location: 'Destination Address', done: false }
      ]
    };

    // Deduct stock from products
    setProducts(prevProducts => {
      return prevProducts.map(p => {
        const cartItem = cart.find(c => c.productId === p.id);
        if (cartItem) {
          const updatedStock = Math.max(0, p.stock - cartItem.quantity);
          return {
            ...p,
            stock: updatedStock,
            inStock: updatedStock > 0
          };
        }
        return p;
      });
    });

    // Add order to orders list
    setOrders(prev => [newOrder, ...prev]);

    // Reward loyalty points
    if (currentUser) {
      const earnedPoints = Math.round(cartTotal / 10);
      setCurrentUser(prev => ({
        ...prev,
        vedaPoints: (prev.vedaPoints || 0) + earnedPoints
      }));
    }

    // Clear cart
    clearCart();

    return newOrder;
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(order => {
      if (order.id === orderId) {
        return {
          ...order,
          status: newStatus,
          trackingHistory: order.trackingHistory.map(th => {
            if (newStatus === 'Delivered') return { ...th, done: true };
            if (newStatus === 'Shipped' && (th.status.includes('Order') || th.status.includes('Packing') || th.status.includes('Dispatched'))) {
              return { ...th, done: true };
            }
            return th;
          })
        };
      }
      return order;
    }));
    showToast(`Order ${orderId} marked as ${newStatus}.`, 'success');
  };

  // Product Admin Management
  const addProduct = (newProdData) => {
    const slug = newProdData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newProduct = {
      ...newProdData,
      id: `prod-${Date.now()}`,
      slug,
      rating: 5.0,
      reviewsCount: 1,
      inStock: (newProdData.stock || 0) > 0,
      image: newProdData.image || '/images/kumkumadi.jpg',
      galleryImages: [newProdData.image || '/images/kumkumadi.jpg', '/images/hero.jpg'],
      reviews: []
    };
    setProducts(prev => [newProduct, ...prev]);
    showToast(`Product "${newProduct.name}" added to catalog!`, 'success');
    return newProduct;
  };

  const updateProduct = (updatedProd) => {
    setProducts(prev => prev.map(p => (p.id === updatedProd.id ? { ...p, ...updatedProd, inStock: (updatedProd.stock || 0) > 0 } : p)));
    showToast(`Product "${updatedProd.name}" updated successfully!`, 'success');
  };

  const deleteProduct = (productId) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
    showToast('Product deleted from store catalog.', 'info');
  };

  // Review Management
  const addProductReview = (productId, reviewData) => {
    const newReview = {
      id: `rev-${Date.now()}`,
      userName: currentUser?.name || reviewData.userName || 'Verified Customer',
      rating: reviewData.rating || 5,
      date: 'Just now',
      verified: true,
      title: reviewData.title,
      comment: reviewData.comment,
      helpful: 0
    };

    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        const updatedReviews = [newReview, ...(p.reviews || [])];
        const avgRating = (updatedReviews.reduce((sum, r) => sum + r.rating, 0) / updatedReviews.length).toFixed(1);
        return {
          ...p,
          reviews: updatedReviews,
          reviewsCount: updatedReviews.length,
          rating: parseFloat(avgRating)
        };
      }
      return p;
    }));

    showToast('Your Ayurvedic review has been published! Thank you.', 'success');
  };

  // Coupon Admin
  const addCoupon = (couponData) => {
    setCoupons(prev => [...prev, { ...couponData, active: true }]);
    showToast(`Coupon ${couponData.code} created!`, 'success');
  };

  const toggleCouponActive = (code) => {
    setCoupons(prev => prev.map(c => c.code === code ? { ...c, active: !c.active } : c));
    showToast('Coupon status updated.', 'info');
  };

  const deleteCoupon = (code) => {
    setCoupons(prev => prev.filter(c => c.code !== code));
    showToast('Coupon deleted.', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        // Nav
        activePage,
        pageParams,
        navigateTo,
        // Data
        products,
        categories: CATEGORIES,
        ingredients: INGREDIENTS,
        articles: ARTICLES,
        faqs: FAQS,
        // Cart
        cart,
        cartItemsDetailed,
        cartSubtotal,
        cartOriginalTotal,
        cartDiscount,
        cartShipping,
        cartTaxes,
        cartTotal,
        cartCount,
        appliedCoupon,
        freeShippingThreshold,
        isFreeShipping,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        applyCoupon,
        removeCoupon,
        // Wishlist
        wishlist,
        toggleWishlist,
        isInWishlist,
        moveWishlistToCart,
        // User Auth
        currentUser,
        loginUser,
        logoutUser,
        updateProfile,
        addSavedAddress,
        updateSavedAddress,
        deleteSavedAddress,
        setDefaultAddress,
        // Orders
        orders,
        createOrder,
        updateOrderStatus,
        // Admin
        addProduct,
        updateProduct,
        deleteProduct,
        coupons,
        addCoupon,
        toggleCouponActive,
        deleteCoupon,
        // Reviews
        addProductReview,
        // Modals
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        isDoshaQuizOpen,
        setIsDoshaQuizOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        // Toast
        toast,
        showToast,
        // Dosha
        doshaResults: DOSHA_RESULTS
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
