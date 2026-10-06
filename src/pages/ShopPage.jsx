import React, { useState, useMemo } from 'react';
import { 
  SlidersHorizontal, 
  X, 
  ChevronDown, 
  Grid3X3, 
  LayoutGrid, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/common/ProductCard';

export const ShopPage = () => {
  const { products, categories, pageParams, navigateTo } = useApp();

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState(pageParams?.category || 'all');
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [selectedDoshas, setSelectedDoshas] = useState([]);
  const [priceRange, setPriceRange] = useState(3000);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync category from pageParams if changed
  React.useEffect(() => {
    if (pageParams?.category) {
      setSelectedCategory(pageParams.category);
    }
  }, [pageParams?.category]);

  const allConcerns = [
    'Hair Fall',
    'Dandruff',
    'Dullness',
    'Pigmentation',
    'Aging & Fine Lines',
    'Acne & Blemishes',
    'Stress & Sleep',
    'Joint Pain',
    'Digestion & Detox'
  ];

  const handleToggleConcern = (concern) => {
    setSelectedConcerns(prev => 
      prev.includes(concern) ? prev.filter(c => c !== concern) : [...prev, concern]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedConcerns([]);
    setSelectedDoshas([]);
    setPriceRange(3000);
    setOnlyInStock(false);
    setMinRating(0);
    setSortBy('featured');
  };

  // Filter & Sorting Logic
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // 1. Category
    if (selectedCategory !== 'all') {
      list = list.filter(p => p.category === selectedCategory);
    }

    // 2. Concerns
    if (selectedConcerns.length > 0) {
      list = list.filter(p => {
        if (!p.concern) return false;
        return selectedConcerns.some(c => p.concern.includes(c));
      });
    }

    // 3. Price
    list = list.filter(p => p.price <= priceRange);

    // 4. In Stock
    if (onlyInStock) {
      list = list.filter(p => p.stock > 0);
    }

    // 5. Rating
    if (minRating > 0) {
      list = list.filter(p => p.rating >= minRating);
    }

    // 6. Sorting
    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        list.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      case 'newest':
        list.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'featured':
      default:
        // Keep default curated order
        break;
    }

    return list;
  }, [products, selectedCategory, selectedConcerns, selectedDoshas, priceRange, onlyInStock, minRating, sortBy]);

  const hasActiveFilters = selectedCategory !== 'all' || selectedConcerns.length > 0 || priceRange < 3000 || onlyInStock || minRating > 0;

  return (
    <div className="shop-page" style={{ padding: '3rem 0 5rem 0' }}>
      <div className="container">
        
        {/* Header Banner */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tagline">Classical Formulations</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
            All Ayurvedic Remedies & Elixirs
          </h1>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
            Browse our pharmacopeia of 100% natural, AYUSH-certified hair oils, face treatments, adaptogens, and traditional body remedies.
          </p>
        </div>

        {/* Shop Layout */}
        <div className="shop-layout">
          
          {/* Left Sidebar Filter */}
          <aside className="shop-sidebar">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--color-primary)', fontSize: '1rem' }}>
                <SlidersHorizontal size={18} />
                <span>Filters</span>
              </div>
              {hasActiveFilters && (
                <button 
                  onClick={handleResetFilters}
                  style={{ background: 'transparent', color: 'var(--color-danger)', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                >
                  <RotateCcw size={12} /> Reset All
                </button>
              )}
            </div>

            {/* Filter 1: Categories */}
            <div className="filter-group">
              <div className="filter-group-title">Category</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label className="filter-checkbox-item">
                  <input 
                    type="radio" 
                    name="category-radio"
                    checked={selectedCategory === 'all'}
                    onChange={() => setSelectedCategory('all')}
                  />
                  <span>All Categories ({products.length})</span>
                </label>
                {categories.map((cat) => {
                  const count = products.filter(p => p.category === cat.slug).length;
                  return (
                    <label key={cat.id} className="filter-checkbox-item">
                      <input 
                        type="radio" 
                        name="category-radio"
                        checked={selectedCategory === cat.slug}
                        onChange={() => setSelectedCategory(cat.slug)}
                      />
                      <span>{cat.name} ({count})</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Filter 2: Skin & Hair Concern */}
            <div className="filter-group">
              <div className="filter-group-title">Concern</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '200px', overflowY: 'auto' }}>
                {allConcerns.map((concern) => (
                  <label key={concern} className="filter-checkbox-item">
                    <input 
                      type="checkbox"
                      checked={selectedConcerns.includes(concern)}
                      onChange={() => handleToggleConcern(concern)}
                    />
                    <span>{concern}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter 3: Price Range Slider */}
            <div className="filter-group">
              <div className="filter-group-title">
                <span>Max Price: ₹{priceRange}</span>
              </div>
              <input 
                type="range"
                min="400"
                max="3000"
                step="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-primary)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                <span>₹400</span>
                <span>₹3,000</span>
              </div>
            </div>

            {/* Filter 4: Availability */}
            <div className="filter-group">
              <div className="filter-group-title">Stock Status</div>
              <label className="filter-checkbox-item">
                <input 
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                />
                <span>In Stock Only</span>
              </label>
            </div>

            {/* Filter 5: Minimum Rating */}
            <div className="filter-group">
              <div className="filter-group-title">Customer Rating</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[0, 4.8, 4.5].map((rate) => (
                  <label key={rate} className="filter-checkbox-item">
                    <input 
                      type="radio" 
                      name="rating-radio"
                      checked={minRating === rate}
                      onChange={() => setMinRating(rate)}
                    />
                    <span>{rate === 0 ? 'All Ratings' : `${rate} Stars & Above`}</span>
                  </label>
                ))}
              </div>
            </div>

          </aside>

          {/* Right Product Grid Area */}
          <main>
            
            {/* Top Toolbar */}
            <div className="shop-toolbar">
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                Showing <strong style={{ color: 'var(--color-primary)' }}>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'remedy' : 'remedies'}
              </div>

              {/* Sort By Dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                  Sort By:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="form-select"
                  style={{ width: 'auto', padding: '0.45rem 1rem', fontSize: '0.85rem' }}
                >
                  <option value="featured">Featured Collection</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="discount">Biggest Discount</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>
            </div>

            {/* Active Filter Chips */}
            {hasActiveFilters && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Active Filters:</span>
                
                {selectedCategory !== 'all' && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'var(--color-gold-light)', color: 'var(--color-gold-dark)', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600 }}>
                    Category: {categories.find(c => c.slug === selectedCategory)?.name || selectedCategory}
                    <X size={13} style={{ cursor: 'pointer' }} onClick={() => setSelectedCategory('all')} />
                  </span>
                )}

                {selectedConcerns.map(c => (
                  <span key={c} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'var(--color-sage-light)', color: 'var(--color-primary)', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600 }}>
                    {c}
                    <X size={13} style={{ cursor: 'pointer' }} onClick={() => handleToggleConcern(c)} />
                  </span>
                ))}

                {priceRange < 3000 && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'var(--color-bg-secondary)', color: 'var(--color-text-main)', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600 }}>
                    Under ₹{priceRange}
                    <X size={13} style={{ cursor: 'pointer' }} onClick={() => setPriceRange(3000)} />
                  </span>
                )}

                <button 
                  onClick={handleResetFilters}
                  style={{ background: 'transparent', color: 'var(--color-text-light)', fontSize: '0.75rem', textDecoration: 'underline', cursor: 'pointer', marginLeft: '0.5rem' }}
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '5rem 2rem', backgroundColor: '#FFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#FAF7F2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <Sparkles size={28} color="var(--color-sage)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                  No remedies found matching your selected filters.
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', marginBottom: '1.5rem', maxWidth: '450px', margin: '0 auto 1.5rem auto' }}>
                  Try resetting some filters or explore our complete catalog of classical Ayurvedic preparations.
                </p>
                <button className="btn btn-primary" onClick={handleResetFilters}>
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
};
