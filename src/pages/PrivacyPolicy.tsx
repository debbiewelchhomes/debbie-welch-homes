import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy | Debbie Welch Homes"
        description="Privacy Policy for debbiewelchhomes.com - how we collect, use, and protect your personal information."
        canonical="/privacy-policy"
      />
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-base mb-16">Effective: June 11, 2026</p>

          <div className="max-w-none text-foreground space-y-14">
            <section>
              <p className="text-lg leading-relaxed">
                This Privacy Policy describes how Debbie Welch Homes ("we," "us," or "our") collects, uses, and shares
                information about you when you visit debbiewelchhomes.com (the "Site") or use our real estate services.
                This Site is owned and operated by Debbie Welch, and we are the party responsible for the decisions
                described in this policy. This Site is operated in the United States and is intended for US residents
                only.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                Debbie Welch is a licensed real estate broker affiliated with eXp Realty, LLC for brokerage, licensing,
                and MLS compliance purposes. That affiliation does not change who is responsible for this Site or this
                policy - we are. In the limited cases where information is shared with eXp Realty's platforms or tools
                as part of providing real estate services, that sharing is described in Section 7 below.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                In the event of any conflict between this Privacy Policy and any contract for real estate services you
                execute with us, the real estate services contract shall prevail.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                If you have a privacy question, you may contact us at{" "}
                <a href="mailto:debbie@debbiewelchhomes.com" className="text-secondary hover:underline">
                  debbie@debbiewelchhomes.com
                </a>{" "}
                at any time.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">1. Who This Policy Applies To</h2>
              <p className="text-lg leading-relaxed">
                This Privacy Policy applies to all visitors to this Site and users of our services, including
                prospective and current real estate clients. It describes our practices for information collected
                through this Site and in connection with real estate services we provide.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                This Privacy Policy does not apply to third-party websites linked from this Site. Any questions about
                the privacy practices of a third party should be directed to that third party.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">2. Our Data Values</h2>
              <p className="text-lg leading-relaxed">We are committed to three core principles:</p>
              <ul className="list-disc pl-6 mt-5 space-y-3 text-lg">
                <li>
                  <strong>Purpose driven.</strong> We only collect, use, and share the information we need to provide
                  our services and help you have the best experience.
                </li>
                <li>
                  <strong>Responsible use.</strong> We promote responsible data use and stewardship among the service
                  providers we work with.
                </li>
                <li>
                  <strong>Transparent use.</strong> Our goal is to design our systems with your expectations in mind,
                  including how we use your data and how we enable our service providers to use your data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">3. Your Data Rights</h2>
              <p className="text-lg leading-relaxed">
                Depending on your state of residence, you may have rights related to your personal information,
                including the right to access, correct, or delete it. You may exercise those rights by contacting us at{" "}
                <a href="mailto:debbie@debbiewelchhomes.com" className="text-secondary hover:underline">
                  debbie@debbiewelchhomes.com
                </a>{" "}
                or by submitting a request through eXp Realty's{" "}
                <a
                  href="https://submit-irm.trustarc.com/services/validation/e6d7516d-df9c-4404-bd9f-21a2f0d2a6a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  Individual Rights form
                </a>
                . We will respond in accordance with applicable law and may need to verify your identity before
                fulfilling your request.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                Please see the{" "}
                <a href="#geo-rights" className="text-secondary hover:underline">
                  Geographic Location Rights
                </a>{" "}
                section below for state-specific rights that may apply to you.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">4. Your Consent</h2>
              <p className="text-lg leading-relaxed">
                By using this Site or our services, you consent to the collection and use of your information as
                described in this Privacy Policy. If we update this Privacy Policy, we will post the revised version on
                this page with an updated effective date. Your continued use of this Site after any update constitutes
                your acceptance of the revised terms.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                You may opt out of specific uses of your personal information or withdraw consent at any time by
                contacting us or using the{" "}
                <a
                  href="https://submit-irm.trustarc.com/services/validation/e6d7516d-df9c-4404-bd9f-21a2f0d2a6a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  Do Not Sell or Share My Personal Data form
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">5. Information We Collect</h2>
              <p className="text-lg leading-relaxed">
                The information we collect depends on how you interact with us. We collect two types of information:
              </p>

              <h3 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">Personal Information</h3>
              <p className="text-lg leading-relaxed">
                When you use this Site or request our real estate services, we may collect:
              </p>
              <ul className="list-disc pl-6 mt-5 space-y-3 text-lg">
                <li>Contact information such as your name, email address, phone number, and mailing address</li>
                <li>The specific services requested by you and information related to your real estate transaction</li>
                <li>The contents of any communication you send us through forms or email</li>
                <li>
                  Information you voluntarily provide, such as details about the home you're looking for or selling
                </li>
              </ul>
              <p className="text-lg leading-relaxed mt-6">
                If you choose not to provide certain information, we may not be able to fulfill your request or provide
                certain services.
              </p>

              <h3 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">Usage Information</h3>
              <p className="text-lg leading-relaxed">
                When you visit this Site, we automatically collect certain technical information, including:
              </p>
              <ul className="list-disc pl-6 mt-5 space-y-3 text-lg">
                <li>IP address, browser type and language, and operating system</li>
                <li>Pages viewed, time and date of your visit, and how you navigated the Site</li>
                <li>Device type and device identifiers</li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                We collect this usage information through the following technologies:
              </p>
              <ul className="list-disc pl-6 mt-5 space-y-3 text-lg">
                <li>
                  <strong>Cookies.</strong> Small files stored on your device that help us track visits and improve your
                  experience. You can accept or decline most cookies through your browser settings. Declining certain
                  cookies may affect how the Site functions.
                </li>
                <li>
                  <strong>Web Analytics.</strong> We use third-party web analytics providers (such as Google Analytics)
                  to monitor Site performance, improve our services, and detect security issues.
                </li>
                <li>
                  <strong>Web Beacons.</strong> Small invisible images on some pages and emails that help us understand
                  how pages and communications are being used.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">6. How We Use Your Information</h2>
              <p className="text-lg leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-5 space-y-3 text-lg">
                <li>Respond to your inquiries and provide the real estate services you have requested</li>
                <li>Set up and manage your communications with us, including property searches and showing requests</li>
                <li>Send you property listings, market updates, and other information you have requested</li>
                <li>Send promotional information about our services - you may opt out at any time</li>
                <li>Improve and maintain this Site and our services</li>
                <li>Detect fraud and protect the security of this Site</li>
                <li>Comply with our legal and regulatory obligations as a licensed real estate broker</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">7. How We Share Your Information</h2>
              <p className="text-lg leading-relaxed">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-5 space-y-3 text-lg">
                <li>
                  <strong>Service providers.</strong> We work with third-party service providers who assist us in
                  delivering our services - this may include email service providers, contact and transaction management
                  tools, and, where applicable, platforms provided through our brokerage affiliation with eXp Realty,
                  LLC. These providers are contractually required to use your information only for the purposes we
                  specify.
                </li>
                <li>
                  <strong>Real estate transaction parties.</strong> As part of a real estate transaction, we may share
                  relevant information with other parties including lenders, title companies, inspectors, and other
                  agents involved in your transaction.
                </li>
                <li>
                  <strong>MLS and professional associations.</strong> We may share relevant information with the MLS or
                  associations of REALTORS® as required in the course of providing real estate services.
                </li>
                <li>
                  <strong>Legal requirements.</strong> We may disclose your information when required by law, court
                  order, or government authority, or to protect our rights or the safety of others.
                </li>
                <li>
                  <strong>Business transfer.</strong> In the event of a merger, acquisition, or sale of our business
                  assets, your information may be transferred as part of that transaction.
                </li>
              </ul>
              <p className="text-lg leading-relaxed mt-6">
                We will not disclose your personal information to other third parties without obtaining your consent,
                except as described above.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">8. Your Choices</h2>
              <p className="text-lg leading-relaxed">
                You have the following choices regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mt-5 space-y-3 text-lg">
                <li>
                  <strong>Marketing emails.</strong> Each marketing email we send includes an unsubscribe link. If you
                  unsubscribe, we will remove you from the relevant list within 10 business days.
                </li>
                <li>
                  <strong>Cookies.</strong> You can manage your cookie preferences through your browser settings. Note
                  that disabling certain cookies may affect Site functionality.
                </li>
                <li>
                  <strong>Targeted advertising.</strong> You may opt out of targeted advertising through industry
                  opt-out tools such as the{" "}
                  <a
                    href="https://optout.networkadvertising.org/?c=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    Network Advertising Initiative
                  </a>{" "}
                  or the{" "}
                  <a
                    href="https://optout.aboutads.info/?c=2&lang=EN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    Digital Advertising Alliance
                  </a>
                  , or through individual ad networks like{" "}
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    Google
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.facebook.com/ads/preferences/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    Meta
                  </a>
                  .
                </li>
                <li>
                  <strong>Do Not Sell.</strong> You may submit a{" "}
                  <a
                    href="https://submit-irm.trustarc.com/services/validation/e6d7516d-df9c-4404-bd9f-21a2f0d2a6a4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    Do Not Sell or Share My Personal Information request
                  </a>{" "}
                  at any time.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">9. "Do Not Track" Signals</h2>
              <p className="text-lg leading-relaxed">
                Your browser may allow you to transmit a "Do Not Track" signal to websites you visit. There is currently
                no industry consensus on what "Do Not Track" means in this context. Depending on the signal, certain
                features of this Site may not work as expected.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">10. Children's Privacy</h2>
              <p className="text-lg leading-relaxed">
                This Site is not intended for children under the age of 13, and we do not knowingly collect personal
                information from children under 13. If we discover we have collected information from a child under 13,
                we will delete it immediately. If you believe we have collected information from your child, please
                contact us at{" "}
                <a href="mailto:debbie@debbiewelchhomes.com" className="text-secondary hover:underline">
                  debbie@debbiewelchhomes.com
                </a>
                .
              </p>
              <p className="text-lg leading-relaxed mt-6">
                By using this Site, you affirm that you are at least the age of majority in your state of residence.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">11. How We Secure Your Data</h2>
              <p className="text-lg leading-relaxed">
                We use reasonable administrative, technical, and physical safeguards to protect your personal
                information. All account pages are protected with SSL encryption. We will notify you of any data
                security incident as required by applicable law.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                You are responsible for maintaining the security of your own account credentials. You agree to notify us
                immediately of any unauthorized use of your account. Transmissions over the internet cannot be made
                absolutely secure, and we cannot guarantee that information you transmit to us will be free from
                interception or error.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                We retain your personal information only as long as necessary to fulfill the purposes for which it was
                collected or as required by law. When we no longer need your information, we will securely destroy or
                anonymize it.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                12. Reviewing and Correcting Your Information
              </h2>
              <p className="text-lg leading-relaxed">
                You may request to review, correct, or delete your personal information at any time by contacting us at{" "}
                <a href="mailto:debbie@debbiewelchhomes.com" className="text-secondary hover:underline">
                  debbie@debbiewelchhomes.com
                </a>{" "}
                or by submitting a request through eXp Realty's{" "}
                <a
                  href="https://submit-irm.trustarc.com/services/validation/e6d7516d-df9c-4404-bd9f-21a2f0d2a6a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  Individual Rights Request form
                </a>
                . We may verify your identity before processing your request.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">13. Links to Other Sites</h2>
              <p className="text-lg leading-relaxed">
                This Site may contain links to third-party websites, including our MLS search provider and other
                resources. We are not responsible for the privacy practices of those websites. Please review the privacy
                policies of any third-party sites you visit through links on this Site.
              </p>
            </section>

            <section id="geo-rights">
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                14. Your Rights Based on Your State of Residence
              </h2>
              <p className="text-lg leading-relaxed">
                Residents of certain US states have additional rights regarding their personal information:
              </p>

              <h3 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">California Residents</h3>
              <p className="text-lg leading-relaxed">
                If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and
                the California Privacy Rights Act (CPRA), including:
              </p>
              <ul className="list-disc pl-6 mt-5 space-y-3 text-lg">
                <li>The right to know what personal information we collect about you</li>
                <li>The right to delete your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to opt out of the sale or sharing of your personal information</li>
                <li>The right to non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="text-lg leading-relaxed mt-6">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:debbie@debbiewelchhomes.com" className="text-secondary hover:underline">
                  debbie@debbiewelchhomes.com
                </a>{" "}
                or use the{" "}
                <a
                  href="https://submit-irm.trustarc.com/services/validation/e6d7516d-df9c-4404-bd9f-21a2f0d2a6a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  Individual Rights Request form
                </a>
                .
              </p>

              <h3 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">Washington State Residents</h3>
              <p className="text-lg leading-relaxed">
                Washington residents have rights under the Washington My Health MY Data Act and the Washington Privacy
                Act (effective 2025), including:
              </p>
              <ul className="list-disc pl-6 mt-5 space-y-3 text-lg">
                <li>The right to access, correct, delete, and obtain a copy of your personal data</li>
                <li>The right to opt out of targeted advertising</li>
                <li>The right to opt out of the sale of personal data</li>
              </ul>
              <p className="text-lg leading-relaxed mt-6">
                To exercise these rights, contact us at{" "}
                <a href="mailto:debbie@debbiewelchhomes.com" className="text-secondary hover:underline">
                  debbie@debbiewelchhomes.com
                </a>
                .
              </p>

              <h3 className="font-heading text-2xl font-bold text-primary mt-8 mb-4">Other US States</h3>
              <p className="text-lg leading-relaxed">
                Residents of Virginia, Colorado, Connecticut, Texas, Oregon, Montana, and other states with
                comprehensive privacy laws may also have rights regarding their personal information. Please contact us
                to learn more about your rights or to submit a request.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">15. Accessibility</h2>
              <p className="text-lg leading-relaxed">
                We are committed to making this Site accessible to all users. If you have difficulty accessing any
                portion of this Site, please contact us at{" "}
                <a href="mailto:debbie@debbiewelchhomes.com" className="text-secondary hover:underline">
                  debbie@debbiewelchhomes.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">16. Complaints</h2>
              <p className="text-lg leading-relaxed">
                If you have a complaint regarding our collection, use, or disclosure of your personal information,
                please contact us at{" "}
                <a href="mailto:debbie@debbiewelchhomes.com" className="text-secondary hover:underline">
                  debbie@debbiewelchhomes.com
                </a>
                . We will investigate all complaints and respond in accordance with applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">17. Contact Us</h2>
              <div className="bg-warm-bg p-8 rounded-lg mt-4 space-y-2">
                <p className="font-bold text-primary text-lg">Debbie Welch Homes</p>
                <p className="text-foreground text-lg">Debbie Welch, Broker, affiliated with eXp Realty, LLC</p>
                <p className="text-foreground text-lg">Serving Snohomish County, Washington</p>
                <p className="text-foreground text-lg mt-4">
                  Email:{" "}
                  <a href="mailto:debbie@debbiewelchhomes.com" className="text-secondary hover:underline">
                    debbie@debbiewelchhomes.com
                  </a>
                </p>
                <p className="text-foreground text-lg">
                  Phone:{" "}
                  <a href="tel:3606318148" className="text-secondary hover:underline">
                    360-631-8148
                  </a>
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-foreground text-base">
                    Debbie Welch Homes is the party responsible for this Site and this policy. If your question relates
                    specifically to eXp Realty's own enterprise platforms or tools (separate from this Site), you may
                    also reach:
                  </p>
                  <p className="text-foreground text-base mt-2">
                    AGNT, Inc. Privacy Officer
                    <br />
                    2219 Rimland Drive, Ste. 301
                    <br />
                    Bellingham, WA 98226
                    <br />
                    <a href="mailto:privacy@agnt.inc" className="text-secondary hover:underline">
                      privacy@agnt.inc
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
