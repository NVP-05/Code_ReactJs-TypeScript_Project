export interface User {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
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
