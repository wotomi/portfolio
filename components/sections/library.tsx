"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { HiOutlineBookOpen, HiOutlineCpuChip, HiOutlineChartBar, HiOutlineUsers, HiOutlineCircleStack } from "react-icons/hi2";

const currentReading = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
  },
  {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
  },
];

const researchInterests = [
  {
    title: "Agent Memory",
    description: "Long-term memory architectures for AI systems",
    icon: HiOutlineCpuChip,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Knowledge Graphs",
    description: "Structured knowledge representation and reasoning",
    icon: HiOutlineCircleStack,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Financial Systems",
    description: "AI applications in market analysis and trading",
    icon: HiOutlineChartBar,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Human-AI Interaction",
    description: "Designing natural and intuitive AI interfaces",
    icon: HiOutlineUsers,
    color: "from-orange-500/20 to-amber-500/20",
  },
];

export function Library() {
  return (
    <section id="library" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <SectionHeading subtitle="Books, research, and areas of exploration">
            Library
          </SectionHeading>

          {/* Currently Reading */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <HiOutlineBookOpen className="w-6 h-6" />
              Currently Reading
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {currentReading.map((book, index) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-16 rounded bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {book.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{book.author}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <HiOutlineCpuChip className="w-6 h-6" />
              Research Interests
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {researchInterests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative p-6 rounded-xl border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all group overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-foreground transition-colors">
                          {interest.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
