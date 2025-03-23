import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My Website</div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;