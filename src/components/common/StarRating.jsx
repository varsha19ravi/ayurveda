import React from 'react';
import { Star } from 'lucide-react';

export const StarRating = ({ rating = 5, totalStars = 5, size = 16, showNumber = false, reviewsCount = null }) => {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', color: 'var(--color-gold)' }}>
        {[...Array(totalStars)].map((_, i) => {
          const fillPercentage = Math.max(0, Math.min(100, (rating - i) * 100));
          return (
            <span key={i} style={{ position: 'relative', display: 'inline-block', width: size, height: size }}>
              {/* Background grey star */}
              <Star size={size} fill="#E5DFD5" stroke="#E5DFD5" style={{ position: 'absolute', top: 0, left: 0 }} />
              {/* Foreground gold fill */}
              {fillPercentage > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: `${fillPercentage}%`,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    color: 'var(--color-gold)'
                  }}
                >
                  <Star size={size} fill="currentColor" stroke="currentColor" />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {showNumber && (
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-main)', marginLeft: '4px' }}>
          {Number(rating).toFixed(1)}
        </span>
      )}
      {reviewsCount !== null && (
        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginLeft: '2px' }}>
          ({reviewsCount})
        </span>
      )}
    </div>
  );
};
