export namespace Data {
  export interface UserSigUp {
    id?: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    profile: string;
  }

  export interface UserLogin {
    username: string;
    password: string;
  }

  export interface LoginToken {
    token: string;
  }
}
