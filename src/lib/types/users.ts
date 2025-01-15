export interface UsersProfile {
  users: User[];
  total: number;
  skip:  number;
  limit: number;
}

export interface User {
  id:         number;
  firstName:  string;
  lastName:   string;
  email:      string;
  company:    Company;
  role:       Role;
}



export interface Company {
  department: string;
  name:       string;
  title:      string;
}

export enum Role {
  Admin = "admin",
  Moderator = "moderator",
  User = "user",
}
