import { Status } from "./status.enum";

export interface UserDto {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  role: string;
  active: boolean;
  phone: string;
  address:string;
  status: Status;
  
}
