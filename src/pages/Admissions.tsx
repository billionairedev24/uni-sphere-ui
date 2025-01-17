import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const admissionSteps = [
  {
    title: "Online Application",
    description: "Complete our comprehensive online application form",
    icon: "📝"
  },
  {
    title: "Document Submission",
    description: "Upload all required academic documents and certificates",
    icon: "📄"
  },
  {
    title: "Application Review",
    description: "Our admissions team will review your application",
    icon: "👀"
  },
  {
    title: "Interview",
    description: "Selected candidates will be invited for an interview",
    icon: "🤝"
  }
];

const Admissions = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Join Our University</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Begin your academic journey with us. We offer a straightforward admission process
            designed to help you achieve your educational goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {admissionSteps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-4">{step.icon}</div>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="group">
            Start Application
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;