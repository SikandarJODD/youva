export interface UsersProfile {
  users: DrizzUser[];
  total: number;
  skip: number;
  limit: number;
}

export interface DrizzUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  status: 'active' | 'inactive' | 'sage' | 'god';
}



