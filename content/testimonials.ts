import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "pepin-county",
    quote:
      "The sound control is remarkable. Room-to-room noise transfer is minimal even with office doors open. The system was installed quickly and cleanly with minimal disruption to our daily operations.",
    author: "Terry Mesch",
    organization: "Pepin County Economic Development",
    context: "Office partition installation",
  },
  {
    id: "kenosha-bible-church",
    quote:
      "We compared our new SA-1000 dividers to the expensive ceiling-suspended units already in our fellowship hall and found no appreciable acoustic difference. We purchased four additional units at substantially lower cost. The floor track removes in under two minutes when we need the full space open.",
    author: "Ed St. Peter",
    organization: "Kenosha Bible Church",
    context: "Fellowship hall acoustic comparison",
  },
];

export function getTestimonial(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id);
}
