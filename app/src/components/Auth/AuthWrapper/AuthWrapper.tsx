import { useEffect, ReactNode } from 'react';

interface AuthWrapperProps {
  children: ReactNode;
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const authState = localStorage.getItem('authState');
  return !!authState;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  useEffect(() => {
    const authState = isAuthenticated();
    if (!authState) {
      window.location.replace('/login');
    }
  }, []);

  return <>{children}</>;
};

export default AuthWrapper;
