import type { CategoryContent, ProductDetailContent, ResourcePageContent, TrustPageContent } from "@/types";
import { Container } from "@/components/ui/Container";
import { PageHero, CTASection, InlineCTA } from "@/components/sections/HeroSection";
import { withImage, categoryHeroImages } from "@/lib/images";
import { ProductCategoryGrid, RelatedLinks, ProductHeroImage } from "@/components/cards/ProductCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { ComparisonTable, DecisionGuide, Breadcrumbs, SpecsTable } from "@/components/sections/ComparisonTable";
import { TestimonialCard } from "@/components/sections/TestimonialsSection";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, productSchema } from "@/lib/seo/schema";
import { caseStudies } from "@/content/case-studies";
import { testimonials } from "@/content/testimonials";
import {
  Factory,
  Layers,
  Wrench,
  Ruler,
  DollarSign,
  RefreshCw,
  DoorOpen,
  Settings,
  Pin,
  Accessibility,
} from "lucide-react";

interface CategoryPageTemplateProps {
  content: CategoryContent;
  comparisonHeaders?: string[];
  comparisonRows?: { feature: string; values: string[] }[];
}

export function CategoryPageTemplate({
  content,
  comparisonHeaders,
  comparisonRows,
}: CategoryPageTemplateProps) {
  return (
    <>
      <PageHero
        headline={content.headline}
        subheadline={content.intro}
        keyMessage={content.keyMessage}
        imageSrc={categoryHeroImages[content.slug]}
        imageAlt={content.headline}
      />

      <section className="py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: content.headline.split("—")[0]?.trim() ?? content.slug },
            ]}
          />

          {content.decisionGuide && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-navy-900 mb-6">Which System Is Right for You?</h2>
              <DecisionGuide items={content.decisionGuide} />
            </div>
          )}

          {comparisonHeaders && comparisonRows && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-navy-900 mb-6">Model Comparison</h2>
              <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
            </div>
          )}
        </Container>
      </section>

      <ProductCategoryGrid
        title="Our Product Lines"
        products={content.products.map((p) => withImage(p))}
      />

      {content.inlineCta && (
        <section className="py-8">
          <Container>
            <InlineCTA message={content.inlineCta} />
          </Container>
        </section>
      )}

      <FAQSection items={content.faqs} />

      <section className="py-12 bg-slate-50">
        <Container>
          <RelatedLinks links={content.relatedLinks} title="Helpful Resources" />
        </Container>
      </section>

      <CTASection primaryLabel="Get a Free Quote" />
      <JsonLd data={faqSchema(content.faqs)} />
    </>
  );
}

interface ProductDetailTemplateProps {
  content: ProductDetailContent;
  comparisonHeaders?: string[];
  comparisonRows?: { feature: string; values: string[] }[];
}

export function ProductDetailTemplate({
  content,
  comparisonHeaders,
  comparisonRows,
}: ProductDetailTemplateProps) {
  return (
    <>
      <PageHero
        headline={content.headline}
        subheadline={content.intro}
        keyMessage={content.keyMessage}
      />

      <section className="py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: content.categoryLabel, href: content.categoryHref },
              { label: content.series },
            ]}
          />

          <ProductHeroImage slug={content.slug} alt={content.headline} />

          {content.models.map((model) => (
            <div key={model.name} className="mb-12">
              <h2 className="text-2xl font-semibold text-navy-900 mb-1">{model.name}</h2>
              <p className="text-amber-600 font-medium mb-6">{model.tagline}</p>
              <SpecsTable specs={model.specs} />
            </div>
          ))}

          {comparisonHeaders && comparisonRows && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-navy-900 mb-6">Model Comparison</h2>
              <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
            </div>
          )}

          {content.options.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-navy-900 mb-4">Available Options</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {content.options.map((opt) => (
                  <li key={opt} className="flex items-center gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" aria-hidden />
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {content.applications && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-navy-900 mb-4">Ideal Applications</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {content.applications.map((app) => (
                  <li key={app} className="text-slate-600">{app}</li>
                ))}
              </ul>
            </div>
          )}

          {content.upgradeNote && (
            <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-navy-900">
                <strong>{content.upgradeNote.label}</strong>{" "}
                <a href={content.upgradeNote.href} className="text-amber-600 hover:underline">
                  {content.upgradeNote.description}
                </a>
              </p>
            </div>
          )}

          {content.downgradeNote && (
            <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <p className="text-navy-900">
                <strong>{content.downgradeNote.label}</strong>{" "}
                <a href={content.downgradeNote.href} className="text-amber-600 hover:underline">
                  {content.downgradeNote.description}
                </a>
              </p>
            </div>
          )}
        </Container>
      </section>

      {content.testimonialId && (
        <section className="py-12 bg-slate-50">
          <Container>
            <h2 className="text-2xl font-semibold text-navy-900 mb-6">Customer Experience</h2>
            <TestimonialCard id={content.testimonialId} />
          </Container>
        </section>
      )}

      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-navy-900 mb-4">
                Get a Quote on the {content.series}
              </h2>
              <p className="text-slate-600 mb-6">
                Tell us your room dimensions and product interest in a message — we&apos;ll provide a custom factory-direct quote.
              </p>
              <Button href="/contact/" size="lg">
                Contact Us
              </Button>
            </div>
            <RelatedLinks links={content.relatedProducts} title="Related Products" />
          </div>
        </Container>
      </section>

      <FAQSection items={content.faqs} />
      <CTASection
        headline={`Ready for a ${content.series} Quote?`}
        primaryHref="/contact/"
        primaryLabel={`Get a Quote on ${content.series}`}
      />
      <JsonLd data={productSchema(content)} />
    </>
  );
}

const uspIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  factory: Factory,
  floor: Layers,
  wrench: Wrench,
  ruler: Ruler,
  savings: DollarSign,
  replace: RefreshCw,
  door: DoorOpen,
  track: Settings,
  board: Pin,
  ada: Accessibility,
};

export function TrustPageTemplate({ content }: { content: TrustPageContent }) {
  return (
    <>
      <PageHero headline={content.headline} subheadline={content.intro} />

      {content.usps && (
        <section className="py-12 md:py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.usps.map((usp) => {
                const Icon = uspIcons[usp.icon] ?? Factory;
                return (
                  <div key={usp.title} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-amber-600" aria-hidden />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-navy-900 mb-2">{usp.title}</h2>
                      <p className="text-slate-600">{usp.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {content.slug === "case-studies" && (
        <section className="py-12 bg-slate-50">
          <Container>
            <div className="space-y-12 max-w-4xl">
              {caseStudies.map((study) => (
                <article key={study.id} className="bg-white rounded-lg border border-slate-200 p-8">
                  <h2 className="text-2xl font-semibold text-navy-900 mb-4">{study.title}</h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <dt className="text-sm font-medium text-slate-500">Client Type</dt>
                      <dd className="text-navy-900">{study.clientType}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-slate-500">Savings</dt>
                      <dd className="text-amber-600 font-semibold">{study.savings}</dd>
                    </div>
                  </dl>
                  <div className="space-y-4 text-slate-600">
                    <p><strong className="text-navy-900">Challenge:</strong> {study.challenge}</p>
                    <p><strong className="text-navy-900">Solution:</strong> {study.solution}</p>
                    <p><strong className="text-navy-900">Outcome:</strong> {study.outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {content.testimonialIds && (
        <section className={`py-12 ${content.slug === "case-studies" ? "" : "bg-slate-50"}`}>
          <Container>
            <div className="space-y-8 max-w-4xl mx-auto">
              {content.testimonialIds.map((id) => {
                const t = testimonials.find((item) => item.id === id);
                if (!t) return null;
                return (
                  <blockquote key={id} className="border-l-4 border-amber-500 pl-6 py-4">
                    <p className="text-lg text-slate-700 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-4 not-italic">
                      <span className="font-semibold text-navy-900">{t.author}</span>
                      <span className="text-slate-500"> — {t.organization}</span>
                    </footer>
                  </blockquote>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {content.slug === "customer-reviews" && (
        <section className="py-8">
          <Container>
            <TrustBadgesInline />
          </Container>
        </section>
      )}

      <section className="py-12">
        <Container>
          <RelatedLinks links={content.relatedLinks} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}

function TrustBadgesInline() {
  const badges = ["30+ Years in Business", "Nationwide Customers", "Every Installation Completed"];
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {badges.map((b) => (
        <span key={b} className="px-4 py-2 bg-navy-900 text-white rounded-full text-sm font-medium">{b}</span>
      ))}
    </div>
  );
}

export function ResourcePageTemplate({ content }: { content: ResourcePageContent }) {
  return (
    <>
      <PageHero headline={content.headline} subheadline={content.intro} />

      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl space-y-12">
            {content.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-semibold text-navy-900 mb-4">{section.title}</h2>
                <p className="text-slate-600 mb-4">{section.content}</p>
                {section.items && (
                  <ol className="list-decimal list-inside space-y-2 text-slate-600">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                )}
              </div>
            ))}

            {content.videos && (
              <div className="space-y-8">
                {content.videos.map((video) => (
                  <div key={video.title} className="border border-slate-200 rounded-lg overflow-hidden">
                    <div className="aspect-video bg-navy-900 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <svg className="w-16 h-16 mx-auto mb-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <p className="font-semibold">{video.title}</p>
                        <p className="text-sm text-white/70 mt-2">Video available — contact us for demo</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-navy-900">{video.title}</h3>
                      <p className="text-slate-600 mt-2">{video.description}</p>
                      {video.productSlug && (
                        <a
                          href="/contact/"
                          className="inline-block mt-4 text-amber-600 font-semibold hover:text-amber-700"
                        >
                          Get a Free Quote for this system →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="py-12 bg-slate-50">
        <Container>
          <RelatedLinks links={content.relatedLinks} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
