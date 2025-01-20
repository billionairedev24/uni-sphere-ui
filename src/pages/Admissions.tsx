import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, GraduationCap, FileText, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const requirements = [
  "High School Diploma or equivalent",
  "Minimum GPA of 3.0",
  "Letters of Recommendation",
  "Statement of Purpose",
  "Standardized Test Scores (SAT/ACT)",
];

const Admissions = () => {
  const navigate = useNavigate();

  const handleStartApplication = () => {
    navigate('/apply/general');
  };

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

        <Tabs defaultValue="process" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="courses">Available Courses</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="process" className="space-y-8">
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
          </TabsContent>

          <TabsContent value="requirements">
            <Card>
              <CardHeader>
                <CardTitle>Admission Requirements</CardTitle>
                <CardDescription>
                  Please ensure you meet these requirements before applying
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {req}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Available Programs</CardTitle>
                <CardDescription>
                  Explore our diverse range of academic programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Button
                    variant="outline"
                    className="justify-start"
                    onClick={() => navigate('/courses')}
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    View All Courses
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start"
                    onClick={() => navigate('/faculty/computer-science')}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Meet Our Faculty
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Admissions Office</CardTitle>
                <CardDescription>
                  Get in touch with our admissions team for any questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="flex items-center gap-2">
                    📧 admissions@university.edu
                  </p>
                  <p className="flex items-center gap-2">
                    📞 1-800-ADMISSIONS
                  </p>
                  <p className="flex items-center gap-2">
                    🏢 Monday - Friday, 9:00 AM - 5:00 PM EST
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center space-y-4">
          <Button size="lg" onClick={handleStartApplication} className="group">
            Start Application
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-gray-500">
            Already started an application?{" "}
            <Button variant="link" className="p-0" onClick={() => navigate('/portal')}>
              Continue here
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admissions;