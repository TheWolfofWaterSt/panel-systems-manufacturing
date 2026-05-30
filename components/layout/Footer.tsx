import Link from "next/link";
import { footerNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="text-xl font-bold font-display mb-2">Panel Systems Manufacturing</p>
            <p className="text-steel-400 text-sm mb-4">
              Custom-built commercial room dividers direct from the manufacturer. {siteConfig.savingsClaim} over ceiling-suspended alternatives.
            </p>
            <PhoneLink variant="header" className="text-amber-400 hover:text-amber-300" />
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {footerNavigation.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-steel-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerNavigation.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-steel-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-steel-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-sm text-steel-400">
            <p>{siteConfig.address.full}</p>
            <p className="mt-1">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                {siteConfig.email}
              </a>
              {" · "}Fax: {siteConfig.fax}
            </p>
          </div>
          <Button href="/get-a-quote/" variant="primary" size="sm">
            Get a Free Quote
          </Button>
        </div>

        <p className="mt-8 text-xs text-steel-400 text-center">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
