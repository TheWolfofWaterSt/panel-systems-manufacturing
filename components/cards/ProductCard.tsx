import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductCardData } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <article className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-navy-900/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{product.keySpec}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-navy-900">{product.name}</h3>
        <p className="mt-2 text-slate-600 text-sm flex-1">{product.description}</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <Button href={product.href} variant="outline" size="sm" className="flex-1 text-center">
            Learn More
          </Button>
          <Button href={`/get-a-quote/?model=${product.slug}`} size="sm" className="flex-1 text-center">
            Get Quote
          </Button>
        </div>
      </div>
    </article>
  );
}

interface ProductCategoryGridProps {
  title: string;
  subtitle?: string;
  products: ProductCardData[];
}

export function ProductCategoryGrid({ title, subtitle, products }: ProductCategoryGridProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} className="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function RelatedLinks({ links, title = "Related" }: { links: { label: string; href: string; description?: string }[]; title?: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-navy-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="group flex items-start gap-2 text-navy-700 hover:text-amber-600 transition-colors">
              <ArrowRight className="h-4 w-4 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden />
              <span>
                <span className="font-medium">{link.label}</span>
                {link.description && (
                  <span className="block text-sm text-slate-500">{link.description}</span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
