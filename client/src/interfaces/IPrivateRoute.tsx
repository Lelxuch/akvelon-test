import { ReactNode } from 'react';

export interface IPrivateRoute {
  path: string;
  isAuthenticated: boolean;
  children: ReactNode;
}
