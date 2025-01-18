import { User } from "@/api/mocks/auth";

export const mockAuthService = {
  currentUser: null as User | null,

  login: async (email: string, password: string): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = mockUsers.find(u => u.email === email);
    if (!user) throw new Error("Invalid credentials");
    
    mockAuthService.currentUser = user;
    return user;
  },

  logout: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    mockAuthService.currentUser = null;
  },

  isAuthenticated: () => {
    return mockAuthService.currentUser !== null;
  }
};