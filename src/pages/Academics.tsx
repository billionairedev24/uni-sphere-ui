import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const departments = [
  {
    name: "Computer Science",
    description: "Exploring the frontiers of computing and technology",
    faculty: ["Dr. Sarah Johnson", "Dr. Michael Chen", "Dr. Emily Wong"],
    programs: ["B.Sc. Computer Science", "M.Sc. Artificial Intelligence", "Ph.D. Computer Science"]
  },
  {
    name: "Business Administration",
    description: "Developing future business leaders and entrepreneurs",
    faculty: ["Dr. James Wilson", "Dr. Lisa Park", "Dr. Robert Brown"],
    programs: ["BBA", "MBA", "DBA"]
  },
  {
    name: "Engineering",
    description: "Innovation through technical excellence",
    faculty: ["Dr. David Lee", "Dr. Maria Garcia", "Dr. John Smith"],
    programs: ["B.Eng. Mechanical", "M.Eng. Electrical", "Ph.D. Engineering"]
  }
];

const Academics = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Academic Programs</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{dept.name}</CardTitle>
                <CardDescription>{dept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Programs</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {dept.programs.map((program, idx) => (
                        <li key={idx} className="text-sm">{program}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Faculty</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {dept.faculty.map((member, idx) => (
                        <li key={idx} className="text-sm">{member}</li>
                      ))}
                    </ul>
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