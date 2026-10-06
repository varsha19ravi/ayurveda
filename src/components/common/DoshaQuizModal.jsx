import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, RotateCcw, ShoppingBag, Heart } from 'lucide-react';
import { QUIZ_QUESTIONS, DOSHA_RESULTS } from '../../data/quizQuestions';
import { useApp } from '../../context/AppContext';

export const DoshaQuizModal = () => {
  const { isDoshaQuizOpen, setIsDoshaQuizOpen, products, addToCart, navigateTo, updateProfile, currentUser } = useApp();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [resultDosha, setResultDosha] = useState(null);

  if (!isDoshaQuizOpen) return null;

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (doshaType) => {
    const updatedAnswers = { ...answers, [currentStep]: doshaType };
    setAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate winner dosha
      const counts = { vata: 0, pitta: 0, kapha: 0 };
      Object.values(updatedAnswers).forEach(d => {
        if (counts[d] !== undefined) counts[d]++;
      });

      let winner = 'vata';
      let maxCount = -1;
      Object.keys(counts).forEach(key => {
        if (counts[key] > maxCount) {
          maxCount = counts[key];
          winner = key;
        }
      });

      setResultDosha(winner);
      if (currentUser) {
        updateProfile({ doshaProfile: DOSHA_RESULTS[winner].name });
      }
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setResultDosha(null);
  };

  const resultData = resultDosha ? DOSHA_RESULTS[resultDosha] : null;
  const recommendedProducts = resultData
    ? products.filter(p => resultData.recommendedProductIds.includes(p.id))
    : [];

  return (
    <div className="modal-backdrop" onClick={() => setIsDoshaQuizOpen(false)}>
      <div 
        className="modal-content-box"
        style={{ maxWidth: '720px', padding: '2.5rem' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={() => setIsDoshaQuizOpen(false)}>
          <X size={20} />
        </button>

        {!resultDosha ? (
          <div>
            {/* Step Counter Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="brand-emblem" style={{ width: '28px', height: '28px' }}>
                  <Sparkles size={14} />
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)', letterSpacing: '0.1em' }}>
                  Ayurvedic Prakriti Assessment
                </span>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{ height: '6px', background: '#EAE4D8', borderRadius: '3px', overflow: 'hidden', marginBottom: '2rem' }}>
              <div 
                style={{ 
                  height: '100%', 
                  width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%`, 
                  background: 'linear-gradient(90deg, var(--color-sage) 0%, var(--color-gold) 100%)',
                  transition: 'width 0.3s ease'
                }} 
              />
            </div>

            {/* Question */}
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--color-primary)', marginBottom: '1.75rem', lineHeight: '1.35' }}>
              {currentQuestion.question}
            </h3>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {currentQuestion.options.map((opt, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectOption(opt.dosha)}
                  style={{
                    padding: '1.1rem 1.4rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    backgroundColor: answers[currentStep] === opt.dosha ? 'var(--color-gold-light)' : '#FFF',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                  onMouseEnter={(e) => {
                    if (answers[currentStep] !== opt.dosha) {
                      e.currentTarget.style.borderColor = 'var(--color-gold)';
                      e.currentTarget.style.backgroundColor = '#FAF7F2';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (answers[currentStep] !== opt.dosha) {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.backgroundColor = '#FFF';
                    }
                  }}
                >
                  <div>
                    <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: 500, color: 'var(--color-text-main)' }}>
                      {opt.text}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-sage)', fontWeight: 600, marginTop: '3px', display: 'block' }}>
                      {opt.label}
                    </span>
                  </div>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid var(--color-border)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {answers[currentStep] === opt.dosha && (
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-gold)' }} />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {currentStep > 0 && (
              <button 
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '1.5rem' }}
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Back to Previous
              </button>
            )}
          </div>
        ) : (
          /* Result View */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-gold-light)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <Sparkles size={32} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)', letterSpacing: '0.12em' }}>
                Your Unique Prakriti Analysis
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', marginTop: '0.25rem' }}>
                {resultData.name}
              </h2>
              <div style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-sage)' }}>
                "{resultData.tagline}"
              </div>
            </div>

            <div style={{ backgroundColor: '#FAF7F2', borderRadius: 'var(--radius-md)', padding: '1.5rem', border: '1px solid var(--color-border)', marginBottom: '1.75rem' }}>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-main)', lineHeight: '1.65', marginBottom: '1rem' }}>
                {resultData.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', borderTop: '1px solid var(--color-border-light)', paddingTop: '1rem' }}>
                <div>
                  <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-gold-dark)', display: 'block', marginBottom: '3px' }}>
                    🥗 Dietary Guidance:
                  </strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    {resultData.recommendations.diet}
                  </span>
                </div>
                <div>
                  <strong style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-gold-dark)', display: 'block', marginBottom: '3px' }}>
                    🌿 Healing Botanicals:
                  </strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    {resultData.recommendations.herbs}
                  </span>
                </div>
              </div>
            </div>

            {/* Tailored Product Recommendations */}
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Your Personalized Ayurvedic Ritual Kit
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {recommendedProducts.map(prod => (
                <div 
                  key={prod.id}
                  style={{
                    backgroundColor: '#FFF',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <img 
                    src={prod.image} 
                    alt={prod.name}
                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem' }}
                  />
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.25rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {prod.name}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-gold-dark)', marginTop: 'auto', marginBottom: '0.65rem' }}>
                    ₹{prod.price}
                  </div>
                  <button 
                    className="btn btn-primary btn-sm btn-block"
                    onClick={() => {
                      addToCart(prod, 1, prod.volume, true);
                      setIsDoshaQuizOpen(false);
                    }}
                  >
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {/* Modal Bottom Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={handleRestart}
              >
                <RotateCcw size={15} /> Retake Quiz
              </button>

              <button 
                className="btn btn-gold"
                onClick={() => {
                  setIsDoshaQuizOpen(false);
                  navigateTo('shop');
                }}
              >
                <span>Explore Full Catalog</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
