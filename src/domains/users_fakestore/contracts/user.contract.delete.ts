import { expect } from "vitest";
import type { FakeStoreUserDelete } from "../models/fakestoreDelete.model";
 
/**
* Valida estructura del DELETE exitoso.
* Solo valida forma y tipos.
*/
export function assertDeleteUserContract(data: FakeStoreUserDelete) {
  expect(typeof data.id).toBe("number");
  expect(typeof data.email).toBe("string");
  expect(typeof data.username).toBe("string");
 
  expect(data).toHaveProperty("address");
  expect(data.address).toHaveProperty("city");
  expect(data.address.geolocation).toHaveProperty("lat");
 
  expect(data).toHaveProperty("name");
  expect(data.name).toHaveProperty("firstname");
}