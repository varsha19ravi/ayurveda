import React from 'react';
import { Leaf, Award, Heart, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export const TrustBadges = () => {
  const badges = [
    {
      icon: <Leaf size={22} />,
      title: '100% Botanical Ingredients',
      desc: 'Sustainably wild-harvested roots & herbs'
    },
    {
      icon: <Award size={22} />,
      title: 'Ayurvedic Formulations',
      desc: 'Classical 72-hr Taila Pak Vidhi recipes'
    },
    {
      icon: <Heart size={22} />,
      title: 'Cruelty Free & Vegan',
      desc: 'Never tested on animals, zero animal fats'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Quality & Heavy Metal Tested',
      desc: 'Certified NABL lab purity assays'
    },
    {
      icon: <Truck size={22} />,
      title: 'Free Express Shipping',
      desc: 'On all orders above ₹999 pan-India'
    }
  ];

  return (
    <section className="trust-strip-section">
      <div className="container">
        <div className="trust-badges-grid">
          {badges.map((badge, index) => (
            <div key={index} className="trust-card">
              <div className="trust-card-icon">
                {badge.icon}
              </div>
              <div>
                <div className="trust-card-title">{badge.title}</div>
                <div className="trust-card-desc">{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
