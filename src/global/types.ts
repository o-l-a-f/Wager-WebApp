export interface WagerData {
  completed: boolean;
  createDate: string;
  description: string;
  id: string;
  maker: User;
  odds: string;
  taker: User;
  title: string;
  value: number;
}

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  joined: string;
}
