"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/ui/video-player";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data/projects";

export function Work() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="work" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex items-end justify-between">
            <SectionHeading subtitle="Highlighted projects from my portfolio">
              Selected Work
            </SectionHeading>
            <Link href="/work">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link href={`/work/${project.id}`}>
                  <SpotlightCard className="h-full overflow-hidden hover:border-primary/50 cursor-pointer group">
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

                    <div className="p-6 flex flex-col h-full">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 flex-shrink-0" />
                        </div>

                        <p className="text-muted-foreground leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links - Always at bottom */}
                      {(project.githubUrl || project.liveUrl) && (
                        <div className="flex gap-3 pt-4 mt-4 border-t border-border">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <FaGithub className="w-4 h-4" />
                              Code
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </SpotlightCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
