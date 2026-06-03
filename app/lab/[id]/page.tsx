import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { experiments } from "@/lib/data/lab";
import { Navbar } from "@/components/navbar";
import { FaGithub } from "react-icons/fa";

export async function generateStaticParams() {
  return experiments.map((exp) => ({
    id: exp.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const experiment = experiments.find((e) => e.id === params.id);

  if (!experiment) {
    return {
      title: "Experiment Not Found",
    };
  }

  return {
    title: `${experiment.title} - Lab - Subhadip`,
    description: experiment.description,
  };
}

const statusColors = {
  active: "bg-green-500/10 text-green-400 border-green-500/30",
  completed: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  paused: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
};

export default function ExperimentPage({ params }: { params: { id: string } }) {
  const experiment = experiments.find((e) => e.id === params.id);

  if (!experiment) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <Link href="/lab">
              <Button variant="ghost" className="group -ml-2">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Lab
              </Button>
            </Link>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {experiment.title}
                </h1>
                <span
                  className={`px-3 py-1.5 text-sm rounded-full border ${
                    statusColors[experiment.status]
                  } whitespace-nowrap`}
                >
                  {experiment.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {experiment.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(experiment.githubUrl || experiment.demoUrl) && (
                <div className="flex gap-4">
                  {experiment.githubUrl && (
                    <a
                      href={experiment.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="default" className="group">
                        <FaGithub className="mr-2 h-5 w-5" />
                        View Code
                        <ExternalLink className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </a>
                  )}
                  {experiment.demoUrl && (
                    <a
                      href={experiment.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="group">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="p-8 rounded-xl border border-border bg-secondary/20 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {experiment.description}
                </p>
              </div>

              {experiment.details && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Details</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {experiment.details}
                  </p>
                </div>
              )}

              <div>
                <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {experiment.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-lg bg-background border border-border text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Status</h2>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-4 py-2 rounded-lg border ${
                      statusColors[experiment.status]
                    }`}
                  >
                    {experiment.status.charAt(0).toUpperCase() +
                      experiment.status.slice(1)}
                  </span>
                  <p className="text-muted-foreground">
                    {experiment.status === "active" &&
                      "Currently under active development"}
                    {experiment.status === "completed" &&
                      "This experiment has been completed"}
                    {experiment.status === "paused" &&
                      "On hold for now, may resume later"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <Link href="/lab">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to All Experiments
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
