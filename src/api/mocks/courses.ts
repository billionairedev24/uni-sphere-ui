export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  image: string;
  curriculum: {
    week: number;
    title: string;
    description: string;
  }[];
}

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Introduction to Computer Science",
    description: "A comprehensive introduction to computer science fundamentals",
    instructor: "Dr. Sarah Johnson",
    duration: "12 weeks",
    level: "Beginner",
    price: 499,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    curriculum: [
      {
        week: 1,
        title: "Fundamentals of Programming",
        description: "Basic concepts and programming logic",
      },
      {
        week: 2,
        title: "Data Structures",
        description: "Understanding arrays, lists, and objects",
      },
    ],
  },
  {
    id: "2",
    title: "Advanced Mathematics",
    description: "Deep dive into advanced mathematical concepts",
    instructor: "Prof. Michael Chen",
    duration: "16 weeks",
    level: "Advanced",
    price: 699,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    curriculum: [
      {
        week: 1,
        title: "Linear Algebra",
        description: "Vectors, matrices, and linear transformations",
      },
      {
        week: 2,
        title: "Calculus",
        description: "Derivatives, integrals, and applications",
      },
    ],
  },
];