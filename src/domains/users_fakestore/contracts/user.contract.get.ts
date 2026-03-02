import { expect } from "vitest";
import type { User, Name, Address, Geolocation } from "../models/fakestoreGetUser.model";

export function assertUsersListContract(data: User[]) { //para el listado 
    expect(Array.isArray(data)).toBe(true);

    data.forEach(assertUserContract);
}

export function assertUserContract(user: User) { //para usuario individual
    // Propiedades principales
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("email");
    expect(user).toHaveProperty("username");
    expect(user).toHaveProperty("password");
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("address");
    expect(user).toHaveProperty("phone");
    expect(user).toHaveProperty("__v");

    // Tipos
    expect(typeof user.id).toBe("number");
    expect(typeof user.email).toBe("string");
    expect(typeof user.username).toBe("string");
    expect(typeof user.password).toBe("string");
    expect(typeof user.phone).toBe("string");
    expect(typeof user.__v).toBe("number");

    // Objetos anidados
    assertNameContract(user.name);
    assertAddressContract(user.address);
}

/* ===============================
   NAME CONTRACT
================================= */

export function assertNameContract(name: Name) {
    expect(name).toHaveProperty("firstname");
    expect(name).toHaveProperty("lastname");

    expect(typeof name.firstname).toBe("string");
    expect(typeof name.lastname).toBe("string");

    expect(name.firstname.length).toBeGreaterThan(0);
    expect(name.lastname.length).toBeGreaterThan(0);
}

/* ===============================
   ADDRESS CONTRACT
================================= */

export function assertAddressContract(address: Address) {
    expect(address).toHaveProperty("city");
    expect(address).toHaveProperty("street");
    expect(address).toHaveProperty("number");
    expect(address).toHaveProperty("zipcode");
    expect(address).toHaveProperty("geolocation");

    expect(typeof address.city).toBe("string");
    expect(typeof address.street).toBe("string");
    expect(typeof address.number).toBe("number");
    expect(typeof address.zipcode).toBe("string");

    assertGeolocationContract(address.geolocation);
}

/* ===============================
   GEOLOCATION CONTRACT
================================= */

export function assertGeolocationContract(geo: Geolocation) {
    expect(geo).toHaveProperty("lat");
    expect(geo).toHaveProperty("long");

    expect(typeof geo.lat).toBe("string");
    expect(typeof geo.long).toBe("string");

    expect(geo.lat.length).toBeGreaterThan(0);
    expect(geo.long.length).toBeGreaterThan(0);
}