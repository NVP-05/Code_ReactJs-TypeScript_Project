export interface User {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface Userdb {
  email: string;
  username: string;
  password: string;
  status: boolean;
  id: number
}

export interface Userlogin {
  email: string;
  password: string;
}

export interface Errors {
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export interface LoginState {
  isLoggedIn: boolean;
  error: string | null;
}
