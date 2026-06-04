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
            <div className="grid gap-6 md:grid-cols-2">
              {currentReading.map((book, index) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl glass transition-all duration-700 p-6"
                >
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-20 rounded-lg bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 border-2 border-primary/30 flex-shrink-0 shadow-lg shadow-primary/10 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500" />
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
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
            <div className="grid gap-6 md:grid-cols-2">
              {researchInterests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.7,
                      ease: [0.32, 0.72, 0, 1]
                    }}
                    viewport={{ once: true }}
                    className="group relative rounded-2xl glass transition-all duration-700 p-6 overflow-hidden"
                  >
                      {/* Colored gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                      <div className="relative flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/8 flex items-center justify-center text-foreground group-hover:bg-white/15 transition-all duration-500 flex-shrink-0">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-2 group-hover:text-foreground transition-colors">
                            {interest.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
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
