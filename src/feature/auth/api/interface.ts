import { JoinSchemaType, LoginSchemaType } from "../entites";

export interface AuthService {
  login: (data: LoginSchemaType) => Promise<unknown>;
  logout: () => Promise<unknown>;
  join: (data: JoinSchemaType) => Promise<unknown>;
  getAuth: () => Promise<unknown>;
}
