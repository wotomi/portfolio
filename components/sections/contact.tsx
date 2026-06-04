"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">


      <div className="container max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Heading with optical adjustments */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium tracking-wider uppercase text-primary">
                Available for opportunities
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always interested in discussing technology, product ideas, AI
              systems, and interesting opportunities.
            </p>
          </div>

          {/* CTA Buttons with nested icon architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="group" asChild>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hi@dipmind.space"
                target="_blank"
                rel="noopener noreferrer"
                title="Send email to hi@dipmind.space"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
                <span className="ml-2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                  <span className="text-xs">→</span>
                </span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <a
                href="https://linkedin.com/in/subhadipmondal89"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
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
