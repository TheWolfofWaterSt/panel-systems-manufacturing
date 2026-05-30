"use client";

import { useState } from "react";
import { quoteProductOptions } from "@/lib/site-config";
import type { QuoteProductOption } from "@/types";

interface QuoteFormProps {
  variant?: "full" | "short";
  defaultProduct?: string;
  className?: string;
}

const productMap: Record<string, QuoteProductOption> = {
  "sa-1": "SA-1 Series",
  "sa-2": "SA-2 Series",
  "sa-3000": "SA-3000 Operable Partitions",
  "sa-5000": "SA-5000 Operable Partitions",
  "fd-1000": "FD Series Folding",
  "fd-1500": "FD Series Folding",
  "bw-1500": "BW-1500 Barnwood",
  "fp-1000": "Modular Wall Systems",
  "fp-1200": "Modular Wall Systems",
  "fp-1500": "Modular Wall Systems",
  "fp-2500": "Modular Wall Systems",
  "clean-room": "Clean Room",
};

export function QuoteForm({ variant = "full", defaultProduct, className }: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const initialProduct = defaultProduct
    ? productMap[defaultProduct] ?? "Not Sure"
    : "Not Sure";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/quote/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: variant }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Something went wrong");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 ${className ?? ""}`}>
        <p className="text-green-800 font-semibold text-lg">Thank you!</p>
        <p className="text-green-700 mt-2">
          Scott will contact you within 1 business day with your custom quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className ?? ""}`}>
      <div className="absolute -left-[9999px]" aria-hidden>
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <FormField label="Name" name="name" required />
      {variant === "full" && <FormField label="Organization" name="organization" />}
      <FormField label="Email" name="email" type="email" required />
      {variant === "full" && <FormField label="Phone" name="phone" type="tel" />}

      <div>
        <label htmlFor="productInterest" className="block text-sm font-medium text-navy-900 mb-1">
          Product Interest
        </label>
        <select
          id="productInterest"
          name="productInterest"
          defaultValue={initialProduct}
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-navy-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[44px]"
        >
          {quoteProductOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {variant === "full" && (
        <>
          <FormField label={'Room Length (e.g. 40 ft or 40\' 6")'} name="roomLength" />
          <FormField label={'Ceiling Height (e.g. 10 ft or 10\' 0")'} name="ceilingHeight" />
        </>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1">
          {variant === "short" ? "Message" : "Additional Notes / Special Requirements"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={variant === "short" ? 3 : 4}
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-navy-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm" role="alert">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-navy-900 font-semibold rounded-md px-6 py-3 min-h-[44px] transition-colors"
      >
        {status === "loading" ? "Sending..." : "Request My Free Quote"}
      </button>
    </form>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy-900 mb-1">
        {label}{required && " *"}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className="w-full rounded-md border border-slate-300 px-4 py-3 text-navy-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[44px]"
      />
    </div>
  );
}

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 ${className ?? ""}`}>
        <p className="text-green-800 font-semibold">Message sent!</p>
        <p className="text-green-700 mt-2">We&apos;ll get back to you within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className ?? ""}`}>
      <div className="absolute -left-[9999px]" aria-hidden>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <FormField label="Name" name="name" required />
      <FormField label="Email" name="email" type="email" required />
      <FormField label="Subject" name="subject" required />
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-navy-900 mb-1">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-navy-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
        />
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm" role="alert">Failed to send. Please call us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-navy-900 font-semibold rounded-md px-6 py-3 min-h-[44px]"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export function QuickContactForm() {
  return <ContactForm className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm" />;
}
