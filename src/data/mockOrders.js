export const INITIAL_COUPONS = [
  {
    code: 'VEDA15',
    discountPercent: 15,
    description: '15% Off on all authentic Ayurvedic remedies',
    minOrder: 999,
    maxDiscount: 500,
    active: true
  },
  {
    code: 'WELCOME20',
    discountPercent: 20,
    description: 'Special 20% Off for your first wellness ritual',
    minOrder: 1299,
    maxDiscount: 600,
    active: true
  },
  {
    code: 'FREESHIP',
    discountPercent: 0,
    freeShipping: true,
    description: 'Free Express Shipping on any order value',
    minOrder: 0,
    active: true
  },
  {
    code: 'AYUR500',
    flatDiscount: 500,
    description: 'Flat ₹500 Off on orders above ₹1,999',
    minOrder: 1999,
    active: true
  }
];

export const DEMO_USERS = [
  {
    id: 'user-01',
    name: 'Varsha Ravi',
    email: 'customer@vedapure.com',
    role: 'customer',
    phone: '+91 98765 43210',
    vedaPoints: 580,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    savedAddresses: [
      {
        id: 'addr-01',
        fullName: 'Varsha Ravi',
        phone: '+91 98765 43210',
        email: 'customer@vedapure.com',
        addressLine: 'Villa 42, Palm Meadows, Whitefield',
        city: 'Bengaluru',
        state: 'Karnataka',
        pincode: '560066',
        type: 'Home',
        isDefault: true
      },
      {
        id: 'addr-02',
        fullName: 'Varsha Ravi',
        phone: '+91 98765 43210',
        email: 'customer@vedapure.com',
        addressLine: 'Block 4, Tech Park, Indiranagar',
        city: 'Bengaluru',
        state: 'Karnataka',
        pincode: '560038',
        type: 'Office',
        isDefault: false
      }
    ],
    doshaProfile: 'Pitta-Vata (Fire & Air Harmony)'
  },
  {
    id: 'admin-01',
    name: 'Administrator (VedaPure Master)',
    email: 'admin@vedapure.com',
    role: 'admin',
    phone: '+91 98200 12345',
    vedaPoints: 9999,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    savedAddresses: [],
    doshaProfile: 'Tridoshic Master'
  }
];

export const INITIAL_ORDERS = [
  {
    id: 'VEDA-2026-9842',
    date: '2026-10-02',
    customerName: 'Varsha Ravi',
    customerEmail: 'customer@vedapure.com',
    customerPhone: '+91 98765 43210',
    status: 'Shipped',
    trackingNumber: 'BLUEDART-8829104',
    courierName: 'BlueDart Express',
    estimatedDelivery: 'Oct 08, 2026',
    items: [
      {
        id: 'prod-01',
        name: 'Kumkumadi Miraculous Beauty Fluid',
        price: 1899,
        quantity: 1,
        image: '/images/kumkumadi.jpg',
        volume: '30 ml'
      },
      {
        id: 'prod-06',
        name: 'Pure Kannauj Rose Water Hydrosol',
        price: 599,
        quantity: 1,
        image: '/images/kumkumadi.jpg',
        volume: '200 ml'
      }
    ],
    subtotal: 2498,
    discount: 374,
    couponCode: 'VEDA15',
    shipping: 0,
    taxes: 106,
    total: 2230,
    paymentMethod: 'UPI (Google Pay)',
    paymentStatus: 'Paid',
    shippingAddress: {
      fullName: 'Varsha Ravi',
      addressLine: 'Villa 42, Palm Meadows, Whitefield',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560066',
      phone: '+91 98765 43210'
    },
    trackingHistory: [
      { status: 'Order Confirmed', date: 'Oct 02, 2026 10:30 AM', location: 'VedaPure Kerala Center', done: true },
      { status: 'Freshly Formulated & Packed', date: 'Oct 03, 2026 02:15 PM', location: 'Cochin Herbal Lab', done: true },
      { status: 'Dispatched via BlueDart', date: 'Oct 04, 2026 09:00 AM', location: 'Bengaluru Hub', done: true },
      { status: 'Out for Delivery', date: 'Expected Oct 08, 2026', location: 'Local Whitefield Delivery Hub', done: false },
      { status: 'Delivered', date: 'Pending', location: 'Destination Address', done: false }
    ]
  },
  {
    id: 'VEDA-2026-9710',
    date: '2026-09-18',
    customerName: 'Varsha Ravi',
    customerEmail: 'customer@vedapure.com',
    customerPhone: '+91 98765 43210',
    status: 'Delivered',
    trackingNumber: 'DELHIVERY-7719203',
    courierName: 'Delhivery Express',
    estimatedDelivery: 'Sep 22, 2026',
    items: [
      {
        id: 'prod-02',
        name: 'Bhringraj & Amla Intensive Hair Growth Oil',
        price: 899,
        quantity: 1,
        image: '/images/bhringraj.jpg',
        volume: '200 ml'
      },
      {
        id: 'prod-03',
        name: 'Ashwagandha & Brahmi Vitality Elixir',
        price: 1199,
        quantity: 1,
        image: '/images/ashwagandha.jpg',
        volume: '60 capsules'
      }
    ],
    subtotal: 2098,
    discount: 419,
    couponCode: 'WELCOME20',
    shipping: 0,
    taxes: 84,
    total: 1763,
    paymentMethod: 'Credit Card (HDFC)',
    paymentStatus: 'Paid',
    shippingAddress: {
      fullName: 'Varsha Ravi',
      addressLine: 'Villa 42, Palm Meadows, Whitefield',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560066',
      phone: '+91 98765 43210'
    },
    trackingHistory: [
      { status: 'Order Confirmed', date: 'Sep 18, 2026', location: 'VedaPure Center', done: true },
      { status: 'Formulated & Packed', date: 'Sep 19, 2026', location: 'Cochin Lab', done: true },
      { status: 'Dispatched', date: 'Sep 20, 2026', location: 'Transit Hub', done: true },
      { status: 'Out for Delivery', date: 'Sep 22, 2026 09:30 AM', location: 'Bengaluru Center', done: true },
      { status: 'Delivered', date: 'Sep 22, 2026 03:45 PM', location: 'Handed to Customer', done: true }
    ]
  }
];
