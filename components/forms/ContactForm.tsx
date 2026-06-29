"use client";

import { useState } from "react";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
        <p className="text-green-800 font-semibold text-lg">Message sent!</p>
        <p className="text-green-700 mt-2">We&apos;ll get back to you within 1 business day.</p>
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
      <FormField label="Email" name="email" type="email" required />
      <FormField label="Subject" name="subject" required />
      <FormField label="Phone Number" name="phone" type="tel" />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
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
        {status === "loading" ? "Sending..." : "Send Message"}
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
