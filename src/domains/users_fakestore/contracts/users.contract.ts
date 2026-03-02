import { FakeStoreCreateUserRequest } from "../models/fakeStoreUser.model";

// Validación de contrato para POST
export function assertCreateUserContract(data: any): asserts data is FakeStoreCreateUserRequest {
  if (typeof data.id !== "number") {
    throw new Error("Invalid contract: id must be a number");
  }
}