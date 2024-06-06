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

  export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    profile: string;
    enabled: boolean;
    authorities: Authority[];
    credentialsNonExpired: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
  }

  export interface Authority {
    authority: string;
  }

  export interface Category {
    id?:number;
    title:string;
    description:string;
  }
}
