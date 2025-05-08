import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import Index from "./pages/Index";
import Nouveautes from "./pages/Nouveautes";
import BestSellers from "./pages/BestSellers";
import Boutique from "./pages/Boutique";
import Journal from "./pages/Journal";
import APropos from "./pages/APropos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <FavoritesProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/nouveautes" element={<Nouveautes />} />
              <Route path="/best-sellers" element={<BestSellers />} />
              <Route path="/boutique" element={<Boutique />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/a-propos" element={<APropos />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </HashRouter>
        </TooltipProvider>
      </FavoritesProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
