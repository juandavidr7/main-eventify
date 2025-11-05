import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoader from "./components/layout/PageLoader";

// Lazy loading para optimizar la carga inicial
const Landing = lazy(() => import("./pages/Landing"));
const Calendario = lazy(() => import("./pages/Calendario"));
const EventsList = lazy(() => import("./pages/EventsList"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Search = lazy(() => import("./pages/Search"));
const CreateEvent = lazy(() => import("./pages/CreateEvent"));
const Reports = lazy(() => import("./pages/Reports"));
const Notifications = lazy(() => import("./pages/Notifications"));
const RateEvents = lazy(() => import("./pages/RateEvents"));
const Profile = lazy(() => import("./pages/Profile"));
const EventDetail = lazy(() => import("./pages/EventDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/eventos" element={<EventsList />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/search" element={<Search />} />
            <Route path="/dashboard/create" element={<CreateEvent />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/notifications" element={<Notifications />} />
            <Route path="/dashboard/rate" element={<RateEvents />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
