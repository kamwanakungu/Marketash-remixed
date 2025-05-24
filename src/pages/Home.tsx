import { ChevronRight, Leaf, ShieldCheck, TrendingUp, Truck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { products } from '../data/mockData';
import { useAuth } from '../hooks/useAuth';
import { Product } from '../types';

const Home = () => {
  const { user } = useAuth();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Get featured products
    const featured = products.filter(product => product.isFeatured);
    setFeaturedProducts(featured);
  }, []);
  
  // Settings for the hero slider
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  
  // Settings for the product carousel
  const productCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <Slider {...heroSliderSettings}>
          <div className="relative h-[60vh] md:h-[80vh]">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
              src="https://images.pexels.com/photos/2894292/pexels-photo-2894292.jpeg" 
              alt="Farmer with produce" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight slide-up">
                Farm Fresh, Direct to You
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mb-8 slide-up">
                Connect directly with local farmers, cut out the middlemen, and get the freshest produce at fair prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 slide-up">
                <Link to="/products" className="btn btn-primary px-8 py-3 text-lg">
                  Shop Now
                </Link>
                <Link to="/farmers" className="btn btn-outline bg-transparent border-white text-white hover:bg-white/20 px-8 py-3 text-lg">
                  Meet Our Farmers
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[60vh] md:h-[80vh]">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
              src="https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg" 
              alt="Fresh vegetables" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight slide-up">
                Fresh, Local, Sustainable
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mb-8 slide-up">
                Support local agriculture and enjoy the highest quality, sustainably grown produce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 slide-up">
                <Link to="/register" className="btn btn-primary px-8 py-3 text-lg">
                  Join Today
                </Link>
                <Link to="/about" className="btn btn-outline bg-transparent border-white text-white hover:bg-white/20 px-8 py-3 text-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Featured Products</h2>
            <Link 
              to="/products" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Products <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          
          <div className="px-4">
            <Slider {...productCarouselSettings}>
              {featuredProducts.map(product => (
                <div key={product.id} className="px-2">
                  <div className="card card-hover h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {product.isOrganic && (
                        <div className="absolute top-2 left-2 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          Organic
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <div className="text-accent-500 font-bold">
                          KES {product.price}/{product.unit}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{product.description.substring(0, 60)}...</p>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>By {product.farmerName}</span>
                        <span className="mx-2">•</span>
                        <span>{product.location}</span>
                      </div>
                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-primary w-full"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Farming Business?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Join MarketAsh today and connect directly with buyers, get fair prices for your produce, and grow your farming business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {user ? (
              <Link to="/dashboard" className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/register" className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Join as a Farmer
                </Link>
                <Link to="/register" className="btn bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 text-lg">
                  Join as a Buyer
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MarketAsh?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Better Prices</h3>
              <p className="text-gray-600">
                Get fair prices for your produce by selling directly to buyers, eliminating costly middlemen.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Quality</h3>
              <p className="text-gray-600">
                All farmers and products on our platform are verified for quality and authenticity.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Convenient Delivery</h3>
              <p className="text-gray-600">
                Arrange deliveries directly with farmers or use our trusted logistics partners.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Farming</h3>
              <p className="text-gray-600">
                Support environmentally responsible farming practices and reduce food miles.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                    alt="Testimonial" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Michael Mwangi</h4>
                  <p className="text-gray-600 text-sm">Maize Farmer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Since joining MarketAsh, I've been able to sell my maize directly to restaurants and get much better prices than I used to. The platform is easy to use and has transformed my business."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/3771834/pexels-photo-3771834.jpeg" 
                    alt="Testimonial" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Linda Achieng</h4>
                  <p className="text-gray-600 text-sm">Restaurant Owner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "MarketAsh has made sourcing fresh produce for my restaurant so much easier. I can browse products from multiple farmers, compare prices, and order directly. The quality is consistently excellent."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg" 
                    alt="Testimonial" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Grace Waithera</h4>
                  <p className="text-gray-600 text-sm">Vegetable Farmer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As a small-scale vegetable farmer, I struggled to find reliable buyers. With MarketAsh, I now have regular customers who appreciate my organic produce, and I earn 40% more than before."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;