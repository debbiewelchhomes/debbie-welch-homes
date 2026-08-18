import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQProps {
  eyebrow?: string;
  title: string;
  intro: string;
  items: FAQItem[];
  background?: "default" | "warm";
}

const PageFAQ = ({
  eyebrow = "Questions worth asking…",
  title,
  intro,
  items,
  background = "warm",
}: PageFAQProps) => (
  <section className={`section ${background === "warm" ? "bg-warm-bg" : "bg-background"}`}>
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="font-heading h-section text-primary mb-4">{title}</h2>
        <p className="copy text-foreground">{intro}</p>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <details key={item.question} className="group rounded-xl border border-border bg-card">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-medium text-primary focus-visible:outline-none">
              <span className="font-body text-base md:text-lg">{item.question}</span>
              <ChevronDown
                className="h-5 w-5 flex-none text-secondary transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="px-6 pb-6">
              <p className="copy text-foreground">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>

      <p className="mt-8 text-center">
        <Link to="/resources/faq" className="font-medium text-secondary hover:underline">
          Read more frequently asked questions
        </Link>
      </p>
    </div>
  </section>
);

export default PageFAQ;
