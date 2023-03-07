import {Router, Request, Response} from "express";
import {UserRepository} from "../../../domain/repository/user.repository";
import {LoginUseCase} from "../../../application/use-cases/user/login.use-case";
import HttpServer from "../http-server";

export default class UserRoutes {
    constructor(readonly httpServer: HttpServer, readonly userRepository: UserRepository) {}

     init () {
        this.httpServer.on('post', '/login', async (params: any, body: any) => {
            try {
                const loginUseCase = new LoginUseCase(this.userRepository)
                const {username, password} = body;
                const userLogin = {
                    username: username,
                    password: password
                };
                const token = await loginUseCase.execute(userLogin)
                return {
                    status: 200,
                    response: token

                }
            } catch (err) {
                return {
                    status: 500,
                    response: {
                        error: err.message
                    }
                }
            }
        })
    }
}
