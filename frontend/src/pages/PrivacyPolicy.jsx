import { useEffect } from "react";

export default function PrivacyPolicy() {
    useEffect(() => {
        document.title = "Privacy Policy | Revenue Cycle IQ";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white" data-testid="privacy-policy-page">
            <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
                <div className="container-rc">
                    <p className="text-xs uppercase tracking-[0.18em] text-teal-700 font-semibold">
                        Revenue Cycle IQ | Last Updated: May 2026
                    </p>
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mt-4">
                        Privacy Policy
                    </h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container-rc max-w-4xl">
                    <div className="legal-content space-y-5 text-slate-700 leading-relaxed [&_h2]:font-serif [&_h2]:text-slate-900 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-slate-700 [&_p]:leading-relaxed [&_a]:text-teal-700 [&_a]:underline [&_a:hover]:text-teal-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-slate-700">
                        <p>
                            Revenue Cycle IQ ("Company," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website, request a demo or consultation, or sign up for our newsletter. By using our site, you agree to the practices described here. This policy does not govern data processed under a separate Business Associate Agreement (BAA) or client service contract.
                        </p>

                        <h2>Information We Collect</h2>
                        <p>
                            We collect information you voluntarily provide when contacting us, requesting a demo or consultation, or signing up for our newsletter — including your name, job title, email address, phone number, company name, and any messages submitted through our forms.
                        </p>
                        <p>
                            If you access our client portal, we also collect login credentials (passwords are encrypted and never stored in plain text), account activity, and files shared through the portal.
                        </p>
                        <p>
                            We also collect certain technical data automatically, including IP address, browser type, device information, pages visited, and analytics data via cookies.
                        </p>

                        <h2>Protected Health Information (PHI)</h2>
                        <p>
                            Revenue Cycle IQ maintains a strict PHI-free environment on its public website. You are prohibited from submitting PHI, patient-identifiable data, or any regulated healthcare information through our website, contact forms, demo tools, newsletter sign-up, or any other publicly available interface. Users are solely responsible for ensuring PHI or regulated healthcare information is not submitted through this website.
                        </p>
                        <p>
                            Revenue Cycle IQ reserves the right to reject, block, remove, quarantine, or delete any submission, file, dataset, or content that appears to contain Protected Health Information, patient-identifiable information, or other regulated healthcare data. Any PHI discovered may be rejected, quarantined, removed, or deleted without notice. We do not knowingly collect or store PHI through these channels.
                        </p>
                        <p>
                            Clients requiring PHI transmission must execute a separate Business Associate Agreement — these terms do not constitute a BAA. Contact us at <a href="mailto:intel@therevenuecycleiq.com">intel@therevenuecycleiq.com</a>.
                        </p>

                        <h2>How We Use Your Information</h2>
                        <p>
                            We use your information to respond to inquiries and demo requests, deliver our newsletter and service updates, manage client portal access, analyze and improve our website, measure marketing effectiveness, comply with legal obligations, and detect fraudulent activity.
                        </p>

                        <h2>Legal Basis for Processing</h2>
                        <p>
                            We rely on your consent for newsletter subscriptions (which you may withdraw at any time), legitimate interests for responding to inquiries and improving our website, contractual necessity for consultation and service engagements, and legal obligation where required by law.
                        </p>

                        <h2>Cookies and Tracking</h2>
                        <p>
                            Our site uses essential cookies (required for functionality), analytics cookies (to understand traffic), and marketing cookies (to measure campaign effectiveness). You may manage or disable cookies through your browser settings. We do not sell personal information.
                        </p>

                        <h2>Third-Party Service Providers</h2>
                        <p>
                            We share information with trusted vendors including website hosting providers, scheduling platforms, email marketing services, analytics providers, and CRM platforms. All providers are contractually required to maintain appropriate security safeguards. We do not sell your personal information to any third party.
                        </p>

                        <h2>Data Security</h2>
                        <p>
                            We implement reasonable safeguards including encryption of data in transit (TLS/SSL), access controls, and secure authentication for the client portal. No method of internet transmission is completely secure, and you submit information at your own risk.
                        </p>

                        <h2>Data Breach Notification</h2>
                        <p>
                            In the event of a breach affecting your personal information, we will investigate promptly, notify affected individuals within a commercially reasonable timeframe, and cooperate with regulatory authorities as required.
                        </p>

                        <h2>Data Retention</h2>
                        <p>
                            Newsletter subscriber data is retained until you unsubscribe. Demo and inquiry data is retained for up to two years following last contact. Client portal data is subject to retention terms in your service agreement.
                        </p>

                        <h2>Your Rights</h2>
                        <p>
                            You may request access to, correction of, or deletion of your personal information. You may opt out of communications at any time using the unsubscribe link in any email or by contacting us directly. We will respond to all requests within 30 days.
                        </p>

                        <h2>California Privacy Rights</h2>
                        <p>
                            California residents may have additional privacy rights under applicable law, including the California Consumer Privacy Act (CCPA). These rights include the right to know what personal information is collected, the right to opt out of the sale of personal information (we do not sell personal information), and the right to non-discrimination for exercising these rights. To submit a request, contact us at <a href="mailto:intel@therevenuecycleiq.com">intel@therevenuecycleiq.com</a>.
                        </p>

                        <h2>Electronic Communications</h2>
                        <p>
                            By submitting a contact request, subscribing to our newsletter, or otherwise communicating electronically with Revenue Cycle IQ, you consent to receive communications electronically from us. Electronic communications satisfy any legal requirement that such communications be in writing.
                        </p>

                        <h2>Children's Privacy</h2>
                        <p>
                            This site is not directed to individuals under 18. We do not knowingly collect information from minors.
                        </p>

                        <h2>Changes to This Policy</h2>
                        <p>
                            We may update this policy periodically. Changes will be posted on this page with a revised date. Continued use of the site constitutes acceptance.
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
