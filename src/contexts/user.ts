import { createContext } from 'react';

export interface UserContextType {
  user?: any;
  loading?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

export const UserContext = createContext<UserContextType>({});
