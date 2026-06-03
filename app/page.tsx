"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Work } from "@/components/sections/work";
import { Journey } from "@/components/sections/journey";
import { Notes } from "@/components/sections/notes";
import { Lab } from "@/components/sections/lab";
import { Library } from "@/components/sections/library";
import { Contact } from "@/components/sections/contact";
import { LoadingScreen } from "@/components/loading-screen";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Hero />
            <Skills />
            <Work />
            <Journey />
            <Notes />
            <Lab />
            <Library />
            <Contact />
          </main>
          <footer className="py-12 px-4 border-t border-border">
            <div className="container max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-lg font-semibold mb-1">Subhadip</p>
                  <p className="text-sm text-muted-foreground">
                    Building intelligent systems and AI products
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href="mailto:hi@dipmind.space"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    hi@dipmind.space
                  </a>
                  <a
                    href="https://github.com/16bitoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/subhadipmondal89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
                <p>© 2026 Subhadip. Built with Next.js</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
