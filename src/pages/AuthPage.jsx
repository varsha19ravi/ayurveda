import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Mail, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  KeyRound
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AuthPage = () => {
  const { loginUser, navigateTo, showToast } = useApp();

  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter your email address.', 'error');
      return;
    }
    const success = loginUser(email);
    if (success) {
      navigateTo('account');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      showToast('Please fill in your name and email.', 'error');
      return;
    }
    loginUser(email);
    navigateTo('account');
  };

  const handleDemoLogin = (role) => {
    if (role === 'admin') {
      loginUser('admin@vedapure.com', 'admin');
      navigateTo('admin');
    } else {
      loginUser('customer@vedapure.com', 'customer');
      navigateTo('account');
    }
  };

  return (
    <div className="auth-page" style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container-narrow" style={{ maxWidth: '520px' }}>
        
        {/* Card */}
        <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="brand-emblem" style={{ width: '48px', height: '48px', margin: '0 auto 1rem auto' }}>
              <Sparkles size={22} />
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)' }}>
              {mode === 'login' ? 'Welcome Back' : 'Join VedaPure'}
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
              {mode === 'login' 
                ? 'Sign in to access saved addresses, orders, and Veda points.' 
                : 'Create an account to start your holistic Ayurvedic wellness journey.'}
            </p>
          </div>

          {/* Quick 1-Click Demo Login Bar */}
          <div style={{ backgroundColor: '#FAF7F2', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '1.75rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)', display: 'block', marginBottom: '0.5rem', textAlign: 'center' }}>
              ⚡ 1-Click Instant Demo Access:
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={() => handleDemoLogin('customer')}
              >
                <User size={14} /> Demo Customer
              </button>
              <button 
                type="button" 
                className="btn btn-primary btn-sm"
                onClick={() => handleDemoLogin('admin')}
              >
                <KeyRound size={14} /> Demo Admin
              </button>
            </div>
          </div>

          {/* Tab Switcher */}
          <div style={{ display: 'flex', borderBottom: '2px solid var(--color-border)', marginBottom: '1.5rem' }}>
            <button 
              className={`tab-btn ${mode === 'login' ? 'active' : ''}`}
              style={{ flex: 1, textAlign: 'center' }}
              onClick={() => setMode('login')}
            >
              Sign In
            </button>
            <button 
              className={`tab-btn ${mode === 'register' ? 'active' : ''}`}
              style={{ flex: 1, textAlign: 'center' }}
              onClick={() => setMode('register')}
            >
              Create Account
            </button>
          </div>

          {mode === 'login' ? (
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="customer@vedapure.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <label className="form-label">Password</label>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-dark)', cursor: 'pointer' }} onClick={() => showToast('Password reset link sent to email.', 'info')}>
                    Forgot Password?
                  </span>
                </div>
                <input 
                  type="password" 
                  className="form-input" 
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ marginTop: '1rem' }}>
                <span>Sign In</span>
                <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Varsha Ravi"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="name@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Create Password *</label>
                <input 
                  type="password" 
                  className="form-input" 
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-gold btn-block btn-lg" style={{ marginTop: '1rem' }}>
                <span>Create VedaPure Account</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
