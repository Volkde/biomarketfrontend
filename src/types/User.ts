export interface User {
  id?: string | number;
  email: string;
  password: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  roles?: string[];
  phoneNumber?: string;
  avatar?: string;
}
