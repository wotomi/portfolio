export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  videoUrl?: string; // URL to demo video (MP4, WebM) - supports local /videos/* or CDN URLs
  videoThumbnail?: string; // Optional custom thumbnail, falls back to video first frame
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "morning-market-brief",
    title: "Morning Market Brief",
    description:
      "Voice-enabled financial intelligence assistant combining portfolio data, market information, and news analysis.",
    longDescription:
      "A comprehensive voice-first AI system that delivers personalized market insights. Integrates with portfolio APIs, real-time market data, and news sources to provide actionable intelligence. Built with RAG architecture for accurate, context-aware responses.",
    tags: ["AI", "Voice", "Finance", "RAG", "Python", "FastAPI"],
    githubUrl: "https://github.com/yourusername/morning-market-brief",
    liveUrl: "https://morning-market-brief.vercel.app",
    // videoUrl: "/videos/morning-market-brief.mp4", // Uncomment when you add your demo video
    // videoThumbnail: "/videos/morning-market-brief-thumb.jpg", // Optional: custom thumbnail
    featured: true,
  },
  {
    id: "sec-filing-analyzer",
    title: "SEC Filing Analyzer",
    description:
      "AI-powered system for exploring and analyzing SEC filings through retrieval and sentiment analysis.",
    longDescription:
      "Advanced NLP system for financial document analysis. Uses FinBERT for sentiment analysis and custom RAG pipeline for intelligent document retrieval. Processes 10-K, 10-Q, and 8-K filings with high accuracy.",
    tags: ["NLP", "Finance", "Sentiment Analysis", "FinBERT", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/sec-filing-analyzer",
    featured: true,
  },
  {
    id: "docforge",
    title: "DocForge",
    description:
      "Document intelligence platform for compliance and knowledge workflows.",
    longDescription:
      "Enterprise-grade document processing platform with OCR, classification, and intelligent extraction. Handles compliance workflows, contract analysis, and knowledge base construction. Built for scale with distributed processing.",
    tags: ["AI", "Documents", "Compliance", "Next.js", "AWS"],
    githubUrl: "https://github.com/yourusername/docforge",
    liveUrl: "https://docforge-demo.vercel.app",
    featured: true,
  },
  {
    id: "memory-graph-engine",
    title: "Memory Graph Engine",
    description:
      "Research project exploring long-term memory architectures for AI systems.",
    longDescription:
      "Novel approach to AI memory using graph-based architectures. Implements hierarchical memory structures with semantic clustering and temporal decay. Designed for agentic systems requiring persistent, evolving memory.",
    tags: ["Research", "Memory", "Graphs", "Neo4j", "Python"],
    githubUrl: "https://github.com/yourusername/memory-graph-engine",
    featured: false,
  },
  {
    id: "ai-document-workspace",
    title: "AI Document Workspace",
    description:
      "Collaborative document editing environment with semantic search and AI-assisted updates.",
    longDescription:
      "Real-time collaborative workspace with AI copilot. Features semantic search, auto-summarization, and intelligent suggestions. Built with operational transformation for conflict-free collaboration.",
    tags: ["Collaboration", "Search", "AI", "React", "WebSocket"],
    githubUrl: "https://github.com/yourusername/ai-workspace",
    liveUrl: "https://ai-workspace-demo.vercel.app",
    featured: false,
  },
  {
    id: "portfolio-optimizer",
    title: "Portfolio Optimizer",
    description:
      "AI-driven portfolio optimization using modern portfolio theory and machine learning.",
    tags: ["Finance", "ML", "Optimization", "Python"],
    featured: false,
  },
];
