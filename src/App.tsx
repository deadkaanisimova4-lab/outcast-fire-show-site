
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogIndex from "./pages/BlogIndex";
import BlogArticle1 from "./pages/BlogArticle1";
import BlogArticle2 from "./pages/BlogArticle2";
import BlogArticle3 from "./pages/BlogArticle3";
import BlogArticle4 from "./pages/BlogArticle4";
import BlogArticle5 from "./pages/BlogArticle5";
import BlogArticle6 from "./pages/BlogArticle6";
import BlogArticle7 from "./pages/BlogArticle7";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/kak-vybrat-ognennoe-shou-dlya-svadby" element={<BlogArticle1 />} />
          <Route path="/blog/top-5-ploshchadok-v-chelyabinske-dlya-faier-shou" element={<BlogArticle2 />} />
          <Route path="/blog/chto-takoe-faier-shou-vidy-i-stili" element={<BlogArticle3 />} />
          <Route path="/blog/ognennoe-shou-na-korporativ" element={<BlogArticle4 />} />
          <Route path="/blog/bezopasnost-ognennogo-shou" element={<BlogArticle5 />} />
          <Route path="/blog/ognennoe-shou-na-den-rozhdeniya" element={<BlogArticle6 />} />
          <Route path="/blog/ognennoe-shou-na-novyj-god" element={<BlogArticle7 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;