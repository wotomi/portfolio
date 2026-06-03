"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { HiOutlineDocumentText, HiOutlineSparkles } from "react-icons/hi2";
import { notes } from "@/lib/data/notes";
import { Navbar } from "@/components/navbar";

export default function NotesPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(new Set(notes.flatMap((note) => note.tags)));

  // Filter notes by selected tag
  const filteredNotes = selectedTag
    ? notes.filter((note) => note.tags.includes(selectedTag))
    : notes;

  // Featured note (most recent)
  const featuredNote = notes[0];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <Link href="/#notes">
              <Button variant="ghost" className="group -ml-2">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <HiOutlineDocumentText className="w-12 h-12 text-primary" />
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Notes
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A collection of thoughts, learnings, and explorations on technology, philosophy, books, and building products.
              </p>
            </motion.div>
          </div>

          {/* Tags Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedTag === null
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Featured Note */}
          {!selectedTag && featuredNote && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineSparkles className="w-5 h-5 text-primary" />
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Featured
                </h2>
              </div>
              <Link href={`/notes/${featuredNote.id}`}>
                <SpotlightCard className="p-8 hover:border-primary/50 cursor-pointer group overflow-hidden">
                  <div className="relative">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
                    <div className="relative space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors leading-tight">
                          {featuredNote.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {featuredNote.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 pt-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredNote.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        {featuredNote.readTime && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {featuredNote.readTime}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {featuredNote.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          )}

          {/* All Notes Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNotes
              .slice(selectedTag ? 0 : 1)
              .map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={`/notes/${note.id}`}>
                    <SpotlightCard className="h-full p-6 hover:border-primary/50 cursor-pointer group">
                      <div className="space-y-4 h-full flex flex-col">
                        <div className="flex-1 space-y-3">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                            {note.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {note.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(note.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                            {note.readTime && (
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                {note.readTime}
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {note.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                            {note.tags.length > 2 && (
                              <span className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
                                +{note.tags.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </motion.div>
              ))}
          </div>

          {/* Empty State */}
          {filteredNotes.length === 0 && (
            <div className="text-center py-16">
              <HiOutlineDocumentText className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                No notes found with tag "{selectedTag}"
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSelectedTag(null)}
              >
                Clear filter
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
