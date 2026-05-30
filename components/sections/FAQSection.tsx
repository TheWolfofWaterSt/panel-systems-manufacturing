import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/schema";
import type { FAQItem } from "@/types";
import Link from "next/link";

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
  showSchema?: boolean;
  viewAllHref?: string;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  items,
  showSchema = true,
  viewAllHref,
}: FAQSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <Container>
        <SectionHeading title={title} className="mb-8" />
        <div className="max-w-3xl">
          <Accordion items={items} defaultOpen={0} />
        </div>
        {viewAllHref && (
          <p className="mt-6">
            <Link href={viewAllHref} className="text-amber-600 font-semibold hover:text-amber-700">
              See all FAQs →
            </Link>
          </p>
        )}
        {showSchema && <JsonLd data={faqSchema(items)} />}
      </Container>
    </section>
  );
}
