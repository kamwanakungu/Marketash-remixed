import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from '../common/ScrollToTop';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;