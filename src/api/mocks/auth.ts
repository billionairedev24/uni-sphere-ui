export interface User {
  id: string;
  email: string;
  name: string;
  role: "student" | "instructor" | "admin";
}

export const mockUsers: User[] = [
  {
    id: "1",
    email: "student@example.com",
    name: "John Doe",
    role: "student",
  },
  {
    id: "2",
    email: "instructor@example.com",
    name: "Sarah Johnson",
    role: "instructor",
  },
];