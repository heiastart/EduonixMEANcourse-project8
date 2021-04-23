export class User {

  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public pwd: string,
    public confirmPwd: string
  ) {}
}
