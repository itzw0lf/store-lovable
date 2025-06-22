
import { Product } from '@/contexts/CartContext';

export const useSampleProducts = (): Product[] => {
  return [
    {
      id: '1',
      name: 'Wireless Bluetooth Headphones',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      description: 'Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
      category: 'Electronics',
      stock: 25,
      rating: 4.5,
      reviews: 128
    },
    {
      id: '2',
      name: 'Organic Cotton T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      description: 'Soft and comfortable organic cotton t-shirt. Available in multiple colors and sizes. Sustainable and eco-friendly.',
      category: 'Fashion',
      stock: 50,
      rating: 4.2,
      reviews: 89
    },
    {
      id: '3',
      name: 'Smart Fitness Watch',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      description: 'Advanced fitness tracking with heart rate monitor, GPS, and smartphone connectivity. Water-resistant design.',
      category: 'Electronics',
      stock: 15,
      rating: 4.7,
      reviews: 256
    },
    {
      id: '4',
      name: 'Minimalist Desk Lamp',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
      description: 'Sleek LED desk lamp with adjustable brightness and color temperature. Perfect for home office or study space.',
      category: 'Home & Garden',
      stock: 30,
      rating: 4.3,
      reviews: 67
    },
    {
      id: '5',
      name: 'Premium Coffee Maker',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
      description: 'Professional-grade coffee maker with programmable settings and thermal carafe. Brew perfect coffee every time.',
      category: 'Home & Garden',
      stock: 12,
      rating: 4.6,
      reviews: 203
    },
    {
      id: '6',
      name: 'Yoga Mat Pro',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
      description: 'Non-slip yoga mat with superior cushioning and grip. Perfect for yoga, pilates, and other floor exercises.',
      category: 'Sports',
      stock: 40,
      rating: 4.4,
      reviews: 145
    },
    {
      id: '7',
      name: 'Leather Crossbody Bag',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      description: 'Handcrafted genuine leather crossbody bag with multiple compartments. Stylish and functional for everyday use.',
      category: 'Fashion',
      stock: 20,
      rating: 4.5,
      reviews: 112
    },
    {
      id: '8',
      name: 'Wireless Phone Charger',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop',
      description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.',
      category: 'Electronics',
      stock: 60,
      rating: 4.1,
      reviews: 78
    },
    {
      id: '9',
      name: 'Indoor Plant Collection',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
      description: 'Set of 3 easy-care indoor plants perfect for beginners. Includes care instructions and decorative pots.',
      category: 'Home & Garden',
      stock: 25,
      rating: 4.3,
      reviews: 94
    },
    {
      id: '10',
      name: 'Running Shoes',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      description: 'Lightweight running shoes with advanced cushioning and breathable mesh upper. Perfect for daily training.',
      category: 'Fashion',
      stock: 35,
      rating: 4.6,
      reviews: 187
    },
    {
      id: '11',
      name: 'Bluetooth Speaker',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      description: 'Portable Bluetooth speaker with 360-degree sound and 12-hour battery life. Waterproof design for outdoor use.',
      category: 'Electronics',
      stock: 45,
      rating: 4.4,
      reviews: 165
    },
    {
      id: '12',
      name: 'Ceramic Dinnerware Set',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      description: 'Modern 16-piece ceramic dinnerware set. Dishwasher and microwave safe. Perfect for everyday dining.',
      category: 'Home & Garden',
      stock: 18,
      rating: 4.2,
      reviews: 73
    }
  ];
};
