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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentNotes.map((note, index) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link href={`/notes/${note.id}`}>
                  <SpotlightCard className="h-full p-6 hover:border-primary/50 cursor-pointer group">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <HiOutlineDocumentText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                        <div className="space-y-2 flex-1">
                          <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
                            {note.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {note.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{new Date(note.date).toLocaleDateString()}</span>
                          {note.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {note.readTime}
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
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
