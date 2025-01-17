import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Faculty {
  id: number;
  name: string;
  title: string;
  department: string;
  specialization: string;
  email: string;
  image: string;
  bio: string;
}

// This would typically come from an API
const facultyData: Faculty[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Professor",
    department: "computer-science",
    specialization: "Artificial Intelligence",
    email: "sarah.johnson@edu.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop",
    bio: "Dr. Johnson specializes in artificial intelligence and machine learning, with over 15 years of research experience in the field.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Associate Professor",
    department: "computer-science",
    specialization: "Cybersecurity",
    email: "michael.chen@edu.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074&auto=format&fit=crop",
    bio: "Dr. Chen is a leading expert in cybersecurity and network protection, conducting groundbreaking research in secure systems.",
  },
  {
    id: 3,
    name: "Dr. James Wilson",
    title: "Professor",
    department: "business-administration",
    specialization: "Finance",
    email: "james.wilson@edu.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "Dr. Wilson specializes in financial markets and risk management, bringing extensive industry experience to his academic role.",
  },
];

const FacultyView = () => {
  const { department } = useParams();
  const facultyMembers = facultyData.filter(
    (faculty) => faculty.department === department
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Faculty Members - {department?.split("-").join(" ")}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty) => (
            <Card key={faculty.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{faculty.name}</CardTitle>
                <p className="text-primary font-medium">{faculty.title}</p>
                <p className="text-sm text-gray-600">{faculty.specialization}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{faculty.bio}</p>
                <a
                  href={`mailto:${faculty.email}`}
                  className="text-primary hover:underline"
                >
                  {faculty.email}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyView;