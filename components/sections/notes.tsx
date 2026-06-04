"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { notes } from "@/lib/data/notes";

export function Notes() {
  const recentNotes = notes.slice(0, 3);

  return (
    <section id="notes" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex items-end justify-between">
            <SectionHeading subtitle="Thoughts on AI, systems, and building">
              Notes
            </SectionHeading>
            <Link href="/notes">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Masonry-inspired asymmetric grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 auto-rows-fr">
            {recentNotes.map((note, index) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1]
                }}
                viewport={{ once: true }}
                className={
                  index === 0 ? "lg:col-span-3" :
                  index === 1 ? "lg:col-span-2" :
                  "lg:col-span-5"
                }
              >
                <Link href={`/notes/${note.id}`}>
                  <SpotlightCard className="h-full cursor-pointer group">
                    <div className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 flex-shrink-0">
                          <HiOutlineDocumentText className="w-6 h-6" />
                        </div>
                        <div className="space-y-3 flex-1">
                          <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                            {note.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {note.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 mt-4 border-t border-border/30">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                          <span>{new Date(note.date).toLocaleDateString()}</span>
                          {note.readTime && (
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              {note.readTime}
                            </span>
                          )}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:translate-x-1">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
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
