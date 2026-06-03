export interface Experiment {
  id: string;
  title: string;
  description: string;
  details?: string;
  tags: string[];
  status: "active" | "completed" | "paused";
  githubUrl?: string;
  demoUrl?: string;
}

export const experiments: Experiment[] = [
  {
    id: "voice-interfaces",
    title: "Voice Interfaces",
    description: "Experimenting with voice-first AI interactions",
    details:
      "Building natural voice interfaces with real-time transcription and response generation. Exploring different TTS models and conversational patterns.",
    tags: ["Voice", "AI", "UX"],
    status: "active",
  },
  {
    id: "ui-experiments",
    title: "UI Experiments",
    description: "Exploring novel interaction patterns and design systems",
    details:
      "Collection of UI experiments including glassmorphism, spotlight effects, and animated components. Focus on modern, accessible design patterns.",
    tags: ["Design", "React", "Animation"],
    status: "active",
    demoUrl: "https://ui-experiments.vercel.app",
  },
  {
    id: "agent-simulations",
    title: "Agent Simulations",
    description: "Multi-agent systems and emergent behaviors",
    details:
      "Simulating complex agent interactions to understand emergent behaviors. Testing different communication protocols and decision-making strategies.",
    tags: ["Agents", "Simulation", "Research"],
    status: "active",
  },
  {
    id: "financial-models",
    title: "Financial Models",
    description: "Predictive models for market analysis",
    details:
      "Building ML models for financial forecasting. Combining traditional time series analysis with modern deep learning approaches.",
    tags: ["Finance", "ML", "Python"],
    status: "completed",
  },
  {
    id: "realtime-collab",
    title: "Realtime Collaboration",
    description: "Exploring CRDT and operational transformation",
    tags: ["WebSocket", "CRDT", "React"],
    status: "active",
  },
  {
    id: "ai-coding-assistant",
    title: "AI Coding Assistant",
    description: "Context-aware code completion and generation",
    tags: ["AI", "Developer Tools", "VSCode"],
    status: "paused",
  },
];
