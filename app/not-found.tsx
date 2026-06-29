import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Browse our room divider products or request a free quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">Go Home</Button>
          <Button href="/contact/" variant="outline">Get a Free Quote</Button>
        </div>
      </Container>
    </section>
  );
}
