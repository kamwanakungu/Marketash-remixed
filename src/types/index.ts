// Define user type
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'buyer' | 'admin';
  phone?: string;
  location?: string;
}

// Define product type
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

// Define cart item type
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  farmerId: string;
  farmerName: string;
}

// Define order type
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

// Define market price type
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

// Define resource type
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

// Define notification type
export interface Notification {
  id: string;
  type: 'order' | 'message' | 'price' | 'system';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

// Define message type
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  senderName: string;
  message: string;
  timestamp: string;
  read: boolean;
}

// Define weather forecast type
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

// Define sales data type
export interface SalesData {
  month: string;
  sales: number;
}