"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/20">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Let's Connect
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing technology, product ideas, AI
            systems, and interesting opportunities.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="group" asChild>
              <a href="mailto:hi@dipmind.space">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://linkedin.com/in/subhadipmondal89"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/16bitoni"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
