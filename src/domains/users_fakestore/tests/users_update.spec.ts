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
    email: "John@gmail.com",
    username: "johnd",
    password: "mypassword",
  };
 
  qaTest(
    "Validar update exitoso de usuario",
    {
      tags: ["@TC-FAKE-01", "happy-path"],
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
      tags: ["@TC-FAKE-02", "negative"],
      risk: "MEDIUM",
      endpointKey: "PUT /users/:id",
      domain: "fakestore_users",
    },
    async () => {
      const res = await usersService.updateUser("1e", updatePayload);
     
     // console.log("=== RESPONSE STATUS ===", res.status);
      //console.log("=== RESPONSE BODY ===", res.data);
     
      expect(res.status).toBe(400);
      assertErrorContract(res.data);
    }
  );
});