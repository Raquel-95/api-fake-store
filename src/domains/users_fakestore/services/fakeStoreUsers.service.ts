import { clients } from "../../../config/clients";
import { HttpClient } from "../../../core/http/httpClient";
import { FakeStoreUser } from "../models/fakeStoreUser.model";
import type { HttpRequestOptions } from "../../../core/http/httpTypes";
import type { User, ApiError } from "../models/fakestoreGetUser.model"
import type { ReqResUsersupdateResponse } from "../models/fakestoreUpdate.model";
import type { FakeStoreUserDelete } from "../models/fakestoreDelete.model";

export class FakeStoreUserService {
  constructor(private readonly http: HttpClient = clients.fakestore) {}

  // POST: crear usuario
  createUser(payload: FakeStoreUser) {
    return this.http.post<FakeStoreUser>(`/users`, payload);
  }
  
  // GET: listar usuarios
  getUsers(opts?: HttpRequestOptions) {
        return this.http.get<User[]>(`/users`, opts);
    }
  // GET: listar usuario singular
  getUser(id: string, opts?: HttpRequestOptions) {
        return this.http.get<User | ApiError>(`/users/${id}`, opts);
    }

  // UPDATE: actualizar datos de usuario
  updateUser(id: string, body: unknown, opts?: HttpRequestOptions) {
    return this.http.put<ReqResUsersupdateResponse>(`/users/${id}`,body,opts)}

  // DELETE: eliminar un usuario
  deleteUser(id: number) {
    return this.http.delete<FakeStoreUserDelete>(`/users/${id}`);
  }

 // DELETE: eliminar sin ID (caso negativo)
deleteUserWithoutId() {
  return this.http.delete<unknown>(`/users/`);
}

}