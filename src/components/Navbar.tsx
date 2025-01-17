import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 
              onClick={() => navigate("/")} 
              className="text-xl font-semibold cursor-pointer hover:text-primary transition-colors"
            >
              EduPlatform
            </h1>
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" onClick={() => navigate("/courses")}>
                Courses
              </Button>
              <Button variant="ghost" onClick={() => navigate("/about")}>
                About
              </Button>
              <Button variant="ghost" onClick={() => navigate("/admissions")}>
                Admissions
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button onClick={() => navigate("/apply")}>Apply Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};