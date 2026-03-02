import { describe, expect } from "vitest";
import { clients } from "../../../config/clients";
import { qaTest } from "../../../core/testing/qaTest";
import { assertCreateUserContract } from "../contracts/users.contract";
import { FakeStoreUserService} from "../services/fakeStoreUsers.service";

describe("FakeStore Users API - POST", () => {
  const http = clients.fakestore;
  const userService = new FakeStoreUserService(http);
  qaTest(
    "Validar creación de usuario",
    {
      tags: ["@TC-20001"],
      risk: "HIGH",
      endpointKey: "POST /users",
      domain: "fakestore_users",
    },
    async () => {
      const payload = {
        username: "fanny",
        email: "fannypastor@test.com",
        password: "555666",
      };

      const res = await userService.createUser(payload);
      //console.log(JSON.stringify(res)) 

      // Validación de protocolo
      expect(res.status).toBe(201);

      // Validación de contrato
      assertCreateUserContract(res.data);
      //Valida que el formato de la respuesta este bien
      
      // Validación funcional mínima
      expect(typeof res.data.id).toBe("number");
    },
  );

   qaTest(
    "Error 404 por endpoint no encontrado",
    {
      tags: ["@TC-20002"],
      risk: "HIGH",
      endpointKey: "POST /users",
      domain: "fakestore_users",
    },
    async () => {
      const payload = {
        username: "fanny",
        email: "fannypastor@test.com",
        password: "888888",
      };

      const res = await http.post("/usuarios", payload);

      // Validación de protocolo
      expect(res.status).toBe(404);
      
    },
  );
});