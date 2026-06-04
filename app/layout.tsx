import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GlobalBackground } from "@/components/background";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subhadip - AI Engineer & Builder",
  description:
    "Business Analyst, AI Engineer, and Builder exploring the intersection of software, data, and artificial intelligence. Specializing in agentic systems, RAG architectures, and AI-powered products.",
  keywords: [
    "AI Engineer",
    "Business Analyst",
    "Machine Learning",
    "RAG",
    "LangChain",
    "AI Agents",
    "Portfolio",
  ],
  authors: [{ name: "Subhadip" }],
  openGraph: {
    title: "Subhadip - AI Engineer & Builder",
    description:
      "Building intelligent systems from embedded devices to AI agents",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <GlobalBackground />
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
