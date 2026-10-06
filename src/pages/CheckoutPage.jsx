import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ShieldCheck, 
  Lock, 
  Truck, 
  CreditCard, 
  QrCode, 
  Building2, 
  Banknote, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CheckoutPage = () => {
  const { 
    cartItemsDetailed, 
    cartSubtotal, 
    cartDiscount, 
    cartShipping, 
    cartTaxes, 
    cartTotal, 
    currentUser, 
    createOrder, 
    navigateTo,
    showToast 
  } = useApp();

  const [currentStep, setCurrentStep] = useState(1); // 1: Address, 2: Delivery, 3: Payment

  // Address form state
  const defaultSaved = currentUser?.savedAddresses?.find(a => a.isDefault) || currentUser?.savedAddresses?.[0];

  const [addressForm, setAddressForm] = useState({
    fullName: defaultSaved?.fullName || currentUser?.name || '',
    email: defaultSaved?.email || currentUser?.email || '',
    phone: defaultSaved?.phone || currentUser?.phone || '',
    addressLine: defaultSaved?.addressLine || '',
    city: defaultSaved?.city || 'Bengaluru',
    state: defaultSaved?.state || 'Karnataka',
    pincode: defaultSaved?.pincode || '560066',
    saveForFuture: true
  });

  // Shipping method
  const [shippingMethod, setShippingMethod] = useState('express'); // 'express' (Free) or 'priority' (₹150)

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState('UPI'); // 'UPI', 'Card', 'NetBanking', 'COD'
  const [upiId, setUpiId] = useState('user@okaxis');
  const [cardData, setCardData] = useState({ number: '4532 •••• •••• 8921', name: currentUser?.name || 'Varsha Ravi', expiry: '08/29', cvv: '•••' });
  const [bankName, setBankName] = useState('HDFC Bank');
  const [isProcessing, setIsProcessing] = useState(false);

  if (cartItemsDetailed.length === 0 && !isProcessing) {
    return (
      <div className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          Your bag is empty.
        </h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
          Please add items to your cart before proceeding to checkout.
        </p>
        <button className="btn btn-primary" onClick={() => navigateTo('shop')}>
          Browse Store Catalog
        </button>
      </div>
    );
  }

  const handleNextStep = (e) => {
    e?.preventDefault();
    if (currentStep === 1) {
      if (!addressForm.fullName || !addressForm.phone || !addressForm.addressLine || !addressForm.pincode) {
        showToast('Please complete all required shipping address fields.', 'error');
        return;
      }
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === 2) {
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);

    setTimeout(() => {
      const order = createOrder({
        shippingAddress: addressForm,
        shippingMethod,
        paymentMethod: paymentMethod === 'UPI' ? `UPI (${upiId})` : paymentMethod === 'Card' ? 'Credit/Debit Card' : paymentMethod === 'NetBanking' ? `Net Banking (${bankName})` : 'Cash on Delivery'
      });

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log(err);
      }

      setIsProcessing(false);
      navigateTo('confirmation', { orderId: order.id });
    }, 1200);
  };

  return (
    <div className="checkout-page" style={{ padding: '2.5rem 0 6rem 0' }}>
      <div className="container">
        
        {/* Step Progress Bar */}
        <div style={{ maxWidth: '650px', margin: '0 auto 3rem auto' }}>
          <div className="checkout-steps-bar">
            
            <div className={`checkout-step-item ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'done' : ''}`}>
              <div className="step-circle">{currentStep > 1 ? '✓' : '1'}</div>
              <span>Shipping Address</span>
            </div>

            <div style={{ height: '2px', flex: 1, backgroundColor: currentStep >= 2 ? 'var(--color-primary)' : 'var(--color-border)', margin: '0 12px' }} />

            <div className={`checkout-step-item ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'done' : ''}`}>
              <div className="step-circle">{currentStep > 2 ? '✓' : '2'}</div>
              <span>Delivery Method</span>
            </div>

            <div style={{ height: '2px', flex: 1, backgroundColor: currentStep >= 3 ? 'var(--color-primary)' : 'var(--color-border)', margin: '0 12px' }} />

            <div className={`checkout-step-item ${currentStep >= 3 ? 'active' : ''}`}>
              <div className="step-circle">3</div>
              <span>Payment & Place Order</span>
            </div>

          </div>
        </div>

        {/* Checkout Main Content */}
        <div className="grid-2" style={{ gridTemplateColumns: '1.4fr 0.8fr', gap: '3.5rem', alignItems: 'start' }}>
          
          {/* Left: Step Forms */}
          <div>
            
            {/* STEP 1: ADDRESS */}
            {currentStep === 1 && (
              <div style={{ backgroundColor: '#FFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                  1. Shipping & Contact Details
                </h2>

                {/* Pre-fill from saved addresses if available */}
                {currentUser?.savedAddresses && currentUser.savedAddresses.length > 0 && (
                  <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#FAF7F2', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Select a Saved Address:
                    </span>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {currentUser.savedAddresses.map((addr) => (
                        <button
                          key={addr.id}
                          type="button"
                          className={`btn btn-sm ${addressForm.addressLine === addr.addressLine ? 'btn-primary' : 'btn-secondary'}`}
                          onClick={() => {
                            setAddressForm({
                              ...addressForm,
                              fullName: addr.fullName,
                              phone: addr.phone,
                              email: addr.email,
                              addressLine: addr.addressLine,
                              city: addr.city,
                              state: addr.state,
                              pincode: addr.pincode
                            });
                          }}
                        >
                          {addr.type || 'Saved'}: {addr.addressLine.slice(0, 22)}...
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <form onSubmit={handleNextStep}>
                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="e.g. Varsha Ravi"
                        value={addressForm.fullName}
                        onChange={e => setAddressForm({ ...addressForm, fullName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mobile Number *</label>
                      <input 
                        type="tel" 
                        className="form-input" 
                        placeholder="+91 98765 43210"
                        value={addressForm.phone}
                        onChange={e => setAddressForm({ ...addressForm, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address (For Invoice & Tracking updates) *</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      placeholder="name@example.com"
                      value={addressForm.email}
                      onChange={e => setAddressForm({ ...addressForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Street Address / House / Apartment *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Villa 42, Palm Meadows, Whitefield"
                      value={addressForm.addressLine}
                      onChange={e => setAddressForm({ ...addressForm, addressLine: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid-3" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">City *</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        value={addressForm.city}
                        onChange={e => setAddressForm({ ...addressForm, city: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">State *</label>
                      <select 
                        className="form-select"
                        value={addressForm.state}
                        onChange={e => setAddressForm({ ...addressForm, state: e.target.value })}
                        required
                      >
                        <option>Karnataka</option>
                        <option>Maharashtra</option>
                        <option>Delhi NCR</option>
                        <option>Tamil Nadu</option>
                        <option>Kerala</option>
                        <option>Telangana</option>
                        <option>Gujarat</option>
                        <option>West Bengal</option>
                        <option>Rajasthan</option>
                        <option>Uttar Pradesh</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">PIN Code *</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="560066"
                        maxLength={6}
                        value={addressForm.pincode}
                        onChange={e => setAddressForm({ ...addressForm, pincode: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ marginTop: '1rem' }}>
                    <span>Continue to Delivery Options</span>
                    <ChevronRight size={18} />
                  </button>
                </form>
              </div>
            )}

            {/* STEP 2: DELIVERY METHOD */}
            {currentStep === 2 && (
              <div style={{ backgroundColor: '#FFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)' }}>
                    2. Select Delivery Speed
                  </h2>
                  <button className="btn btn-secondary btn-sm" onClick={() => setCurrentStep(1)}>
                    Edit Address
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  <label 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      border: `2px solid ${shippingMethod === 'express' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                      backgroundColor: shippingMethod === 'express' ? '#FAF7F2' : '#FFF',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <input 
                        type="radio" 
                        name="shipping-radio" 
                        checked={shippingMethod === 'express'}
                        onChange={() => setShippingMethod('express')}
                        style={{ accentColor: 'var(--color-primary)', width: '18px', height: '18px' }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1rem' }}>
                          Standard Express Delivery (3–5 Business Days)
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                          Dispatched via BlueDart / Delhivery directly from Kerala Apothecary
                        </div>
                      </div>
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--color-success)', fontSize: '1rem' }}>
                      FREE
                    </span>
                  </label>

                  <label 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      border: `2px solid ${shippingMethod === 'priority' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                      backgroundColor: shippingMethod === 'priority' ? '#FAF7F2' : '#FFF',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <input 
                        type="radio" 
                        name="shipping-radio" 
                        checked={shippingMethod === 'priority'}
                        onChange={() => setShippingMethod('priority')}
                        style={{ accentColor: 'var(--color-primary)', width: '18px', height: '18px' }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1rem' }}>
                          Priority Air Express (24–48 Hours)
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                          Guaranteed priority airplane cargo with tamper-proof wooden seal box
                        </div>
                      </div>
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1rem' }}>
                      ₹150
                    </span>
                  </label>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button className="btn btn-secondary" onClick={() => setCurrentStep(1)}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleNextStep}>
                    <span>Continue to Payment</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: PAYMENT METHOD */}
            {currentStep === 3 && (
              <div style={{ backgroundColor: '#FFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)' }}>
                    3. Choose Payment Method
                  </h2>
                  <button className="btn btn-secondary btn-sm" onClick={() => setCurrentStep(2)}>
                    Change Delivery
                  </button>
                </div>

                {/* Payment Options Accordion */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  
                  {/* Option 1: UPI */}
                  <div style={{ border: `1.5px solid ${paymentMethod === 'UPI' ? 'var(--color-primary)' : 'var(--color-border)'}`, borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <div 
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem', backgroundColor: paymentMethod === 'UPI' ? '#FAF7F2' : '#FFF', cursor: 'pointer' }}
                      onClick={() => setPaymentMethod('UPI')}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <QrCode size={20} color="var(--color-primary)" />
                        <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>UPI / Instant QR (Google Pay, PhonePe, Paytm)</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', background: 'var(--color-sage-light)', color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>Fastest & Zero Fee</span>
                    </div>

                    {paymentMethod === 'UPI' && (
                      <div style={{ padding: '1.25rem', borderTop: '1px solid var(--color-border-light)', backgroundColor: '#FFF' }}>
                        <div className="form-group">
                          <label className="form-label">Enter Virtual Payment Address (VPA / UPI ID)</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            value={upiId}
                            onChange={e => setUpiId(e.target.value)}
                            placeholder="mobile@upi or user@okaxis"
                          />
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                          ✓ A payment request will be sent to your UPI app upon placing the order.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Option 2: Card */}
                  <div style={{ border: `1.5px solid ${paymentMethod === 'Card' ? 'var(--color-primary)' : 'var(--color-border)'}`, borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <div 
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem', backgroundColor: paymentMethod === 'Card' ? '#FAF7F2' : '#FFF', cursor: 'pointer' }}
                      onClick={() => setPaymentMethod('Card')}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <CreditCard size={20} color="var(--color-primary)" />
                        <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>Credit / Debit Card</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Visa, Mastercard, RuPay, Amex</span>
                    </div>

                    {paymentMethod === 'Card' && (
                      <div style={{ padding: '1.25rem', borderTop: '1px solid var(--color-border-light)', backgroundColor: '#FFF' }}>
                        <div className="form-group">
                          <label className="form-label">Card Number</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            value={cardData.number}
                            onChange={e => setCardData({ ...cardData, number: e.target.value })}
                          />
                        </div>
                        <div className="grid-2" style={{ gap: '1rem' }}>
                          <div className="form-group">
                            <label className="form-label">Valid Thru (MM/YY)</label>
                            <input 
                              type="text" 
                              className="form-input" 
                              value={cardData.expiry}
                              onChange={e => setCardData({ ...cardData, expiry: e.target.value })}
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">CVV</label>
                            <input 
                              type="password" 
                              className="form-input" 
                              value={cardData.cvv}
                              maxLength={4}
                              onChange={e => setCardData({ ...cardData, cvv: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Option 3: Net Banking */}
                  <div style={{ border: `1.5px solid ${paymentMethod === 'NetBanking' ? 'var(--color-primary)' : 'var(--color-border)'}`, borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <div 
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem', backgroundColor: paymentMethod === 'NetBanking' ? '#FAF7F2' : '#FFF', cursor: 'pointer' }}
                      onClick={() => setPaymentMethod('NetBanking')}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Building2 size={20} color="var(--color-primary)" />
                        <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>Net Banking</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>All Major Indian Banks</span>
                    </div>

                    {paymentMethod === 'NetBanking' && (
                      <div style={{ padding: '1.25rem', borderTop: '1px solid var(--color-border-light)', backgroundColor: '#FFF' }}>
                        <div className="form-group">
                          <label className="form-label">Select Your Bank</label>
                          <select className="form-select" value={bankName} onChange={e => setBankName(e.target.value)}>
                            <option>HDFC Bank</option>
                            <option>ICICI Bank</option>
                            <option>State Bank of India (SBI)</option>
                            <option>Axis Bank</option>
                            <option>Kotak Mahindra Bank</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Option 4: Cash on Delivery */}
                  <div style={{ border: `1.5px solid ${paymentMethod === 'COD' ? 'var(--color-primary)' : 'var(--color-border)'}`, borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <div 
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem', backgroundColor: paymentMethod === 'COD' ? '#FAF7F2' : '#FFF', cursor: 'pointer' }}
                      onClick={() => setPaymentMethod('COD')}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Banknote size={20} color="var(--color-primary)" />
                        <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>Cash on Delivery (COD)</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Pay cash at doorstep</span>
                    </div>
                  </div>

                </div>

                {/* Final Place Order Button */}
                <button 
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                >
                  <Lock size={18} />
                  <span>{isProcessing ? 'Confirming with Kerala Apothecary...' : `Pay & Place Order • ₹${(cartTotal + (shippingMethod === 'priority' ? 150 : 0)).toLocaleString('en-IN')}`}</span>
                </button>
              </div>
            )}

          </div>

          {/* Right: Order Summary Sidebar */}
          <div style={{ backgroundColor: '#FFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
              Order Review ({cartItemsDetailed.length} {cartItemsDetailed.length === 1 ? 'Item' : 'Items'})
            </h3>

            {/* Compact Item List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem', maxHeight: '240px', overflowY: 'auto' }}>
              {cartItemsDetailed.map((item) => (
                <div key={item.productId} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <img src={item.product.image} alt={item.product.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)', lineHeight: '1.25' }}>{item.product.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Qty: {item.quantity} • {item.volume}</div>
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            {/* Price Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem', borderTop: '1px solid var(--color-border-light)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                <span>Subtotal</span>
                <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>

              {cartDiscount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-success)', fontWeight: 600 }}>
                  <span>Discount</span>
                  <span>- ₹{cartDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                <span>Delivery</span>
                <span>{shippingMethod === 'priority' ? '₹150 (Priority Air)' : (cartShipping === 0 ? 'FREE' : `₹${cartShipping}`)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                <span>Taxes (5% GST)</span>
                <span>₹{cartTaxes.toLocaleString('en-IN')}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', borderTop: '2px solid var(--color-border)', paddingTop: '0.75rem', marginTop: '0.25rem' }}>
                <span>Total Due</span>
                <span>₹{(cartTotal + (shippingMethod === 'priority' ? 150 : 0)).toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Trust Marks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.775rem', color: 'var(--color-text-muted)', backgroundColor: '#FAF7F2', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="var(--color-gold-dark)" /> 100% Certified Authentic Formulations
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Lock size={16} color="var(--color-primary)" /> Secure 256-Bit SSL Encrypted Checkout
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
