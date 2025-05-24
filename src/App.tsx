import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/routing/ProtectedRoute';
import { useAuth } from './hooks/useAuth';

import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import FarmerDashboard from './pages/FarmerDashboard';
import FarmersDirectory from './pages/FarmersDirectory';
import Home from './pages/Home';
import Login from './pages/Login';
import MarketPrices from './pages/MarketPrices';
import NotFound from './pages/NotFound';
import OrderConfirmation from './pages/OrderConfirmation';
import Orders from './pages/Orders';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Register from './pages/Register';
import Resources from './pages/Resources';

function App() {
  const { user } = useAuth();
  
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="farmers" element={<FarmersDirectory />} />
          <Route path="market-prices" element={<MarketPrices />} />
          <Route path="resources" element={<Resources />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={
              user?.role === 'farmer' ? <FarmerDashboard /> : <Dashboard />
            } />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-confirmation" element={<OrderConfirmation />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;