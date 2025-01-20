import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { mockAuthService } from "@/services/mockAuth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  const navigate = useNavigate();
  const isStudent = mockAuthService.currentUser?.role === "student";

  return (
    <nav className="border-b bg-white fixed w-full z-50 shadow-sm">
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
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[400px] bg-white shadow-lg rounded-md">
                        <NavigationMenuLink 
                          className="block p-3 hover:bg-accent rounded-md cursor-pointer"
                          onClick={() => navigate("/academics")}
                        >
                          <div className="text-sm font-medium">Programs & Departments</div>
                          <div className="text-sm text-muted-foreground">Explore our academic offerings</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink 
                          className="block p-3 hover:bg-accent rounded-md cursor-pointer"
                          onClick={() => navigate("/faculty/computer-science")}
                        >
                          <div className="text-sm font-medium">Faculty & Research</div>
                          <div className="text-sm text-muted-foreground">Meet our distinguished faculty</div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button variant="ghost" onClick={() => navigate("/courses")}>
                      Explore Courses
                    </Button>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Button variant="ghost" onClick={() => navigate("/admissions")}>
                      Admissions
                    </Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {isStudent ? (
              <Button variant="ghost" onClick={() => navigate("/portal")}>
                Student Portal
              </Button>
            ) : (
              <Button onClick={() => navigate("/apply/general")}>Apply Now</Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};