import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Hi-Tech Industries",
  description: "How Hi-Tech Industries handles information received through website enquiries, email and telephone.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains how Hi-Tech Industries handles personal information connected with this website and business enquiries."
      sections={[
        {
          title: "Information we receive",
          content: <><p>This website does not offer user accounts, online payments, enquiry forms, analytics or advertising cookies. If you contact us by email or telephone, you may voluntarily provide your name, contact details, company information and details of your requirement.</p><p>Our hosting and communications providers may process limited technical information, such as IP address, browser type or security logs, to operate and protect their services.</p></>,
        },
        {
          title: "How we use information",
          content: <><p>We use information to respond to enquiries, prepare quotations, communicate about products or services, maintain business records, protect our operations and comply with applicable legal obligations.</p><p>We do not sell personal information or use it for unrelated advertising.</p></>,
        },
        {
          title: "Sharing and external services",
          content: <p>Information may be shared only when reasonably necessary with service providers, professional advisers, project partners working under appropriate obligations, or authorities where required by law. Email links open an external email service, whose own privacy terms apply.</p>,
        },
        {
          title: "Retention and security",
          content: <p>We retain enquiry and business records only for as long as reasonably needed for the purpose for which they were received, contractual requirements, dispute handling or legal compliance. We use reasonable safeguards, but no internet or email transmission can be guaranteed to be completely secure.</p>,
        },
        {
          title: "Your choices and rights",
          content: <p>You may ask us to provide, correct or delete personal information associated with your enquiry, or withdraw consent where processing relies on consent. Some records may need to be retained where the law or an existing business obligation requires it.</p>,
        },
        {
          title: "Children and policy updates",
          content: <p>This business website is not directed to children. We may update this policy when our website practices or legal obligations change. The revised date will appear at the top of this page.</p>,
        },
        {
          title: "Privacy and grievance contact",
          content: <p>Hi-Tech Industries, 508/37, Ratanpur, Mirzapur, Panki, Kanpur (UP) – 208020. Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hti.kanpur%40gmail.com&su=Privacy%20Request%20%E2%80%93%20Hi-Tech%20Industries" target="_blank" rel="noreferrer">hti.kanpur@gmail.com</a>. Phone: <a href="tel:+919955880016">+91 99558 80016</a>.</p>,
        },
      ]}
    />
  );
}
