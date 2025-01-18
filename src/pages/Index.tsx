import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center]" />
        </div>
        <div className="container mx-auto px-4 text-center relative animate-fadeIn">
          <Badge 
            variant="secondary" 
            className="mb-6 inline-flex"
          >
            Now accepting applications for 2024
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Transform Your Future with Online Education
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Access world-class education from anywhere in the world. Learn from industry experts and join a global community of learners.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button size="lg" onClick={() => navigate("/courses")}>
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/apply/general")}>
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;