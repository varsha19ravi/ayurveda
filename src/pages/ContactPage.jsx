import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Sparkles, 
  Clock, 
  Send, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactPage = () => {
  const { showToast } = useApp();

  const [activeTab, setActiveTab] = useState('support'); // 'support' or 'consultation'
  
  // Support form
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Customer Support',
    orderId: '',
    message: ''
  });
  const [supportSubmitted, setSupportSubmitted] = useState(false);

  // Doctor consultation form
  const [consultForm, setConsultForm] = useState({
    name: '',
    email: '',
    phone: '',
    primaryConcern: 'Skin & Hair',
    preferredSlot: 'Morning (10 AM - 1 PM)',
    notes: ''
  });
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    if (!supportForm.name || !supportForm.email || !supportForm.message) {
      showToast('Please complete all required fields.', 'error');
      return;
    }
    setSupportSubmitted(true);
    showToast('Your message has been received. Our team will respond within 4 hours.', 'success');
  };

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    if (!consultForm.name || !consultForm.phone) {
      showToast('Please provide your name and phone number for the consultation.', 'error');
      return;
    }
    setConsultSubmitted(true);
    showToast('Consultation booked! Our Vaidya team will confirm your video slot via WhatsApp.', 'success');
  };

  return (
    <div className="contact-page" style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-tagline">We Are Here For You</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
            Connect with VedaPure
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            Have questions regarding formulations, your order, or need personalized Ayurvedic guidance? Reach out to our wellness team.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
          
          {/* Left: Contact Info & Support Channels */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
              Direct Support Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: '#FFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-sage-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem' }}>Toll-Free Wellness Helpline</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', marginTop: '2px' }}>1800-420-VEDA (8332) / +91 98200 12345</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '2px' }}>Mon – Sat, 9:00 AM – 7:00 PM IST</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: '#FFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-gold-light)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem' }}>Email Support</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', marginTop: '2px' }}>care@vedapure.com</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '2px' }}>Physicians & support team reply within 4 hours</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: '#FFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#E7F7ED', color: '#1B7F43', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem' }}>WhatsApp Live Assistance</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', marginTop: '2px' }}>+91 98200 12345</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '2px' }}>Instant response for order updates & tracking</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: '#FFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#FAF0E6', color: '#994D1C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem' }}>Kerala Botanical Estate & Apothecary</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', marginTop: '2px' }}>VedaPure Herbals, Wayanad Bio-Reserve, Kerala 673577</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Switchable Form (Support vs Doctor Consultation) */}
          <div style={{ backgroundColor: '#FFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
            
            {/* Form Toggle Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '1rem' }}>
              <button
                className={`btn btn-sm ${activeTab === 'support' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('support')}
              >
                Customer Inquiry
              </button>
              <button
                className={`btn btn-sm ${activeTab === 'consultation' ? 'btn-gold' : 'btn-secondary'}`}
                onClick={() => setActiveTab('consultation')}
              >
                <Calendar size={14} />
                <span>Book Doctor Consult (Free)</span>
              </button>
            </div>

            {activeTab === 'support' ? (
              supportSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-sage-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                    Message Sent Successfully
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', marginBottom: '1.5rem' }}>
                    Thank you, {supportForm.name}. A customer wellness representative has been assigned to your ticket and will respond via email shortly.
                  </p>
                  <button className="btn btn-secondary btn-sm" onClick={() => setSupportSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSupportSubmit}>
                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="e.g. Varsha Ravi"
                        value={supportForm.name}
                        onChange={e => setSupportForm({ ...supportForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        className="form-input" 
                        placeholder="name@example.com"
                        value={supportForm.email}
                        onChange={e => setSupportForm({ ...supportForm, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Phone / Mobile</label>
                      <input 
                        type="tel" 
                        className="form-input" 
                        placeholder="+91 98765 43210"
                        value={supportForm.phone}
                        onChange={e => setSupportForm({ ...supportForm, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Department</label>
                      <select 
                        className="form-select"
                        value={supportForm.department}
                        onChange={e => setSupportForm({ ...supportForm, department: e.target.value })}
                      >
                        <option>Customer Support</option>
                        <option>Product & Dosha Guidance</option>
                        <option>Order & Tracking Assistance</option>
                        <option>Returns & Exchange</option>
                        <option>Bulk & Wholesale Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Order ID (If Applicable)</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. VEDA-2026-9842"
                      value={supportForm.orderId}
                      onChange={e => setSupportForm({ ...supportForm, orderId: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">How can we assist you? *</label>
                    <textarea 
                      className="form-textarea" 
                      rows={4}
                      placeholder="Describe your inquiry or question in detail..."
                      value={supportForm.message}
                      onChange={e => setSupportForm({ ...supportForm, message: e.target.value })}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '0.5rem' }}>
                    <Send size={16} />
                    <span>Send Message to Support</span>
                  </button>
                </form>
              )
            ) : (
              /* Doctor Consultation Booking Form */
              consultSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-gold-light)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                    Consultation Requested!
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', marginBottom: '1.5rem' }}>
                    Thank you, {consultForm.name}. Our Ayurvedic Vaidya team will reach out to {consultForm.phone} with the meeting link for your {consultForm.preferredSlot} slot.
                  </p>
                  <button className="btn btn-secondary btn-sm" onClick={() => setConsultSubmitted(false)}>
                    Book Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleConsultSubmit}>
                  <div style={{ backgroundColor: '#FAF7F2', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    🌿 <strong>100% Complimentary 15-Minute Video Consultation</strong> with an experienced BAMS Ayurvedic Vaidya to analyze your Dosha and craft a personalized wellness ritual.
                  </div>

                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Varsha Ravi"
                      value={consultForm.name}
                      onChange={e => setConsultForm({ ...consultForm, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        className="form-input" 
                        placeholder="+91 98765 43210"
                        value={consultForm.phone}
                        onChange={e => setConsultForm({ ...consultForm, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input 
                        type="email" 
                        className="form-input" 
                        placeholder="name@example.com"
                        value={consultForm.email}
                        onChange={e => setConsultForm({ ...consultForm, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Primary Wellness Concern</label>
                      <select 
                        className="form-select"
                        value={consultForm.primaryConcern}
                        onChange={e => setConsultForm({ ...consultForm, primaryConcern: e.target.value })}
                      >
                        <option>Hair Fall & Scalp Health</option>
                        <option>Skin Radiance & Pigmentation</option>
                        <option>Stress, Anxiety & Sleep</option>
                        <option>Digestion & Gut Metabolism</option>
                        <option>Joint Pain & Mobility</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Preferred Time Slot</label>
                      <select 
                        className="form-select"
                        value={consultForm.preferredSlot}
                        onChange={e => setConsultForm({ ...consultForm, preferredSlot: e.target.value })}
                      >
                        <option>Morning (10 AM - 1 PM IST)</option>
                        <option>Afternoon (2 PM - 5 PM IST)</option>
                        <option>Evening (5 PM - 8 PM IST)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Any specific questions or symptoms?</label>
                    <textarea 
                      className="form-textarea" 
                      rows={3}
                      placeholder="Briefly describe your symptoms or current lifestyle..."
                      value={consultForm.notes}
                      onChange={e => setConsultForm({ ...consultForm, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-gold btn-block">
                    <Calendar size={16} />
                    <span>Confirm Free Consultation Booking</span>
                  </button>
                </form>
              )
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
