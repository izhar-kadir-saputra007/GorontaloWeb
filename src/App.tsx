import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import { HelmetProvider } from "react-helmet-async";

// Import komponen baru untuk sistem pembayaran

import ProjectSubmission from "@/pages/ProjectSubmission";
import Payment from "@/pages/PaymentPage";
//import PaymentSuccess from "./pages/PaymentSuccess";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="webcraft-theme">
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground transition-all-smooth">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <HelmetProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/auth" element={<AuthPage />} />
                
                {/* Routes untuk Sistem Pembayaran */}
          
                <Route path="/project-submission" element={<ProjectSubmission />} />
                <Route path="/payment" element={<Payment />} />
                {/* <Route path="/payment/success" element={<PaymentSuccess />} /> */}
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </HelmetProvider>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;