import { describe, it, expect } from "vitest";
import { FakeStoreUserService } from "../services/fakeStoreUsers.service";
import { assertDeleteUserContract } from "../contracts/user.contract.delete";


describe("DELETE /users", () => {

  const service = new FakeStoreUserService();
  //CASO 1: Eliminar usuario existente.
  it("Debe eliminar usuario existente", async () => {
    const res = await service.deleteUser(1);
    expect(res.status).toBe(200);
    assertDeleteUserContract(res.data);
  });

  
  //CASO 2: Eliminar usuario inexistente.
  it("Eliminar usuario inexistente", async () => {
    const res = await service.deleteUser(9999);
    expect(res.status).toBe(200);
    expect(res.data).toBeDefined();
  });

  
  //CASO 3: ID inválido
  it("Eliminar usuario con ID inválido", async () => {
    const res = await service.deleteUser(-1);
    expect(res.status).toBe(200);
  });
});
 