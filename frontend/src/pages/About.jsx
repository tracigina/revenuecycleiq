import { useSEO } from "../lib/seo";
import PageHero from "../components/site/PageHero";
import Reveal from "../components/site/Reveal";
import CTASection from "../components/site/CTASection";
import { Users, GitBranch, Cpu, Building2, Workflow, BarChart3, ShieldCheck, TrendingUp } from "lucide-react";

const differentiators = [
    { icon: Users, label: "People" },
    { icon: GitBranch, label: "Process" },
    { icon: Cpu, label: "Systems" },
    { icon: Building2, label: "Payors" },
    { icon: Workflow, label: "Workflows" },
    { icon: BarChart3, label: "Reporting" },
    { icon: ShieldCheck, label: "Accountability" },
    { icon: TrendingUp, label: "Performance" },
];

export default function About() {
    useSEO({
        title: "About Revenue Cycle IQ | Healthcare Revenue Cycle Consulting Experience",
        description:
            "Learn about Revenue Cycle IQ and its 24+ years of hands-on revenue cycle experience across billing, collections, denial management, analytics, leadership, and operations.",
    });

    return (
        <>
            <PageHero
                eyebrow="About"
                title="About Revenue Cycle IQ"
                subtitle="Helping healthcare organizations improve financial performance through smarter revenue cycle strategy, operational insight, and process improvement."
                image="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=2000&q=80"
                alt="Healthcare consulting team meeting"
            />

            <section className="section-padding bg-white">
                <div className="container-rc grid lg:grid-cols-12 gap-12">
                    <Reveal className="lg:col-span-7">
                        <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-700">Our Story</span>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                            Built on 24+ years inside the revenue cycle.
                        </h2>
                        <div className="mt-7 space-y-5 text-base md:text-lg text-slate-600 leading-relaxed">
                            <p>
                                Revenue Cycle IQ was created to help healthcare organizations improve financial performance through smarter revenue cycle strategy, operational insight, and process improvement.
                            </p>
                            <p>
                                With over 24 years of revenue cycle experience, Revenue Cycle IQ brings a real-world understanding of what happens inside the revenue cycle every day.
                            </p>
                            <p>
                                What makes Revenue Cycle IQ unique is the experience of having worked in every major function of the revenue cycle, not just from a leadership level, but from the ground up.
                            </p>
                            <p>
                                That experience allows us to quickly identify where breakdowns are happening, why cash is delayed, why denials are increasing, and where workflows can be improved.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal className="lg:col-span-5" delay={0.15}>
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 sticky top-28">
                            <div className="text-xs uppercase tracking-[0.2em] font-bold text-teal-700">At a Glance</div>
                            <div className="mt-5 space-y-5">
                                <div>
                                    <div className="text-4xl font-serif font-bold text-slate-900">24+</div>
                                    <div className="text-sm text-slate-600 mt-1">Years of revenue cycle experience</div>
                                </div>
                                <div className="h-px bg-slate-200" />
                                <div>
                                    <div className="text-2xl font-serif font-bold text-slate-900">Hospital · Professional · Behavioral Health</div>
                                    <div className="text-sm text-slate-600 mt-1">Multi-setting expertise</div>
                                </div>
                                <div className="h-px bg-slate-200" />
                                <div>
                                    <div className="text-2xl font-serif font-bold text-slate-900">End-to-End</div>
                                    <div className="text-sm text-slate-600 mt-1">Front-end through analytics & leadership</div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="section-padding bg-slate-900 text-white relative overflow-hidden" data-testid="about-different">
                <div className="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-teal-500/10 blur-3xl" aria-hidden />
                <div className="container-rc relative">
                    <Reveal>
                        <div className="max-w-3xl">
                            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-300">What Makes Us Different</span>
                            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                                We don't just look at numbers.
                            </h2>
                            <div className="mt-7 space-y-5 text-base md:text-lg text-slate-300 leading-relaxed">
                                <p>
                                    We look at the full revenue cycle story: people, process, systems, payors, workflows, reporting, and accountability.
                                </p>
                                <p>
                                    Our goal is to help organizations understand what is happening, why it is happening, and what needs to change to improve performance.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {differentiators.map((d, i) => (
                            <Reveal key={d.label} delay={i * 0.05}>
                                <div
                                    className="bg-white/5 hover:bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 transition-colors text-center"
                                    data-testid={`differentiator-${d.label.toLowerCase()}`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mx-auto">
                                        <d.icon className="w-6 h-6 text-teal-300" strokeWidth={1.75} />
                                    </div>
                                    <div className="mt-4 text-base font-bold text-white">{d.label}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                eyebrow="Let's Connect"
                title="Let's talk about your revenue cycle."
                description="Tell us where you're seeing friction — denials, A/R, workflows, reporting, or system underutilization — and we'll bring real operational perspective to the conversation."
                buttonText="Let's Talk About Your Revenue Cycle"
            />
        </>
    );
}
