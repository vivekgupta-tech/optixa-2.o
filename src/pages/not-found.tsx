import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/common/Button";
import { notFound } from "@/data";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center bg-muted">
      <div className="text-center p-8 bg-background rounded-3xl shadow-sm border border-border max-w-md w-full mx-4">
        <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-2xl flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">{notFound.title}</h1>
        <h2 className="text-xl font-semibold text-foreground mb-4">{notFound.subtitle}</h2>
        <p className="text-muted-foreground mb-8">
          {notFound.description}
        </p>
        <Button asChild size="lg" className="w-full">
          <Link href={notFound.btn.link}>{notFound.btn.text}</Link>
        </Button>
      </div>
    </div>
  );
}