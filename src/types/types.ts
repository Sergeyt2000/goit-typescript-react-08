export interface ContactProps {
  contact: Contact;
}
export interface AuthState {
  user: {
    name: string | null;
    email: string | null;
  };
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}
export interface Contact {
  id: string;
  name: string;
  number: string;
}
export interface LoginContact {
  email: string;
  password: string;
}
export interface RegisterContact {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}
export interface RefreshResponse {
  name: string;
  email: string;
}