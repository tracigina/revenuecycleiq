import { Link } from "react-router-dom";
import { LOGO_URL } from "../../lib/seo";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/why-revenue-cycle-iq", label: "Why Revenue Cycle IQ" },
    { to: "/book-a-call", label: "Book a Call" },
    { to: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300" data-testid="site-footer">
            <div className="container-rc py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <div className="inline-block bg-white rounded-2xl p-4 shadow-lg transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1">
                            <img
                                src={LOGO_URL}
                                alt="Revenue Cycle IQ logo"
                                className="h-32 w-32 sm:h-36 sm:w-36 object-contain"
                            />
                        </div>
                        <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-md">
                            Helping healthcare organizations improve financial performance through smarter revenue cycle strategy, analytics, and operational improvement.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-serif text-lg mb-5">Quick Links</h3>
                        <ul className="space-y-3">
                            {links.map((l) => (
                                <li key={l.to}>
                                    <Link
                                        to={l.to}
                                        data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="text-sm text-slate-300 hover:text-teal-400 transition-colors"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-serif text-lg mb-5">Get in Touch</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Ready to strengthen your revenue cycle? Schedule a consultation to discuss denial trends, A/R challenges, workflow inefficiencies, and cash collection opportunities.
                        </p>
                        <Link
                            to="/book-a-call"
                            data-testid="footer-book-a-call"
                            className="mt-5 inline-flex items-center bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
                        >
                            Book a Consultation
                        </Link>
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
