import { AuthProvider } from "react-admin";

const API_URL = "http://localhost:3000/api/admin";

export const authProvider: AuthProvider = {
  login: async ({ username: userName, password }) => {
    const request = new Request(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    try {
      const response = await fetch(request);
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      const { token } = await response.json();
      localStorage.setItem("token", token);
    } catch (error) {
      return Promise.reject(error);
    }
    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },

  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getPermissions: async () => {
    return Promise.resolve();
  },
};
