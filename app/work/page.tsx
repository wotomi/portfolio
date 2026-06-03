"use client";

import Link from "next/link";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { VideoPlayer } from "@/components/ui/video-player";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data/projects";
import { Navbar } from "@/components/navbar";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <Link href="/#work">
              <Button variant="ghost" className="group -ml-2">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Selected Work
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A collection of projects spanning AI systems, financial tools, and developer platforms.
                Each represents exploration into challenging problems and practical solutions.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Link key={project.id} href={`/work/${project.id}`}>
                <SpotlightCard className="h-full overflow-hidden hover:border-primary/50 cursor-pointer group transition-all">
                  {/* Video Demo Banner */}
                  {project.videoUrl && (
                    <div className="aspect-video w-full">
                      <VideoPlayer
                        src={project.videoUrl}
                        thumbnail={project.videoThumbnail}
                        autoPlay={false}
                        loop={true}
                        muted={true}
                        className="w-full h-full rounded-none"
                      />
                    </div>
                  )}

                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {(project.githubUrl || project.liveUrl) && (
                      <div className="flex gap-4 pt-4 border-t border-border">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <FaGithub className="w-4 h-4" />
                            View Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
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
