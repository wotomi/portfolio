"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HiOutlineMicrophone, HiOutlineSparkles, HiOutlineBeaker, HiOutlineChartBar, HiOutlineCpuChip, HiOutlineCodeBracket } from "react-icons/hi2";
import { experiments } from "@/lib/data/lab";

const iconMap: Record<string, any> = {
  "Voice Interfaces": HiOutlineMicrophone,
  "UI Experiments": HiOutlineSparkles,
  "Agent Simulations": HiOutlineBeaker,
  "Financial Models": HiOutlineChartBar,
  "Realtime Collaboration": HiOutlineCpuChip,
  "AI Coding Assistant": HiOutlineCodeBracket,
};

const statusColors = {
  active: "bg-green-500/10 text-green-400 border-green-500/30",
  completed: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  paused: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
};

export function Lab() {
  const featuredExperiments = experiments.slice(0, 3);

  return (
    <section id="lab" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex items-end justify-between">
            <SectionHeading subtitle="Experiments, explorations, and weekend builds">
              Lab
            </SectionHeading>
            <Link href="/lab">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredExperiments.map((experiment, index) => {
              const Icon = iconMap[experiment.title] || HiOutlineSparkles;
              return (
                <motion.div
                  key={experiment.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/lab/${experiment.id}`}>
                    <SpotlightCard
                      className="h-full p-6 hover:border-primary/50 cursor-pointer group"
                      enableScale
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span
                            className={`px-2 py-1 text-xs rounded-full border ${
                              statusColors[experiment.status]
                            }`}
                          >
                            {experiment.status}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {experiment.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {experiment.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {experiment.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs rounded bg-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
