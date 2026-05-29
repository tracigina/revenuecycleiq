import { useEffect } from "react";

export default function Disclaimer() {
    useEffect(() => {
        document.title = "Disclaimer | Revenue Cycle IQ";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white" data-testid="disclaimer-page">
            <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
                <div className="container-rc">
                    <p className="text-xs uppercase tracking-[0.18em] text-teal-700 font-semibold">
                        Revenue Cycle IQ | Last Updated: May 2026
                    </p>
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mt-4">
                        Disclaimer
                    </h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container-rc max-w-4xl">
                    <div className="legal-content space-y-5 text-slate-700 leading-relaxed [&_h2]:font-serif [&_h2]:text-slate-900 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-slate-700 [&_p]:leading-relaxed [&_a]:text-teal-700 [&_a]:underline [&_a:hover]:text-teal-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-slate-700">
                        <p>
                            Please read this Disclaimer carefully before using the Revenue Cycle IQ website, consulting services, or any tools, dashboards, or analytics products provided by Revenue Cycle IQ. By accessing or using this site or any associated services, you acknowledge and agree to the terms of this Disclaimer.
                        </p>

                        <h2>General Website Content</h2>
                        <p>
                            The information contained on this website is provided for general informational and business development purposes only. While Revenue Cycle IQ makes reasonable efforts to ensure the accuracy and currency of information presented, we make no representations or warranties of any kind — express or implied — regarding the completeness, accuracy, reliability, suitability, or availability of any information, services, or related content on this site. You rely on any information provided at your own risk.
                        </p>

                        <h2>No Professional Advice</h2>
                        <p>
                            Nothing on this website, and nothing communicated through a consultation, demonstration, presentation, report, or dashboard, constitutes or should be construed as legal, regulatory, compliance, coding, reimbursement, financial, accounting, or professional advisory advice. No consulting, advisory, or professional relationship is created by your use of this website or by participating in a consultation or demonstration unless expressly established in a separate written service agreement signed by an authorized representative of Revenue Cycle IQ. If you require legal, compliance, coding, reimbursement, or other professional guidance specific to your organization, you should engage a qualified professional independently.
                        </p>

                        <h2>Consulting Services</h2>
                        <p>
                            Recommendations, findings, observations, and guidance provided by Revenue Cycle IQ through its consulting engagements are based on information available at the time of the engagement and are intended to support your organization's operational decision-making. They are general in nature unless otherwise specified in a written service agreement. Revenue Cycle IQ does not guarantee any particular outcome, revenue improvement, compliance result, or operational change as a result of its consulting services. All consulting recommendations should be reviewed, validated, and approved by qualified personnel within your organization — including compliance officers, legal counsel, coding professionals, and revenue cycle leadership — before implementation.
                        </p>

                        <h2>Artificial Intelligence and Analytics Tools</h2>
                        <p>
                            Certain tools, dashboards, reports, analyses, and recommendations provided by Revenue Cycle IQ may utilize artificial intelligence, machine learning, predictive analytics, natural language processing, or automated logic. You acknowledge and agree that:
                        </p>
                        <ul>
                            <li>AI-generated outputs are probabilistic in nature and may contain errors, omissions, or inaccuracies.</li>
                            <li>Results produced by any Revenue Cycle IQ dashboard or analytics tool are intended for informational and operational decision-support purposes only.</li>
                            <li>No AI-generated output should be relied upon as legal, regulatory, compliance, coding, reimbursement, or financial advice.</li>
                            <li>Users are solely responsible for independently validating all findings, recommendations, flags, and outputs before making any business, clinical, operational, or financial decision.</li>
                            <li>Revenue Cycle IQ does not warrant that AI or analytics outputs will be error-free, complete, current, or suitable for any particular purpose.</li>
                        </ul>
                        <p>
                            The use of artificial intelligence in healthcare revenue cycle operations is an evolving field. Regulatory requirements and best practices continue to develop. It is your organization's responsibility to ensure that any use of AI-assisted tools complies with applicable laws, regulations, payer requirements, and internal policies.
                        </p>

                        <h2>Protected Health Information (PHI)</h2>
                        <p>
                            Revenue Cycle IQ's public website, demo tools, analytics products, and publicly accessible services are intended to operate in a PHI-free environment. Users are prohibited from uploading, submitting, transmitting, or sharing Protected Health Information (PHI), patient-identifiable information, or other regulated healthcare data through these services unless expressly authorized under a separate written agreement and Business Associate Agreement (BAA). Revenue Cycle IQ reserves the right to reject, block, quarantine, remove, or delete any content that appears to contain PHI or regulated healthcare information.
                        </p>

                        <h2>No Guarantee of Results</h2>
                        <p>
                            Revenue Cycle IQ does not guarantee, warrant, or represent that use of its website, consulting services, or analytics tools will result in any specific financial, operational, compliance, or reimbursement outcome. Past performance, case studies, or examples referenced on this site are illustrative only and are not guarantees of future results.
                        </p>

                        <h2>Third-Party Information</h2>
                        <p>
                            This site may reference or link to third-party sources, regulations, payer policies, coding guidelines, or industry publications. Such references are provided for informational convenience only. Revenue Cycle IQ does not endorse, control, or assume responsibility for the accuracy, completeness, or currency of any third-party content. Regulatory and payer requirements change frequently — always verify information against current official sources.
                        </p>

                        <h2>Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by applicable law, Revenue Cycle IQ and its officers, directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your reliance on website content, consulting recommendations, or AI and analytics tool outputs. For website visitors, liability shall not exceed $100. For clients under a paid service agreement, liability shall not exceed the fees paid to Revenue Cycle IQ during the twelve (12) months preceding the claim.
                        </p>

                        <h2>Changes to This Disclaimer</h2>
                        <p>
                            We may update this Disclaimer periodically to reflect changes in our services, technologies, or applicable law. Changes will be posted on this page with a revised date. Continued use of the site or services constitutes acceptance of the updated Disclaimer.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            Revenue Cycle IQ<br />
                            <a href="mailto:intel@therevenuecycleiq.com">intel@therevenuecycleiq.com</a><br />
                            www.therevenuecycleiq.com
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
