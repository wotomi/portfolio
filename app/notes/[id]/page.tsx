import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { notes } from "@/lib/data/notes";
import { Navbar } from "@/components/navbar";

export async function generateStaticParams() {
  return notes.map((note) => ({
    id: note.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const note = notes.find((n) => n.id === params.id);

  if (!note) {
    return {
      title: "Note Not Found",
    };
  }

  return {
    title: `${note.title} - Subhadip`,
    description: note.description,
  };
}

export default function NotePage({ params }: { params: { id: string } }) {
  const note = notes.find((n) => n.id === params.id);

  if (!note) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <article className="container max-w-3xl mx-auto space-y-12">
          <div className="space-y-6">
            <Link href="/notes">
              <Button variant="ghost" className="group -ml-2">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Notes
              </Button>
            </Link>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {note.title}
              </h1>

              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(note.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                {note.readTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {note.readTime}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
            <div className="p-8 rounded-xl border border-border bg-secondary/20">
              <p className="text-lg leading-relaxed">{note.description}</p>

              {note.content ? (
                <div className="mt-8 space-y-6 whitespace-pre-wrap">
                  {note.content}
                </div>
              ) : (
                <div className="mt-8 p-6 rounded-lg bg-muted/50 text-center">
                  <p className="text-muted-foreground">
                    Content coming soon...
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <Link href="/notes">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to All Notes
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
