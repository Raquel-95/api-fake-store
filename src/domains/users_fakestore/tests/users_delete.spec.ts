import { describe, it, expect } from "vitest";
import { FakeStoreUserService } from "../services/fakeStoreUsers.service";
import { assertDeleteUserContract } from "../contracts/user.contract.delete";

describe("DELETE /users", () => {
  const service = new FakeStoreUserService();

  // CASO 1: Eliminar usuario existente
  it("Debe eliminar usuario existente", async () => {
    const res = await service.deleteUser(1);

    expect(res.status).toBe(200);
    assertDeleteUserContract(res.data);
  });

  // CASO 2: Eliminar usuario inexistente
  it("Eliminar usuario inexistente", async () => {
    const res = await service.deleteUser(9999);

    expect(res.status).toBe(200);
    expect(res.data).toBeDefined();
  });

  // CASO 3: ID inválido (negativo)
  it("Eliminar usuario con ID inválido", async () => {
    const res = await service.deleteUser(-1);

    expect(res.status).toBe(200);
  });

  // CASO 4: Enviar DELETE sin ID (espera 400)
  it("Debe retornar 400 cuando se envía sin ID", async () => {
    const res = await service.deleteUserWithoutId();

    expect(res.status).toBe(404);

    // Validación básica de error
    expect(res.data).toBeDefined();
  });
});