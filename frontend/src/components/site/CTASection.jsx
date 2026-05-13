import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTASection({
    eyebrow = "Let's talk",
    title = "Ready to improve your revenue cycle performance?",
    description = "Let's identify what is driving your revenue cycle challenges and create a strategy to improve cash, reduce denials, and strengthen operations.",
    buttonText = "Book a Call",
    buttonHref = "/book-a-call",
}) {
    return (
        <section className="section-padding bg-slate-50 border-t border-slate-100" data-testid="cta-section">
            <div className="container-rc">
                <Reveal>
                    <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 md:px-16 md:py-20">
                        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-500/15 blur-3xl" aria-hidden />
                        <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl" aria-hidden />
                        <div className="relative max-w-3xl">
                            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-teal-300">{eyebrow}</span>
                            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">{title}</h2>
                            <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed">{description}</p>
                            <Link
                                to={buttonHref}
                                data-testid="cta-section-button"
                                className="mt-8 inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-colors"
                            >
                                {buttonText}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
