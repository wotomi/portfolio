"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Journey", href: "#journey" },
  { name: "Notes", href: "#notes" },
  { name: "Lab", href: "#lab" },
  { name: "Library", href: "#library" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only detect active section on home page
      if (pathname === "/") {
        const sections = navItems.map((item) => item.href.slice(1));
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    // Check if we're on the home page
    if (pathname === "/") {
      // Already on home page, just scroll
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // On a different page, navigate to home page with hash
      router.push(`/${href}`);
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        {/* Dynamic Island Style Container */}
        <div
          className={cn(
            "relative px-6 py-3 rounded-full backdrop-blur-xl bg-background/60 border border-border/40 shadow-2xl transition-all duration-500",
            scrolled && "bg-background/80 border-border/60 shadow-3xl"
          )}
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.button>
              );
            })}

            {/* Contact Button */}
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hi@dipmind.space"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 py-2 ml-2 text-sm font-semibold rounded-full bg-white/90 text-black hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Send email to hi@dipmind.space"
            >
              <span className="relative z-10">Contact</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed top-20 left-4 right-4 z-40 md:hidden"
        >
          <div className="backdrop-blur-xl bg-background/90 border border-border/60 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-4 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary/10 text-foreground border border-primary/20"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </button>
                );
              })}

              {/* Mobile Contact Button */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hi@dipmind.space"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 mt-2 rounded-xl text-sm font-semibold bg-white/90 text-black hover:bg-white transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
                title="Send email to hi@dipmind.space"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
