import { api } from "./api";

type RegisterData = {
  username: string;
  email: string;
  password: string;
};

type LoginData = {
  username: string;
  password: string;
};

export async function register(data: RegisterData) {
  return api("/api/auth/register/", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function login(data: LoginData) {
  return api("/api/auth/login/", {
    method: "POST",
    body: JSON.stringify(data),
  });
}