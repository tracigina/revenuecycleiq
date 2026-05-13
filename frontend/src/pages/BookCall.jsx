import { useState } from "react";
import { useSEO } from "../lib/seo";
import { submitForm } from "../lib/netlify";
import PageHero from "../components/site/PageHero";
import Reveal from "../components/site/Reveal";
import { CheckCircle2, Calendar, Clock, ShieldCheck } from "lucide-react";

const discussTopics = [
    "Revenue cycle performance concerns",
    "Denial trends",
    "A/R challenges",
    "Workflow inefficiencies",
    "Reporting gaps",
    "System concerns",
    "Cash collection opportunities",
];

export default function BookCall() {
    useSEO({
        title: "Book a Revenue Cycle Consultation | Revenue Cycle IQ",
        description:
            "Book a consultation with Revenue Cycle IQ to discuss denial trends, A/R challenges, workflow inefficiencies, reporting gaps, system concerns, and cash collection opportunities.",
    });

    const [form, setForm] = useState({
        name: "",
        email: "",
        organization: "",
        phone: "",
        preferred_date: "",
        preferred_time: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!form.name || !form.email || !form.message) {
            setError("Please provide your name, email, and a brief message.");
            return;
        }
        setSubmitting(true);
        try {
            await submitForm({ formName: "booking", data: form, backendPath: "/booking" });
            setSuccess(true);
            setForm({ name: "", email: "", organization: "", phone: "", preferred_date: "", preferred_time: "", message: "" });
        } catch (err) {
            setError("Something went wrong. Please try again or email us directly.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <PageHero
                eyebrow="Book a Call"
                title="Book a Consultation"
                subtitle="Let's talk about your revenue cycle challenges and where your organization may have opportunities to improve performance."
                image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80"
                alt="Healthcare consulting call"
            />

            <section className="section-padding bg-white">
                <div className="container-rc grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left: discuss topics + reassurance */}
                    <Reveal className="lg:col-span-5">
                        <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-700">Use This Call To Discuss</span>
                        <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                            A focused conversation about your revenue cycle.
                        </h2>
                        <ul className="mt-7 space-y-3">
                            {discussTopics.map((t) => (
                                <li key={t} className="flex items-start gap-3" data-testid={`discuss-topic-${t.toLowerCase().replace(/\s+/g, "-")}`}>
                                    <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-base text-slate-800 font-medium">{t}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 bg-slate-50 border border-slate-100 rounded-2xl p-6">
                            <div className="flex items-center gap-3 text-teal-700">
                                <ShieldCheck className="w-5 h-5" />
                                <span className="text-xs uppercase tracking-[0.2em] font-bold">No Pressure</span>
                            </div>
                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                This consultation is designed to better understand your current revenue cycle challenges and determine where Revenue Cycle IQ may be able to support your organization.
                            </p>
                        </div>
                    </Reveal>

                    {/* Right: form */}
                    <Reveal className="lg:col-span-7" delay={0.1}>
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] p-8 md:p-10">
                            {success ? (
                                <div className="text-center py-10" data-testid="booking-success">
                                    <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto">
                                        <CheckCircle2 className="w-9 h-9 text-teal-700" />
                                    </div>
                                    <h3 className="mt-5 text-2xl font-serif font-bold text-slate-900">Request received.</h3>
                                    <p className="mt-3 text-base text-slate-600 max-w-md mx-auto">
                                        Thank you. We'll review your request and reach out shortly to confirm a time.
                                    </p>
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="mt-7 inline-flex items-center text-sm font-bold text-teal-700 hover:text-teal-800 uppercase tracking-wider"
                                        data-testid="booking-submit-another"
                                    >
                                        Submit another request →
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={onSubmit}
                                    name="booking"
                                    method="POST"
                                    data-netlify="true"
                                    netlify-honeypot="bot-field"
                                    data-testid="booking-form"
                                    noValidate
                                >
                                    <input type="hidden" name="form-name" value="booking" />
                                    <p className="hidden">
                                        <label>Don't fill this out: <input name="bot-field" /></label>
                                    </p>

                                    <h3 className="text-2xl font-serif font-bold text-slate-900">Schedule a Call</h3>
                                    <p className="mt-2 text-sm text-slate-600">Fields marked with * are required.</p>

                                    <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <Field label="Name *" name="name" value={form.name} onChange={onChange} required />
                                        <Field label="Email *" type="email" name="email" value={form.email} onChange={onChange} required />
                                        <Field label="Organization" name="organization" value={form.organization} onChange={onChange} />
                                        <Field label="Phone" type="tel" name="phone" value={form.phone} onChange={onChange} />
                                        <Field
                                            label="Preferred Date"
                                            type="date"
                                            name="preferred_date"
                                            value={form.preferred_date}
                                            onChange={onChange}
                                            icon={Calendar}
                                        />
                                        <Field
                                            label="Preferred Time"
                                            type="time"
                                            name="preferred_time"
                                            value={form.preferred_time}
                                            onChange={onChange}
                                            icon={Clock}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="block text-xs uppercase tracking-[0.15em] font-bold text-slate-700">
                                            What would you like to discuss? *
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={onChange}
                                            data-testid="booking-input-message"
                                            className="mt-2 w-full bg-slate-50 border border-slate-200 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-100 rounded-xl px-4 py-3 text-base text-slate-900 outline-none transition-all"
                                            placeholder="Tell us a little about what you're seeing — denial trends, A/R challenges, workflow concerns..."
                                        />
                                    </div>

                                    {error && (
                                        <div className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3" data-testid="booking-error">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        data-testid="booking-submit"
                                        className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 disabled:opacity-60 text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-colors"
                                    >
                                        {submitting ? "Sending..." : "Schedule a Call"}
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

function Field({ label, name, type = "text", value, onChange, required, icon: Icon }) {
    return (
        <div>
            <label className="block text-xs uppercase tracking-[0.15em] font-bold text-slate-700" htmlFor={name}>
                {label}
            </label>
            <div className="relative mt-2">
                {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />}
                <input
                    id={name}
                    name={name}
                    type={type}
                    required={required}
                    value={value}
                    onChange={onChange}
                    data-testid={`booking-input-${name}`}
                    className={`w-full bg-slate-50 border border-slate-200 focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-100 rounded-xl ${
                        Icon ? "pl-10 pr-4" : "px-4"
                    } py-3 text-base text-slate-900 outline-none transition-all`}
                />
            </div>
        </div>
    );
}
