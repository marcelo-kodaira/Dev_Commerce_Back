export interface ICreateUserRequest {
    name: string;
    email: string;
    password: string;
  }
  
export interface IUpdateUserRequest {
  name?: string;
  email?: string;
  password:string;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

