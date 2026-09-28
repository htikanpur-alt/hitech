import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions | Hi-Tech Industries",
  description: "Terms governing use of the Hi-Tech Industries website.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms govern access to and use of the Hi-Tech Industries website."
      sections={[
        {
          title: "Website purpose",
          content: <p>This website provides general information about Hi-Tech Industries and its products and services. It does not provide online ordering or payment facilities. A website enquiry does not create a contract, confirm availability or reserve goods or services.</p>,
        },
        {
          title: "Quotations and contracts",
          content: <p>Prices, scope, specifications, timelines, warranties, payment terms and delivery terms are confirmed only in a written quotation, purchase order, work order or other agreement accepted by Hi-Tech Industries. Those documents take priority if they differ from information on this website.</p>,
        },
        {
          title: "Permitted use",
          content: <p>You may use this website for lawful informational and business-enquiry purposes. You must not attempt to disrupt the website, introduce malicious code, misuse contact details, misrepresent your identity or use the content in a way that violates applicable law.</p>,
        },
        {
          title: "Content and intellectual property",
          content: <p>Unless otherwise stated, the website design, text, graphics, logo and other original content belong to Hi-Tech Industries or are used with permission. They may not be copied, republished or used commercially without prior written permission.</p>,
        },
        {
          title: "Accuracy and availability",
          content: <p>We aim to keep website information accurate, but product details, services, availability and specifications may change. We may update, suspend or withdraw any part of the website without notice.</p>,
        },
        {
          title: "Third-party links",
          content: <p>Links to external services, including email services, are provided for convenience. Hi-Tech Industries does not control those services and is not responsible for their availability, content or privacy practices.</p>,
        },
        {
          title: "Liability",
          content: <p>To the extent permitted by applicable law, Hi-Tech Industries is not liable for loss arising solely from reliance on general website information, interruption of access, or use of a third-party link. Nothing in these terms excludes liability that cannot lawfully be excluded.</p>,
        },
        {
          title: "Governing law and contact",
          content: <p>These website terms are governed by the laws of India. Subject to applicable law, courts in Kanpur, Uttar Pradesh will have jurisdiction. Questions may be sent to <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hti.kanpur%40gmail.com&su=Website%20Terms%20%E2%80%93%20Hi-Tech%20Industries" target="_blank" rel="noreferrer">hti.kanpur@gmail.com</a>.</p>,
        },
      ]}
    />
  );
}
