import { Link } from "react-router-dom";
import { LOGO_URL } from "../../lib/seo";

const INSIGHTS_URL = "https://insights.therevenuecycleiq.com";

const company = [
    { to: "/about", label: "About", type: "internal" },
    { to: "/contact", label: "Contact", type: "internal" },
    { to: "/why-revenue-cycle-iq", label: "Why Revenue Cycle IQ", type: "internal" },
];

const resources = [
    { href: INSIGHTS_URL, label: "Insights", type: "external" },
    { to: "/privacy-policy", label: "Privacy Policy", type: "internal" },
    { to: "/terms-of-use", label: "Terms of Use", type: "internal" },
    { to: "/disclaimer", label: "Disclaimer", type: "internal" },
];

function FooterLink({ item }) {
    const testId = `footer-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
    const cls = "text-sm text-slate-300 hover:text-teal-400 transition-colors";
    if (item.type === "external") {
        return (
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={testId}
                className={cls}
            >
                {item.label}
            </a>
        );
    }
    return (
        <Link to={item.to} data-testid={testId} className={cls}>
            {item.label}
        </Link>
    );
}

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300" data-testid="site-footer">
            <div className="container-rc py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <div className="inline-block rounded-2xl ring-1 ring-slate-200 shadow-xl overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1 bg-white">
                            <img
                                src={LOGO_URL}
                                alt="Revenue Cycle IQ logo"
                                className="h-36 sm:h-44 w-auto object-contain"
                            />
                        </div>
                        <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-md">
                            Helping healthcare organizations improve financial performance through smarter revenue cycle strategy, analytics, and operational improvement.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-serif text-lg mb-5">Company</h3>
                        <ul className="space-y-3">
                            {company.map((l) => (
                                <li key={l.label}>
                                    <FooterLink item={l} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-serif text-lg mb-5">Resources</h3>
                        <ul className="space-y-3">
                            {resources.map((l) => (
                                <li key={l.label}>
                                    <FooterLink item={l} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-xs text-slate-500">© 2026 Revenue Cycle IQ. All rights reserved.</p>
                    <p className="text-xs text-slate-500">Insights That Drive Revenue</p>
                </div>
            </div>
        </footer>
    );
}
