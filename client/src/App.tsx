import { Route, Switch, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import NotFound from "./pages/not-found";

function App() {
  // For a static site, we need to handle different deployment environments
  const [basePath, setBasePath] = useState('');
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Determine the base path based on the deployment environment
    // For GitHub Pages, we use '/lakbay', for other environments we use relative paths
    const isGitHubPages = window.location.hostname.includes('github.io') || 
                         window.location.href.includes('.github.io') ||
                         window.location.href.includes('/lakbay/');
    
    // We're building a fully static site, so calculate the base path accordingly
    const calculatedBasePath = isGitHubPages ? "/lakbay" : "";
    setBasePath(calculatedBasePath);

    // Handle base path routing for GitHub Pages
    if (isGitHubPages && location === "/") {
      setLocation("/");
    }
    
    // Always set the global flag for static mode
    window.IS_STATIC_MODE = true;
    
    console.log("App running in static mode, base path:", calculatedBasePath);
  }, [location, setLocation]);

  return (
    <Switch>
      <Route path={`${basePath}/`} component={Home} />
      <Route path={`${basePath}/*`} component={NotFound} />
    </Switch>
  );
}

export default App;
