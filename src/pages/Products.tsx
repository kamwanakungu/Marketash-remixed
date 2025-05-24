import { Filter, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, products } from '../data/mockData';
import { useCart } from '../hooks/useCart';
import { Product } from '../types';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('');
  
  const { addToCart } = useCart();
  
  // Filter products based on selected category, search term, and price range
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(search) || 
          product.description.toLowerCase().includes(search) ||
          product.farmerName.toLowerCase().includes(search)
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    if (sortOption === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating-desc') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'newest') {
      // In a real app, we would sort by date, but here we'll just use the existing order
      // No sorting needed
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, priceRange, sortOption]);
  
  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle price range change
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...priceRange] as [number, number];
    newRange[index] = newValue;
    setPriceRange(newRange);
  };
  
  // Handle sort option change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };
  
  // Handle reset filters
  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchTerm('');
    setPriceRange([0, 1000]);
    setSortOption('');
  };
  
  // Handle add to cart
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      farmerId: product.farmerId,
      farmerName: product.farmerName,
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Shop Fresh Agricultural Products</h1>
          <p className="text-gray-600">
            Browse our wide selection of fresh, high-quality agricultural products directly from local farmers.
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="w-full md:w-1/2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="input pl-10 w-full"
              />
            </div>
            
            {/* Sort */}
            <div className="w-full md:w-1/4">
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="input w-full"
              >
                <option value="">Sort by</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
            
            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-outline md:hidden w-full flex items-center justify-center"
            >
              <Filter size={18} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Filters</h3>
                <button
                  onClick={handleResetFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Reset All
                </button>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        type="radio"
                        id={category}
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => handleCategoryChange(category)}
                        className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor={category} className="text-gray-700">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range (KES)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Min: KES {priceRange[0]}</span>
                    <span>Max: KES {priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceRangeChange(e, 0)}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(e, 1)}
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* More filters can be added here */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    id="organic"
                    className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="organic" className="text-gray-700">
                    Organic Products
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="inStock"
                    className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500"
                    defaultChecked
                  />
                  <label htmlFor="inStock" className="text-gray-700">
                    In Stock
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="md:w-3/4">
            {/* Active Filters */}
            {(selectedCategory !== 'All' || searchTerm || priceRange[0] > 0 || priceRange[1] < 1000) && (
              <div className="mb-4 flex flex-wrap gap-2">
                {selectedCategory !== 'All' && (
                  <div className="inline-flex items-center bg-primary-100 text-primary-800 rounded-full px-3 py-1 text-sm">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory('All')} className="ml-2">
                      <X size={14} />
                    </button>
                  </div>
                )}
                {searchTerm && (
                  <div className="inline-flex items-center bg-primary-100 text-primary-800 rounded-full px-3 py-1 text-sm">
                    Search: {searchTerm}
                    <button onClick={() => setSearchTerm('')} className="ml-2">
                      <X size={14} />
                    </button>
                  </div>
                )}
                {(priceRange[0] > 0 || priceRange[1] < 1000) && (
                  <div className="inline-flex items-center bg-primary-100 text-primary-800 rounded-full px-3 py-1 text-sm">
                    Price: KES {priceRange[0]} - KES {priceRange[1]}
                    <button onClick={() => setPriceRange([0, 1000])} className="ml-2">
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any products matching your current filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="btn btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                <p className="mb-4 text-gray-600">{filteredProducts.length} products found</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="card card-hover h-full flex flex-col">
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
                      <div className="p-4 flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <Link to={`/products/${product.id}`} className="hover:text-primary-600">
                            <h3 className="font-semibold text-lg">{product.name}</h3>
                          </Link>
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
                        <div className="flex items-center mb-3">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`} 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                        </div>
                      </div>
                      <div className="p-4 pt-0 mt-auto">
                        <div className="flex space-x-2">
                          <Link
                            to={`/products/${product.id}`}
                            className="btn btn-outline flex-1"
                          >
                            Details
                          </Link>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="btn btn-primary flex-1"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;