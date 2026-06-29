import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductCardData } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getProductImage, images } from "@/lib/images";

export function ProductCard({ product }: { product: ProductCardData }) {
  const src = product.imageSrc ?? getProductImage(product.slug) ?? images.heroHomepage;

  return (
    <article className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image
          src={src}
          alt={product.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-navy-900">{product.name}</h3>
        <p className="mt-2 text-slate-600 text-sm flex-1">{product.description}</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <Button href={product.href} variant="outline" size="sm" className="flex-1 text-center">
            Learn More
          </Button>
          <Button href="/contact/" size="sm" className="flex-1 text-center">
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

export function ProductHeroImage({ slug, alt }: { slug: string; alt: string }) {
  const src = getProductImage(slug) ?? images.heroHomepage;

  return (
    <div className="relative aspect-[21/9] md:aspect-[3/1] w-full overflow-hidden rounded-lg border border-slate-200 shadow-sm mb-10">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1280px"
        priority
      />
    </div>
  );
}
