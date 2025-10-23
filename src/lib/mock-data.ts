// SnowTrader Mock Data
// Sample listings and user data for the marketplace

export interface Listing {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  engineSize: number;
  condition: 'excellent' | 'good' | 'fair';
  location: string;
  image: string;
  images: string[];
  description: string;
  seller: Seller;
  trackLength: number;
  ridingStyle: string[];
  features: string[];
  postedDate: string;
}

export interface Seller {
  id: string;
  username: string;
  location: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
}

export const mockSellers: Seller[] = [
  {
    id: '1',
    username: 'mountain_mike_2024',
    location: 'Colorado Springs, CO',
    rating: 4.9,
    reviewCount: 15,
    verified: true,
  },
  {
    id: '2',
    username: 'trail_rider_sarah',
    location: 'Duluth, MN',
    rating: 4.8,
    reviewCount: 8,
    verified: true,
  },
  {
    id: '3',
    username: 'powder_chaser_jim',
    location: 'Park City, UT',
    rating: 5.0,
    reviewCount: 23,
    verified: true,
  },
  {
    id: '4',
    username: 'sled_enthusiast',
    location: 'Bozeman, MT',
    rating: 4.7,
    reviewCount: 12,
    verified: false,
  },
];

export const mockListings: Listing[] = [
  {
    id: '1',
    title: '2022 Ski-Doo Summit X 850',
    brand: 'Ski-Doo',
    model: 'Summit X 850',
    year: 2022,
    price: 14500,
    mileage: 1200,
    engineSize: 850,
    condition: 'excellent',
    location: 'Colorado Springs, CO',
    image: '/generated/snowmobile-1.jpg',
    images: [
      '/generated/snowmobile-1.jpg',
      '/generated/hero-snowmobile.jpg',
      '/generated/community-riders.jpg',
    ],
    description: 'Mint condition 2022 Summit X with full warranty remaining. This mountain sled has been meticulously maintained and is ready for deep powder. Includes all original documentation and has never been damaged. Perfect for backcountry exploration.',
    seller: mockSellers[0],
    trackLength: 154,
    ridingStyle: ['Mountain', 'Backcountry'],
    features: [
      'E-TEC 850 Turbo Engine',
      'RAS X Front Suspension',
      'cMotion Rear Suspension',
      'LED Lighting Package',
      'Heated Grips & Thumb Warmer',
    ],
    postedDate: '2025-01-15',
  },
  {
    id: '2',
    title: '2021 Polaris RMK Pro 800',
    brand: 'Polaris',
    model: 'RMK Pro 800',
    year: 2021,
    price: 13200,
    mileage: 800,
    engineSize: 800,
    condition: 'excellent',
    location: 'Park City, UT',
    image: '/generated/snowmobile-2.jpg',
    images: [
      '/generated/snowmobile-2.jpg',
      '/generated/hero-snowmobile.jpg',
    ],
    description: 'Low miles, garage kept Polaris RMK Pro. This is the ultimate mountain machine with exceptional handling. Service records available. Comes with spare belt and trail gear.',
    seller: mockSellers[2],
    trackLength: 155,
    ridingStyle: ['Mountain', 'Powder'],
    features: [
      'Patriot 800 Engine',
      'Walker Evans Shocks',
      'AXYS Chassis',
      'Electric Start',
      'Digital Display',
    ],
    postedDate: '2025-01-14',
  },
  {
    id: '3',
    title: '2020 Arctic Cat M8000 Mountain Cat',
    brand: 'Arctic Cat',
    model: 'M8000 Mountain Cat',
    year: 2020,
    price: 11800,
    mileage: 2100,
    engineSize: 800,
    condition: 'good',
    location: 'Duluth, MN',
    image: '/generated/snowmobile-3.jpg',
    images: [
      '/generated/snowmobile-3.jpg',
      '/generated/community-riders.jpg',
    ],
    description: 'Well-maintained Arctic Cat with consistent service history. Great all-around mountain sled. Some cosmetic wear from trail use but mechanically sound. Fresh oil change and inspection completed.',
    seller: mockSellers[1],
    trackLength: 153,
    ridingStyle: ['Mountain', 'Trail'],
    features: [
      'C-TEC2 800 Engine',
      'AMS Suspension',
      'Mountain Skis',
      'Reverse',
      'Hand & Thumb Warmers',
    ],
    postedDate: '2025-01-13',
  },
  {
    id: '4',
    title: '2023 Ski-Doo MXZ X 850',
    brand: 'Ski-Doo',
    model: 'MXZ X 850',
    year: 2023,
    price: 15900,
    mileage: 450,
    engineSize: 850,
    condition: 'excellent',
    location: 'Bozeman, MT',
    image: '/generated/snowmobile-4.jpg',
    images: [
      '/generated/snowmobile-4.jpg',
      '/generated/hero-snowmobile.jpg',
    ],
    description: 'Nearly new trail performance machine. Perfect for aggressive trail riding. Factory warranty still active. Adult owned and meticulously maintained.',
    seller: mockSellers[3],
    trackLength: 137,
    ridingStyle: ['Trail', 'Performance'],
    features: [
      'Rotax 850 E-TEC',
      'RAS 3 Front Suspension',
      'rMotion X Rear Suspension',
      'FOX QS3 Shocks',
      'Premium Digital Gauge',
    ],
    postedDate: '2025-01-16',
  },
];

export const brands = ['Ski-Doo', 'Polaris', 'Arctic Cat', 'Yamaha'];
export const ridingStyles = ['Mountain', 'Trail', 'Backcountry', 'Performance', 'Powder'];
export const conditions = ['excellent', 'good', 'fair'];
