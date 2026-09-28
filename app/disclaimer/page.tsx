import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Disclaimer | Hi-Tech Industries",
  description: "Important limitations concerning information presented on the Hi-Tech Industries website.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      intro="Please read these limitations before relying on technical, safety, product or service information on this website."
      sections={[
        {
          title: "General information only",
          content: <p>Website content is provided for general business information. It is not a substitute for a site inspection, engineering design, laboratory test, statutory advice, legal advice or a project-specific risk assessment.</p>,
        },
        {
          title: "Technical and safety services",
          content: <p>Industrial safety, HSE, fire safety, HAZOP, emergency planning and audit outcomes depend on site conditions, documents, applicable standards and the agreed engagement scope. Website descriptions do not certify a facility or guarantee regulatory compliance.</p>,
        },
        {
          title: "Products and specifications",
          content: <p>Images and descriptions are illustrative. Final composition, specification, suitability, quantity, performance, price and delivery are confirmed in the relevant quotation or accepted order. Customers should verify suitability for their intended use before purchase or installation.</p>,
        },
        {
          title: "No emergency service",
          content: <p>This website and its contact links are not an emergency reporting service. In an emergency, contact the appropriate local emergency services and follow the approved site emergency plan.</p>,
        },
        {
          title: "External links and availability",
          content: <p>We are not responsible for third-party websites or communication services linked from this site. Website access may occasionally be interrupted, delayed or unavailable.</p>,
        },
      ]}
    />
  );
}
