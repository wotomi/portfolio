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

          {/* Offset grid with variable heights */}
          <div className="grid gap-6 md:grid-cols-6 auto-rows-fr">
            {featuredExperiments.map((experiment, index) => {
              const Icon = iconMap[experiment.title] || HiOutlineSparkles;
              return (
                <motion.div
                  key={experiment.id}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  viewport={{ once: true }}
                  className={
                    index === 0 ? "md:col-span-4" :
                    index === 1 ? "md:col-span-2" :
                    "md:col-span-6"
                  }
                >
                  <Link href={`/lab/${experiment.id}`}>
                    <SpotlightCard
                      className="h-full cursor-pointer group"
                      enableScale
                    >
                      <div className="p-8 space-y-6">
                        <div className="flex items-start justify-between">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg shadow-primary/0 group-hover:shadow-primary/20">
                            <Icon className="w-7 h-7" />
                          </div>
                          <span
                            className={`px-3 py-1.5 text-xs font-semibold rounded-full border-2 ${
                              statusColors[experiment.status]
                            } transition-all duration-300`}
                          >
                            {experiment.status}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                            {experiment.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {experiment.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {experiment.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
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
