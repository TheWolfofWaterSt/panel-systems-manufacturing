import { Barlow, Inter } from "next/font/google";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/seo/schema";
import { defaultMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
