import { describe, it, expect } from "vitest";
import { FakeStoreUserService } from "../services/fakeStoreUsers.service";
import { assertDeleteUserContract } from "../contracts/user.contract.delete";


describe("DELETE /users", () => {

  const service = new FakeStoreUserService();

  /**

   * CASO 1:

   * Eliminar usuario existente.

   * 

   * Validamos:

   * - Status 200

   * - Contract correcto

   */

  it("Debe eliminar usuario existente", async () => {

    const res = await service.deleteUser(1);

    expect(res.status).toBe(200);

    assertDeleteUserContract(res.data);

  });

  /**

   * CASO 2:

   * Eliminar usuario inexistente.

   * 

   * FakeStore devuelve 200 igualmente (simulación).

   * Validamos al menos status y que no rompa contrato.

   */

  it("Eliminar usuario inexistente", async () => {

    const res = await service.deleteUser(9999);

    expect(res.status).toBe(200);

    expect(res.data).toBeDefined();

  });

  /**

   * CASO EXTRA:

   * ID inválido (string o negativo).

   */

  it("Eliminar usuario con ID inválido", async () => {

    const res = await service.deleteUser(-1);

    expect(res.status).toBe(200);

  });

});
 