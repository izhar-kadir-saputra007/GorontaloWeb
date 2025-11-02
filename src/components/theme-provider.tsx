import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isTransitioning: boolean;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  isTransitioning: false,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "webcraft-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setTheme = (newTheme: Theme) => {
    setIsTransitioning(true);
    
    // Add transition class to body for smooth transition
    document.body.classList.add('theme-transition');
    
    setTimeout(() => {
      setThemeState(newTheme);
      localStorage.setItem(storageKey, newTheme);
      
      setTimeout(() => {
        setIsTransitioning(false);
        document.body.classList.remove('theme-transition');
      }, 400); // Match this with CSS transition duration
    }, 50);
  };

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (theme === "system") {
        setIsTransitioning(true);
        document.body.classList.add('theme-transition');
        
        setTimeout(() => {
          const root = window.document.documentElement;
          root.classList.remove("light", "dark");
          root.classList.add(mediaQuery.matches ? "dark" : "light");
          
          setTimeout(() => {
            setIsTransitioning(false);
            document.body.classList.remove('theme-transition');
          }, 400);
        }, 50);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    isTransitioning,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      <div className={`min-h-screen transition-all-smooth ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}>
        {children}
      </div>
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};