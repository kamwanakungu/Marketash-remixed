// Mock Users (Farmers, Buyers, Admin)
export interface MockUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'farmer' | 'buyer' | 'admin';
  phone?: string;
  location?: string;
  bio?: string;
  profileImage?: string;
  joinedDate?: string;
}

export const mockUsers: MockUser[] = [
  {
    id: 'user_1',
    name: 'John Kimani',
    email: 'john@example.com',
    password: 'password',
    role: 'farmer',
    phone: '+254 712 345 678',
    location: 'Nakuru, Kenya',
    bio: 'Experienced maize and vegetable farmer with over 10 years in sustainable farming practices.',
    profileImage: 'https://images.pexels.com/photos/2382695/pexels-photo-2382695.jpeg',
    joinedDate: '2022-01-15',
  },
  {
    id: 'user_2',
    name: 'Mary Wanjiku',
    email: 'mary@example.com',
    password: 'password',
    role: 'farmer',
    phone: '+254 723 456 789',
    location: 'Kiambu, Kenya',
    bio: 'Specializing in organic vegetables and fruits. Certified organic farmer since 2018.',
    profileImage: 'https://images.pexels.com/photos/3770254/pexels-photo-3770254.jpeg',
    joinedDate: '2022-02-20',
  },
  {
    id: 'user_3',
    name: 'David Ochieng',
    email: 'david@example.com',
    password: 'password',
    role: 'buyer',
    phone: '+254 734 567 890',
    location: 'Nairobi, Kenya',
    bio: 'Restaurant owner looking for fresh farm produce for my establishment.',
    profileImage: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg',
    joinedDate: '2022-03-10',
  },
  {
    id: 'user_4',
    name: 'Sarah Auma',
    email: 'sarah@example.com',
    password: 'password',
    role: 'buyer',
    phone: '+254 745 678 901',
    location: 'Mombasa, Kenya',
    bio: 'Wholesale buyer for local supermarket chain.',
    profileImage: 'https://images.pexels.com/photos/4727920/pexels-photo-4727920.jpeg',
    joinedDate: '2022-04-05',
  },
  {
    id: 'user_5',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'password',
    role: 'admin',
    phone: '+254 756 789 012',
    location: 'Nairobi, Kenya',
    joinedDate: '2022-01-01',
  },
];

// Mock Products
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  images: string[];
  inStock: number;
  farmerId: string;
  farmerName: string;
  location: string;
  rating: number;
  reviews: number;
  isFeatured?: boolean;
  isOrganic?: boolean;
  harvestDate?: string;
  expiryDate?: string;
}

export const products: Product[] = [
  {
    id: 'prod_1',
    name: 'Fresh Maize',
    category: 'Cereals',
    price: 50,
    unit: 'kg',
    description: 'Fresh sweet maize, harvested this week. Perfect for boiling or roasting.',
    images: [
      'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg',
      'https://images.pexels.com/photos/603030/pexels-photo-603030.jpeg',
    ],
    inStock: 500,
    farmerId: 'user_1',
    farmerName: 'John Kimani',
    location: 'Nakuru, Kenya',
    rating: 4.8,
    reviews: 24,
    isFeatured: true,
    harvestDate: '2023-10-05',
    expiryDate: '2023-11-05',
  },
  {
    id: 'prod_2',
    name: 'Organic Tomatoes',
    category: 'Vegetables',
    price: 120,
    unit: 'kg',
    description: 'Organically grown tomatoes, free from pesticides and chemicals. Rich in flavor and nutrients.',
    images: [
      'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg',
      'https://images.pexels.com/photos/4022099/pexels-photo-4022099.jpeg',
    ],
    inStock: 100,
    farmerId: 'user_2',
    farmerName: 'Mary Wanjiku',
    location: 'Kiambu, Kenya',
    rating: 4.9,
    reviews: 36,
    isFeatured: true,
    isOrganic: true,
    harvestDate: '2023-10-10',
    expiryDate: '2023-10-20',
  },
  {
    id: 'prod_3',
    name: 'Green Kale (Sukuma Wiki)',
    category: 'Vegetables',
    price: 50,
    unit: 'bunch',
    description: 'Fresh green kale locally known as Sukuma Wiki. A staple in Kenyan cuisine, rich in iron and vitamins.',
    images: [
      'https://images.pexels.com/photos/5755/bread-food-breakfast-orange.jpg',
      'https://images.pexels.com/photos/3642403/pexels-photo-3642403.jpeg',
    ],
    inStock: 150,
    farmerId: 'user_2',
    farmerName: 'Mary Wanjiku',
    location: 'Kiambu, Kenya',
    rating: 4.7,
    reviews: 19,
    isOrganic: true,
    harvestDate: '2023-10-12',
    expiryDate: '2023-10-18',
  },
  {
    id: 'prod_4',
    name: 'Fresh Potatoes',
    category: 'Tubers',
    price: 80,
    unit: 'kg',
    description: 'Locally grown potatoes, perfect for frying, mashing, or boiling.',
    images: [
      'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg',
      'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg',
    ],
    inStock: 300,
    farmerId: 'user_1',
    farmerName: 'John Kimani',
    location: 'Nakuru, Kenya',
    rating: 4.6,
    reviews: 28,
    harvestDate: '2023-10-02',
    expiryDate: '2023-11-15',
  },
  {
    id: 'prod_5',
    name: 'Fresh Milk',
    category: 'Dairy',
    price: 65,
    unit: 'liter',
    description: 'Fresh cow milk from grass-fed cattle. Pasteurized and ready to drink.',
    images: [
      'https://images.pexels.com/photos/2064163/pexels-photo-2064163.jpeg',
      'https://images.pexels.com/photos/3213283/pexels-photo-3213283.jpeg',
    ],
    inStock: 50,
    farmerId: 'user_1',
    farmerName: 'John Kimani',
    location: 'Nakuru, Kenya',
    rating: 4.9,
    reviews: 42,
    isFeatured: true,
    harvestDate: '2023-10-13',
    expiryDate: '2023-10-20',
  },
  {
    id: 'prod_6',
    name: 'Organic Avocados',
    category: 'Fruits',
    price: 30,
    unit: 'piece',
    description: 'Creamy, delicious avocados grown without pesticides. Perfect for guacamole or as a healthy addition to any meal.',
    images: [
      'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg',
      'https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg',
    ],
    inStock: 75,
    farmerId: 'user_2',
    farmerName: 'Mary Wanjiku',
    location: 'Kiambu, Kenya',
    rating: 4.8,
    reviews: 31,
    isOrganic: true,
    harvestDate: '2023-10-08',
    expiryDate: '2023-10-22',
  },
  {
    id: 'prod_7',
    name: 'Honey',
    category: 'Other',
    price: 450,
    unit: 'kg',
    description: 'Pure, natural honey harvested from local bee farms. No additives or preservatives.',
    images: [
      'https://images.pexels.com/photos/1028598/pexels-photo-1028598.jpeg',
      'https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg',
    ],
    inStock: 25,
    farmerId: 'user_1',
    farmerName: 'John Kimani',
    location: 'Nakuru, Kenya',
    rating: 5.0,
    reviews: 17,
    isFeatured: true,
    harvestDate: '2023-09-15',
    expiryDate: '2024-09-15',
  },
  {
    id: 'prod_8',
    name: 'Fresh Eggs',
    category: 'Poultry',
    price: 15,
    unit: 'piece',
    description: 'Farm-fresh eggs from free-range chickens. Rich in flavor and nutrition.',
    images: [
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
      'https://images.pexels.com/photos/6941042/pexels-photo-6941042.jpeg',
    ],
    inStock: 200,
    farmerId: 'user_2',
    farmerName: 'Mary Wanjiku',
    location: 'Kiambu, Kenya',
    rating: 4.7,
    reviews: 23,
    harvestDate: '2023-10-13',
    expiryDate: '2023-11-03',
  },
];

// Mock Market Prices
export interface MarketPrice {
  id: string;
  productName: string;
  category: string;
  price: number;
  unit: string;
  market: string;
  location: string;
  date: string;
  trend: 'up' | 'down' | 'stable';
  percentChange: number;
}

export const marketPrices: MarketPrice[] = [
  {
    id: 'price_1',
    productName: 'Maize',
    category: 'Cereals',
    price: 55,
    unit: 'kg',
    market: 'Wakulima Market',
    location: 'Nairobi',
    date: '2023-10-13',
    trend: 'up',
    percentChange: 5.2,
  },
  {
    id: 'price_2',
    productName: 'Tomatoes',
    category: 'Vegetables',
    price: 115,
    unit: 'kg',
    market: 'Wakulima Market',
    location: 'Nairobi',
    date: '2023-10-13',
    trend: 'down',
    percentChange: 2.8,
  },
  {
    id: 'price_3',
    productName: 'Potatoes',
    category: 'Tubers',
    price: 85,
    unit: 'kg',
    market: 'Wakulima Market',
    location: 'Nairobi',
    date: '2023-10-13',
    trend: 'stable',
    percentChange: 0.3,
  },
  {
    id: 'price_4',
    productName: 'Milk',
    category: 'Dairy',
    price: 70,
    unit: 'liter',
    market: 'Wakulima Market',
    location: 'Nairobi',
    date: '2023-10-13',
    trend: 'up',
    percentChange: 7.5,
  },
  {
    id: 'price_5',
    productName: 'Rice',
    category: 'Cereals',
    price: 140,
    unit: 'kg',
    market: 'Wakulima Market',
    location: 'Nairobi',
    date: '2023-10-13',
    trend: 'up',
    percentChange: 3.1,
  },
  {
    id: 'price_6',
    productName: 'Onions',
    category: 'Vegetables',
    price: 100,
    unit: 'kg',
    market: 'Wakulima Market',
    location: 'Nairobi',
    date: '2023-10-13',
    trend: 'down',
    percentChange: 4.5,
  },
  {
    id: 'price_7',
    productName: 'Beef',
    category: 'Meat',
    price: 450,
    unit: 'kg',
    market: 'Wakulima Market',
    location: 'Nairobi',
    date: '2023-10-13',
    trend: 'up',
    percentChange: 2.2,
  },
  {
    id: 'price_8',
    productName: 'Bananas',
    category: 'Fruits',
    price: 15,
    unit: 'piece',
    market: 'Wakulima Market',
    location: 'Nairobi',
    date: '2023-10-13',
    trend: 'stable',
    percentChange: 0.1,
  },
  {
    id: 'price_9',
    productName: 'Maize',
    category: 'Cereals',
    price: 50,
    unit: 'kg',
    market: 'Kongowea Market',
    location: 'Mombasa',
    date: '2023-10-13',
    trend: 'up',
    percentChange: 4.0,
  },
  {
    id: 'price_10',
    productName: 'Tomatoes',
    category: 'Vegetables',
    price: 110,
    unit: 'kg',
    market: 'Kongowea Market',
    location: 'Mombasa',
    date: '2023-10-13',
    trend: 'down',
    percentChange: 3.5,
  },
];

// Mock Orders
export interface Order {
  id: string;
  userId: string;
  items: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    farmerId: string;
    farmerName: string;
  }[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'mpesa' | 'card' | 'cash';
  paymentStatus: 'pending' | 'paid' | 'failed';
  shippingAddress: {
    name: string;
    phone: string;
    address: string;
    city: string;
    postalCode?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export const mockOrders: Order[] = [
  {
    id: 'order_1',
    userId: 'user_3',
    items: [
      {
        productId: 'prod_1',
        productName: 'Fresh Maize',
        quantity: 10,
        price: 50,
        farmerId: 'user_1',
        farmerName: 'John Kimani',
      },
      {
        productId: 'prod_2',
        productName: 'Organic Tomatoes',
        quantity: 5,
        price: 120,
        farmerId: 'user_2',
        farmerName: 'Mary Wanjiku',
      },
    ],
    totalAmount: 1100,
    status: 'delivered',
    paymentMethod: 'mpesa',
    paymentStatus: 'paid',
    shippingAddress: {
      name: 'David Ochieng',
      phone: '+254 734 567 890',
      address: '123 Restaurant Lane',
      city: 'Nairobi',
      postalCode: '00100',
    },
    createdAt: '2023-10-01T10:30:00Z',
    updatedAt: '2023-10-03T14:20:00Z',
  },
  {
    id: 'order_2',
    userId: 'user_3',
    items: [
      {
        productId: 'prod_5',
        productName: 'Fresh Milk',
        quantity: 20,
        price: 65,
        farmerId: 'user_1',
        farmerName: 'John Kimani',
      },
    ],
    totalAmount: 1300,
    status: 'processing',
    paymentMethod: 'mpesa',
    paymentStatus: 'paid',
    shippingAddress: {
      name: 'David Ochieng',
      phone: '+254 734 567 890',
      address: '123 Restaurant Lane',
      city: 'Nairobi',
      postalCode: '00100',
    },
    createdAt: '2023-10-10T09:15:00Z',
    updatedAt: '2023-10-10T09:30:00Z',
  },
  {
    id: 'order_3',
    userId: 'user_4',
    items: [
      {
        productId: 'prod_3',
        productName: 'Green Kale (Sukuma Wiki)',
        quantity: 50,
        price: 50,
        farmerId: 'user_2',
        farmerName: 'Mary Wanjiku',
      },
      {
        productId: 'prod_4',
        productName: 'Fresh Potatoes',
        quantity: 100,
        price: 80,
        farmerId: 'user_1',
        farmerName: 'John Kimani',
      },
      {
        productId: 'prod_6',
        productName: 'Organic Avocados',
        quantity: 200,
        price: 30,
        farmerId: 'user_2',
        farmerName: 'Mary Wanjiku',
      },
    ],
    totalAmount: 16500,
    status: 'shipped',
    paymentMethod: 'card',
    paymentStatus: 'paid',
    shippingAddress: {
      name: 'Sarah Auma',
      phone: '+254 745 678 901',
      address: '456 Supermarket Street',
      city: 'Mombasa',
      postalCode: '80100',
    },
    createdAt: '2023-10-05T11:45:00Z',
    updatedAt: '2023-10-07T08:30:00Z',
  },
];

// Mock Educational Resources
export interface Resource {
  id: string;
  title: string;
  category: 'article' | 'video' | 'guide' | 'news';
  description: string;
  content?: string;
  imageUrl: string;
  videoUrl?: string;
  author: string;
  date: string;
  readTime?: string;
  featured?: boolean;
}

export const resources: Resource[] = [
  {
    id: 'res_1',
    title: 'Sustainable Farming Practices for Small-Scale Farmers',
    category: 'article',
    description: 'Learn about sustainable farming methods that can increase your yield while preserving the environment.',
    content: `
      # Sustainable Farming Practices for Small-Scale Farmers

      Sustainable farming is becoming increasingly important as we face challenges like climate change, soil degradation, and water scarcity. Here are some sustainable practices that small-scale farmers can implement:

      ## 1. Crop Rotation

      Rotating crops helps prevent soil depletion and breaks pest cycles. Plan a 3-4 year rotation schedule for your fields.

      ## 2. Composting

      Create your own compost from farm waste and kitchen scraps. Compost adds nutrients back to the soil and improves soil structure.

      ## 3. Water Conservation

      Install drip irrigation systems to minimize water waste. Collect rainwater during rainy seasons for use during dry periods.

      ## 4. Natural Pest Management

      Use companion planting and beneficial insects to manage pests naturally, reducing the need for chemical pesticides.

      ## 5. Cover Crops

      Plant cover crops during off-seasons to prevent soil erosion, suppress weeds, and add nutrients to the soil.

      By implementing these practices, small-scale farmers can improve their yields while contributing to environmental conservation.
    `,
    imageUrl: 'https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg',
    author: 'Agricultural Extension Officer',
    date: '2023-09-15',
    readTime: '10 min',
    featured: true,
  },
  {
    id: 'res_2',
    title: 'How to Market Your Farm Products Effectively',
    category: 'guide',
    description: 'Strategies for small-scale farmers to reach more customers and get better prices for their produce.',
    content: `
      # How to Market Your Farm Products Effectively

      Marketing is crucial for farmers looking to maximize their profits. Here are strategies to help you market your farm products effectively:

      ## 1. Build Your Brand

      Create a unique brand identity for your farm. Design a logo, choose a color scheme, and tell your farm's story.

      ## 2. Direct Marketing Channels

      Explore farmers markets, CSA programs, and farm stands to sell directly to consumers, cutting out middlemen.

      ## 3. Online Presence

      Create a simple website and social media accounts to showcase your products and connect with customers.

      ## 4. Value Addition

      Process your raw products into value-added goods like jams, dried herbs, or prepared foods to increase profit margins.

      ## 5. Build Relationships

      Establish relationships with local restaurants, schools, and grocery stores for consistent sales channels.

      ## 6. Quality Packaging

      Invest in attractive, practical packaging that preserves product quality and enhances visual appeal.

      By implementing these marketing strategies, you can increase your customer base and command better prices for your farm products.
    `,
    imageUrl: 'https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg',
    author: 'Marketing Specialist',
    date: '2023-08-22',
    readTime: '12 min',
  },
  {
    id: 'res_3',
    title: 'Modern Irrigation Techniques for Water Conservation',
    category: 'video',
    description: 'Video guide on efficient irrigation systems that can help farmers save water while improving crop yields.',
    imageUrl: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    author: 'Water Conservation Expert',
    date: '2023-09-05',
    featured: true,
  },
  {
    id: 'res_4',
    title: 'Government Launches New Subsidy Program for Farmers',
    category: 'news',
    description: 'Details about the newly launched government subsidy program aimed at supporting small-scale farmers.',
    content: `
      # Government Launches New Subsidy Program for Farmers

      The Ministry of Agriculture has announced a new subsidy program aimed at supporting small-scale farmers across the country. The program, which will be implemented starting next month, includes the following key components:

      ## Fertilizer Subsidies

      Farmers will receive a 50% discount on approved fertilizer brands through registered agro-dealers.

      ## Seed Subsidies

      Certified seeds for staple crops will be available at a 40% discount through the program.

      ## Equipment Grants

      Small-scale farmers can apply for grants covering up to 60% of the cost of essential farming equipment.

      ## How to Apply

      To benefit from this program, farmers should:

      1. Register with their local agricultural office
      2. Obtain a farmer ID card
      3. Submit required documentation including land ownership or lease agreements
      4. Attend a brief training session on optimal use of subsidized inputs

      The application process opens on November 1st, 2023, and will remain open throughout the planting season.

      This initiative aims to boost agricultural productivity, enhance food security, and improve livelihoods for the country's farming communities.
    `,
    imageUrl: 'https://images.pexels.com/photos/1267323/pexels-photo-1267323.jpeg',
    author: 'Agricultural Ministry Correspondent',
    date: '2023-10-01',
    readTime: '5 min',
  },
];

// Mock Weather Data (for farmer dashboard)
export interface WeatherForecast {
  date: string;
  description: string;
  temperature: {
    min: number;
    max: number;
  };
  humidity: number;
  rainfall: number;
  icon: string;
}

export const weatherForecast: WeatherForecast[] = [
  {
    date: '2023-10-14',
    description: 'Partly Cloudy',
    temperature: {
      min: 15,
      max: 28,
    },
    humidity: 65,
    rainfall: 0,
    icon: 'cloud-sun',
  },
  {
    date: '2023-10-15',
    description: 'Sunny',
    temperature: {
      min: 16,
      max: 30,
    },
    humidity: 55,
    rainfall: 0,
    icon: 'sun',
  },
  {
    date: '2023-10-16',
    description: 'Scattered Showers',
    temperature: {
      min: 17,
      max: 26,
    },
    humidity: 75,
    rainfall: 8,
    icon: 'cloud-rain',
  },
  {
    date: '2023-10-17',
    description: 'Thunderstorms',
    temperature: {
      min: 16,
      max: 24,
    },
    humidity: 85,
    rainfall: 25,
    icon: 'cloud-lightning',
  },
  {
    date: '2023-10-18',
    description: 'Partly Cloudy',
    temperature: {
      min: 15,
      max: 27,
    },
    humidity: 70,
    rainfall: 0,
    icon: 'cloud-sun',
  },
];

// Mock Sales Data (for dashboards)
export interface SalesData {
  month: string;
  sales: number;
}

export const monthlySales: SalesData[] = [
  { month: 'Jan', sales: 15000 },
  { month: 'Feb', sales: 18000 },
  { month: 'Mar', sales: 22000 },
  { month: 'Apr', sales: 19000 },
  { month: 'May', sales: 25000 },
  { month: 'Jun', sales: 32000 },
  { month: 'Jul', sales: 28000 },
  { month: 'Aug', sales: 26000 },
  { month: 'Sep', sales: 30000 },
  { month: 'Oct', sales: 27000 },
  { month: 'Nov', sales: 0 },
  { month: 'Dec', sales: 0 },
];

// Categories for filtering
export const categories = [
  'All',
  'Cereals',
  'Vegetables',
  'Fruits',
  'Tubers',
  'Dairy',
  'Meat',
  'Poultry',
  'Other',
];

// Mock Notifications (for dashboards)
export interface Notification {
  id: string;
  type: 'order' | 'message' | 'price' | 'system';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export const mockNotifications: Notification[] = [
  {
    id: 'notif_1',
    type: 'order',
    title: 'New Order Received',
    message: 'You have received a new order for 10kg of Fresh Maize from David Ochieng.',
    time: '15 minutes ago',
    read: false,
  },
  {
    id: 'notif_2',
    type: 'message',
    title: 'New Message',
    message: 'Sarah Auma has sent you a message regarding your Organic Tomatoes.',
    time: '2 hours ago',
    read: true,
  },
  {
    id: 'notif_3',
    type: 'price',
    title: 'Price Alert',
    message: 'Maize prices have increased by 5.2% in Wakulima Market today.',
    time: '5 hours ago',
    read: false,
  },
  {
    id: 'notif_4',
    type: 'system',
    title: 'System Update',
    message: 'MarketAsh platform will undergo maintenance on October 20th from 2am to 4am.',
    time: '1 day ago',
    read: true,
  },
];

// Mock Messages (for chat)
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  senderName: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export const mockMessages: Message[] = [
  {
    id: 'msg_1',
    senderId: 'user_3',
    receiverId: 'user_1',
    senderName: 'David Ochieng',
    message: 'Hello John, do you have fresh maize available this week?',
    timestamp: '2023-10-13T09:30:00Z',
    read: true,
  },
  {
    id: 'msg_2',
    senderId: 'user_1',
    receiverId: 'user_3',
    senderName: 'John Kimani',
    message: 'Yes, I have about 500kg of fresh maize available. When would you like to order?',
    timestamp: '2023-10-13T10:15:00Z',
    read: true,
  },
  {
    id: 'msg_3',
    senderId: 'user_3',
    receiverId: 'user_1',
    senderName: 'David Ochieng',
    message: 'Great! I need 50kg for my restaurant. Can you deliver to Nairobi CBD?',
    timestamp: '2023-10-13T10:30:00Z',
    read: true,
  },
  {
    id: 'msg_4',
    senderId: 'user_1',
    receiverId: 'user_3',
    senderName: 'John Kimani',
    message: 'Yes, I can arrange delivery by tomorrow afternoon. The price is 50 KES per kg plus 500 KES for delivery.',
    timestamp: '2023-10-13T10:45:00Z',
    read: false,
  },
  {
    id: 'msg_5',
    senderId: 'user_4',
    receiverId: 'user_2',
    senderName: 'Sarah Auma',
    message: 'Hello Mary, I\'m interested in your organic tomatoes for our supermarket chain.',
    timestamp: '2023-10-12T14:20:00Z',
    read: true,
  },
  {
    id: 'msg_6',
    senderId: 'user_2',
    receiverId: 'user_4',
    senderName: 'Mary Wanjiku',
    message: 'Hello Sarah, I currently have about 100kg of organic tomatoes available. How much would you need?',
    timestamp: '2023-10-12T15:05:00Z',
    read: true,
  },
];