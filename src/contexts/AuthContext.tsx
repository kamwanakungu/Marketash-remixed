import Cookies from 'js-cookie';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { mockUsers } from '../data/mockData';

// Define user type
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'buyer' | 'admin';
  phone?: string;
  location?: string;
}

// Define auth context type
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateUserProfile: (userData: Partial<User>) => Promise<boolean>;
}

// Define register data type
interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'farmer' | 'buyer';
  phone?: string;
  location?: string;
}

// Create context
export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => false,
  register: async () => false,
  logout: () => {},
  updateUserProfile: async () => false,
});

// Auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    const checkAuth = () => {
      const userCookie = Cookies.get('marketash_user');
      if (userCookie) {
        try {
          const userData = JSON.parse(userCookie);
          setUser(userData);
        } catch (error) {
          console.error('Error parsing user data:', error);
          Cookies.remove('marketash_user');
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Find user in mock data
      const foundUser = mockUsers.find(u => u.email === email);
      
      // Check if user exists and password is correct (in mock data all passwords are "password")
      if (foundUser && password === 'password') {
        // Omit password from user data
        const { password: _, ...userData } = foundUser;
        
        // Save user to state and cookie
        setUser(userData);
        Cookies.set('marketash_user', JSON.stringify(userData), { expires: 7 });
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  // Register function
  const register = async (userData: RegisterData): Promise<boolean> => {
    // In a real app, this would be an API call
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Check if email already exists
      const emailExists = mockUsers.some(u => u.email === userData.email);
      if (emailExists) {
        return false;
      }
      
      // Create new user (in a real app, this would be saved to the database)
      const newUser: User = {
        id: `user_${Date.now()}`,
        name: userData.name,
        email: userData.email,
        role: userData.role,
        phone: userData.phone,
        location: userData.location,
      };
      
      // Save user to state and cookie
      setUser(newUser);
      Cookies.set('marketash_user', JSON.stringify(newUser), { expires: 7 });
      return true;
    } catch (error) {
      console.error('Register error:', error);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    Cookies.remove('marketash_user');
  };

  // Update user profile
  const updateUserProfile = async (userData: Partial<User>): Promise<boolean> => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (user) {
        const updatedUser = { ...user, ...userData };
        setUser(updatedUser);
        Cookies.set('marketash_user', JSON.stringify(updatedUser), { expires: 7 });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Update profile error:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};