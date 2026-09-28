import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNavigation from "../site-navigation";

export const metadata: Metadata = {
  title: "About Hi-Tech Industries | Manufacturing & Engineering, Kanpur",
  description: "Learn about Hi-Tech Industries, our industrial capabilities, vision and values in manufacturing, engineering and safety services.",
  alternates: { canonical: "/about-us" },
};

const values = [
  ["01", "Integrity", "We communicate honestly, act fairly and take responsibility for every commitment."],
  ["02", "Ownership", "We remain accountable from the first discussion through supply, installation and support."],
  ["03", "Passion", "We bring energy, care and practical thinking to every industrial requirement."],
  ["04", "Achievement", "We focus on useful outcomes, dependable performance and continual improvement."],
  ["05", "Adaptability", "We adjust our approach to changing plant conditions, technology and customer needs."],
  ["06", "Innovation", "We look for simpler, safer and more productive ways to solve manufacturing problems."],
  ["07", "Team Spirit", "We work as one coordinated team with customers, suppliers and site personnel."],
];

const industries = [
  "Chemical", "Plastic", "Food Processing", "Animal Feed", "Pharmaceutical", "Fertilizer",
  "Environmental", "Biochemical", "Powder & Metal", "Battery", "Ceramic", "Rubber", "Dye & Pigment",
];

const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=hti.kanpur%40gmail.com&su=Product%20Catalogue%20Request%20%E2%80%93%20Hi-Tech%20Industries";

export default function AboutUsPage() {
  return (
    <main className="about-page">
      <a className="skip-link" href="#about-content">Skip to main content</a>

      <div className="notice-bar"><div className="site-shell notice-inner"><a href="tel:+919955880016">HELP LINE : +91 99558 80016</a><p>Welcome to Hi-Tech Industries &amp; Engineering, Kanpur</p></div></div>
      <header className="masthead">
        <div className="site-shell masthead-inner">
          <Link className="masthead-brand" href="/" aria-label="Hi-Tech Industries home"><Image src="/hitech-logo.jpeg" alt="Hi-Tech Industries and Engineering" width={900} height={288} priority /></Link>
          <div className="masthead-promise"><span>ONE STOP INDUSTRIAL SOLUTION</span><strong>Manufacturing • Engineering • Safety</strong></div>
          <div className="masthead-contact"><span>Need a quotation?</span><a href="tel:+919955880016">+91 99558 80016</a><a href={emailUrl} target="_blank" rel="noreferrer">hti.kanpur@gmail.com</a></div>
        </div>
      </header>
      <SiteNavigation />

      <section className="about-page-hero" id="about-content" tabIndex={-1}>
        <div className="site-shell">
          <p>HOME <span>/</span> ABOUT US</p>
          <h1>About Hi-Tech Industries</h1>
          <strong>Practical industrial solutions. Responsible long-term support.</strong>
        </div>
      </section>

      <section className="about-welcome section">
        <div className="site-shell about-welcome-grid">
          <div>
            <p className="section-kicker">WELCOME TO HI-TECH INDUSTRIES</p>
            <h2>A single source for manufacturing, engineering and industrial safety.</h2>
          </div>
          <div className="about-long-copy">
            <p>Hi-Tech Industries supports industrial customers with machinery manufacturing, chemical products, material-handling equipment, factory projects and technical consultancy. From our Kanpur facility, we focus on solutions that are practical to operate, maintain and scale.</p>
            <p>Our capabilities cover mixing, grinding, screening, liquid processing, conveyors, lifts, fire-fighting systems, plant installation and compliance support. We work with customers to understand the site, production target and operating conditions before recommending a suitable approach.</p>
            <p>Requirements may range from a compact production setup to larger commercial operations. Our role is to coordinate the right product, fabrication, installation or technical service with clear communication throughout the job.</p>
          </div>
        </div>
      </section>

      <section className="about-capabilities section">
        <div className="site-shell">
          <div className="center-heading"><p className="section-kicker">WHAT WE BRING TO YOUR PLANT</p><h2>Integrated capabilities for industrial work.</h2></div>
          <div className="about-capability-grid">
            <article><span>⚙</span><h3>Processing Machinery</h3><p>Mixing, grinding, screening and liquid-processing equipment for varied production needs.</p></article>
            <article><span>⇄</span><h3>Material Handling</h3><p>Conveyors, bucket elevators, material lifts and factory movement solutions.</p></article>
            <article><span>◆</span><h3>Chemical Products</h3><p>Cleaning formulations, process chemicals and products for institutional and industrial use.</p></article>
            <article><span>✓</span><h3>Engineering &amp; Safety</h3><p>Installation, documentation, HSE consultancy, technical audits and fire-safety services.</p></article>
          </div>
        </div>
      </section>

      <section className="catalogue-callout">
        <div className="site-shell catalogue-callout-inner">
          <div><p className="section-kicker light">PRODUCT INFORMATION</p><h2>Request our latest product catalogue.</h2><p>Get machinery categories, application information and specification guidance for your requirement.</p></div>
          <a className="button button-orange" href={emailUrl} target="_blank" rel="noreferrer">Request Catalogue <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="vision-section section">
        <div className="site-shell vision-grid">
          <div className="vision-title"><span>OUR</span><h2>Vision</h2></div>
          <blockquote>To become a trusted industrial enterprise providing integrated manufacturing, engineering and safety solutions through customer focus, practical innovation and dependable service.</blockquote>
        </div>
      </section>

      <section className="values-section section">
        <div className="site-shell">
          <div className="section-title-row"><div><p className="section-kicker">OUR GUIDING PRINCIPLES</p><h2>Values that shape our work.</h2></div><p>These principles guide how we work with customers, suppliers and our own team.</p></div>
          <div className="values-grid">{values.map(([number, title, description]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="industries-section section">
        <div className="site-shell industries-grid">
          <div><p className="section-kicker light">INDUSTRIES WE SUPPORT</p><h2>Solutions for varied processing environments.</h2><p>Equipment and services are planned according to material, capacity, safety and site requirements.</p></div>
          <ul>{industries.map((industry) => <li key={industry}>{industry}</li>)}</ul>
        </div>
      </section>

      <section className="about-contact section">
        <div className="site-shell about-contact-grid">
          <div><p className="section-kicker">CONTACT OUR TEAM</p><h2>Discuss your plant requirement.</h2><p>Share your product, machinery, project or compliance requirement with our Kanpur team.</p></div>
          <address><span>FACTORY ADDRESS</span><strong>508/37, Ratanpur, Mirzapur, Panki,<br />Kanpur (UP) – 208020</strong><a href="tel:+919955880016">+91 99558 80016</a><a href={emailUrl} target="_blank" rel="noreferrer">hti.kanpur@gmail.com</a></address>
          <a className="button button-orange" href="/#contact">Send Your Enquiry <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <footer><div className="site-shell footer-grid">
        <div className="footer-about"><Image src="/hitech-logo.jpeg" alt="Hi-Tech Industries" width={900} height={288} /><p>Manufacturing, engineering, material handling and industrial safety solutions from Kanpur.</p></div>
        <div><h3>Quick Links</h3><nav><Link href="/">Home</Link><Link href="/about-us">About Us</Link><Link href="/#products">Products</Link><Link href="/#services">Services</Link><Link href="/#contact">Contact</Link></nav></div>
        <div><h3>Product Groups</h3><nav><Link href="/#machinery">Mixing Machinery</Link><Link href="/#machinery">Grinding Machinery</Link><Link href="/#material-handling">Material Handling</Link><Link href="/#chemicals">Chemical Products</Link></nav></div>
        <div><h3>Legal</h3><nav><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link><Link href="/disclaimer">Disclaimer</Link><Link href="/cancellation-and-refund">Cancellation &amp; Refunds</Link></nav></div>
      </div><div className="footer-bottom"><div className="site-shell"><p>© 2026 Hi-Tech Industries. All rights reserved.</p><Link href="/">Back to home ↑</Link></div></div></footer>
    </main>
  );
}
