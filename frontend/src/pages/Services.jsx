import { useSEO } from "../lib/seo";
import PageHero from "../components/site/PageHero";
import Reveal from "../components/site/Reveal";
import CTASection from "../components/site/CTASection";
import {
    LineChart,
    TrendingDown,
    DollarSign,
    Workflow,
    BarChart3,
    Cpu,
    CheckCircle2,
} from "lucide-react";

const services = [
    {
        icon: LineChart,
        title: "Revenue Cycle Assessment",
        intro:
            "A detailed review of current workflows, system usage, staffing structure, reporting, KPIs, and operational performance.",
        bullets: [
            "Workflow review",
            "Staffing and accountability review",
            "KPI and dashboard review",
            "Operational performance analysis",
            "Gap identification",
            "Strategic recommendations",
        ],
    },
    {
        icon: TrendingDown,
        title: "Denial Management Review",
        intro:
            "Identify denial trends, root causes, avoidable write-offs, front-end issues, authorization gaps, eligibility issues, and payor-related patterns.",
        bullets: [
            "Denial trend analysis",
            "Root cause review",
            "Authorization and eligibility review",
            "Avoidable write-off analysis",
            "Payor pattern review",
            "Denial prevention recommendations",
        ],
    },
    {
        icon: DollarSign,
        title: "A/R & Collection Strategy",
        intro:
            "Review aging accounts receivable, payor performance, follow-up processes, collection barriers, and opportunities to improve cash.",
        bullets: [
            "Aging A/R review",
            "Payor performance review",
            "Follow-up workflow review",
            "Collection barrier identification",
            "Underpayment and delay analysis",
            "Cash acceleration strategy",
        ],
    },
    {
        icon: Workflow,
        title: "Workflow Transformation",
        intro:
            "Evaluate current workflows and recommend improvements to reduce manual work, improve accountability, and increase efficiency.",
        bullets: [
            "Manual process review",
            "Workflow redesign",
            "Cross-department handoff review",
            "Accountability improvements",
            "Efficiency recommendations",
            "Operational standardization",
        ],
    },
    {
        icon: BarChart3,
        title: "KPI Dashboard Review",
        intro:
            "Assess whether leadership has the right metrics, definitions, dashboards, and reporting cadence to manage performance effectively.",
        bullets: [
            "KPI definition review",
            "Dashboard quality review",
            "Reporting cadence assessment",
            "Leadership visibility review",
            "Metric alignment",
            "Performance tracking recommendations",
        ],
    },
    {
        icon: Cpu,
        title: "System Utilization Review",
        intro:
            "Determine whether current systems are being fully leveraged before assuming a new system is needed.",
        bullets: [
            "System usage review",
            "Configuration opportunity review",
            "Clearinghouse process review",
            "Workflow-system alignment",
            "Reporting capabilities review",
            "Optimization recommendations",
        ],
    },
];

export default function Services() {
    useSEO({
        title: "Revenue Cycle Services | Denial Reduction, A/R Review & Workflow Optimization",
        description:
            "Revenue Cycle IQ provides healthcare revenue cycle assessments, denial management reviews, A/R and collection strategies, workflow transformation, KPI dashboard reviews, and system utilization reviews.",
    });

    return (
        <>
            <PageHero
                eyebrow="Services"
                title="Revenue Cycle Services"
                subtitle="Strategic support for healthcare organizations looking to improve revenue cycle performance, reduce denials, strengthen workflows, and increase operational visibility."
                image="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=2000&q=80"
                alt="Healthcare revenue cycle analytics"
            />

            <section className="section-padding bg-white">
                <div className="container-rc space-y-20">
                    {services.map((s, i) => (
                        <Reveal key={s.title}>
                            <div
                                className={`grid lg:grid-cols-12 gap-10 items-start ${
                                    i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                                }`}
                                data-testid={`services-block-${i + 1}`}
                            >
                                <div className="lg:col-span-5">
                                    <div className="sticky top-28">
                                        <div className="inline-flex items-center gap-3">
                                            <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center">
                                                <s.icon className="w-7 h-7 text-teal-700" strokeWidth={1.75} />
                                            </div>
                                            <span className="text-xs uppercase tracking-[0.22em] font-bold text-teal-700">
                                                0{i + 1} / 06
                                            </span>
                                        </div>
                                        <h2 className="mt-5 text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                                            {s.title}
                                        </h2>
                                        <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">{s.intro}</p>
                                    </div>
                                </div>
                                <div className="lg:col-span-7">
                                    <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
                                        <div className="text-xs uppercase tracking-[0.2em] font-bold text-teal-700 mb-5">
                                            What's Included
                                        </div>
                                        <ul className="space-y-4">
                                            {s.bullets.map((b) => (
                                                <li key={b} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                                    <span className="text-base text-slate-800 font-medium">{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <CTASection
                eyebrow="Get Started"
                title="Not sure where to start? Book a consultation."
                description="A short conversation can help identify which service best fits your organization's current revenue cycle priorities."
                buttonText="Book a Consultation"
            />
        </>
    );
}
