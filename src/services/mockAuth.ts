import { User, mockUsers } from "@/api/mocks/auth";

export const mockAuthService = {
  currentUser: null as User | null,

  register: async (email: string, password: string, name: string): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) throw new Error("User already exists");
    
    const newUser: User = {
      id: (mockUsers.length + 1).toString(),
      email,
      name,
      role: "student"
    };
    
    mockUsers.push(newUser);
    mockAuthService.currentUser = newUser;
    return newUser;
  },

  login: async (email: string, password: string): Promise<User> => {
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