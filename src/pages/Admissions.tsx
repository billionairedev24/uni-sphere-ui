import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, GraduationCap, FileText, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const admissionSteps = [
  {
    title: "Online Application",
    description: "Complete our comprehensive online application form",
    icon: <FileText className="w-8 h-8 text-primary" />,
  },
  {
    title: "Document Submission",
    description: "Upload all required academic documents and certificates",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
  },
  {
    title: "Application Review",
    description: "Our admissions team will review your application",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Final Decision",
    description: "Receive your admission decision",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
  }
];

const requirements = [
  "High School Diploma or equivalent",
  "Minimum GPA of 3.0",
  "Letters of Recommendation",
  "Statement of Purpose",
  "Standardized Test Scores (SAT/ACT)",
];

const Admissions = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 space-y-12 animate-fadeIn">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-primary">Begin Your Journey With Us</h1>
        <p className="text-lg text-gray-600">
          Take the first step towards your future by applying to our programs.
          Our admissions process is designed to be straightforward and supportive.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => navigate("/apply/general")} size="lg" className="group">
            Start New Application
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate("/portal")}
          >
            Continue Application
          </Button>
        </div>
      </div>

      {/* Application Process */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Application Process</h2>
          <p className="text-gray-600">Follow these steps to complete your application</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionSteps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{step.icon}</div>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Requirements Section */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Admission Requirements</h2>
          <p className="text-gray-600">Make sure you meet these requirements before applying</p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  {req}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Programs Section */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Available Programs</h2>
          <p className="text-gray-600">Explore our diverse range of academic programs</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/courses")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Browse All Courses
              </CardTitle>
              <CardDescription>
                Explore our comprehensive list of available courses and programs
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/faculty/computer-science")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Meet Our Faculty
              </CardTitle>
              <CardDescription>
                Learn about our distinguished faculty members and their research
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Admissions;