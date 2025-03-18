import { Route, Switch, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import NotFound from "./pages/not-found";

function App() {
  // Since we're making a static site, we need to handle different deployment environments
  const [basePath, setBasePath] = useState('');
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Determine the base path based on the deployment environment
    // This handles GitHub Pages and other static hosting environments
    const isStaticHostingEnv = window.location.hostname.includes('github.io') || 
                             window.location.href.includes('.github.io') ||
                             window.location.href.includes('/lakbay/');
    
    const calculatedBasePath = isStaticHostingEnv ? "/lakbay" : "";
    setBasePath(calculatedBasePath);

    // Handle base path routing
    if (isStaticHostingEnv && location === "/") {
      // We're at the base URL, set location to the app root
      setLocation("/");
    }
    
    // Set a global flag to indicate we're in static mode for components that need it
    window.IS_STATIC_MODE = true;
  }, [location, setLocation]);

  return (
    <Switch>
      <Route path={`${basePath}/`} component={Home} />
      <Route path={`${basePath}/*`} component={NotFound} />
    </Switch>
  );
}

export default App;
