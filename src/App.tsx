import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Index from "./pages/Index";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Portal from "./pages/Portal";
import CourseApplication from "./pages/CourseApplication";
import FacultyView from "./pages/FacultyView";
import Courses from "./pages/Courses";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith('/apply/');

  return (
    <div className="min-h-screen bg-background">
      {showNavbar && <Navbar />}
      <main className={showNavbar ? "pt-16" : ""}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/apply/:department" element={<CourseApplication />} />
          <Route path="/faculty/:department" element={<FacultyView />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;