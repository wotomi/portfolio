import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data/projects";
import { Navbar } from "@/components/navbar";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Subhadip`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">
          {/* Back button */}
          <Link href="/work">
            <Button variant="ghost" className="group -ml-2">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Button>
          </Link>

          {/* Project Header */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default" className="group">
                      <FaGithub className="mr-2 h-5 w-5" />
                      View on GitHub
                      <ExternalLink className="ml-2 h-4 w-4 opacity-50 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
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

          {/* Project Description */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="p-8 rounded-xl border border-border bg-secondary/20 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.longDescription && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Details</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              )}

              <div>
                <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-lg bg-background border border-border text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional sections can be added here */}
          <div className="pt-8 border-t border-border">
            <Link href="/work">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to All Projects
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
