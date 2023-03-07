import {expect, test} from "vitest";
import axios from "axios";

test('User must success login', async () => {
    const response = await axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
            username: 'test',
            password: 'test'
        }
    })

    expect(response.data).toHaveProperty('token')
})
