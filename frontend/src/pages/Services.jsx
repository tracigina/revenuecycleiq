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
    Network,
    FileText,
    Repeat,
    Bot,
    CheckCircle2,
} from "lucide-react";

const services = [
    {
        icon: LineChart,
        title: "Revenue Cycle Assessments",
        intro:
            "Comprehensive evaluations of workflows, KPIs, denials, aging A/R, operational inefficiencies, and financial performance opportunities.",
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
        title: "Denial Management Strategy",
        intro:
            "Identifying denial trends and root causes while implementing proactive strategies to improve first-pass resolution and reduce revenue leakage.",
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
        title: "Workflow Optimization",
        intro:
            "Streamlining revenue cycle processes to improve operational efficiency, accountability, productivity, and collections performance.",
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
        title: "KPI & Analytics Development",
        intro:
            "Creating meaningful dashboards, scorecards, and reporting structures that provide actionable operational insights and performance visibility.",
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
        icon: Network,
        title: "Clearinghouse & EDI Optimization",
        intro:
            "Supporting clearinghouse implementations, payer enrollments, ERA/EFT setup, claim submission optimization, and workflow automation opportunities.",
        bullets: [
            "Clearinghouse evaluation",
            "Payer enrollment support",
            "ERA / EFT setup",
            "Claim submission optimization",
            "Edits and rejection review",
            "EDI workflow automation",
        ],
    },
    {
        icon: FileText,
        title: "SOP Development",
        intro:
            "Building standardized operating procedures and operational workflows across all revenue cycle functions.",
        bullets: [
            "Function-by-function SOPs",
            "Documented workflows",
            "Quality and audit checklists",
            "Onboarding and training assets",
            "Cross-team handoff playbooks",
            "Operational standardization",
        ],
    },
    {
        icon: Repeat,
        title: "Revenue Cycle Operational Transformation",
        intro:
            "Helping organizations redesign workflows, improve processes, strengthen accountability, and optimize operational performance.",
        bullets: [
            "Current-state diagnostic",
            "Workflow redesign",
            "Accountability framework",
            "Productivity and quality KPIs",
            "Change management roadmap",
            "Performance optimization",
        ],
    },
    {
        icon: Bot,
        title: "AI & Automation Strategy",
        intro:
            "Evaluating opportunities for workflow automation, operational efficiencies, and AI-driven revenue cycle improvements.",
        bullets: [
            "Automation opportunity assessment",
            "Bot / RPA use-case mapping",
            "AI-assisted denial workflows",
            "Eligibility and authorization automation",
            "Reporting automation",
            "Vendor and tooling evaluation",
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
            "Workflow-system alignment",
            "Reporting capabilities review",
            "User adoption review",
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
                                                {String(i + 1).padStart(2, "0")} / 10
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
