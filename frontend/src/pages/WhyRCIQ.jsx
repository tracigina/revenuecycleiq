import { useSEO } from "../lib/seo";
import PageHero from "../components/site/PageHero";
import Reveal from "../components/site/Reveal";
import CTASection from "../components/site/CTASection";
import { CheckCircle2 } from "lucide-react";

const differenceCards = [
    {
        title: "24+ Years of Revenue Cycle Experience",
        desc: "Decades of hands-on work across every stage of the healthcare revenue cycle, not just executive-level oversight.",
    },
    {
        title: "Every Major Revenue Cycle Function",
        desc: "From front-end registration and eligibility through billing, collections, denial management, payment posting, and analytics.",
    },
    {
        title: "Professional, Hospital & Behavioral Health",
        desc: "Cross-setting experience that informs how workflows, payors, and operational realities differ — and what actually works.",
    },
    {
        title: "Operational + Analytical Perspective",
        desc: "We pair real operational instincts with data analysis to find where cash, denials, and accountability are breaking down.",
    },
    {
        title: "Practical Recommendations",
        desc: "Strategy that works in the real world — within your team, your systems, and your operating reality.",
    },
];

export default function WhyRCIQ() {
    useSEO({
        title: "Why Revenue Cycle IQ | Revenue Cycle Optimization With Real Operational Experience",
        description:
            "Revenue Cycle IQ helps healthcare organizations connect the dots across people, process, systems, payors, reporting, denials, A/R, and financial performance.",
    });

    return (
        <>
            <PageHero
                eyebrow="Why Revenue Cycle IQ"
                title="Connect the dots across your revenue cycle."
                subtitle="Performance issues are rarely caused by one problem. They are usually the result of multiple breakdowns across people, process, systems, payors, and reporting."
                image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80"
                alt="Healthcare strategy team analyzing data"
            />

            <section className="section-padding bg-white">
                <div className="container-rc grid lg:grid-cols-12 gap-12 items-start">
                    <Reveal className="lg:col-span-7">
                        <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-700">The Reality</span>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                            Healthcare revenue cycle is complex.
                        </h2>
                        <div className="mt-7 space-y-5 text-base md:text-lg text-slate-600 leading-relaxed">
                            <p>
                                Performance issues are often not caused by one problem. They are usually the result of multiple breakdowns across people, process, systems, payors, and reporting.
                            </p>
                            <p className="font-semibold text-slate-900">Revenue Cycle IQ helps connect the dots.</p>
                            <p>
                                We look beyond surface-level metrics and dig into the operational details that impact cash, denials, A/R, and financial performance.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal className="lg:col-span-5" delay={0.15}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-sky-100 rounded-3xl -rotate-2" aria-hidden />
                            <div className="relative bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
                                <div className="text-xs uppercase tracking-[0.2em] font-bold text-teal-700">We Look At</div>
                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    {["People", "Process", "Systems", "Payors", "Workflows", "Reporting", "Denials", "Accountability"].map((t) => (
                                        <div key={t} className="flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-3">
                                            <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                                            <span className="text-sm font-semibold text-slate-800">{t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Our Difference */}
            <section className="section-padding bg-slate-50" data-testid="our-difference">
                <div className="container-rc">
                    <Reveal>
                        <div className="max-w-3xl">
                            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-700">Our Difference</span>
                            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                What sets us apart.
                            </h2>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {differenceCards.map((c, i) => (
                            <Reveal key={c.title} delay={i * 0.06}>
                                <div
                                    className="h-full bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    data-testid={`difference-card-${i + 1}`}
                                >
                                    <div className="text-4xl font-serif font-bold text-teal-600/30">0{i + 1}</div>
                                    <h3 className="mt-3 text-xl font-serif font-bold text-slate-900 leading-snug">{c.title}</h3>
                                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Smarter Way */}
            <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute -top-40 left-1/3 w-[40rem] h-[40rem] rounded-full bg-teal-500/10 blur-3xl" aria-hidden />
                <div className="container-rc relative max-w-4xl">
                    <Reveal>
                        <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-300">A Smarter Way</span>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                            A smarter way to understand revenue cycle performance.
                        </h2>
                        <p className="mt-7 text-base md:text-lg text-slate-300 leading-relaxed">
                            Revenue Cycle IQ combines operational experience with analytical insight to help healthcare organizations understand the full picture. We identify what is working, what is slowing performance down, and what needs to change to support stronger financial outcomes.
                        </p>
                    </Reveal>
                </div>
            </section>

            <CTASection
                eyebrow="Start the Conversation"
                title="Start with a revenue cycle conversation."
                description="A focused discussion can quickly reveal where your organization has opportunities to improve cash, reduce denials, and strengthen accountability."
                buttonText="Start With a Revenue Cycle Conversation"
            />
        </>
    );
}
