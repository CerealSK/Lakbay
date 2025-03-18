import { Route, Switch, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import NotFound from "./pages/not-found";

function App() {
  // Check if we're running in GitHub Pages environment
  const [isGitHubPages, setIsGitHubPages] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Check if we're in GitHub Pages environment
    const isGitHubPagesEnv = window.location.hostname.includes('github.io') || 
                           window.location.href.includes('.github.io') ||
                           window.location.href.includes('/lakbay/');
    setIsGitHubPages(isGitHubPagesEnv);

    // Handle GitHub Pages base path routing
    if (isGitHubPagesEnv && location === "/") {
      // We're at the base GitHub Pages URL, set location to the app root
      setLocation("/");
    }
  }, [location, setLocation]);

  // Define the base path for GitHub Pages
  const basePath = isGitHubPages ? "/lakbay" : "";

  return (
    <Switch>
      <Route path={`${basePath}/`} component={Home} />
      <Route path={`${basePath}/*`} component={NotFound} />
    </Switch>
  );
}

export default App;
