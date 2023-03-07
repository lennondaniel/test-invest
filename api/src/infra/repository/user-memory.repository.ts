import {UserRepository} from "../../domain/repository/user.repository";
import {User} from "../../domain/entities/user/user";
import * as crypto from "crypto";
import {UserLogin, UserLoginResponse} from "../../domain/interfaces/user";

export class UserMemoryRepository implements UserRepository{
    users: User[];
    constructor() {
        this.users = [];
        const user = new User(
            crypto.randomUUID(),
            'User test',
            'test',
            'test',
            null
        )

        this.users.push(user);
    }

    login(userLogin: UserLogin): Promise<UserLoginResponse> {
        return new Promise((resolve) => {
            this.users.find((user, index) => {
                if(user.username === userLogin.username && user.password === userLogin.password) {
                    const token = crypto.randomBytes(32).toString('hex');
                    this.users[index].token = token;
                    resolve({ token: token });
                } else {
                    throw new Error('Username or password is invalid');
                }
            })
        })
    }
}
