import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LOGO_URL } from "../../lib/seo";

const NAV = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/why-revenue-cycle-iq", label: "Why Revenue Cycle IQ" },
    { to: "/book-a-call", label: "Book a Call" },
    { to: "/contact", label: "Contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setOpen(false), [pathname]);

    return (
        <header
            data-testid="site-header"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm"
                    : "bg-white/80 backdrop-blur-sm border-b border-transparent"
            }`}
        >
            <div className="container-rc flex items-center justify-between h-20 overflow-visible">
                <Link
                    to="/"
                    className="group flex items-center gap-3 overflow-visible"
                    data-testid="header-logo-link"
                    aria-label="Revenue Cycle IQ home"
                >
                    <span className="block transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:-rotate-1">
                        <span className="block rounded-xl bg-white ring-1 ring-slate-200 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.18)] overflow-hidden">
                            <img
                                src={LOGO_URL}
                                alt="Revenue Cycle IQ logo"
                                className="h-16 w-auto object-contain"
                            />
                        </span>
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
                    {NAV.slice(0, 4).map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === "/"}
                            data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                            className={({ isActive }) =>
                                `nav-link relative px-4 py-2 text-sm font-semibold transition-colors ${
                                    isActive ? "text-teal-700 is-active" : "text-slate-700 hover:text-teal-700"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <NavLink
                        to="/contact"
                        data-testid="nav-link-contact"
                        className={({ isActive }) =>
                            `nav-link relative px-4 py-2 text-sm font-semibold transition-colors ${
                                isActive ? "text-teal-700 is-active" : "text-slate-700 hover:text-teal-700"
                            }`
                        }
                    >
                        Contact
                    </NavLink>
                    <Link
                        to="/book-a-call"
                        data-testid="nav-book-a-call-cta"
                        className="ml-3 relative inline-flex items-center bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-[0_0_0_4px_rgba(13,148,136,0.15)] hover:-translate-y-0.5 cta-pulse"
                    >
                        <span className="relative z-10">Book a Call</span>
                    </Link>
                </nav>

                <button
                    className="lg:hidden p-2 rounded-md hover:bg-slate-100 text-slate-900"
                    onClick={() => setOpen((s) => !s)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    data-testid="mobile-menu-toggle"
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden bg-white border-t border-slate-200" data-testid="mobile-menu">
                    <nav className="container-rc py-4 flex flex-col gap-1" aria-label="Mobile navigation">
                        {NAV.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                                className={({ isActive }) =>
                                    `px-4 py-3 text-base font-semibold rounded-md transition-colors ${
                                        isActive ? "text-teal-700 bg-teal-50" : "text-slate-800 hover:bg-slate-50"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
