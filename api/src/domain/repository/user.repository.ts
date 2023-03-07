import {UserLogin, UserLoginResponse} from "../interfaces/user";

export interface UserRepository {
    login(userLogin: UserLogin): Promise<UserLoginResponse>
}
