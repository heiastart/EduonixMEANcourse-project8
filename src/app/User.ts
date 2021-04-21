export interface User {
  firstName: string,
  lastName: string,
  email: string,
  password: {
    pwd: string,
    confirmPwd: string
  }
}
