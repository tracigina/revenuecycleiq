import { useEffect } from "react";

export default function TermsOfUse() {
    useEffect(() => {
        document.title = "Terms of Use | Revenue Cycle IQ";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white" data-testid="terms-of-use-page">
            <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
                <div className="container-rc">
                    <p className="text-xs uppercase tracking-[0.18em] text-teal-700 font-semibold">
                        Revenue Cycle IQ | Last Updated: May 2026
                    </p>
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mt-4">
                        Terms of Use
                    </h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container-rc max-w-4xl">
                    <div className="legal-content space-y-5 text-slate-700 leading-relaxed [&_h2]:font-serif [&_h2]:text-slate-900 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-slate-700 [&_p]:leading-relaxed [&_a]:text-teal-700 [&_a]:underline [&_a:hover]:text-teal-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-slate-700">
                        <p>
                            Please read these Terms of Use carefully before using the Revenue Cycle IQ website at www.therevenuecycleiq.com. By accessing or using the site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please discontinue use immediately.
                        </p>

                        <h2>Acceptance of Terms</h2>
                        <p>
                            By using this site, you represent that you are at least 18 years of age, have the legal capacity to enter into a binding agreement, and agree to comply with these Terms. If you are accessing the site on behalf of an organization, you represent that you have authority to bind that organization. We may update these Terms at any time — continued use after changes constitutes acceptance.
                        </p>

                        <h2>Description of Services</h2>
                        <p>
                            Revenue Cycle IQ is a healthcare revenue cycle consulting firm. Our site provides information about our services, allows visitors to request demos or consultations, and offers newsletter subscriptions. The site is intended for informational and business development purposes only. Access to the client portal may require registration and be subject to additional terms.
                        </p>

                        <h2>Permitted Use</h2>
                        <p>
                            You may use this site to learn about our services, submit genuine inquiries or demo requests, subscribe to our newsletter, and access the client portal with authorized credentials. You agree not to use the site in violation of any applicable law, submit false or fraudulent information, upload PHI or patient-identifiable data, attempt unauthorized access to any part of the site or portal, use automated tools to scrape or copy content, transmit spam or malicious code, or impersonate Revenue Cycle IQ or any other person or entity.
                        </p>

                        <h2>Protected Health Information — Strict Prohibition</h2>
                        <p>
                            Submitting PHI, patient-identifiable data, or regulated healthcare information through our website is strictly prohibited. This applies to contact forms, demo tools, newsletter sign-up, and all other publicly available interfaces. Users are solely responsible for ensuring PHI or regulated healthcare information is not submitted through this website. Revenue Cycle IQ reserves the right to reject, block, remove, quarantine, or delete any submission, file, dataset, or content that appears to contain Protected Health Information, patient-identifiable information, or other regulated healthcare data. Any PHI discovered may be rejected, quarantined, removed, or deleted without notice. Revenue Cycle IQ is not liable for any regulatory or legal consequences arising from unauthorized PHI submission. Clients requiring PHI transmission must execute a separate Business Associate Agreement — contact <a href="mailto:intel@therevenuecycleiq.com">intel@therevenuecycleiq.com</a>.
                        </p>

                        <h2>No Professional Advice</h2>
                        <p>
                            Information provided on this website does not create a consulting, legal, accounting, coding, reimbursement, or professional advisory relationship. Any recommendations provided through consultations or demonstrations are general in nature unless otherwise specified in a separate written agreement signed by an authorized representative of Revenue Cycle IQ.
                        </p>

                        <h2>Artificial Intelligence and Analytics Tools</h2>
                        <p>
                            Certain tools, dashboards, reports, or recommendations provided by Revenue Cycle IQ may utilize artificial intelligence, automation, predictive analytics, or machine learning technologies. Results are intended for informational and operational decision-support purposes only and should not be relied upon as legal, compliance, financial, coding, or reimbursement advice. Users remain solely responsible for validating all findings, recommendations, and business decisions made in connection with the use of these tools.
                        </p>

                        <h2>Electronic Communications</h2>
                        <p>
                            By submitting a contact request, subscribing to our newsletter, or otherwise communicating electronically with Revenue Cycle IQ, you consent to receive communications electronically from us. Electronic communications satisfy any legal requirement that such communications be in writing.
                        </p>

                        <h2>Intellectual Property</h2>
                        <p>
                            All content on this site — including text, graphics, logos, and overall design — is the property of Revenue Cycle IQ and is protected by U.S. copyright and trademark law. You may access content for personal, non-commercial informational purposes only. You may not reproduce, distribute, or republish content, create derivative works, or use our name or logo without prior written permission. By submitting content through the site, you grant us a non-exclusive, royalty-free license to use that submission to respond to your inquiry or improve our services.
                        </p>

                        <h2>Client Portal</h2>
                        <p>
                            Portal access is limited to authorized users. You agree to keep your credentials confidential, notify us immediately at <a href="mailto:intel@therevenuecycleiq.com">intel@therevenuecycleiq.com</a> if you suspect unauthorized account access, accept responsibility for all activity under your account, and log out at the end of each session. We may suspend or terminate portal access at any time.
                        </p>

                        <h2>Third-Party Links and Services</h2>
                        <p>
                            The site may link to third-party websites or services such as scheduling tools. These links are provided for convenience only. We do not endorse or assume responsibility for third-party content, privacy practices, or terms. Use of third-party services is at your own risk.
                        </p>

                        <h2>Disclaimer of Warranties</h2>
                        <p>
                            The site and all content are provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components. Content on this site is for general informational purposes only and does not constitute legal, financial, medical, or compliance advice.
                        </p>

                        <h2>Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, Revenue Cycle IQ and its officers, directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the site — including loss of revenue, data, or business opportunities, service interruptions, or damages resulting from PHI submitted in violation of these Terms. For website visitors and users who have not entered into a paid service agreement, our total liability shall not exceed $100. For clients engaged under a paid service agreement, total liability shall not exceed the fees paid by the client to Revenue Cycle IQ during the twelve (12) months preceding the claim.
                        </p>

                        <h2>Indemnification</h2>
                        <p>
                            You agree to defend, indemnify, and hold harmless Revenue Cycle IQ and its affiliates from any claims, liabilities, damages, or expenses (including reasonable attorneys' fees) arising from your use of the site, violation of these Terms, submission of PHI or prohibited content, or infringement of any third-party rights.
                        </p>

                        <h2>Governing Law and Dispute Resolution</h2>
                        <p>
                            These Terms are governed by the laws of the State of California. Any dispute shall first be subject to good-faith negotiation. If unresolved within 30 days, it shall be submitted to binding arbitration administered by the American Arbitration Association in Orange County, California. All disputes must be brought on an individual basis — not as part of a class or collective action.
                        </p>

                        <h2>California Privacy Rights</h2>
                        <p>
                            California residents may have additional privacy rights under applicable law. Please refer to our Privacy Policy for additional information.
                        </p>

                        <h2>Privacy</h2>
                        <p>
                            Your use of this site is also governed by our Privacy Policy, incorporated into these Terms by reference.
                        </p>

                        <h2>Termination</h2>
                        <p>
                            We may restrict, suspend, or terminate your access to the site at any time for any reason. Sections covering PHI, intellectual property, disclaimers, liability, indemnification, and governing law survive termination.
                        </p>

                        <h2>Accessibility</h2>
                        <p>
                            We are committed to making this site accessible to all users. If you experience difficulty accessing any portion of the site, please contact us at <a href="mailto:intel@therevenuecycleiq.com">intel@therevenuecycleiq.com</a>.
                        </p>

                        <h2>Severability and Waiver</h2>
                        <p>
                            If any provision of these Terms is found invalid or unenforceable, the remaining provisions continue in full force. Our failure to enforce any provision does not waive our right to enforce it in the future.
                        </p>

                        <h2>Entire Agreement</h2>
                        <p>
                            These Terms, together with our Privacy Policy and any separate service agreement or BAA, constitute the entire agreement between you and Revenue Cycle IQ regarding use of this site.
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
