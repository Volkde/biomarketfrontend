export interface LoginFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface LoginFormResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name?: string;
  };
}
