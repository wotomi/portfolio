export interface Note {
  id: string;
  title: string;
  description: string;
  content?: string;
  date: string;
  tags: string[];
  readTime?: string;
}

export const notes: Note[] = [
  {
    id: "memory-context-windows",
    title: "Why Memory Matters More Than Context Windows",
    description:
      "Exploring the architectural differences between stateless context and stateful memory systems.",
    date: "2026-05-15",
    tags: ["AI", "Memory", "Architecture"],
    readTime: "8 min",
    content: `
Context windows are getting larger, but that doesn't solve the fundamental problem...
    `,
  },
  {
    id: "building-agentic-systems",
    title: "Lessons From Building Agentic Systems",
    description:
      "Practical insights from implementing multi-agent workflows and orchestration patterns.",
    date: "2026-04-22",
    tags: ["AI Agents", "LangGraph", "Architecture"],
    readTime: "12 min",
  },
  {
    id: "ai-products-useful",
    title: "What Makes AI Products Actually Useful",
    description:
      "Moving beyond demos to build AI products that users want to keep using.",
    date: "2026-04-10",
    tags: ["Product", "AI", "UX"],
    readTime: "10 min",
  },
  {
    id: "building-beyond-demos",
    title: "Building Beyond Demos",
    description:
      "The gap between prototype and production, and how to bridge it.",
    date: "2026-03-18",
    tags: ["Engineering", "Product"],
    readTime: "7 min",
  },
  {
    id: "vertical-ai",
    title: "Thoughts on Vertical AI",
    description: "Why domain-specific AI applications will dominate the next wave.",
    date: "2026-02-28",
    tags: ["AI", "Business", "Strategy"],
    readTime: "9 min",
  },
  {
    id: "rag-production",
    title: "RAG Systems in Production",
    description: "Practical patterns for building reliable retrieval systems.",
    date: "2026-02-10",
    tags: ["RAG", "Engineering", "AI"],
    readTime: "15 min",
  },
];
