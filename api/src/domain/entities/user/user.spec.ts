import {expect, test} from "vitest";
import {User} from "./user";
import * as crypto from "crypto";

test('create new user', () => {
    const user = new User(
        crypto.randomUUID(),
        'Teste',
        'admin',
        'teste'
    );

    expect(user).toBeInstanceOf(User);
})
