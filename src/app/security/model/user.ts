export interface User {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  dateOfBirth: Date,
}

export interface UserNotRegistered {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  dateOfBirth: Date,
}
