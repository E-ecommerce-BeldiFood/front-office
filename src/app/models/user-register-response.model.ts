import { Status } from "./status.enum";

export interface UserRegisterResponse {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phone: string;
  createdAt: string; // ISO date string
  status: Status;
  updatedAt: string; // ISO date string
  confirmedAt: string; // ISO date string
}
