"use client";

import Link from "next/link";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { experiments } from "@/lib/data/lab";
import { Navbar } from "@/components/navbar";
import { FaGithub } from "react-icons/fa";

const statusColors = {
  active: "bg-green-500/10 text-green-400 border-green-500/30",
  completed: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  paused: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
};

export default function LabPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="space-y-6">
            <Link href="/#lab">
              <Button variant="ghost" className="group -ml-2">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Lab
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A collection of experiments and side projects. Some are active explorations,
                others are completed prototypes.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiments.map((experiment) => (
              <Link key={experiment.id} href={`/lab/${experiment.id}`}>
                <SpotlightCard className="h-full p-6 hover:border-primary/50 cursor-pointer group">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {experiment.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full border ${
                          statusColors[experiment.status]
                        }`}
                      >
                        {experiment.status}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {experiment.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experiment.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {(experiment.githubUrl || experiment.demoUrl) && (
                      <div className="flex gap-4 pt-3 border-t border-border">
                        {experiment.githubUrl && (
                          <a
                            href={experiment.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <FaGithub className="w-4 h-4" />
                            Code
                          </a>
                        )}
                        {experiment.demoUrl && (
                          <a
                            href={experiment.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
