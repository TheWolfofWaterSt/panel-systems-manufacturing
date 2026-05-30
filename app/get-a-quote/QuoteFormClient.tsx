"use client";

import { useSearchParams } from "next/navigation";
import { QuoteForm } from "@/components/forms/QuoteForm";

export function QuoteFormWithSearchParams() {
  const searchParams = useSearchParams();
  const model = searchParams.get("model") ?? undefined;
  return <QuoteForm variant="full" defaultProduct={model} />;
}
