"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineSparkles } from "react-icons/hi2";

const experiences = [
  {
    title: "Business Analyst",
    company: "Enverus",
    type: "Current",
    period: "2024 - Present",
    description:
      "Working on data-driven decision making, analysis workflows, and business intelligence.",
    icon: HiOutlineBriefcase,
    current: true,
    color: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-400",
  },
  {
    title: "AI Tutor",
    company: "xAI",
    type: "Current Contract",
    period: "2024 - Present",
    description:
      "Helping train and evaluate advanced AI systems.",
    icon: HiOutlineAcademicCap,
    current: true,
    color: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-400",
  },
  {
    title: "AI Agent Developer",
    company: "Freelance",
    type: "Freelance",
    period: "2023 - 2024",
    description:
      "Built custom AI solutions involving RAG, agent orchestration, and workflow automation.",
    icon: HiOutlineCodeBracket,
    current: false,
    color: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-400",
  },
  {
    title: "Embedded Systems Engineer",
    company: "Freelance",
    type: "Freelance",
    period: "2022 - 2023",
    description:
      "Developed hardware and software solutions involving microcontrollers, sensors, and system integration.",
    icon: HiOutlineCpuChip,
    current: false,
    color: "from-orange-500/20 to-amber-500/20",
    iconBg: "bg-gradient-to-br from-orange-500/10 to-amber-500/10",
    iconColor: "text-orange-400",
  },
  {
    title: "Embedded Systems Intern",
    company: "Vecros",
    type: "Internship",
    period: "2021 - 2022",
    description:
      "Worked on embedded development and real-world engineering challenges.",
    icon: HiOutlineSparkles,
    current: false,
    color: "from-teal-500/20 to-cyan-500/20",
    iconBg: "bg-gradient-to-br from-teal-500/10 to-cyan-500/10",
    iconColor: "text-teal-400",
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-24 px-4 overflow-hidden">


      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <SectionHeading subtitle="A timeline of my professional evolution">
            Journey
          </SectionHeading>

          <div className="relative">
            {/* Animated gradient line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={`${exp.company}-${exp.title}`}
                    initial={{ opacity: 0, x: -40, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.8,
                      ease: [0.32, 0.72, 0, 1]
                    }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex gap-6 md:gap-10 group">
                      {/* Icon with double-bezel architecture */}
                      <div className="relative flex-shrink-0">
                        {/* Outer glow */}
                        <div className={`absolute inset-0 ${exp.iconBg} rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`} />

                        {/* Icon bezel */}
                        <div className="relative p-0.5 rounded-[1.25rem] glass-bezel transition-all duration-500">
                          <div className={`relative w-16 h-16 rounded-[calc(1.25rem-2px)] ${exp.iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
                            <Icon className={`w-7 h-7 ${exp.iconColor} transition-all duration-500`} />
                          </div>
                        </div>

                        {/* Connecting line */}
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-border/50 to-transparent hidden md:block" />
                      </div>

                      {/* Content glass card — single surface */}
                      <div className="flex-1 pb-8">
                        <div className="relative rounded-2xl glass p-6 overflow-hidden transition-all duration-500">
                          {/* Colored gradient overlay on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />

                            <div className="relative z-10 space-y-3">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                <div>
                                  <h3 className="text-xl font-bold mb-1 group-hover:text-foreground transition-colors">
                                    {exp.title}
                                  </h3>
                                  <p className="text-base font-medium text-muted-foreground">
                                    {exp.company}
                                  </p>
                                </div>
                                <div className="flex flex-col gap-2 sm:items-end">
                                  <span
                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                                      exp.current
                                        ? `${exp.iconBg} ${exp.iconColor} border border-${exp.iconColor.split('-')[1]}-500/30`
                                        : "bg-secondary/50 text-secondary-foreground border border-border"
                                    }`}
                                  >
                                    {exp.type}
                                  </span>
                                  <span className="text-xs text-muted-foreground font-mono">
                                    {exp.period}
                                  </span>
                                </div>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">
                                {exp.description}
                              </p>
                            </div>
                        </div>
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
