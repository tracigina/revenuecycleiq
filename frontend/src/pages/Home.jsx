import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowRight,
    LineChart,
    ShieldCheck,
    Workflow,
    BarChart3,
    TrendingDown,
    Cpu,
    CheckCircle2,
    Sparkles,
    Network,
    FileText,
    Repeat,
    Bot,
} from "lucide-react";
import { useSEO } from "../lib/seo";
import Reveal from "../components/site/Reveal";
import CTASection from "../components/site/CTASection";
import CountUp from "../components/site/CountUp";

const services = [
    {
        icon: LineChart,
        title: "Revenue Cycle Assessments",
        desc: "Comprehensive evaluations of workflows, KPIs, denials, aging A/R, operational inefficiencies, and financial performance opportunities.",
    },
    {
        icon: Workflow,
        title: "Workflow Optimization",
        desc: "Streamlining revenue cycle processes to improve operational efficiency, accountability, productivity, and collections performance.",
    },
    {
        icon: TrendingDown,
        title: "Denial Management Strategy",
        desc: "Identifying denial trends and root causes while implementing proactive strategies to improve first-pass resolution and reduce revenue leakage.",
    },
    {
        icon: BarChart3,
        title: "KPI & Analytics Development",
        desc: "Creating meaningful dashboards, scorecards, and reporting structures that provide actionable operational insights and performance visibility.",
    },
    {
        icon: Network,
        title: "Clearinghouse & EDI Optimization",
        desc: "Supporting clearinghouse implementations, payer enrollments, ERA/EFT setup, claim submission optimization, and workflow automation opportunities.",
    },
    {
        icon: FileText,
        title: "SOP Development",
        desc: "Building standardized operating procedures and operational workflows across all revenue cycle functions.",
    },
    {
        icon: Repeat,
        title: "Revenue Cycle Operational Transformation",
        desc: "Helping organizations redesign workflows, improve processes, strengthen accountability, and optimize operational performance.",
    },
    {
        icon: Bot,
        title: "AI & Automation Strategy",
        desc: "Evaluating opportunities for workflow automation, operational efficiencies, and AI-driven revenue cycle improvements.",
    },
];

const reviewAreas = ["Workflows", "Systems", "Staffing", "KPIs", "Reporting", "Denials", "A/R", "Payor Trends"];

const whyBullets = [
    "Hands-On Operational Experience",
    "Data-Driven Insights",
    "Practical Recommendations",
    "Healthcare-Focused Strategy",
    "Real-World Revenue Cycle Knowledge",
];

const experienceTags = [
    "Professional Billing",
    "Hospital Revenue Cycle",
    "Behavioral Health Revenue Cycle",
    "Front-End Operations",
    "Billing & Claims",
    "Denial Management",
    "Insurance Follow-Up",
    "Patient Collections",
    "Payment Posting",
    "Global Workforce Strategy",
    "Operational Leadership",
    "Revenue Cycle Analytics",
];

const approachSteps = [
    {
        n: "01",
        title: "Deep Dive",
        desc: "We review the current state of your revenue cycle and identify what is impacting performance.",
    },
    {
        n: "02",
        title: "Find the Gaps",
        desc: "We uncover workflow issues, system limitations, reporting gaps, staffing concerns, and denial trends.",
    },
    {
        n: "03",
        title: "Build the Strategy",
        desc: "We create a practical roadmap focused on cash improvement, denial reduction, operational efficiency, and stronger accountability.",
    },
    {
        n: "04",
        title: "Drive Results",
        desc: "We help organizations focus on the areas that matter most: cleaner claims, faster collections, lower denials, and better visibility.",
    },
];

export default function Home() {
    useSEO({
        title: "Revenue Cycle IQ | Healthcare Revenue Cycle Consulting & Optimization",
        description:
            "Revenue Cycle IQ helps healthcare organizations improve financial performance through revenue cycle optimization, analytics, workflow transformation, denial reduction, and operational intelligence.",
    });

    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden bg-slate-900" data-testid="home-hero">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
                        alt="Healthcare revenue cycle analytics dashboard"
                        className="w-full h-full object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-900/60" />
                </div>
                <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-teal-500/15 blur-3xl" aria-hidden />
                <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-sky-500/10 blur-3xl" aria-hidden />

                <div className="container-rc relative pt-20 pb-28 md:pt-28 md:pb-36">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <motion.span
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-teal-300"
                            >
                                <Sparkles className="w-3.5 h-3.5" />
                                Healthcare Revenue Cycle Consulting
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.02] tracking-tight"
                            >
                                Revenue Cycle IQ
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mt-3 text-xl md:text-2xl font-serif italic shimmer"
                            >
                                Insights That Drive Revenue
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="mt-7 text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl"
                            >
                                Helping healthcare organizations improve financial performance through revenue cycle optimization, analytics, workflow transformation, denial reduction strategies, and operational intelligence.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="mt-9 flex flex-col sm:flex-row gap-4"
                            >
                                <Link
                                    to="/book-a-call"
                                    data-testid="hero-book-consultation"
                                    className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-colors"
                                >
                                    Book a Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    to="/services"
                                    data-testid="hero-explore-services"
                                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full border border-white/20 transition-colors backdrop-blur"
                                >
                                    Explore Services
                                </Link>
                            </motion.div>
                        </div>

                        {/* Floating stat cards */}
                        <div className="lg:col-span-5 relative h-[360px] hidden lg:block">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute top-0 right-0 w-72 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-2xl animate-float-slow"
                                data-testid="hero-stat-1"
                            >
                                <div className="text-xs uppercase tracking-wider text-teal-700 font-bold">Experience</div>
                                <div className="mt-2 text-5xl font-serif font-bold text-slate-900">
                                    <CountUp end={24} suffix="+" />
                                </div>
                                <div className="mt-1 text-sm text-slate-600">Years of hands-on revenue cycle expertise</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="absolute top-44 left-0 w-64 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-2xl animate-float-slower"
                                data-testid="hero-stat-2"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                                        <TrendingDown className="w-5 h-5 text-teal-700" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">Denial Reduction</div>
                                        <div className="text-xs text-slate-500">Strategy & root-cause review</div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                                className="absolute bottom-0 right-4 w-72 bg-slate-800/90 backdrop-blur rounded-2xl p-5 shadow-2xl border border-white/10 animate-float-slow"
                                data-testid="hero-stat-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
                                        <BarChart3 className="w-5 h-5 text-teal-300" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">Revenue Cycle Analytics</div>
                                        <div className="text-xs text-slate-400">KPI dashboards & visibility</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile chips */}
                    <div className="lg:hidden mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-white/10 border border-white/15 backdrop-blur rounded-xl p-4 text-white">
                            <div className="text-2xl font-serif font-bold">24+</div>
                            <div className="text-xs text-slate-300">Years Experience</div>
                        </div>
                        <div className="bg-white/10 border border-white/15 backdrop-blur rounded-xl p-4 text-white">
                            <div className="text-sm font-bold">Denial Reduction</div>
                            <div className="text-xs text-slate-300">Strategy</div>
                        </div>
                        <div className="bg-white/10 border border-white/15 backdrop-blur rounded-xl p-4 text-white">
                            <div className="text-sm font-bold">RC Analytics</div>
                            <div className="text-xs text-slate-300">KPI dashboards</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE DO */}
            <section className="section-padding bg-white" data-testid="what-we-do">
                <div className="container-rc grid lg:grid-cols-2 gap-14 items-center">
                    <Reveal>
                        <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-700">What We Do</span>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                            Uncovering what slows down cash — and clearing the path forward.
                        </h2>
                        <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
                            Revenue Cycle IQ helps healthcare organizations identify what is slowing down cash, increasing denials, delaying claims, or creating operational inefficiencies.
                        </p>
                        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                            We take a deep dive into your revenue cycle operations, workflows, systems, staffing model, KPIs, and reporting to uncover gaps and create a clear path toward stronger performance.
                        </p>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-teal-100 -z-10" aria-hidden />
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-sky-100 -z-10" aria-hidden />
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] p-8">
                                <div className="text-xs uppercase tracking-[0.2em] font-bold text-teal-700">Areas We Review</div>
                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    {reviewAreas.map((area) => (
                                        <div
                                            key={area}
                                            className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3"
                                            data-testid={`review-area-${area.toLowerCase().replace(/\s+/g, "-")}`}
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                                            <span className="text-sm font-semibold text-slate-800">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* SERVICES */}
            <section className="section-padding bg-slate-50" data-testid="home-services">
                <div className="container-rc">
                    <Reveal>
                        <div className="max-w-3xl">
                            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-700">Our Services</span>
                            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                Revenue Cycle Services
                            </h2>
                            <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
                                Strategic support designed to improve financial performance, reduce denials, strengthen workflows, and increase operational visibility.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map((s, i) => (
                            <Reveal key={s.title} delay={i * 0.04}>
                                <div
                                    className="group relative h-full overflow-hidden bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)] hover:-translate-y-1.5 hover:border-teal-200 transition-all duration-500"
                                    data-testid={`service-card-${i}`}
                                >
                                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-teal-100/0 group-hover:bg-teal-100/60 blur-2xl transition-colors duration-500" aria-hidden />
                                    <div className="relative">
                                        <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-5 group-hover:bg-teal-100 group-hover:scale-110 group-hover:rotate-[-4deg] transition-all duration-500">
                                            <s.icon className="w-5 h-5 text-teal-700" strokeWidth={1.75} />
                                        </div>
                                        <h3 className="text-lg font-serif font-bold text-slate-900 leading-tight">{s.title}</h3>
                                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                                        <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-teal-700 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                            Learn more <ArrowRight className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/services"
                            data-testid="home-view-all-services"
                            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-colors"
                        >
                            View All Services
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY RCIQ - NAVY CONTRAST */}
            <section className="section-padding bg-slate-900 text-white relative overflow-hidden" data-testid="home-why-rciq">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-teal-500/10 blur-3xl" aria-hidden />
                <div className="container-rc relative grid lg:grid-cols-2 gap-14 items-center">
                    <Reveal>
                        <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-300">Why Revenue Cycle IQ</span>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                            Revenue cycle from the inside out.
                        </h2>
                        <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed">
                            Revenue Cycle IQ is different because we understand revenue cycle from the inside out.
                        </p>
                        <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
                            With 24+ years of hands-on revenue cycle experience, we have worked across every function of the revenue cycle, from front-end operations to billing, collections, denial management, payment posting, analytics, and leadership.
                        </p>
                        <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
                            We bring real operational experience, not just theory.
                        </p>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div className="space-y-3">
                            {whyBullets.map((b, i) => (
                                <div
                                    key={b}
                                    className="flex items-center gap-4 bg-white/5 hover:bg-white/10 backdrop-blur border border-white/10 rounded-xl px-5 py-4 transition-colors"
                                    data-testid={`why-bullet-${i}`}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-teal-300" />
                                    </div>
                                    <span className="text-base font-semibold text-white">{b}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section className="section-padding bg-white" data-testid="experience-matters">
                <div className="container-rc">
                    <Reveal>
                        <div className="max-w-3xl">
                            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-700">Experience</span>
                            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                Experience That Matters
                            </h2>
                            <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
                                Revenue Cycle IQ brings experience across every major area of the healthcare revenue cycle.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="mt-12 flex flex-wrap gap-3">
                            {experienceTags.map((tag, i) => (
                                <motion.span
                                    key={tag}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                                    whileHover={{ y: -3, scale: 1.04 }}
                                    className="inline-flex items-center bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 text-slate-800 hover:text-teal-800 text-sm font-semibold px-5 py-3 rounded-full transition-colors cursor-default shadow-sm hover:shadow-md"
                                    data-testid={`experience-tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* APPROACH */}
            <section className="section-padding bg-slate-50" data-testid="home-approach">
                <div className="container-rc">
                    <Reveal>
                        <div className="max-w-3xl">
                            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-700">How We Work</span>
                            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                The Revenue Cycle IQ Approach
                            </h2>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {approachSteps.map((step, i) => (
                            <Reveal key={step.n} delay={i * 0.08}>
                                <div
                                    className="group relative h-full bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                                    data-testid={`approach-step-${i + 1}`}
                                >
                                    <div className="absolute inset-x-0 -top-px h-[3px] bg-gradient-to-r from-teal-500 via-teal-400 to-sky-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" aria-hidden />
                                    <div className="text-5xl font-serif font-bold text-teal-600/30 group-hover:text-teal-600/60 leading-none transition-colors duration-500">{step.n}</div>
                                    <h3 className="mt-4 text-xl font-serif font-bold text-slate-900">{step.title}</h3>
                                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
