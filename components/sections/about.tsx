"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">


      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <SectionHeading>About Me</SectionHeading>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Hi, I'm Subhadip.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              I started my journey working with embedded systems and hardware,
              designing solutions close to the physical world. Over time, my
              interests shifted toward software, machine learning, and eventually
              AI systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Today, I work as a Business Analyst while continuing to build
              AI-powered products, research ideas, and developer tools. My
              interests span agentic systems, retrieval architectures, memory
              systems, financial intelligence, and human-computer interaction.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              I enjoy turning complex ideas into practical products and constantly
              exploring what comes next.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
