import { describe, expect, beforeAll } from "vitest";
import { FakeStoreUserService } from "../services/fakeStoreUsers.service";
import { AuthService } from "../../../auth/auth.service";
import { clients } from "../../../config/clients";
import { qaTest } from "../../../core/testing/qaTest";

import {
    assertUsersListContract,
    assertUserContract,
    assertNameContract,
    assertAddressContract,
    assertGeolocationContract
} from "../contracts/user.contract.get";

describe("FakeStore Users API", () => {
    const http = clients.fakestore;
    const usersService = new FakeStoreUserService(http);
    const authService = new AuthService();
    beforeAll(async () => {
        // const loginRes = await authService.login("test@mail.com", "123456");
        // expect(loginRes.status).toBe(200);
        // clients.playground.setAuthToken(loginRes.data.token);

        //clients.playground.setAuthToken("reqres_4e3e2e9ec4154970bb13d093e233a3cb");

    });

    qaTest(
        "Validar listado de usuarios",
        {
            tags: ["@TC-3001"],//id de caso de prueba
            risk: "HIGH",//riesgo
            endpointKey: "GET /users",//el endpoint
            domain: "users",//api_user
        },
        async () => {
            const res = await usersService.getUsers();

            // Validación de protocolo (siempre)
            expect(res.status).toBe(200);

            // Contract-based (estructura)
            assertUsersListContract(res.data);



        },
    );

    qaTest(
        "Validar obtención de usuario por ID válido",
        {
            tags: ["@TC-3002"],
            risk: "HIGH",
            endpointKey: "GET /users/{id}",
            domain: "users",
        },
        async () => {
            const res = await usersService.getUser("1");

            expect(res.status).toBe(200);

            // Narrowing
            if ("id" in res.data) {
                assertUserContract(res.data);
            } else {
                throw new Error("Expected User but received ApiError");
            }
        }
    );

    qaTest(
        "Validar usuario por ID inexistente",
        {
            tags: ["@TC-3003"],
            risk: "MEDIUM",
            endpointKey: "GET /users/{id}",
            domain: "users",
        },
        async () => {
            const res = await usersService.getUser("9999");

            // Validación de protocolo
            expect(res.status).toBe(200);

            // Validación de cuerpo
            expect(res.data).toBeNull();
        }
    );

    qaTest(
        "Validar usuario por ID inválido",
        {
            tags: ["@TC-3004"],
            risk: "HIGH",
            endpointKey: "GET /users/{id}",
            domain: "users",
        },
        async () => {
            const res = await usersService.getUser("z");

            // Validación de protocolo
            expect(res.status).toBe(400);

            // Narrowing
            if ("status" in res.data) {
                expect(res.data.status).toBe("error");
                expect(res.data.message).toBe("user id should be provided");
            } else {
                throw new Error("Expected ApiError but received User");
            }
        }
    );



});
