import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DocumentUpload } from "@/components/DocumentUpload";
import { LoginForm } from "@/components/LoginForm";
import { mockAuthService } from "@/services/mockAuth";
import { mockApplicationService, ApplicationData } from "@/services/mockApplications";
import { createCheckoutSession } from "@/services/mockStripe";
import { mockCourses } from "@/api/mocks/courses";
import { UploadedDocument } from "@/services/mockStorage";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  courseId: z.string().min(1, "Please select a course"),
  education: z.string().min(1, "Please provide your educational background"),
  statement: z.string().min(100, "Personal statement must be at least 100 characters"),
});

const APPLICATION_FEE = 50;

const CourseApplication = () => {
  const { department } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [documents, setDocuments] = useState<UploadedDocument[]>([]);
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [application, setApplication] = useState<ApplicationData | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      courseId: "",
      education: "",
      statement: "",
    },
  });

  useEffect(() => {
    const loadExistingApplication = async () => {
      if (!mockAuthService.currentUser) return;
      
      const existing = await mockApplicationService.getApplication(
        mockAuthService.currentUser.id,
        department || "general"
      );
      
      if (existing) {
        setApplication(existing);
        form.reset({
          firstName: existing.personalInfo.firstName,
          lastName: existing.personalInfo.lastName,
          email: existing.personalInfo.email,
          phone: existing.personalInfo.phone,
          courseId: existing.education.level,
          education: existing.education.background,
          statement: existing.statement,
        });
        setDocuments(existing.documents);
      }
    };

    loadExistingApplication();
  }, [department, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!mockAuthService.currentUser) {
      setShowLogin(true);
      return;
    }

    if (documents.length === 0) {
      toast({
        title: "Documents required",
        description: "Please upload at least one document.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await mockApplicationService.saveProgress({
        userId: mockAuthService.currentUser.id,
        department: department || "general",
        personalInfo: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
        },
        education: {
          level: values.courseId,
          background: values.education,
        },
        documents,
        statement: values.statement,
        status: "submitted",
      });

      const session = await createCheckoutSession(values.email);
      
      toast({
        title: "Application Submitted",
        description: "Your application has been received. Proceeding to payment...",
      });

      setTimeout(() => {
        toast({
          title: "Payment Successful",
          description: "Your application fee has been processed successfully.",
        });
      }, 2000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (showLogin) {
    return (
      <div className="container max-w-md mx-auto px-4 py-8">
        <Alert className="mb-6">
          <AlertTitle>Authentication Required</AlertTitle>
          <AlertDescription>
            Please login or create an account to continue with your application.
          </AlertDescription>
        </Alert>
        <LoginForm onSuccess={() => setShowLogin(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background py-16">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
          <h1 className="text-3xl font-bold text-primary mb-2">Course Application</h1>
          <p className="text-gray-600 mb-4">
            {department ? department.split("-").join(" ") : "General"} Application Form
          </p>

          <Alert className="mb-6">
            <AlertTitle>Application Fee Required</AlertTitle>
            <AlertDescription>
              A non-refundable application fee of ${APPLICATION_FEE} USD is required to process your application.
            </AlertDescription>
          </Alert>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="courseId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Course</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {mockCourses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="education"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Educational Background</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please provide details about your educational background..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="statement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Personal Statement</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself and why you're interested in this program..."
                        className="h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <FormLabel>Required Documents</FormLabel>
                <DocumentUpload
                  onUploadComplete={(doc) => setDocuments(prev => [...prev, doc])}
                />
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-2 bg-secondary/20 rounded">
                    <span>{doc.name}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setDocuments(prev => prev.filter(d => d.id !== doc.id))}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  By submitting this form, you agree to pay the non-refundable application fee of ${APPLICATION_FEE} USD.
                </p>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Processing..." : `Submit Application and Pay $${APPLICATION_FEE}`}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CourseApplication;
