export interface User {
  id?: string | number;
  email: "string";
  password: "string";
  userName: "string";
  firstName?: "string";
  lastName?: "string";
  roles?: string[];
  dateOfBirth?: string;
  phone?: string;
  avatarUrl?: string;
  gender?: string;
}
