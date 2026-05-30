/** Production site URL — uses Vercel env on deploy, override with NEXT_PUBLIC_SITE_URL if needed. */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "https://roomdividers.org";
}
