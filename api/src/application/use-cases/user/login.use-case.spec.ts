import {expect, test} from "vitest";
import {UserMemoryRepository} from "../../../infra/repository/user-memory.repository";
import {LoginUseCase} from "./login.use-case";

test('User must success login', async () => {
    const userRepository = new UserMemoryRepository();

    const loginUseCase = new LoginUseCase(userRepository);

    const userLogin = {
        username: 'test',
        password: 'test'
    }

    const loginResponse = await loginUseCase.execute(userLogin);

    expect(loginResponse).toHaveProperty('token');
})

test('User must not login in password invalid', async () => {
    const userRepository = new UserMemoryRepository();

    const loginUseCase = new LoginUseCase(userRepository);

    const userLogin = {
        username: 'test',
        password: 'test1'
    }

    const loginResponse = loginUseCase.execute(userLogin);

    expect(loginResponse).rejects.toThrow('Username or password is invalid');
})
