import { Factory, Wrench, Ruler } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Container } from "@/components/ui/Container";

const icons = [Factory, Wrench, Ruler];

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  showTrustBar?: boolean;
}

export function HeroSection({ headline, subheadline, showTrustBar = true }: HeroSectionProps) {
  return (
    <section className="relative bg-navy-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-navy-700)_0%,_transparent_50%)]" />

      <Container className="relative py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Factory Direct · {siteConfig.savingsClaim}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            {subheadline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/get-a-quote/" size="lg">
              Get a Free Quote
            </Button>
            <Button href={`tel:${siteConfig.phoneTel}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900">
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>

        {showTrustBar && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {siteConfig.trustSignals.map((signal, i) => {
              const Icon = icons[i] ?? Factory;
              return (
                <div key={signal} className="flex items-start gap-3">
                  <Icon className="h-6 w-6 text-amber-400 shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm text-white/90 font-medium">{signal}</span>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}

interface PageHeroProps {
  headline: string;
  subheadline?: string;
  keyMessage?: string;
}

export function PageHero({ headline, subheadline, keyMessage }: PageHeroProps) {
  return (
    <section className="bg-slate-100 border-b border-slate-200">
      <Container className="py-12 md:py-16">
        {keyMessage && (
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
            {keyMessage}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 text-balance">
          {headline}
        </h1>
        {subheadline && (
          <p className="mt-4 text-lg text-slate-600 max-w-3xl leading-relaxed">{subheadline}</p>
        )}
      </Container>
    </section>
  );
}

export function CTASection({
  headline = "Ready to Divide Your Space — Without the Markup?",
  primaryHref = "/get-a-quote/",
  primaryLabel = "Get a Free Quote",
}: {
  headline?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="bg-navy-900 text-white">
      <Container className="py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-balance max-w-2xl mx-auto">
          {headline}
        </h2>
        <p className="mt-4 text-white/70 text-lg">
          Custom-built to your exact dimensions. {siteConfig.savingsClaim} over ceiling-suspended systems.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href={primaryHref} size="lg">
            {primaryLabel}
          </Button>
          <PhoneLink variant="prominent" className="text-amber-400 hover:text-amber-300" />
        </div>
      </Container>
    </section>
  );
}

export function InlineCTA({ message }: { message: string }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p className="text-navy-900 font-medium">{message}</p>
      <PhoneLink className="shrink-0 text-amber-600 hover:text-amber-700" />
    </div>
  );
}
