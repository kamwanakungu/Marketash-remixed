import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};