export enum ROL {
  "ADMIN" = "ADMIN",
  "MANAGER" = "MANAGER",
}

export interface UserResponse {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  team: UserResponse[];
}
