import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const integrations = [
  {
    name: "Canvas LMS",
    description: "Access your courses, assignments, and grades",
    link: "#"
  },
  {
    name: "Microsoft 365",
    description: "Email, cloud storage, and collaboration tools",
    link: "#"
  },
  {
    name: "Library Resources",
    description: "Digital library and research databases",
    link: "#"
  },
  {
    name: "Student Services",
    description: "Support services and resources",
    link: "#"
  }
];

const Portal = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Student Portal</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {integrations.map((integration, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{integration.name}</CardTitle>
                <CardDescription>{integration.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group" asChild>
                  <a href={integration.link} target="_blank" rel="noopener noreferrer">
                    Launch
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portal;