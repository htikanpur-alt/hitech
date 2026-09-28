import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Hi-Tech Industries",
  description: "How cancellations and refunds are handled for Hi-Tech Industries quotations and accepted orders.",
  alternates: { canonical: "/cancellation-and-refund" },
};

export default function CancellationRefundPage() {
  return (
    <LegalPage
      title="Cancellation & Refund Policy"
      intro="This website does not accept online orders or payments. The following explains how requests are handled for separately accepted business orders."
      sections={[
        {
          title: "No website transactions",
          content: <p>Submitting an email or making a telephone enquiry does not place an order and does not require payment. Orders begin only after the applicable quotation, purchase order, work order or contract has been accepted.</p>,
        },
        {
          title: "Order-specific terms",
          content: <p>Cancellation, modification, return and refund rights depend on the agreed product or service, whether materials have been procured, whether manufacturing or site work has started, and the written terms of the accepted order. Custom-made chemicals, machinery, fabricated equipment and completed consultancy work may not be cancellable or returnable.</p>,
        },
        {
          title: "Requesting cancellation",
          content: <p>Send a written request promptly to <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hti.kanpur%40gmail.com&su=Cancellation%20Request%20%E2%80%93%20Hi-Tech%20Industries" target="_blank" rel="noreferrer">hti.kanpur@gmail.com</a> with the quotation or order reference and reason for the request. We will confirm whether cancellation is possible and any applicable costs.</p>,
        },
        {
          title: "Approved refunds",
          content: <p>If a refund is approved under the relevant order terms, it will be processed through an agreed payment method after adjustment of lawful charges, completed work, procured materials, transport or other committed costs. The written order terms remain controlling.</p>,
        },
        {
          title: "Damaged or incorrect supply",
          content: <p>Report any visible damage, shortage or incorrect supply promptly using the inspection and notification period stated in the delivery or order documents. Keep the goods and packaging available for verification where reasonably required.</p>,
        },
      ]}
    />
  );
}
