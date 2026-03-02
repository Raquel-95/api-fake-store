import { expect } from "vitest";
import type { ReqResUsersupdateResponse } from "../models/fakestoreUpdate.model";
 
/**
 * Contract-Based Testing
 * Valida estructura mínima esperada y tipos básicos.
 * No valida reglas de negocio específicas.
 */
 
export function assertUsersupdateListContract(data: ReqResUsersupdateResponse) {
  // Root fields
  expect(data).toHaveProperty("id");
  expect(data).toHaveProperty("username");
  expect(data).toHaveProperty("email");
  expect(data).toHaveProperty("password");
 
 
  expect(typeof data.id).toBe("number");
  expect(typeof data.username).toBe("string");
  expect(typeof data.email).toBe("string");
  expect(typeof data.password).toBe("string");
 
}
 
 
 