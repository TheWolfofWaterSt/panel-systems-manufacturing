import { Factory, Layers, Wrench } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Factory, Layers, Wrench];

const savingsPoints = [
  {
    title: "Factory Direct",
    description: "We manufacture and sell directly to you. No dealer, no distributor, no catalog markups.",
  },
  {
    title: "Floor-Supported Design",
    description: "No ceiling beams, no structural engineering, no costly installation crews. Our systems mount to the floor.",
  },
  {
    title: "DIY Installation",
    description: "Complete instructions, CAD drawings, and personal phone support from the owner — included with every order.",
  },
];

export function SavingsStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Why Do Our Customers Save 50–75% Over Other Systems?"
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {savingsPoints.map((point, i) => {
            const Icon = icons[i] ?? Factory;
            return (
              <div key={point.title} className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-amber-600" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{point.title}</h3>
                <p className="text-slate-600">{point.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 bg-navy-900 rounded-lg p-8 text-center text-white">
          <p className="text-lg md:text-xl font-medium">
            A local school paid <span className="text-amber-400 font-bold">$7,000</span> with us.
            The ceiling-suspended alternative was quoted at{" "}
            <span className="text-amber-400 font-bold">$20,000+</span>.
          </p>
          <Link
            href="/case-studies/"
            className="inline-block mt-4 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
          >
            Read our case studies →
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function ProcessSteps() {
  const steps = [
    {
      step: "1",
      title: "Tell us your room",
      description: "Share your model preference, room length, and floor-to-ceiling height.",
    },
    {
      step: "2",
      title: "We build it to fit",
      description: "Every panel is custom-manufactured to your exact dimensions in our Wisconsin facility.",
    },
    {
      step: "3",
      title: "Install it yourself",
      description: "Follow our instructions and diagrams. Call us anytime. Our owner answers the phone.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <Container>
        <SectionHeading
          title="Getting Your Custom Divider Is Simple"
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="relative bg-white rounded-lg p-8 border border-slate-200">
              <span className="absolute -top-4 left-8 w-8 h-8 bg-amber-500 text-navy-900 rounded-full flex items-center justify-center font-bold text-sm">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold text-navy-900 mt-2 mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
