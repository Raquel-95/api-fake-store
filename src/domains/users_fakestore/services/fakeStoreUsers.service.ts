import { clients } from "../../../config/clients";
import { HttpClient } from "../../../core/http/httpClient";
//import { CreateUserPayload} from "../contracts/users.contract";
import { FakeStoreUser } from "../models/fakeStoreUser.model";

export class FakeStoreUserService {
  constructor(private readonly http: HttpClient = clients.fakestore) {}

  createUser(payload: FakeStoreUser) {
    return this.http.post<FakeStoreUser>(`/users`, payload);
  }
  // aqui deberian estar los otros metodos 
}