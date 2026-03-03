import { describe, expect, beforeAll } from "vitest";
import { AuthService } from "../../../auth/auth.service";
import { clients } from "../../../config/clients";
import { qaTest } from "../../../core/testing/qaTest";
 
import { assertErrorContract } from "../contracts/error.contract";
import { FakeStoreUserService } from "../services/fakeStoreUsers.service";
import { assertUsersupdateListContract } from "../contracts/user.contract.update";
 
describe("Playground Users API", () => {
  const http = clients.fakestore;
  const usersService = new FakeStoreUserService(http);
 
 
  const updatePayload = {
    id: 1,
    email: "Pruebas1@gmail.com",
    username: "Prueba01",
    password: "asd1123",
  };
 
  qaTest(
    "Validar update exitoso de usuario",
    {
      tags: ["@TC-40001"],
      risk: "HIGH",
      endpointKey: "PUT /users/:id",
      domain: "fakestore_users",
    },
    async () => {
      const res = await usersService.updateUser("1",updatePayload);
      expect(res.status).toBe(200);
      assertUsersupdateListContract(res.data);
 
    }
  );
 
qaTest(
    "Validar error 400 con ID mal escrito",
    {
      tags: ["40002"],
      risk: "HIGH",
      endpointKey: "PUT /users/:id",
      domain: "fakestore_users",
    },
    async () => {
      const res = await usersService.updateUser("1e", updatePayload);  
      expect(res.status).toBe(400);
      assertErrorContract(res.data);
    }
  );

  qaTest(
    "Validar error 404 con ID vacio",
    {
      tags: ["40003"],
      risk: "HIGH",
      endpointKey: "PUT /users/:id",
      domain: "fakestore_users",
    },
    async () => {
      const res = await usersService.updateUser("", updatePayload);  
      expect(res.status).toBe(404);
      assertErrorContract(res.data);
    }
  );
});