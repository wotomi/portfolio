"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  SiFastapi,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiSupabase,
  SiVercel,
  SiOpenai,
  SiLangchain,
  SiAstro,
} from "react-icons/si";
import { FaPython, FaReact, FaAws, FaDatabase } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { HiOutlineLightBulb, HiOutlineCpuChip, HiOutlineServerStack, HiOutlineCloud, HiOutlineSparkles } from "react-icons/hi2";

const skills = [
  {
    category: "AI",
    icon: <HiOutlineCpuChip className="w-5 h-5" />,
    technologies: [
      { name: "LangGraph", icon: <SiLangchain style={{ color: "#1C3C3C" }} /> },
      { name: "LangChain", icon: <SiLangchain style={{ color: "#1C3C3C" }} /> },
      { name: "RAG", icon: <HiOutlineCpuChip style={{ color: "#8B5CF6" }} /> },
      { name: "FinBERT", icon: <HiOutlineCpuChip style={{ color: "#3B82F6" }} /> },
      { name: "Ollama", icon: <HiOutlineSparkles style={{ color: "#059669" }} /> },
      { name: "OpenAI APIs", icon: <SiOpenai style={{ color: "#10A37F" }} /> },
    ],
  },
  {
    category: "Backend",
    icon: <HiOutlineServerStack className="w-5 h-5" />,
    technologies: [
      { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} /> },
      { name: "FastAPI", icon: <SiFastapi style={{ color: "#009688" }} /> },
      { name: "PostgreSQL", icon: <SiPostgresql style={{ color: "#4169E1" }} /> },
      { name: "REST APIs", icon: <FaDatabase style={{ color: "#6B7280" }} /> },
    ],
  },
  {
    category: "Frontend",
    icon: <HiOutlineLightBulb className="w-5 h-5" />,
    technologies: [
      { name: "Next.js", icon: <TbBrandNextjs style={{ color: "#000000" }} /> },
      { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} /> },
      { name: "Astro", icon: <SiAstro style={{ color: "#FF5D01" }} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#06B6D4" }} /> },
    ],
  },
  {
    category: "Cloud",
    icon: <HiOutlineCloud className="w-5 h-5" />,
    technologies: [
      { name: "AWS", icon: <FaAws style={{ color: "#FF9900" }} /> },
      { name: "ECS", icon: <FaAws style={{ color: "#FF9900" }} /> },
      { name: "Docker", icon: <SiDocker style={{ color: "#2496ED" }} /> },
      { name: "Supabase", icon: <SiSupabase style={{ color: "#3ECF8E" }} /> },
      { name: "Vercel", icon: <SiVercel style={{ color: "#000000" }} /> },
    ],
  },
  {
    category: "Other",
    icon: <HiOutlineSparkles className="w-5 h-5" />,
    technologies: [
      { name: "Financial Analysis", icon: <HiOutlineSparkles style={{ color: "#10B981" }} /> },
      { name: "Product Thinking", icon: <HiOutlineLightBulb style={{ color: "#F59E0B" }} /> },
      { name: "System Design", icon: <HiOutlineServerStack style={{ color: "#8B5CF6" }} /> },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <SectionHeading>Skills & Stack</SectionHeading>

          {/* Staggered Cards with Premium Depth */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: groupIndex * 0.15,
                  duration: 0.8,
                  ease: [0.32, 0.72, 0, 1]
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Single glass surface */}
                <div className="relative rounded-2xl glass p-8 transition-all duration-500">
                    {/* Category header with icon */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/8">
                      <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-foreground group-hover:bg-white/15 transition-all duration-500">
                        {skillGroup.icon}
                      </div>
                      <h3 className="text-xl font-bold tracking-tight">{skillGroup.category}</h3>
                    </div>

                    {/* Technology grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {skillGroup.technologies.map((tech, idx) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: groupIndex * 0.15 + idx * 0.05,
                            duration: 0.4
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/6 hover:border-white/12 transition-all duration-300 hover:scale-105 cursor-default backdrop-blur-sm"
                        >
                          {tech.icon && <span className="text-lg flex-shrink-0">{tech.icon}</span>}
                          <span className="text-xs font-medium truncate">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
