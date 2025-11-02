import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, isTransitioning } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      disabled={isTransitioning}
      className="relative h-10 w-10 rounded-xl border border-border/50 bg-background/80 hover:bg-accent/50 hover:text-accent-foreground transition-all-smooth backdrop-blur-sm"
      aria-label="Toggle theme"
    >
      <motion.div
        className="relative w-5 h-5"
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          {theme === "light" ? (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Sun className="h-5 w-5 text-amber-500" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Moon className="h-5 w-5 text-blue-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Loading indicator during transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute inset-0 rounded-xl bg-primary/20"
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}