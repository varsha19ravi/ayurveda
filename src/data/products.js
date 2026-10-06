export const PRODUCTS = [
  {
    id: 'prod-01',
    slug: 'kumkumadi-miraculous-beauty-oil',
    name: 'Kumkumadi Miraculous Beauty Fluid',
    sanskritName: 'कुङ्कुमादि तैलम् (Kumkumadi Tailam)',
    subtitle: '100% Ayurvedic Overnight Radiance & Pigmentation Remedy',
    category: 'skin-care',
    categoryName: 'Skin Care',
    productType: 'Facial Oil',
    concern: ['Dullness', 'Pigmentation', 'Aging & Fine Lines', 'Dry Skin'],
    doshaEffect: 'Vata & Pitta Balancing',
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    rating: 4.9,
    reviewsCount: 348,
    sku: 'VP-SKN-001',
    stock: 28,
    lowStockThreshold: 10,
    inStock: true,
    badge: 'Best Seller',
    image: '/images/kumkumadi.jpg',
    galleryImages: [
      '/images/kumkumadi.jpg',
      '/images/hero.jpg',
      '/images/harvest.jpg'
    ],
    shortDescription: 'Formulated with pure Grade-A Kashmiri Saffron, Indian Sandalwood, and 24 classical herbs in goat milk & sesame base for radiant, spot-free skin.',
    description: 'VedaPure Kumkumadi Miraculous Beauty Fluid is handcrafted following the authentic 2000-year-old Ayurvedic classical recipe from Ashtanga Hridaya. Infused with pure Kashmiri Mogra Saffron, Red Sandalwood, Lotus stamen, and Licorice roots slowly simmered in cold-pressed Sesame oil and organic goat milk for 72 hours. This deeply restorative elixir penetrates into the deeper Dhatus (skin tissues) to diminish dark spots, fade stubborn hyperpigmentation, refine pore texture, and impart a timeless luminescent golden glow.',
    volume: '30 ml / 1.0 fl. oz.',
    ingredientsList: 'Sesamum Indicum (Sesame) Seed Oil, Crocus Sativus (Kashmiri Saffron) Stigma, Santalum Album (Indian Sandalwood) Wood Extract, Rubia Cordifolia (Manjistha) Stem, Glycyrrhiza Glabra (Yashtimadhu) Root, Nelumbo Nucifera (Lotus) Flower, Vetiveria Zizanioides (Vetiver) Root, Ficus Benghalensis Bark, Goat Milk (Aja Ksheera), Rosa Damascena Flower Extract.',
    keyIngredients: [
      {
        name: 'Kashmiri Saffron (Kumkuma)',
        benefit: 'Brightens tone, fades dark spots, restores natural golden luminescence',
        icon: 'Sparkles'
      },
      {
        name: 'Red Sandalwood (Rakta Chandana)',
        benefit: 'Cools irritated skin, refines pores, and evens out hyperpigmentation',
        icon: 'Feather'
      },
      {
        name: 'Manjistha (Indian Madder)',
        benefit: 'Powerful blood purifier that detoxifies skin cells and calms blemishes',
        icon: 'Droplet'
      },
      {
        name: 'Pure Cold-Pressed Sesame & Goat Milk',
        benefit: 'Carries active botanical extracts deep into cellular layers for lasting hydration',
        icon: 'Heart'
      }
    ],
    benefits: [
      'Visibly reduces stubborn hyperpigmentation, sun damage, and age spots within 21 days',
      'Provides intense overnight hydration and locks in a dewy, youthful moisture barrier',
      'Minimizes fine lines, enhances skin elasticity, and promotes cell regeneration',
      'Free from mineral oils, parabens, synthetic fragrances, and silicones',
      'Certified 100% Ayurvedic formulation under classical AYUSH guidelines'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Cleanse & Tone',
        desc: 'Wash face with a gentle herbal cleanser. Spritz pure Kannauj Rose Water onto damp face.'
      },
      {
        step: 2,
        title: 'Dispense 3-4 Drops',
        desc: 'Take 3-4 drops of Kumkumadi Fluid on warm fingertips and press gently into face and neck.'
      },
      {
        step: 3,
        title: 'Upward Massage Ritual',
        desc: 'Massage in gentle upward circular motions for 2-3 minutes. Leave overnight for maximum absorption.'
      }
    ],
    whoIsItFor: 'Ideal for all skin types, especially dry, dull, pigmented, normal, and mature skin. Recommended for daily evening use.',
    ayurvedicProperties: {
      dosha: 'Balances Vata (dryness) and Pitta (redness/pigmentation)',
      rasa: 'Madhura (Sweet), Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Snigdha (Unctuous), Guru (Nourishing)',
      virya: 'Sheeta (Cooling)',
      vipaka: 'Madhura (Nourishing post-digestive effect)'
    },
    certifications: [
      'AYUSH Premium Mark Certified',
      '100% Natural Classical Formula',
      'Cruelty Free & Leaping Bunny Approved',
      'GMP Certified Clean Facility',
      'Dermatologically Tested'
    ],
    frequentlyBoughtTogether: ['prod-02', 'prod-05'],
    reviews: [
      {
        id: 'rev-01',
        userName: 'Pooja Sharma',
        rating: 5,
        date: '14 days ago',
        verified: true,
        title: 'Real Kashmiri saffron glow in 2 weeks!',
        comment: 'I was skeptical because many brands sell fake yellow scented oil. But VedaPure Kumkumadi is the real deal! The natural saffron aroma is heavenly, and my acne scars and pigmentation around cheeks have noticeably faded.',
        helpful: 42
      },
      {
        id: 'rev-02',
        userName: 'Aarav Mehta',
        rating: 5,
        date: '1 month ago',
        verified: true,
        title: 'Luxurious texture, not greasy at all',
        comment: 'Absorbs surprisingly well into the skin. I apply 3 drops every night before bed. Wake up with plump, glowing skin without any greasiness.',
        helpful: 29
      },
      {
        id: 'rev-03',
        userName: 'Dr. Sunita K.',
        rating: 5,
        date: '2 months ago',
        verified: true,
        title: 'Authentic Taila Pak Vidhi formulation',
        comment: 'As an Ayurvedic practitioner, I inspect formulations closely. The herb-to-oil decoction ratio and purity of raw Kashmiri saffron here is exceptional.',
        helpful: 67
      }
    ]
  },
  {
    id: 'prod-02',
    slug: 'bhringraj-amla-hair-growth-oil',
    name: 'Bhringraj & Amla Intensive Hair Growth Oil',
    sanskritName: 'भृङ्गराज केश तैलम् (Bhringraj Kesh Tailam)',
    subtitle: 'Keshya Scalp Elixir for Hair Fall Control & New Growth',
    category: 'hair-care',
    categoryName: 'Hair Care',
    productType: 'Hair Oil',
    concern: ['Hair Fall', 'Dandruff', 'Premature Greying', 'Thinning Hair'],
    doshaEffect: 'Pitta & Vata Pacifying',
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.8,
    reviewsCount: 520,
    sku: 'VP-HAR-002',
    stock: 45,
    lowStockThreshold: 15,
    inStock: true,
    badge: 'Best Seller',
    image: '/images/bhringraj.jpg',
    galleryImages: [
      '/images/bhringraj.jpg',
      '/images/hero.jpg',
      '/images/harvest.jpg'
    ],
    shortDescription: 'Potent blend of fresh organic Bhringraj, cold-pressed Amla, Brahmi, Hibiscus, and Virgin Coconut oil to stimulate dormant follicles.',
    description: 'An intensive, clinically proven Ayurvedic hair oil slow-cooked with fresh Bhringraj leaves (King of Hair), wild Amla, Fenugreek, Brahmi, and Hibiscus in pure cold-pressed Sesame and Coconut oils. This traditional Keshya blend penetrates deep into the scalp to cool excessive Pitta heat, strengthen weak roots, prevent hair fall, combat stubborn dandruff, and delay premature silver strands.',
    volume: '200 ml / 6.7 fl. oz.',
    ingredientsList: 'Eclipta Alba (Bhringraj) Leaf Extract, Phyllanthus Emblica (Amla) Fruit Extract, Bacopa Monnieri (Brahmi) Extract, Hibiscus Rosa-Sinensis Flower, Trigonella Foenum-Graecum (Fenugreek) Seed, Cocos Nucifera (Virgin Coconut) Oil, Sesamum Indicum (Sesame) Oil, Azadirachta Indica (Neem) Leaf, Rosemary Essential Oil.',
    keyIngredients: [
      {
        name: 'Fresh Bhringraj (Eclipta Alba)',
        benefit: 'Stimulates micro-circulation in scalp capillaries for accelerated hair regrowth',
        icon: 'Sparkles'
      },
      {
        name: 'Wild Indian Gooseberry (Amla)',
        benefit: 'Rich in bio-flavonoids and Vitamin C to strengthen keratin structure',
        icon: 'Droplet'
      },
      {
        name: 'Brahmi & Hibiscus',
        benefit: 'Conditions hair follicles, seals split ends, and cools cranial stress',
        icon: 'Feather'
      },
      {
        name: 'Organic Neem & Fenugreek',
        benefit: 'Eradicates dandruff causing fungi and soothes itchy scalp',
        icon: 'ShieldCheck'
      }
    ],
    benefits: [
      'Reduces hair fall by up to 88% in 4 weeks of consistent ritual',
      'Revitalizes dormant hair follicles and promotes thicker hair density',
      'Provides deep conditioning and reverses damage from chemical styling & pollution',
      'Calms mental stress and improves sleep quality when massaged at night',
      'Non-sticky, lightweight Ayurvedic texture that washes off cleanly'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Warm the Oil',
        desc: 'Dispense required amount into a small bowl and warm gently in a water bath.'
      },
      {
        step: 2,
        title: 'Scalp Shiro-Abhyanga',
        desc: 'Part hair in sections and apply to scalp. Massage in circular motions for 5-10 minutes.'
      },
      {
        step: 3,
        title: 'Leave & Rinse',
        desc: 'Leave on for at least 45 minutes or overnight. Wash with VedaPure Herbal Scalp Cleanser.'
      }
    ],
    whoIsItFor: 'Suitable for all hair types (straight, wavy, curly, coily). Recommended for anyone experiencing hair thinning, postpartum hair loss, dandruff, or scalp heat.',
    ayurvedicProperties: {
      dosha: 'Deeply cools Pitta (scalp heat) and calms Vata (dryness & hair fall)',
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Snigdha (Nourishing)',
      virya: 'Sheeta (Cooling)',
      vipaka: 'Katu (Pungent)'
    },
    certifications: [
      'AYUSH Certified Formula',
      '100% Cold-Pressed Herb Infusion',
      'No Mineral Oils, No Added Silicones',
      'Cruelty Free & Vegan',
      'Sustainably Sourced Herbs'
    ],
    frequentlyBoughtTogether: ['prod-01', 'prod-06'],
    reviews: [
      {
        id: 'rev-04',
        userName: 'Rhea Nambiar',
        rating: 5,
        date: '10 days ago',
        verified: true,
        title: 'Hair fall stopped within 3 washes!',
        comment: 'I was losing chunks of hair after fever. Started using this oil twice a week with warm oil massage. Within 3 weeks, my hair fall has almost stopped and baby hair is sprouting!',
        helpful: 53
      },
      {
        id: 'rev-05',
        userName: 'Vikramaditya S.',
        rating: 5,
        date: '3 weeks ago',
        verified: true,
        title: 'Calms the mind after long screen hours',
        comment: 'The herbal aroma is very earthy and therapeutic. Applying it on Friday nights gives me the deepest sleep of the week. My scalp feels thoroughly nourished.',
        helpful: 31
      }
    ]
  },
  {
    id: 'prod-03',
    slug: 'organic-ashwagandha-brahmi-vitality-elixir',
    name: 'Ashwagandha & Brahmi Vitality Elixir',
    sanskritName: 'अश्वगन्धा ब्राह्मी रसायनम् (Ojas Rasayana)',
    subtitle: 'Daily Adaptogen Tonic for Stress Relief, Deep Sleep & Energy',
    category: 'wellness',
    categoryName: 'Wellness & Immunity',
    productType: 'Herbal Supplement',
    concern: ['Stress & Sleep', 'Immunity', 'Fatigue & Low Energy', 'Mental Clarity'],
    doshaEffect: 'Vata & Kapha Harmonizing',
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.9,
    reviewsCount: 295,
    sku: 'VP-WEL-003',
    stock: 6,
    lowStockThreshold: 10,
    inStock: true,
    badge: 'Only 6 left',
    image: '/images/ashwagandha.jpg',
    galleryImages: [
      '/images/ashwagandha.jpg',
      '/images/hero.jpg',
      '/images/harvest.jpg'
    ],
    shortDescription: 'Full-spectrum KSM-66 organic Ashwagandha root extract combined with Bacopa Brahmi and Shatavari for nervous system resilience.',
    description: 'A sovereign Rasayana formulation crafted to replenish Ojas (the body’s reserve of vital immunity and mental serenity). Synergistically blends standardized organic Ashwagandha (5% Withanolides) with wild Brahmi, Shatavari, and Cardamom. It works at the mitochondrial and endocrine levels to modulate elevated cortisol, restore deep restorative sleep cycles, clear brain fog, and sustain calm, clean daytime energy without jitters.',
    volume: '60 Herbal Veg Capsules / 500mg each',
    ingredientsList: 'Standardized Organic Ashwagandha (Withania Somnifera) Root Extract (5% Withanolides), Bacopa Monnieri (Brahmi) Whole Plant Extract, Asparagus Racemosus (Shatavari) Root Extract, Elettaria Cardamomum (Cardamom) Fruit, Piper Longum (Pippali) Bio-Enhancer, HPMC Plant Cellulose Capsule.',
    keyIngredients: [
      {
        name: 'Organic Ashwagandha (Withania Somnifera)',
        benefit: 'Lowers cortisol, balances adrenal fatigue, and enhances physical stamina',
        icon: 'Zap'
      },
      {
        name: 'Wild Brahmi (Bacopa Monnieri)',
        benefit: 'Supports cognitive sharpness, calm focus, and nervous system repair',
        icon: 'Sparkles'
      },
      {
        name: 'Shatavari & Green Cardamom',
        benefit: 'Nourishes reproductive tissues, cools inner heat, and aids bioavailability',
        icon: 'Heart'
      }
    ],
    benefits: [
      'Reduces subjective daily anxiety and stress symptoms by 76%',
      'Promotes deeper, uninterrupted REM sleep without morning grogginess',
      'Boosts cellular immunity and accelerates post-workout physical recovery',
      '100% vegetarian capsules with zero synthetic binders, fillers, or talc',
      'Heavy-metal tested and certified by independent NABL accredited labs'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Recommended Dosage',
        desc: 'Take 1 to 2 capsules daily after dinner or 1 hour before bedtime.'
      },
      {
        step: 2,
        title: 'Anupana (Carrier Vehicle)',
        desc: 'Consume with a warm cup of organic milk, golden turmeric milk, or warm water.'
      },
      {
        step: 3,
        title: 'Consistency',
        desc: 'For optimal endocrine balance and cellular rejuvenation, consume continuously for 60 to 90 days.'
      }
    ],
    whoIsItFor: 'Recommended for working professionals, fitness enthusiasts, students, and anyone experiencing chronic fatigue, poor sleep quality, or mental burnout.',
    ayurvedicProperties: {
      dosha: 'Balancing to Vata (nervous anxiety) and Kapha (sluggishness)',
      rasa: 'Madhura (Sweet), Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Guru (Grounding), Snigdha (Nourishing)',
      virya: 'Ushna (Mildly Warming)',
      vipaka: 'Madhura (Nourishing)'
    },
    certifications: [
      '100% Organic Certified Herbs',
      'AYUSH Premium Certified',
      'Non-GMO & Vegan HPMC Shells',
      'Heavy Metals Tested (Lead, Mercury, Arsenic < 0.1 ppm)',
      'GMP Certified Clean Facility'
    ],
    frequentlyBoughtTogether: ['prod-01', 'prod-04'],
    reviews: [
      {
        id: 'rev-06',
        userName: 'Tanvi Iyer',
        rating: 5,
        date: '5 days ago',
        verified: true,
        title: 'Unbelievable sleep quality after just 1 week',
        comment: 'I used to wake up 3-4 times every night with racing thoughts. Taking 1 capsule with warm almond milk before sleeping has transformed my sleep. I wake up calm and energized!',
        helpful: 38
      }
    ]
  },
  {
    id: 'prod-04',
    slug: 'saffron-sandalwood-luminous-face-cream',
    name: 'Saffron & Sandalwood Luminous Face Cream',
    sanskritName: 'चन्दन कुङ्कुम लेप (Chandana Kumkuma Lepa)',
    subtitle: 'Velvety Day & Night Moisturizer for Plump, Youthful Radiance',
    category: 'face-care',
    categoryName: 'Face Care',
    productType: 'Face Cream',
    concern: ['Dullness', 'Dry Skin', 'Fine Lines', 'Uneven Tone'],
    doshaEffect: 'Pitta & Vata Calming',
    price: 1450,
    originalPrice: 1850,
    discount: 21,
    rating: 4.9,
    reviewsCount: 184,
    sku: 'VP-FAC-004',
    stock: 22,
    lowStockThreshold: 8,
    inStock: true,
    badge: 'Award Winner',
    image: '/images/hero.jpg',
    galleryImages: [
      '/images/hero.jpg',
      '/images/kumkumadi.jpg',
      '/images/harvest.jpg'
    ],
    shortDescription: 'Silken whipped day cream enriched with Mysore sandalwood paste, pure saffron nectar, cold-pressed almond oil, and aloe vera.',
    description: 'A decadent yet fast-absorbing cream crafted for discerning skin that seeks both deep nourishment and featherlight comfort. Formulated with authentic Mysore Sandalwood, Kashmiri Saffron extract, and cold-pressed sweet almond oil in a pure organic Aloe Vera hydrosol base. It replenishes moisture reserves, shields against environmental pollutants, refines texture, and creates an ethereal satin finish.',
    volume: '50 g / 1.7 oz.',
    ingredientsList: 'Aloe Barbadensis Leaf Juice, Santalum Album (Sandalwood) Extract, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Crocus Sativus (Saffron) Extract, Garcinia Indica (Kokum) Seed Butter, Cetearyl Olivate, Sorbitan Olivate, Glycyrrhiza Glabra (Licorice) Root Extract, Vetiveria Zizanioides Root Extract, Natural Vitamin E, Potassium Sorbate.',
    keyIngredients: [
      {
        name: 'Mysore Sandalwood (Chandana)',
        benefit: 'Soothes inflammation, refines pores, and imparts signature heavenly aroma',
        icon: 'Feather'
      },
      {
        name: 'Kashmiri Saffron Nectar',
        benefit: 'Brightens skin tone, fights free-radical oxidation, and adds radiance',
        icon: 'Sparkles'
      },
      {
        name: 'Kokum Butter & Sweet Almond Oil',
        benefit: 'Deeply restores epidermal barrier without clogging pores',
        icon: 'ShieldCheck'
      }
    ],
    benefits: [
      'Delivers 24-hour weightless hydration with a breathable velvety finish',
      'Fades uneven tone, sun spots, and redness with natural botanicals',
      'Preps skin beautifully under makeup as a natural smoothing primer',
      'Free from silicones, artificial colors, and synthetic fragrances'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Dot on Skin',
        desc: 'Take a dime-sized amount on clean fingertips and dot evenly across cleansed face and neck.'
      },
      {
        step: 2,
        title: 'Smooth & Pat',
        desc: 'Gently smooth in outward and upward strokes until completely absorbed.'
      }
    ],
    whoIsItFor: 'Perfect for dry, combination, normal, and sensitive skin. Suitable for daily morning and evening use.',
    ayurvedicProperties: {
      dosha: 'Cools Pitta and hydrates Vata',
      rasa: 'Madhura (Sweet), Tikta (Bitter)',
      guna: 'Snigdha (Nourishing), Mridu (Softening)',
      virya: 'Sheeta (Cooling)',
      vipaka: 'Madhura (Nourishing)'
    },
    certifications: ['AYUSH Approved', 'Cruelty Free', 'Dermatologist Tested', 'Paraben Free'],
    frequentlyBoughtTogether: ['prod-01', 'prod-05'],
    reviews: [
      {
        id: 'rev-07',
        userName: 'Meera Deshmukh',
        rating: 5,
        date: '2 weeks ago',
        verified: true,
        title: 'The texture is pure heaven',
        comment: 'Not heavy, not oily. Melts like whipped silk and smells like an ancient temple sanctum of pure sandalwood. Highly recommend!',
        helpful: 24
      }
    ]
  },
  {
    id: 'prod-05',
    slug: 'sandalwood-turmeric-radiance-ubtan',
    name: 'Sandalwood & Turmeric Radiance Ubtan',
    sanskritName: 'सौन्दर्य उबटन (Saundarya Ubtan)',
    subtitle: 'Traditional Clarifying & Micro-Exfoliating Herbal Powder',
    category: 'skin-care',
    categoryName: 'Skin Care',
    productType: 'Face & Body Scrub',
    concern: ['Dullness', 'Pigmentation', 'Acne & Blemishes', 'Tan Removal'],
    doshaEffect: 'Tridoshic (All Doshas)',
    price: 749,
    originalPrice: 999,
    discount: 25,
    rating: 4.8,
    reviewsCount: 156,
    sku: 'VP-SKN-005',
    stock: 35,
    lowStockThreshold: 10,
    inStock: true,
    badge: 'Heritage',
    image: '/images/harvest.jpg',
    galleryImages: [
      '/images/harvest.jpg',
      '/images/kumkumadi.jpg',
      '/images/hero.jpg'
    ],
    shortDescription: 'Finely milled sun-dried wild turmeric, sandalwood powder, chickpea flour, and rose petals to gently buff away dead skin and tan.',
    description: 'An auspicious Ayurvedic formulation used for millennia in royal bridal ceremonies. This 100% natural, preservative-free exfoliating powder blends sun-cured Kasturi Turmeric, Pure Sandalwood, Chickpea pulse flour, Rose petals, and Neem. When mixed with milk, yogurt, or rose water, it gently lifts dead keratinocytes, unplugs congested pores, fades sun tan, and reveals baby-soft glowing skin.',
    volume: '100 g / 3.5 oz.',
    ingredientsList: 'Cicer Arietinum (Chickpea) Flour, Curcuma Aromatica (Wild Kasturi Manjal) Powder, Santalum Album (Sandalwood) Powder, Rosa Centifolia (Rose) Petal Powder, Azadirachta Indica (Neem) Leaf Powder, Vetiveria Zizanioides Root Powder, Citrus Aurantium Dulcis (Orange Peel) Powder.',
    keyIngredients: [
      {
        name: 'Wild Kasturi Turmeric',
        benefit: 'Brightens skin tone without yellow staining, anti-inflammatory',
        icon: 'Sparkles'
      },
      {
        name: 'Mysore Sandalwood & Vetiver',
        benefit: 'Cooling, tightens pores, soothes sun-exposed skin',
        icon: 'Feather'
      },
      {
        name: 'Gram Pulse Flour & Rose Petals',
        benefit: 'Non-abrasive physical exfoliation that softens skin texture',
        icon: 'Droplet'
      }
    ],
    benefits: [
      'Removes stubborn outdoor sun tan and dull surface buildup',
      'Refines bumpy texture and minimizes enlarged pores naturally',
      '100% pure dried botanicals with zero chemicals, fillers, or microplastics',
      'Customizable with Rosewater (for oily skin) or Raw Milk (for dry skin)'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Mix Paste',
        desc: 'Take 1-2 spoons of Ubtan in a bowl. Mix with Rose Water (Oily skin) or Raw Milk/Yogurt (Dry skin) into a smooth paste.'
      },
      {
        step: 2,
        title: 'Apply & Rest',
        desc: 'Apply evenly over face and neck. Let it dry partially for 10-15 minutes.'
      },
      {
        step: 3,
        title: 'Gentle Circular Buff',
        desc: 'Dampen hands and massage in upward circular motions to exfoliate before washing with lukewarm water.'
      }
    ],
    whoIsItFor: 'Ideal for all skin types. Perfect for weekly de-tanning and festive prep.',
    ayurvedicProperties: {
      dosha: 'Tridoshic (Balances Vata, Pitta, and Kapha)',
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Rooksha (Drying/Detoxifying), Laghu (Light)',
      virya: 'Sheeta (Cooling)',
      vipaka: 'Katu (Pungent)'
    },
    certifications: ['100% Herbal & Edible Grade', 'AYUSH Certified', 'Zero Preservatives'],
    frequentlyBoughtTogether: ['prod-01', 'prod-04'],
    reviews: [
      {
        id: 'rev-08',
        userName: 'Shalini Verma',
        rating: 5,
        date: '3 weeks ago',
        verified: true,
        title: 'Best natural scrub ever',
        comment: 'Does not scratch skin like chemical walnut scrubs. Skin feels so soft and clear immediately after rinsing.',
        helpful: 19
      }
    ]
  },
  {
    id: 'prod-06',
    slug: 'pure-kannauj-rose-water-facial-mist',
    name: 'Pure Kannauj Rose Water Hydrosol',
    sanskritName: 'गुलाब जलम् (Gulab Arka)',
    subtitle: 'Steam-Distilled Pure Hydro-Mist from Kannauj Damascena Roses',
    category: 'face-care',
    categoryName: 'Face Care',
    productType: 'Toner & Mist',
    concern: ['Dullness', 'Dry Skin', 'Acne & Blemishes', 'Large Pores'],
    doshaEffect: 'Pitta Pacifying & Cooling',
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.9,
    reviewsCount: 412,
    sku: 'VP-FAC-006',
    stock: 50,
    lowStockThreshold: 15,
    inStock: true,
    badge: 'Best Seller',
    image: '/images/kumkumadi.jpg',
    galleryImages: ['/images/kumkumadi.jpg', '/images/hero.jpg'],
    shortDescription: '100% pure artisanal steam-distilled floral water made from fresh morning-harvested Indian Damask roses in traditional copper Deg-Bhapka stills.',
    description: 'Bottled in the perfume capital of India, Kannauj. Freshly picked Rosa Damascena petals are steam-distilled using the 400-year-old hydro-distillation method in copper vessels. Contains pure dissolved essential rose oils with no added alcohol, preservatives, or artificial fragrances. Balances skin pH, tightens pores, soothes redness, and leaves skin refreshed and hydrated.',
    volume: '200 ml / 6.7 fl. oz.',
    ingredientsList: '100% Pure Steam Distilled Rosa Damascena (Rose) Flower Water (Gulab Arka).',
    keyIngredients: [
      {
        name: 'Indian Damask Rose Petals',
        benefit: 'Natural astringent that tones pores, calms Pitta heat, and balances pH',
        icon: 'Sparkles'
      }
    ],
    benefits: [
      'Instant burst of hydration and cooling relief for tired skin',
      'Restores optimal 5.5 acidic pH balance after cleansing',
      'Enhances the absorption of serums and face oils',
      'Alcohol-free, edible grade, safe for sensitive eyes and skin'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Spritz Anytime',
        desc: 'Hold bottle 8 inches from face with eyes closed. Spritz liberally after cleansing or throughout the day.'
      }
    ],
    whoIsItFor: 'Suitable for all skin types including ultra-sensitive, acne-prone, and reactive skin.',
    ayurvedicProperties: {
      dosha: 'Supreme Pitta pacifier',
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      virya: 'Sheeta (Cooling)',
      vipaka: 'Madhura (Nourishing)'
    },
    certifications: ['100% Pure Hydro-Distillate', 'AYUSH Certified', 'Alcohol Free', 'Vegan'],
    frequentlyBoughtTogether: ['prod-01', 'prod-04'],
    reviews: [
      {
        id: 'rev-09',
        userName: 'Ananya S.',
        rating: 5,
        date: '1 week ago',
        verified: true,
        title: 'Purest rose water on the market',
        comment: 'The scent is like walking through a fresh morning rose garden in Kannauj. Not artificial at all. Very soothing for my sensitive skin.',
        helpful: 27
      }
    ]
  },
  {
    id: 'prod-07',
    slug: 'mahanarayan-pain-relief-massage-oil',
    name: 'Mahanarayan & Dashamoola Muscle Relief Oil',
    sanskritName: 'महानारायण तैलम् (Mahanarayan Tailam)',
    subtitle: 'Classical 52-Herb Warmth Therapy for Joint & Muscle Stiffness',
    category: 'oils',
    categoryName: 'Herbal Oils & Thailams',
    productType: 'Body Oil',
    concern: ['Joint Pain', 'Muscle Soreness', 'Post-Workout', 'Vata Imbalance'],
    doshaEffect: 'Vata Pacifying (Deep Warming)',
    price: 799,
    originalPrice: 999,
    discount: 20,
    rating: 4.8,
    reviewsCount: 198,
    sku: 'VP-OIL-007',
    stock: 19,
    lowStockThreshold: 10,
    inStock: true,
    badge: 'Heritage',
    image: '/images/hero.jpg',
    galleryImages: ['/images/hero.jpg', '/images/harvest.jpg'],
    shortDescription: 'Classical Ayurvedic formulation prepared with Dashamoola roots, Ashwagandha, Bala, and Camphor in pure Sesame oil for joint flexibility and back pain.',
    description: 'An ancient restorative body massage oil mentioned in Bhaishajya Ratnavali. Masterfully infused with 52 therapeutic herbs including Dashamoola (ten roots), Bala, Shatavari, and Rasna simmered over slow cow-dung fire for 5 days. It penetrates deep into bone and synovial joints to soothe aggravated Vata, ease muscular tightness, stimulate blood circulation, and relieve chronic stiffness.',
    volume: '200 ml / 6.7 fl. oz.',
    ingredientsList: 'Sesamum Indicum (Sesame) Seed Oil, Dashamoola Extract (Aegle Marmelos, Premna Serratifolia, Oroxylum Indicum, etc.), Withania Somnifera (Ashwagandha), Sida Cordifolia (Bala), Asparagus Racemosus (Shatavari), Camphor (Karpura), Eucalyptus Globulus Leaf Oil.',
    keyIngredients: [
      {
        name: 'Dashamoola (Ten Sacred Roots)',
        benefit: 'Supreme classical anti-inflammatory and neuromuscular tonic',
        icon: 'ShieldCheck'
      },
      {
        name: 'Bala & Ashwagandha',
        benefit: 'Strengthens muscle fibers, ligaments, and skeletal joints',
        icon: 'Zap'
      },
      {
        name: 'Pure Bhimseni Camphor & Sesame',
        benefit: 'Creates therapeutic warmth and facilitates rapid transdermal absorption',
        icon: 'Feather'
      }
    ],
    benefits: [
      'Provides rapid relief from joint ache, stiff knees, and lower back tension',
      'Improves joint lubrication, flexibility, and post-workout recovery',
      'Ideal for therapeutic Abhyanga massage for elderly or active athletes',
      '100% natural, warming herbal aroma without pungent synthetic menthol'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Warm the Oil',
        desc: 'Place the bottle in warm water for 5 minutes.'
      },
      {
        step: 2,
        title: 'Targeted Massage',
        desc: 'Apply liberally over stiff joints, lower back, or tense muscles. Massage with firm strokes towards the heart.'
      },
      {
        step: 3,
        title: 'Warm Compress (Optional)',
        desc: 'Follow with a warm bath or hot towel compress for enhanced relief.'
      }
    ],
    whoIsItFor: 'Recommended for athletes, senior citizens, people with desk job stiffness, or anyone with joint discomfort.',
    ayurvedicProperties: {
      dosha: 'Powerfully pacifies Vata (stiffness & pain)',
      guna: 'Guru (Heavy), Snigdha (Unctuous)',
      virya: 'Ushna (Warm/Heating)',
      vipaka: 'Madhura (Nourishing)'
    },
    certifications: ['AYUSH Classical Formula', '100% Herbal Tailam', 'No Mineral Oil'],
    frequentlyBoughtTogether: ['prod-03', 'prod-08'],
    reviews: [
      {
        id: 'rev-10',
        userName: 'Rameshwar Nath',
        rating: 5,
        date: '3 weeks ago',
        verified: true,
        title: 'Great relief for knee stiffness',
        comment: 'My mother has knee stiffness in cold weather. Massaging this warm oil every evening has made a visible difference in her mobility.',
        helpful: 35
      }
    ]
  },
  {
    id: 'prod-08',
    slug: 'triphala-amla-bio-detox-churna',
    name: 'Triphala & Licorice Bio-Detox Churna',
    sanskritName: 'त्रिफला रसायन चूर्णम् (Triphala Rasayana)',
    subtitle: 'Digestive Agni Enhancer, Colon Cleanser & Gentle Daily Detox',
    category: 'wellness',
    categoryName: 'Wellness & Immunity',
    productType: 'Herbal Supplement',
    concern: ['Digestion & Detox', 'Immunity', 'Bloating & Constipation', 'Gut Health'],
    doshaEffect: 'Tridoshic (Harmonizes All 3 Doshas)',
    price: 499,
    originalPrice: 650,
    discount: 23,
    rating: 4.8,
    reviewsCount: 167,
    sku: 'VP-WEL-008',
    stock: 40,
    lowStockThreshold: 12,
    inStock: true,
    badge: 'Popular',
    image: '/images/ashwagandha.jpg',
    galleryImages: ['/images/ashwagandha.jpg', '/images/harvest.jpg'],
    shortDescription: 'Equal blend of certified organic Amalaki, Haritaki, Bibhitaki, and Yashtimadhu for healthy digestion, gut microbiome, and daily elimination.',
    description: 'The cornerstone of Ayurvedic wellness. Triphala ("three divine fruits") gently purifies the gastrointestinal tract, stimulates sluggish digestive fire (Agni), eliminates accumulated toxins (Ama), and nourishes bodily tissues. Enhanced with a hint of soothing Licorice root to protect gastric mucosa and ensure a smooth, non-cramping cleansing experience.',
    volume: '150 g / 5.3 oz. Powder',
    ingredientsList: 'Organic Phyllanthus Emblica (Amalaki), Terminalia Chebula (Haritaki), Terminalia Bellirica (Bibhitaki), Glycyrrhiza Glabra (Yashtimadhu / Licorice) Root Powder.',
    keyIngredients: [
      {
        name: 'Amalaki (Emblica Officinalis)',
        benefit: 'Cools Pitta, strengthens mucosal lining, rich in antioxidants',
        icon: 'Droplet'
      },
      {
        name: 'Haritaki (Terminalia Chebula)',
        benefit: 'Clears sluggish colon, pacifies Vata, aids daily elimination',
        icon: 'Zap'
      },
      {
        name: 'Bibhitaki (Terminalia Bellirica)',
        benefit: 'Balances Kapha, eliminates excess mucous, supports metabolic detox',
        icon: 'ShieldCheck'
      }
    ],
    benefits: [
      'Promotes smooth, natural morning elimination without dependency or cramping',
      'Relieves bloating, acid indigestion, and irregular bowel movements',
      'Supports healthy gut flora balance and enhances nutrient absorption',
      'Rich in gallic acid and ellagic acid for deep cellular antioxidant defense'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Nightly Dosage',
        desc: 'Mix 1/2 to 1 teaspoon (3g) of powder in 1 glass of warm water or herbal tea.'
      },
      {
        step: 2,
        title: 'Timing',
        desc: 'Drink 30 minutes before bedtime or first thing in the morning on an empty stomach.'
      }
    ],
    whoIsItFor: 'Ideal for anyone struggling with sluggish digestion, bloating, irregular bowel movements, or seeking seasonal detoxification.',
    ayurvedicProperties: {
      dosha: 'Harmonizes all 3 Doshas (Vata, Pitta, Kapha)',
      rasa: 'Possesses 5 of the 6 tastes (all except salty)',
      guna: 'Laghu (Light), Rooksha (Scraping)',
      virya: 'Anushnasheeta (Neither too hot nor too cold)',
      vipaka: 'Madhura (Nourishing)'
    },
    certifications: ['100% Certified Organic Herbs', 'AYUSH Certified', 'Non-Habit Forming', 'Zero Additives'],
    frequentlyBoughtTogether: ['prod-03', 'prod-07'],
    reviews: [
      {
        id: 'rev-11',
        userName: 'Suresh Menon',
        rating: 5,
        date: '1 month ago',
        verified: true,
        title: 'The cleanest digestion fix',
        comment: 'Have tried many Triphala brands, but this one is remarkably fresh and potent. Dissolves well, no grit, and works like a charm without stomach cramps.',
        helpful: 28
      }
    ]
  },
  {
    id: 'prod-09',
    slug: 'neem-tea-tree-clarifying-face-wash',
    name: 'Neem & Tea Tree Clarifying Face Wash',
    sanskritName: 'निम्ब प्रक्षालन (Nimba Prakshalana)',
    subtitle: 'Sulfate-Free Cleanser for Active Blemishes & Excess Sebum',
    category: 'face-care',
    categoryName: 'Face Care',
    productType: 'Face Cleanser',
    concern: ['Acne & Blemishes', 'Oily Skin', 'Enlarged Pores', 'Blackheads'],
    doshaEffect: 'Kapha & Pitta Pacifying',
    price: 499,
    originalPrice: 650,
    discount: 23,
    rating: 4.7,
    reviewsCount: 231,
    sku: 'VP-FAC-009',
    stock: 38,
    lowStockThreshold: 12,
    inStock: true,
    badge: 'Popular',
    image: '/images/hero.jpg',
    galleryImages: ['/images/hero.jpg', '/images/harvest.jpg'],
    shortDescription: 'Gentle, pH-balanced gel wash with cold-pressed Neem leaf extract, Tea Tree oil, and Tulsi to purify pores without stripping moisture.',
    description: 'A deeply purifying yet non-drying cleanser formulated with fresh organic Neem leaves, Holy Basil (Tulsi), and pure Australian Tea Tree essential oil. Gently lifts dirt, unplugs oil-clogged pores, regulates excess sebum production, and neutralizes acne-causing bacteria while keeping the skin’s natural lipid barrier intact.',
    volume: '150 ml / 5.1 fl. oz.',
    ingredientsList: 'Aqua, Organic Neem (Azadirachta Indica) Extract, Tulsi (Ocimum Sanctum) Extract, Cocamidopropyl Betaine, Decyl Glucoside, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Aloe Vera Extract, Vegetable Glycerin, Allantoin, Sodium Benzoate.',
    keyIngredients: [
      {
        name: 'Organic Neem Leaf Extract',
        benefit: 'Natural anti-bacterial that purifies deep pores and dries active pimples',
        icon: 'ShieldCheck'
      },
      {
        name: 'Holy Basil (Tulsi)',
        benefit: 'Calms inflammation and provides adaptogenic cellular defense',
        icon: 'Feather'
      },
      {
        name: 'Tea Tree Essential Oil',
        benefit: 'Regulates excess sebum and combats blackheads',
        icon: 'Droplet'
      }
    ],
    benefits: [
      'Clears active acne and prevents future breakouts without skin peeling',
      'Maintains healthy moisture balance with soothing Aloe Vera',
      'Free from SLS, SLES, parabens, phthalates, and artificial coloring'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Lather & Cleanse',
        desc: 'Pump a coin-sized amount onto wet palms. Work into a gentle lather and massage over face in circular motions for 60 seconds.'
      },
      {
        step: 2,
        title: 'Rinse',
        desc: 'Rinse thoroughly with cool water and pat dry.'
      }
    ],
    whoIsItFor: 'Best for oily, combination, and acne-prone skin.',
    ayurvedicProperties: {
      dosha: 'Cools Pitta and clears Kapha congestion',
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      virya: 'Sheeta (Cooling)',
      vipaka: 'Katu (Pungent)'
    },
    certifications: ['AYUSH Approved', 'Sulfate-Free', 'Dermatologist Tested', 'Cruelty Free'],
    frequentlyBoughtTogether: ['prod-06', 'prod-01'],
    reviews: [
      {
        id: 'rev-12',
        userName: 'Kavita Joshi',
        rating: 5,
        date: '2 weeks ago',
        verified: true,
        title: 'Does not dry out my skin!',
        comment: 'Most neem face washes make my skin tight and flaky. This one leaves it squeaky clean yet soft. My acne has reduced by half in 2 weeks.',
        helpful: 21
      }
    ]
  },
  {
    id: 'prod-10',
    slug: 'golden-turmeric-gotu-kola-body-polish',
    name: 'Wild Turmeric & Gotu Kola Body Polish',
    sanskritName: 'काञ्चन शरीर उद्वर्तन (Kanchana Sharira Udvartana)',
    subtitle: 'Silkening Body Exfoliant with Cold-Pressed Coconut & Sweet Almond',
    category: 'body-care',
    categoryName: 'Body Care & Bath',
    productType: 'Body Polish',
    concern: ['Dullness', 'Dry Skin', 'Uneven Tone', 'Rough Texture'],
    doshaEffect: 'Tridoshic (Stimulates Lymph & Circulation)',
    price: 899,
    originalPrice: 1150,
    discount: 22,
    rating: 4.8,
    reviewsCount: 142,
    sku: 'VP-BOD-010',
    stock: 25,
    lowStockThreshold: 8,
    inStock: true,
    badge: 'New',
    image: '/images/harvest.jpg',
    galleryImages: ['/images/harvest.jpg', '/images/hero.jpg'],
    shortDescription: 'Luxurious crushed cane sugar and raw Himalayan rock salt scrub infused with wild turmeric, gotu kola (Centella), and golden jojoba oil.',
    description: 'Inspired by the royal Ayurvedic Udvartana body therapy. Blends natural raw cane crystals and mineral-rich Himalayan pink salt with wild Kasturi Turmeric, Gotu Kola, and nourishing virgin plant oils. It sloughs off rough keratin, stimulates sluggish lymphatic drainage, smooths strawberry legs, and leaves the body coated in a velvet sheen.',
    volume: '250 g / 8.8 oz.',
    ingredientsList: 'Sucrose (Raw Cane Sugar), Sodium Chloride (Himalayan Pink Salt), Cocos Nucifera (Virgin Coconut) Oil, Curcuma Aromatica (Turmeric) Extract, Centella Asiatica (Gotu Kola) Extract, Simmondsia Chinensis (Jojoba) Seed Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Citrus Aurantium Dulcis Oil.',
    keyIngredients: [
      {
        name: 'Wild Kasturi Turmeric',
        benefit: 'Brightens skin tone and removes tan from elbows, knees, and back',
        icon: 'Sparkles'
      },
      {
        name: 'Gotu Kola (Centella Asiatica)',
        benefit: 'Promotes skin elasticity and reduces appearance of stretch marks',
        icon: 'Heart'
      },
      {
        name: 'Cold-Pressed Virgin Oils',
        benefit: 'Deeply nourishes so you never need a body lotion after shower',
        icon: 'Droplet'
      }
    ],
    benefits: [
      'Instantly buffs away dry flakiness, keratosis pilaris, and rough patches',
      'Leaves skin silky, deeply nourished, and glowy with a warm citrus-turmeric aroma',
      '100% natural biodegradable formula with zero microplastics'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Apply in Shower',
        desc: 'Take a generous scoop on damp skin during bath or shower.'
      },
      {
        step: 2,
        title: 'Circular Scrub',
        desc: 'Massage in firm circular motions focusing on elbows, knees, legs, and back for 3-5 minutes.'
      },
      {
        step: 3,
        title: 'Rinse',
        desc: 'Rinse with warm water. Pat dry to let the nourishing botanical oils sink in.'
      }
    ],
    whoIsItFor: 'Suitable for all skin types. Recommended 2-3 times per week.',
    ayurvedicProperties: {
      dosha: 'Stimulates Kapha and relieves Vata dryness',
      guna: 'Snigdha (Nourishing), Laghu (Light)',
      virya: 'Ushna (Warming)'
    },
    certifications: ['AYUSH Approved', 'Zero Microplastics', '100% Vegan', 'Cruelty Free'],
    frequentlyBoughtTogether: ['prod-05', 'prod-07'],
    reviews: [
      {
        id: 'rev-13',
        userName: 'Priyanka Ghosh',
        rating: 5,
        date: '4 weeks ago',
        verified: true,
        title: 'Spa luxury right at home',
        comment: 'Leaves my skin so soft that I skipped my usual body cream. The turmeric scent is very subtle and refreshing.',
        helpful: 15
      }
    ]
  },
  {
    id: 'prod-11',
    slug: 'pure-cold-pressed-sesame-abhyanga-oil',
    name: 'Pure Cold-Pressed Black Sesame Abhyanga Oil',
    sanskritName: 'तिल तैलम् (Tila Tailam)',
    subtitle: 'Single-Origin Virgin Sesame Oil for Daily Self-Massage Ritual',
    category: 'oils',
    categoryName: 'Herbal Oils & Thailams',
    productType: 'Body Oil',
    concern: ['Dry Skin', 'Stress & Sleep', 'Joint Pain', 'Vata Imbalance'],
    doshaEffect: 'Supreme Vata Pacifier',
    price: 649,
    originalPrice: 850,
    discount: 24,
    rating: 4.9,
    reviewsCount: 175,
    sku: 'VP-OIL-011',
    stock: 32,
    lowStockThreshold: 10,
    inStock: true,
    badge: 'Essential',
    image: '/images/hero.jpg',
    galleryImages: ['/images/hero.jpg', '/images/harvest.jpg'],
    shortDescription: 'Wood-pressed (Chekku / Ghani) unrefined black sesame seed oil, prized in classical texts as the King of All Massage Oils.',
    description: 'Extracted using traditional wooden expellers below 45°C to preserve natural lignans (Sesamol & Sesamolin) and Vitamin E. Sesame oil has the smallest molecular weight of all plant oils, allowing it to penetrate deeply through all seven layers of the skin (Dhatus) to lubricate joints, calm overstimulated nerves, expel cellular toxins, and soften dry skin.',
    volume: '500 ml / 16.9 fl. oz.',
    ingredientsList: '100% Pure Virgin Cold-Pressed Unrefined Black Sesame (Sesamum Indicum) Seed Oil.',
    keyIngredients: [
      {
        name: 'Single-Origin Black Sesame',
        benefit: 'Deepest transdermal penetration, balances nervous system and grounds Vata',
        icon: 'ShieldCheck'
      }
    ],
    benefits: [
      'The gold standard for daily morning Abhyanga self-massage',
      'Grounds restless energy, relieves anxiety, and enhances sleep',
      'Strengthens joints and nourishes dry, weathered skin',
      'Wood-pressed, unrefined, zero mineral oil, zero chemical solvents'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Warm the Oil',
        desc: 'Place desired quantity of oil in a small copper or glass bowl in hot water.'
      },
      {
        step: 2,
        title: 'Abhyanga Massage',
        desc: 'Apply head-to-toe with long strokes on limbs and circular strokes on joints and abdomen.'
      },
      {
        step: 3,
        title: 'Rest & Shower',
        desc: 'Let absorb for 15-20 minutes before taking a warm bath or shower.'
      }
    ],
    whoIsItFor: 'Ideal for everyone, especially those with high Vata, dry skin, fatigue, or joint creakiness.',
    ayurvedicProperties: {
      dosha: 'King of Vata Pacifiers',
      rasa: 'Madhura (Sweet), Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Guru (Heavy), Snigdha (Unctuous), Sukshma (Subtle Penetrating)',
      virya: 'Ushna (Heating)',
      vipaka: 'Madhura'
    },
    certifications: ['100% Wood-Pressed Virgin Oil', 'AYUSH Certified', 'Food Grade & Skin Safe'],
    frequentlyBoughtTogether: ['prod-02', 'prod-07'],
    reviews: [
      {
        id: 'rev-14',
        userName: 'Karan Kapur',
        rating: 5,
        date: '2 weeks ago',
        verified: true,
        title: 'True wood pressed quality',
        comment: 'You can instantly tell the difference between commercial refined oils and this wood-pressed sesame oil. The nutty aroma and grounding warmth is unmistakable.',
        helpful: 22
      }
    ]
  },
  {
    id: 'prod-12',
    slug: 'scalp-revitalizing-herbal-cleanser',
    name: 'Amla & Shikakai Scalp Revitalizing Cleanser',
    sanskritName: 'केश प्रक्षालन कषाय (Kesh Prakshalana)',
    subtitle: 'Low-Foam Herbal Shampoo with Reetha, Hibiscus & Fenugreek',
    category: 'hair-care',
    categoryName: 'Hair Care',
    productType: 'Hair Cleanser',
    concern: ['Hair Fall', 'Dandruff', 'Oily Scalp', 'Dull Hair'],
    doshaEffect: 'Tridoshic (Scalp Balancing)',
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.7,
    reviewsCount: 204,
    sku: 'VP-HAR-012',
    stock: 29,
    lowStockThreshold: 10,
    inStock: true,
    badge: 'Popular',
    image: '/images/bhringraj.jpg',
    galleryImages: ['/images/bhringraj.jpg', '/images/hero.jpg'],
    shortDescription: 'Traditional herbal brew of wild Shikakai, Soapnuts (Reetha), Amla, and Bhringraj that purifies the scalp without stripping natural oils.',
    description: 'A modern, sulfate-free interpretation of the ancient Ayurvedic hair decoction. Formulated with natural saponins derived from Reetha and Shikakai, combined with Vitamin C-packed Amla, Fenugreek, and Hibiscus. It washes off heavy hair oils effortlessly, removes mineral buildup from hard water, restores bounce, and leaves hair silky with natural volume.',
    volume: '250 ml / 8.5 fl. oz.',
    ingredientsList: 'Aqua, Sapindus Mukorossi (Reetha) Fruit Extract, Acacia Concinna (Shikakai) Extract, Phyllanthus Emblica (Amla) Extract, Hibiscus Rosa-Sinensis Flower Extract, Eclipta Alba (Bhringraj) Extract, Trigonella Foenum-Graecum (Fenugreek) Seed Extract, Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Polyquaternium-7, Natural Essential Oil Blend.',
    keyIngredients: [
      {
        name: 'Reetha & Shikakai',
        benefit: 'Natural mild saponins that cleanse gently and maintain scalp pH',
        icon: 'Droplet'
      },
      {
        name: 'Organic Amla & Bhringraj',
        benefit: 'Strengthens hair cuticle, adds mirror-like shine and bounce',
        icon: 'Sparkles'
      }
    ],
    benefits: [
      'Washes away heavy traditional hair oils in 1-2 washes cleanly',
      'Prevents hair strand breakage during washing',
      'Zero sulfates, zero silicones, zero artificial dyes'
    ],
    howToUse: [
      {
        step: 1,
        title: 'Apply to Wet Hair',
        desc: 'Thoroughly wet hair and scalp. Dispense 1-2 pumps onto palms and massage into scalp.'
      },
      {
        step: 2,
        title: 'Lather & Rinse',
        desc: 'Work into a mild natural lather. Rinse with cool water.'
      }
    ],
    whoIsItFor: 'Ideal for all hair types, especially color-treated or damaged hair that needs gentle care.',
    ayurvedicProperties: {
      dosha: 'Balancing for all scalp types (Vata, Pitta, Kapha)',
      guna: 'Laghu (Light), Vishada (Clearing)',
      virya: 'Sheeta (Cooling)'
    },
    certifications: ['Sulfate & Paraben Free', 'AYUSH Certified', 'Safe for Color Treated Hair'],
    frequentlyBoughtTogether: ['prod-02', 'prod-01'],
    reviews: [
      {
        id: 'rev-15',
        userName: 'Deepika R.',
        rating: 5,
        date: '1 week ago',
        verified: true,
        title: 'Finally a sulfate-free shampoo that actually cleans oil!',
        comment: 'Pairing this with the Bhringraj oil is a holy grail combination. Hair is shiny and scalp stays clean for 3 full days.',
        helpful: 19
      }
    ]
  }
];
