export type FakeStoreUserDelete = {
  address: FakeStoreAddress;
  id: number;
  email: string;
  username: string;
  password: string;
  name: FakeStoreName;
  phone: string;
  __v: number;
};
 
export type FakeStoreAddress = {
  geolocation: FakeStoreGeolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
};
 
export type FakeStoreGeolocation = {
  lat: string;
  long: string;
};
 
export type FakeStoreName = {
  firstname: string;
  lastname: string;
};