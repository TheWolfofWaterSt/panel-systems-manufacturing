import {
  Church,
  GraduationCap,
  Building2,
  Factory,
  Landmark,
  UtensilsCrossed,
  Presentation,
  Camera,
} from "lucide-react";
import { industries } from "@/content/industries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Church, GraduationCap, Building2, Factory, Landmark, UtensilsCrossed, Presentation, Camera];

export function IndustriesGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <Container>
        <SectionHeading
          title="Trusted by Institutions Nationwide"
          subtitle="From fellowship halls to factory floors — our room dividers serve the spaces that matter."
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => {
            const Icon = icons[i] ?? Building2;
            return (
              <div
                key={industry.name}
                className="bg-white rounded-lg p-6 border border-slate-200 hover:border-amber-300 transition-colors"
              >
                <Icon className="h-8 w-8 text-navy-700 mb-3" aria-hidden />
                <h3 className="font-semibold text-navy-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function TrustBadgesRow() {
  const badges = [
    "In business 30+ years",
    "Every installation completed",
    "Factory Direct — No Markup",
    "Nationwide Customers",
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {badges.map((badge) => (
        <span
          key={badge}
          className="inline-flex items-center gap-2 rounded-full bg-navy-900/5 border border-navy-900/10 px-4 py-2 text-sm font-medium text-navy-800"
        >
          <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {badge}
        </span>
      ))}
    </div>
  );
}
