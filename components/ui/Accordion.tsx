"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left min-h-[44px]"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-navy-900">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-navy-700 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-8">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  defaultOpen?: number;
}

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-slate-200 border-t border-slate-200">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
