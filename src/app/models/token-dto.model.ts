import { UserDto } from "./user-dto.model";

export interface TokenDto {
  accessToken: string;
  login: string;
  refreshToken: string;
  role: string;
  user: UserDto;
  
}
