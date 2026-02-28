import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Quiz from "./pages/Quiz";
import Flashcards from "./pages/Flashcards";
import Courses from "./pages/Courses";
import Progress from "./pages/Progress";
import DPP from "./pages/DPP";
import PYQ from "./pages/PYQ";

// Use base path for GitHub Pages deployment, empty string for dev
const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '';

function AppRouter() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/learn"} component={Learn} />
      <Route path={"/quiz"} component={Quiz} />
      <Route path={"/flashcards"} component={Flashcards} />
      <Route path={"/courses"} component={Courses} />
      <Route path={"/progress"} component={Progress} />
      <Route path={"/dpp"} component={DPP} />
      <Route path={"/pyq"} component={PYQ} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <WouterRouter base={base}>
            <AppRouter />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
