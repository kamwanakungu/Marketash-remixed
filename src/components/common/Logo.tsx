import { Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo = ({ variant = 'dark' }: LogoProps) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
  
  return (
    <Link to="/" className="flex items-center">
      <Sprout className="h-8 w-8 text-primary-500" />
      <span className={`ml-2 text-xl font-bold ${textColor}`}>
        Market<span className="text-primary-500">Ash</span>
      </span>
    </Link>
  );
};

export default Logo;