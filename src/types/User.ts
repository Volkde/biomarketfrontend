export interface User {
  id?: number;
  email: string;
  password?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  roles?: string[];
  phoneNumber?: string;
  avatar?: string;
  wishlistId?: number;
  sellerId?: number;
}
