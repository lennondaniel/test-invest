import {UserRepository} from "../../../domain/repository/user.repository";
import {UserLogin, UserLoginResponse} from "../../../domain/interfaces/user";
export class LoginUseCase {
    constructor(readonly userRepository: UserRepository) {}

    async execute(userLogin: UserLogin): Promise<UserLoginResponse> {
        if(userLogin.username === undefined || userLogin.password === undefined){
            throw new Error('Username and password is required');
        }
        return await this.userRepository.login(userLogin);


    }
}
