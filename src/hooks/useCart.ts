import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};