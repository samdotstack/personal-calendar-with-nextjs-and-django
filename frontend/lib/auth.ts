import { api } from "./api";

type RegisterData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type LoginData = {
  email: string;
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