const API_BASE_URL = "http://localhost:8080";

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export const authService = {
  async signup(formData: SignupFormData): Promise<User> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },

  async login(email: string, password: string): Promise<User> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
