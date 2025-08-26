export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  condition: 'new' | 'used' | 'refurbished';
  location: string;
  description: string;
  seller: {
    name: string;
    phone: string;
    whatsapp: string;
    email: string;
  };
  isHotDeal: boolean;
  isFeatured: boolean;
  dateAdded: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
}

export interface BigEventAd {
  id: string;
  title: string;
  description: string;
  image: string;
  contact: {
    name: string;
    phone: string;
    whatsapp: string;
    email: string;
  };
  date: string;
  location: string;
}

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: '📱',
    subcategories: ['Phones & Tablets', 'Laptops & Computers', 'TV & Audio', 'Cameras', 'Gaming', 'Smart Home', 'Accessories']
  },
  {
    id: 'fashion',
    name: 'Fashion & Beauty',
    icon: '👗',
    subcategories: ['Men\'s Fashion', 'Women\'s Fashion', 'Kids Fashion', 'Shoes', 'Bags', 'Jewelry', 'Beauty Products', 'Watches']
  },
  {
    id: 'vehicles',
    name: 'Vehicles',
    icon: '🚗',
    subcategories: ['Cars', 'Motorcycles', 'Trucks & Commercial', 'Spare Parts', 'Car Accessories', 'Boats', 'Bicycles']
  },
  {
    id: 'property',
    name: 'Property',
    icon: '🏠',
    subcategories: ['Houses for Sale', 'Houses for Rent', 'Commercial Property', 'Land', 'Short Let', 'Building Materials']
  },
  {
    id: 'furniture',
    name: 'Home & Garden',
    icon: '🛋️',
    subcategories: ['Furniture', 'Home Decor', 'Kitchen & Dining', 'Garden & Outdoor', 'Appliances', 'Tools & DIY']
  },
  {
    id: 'jobs',
    name: 'Jobs & Services',
    icon: '💼',
    subcategories: ['Full-time Jobs', 'Part-time Jobs', 'Freelance', 'Domestic Services', 'Professional Services', 'Repair Services']
  },
  {
    id: 'education',
    name: 'Education',
    icon: '📚',
    subcategories: ['Books', 'Courses', 'Tutoring', 'School Supplies', 'University Services', 'Online Learning']
  },
  {
    id: 'health',
    name: 'Health & Sports',
    icon: '🏥',
    subcategories: ['Medical Equipment', 'Fitness Equipment', 'Sports Gear', 'Supplements', 'Healthcare Services']
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: '🎬',
    subcategories: ['Events & Tickets', 'Music Instruments', 'Books & Movies', 'Games & Toys', 'Art & Crafts']
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: '🌾',
    subcategories: ['Farming Equipment', 'Seeds & Plants', 'Livestock', 'Farm Produce', 'Agricultural Services']
  },
  {
    id: 'pets',
    name: 'Pets & Animals',
    icon: '🐕',
    subcategories: ['Dogs', 'Cats', 'Birds', 'Pet Accessories', 'Pet Food', 'Veterinary Services']
  },
  {
    id: 'business',
    name: 'Business & Industrial',
    icon: '🏭',
    subcategories: ['Office Equipment', 'Industrial Machinery', 'Restaurant Equipment', 'Business Services', 'Wholesale']
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    price: 180000,
    originalPrice: 200000,
    image: 'https://res.cloudinary.com/demo/image/upload/v1640123456/iphone-15-pro-max.jpg',
    category: 'electronics',
    condition: 'new',
    location: 'Nairobi',
    description: 'Brand new iPhone 15 Pro Max with 256GB storage. Latest model with titanium design and advanced camera system.',
    seller: {
      name: 'Tech Haven',
      phone: '+254701234567',
      whatsapp: '+254701234567',
      email: 'sales@techhaven.co.ke'
    },
    isHotDeal: true,
    isFeatured: true,
    dateAdded: '2024-01-15'
  },
  {
    id: '2',
    name: 'MacBook Pro M3 14-inch',
    price: 250000,
    originalPrice: 280000,
    image: 'https://res.cloudinary.com/demo/image/upload/v1640123456/macbook-pro-m3.jpg',
    category: 'electronics',
    condition: 'new',
    location: 'Mombasa',
    description: 'Latest MacBook Pro with M3 chip, 16GB RAM, 512GB SSD. Perfect for professionals and creatives.',
    seller: {
      name: 'Apple Center Kenya',
      phone: '+254707654321',
      whatsapp: '+254707654321',
      email: 'info@applecenterk.com'
    },
    isHotDeal: true,
    isFeatured: true,
    dateAdded: '2024-01-14'
  },
  {
    id: '3',
    name: 'Toyota Prado 2022',
    price: 6500000,
    image: 'https://res.cloudinary.com/demo/image/upload/v1640123456/toyota-prado-2022.jpg',
    category: 'vehicles',
    condition: 'used',
    location: 'Nairobi',
    description: '2022 Toyota Prado, excellent condition, full service history, leather interior, sunroof.',
    seller: {
      name: 'Premium Motors',
      phone: '+254722345678',
      whatsapp: '+254722345678',
      email: 'sales@premiummotors.ke'
    },
    isHotDeal: true,
    isFeatured: false,
    dateAdded: '2024-01-13'
  },
  {
    id: '4',
    name: 'Samsung 65" QLED Smart TV',
    price: 120000,
    originalPrice: 150000,
    image: 'https://res.cloudinary.com/demo/image/upload/v1640123456/samsung-qled-tv.jpg',
    category: 'electronics',
    condition: 'new',
    location: 'Kisumu',
    description: '65-inch Samsung QLED 4K Smart TV with HDR support and built-in streaming apps.',
    seller: {
      name: 'Electronics Hub',
      phone: '+254733456789',
      whatsapp: '+254733456789',
      email: 'sales@electronicshub.ke'
    },
    isHotDeal: true,
    isFeatured: true,
    dateAdded: '2024-01-12'
  },
  {
    id: '5',
    name: 'Modern 3BR Apartment - Kilimani',
    price: 35000,
    image: 'https://res.cloudinary.com/demo/image/upload/v1640123456/modern-apartment-kilimani.jpg',
    category: 'property',
    condition: 'new',
    location: 'Nairobi',
    description: 'Spacious 3-bedroom apartment in Kilimani with modern finishes, parking, and security.',
    seller: {
      name: 'Prime Properties',
      phone: '+254744567890',
      whatsapp: '+254744567890',
      email: 'rentals@primeproperties.ke'
    },
    isHotDeal: false,
    isFeatured: true,
    dateAdded: '2024-01-11'
  },
  {
    id: '6',
    name: 'Designer Sofa Set - 7 Seater',
    price: 85000,
    originalPrice: 120000,
    image: 'https://res.cloudinary.com/demo/image/upload/v1640123456/designer-sofa-set.jpg',
    category: 'furniture',
    condition: 'new',
    location: 'Mombasa',
    description: 'Luxury 7-seater sofa set with premium fabric and modern design. Perfect for living room.',
    seller: {
      name: 'Furniture Palace',
      phone: '+254755678901',
      whatsapp: '+254755678901',
      email: 'sales@furniturepalace.ke'
    },
    isHotDeal: true,
    isFeatured: false,
    dateAdded: '2024-01-10'
  }
];

export const bigEventAds: BigEventAd[] = [
  {
    id: '1',
    title: '🎵 Nairobi Music Festival 2024',
    description: 'The biggest music festival in East Africa featuring top local and international artists. 3 days of non-stop entertainment!',
    image: 'https://res.cloudinary.com/demo/image/upload/v1640123456/nairobi-music-festival.jpg',
    contact: {
      name: 'Event Organizers',
      phone: '+254711222333',
      whatsapp: '+254711222333',
      email: 'info@nairobimusicfest.com'
    },
    date: 'March 15-17, 2024',
    location: 'Uhuru Gardens, Nairobi'
  },
  {
    id: '2',
    title: '🚀 Tech Startup Expo',
    description: 'Discover the latest innovations and network with tech entrepreneurs. Featuring investors, mentors, and cutting-edge startups.',
    image: 'https://res.cloudinary.com/demo/image/upload/v1640123456/tech-startup-expo.jpg',
    contact: {
      name: 'Tech Expo Kenya',
      phone: '+254722333444',
      whatsapp: '+254722333444',
      email: 'info@techexpoke.com'
    },
    date: 'February 28 - March 1, 2024',
    location: 'KICC, Nairobi'
  }
];

export const ownerContact = {
  phone: '+254700123456',
  whatsapp: '+254700123456',
  email: 'admin@sokoniarena.com',
  mpesaTill: '123456',
  mpesaPhone: '+254700123456'
};