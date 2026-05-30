import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustBadgesRow } from "@/components/sections/IndustriesGrid";
import { Button } from "@/components/ui/Button";

interface TestimonialsSectionProps {
  ids?: string[];
  title?: string;
  showBadges?: boolean;
  showCta?: boolean;
}

export function TestimonialsSection({
  ids,
  title = "What Our Customers Say",
  showBadges = true,
  showCta = true,
}: TestimonialsSectionProps) {
  const items = ids
    ? testimonials.filter((t) => ids.includes(t.id))
    : testimonials.slice(0, 2);

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading title={title} align="center" className="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((t) => (
            <blockquote
              key={t.id}
              className="border-l-4 border-amber-500 pl-6 py-2"
            >
              <p className="text-slate-700 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-navy-900">{t.author}</span>
                  <span className="text-slate-500"> — {t.organization}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
        {showBadges && (
          <div className="mt-12">
            <TrustBadgesRow />
          </div>
        )}
        {showCta && (
          <div className="mt-8 text-center">
            <Button href="/case-studies/" variant="outline">
              Read More Reviews & Case Studies
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}

export function TestimonialCard({ id }: { id: string }) {
  const t = testimonials.find((item) => item.id === id);
  if (!t) return null;

  return (
    <blockquote className="border-l-4 border-amber-500 pl-6 py-4 bg-slate-50 rounded-r-lg">
      <p className="text-slate-700 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
      <footer className="mt-4">
        <cite className="not-italic">
          <span className="font-semibold text-navy-900">{t.author}</span>
          <span className="text-slate-500"> — {t.organization}</span>
        </cite>
      </footer>
    </blockquote>
  );
}
