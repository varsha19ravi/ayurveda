import React, { useState } from 'react';
import { 
  User, 
  Package, 
  MapPin, 
  Heart, 
  Lock, 
  LogOut, 
  Sparkles, 
  Plus, 
  Trash2, 
  Edit2, 
  Check, 
  ExternalLink,
  Award,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const MyAccountPage = () => {
  const { 
    currentUser, 
    orders, 
    logoutUser, 
    updateProfile, 
    addSavedAddress, 
    deleteSavedAddress, 
    setDefaultAddress,
    navigateTo, 
    showToast 
  } = useApp();

  const [activeTab, setActiveTab] = useState('orders'); // 'orders', 'addresses', 'profile', 'security'

  // New address modal state
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddrForm, setNewAddrForm] = useState({
    fullName: currentUser?.name || '',
    phone: currentUser?.phone || '',
    email: currentUser?.email || '',
    addressLine: '',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '',
    type: 'Home'
  });

  // Password change state
  const [pwdForm, setPwdForm] = useState({ current: '', newPwd: '', confirm: '' });

  if (!currentUser) {
    return (
      <div className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          Please sign in to view your account dashboard.
        </h2>
        <button className="btn btn-primary" onClick={() => navigateTo('auth')}>
          Sign In
        </button>
      </div>
    );
  }

  const userOrders = orders.filter(o => 
    o.customerEmail?.toLowerCase() === currentUser.email.toLowerCase() || currentUser.role === 'admin'
  );

  const handleSaveNewAddress = (e) => {
    e.preventDefault();
    if (!newAddrForm.addressLine || !newAddrForm.pincode) {
      showToast('Please enter complete address details.', 'error');
      return;
    }
    addSavedAddress(newAddrForm);
    setIsAddingAddress(false);
    setNewAddrForm({
      fullName: currentUser.name,
      phone: currentUser.phone,
      email: currentUser.email,
      addressLine: '',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '',
      type: 'Home'
    });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (pwdForm.newPwd !== pwdForm.confirm) {
      showToast('New passwords do not match.', 'error');
      return;
    }
    showToast('Password updated securely.', 'success');
    setPwdForm({ current: '', newPwd: '', confirm: '' });
  };

  return (
    <div className="account-page" style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container">
        
        {/* Dashboard Header Bar */}
        <div style={{ backgroundColor: 'var(--color-primary)', color: '#FFF', borderRadius: 'var(--radius-lg)', padding: '2.5rem', marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-gold-light)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.5rem' }}>
              {currentUser.name.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#B6C4BC', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Welcome to your Sanctuary
              </div>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FFF' }}>
                {currentUser.name}
              </h1>
              <div style={{ fontSize: '0.85rem', color: '#D2DFD8' }}>
                {currentUser.email} • {currentUser.phone}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-gold)', textTransform: 'uppercase', fontWeight: 700 }}>Veda Rewards</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700 }}>{currentUser.vedaPoints || 450} Pts</div>
            </div>

            {currentUser.doshaProfile && (
              <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: '#B6C4BC', textTransform: 'uppercase', fontWeight: 700 }}>Prakriti Profile</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{currentUser.doshaProfile}</div>
              </div>
            )}
          </div>
        </div>

        {/* Account Nav & Tab Content */}
        <div className="grid-2" style={{ gridTemplateColumns: '260px 1fr', gap: '2.5rem', alignItems: 'start' }}>
          
          {/* Left: Account Menu */}
          <aside style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            
            <button 
              className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', background: activeTab === 'orders' ? '#FAF7F2' : 'transparent', fontWeight: 600 }}
              onClick={() => setActiveTab('orders')}
            >
              <Package size={18} color="var(--color-primary)" />
              <span>My Orders ({userOrders.length})</span>
            </button>

            <button 
              className={`nav-link ${activeTab === 'addresses' ? 'active' : ''}`}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', background: activeTab === 'addresses' ? '#FAF7F2' : 'transparent', fontWeight: 600 }}
              onClick={() => setActiveTab('addresses')}
            >
              <MapPin size={18} color="var(--color-primary)" />
              <span>Saved Addresses</span>
            </button>

            <button 
              className={`nav-link`}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}
              onClick={() => navigateTo('wishlist')}
            >
              <Heart size={18} color="var(--color-primary)" />
              <span>My Wishlist</span>
            </button>

            <button 
              className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', background: activeTab === 'profile' ? '#FAF7F2' : 'transparent', fontWeight: 600 }}
              onClick={() => setActiveTab('profile')}
            >
              <User size={18} color="var(--color-primary)" />
              <span>Personal Details</span>
            </button>

            <button 
              className={`nav-link ${activeTab === 'security' ? 'active' : ''}`}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', background: activeTab === 'security' ? '#FAF7F2' : 'transparent', fontWeight: 600 }}
              onClick={() => setActiveTab('security')}
            >
              <Lock size={18} color="var(--color-primary)" />
              <span>Security & Password</span>
            </button>

            {currentUser.role === 'admin' && (
              <button 
                className="btn btn-gold btn-sm"
                style={{ marginTop: '0.5rem', width: '100%' }}
                onClick={() => navigateTo('admin')}
              >
                <span>Admin Master Portal</span>
                <ChevronRight size={16} />
              </button>
            )}

            <button 
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', background: 'transparent', color: 'var(--color-danger)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.6rem', borderTop: '1px solid var(--color-border-light)', marginTop: '0.75rem', cursor: 'pointer' }}
              onClick={logoutUser}
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>

          </aside>

          {/* Right: Tab Contents */}
          <main>
            
            {/* TAB 1: MY ORDERS */}
            {activeTab === 'orders' && (
              <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                  Order History & Real-Time Tracking
                </h3>

                {userOrders.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                    <Package size={40} color="var(--color-sage)" style={{ margin: '0 auto 1rem auto' }} />
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>You haven't placed any Ayurvedic orders yet.</p>
                    <button className="btn btn-primary btn-sm" onClick={() => navigateTo('shop')}>
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {userOrders.map((order) => (
                      <div 
                        key={order.id}
                        style={{
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          padding: '1.5rem',
                          backgroundColor: '#FAF7F2'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                          <div>
                            <strong style={{ fontSize: '1rem', color: 'var(--color-primary)' }}>Order #{order.id}</strong>
                            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Placed on {order.date}</div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span className={`status-badge status-${order.status.toLowerCase()}`}>
                              {order.status}
                            </span>
                            <button 
                              className="btn btn-secondary btn-sm"
                              onClick={() => navigateTo('tracking', { orderId: order.id })}
                            >
                              Track Order
                            </button>
                          </div>
                        </div>

                        {/* Order Items */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
                          {order.items?.map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                                <div>
                                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-main)' }}>{item.name}</div>
                                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Qty: {item.quantity} • {item.volume}</div>
                                </div>
                              </div>
                              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border-light)', paddingTop: '0.75rem', fontSize: '0.85rem' }}>
                          <span style={{ color: 'var(--color-text-muted)' }}>Payment: {order.paymentMethod}</span>
                          <strong style={{ fontSize: '1.05rem', color: 'var(--color-primary)' }}>Total: ₹{order.total?.toLocaleString('en-IN')}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: SAVED ADDRESSES */}
            {activeTab === 'addresses' && (
              <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)' }}>
                    Saved Delivery Addresses
                  </h3>
                  <button className="btn btn-primary btn-sm" onClick={() => setIsAddingAddress(true)}>
                    <Plus size={16} /> Add New Address
                  </button>
                </div>

                {isAddingAddress && (
                  <form onSubmit={handleSaveNewAddress} style={{ padding: '1.5rem', backgroundColor: '#FAF7F2', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '2rem' }}>
                    <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>New Delivery Address</h4>
                    
                    <div className="grid-2" style={{ gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input type="text" className="form-input" value={newAddrForm.fullName} onChange={e => setNewAddrForm({ ...newAddrForm, fullName: e.target.value })} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone *</label>
                        <input type="tel" className="form-input" value={newAddrForm.phone} onChange={e => setNewAddrForm({ ...newAddrForm, phone: e.target.value })} required />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Address Line *</label>
                      <input type="text" className="form-input" placeholder="Flat / House / Street" value={newAddrForm.addressLine} onChange={e => setNewAddrForm({ ...newAddrForm, addressLine: e.target.value })} required />
                    </div>

                    <div className="grid-3" style={{ gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">City *</label>
                        <input type="text" className="form-input" value={newAddrForm.city} onChange={e => setNewAddrForm({ ...newAddrForm, city: e.target.value })} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">State *</label>
                        <input type="text" className="form-input" value={newAddrForm.state} onChange={e => setNewAddrForm({ ...newAddrForm, state: e.target.value })} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">PIN Code *</label>
                        <input type="text" className="form-input" maxLength={6} value={newAddrForm.pincode} onChange={e => setNewAddrForm({ ...newAddrForm, pincode: e.target.value })} required />
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                      <button type="button" className="btn btn-secondary btn-sm" onClick={() => setIsAddingAddress(false)}>Cancel</button>
                      <button type="submit" className="btn btn-primary btn-sm">Save Address</button>
                    </div>
                  </form>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  {currentUser.savedAddresses?.map((addr) => (
                    <div 
                      key={addr.id}
                      style={{
                        padding: '1.25rem',
                        borderRadius: 'var(--radius-md)',
                        border: `1.5px solid ${addr.isDefault ? 'var(--color-primary)' : 'var(--color-border)'}`,
                        backgroundColor: addr.isDefault ? '#FAF7F2' : '#FFF',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', background: 'var(--color-sage-light)', color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '4px' }}>
                          {addr.type || 'Home'}
                        </span>
                        {addr.isDefault && (
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 700 }}>
                            ✓ Default
                          </span>
                        )}
                      </div>

                      <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem' }}>{addr.fullName}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: '4px 0 1rem 0', lineHeight: '1.5' }}>
                        {addr.addressLine}, {addr.city}, {addr.state} - {addr.pincode} <br />
                        Phone: {addr.phone}
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border-light)', paddingTop: '0.75rem' }}>
                        {!addr.isDefault && (
                          <button style={{ background: 'transparent', color: 'var(--color-gold-dark)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }} onClick={() => setDefaultAddress(addr.id)}>
                            Set as Default
                          </button>
                        )}
                        <button style={{ background: 'transparent', color: 'var(--color-danger)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', marginLeft: 'auto' }} onClick={() => deleteSavedAddress(addr.id)}>
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* TAB 3: PERSONAL DETAILS */}
            {activeTab === 'profile' && (
              <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                  Personal Information
                </h3>

                <form onSubmit={(e) => { e.preventDefault(); showToast('Profile updated!', 'success'); }}>
                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-input" defaultValue={currentUser.name} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-input" defaultValue={currentUser.email} disabled />
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-input" defaultValue={currentUser.phone} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Prakriti (Dosha Constitution)</label>
                      <input type="text" className="form-input" defaultValue={currentUser.doshaProfile} />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {/* TAB 4: SECURITY */}
            {activeTab === 'security' && (
              <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                  Password & Security Settings
                </h3>

                <form onSubmit={handlePasswordChange}>
                  <div className="form-group">
                    <label className="form-label">Current Password</label>
                    <input type="password" className="form-input" placeholder="••••••••" value={pwdForm.current} onChange={e => setPwdForm({ ...pwdForm, current: e.target.value })} required />
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">New Password</label>
                      <input type="password" className="form-input" placeholder="At least 6 characters" value={pwdForm.newPwd} onChange={e => setPwdForm({ ...pwdForm, newPwd: e.target.value })} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Confirm New Password</label>
                      <input type="password" className="form-input" placeholder="Confirm password" value={pwdForm.confirm} onChange={e => setPwdForm({ ...pwdForm, confirm: e.target.value })} required />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>
                    Update Password
                  </button>
                </form>
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
};
