export function isAuthenticated(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }
  
    const authState = localStorage.getItem('authState');
    return !!authState;
  }
  