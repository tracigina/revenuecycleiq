import { useSEO } from "../lib/seo";
import PageHero from "../components/site/PageHero";
import Reveal from "../components/site/Reveal";
import CTASection from "../components/site/CTASection";
import CountUp from "../components/site/CountUp";
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
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 sticky top-28">
                            <div className="text-xs uppercase tracking-[0.2em] font-bold text-teal-700">At a Glance</div>
                            <div className="mt-5 space-y-5">
                                <div>
                                    <div className="text-4xl font-serif font-bold text-slate-900">
                                        <CountUp end={24} suffix="+" />
                                    </div>
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

            {/* What Makes Us Different — split-screen */}
            <section className="relative" data-testid="about-different">
                <div className="grid lg:grid-cols-2 min-h-[640px]">
                    {/* Left: photo */}
                    <Reveal>
                        <div className="relative h-full min-h-[400px] lg:min-h-[700px]">
                            <img
                                src="https://customer-assets.emergentagent.com/job_revenue-insights-72/artifacts/y2igoa6c_0.png"
                                alt="Revenue Cycle IQ consultant presenting DSO performance drivers dashboard to a healthcare leadership team"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-transparent" aria-hidden />
                        </div>
                    </Reveal>

                    {/* Right: navy bold panel */}
                    <div className="bg-slate-900 text-white relative overflow-hidden">
                        <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-teal-500/12 blur-3xl animate-drift" aria-hidden />
                        <div className="absolute -bottom-40 -left-16 w-[28rem] h-[28rem] rounded-full bg-sky-500/8 blur-3xl" aria-hidden />

                        <div className="relative h-full px-8 sm:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
                            <Reveal>
                                <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-300">
                                    What Makes Us Different
                                </span>
                                <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white leading-[1.05] tracking-tight">
                                    What Makes<br />
                                    Revenue Cycle IQ<br />
                                    <span className="text-teal-300">Different</span>
                                </h2>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <div className="mt-8 space-y-5 text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
                                    <p>
                                        Revenue Cycle IQ is built on more than <span className="text-white font-semibold">24 years of hands-on healthcare revenue cycle experience</span> across every stage of the revenue cycle.
                                    </p>
                                    <p>
                                        Unlike many consulting firms that operate solely from a high-level management perspective, Revenue Cycle IQ brings real operational knowledge from working directly within front-end operations, insurance verification, billing, payment posting, denials management, collections, analytics, and executive leadership.
                                    </p>
                                    <p>
                                        This unique perspective — combined with experience across <span className="text-white font-semibold">professional services, hospital, and behavioral health</span> organizations — provides a deeper understanding of operational workflows, payor behavior, revenue cycle challenges, and the practical strategies needed to drive measurable financial improvement.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars grid */}
            <section className="section-padding bg-white" data-testid="about-pillars">
                <div className="container-rc">
                    <Reveal>
                        <div className="max-w-3xl">
                            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-700">
                                The Full Story
                            </span>
                            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                We don't just look at numbers.
                            </h2>
                            <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
                                We look at the full revenue cycle story — people, process, systems, payors, workflows, reporting, and accountability. Our goal is to help organizations understand what is happening, why it is happening, and what needs to change to improve performance.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {differentiators.map((d, i) => (
                            <Reveal key={d.label} delay={i * 0.05}>
                                <div
                                    className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-teal-200 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 text-center"
                                    data-testid={`differentiator-${d.label.toLowerCase()}`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500">
                                        <d.icon className="w-6 h-6 text-teal-700" strokeWidth={1.75} />
                                    </div>
                                    <div className="mt-4 text-base font-bold text-slate-900">{d.label}</div>
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
