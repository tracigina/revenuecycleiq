import { useState } from "react";
import { useSEO } from "../lib/seo";
import { submitForm } from "../lib/netlify";
import PageHero from "../components/site/PageHero";
import Reveal from "../components/site/Reveal";
import { CheckCircle2, Mail } from "lucide-react";

export default function Contact() {
    useSEO({
        title: "Contact Revenue Cycle IQ | Healthcare Revenue Cycle Consulting",
        description:
            "Contact Revenue Cycle IQ to learn more about revenue cycle consulting, denial reduction, workflow optimization, A/R review, KPI dashboards, and healthcare financial performance improvement.",
    });

    const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!form.name || !form.email || !form.message) {
            setError("Please provide your name, email, and a message.");
            return;
        }
        setSubmitting(true);
        try {
            await submitForm({ formName: "contact", data: form, backendPath: "/contact" });
            setSuccess(true);
            setForm({ name: "", email: "", organization: "", message: "" });
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <PageHero
                eyebrow="Contact"
                title="Contact Revenue Cycle IQ"
                subtitle="Have a question or want to learn more? Complete the form below and we will get back to you."
                image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80"
                alt="Healthcare consulting contact"
            />

            <section className="section-padding bg-white">
                <div className="container-rc grid lg:grid-cols-12 gap-12 items-start">
                    {/* Brand block */}
                    <Reveal className="lg:col-span-5">
                        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-teal-500/15 blur-3xl" aria-hidden />
                            <div className="relative">
                                <div className="inline-block rounded-xl ring-1 ring-slate-200 overflow-hidden bg-white shadow-lg">
                                    <img
                                        src="/images/logo.png"
                                        alt="Revenue Cycle IQ logo"
                                        className="h-32 sm:h-36 w-auto object-contain"
                                    />
                                </div>

                                <h2 className="mt-8 text-3xl font-serif font-bold text-white leading-tight">
                                    Let's start a conversation about your revenue cycle.
                                </h2>
                                <p className="mt-5 text-base text-slate-300 leading-relaxed">
                                    Whether you're facing operational inefficiencies, rising denials, aging A/R, or cash flow challenges — we'd welcome the opportunity to learn more about your organization and goals.
                                </p>

                                <div className="mt-8 flex items-center gap-3 text-slate-300">
                                    <Mail className="w-5 h-5 text-teal-300" />
                                    <span className="text-sm">We typically respond within one business day.</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Contact form */}
                    <Reveal className="lg:col-span-7" delay={0.1}>
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] p-8 md:p-10">
                            {success ? (
                                <div className="text-center py-10" data-testid="contact-success">
                                    <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto">
                                        <CheckCircle2 className="w-9 h-9 text-teal-700" />
                                    </div>
                                    <h3 className="mt-5 text-2xl font-serif font-bold text-slate-900">Message received.</h3>
                                    <p className="mt-3 text-base text-slate-600 max-w-md mx-auto">
                                        Thank you for reaching out. We'll be in touch shortly.
                                    </p>
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="mt-7 inline-flex items-center text-sm font-bold text-teal-700 hover:text-teal-800 uppercase tracking-wider"
                                        data-testid="contact-send-another"
                                    >
                                        Send another message →
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={onSubmit}
                                    name="contact"
                                    method="POST"
                                    data-netlify="true"
                                    netlify-honeypot="bot-field"
                                    data-testid="contact-form"
                                    noValidate
                                >
                                    <input type="hidden" name="form-name" value="contact" />
                                    <p className="hidden">
                                        <label>Don't fill this out: <input name="bot-field" /></label>
                                    </p>

                                    <h3 className="text-2xl font-serif font-bold text-slate-900">Send a Message</h3>
                                    <p className="mt-2 text-sm text-slate-600">Fields marked with * are required.</p>

                                    <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <ContactField label="Name *" name="name" value={form.name} onChange={onChange} required />
                                        <ContactField label="Email *" type="email" name="email" value={form.email} onChange={onChange} required />
                                    </div>
                                    <div className="mt-5">
                                        <ContactField label="Organization" name="organization" value={form.organization} onChange={onChange} />
                                    </div>

                                    <div className="mt-5">
                                        <label className="block text-xs uppercase tracking-[0.15em] font-bold text-slate-700" htmlFor="message">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={form.message}
                                            onChange={onChange}
                                            data-testid="contact-input-message"
                                            className="mt-2 w-full bg-slate-50 border border-slate-200 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-100 rounded-xl px-4 py-3 text-base text-slate-900 outline-none transition-all"
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    {error && (
                                        <div className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3" data-testid="contact-error">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        data-testid="contact-submit"
                                        className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 disabled:opacity-60 text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-colors"
                                    >
                                        {submitting ? "Sending..." : "Submit"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}

function ContactField({ label, name, type = "text", value, onChange, required }) {
    return (
        <div>
            <label className="block text-xs uppercase tracking-[0.15em] font-bold text-slate-700" htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                required={required}
                value={value}
                onChange={onChange}
                data-testid={`contact-input-${name}`}
                className="mt-2 w-full bg-slate-50 border border-slate-200 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-100 rounded-xl px-4 py-3 text-base text-slate-900 outline-none transition-all"
            />
        </div>
    );
}
