import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const departments = [
  {
    name: "Computer Science",
    description: "Exploring the frontiers of computing and technology",
    faculty: ["Dr. Sarah Johnson", "Dr. Michael Chen", "Dr. Emily Wong"],
    programs: ["B.Sc. Computer Science", "M.Sc. Artificial Intelligence", "Ph.D. Computer Science"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Business Administration",
    description: "Developing future business leaders and entrepreneurs",
    faculty: ["Dr. James Wilson", "Dr. Lisa Park", "Dr. Robert Brown"],
    programs: ["BBA", "MBA", "DBA"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Engineering",
    description: "Innovation through technical excellence",
    faculty: ["Dr. David Lee", "Dr. Maria Garcia", "Dr. John Smith"],
    programs: ["B.Eng. Mechanical", "M.Eng. Electrical", "Ph.D. Engineering"],
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop"
  }
];

const Academics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 py-16 animate-fadeIn">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Academic Excellence</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our world-class departments and programs led by distinguished faculty members.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dept.image} 
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">{dept.name}</h3>
              </div>
              <CardHeader>
                <CardDescription className="text-base">{dept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Programs</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {dept.programs.map((program, idx) => (
                        <li key={idx} className="text-sm text-gray-600">{program}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 flex gap-2">
                    <Button 
                      variant="outline"
                      onClick={() => navigate(`/faculty/${dept.name.toLowerCase().replace(/\s+/g, '-')}`)}
                    >
                      View Faculty
                    </Button>
                    <Button
                      onClick={() => navigate(`/apply/${dept.name.toLowerCase().replace(/\s+/g, '-')}`)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;