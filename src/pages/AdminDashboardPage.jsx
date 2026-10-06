import React, { useState } from 'react';
import { 
  TrendingUp, 
  Package, 
  ShoppingBag, 
  Users, 
  DollarSign, 
  Plus, 
  Edit3, 
  Trash2, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Tag, 
  Sparkles, 
  ArrowUpRight, 
  SlidersHorizontal,
  X,
  RefreshCw,
  Eye
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AdminDashboardPage = () => {
  const { 
    products, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    orders, 
    updateOrderStatus, 
    coupons, 
    addCoupon, 
    toggleCouponActive, 
    deleteCoupon,
    categories,
    navigateTo,
    showToast 
  } = useApp();

  const [activeSection, setActiveSection] = useState('analytics'); // 'analytics', 'products', 'orders', 'inventory', 'coupons', 'customers'
  
  // Modals state
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddCouponModalOpen, setIsAddCouponModalOpen] = useState(false);

  // New Product Form State
  const [productForm, setProductForm] = useState({
    name: '',
    sanskritName: '',
    subtitle: '',
    category: 'skin-care',
    categoryName: 'Skin Care',
    price: 999,
    originalPrice: 1299,
    discount: 23,
    sku: `VP-NEW-${Math.floor(100 + Math.random() * 900)}`,
    stock: 25,
    lowStockThreshold: 10,
    volume: '100 ml',
    shortDescription: '',
    description: '',
    image: '/images/kumkumadi.jpg',
    badge: 'New Formulation'
  });

  // New Coupon Form State
  const [couponForm, setCouponForm] = useState({
    code: '',
    discountPercent: 15,
    description: '',
    minOrder: 999,
    maxDiscount: 500
  });

  // Calculate Metrics
  const totalSales = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalOrders = orders.length;
  const avgOrderValue = totalOrders > 0 ? Math.round(totalSales / totalOrders) : 0;
  const lowStockItems = products.filter(p => p.stock <= (p.lowStockThreshold || 10));

  // Handle Add Product
  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!productForm.name || !productForm.price) {
      showToast('Please enter product name and price.', 'error');
      return;
    }
    const catObj = categories.find(c => c.slug === productForm.category);
    addProduct({
      ...productForm,
      categoryName: catObj ? catObj.name : 'Ayurveda',
      price: Number(productForm.price),
      originalPrice: Number(productForm.originalPrice || productForm.price),
      discount: Number(productForm.discount || 0),
      stock: Number(productForm.stock || 0)
    });
    setIsAddProductModalOpen(false);
  };

  // Handle Update Product
  const handleUpdateProductSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct({
        ...editingProduct,
        price: Number(editingProduct.price),
        originalPrice: Number(editingProduct.originalPrice),
        discount: Number(editingProduct.discount),
        stock: Number(editingProduct.stock)
      });
      setEditingProduct(null);
    }
  };

  // Handle Create Coupon
  const handleCreateCouponSubmit = (e) => {
    e.preventDefault();
    if (!couponForm.code) {
      showToast('Please enter a coupon code.', 'error');
      return;
    }
    addCoupon({
      ...couponForm,
      code: couponForm.code.toUpperCase(),
      discountPercent: Number(couponForm.discountPercent),
      minOrder: Number(couponForm.minOrder || 0),
      maxDiscount: Number(couponForm.maxDiscount || 500)
    });
    setIsAddCouponModalOpen(false);
    setCouponForm({ code: '', discountPercent: 15, description: '', minOrder: 999, maxDiscount: 500 });
  };

  return (
    <div className="admin-page" style={{ padding: '2rem 0 6rem 0' }}>
      <div className="container">
        
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)', letterSpacing: '0.12em' }}>
              Management Portal
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-primary)' }}>
              VedaPure Operations & Commerce Admin
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="btn btn-secondary btn-sm" onClick={() => navigateTo('home')}>
              View Live Storefront
            </button>
            <button className="btn btn-gold btn-sm" onClick={() => setIsAddProductModalOpen(true)}>
              <Plus size={16} /> Add New Formulation
            </button>
          </div>
        </div>

        {/* Admin Navigation Bar */}
        <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: '#FFF', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '2rem', overflowX: 'auto' }}>
          <button 
            className={`btn btn-sm ${activeSection === 'analytics' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('analytics')}
          >
            <TrendingUp size={16} /> Analytics & Revenue
          </button>
          <button 
            className={`btn btn-sm ${activeSection === 'products' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('products')}
          >
            <Package size={16} /> Product Catalog ({products.length})
          </button>
          <button 
            className={`btn btn-sm ${activeSection === 'orders' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('orders')}
          >
            <ShoppingBag size={16} /> Orders ({orders.length})
          </button>
          <button 
            className={`btn btn-sm ${activeSection === 'inventory' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('inventory')}
          >
            <AlertTriangle size={16} /> Inventory & Low Stock ({lowStockItems.length})
          </button>
          <button 
            className={`btn btn-sm ${activeSection === 'coupons' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('coupons')}
          >
            <Tag size={16} /> Coupons ({coupons.length})
          </button>
        </div>

        {/* SECTION 1: ANALYTICS */}
        {activeSection === 'analytics' && (
          <div>
            {/* Stat Cards Grid */}
            <div className="stat-card-grid">
              <div className="stat-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-sage)' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700 }}>Total Sales Volume</span>
                  <DollarSign size={18} />
                </div>
                <div className="stat-card-value">₹{totalSales.toLocaleString('en-IN')}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600, marginTop: '4px' }}>
                  ↑ 24.8% vs last month
                </div>
              </div>

              <div className="stat-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-sage)' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700 }}>Total Orders</span>
                  <ShoppingBag size={18} />
                </div>
                <div className="stat-card-value">{totalOrders}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600, marginTop: '4px' }}>
                  100% fulfillment rate
                </div>
              </div>

              <div className="stat-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-sage)' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700 }}>Average Order Value</span>
                  <TrendingUp size={18} />
                </div>
                <div className="stat-card-value">₹{avgOrderValue.toLocaleString('en-IN')}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-dark)', fontWeight: 600, marginTop: '4px' }}>
                  High basket size
                </div>
              </div>

              <div className="stat-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-sage)' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700 }}>Active Remedies</span>
                  <Package size={18} />
                </div>
                <div className="stat-card-value">{products.length}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                  {lowStockItems.length} Low Stock Alerts
                </div>
              </div>
            </div>

            {/* Sales Chart Mockup & Best Sellers */}
            <div className="grid-2" style={{ gap: '2rem', marginBottom: '2.5rem' }}>
              
              {/* Revenue Trends Chart */}
              <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                  Weekly Sales Revenue (₹ INR)
                </h3>
                
                {/* Visual Bar Chart */}
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '200px', padding: '1rem 0', borderBottom: '1px solid var(--color-border)' }}>
                  {[
                    { day: 'Mon', amount: 14500, height: '45%' },
                    { day: 'Tue', amount: 22800, height: '70%' },
                    { day: 'Wed', amount: 18400, height: '55%' },
                    { day: 'Thu', amount: 31200, height: '95%' },
                    { day: 'Fri', amount: 26900, height: '80%' },
                    { day: 'Sat', amount: 29500, height: '90%' },
                    { day: 'Sun', amount: 34200, height: '100%' }
                  ].map((bar, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: 1 }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>₹{(bar.amount/1000).toFixed(1)}k</div>
                      <div style={{ width: '32px', height: bar.height, backgroundColor: i === 6 ? 'var(--color-gold)' : 'var(--color-primary)', borderRadius: '4px 4px 0 0', transition: 'height 0.4s ease' }} />
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-main)' }}>{bar.day}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Selling Products */}
              <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                  Top Formulations by Volume
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {products.slice(0, 4).map((p, i) => (
                    <div key={p.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border-light)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontWeight: 700, color: 'var(--color-gold-dark)', width: '20px' }}>#{i+1}</span>
                        <img src={p.image} alt={p.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>{p.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{p.reviewsCount} verified orders</div>
                        </div>
                      </div>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>₹{p.price}</strong>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Recent Orders Feed */}
            <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-primary)' }}>
                  Recent Customer Orders
                </h3>
                <button className="btn btn-secondary btn-sm" onClick={() => setActiveSection('orders')}>
                  View All Orders
                </button>
              </div>

              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Total Amount</th>
                      <th>Payment</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 5).map((ord) => (
                      <tr key={ord.id}>
                        <td style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{ord.id}</td>
                        <td>{ord.customerName}</td>
                        <td>{ord.date}</td>
                        <td style={{ fontWeight: 700 }}>₹{ord.total?.toLocaleString('en-IN')}</td>
                        <td>{ord.paymentMethod}</td>
                        <td>
                          <span className={`status-badge status-${ord.status.toLowerCase()}`}>
                            {ord.status}
                          </span>
                        </td>
                        <td>
                          <button 
                            className="btn btn-secondary btn-sm"
                            onClick={() => navigateTo('confirmation', { orderId: ord.id })}
                            style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                          >
                            <Eye size={12} /> View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* SECTION 2: PRODUCTS MANAGEMENT */}
        {activeSection === 'products' && (
          <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)' }}>
                  Product Catalog & Formulations ({products.length})
                </h3>
                <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)' }}>
                  Manage descriptions, classical recipes, pricing, discounts, and inventory stocks.
                </span>
              </div>

              <button className="btn btn-primary btn-sm" onClick={() => setIsAddProductModalOpen(true)}>
                <Plus size={16} /> Add Product
              </button>
            </div>

            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Stock</th>
                    <th>SKU</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <img src={p.image} alt={p.name} style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                          <div>
                            <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{p.name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-dark)', fontStyle: 'italic' }}>{p.sanskritName || p.subtitle}</div>
                          </div>
                        </div>
                      </td>
                      <td>{p.categoryName}</td>
                      <td style={{ fontWeight: 700 }}>₹{p.price}</td>
                      <td>{p.discount ? `${p.discount}% OFF` : '—'}</td>
                      <td>
                        <span style={{ fontWeight: 700, color: p.stock <= 5 ? 'var(--color-danger)' : 'var(--color-success)' }}>
                          {p.stock} units
                        </span>
                      </td>
                      <td style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{p.sku}</td>
                      <td>
                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          <button 
                            className="icon-btn" 
                            style={{ width: '32px', height: '32px' }}
                            onClick={() => setEditingProduct(p)}
                            title="Edit"
                          >
                            <Edit3 size={15} color="var(--color-primary)" />
                          </button>
                          <button 
                            className="icon-btn" 
                            style={{ width: '32px', height: '32px' }}
                            onClick={() => {
                              if (window.confirm(`Are you sure you want to delete ${p.name}?`)) {
                                deleteProduct(p.id);
                              }
                            }}
                            title="Delete"
                          >
                            <Trash2 size={15} color="var(--color-danger)" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SECTION 3: ORDERS MANAGEMENT */}
        {activeSection === 'orders' && (
          <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
              Customer Orders & Dispatch Management ({orders.length})
            </h3>

            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer & Address</th>
                    <th>Items</th>
                    <th>Amount</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Update Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((ord) => (
                    <tr key={ord.id}>
                      <td>
                        <strong style={{ color: 'var(--color-primary)' }}>{ord.id}</strong>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{ord.date}</div>
                      </td>
                      <td>
                        <div style={{ fontWeight: 600 }}>{ord.customerName}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                          {ord.shippingAddress?.city}, {ord.shippingAddress?.state} • {ord.customerPhone}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontSize: '0.8rem' }}>
                          {ord.items?.map(i => `${i.name} (${i.quantity})`).join(', ')}
                        </div>
                      </td>
                      <td style={{ fontWeight: 700 }}>₹{ord.total?.toLocaleString('en-IN')}</td>
                      <td>
                        <div style={{ fontSize: '0.8rem' }}>{ord.paymentMethod}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-success)' }}>{ord.paymentStatus}</div>
                      </td>
                      <td>
                        <span className={`status-badge status-${ord.status.toLowerCase()}`}>
                          {ord.status}
                        </span>
                      </td>
                      <td>
                        <select 
                          className="form-select"
                          value={ord.status}
                          onChange={(e) => updateOrderStatus(ord.id, e.target.value)}
                          style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem', width: 'auto' }}
                        >
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SECTION 4: INVENTORY */}
        {activeSection === 'inventory' && (
          <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
              Inventory Control & Stock Restocking
            </h3>

            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>SKU</th>
                    <th>Stock Status</th>
                    <th>Current Level</th>
                    <th>Quick Restock</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => {
                    const isLow = p.stock <= (p.lowStockThreshold || 10);
                    return (
                      <tr key={p.id} style={{ backgroundColor: isLow ? '#FFF9F0' : 'transparent' }}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <img src={p.image} alt={p.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                            <strong style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>{p.name}</strong>
                          </div>
                        </td>
                        <td style={{ fontSize: '0.8rem' }}>{p.sku}</td>
                        <td>
                          {isLow ? (
                            <span style={{ color: 'var(--color-warning)', fontWeight: 700, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <AlertTriangle size={14} /> Low Stock Alert
                            </span>
                          ) : (
                            <span style={{ color: 'var(--color-success)', fontWeight: 700, fontSize: '0.8rem' }}>
                              ✓ Healthy
                            </span>
                          )}
                        </td>
                        <td style={{ fontWeight: 700, fontSize: '1rem' }}>{p.stock} units</td>
                        <td>
                          <div style={{ display: 'flex', gap: '0.4rem' }}>
                            <button 
                              className="btn btn-secondary btn-sm"
                              style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                              onClick={() => {
                                updateProduct({ ...p, stock: p.stock + 10 });
                                showToast(`Added +10 units to ${p.name}`, 'success');
                              }}
                            >
                              +10 Units
                            </button>
                            <button 
                              className="btn btn-primary btn-sm"
                              style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                              onClick={() => {
                                updateProduct({ ...p, stock: p.stock + 50 });
                                showToast(`Added +50 units to ${p.name}`, 'success');
                              }}
                            >
                              +50 Units
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SECTION 5: COUPONS */}
        {activeSection === 'coupons' && (
          <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)' }}>
                Promo Coupons & Discount Codes ({coupons.length})
              </h3>
              <button className="btn btn-primary btn-sm" onClick={() => setIsAddCouponModalOpen(true)}>
                <Plus size={16} /> Create Coupon
              </button>
            </div>

            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Discount</th>
                    <th>Description</th>
                    <th>Min Order Value</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {coupons.map((c) => (
                    <tr key={c.code}>
                      <td style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1rem' }}>{c.code}</td>
                      <td>{c.flatDiscount ? `₹${c.flatDiscount} Flat` : `${c.discountPercent}% Off`}</td>
                      <td style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{c.description}</td>
                      <td>₹{c.minOrder || 0}</td>
                      <td>
                        <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: 'var(--radius-full)', fontWeight: 700, backgroundColor: c.active ? '#EAF6EE' : '#FCE8E6', color: c.active ? 'var(--color-success)' : 'var(--color-danger)' }}>
                          {c.active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button 
                            className="btn btn-secondary btn-sm"
                            style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                            onClick={() => toggleCouponActive(c.code)}
                          >
                            {c.active ? 'Deactivate' : 'Activate'}
                          </button>
                          <button 
                            className="icon-btn"
                            style={{ width: '30px', height: '30px' }}
                            onClick={() => deleteCoupon(c.code)}
                          >
                            <Trash2 size={14} color="var(--color-danger)" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MODAL: ADD PRODUCT */}
        {isAddProductModalOpen && (
          <div className="modal-backdrop" onClick={() => setIsAddProductModalOpen(false)}>
            <div className="modal-content-box" style={{ maxWidth: '640px', padding: '2rem' }} onClick={e => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setIsAddProductModalOpen(false)}><X size={18} /></button>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                Add New Ayurvedic Formulation
              </h3>

              <form onSubmit={handleCreateProduct}>
                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Product Name *</label>
                    <input type="text" className="form-input" placeholder="e.g. Saffron Miraculous Serum" value={productForm.name} onChange={e => setProductForm({ ...productForm, name: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Sanskrit Name</label>
                    <input type="text" className="form-input" placeholder="e.g. कुङ्कुमादि तैलम्" value={productForm.sanskritName} onChange={e => setProductForm({ ...productForm, sanskritName: e.target.value })} />
                  </div>
                </div>

                <div className="grid-3" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Category *</label>
                    <select className="form-select" value={productForm.category} onChange={e => setProductForm({ ...productForm, category: e.target.value })}>
                      {categories.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Price (₹) *</label>
                    <input type="number" className="form-input" value={productForm.price} onChange={e => setProductForm({ ...productForm, price: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Original Price (₹)</label>
                    <input type="number" className="form-input" value={productForm.originalPrice} onChange={e => setProductForm({ ...productForm, originalPrice: e.target.value })} />
                  </div>
                </div>

                <div className="grid-3" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Stock Units *</label>
                    <input type="number" className="form-input" value={productForm.stock} onChange={e => setProductForm({ ...productForm, stock: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Volume / Size</label>
                    <input type="text" className="form-input" value={productForm.volume} onChange={e => setProductForm({ ...productForm, volume: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Image Asset URL</label>
                    <select className="form-select" value={productForm.image} onChange={e => setProductForm({ ...productForm, image: e.target.value })}>
                      <option value="/images/kumkumadi.jpg">Kumkumadi Oil Asset</option>
                      <option value="/images/bhringraj.jpg">Bhringraj Oil Asset</option>
                      <option value="/images/ashwagandha.jpg">Ashwagandha Jar Asset</option>
                      <option value="/images/hero.jpg">Ayurvedic Hero Cream</option>
                      <option value="/images/harvest.jpg">Ubtan Harvest Asset</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Short Description</label>
                  <textarea className="form-textarea" rows={2} placeholder="Key benefits and traditional herbs used..." value={productForm.shortDescription} onChange={e => setProductForm({ ...productForm, shortDescription: e.target.value })} />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setIsAddProductModalOpen(false)} style={{ flex: 1 }}>Cancel</button>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save Product</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: EDIT PRODUCT */}
        {editingProduct && (
          <div className="modal-backdrop" onClick={() => setEditingProduct(null)}>
            <div className="modal-content-box" style={{ maxWidth: '580px', padding: '2rem' }} onClick={e => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setEditingProduct(null)}><X size={18} /></button>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                Edit {editingProduct.name}
              </h3>

              <form onSubmit={handleUpdateProductSubmit}>
                <div className="form-group">
                  <label className="form-label">Product Name</label>
                  <input type="text" className="form-input" value={editingProduct.name} onChange={e => setEditingProduct({ ...editingProduct, name: e.target.value })} required />
                </div>

                <div className="grid-3" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Selling Price (₹)</label>
                    <input type="number" className="form-input" value={editingProduct.price} onChange={e => setEditingProduct({ ...editingProduct, price: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Original Price (₹)</label>
                    <input type="number" className="form-input" value={editingProduct.originalPrice} onChange={e => setEditingProduct({ ...editingProduct, originalPrice: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Stock Quantity</label>
                    <input type="number" className="form-input" value={editingProduct.stock} onChange={e => setEditingProduct({ ...editingProduct, stock: e.target.value })} required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Short Summary</label>
                  <textarea className="form-textarea" rows={3} value={editingProduct.shortDescription} onChange={e => setEditingProduct({ ...editingProduct, shortDescription: e.target.value })} />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setEditingProduct(null)} style={{ flex: 1 }}>Cancel</button>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save Updates</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: ADD COUPON */}
        {isAddCouponModalOpen && (
          <div className="modal-backdrop" onClick={() => setIsAddCouponModalOpen(false)}>
            <div className="modal-content-box" style={{ maxWidth: '480px', padding: '2rem' }} onClick={e => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setIsAddCouponModalOpen(false)}><X size={18} /></button>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                Create New Promo Coupon
              </h3>

              <form onSubmit={handleCreateCouponSubmit}>
                <div className="form-group">
                  <label className="form-label">Coupon Code (e.g. FESTIVE25) *</label>
                  <input type="text" className="form-input" placeholder="FESTIVE25" value={couponForm.code} onChange={e => setCouponForm({ ...couponForm, code: e.target.value })} style={{ textTransform: 'uppercase' }} required />
                </div>

                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Discount Percentage (%)</label>
                    <input type="number" className="form-input" value={couponForm.discountPercent} onChange={e => setCouponForm({ ...couponForm, discountPercent: e.target.value })} min={1} max={90} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Min Order Value (₹)</label>
                    <input type="number" className="form-input" value={couponForm.minOrder} onChange={e => setCouponForm({ ...couponForm, minOrder: e.target.value })} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Description</label>
                  <input type="text" className="form-input" placeholder="e.g. Festive discount on all remedies" value={couponForm.description} onChange={e => setCouponForm({ ...couponForm, description: e.target.value })} />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setIsAddCouponModalOpen(false)} style={{ flex: 1 }}>Cancel</button>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Create Coupon</button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
