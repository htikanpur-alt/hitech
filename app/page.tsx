import Image from "next/image";
import Link from "next/link";

const chemicalProducts = [
  "Detergent Needles", "Colour Salt Speckles", "Industrial Fragrance", "Hand Wash Liquid",
  "Dish Wash Gel", "Toilet Cleaner", "Floor Cleaner", "Tiles Cleaner", "Glass Cleaner",
  "Sanitary Cleaner", "Liquid Detergent", "White Phenyl", "Black Phenyl", "Bleaching Powder",
  "Hydrochloric Acid (HCl)", "Sodium Hypochlorite (HYPO)", "DM Water",
];

const machinery = [
  "Ribbon Mixer / Blender", "Sigma Mixer", "Cage Mill", "Detergent Noodle Machine",
  "Vibro Sifter", "Liquid Mixing Agitator", "Food Processing Machinery",
];
const materialHandling = [
  "Belt Conveyor", "Screw Conveyor", "Roller Conveyor", "Chain Conveyor", "Bucket Conveyor",
  "Inclined Conveyor", "Bucket Elevator", "Material Lift / Goods Lift",
];
const safetyServices = [
  "HSE Consultancy", "Testing & Certification", "Technical Audit", "Safety Audit",
  "Fire Safety Audit", "HAZOP Study", "Institutional Training – Section 111-A",
  "Schedule 7 & 8 Audit & Compliance", "Risk Assessment & Hazard Identification",
  "On-Site Emergency Plan Preparation", "Off-Site Emergency Plan Preparation",
];
const engineeringServices = [
  "Technical Consultancy", "Technical Documentation", "Factory Licensing", "Factory Layout Approval",
  "Industrial Project & Installation", "Fire Fighting System Design & Installation",
  "Fire Fighting System Installation", "Piping & Utility Installation", "Structure Fabrication & Erection",
  "Industrial Plant Installation & Maintenance", "Industrial Plant Modification",
];
const supplies = [
  "Conveyor Belts", "Industrial Trolleys", "Material Handling Trolleys", "Lab Equipment",
  "Fire Extinguishers", "Safety Equipment", "Industrial Tools",
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hi-Tech Industries",
  url: "https://hitech-industries-kanpur.best-bay-3257.chatgpt.site",
  logo: "https://hitech-industries-kanpur.best-bay-3257.chatgpt.site/hitech-logo.jpeg",
  email: "hti.kanpur@gmail.com",
  telephone: "+91-9955880016",
  address: {
    "@type": "PostalAddress",
    streetAddress: "508/37, Ratanpur, Mirzapur, Panki",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "208020",
    addressCountry: "IN",
  },
};

const emailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=hti.kanpur%40gmail.com&su=Website%20Enquiry%20%E2%80%93%20Hi-Tech%20Industries";

function ArrowIcon() { return <span aria-hidden="true">↗</span>; }
function ProductList({ items }: { items: string[] }) {
  return <ul className="product-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#home">Skip to main content</a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="topbar">
        <div className="site-shell topbar-inner">
          <p>Manufacturing • Engineering • Industrial Safety</p>
          <div className="topbar-links">
            <a href={emailComposeUrl} target="_blank" rel="noreferrer">hti.kanpur@gmail.com</a>
            <a href="tel:+919955880016">+91 99558 80016</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="site-shell nav-wrap">
          <a className="brand" href="#home" aria-label="Hi-Tech Industries home">
            <Image src="/hitech-logo.jpeg" alt="Hi-Tech Industries and Engineering" width={225} height={75} sizes="(max-width: 640px) 150px, 190px" priority />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#home">Home</a><a href="#about">About Us</a>
            <details>
              <summary>Products <span aria-hidden="true">⌄</span></summary>
              <div className="nav-dropdown">
                <a href="#chemicals">Chemical Manufacturing</a>
                <a href="#machinery">Machinery Manufacturing</a>
                <a href="#material-handling">Conveyors &amp; Material Handling</a>
                <a href="#supplies">Equipment &amp; Tools</a>
              </div>
            </details>
            <a href="#services">Services</a><a className="nav-cta" href="#contact">Contact</a>
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#home">Home</a><a href="#about">About Us</a>
              <a href="#chemicals">Chemical Manufacturing</a><a href="#machinery">Machinery Manufacturing</a>
              <a href="#material-handling">Conveyors &amp; Material Handling</a>
              <a href="#supplies">Equipment &amp; Tools</a><a href="#services">Services</a><a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <nav className="category-strip" aria-label="Business categories">
        <a className="strip-orange" href="#chemicals"><strong>Chemical Products</strong><span>17 formulations</span></a>
        <a className="strip-blue" href="#machinery"><strong>Industrial Machinery</strong><span>Mixing &amp; processing</span></a>
        <a className="strip-green" href="#material-handling"><strong>Material Handling</strong><span>Conveyors, lifts &amp; trolleys</span></a>
        <a className="strip-pink" href="#services"><strong>Safety &amp; HSE</strong><span>Audit, training &amp; compliance</span></a>
      </nav>

      <section className="hero" id="home" tabIndex={-1}>
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Kanpur’s industrial solutions partner</p>
            <h1>Chemicals. Machinery.<br /><span>Safety. One team.</span></h1>
            <p className="hero-lede">Manufacturing, material handling, industrial equipment and technical consultancy for factories across India.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#products">Explore our products <ArrowIcon /></a>
              <a className="button button-secondary" href="tel:+919955880016">Call +91 99558 80016</a>
            </div>
            <p className="hero-slogan">“Innovation is our nature.”</p>
          </div>
          <div className="hero-panel" aria-label="Hi-Tech Industries capabilities">
            <div className="hero-panel-head"><span>HI-TECH</span><p>Complete industrial support</p></div>
            <div className="capability-grid">
              <a href="#chemicals" className="cap-orange"><span>01</span><strong>Chemical</strong><small>Manufacturing</small></a>
              <a href="#machinery" className="cap-blue"><span>02</span><strong>Machinery</strong><small>Manufacturing</small></a>
              <a href="#material-handling" className="cap-green"><span>03</span><strong>Conveyors</strong><small>Material handling</small></a>
              <a href="#services" className="cap-pink"><span>04</span><strong>HSE &amp; Fire</strong><small>Consultancy</small></a>
            </div>
            <p className="hero-panel-note"><strong>Need a custom solution?</strong> Speak directly with our Kanpur team.</p>
          </div>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="site-shell intro-grid">
          <div><p className="section-kicker">About Hi-Tech Industries</p><h2>Practical solutions for complex industrial needs.</h2></div>
          <div className="intro-copy">
            <p>Hi-Tech Industries brings manufacturing, engineering support and industrial safety expertise together under one roof. We help factories and project teams source dependable products, improve processes and meet essential compliance requirements.</p>
            <div className="value-row">
              <div className="value-orange"><strong>One point</strong><span>for products and services</span></div>
              <div className="value-blue"><strong>Site-ready</strong><span>engineering support</span></div>
              <div className="value-green"><strong>Safety-first</strong><span>project execution</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="products section" id="products">
        <div className="site-shell">
          <div className="section-heading">
            <div><p className="section-kicker">What we manufacture &amp; supply</p><h2>Industrial products, ready for real work.</h2></div>
            <p>From daily-use cleaning formulations to custom machinery and essential safety equipment.</p>
          </div>
          <div className="product-grid product-grid-detailed">
            <article className="product-card product-card-large card-orange" id="chemicals">
              <div className="card-number">01</div><div><p className="card-label">In-house manufacturing range</p><h3>Chemical Products</h3><ProductList items={chemicalProducts} /></div>
            </article>
            <article className="product-card card-blue" id="machinery">
              <div className="card-number">02</div><div><p className="card-label">Mixing &amp; processing</p><h3>Machinery Manufacturing</h3><ProductList items={machinery} /></div>
            </article>
            <article className="product-card card-green" id="material-handling">
              <div className="card-number">03</div><div><p className="card-label">Movement &amp; lifting</p><h3>Conveyors &amp; Material Handling</h3><ProductList items={materialHandling} /></div>
            </article>
            <article className="product-card card-pink" id="supplies">
              <div className="card-number">04</div><div><p className="card-label">Factory essentials</p><h3>Equipment &amp; Tools Supply</h3><ProductList items={supplies} /></div>
            </article>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="site-shell">
          <div className="services-header">
            <div><p className="section-kicker light">Consultancy &amp; compliance</p><h2>Safer operations.<br />Stronger systems.</h2></div>
            <p>Clear, actionable technical guidance for factories, institutions and industrial projects.</p>
          </div>
          <div className="service-columns service-columns-detailed">
            <div className="service-box service-box-orange"><span className="service-code">01</span><h3>HSE, Audit &amp; Compliance</h3><ProductList items={safetyServices} /></div>
            <div className="service-box service-box-blue"><span className="service-code">02</span><h3>Projects &amp; Technical Support</h3><ProductList items={engineeringServices} /></div>
            <div className="service-box service-box-green"><span className="service-code">03</span><h3>Equipment Supply</h3><ProductList items={["Fire Extinguisher Supply", "Safety Equipment Supply", "Industrial Tools", "Lab Equipment", "Conveyor Belts", "Material Handling Trolleys"]} /><a href="#contact" className="text-link">Discuss your requirement <ArrowIcon /></a></div>
          </div>
          <figure className="services-visual">
            <Image src="/hitech-services.jpeg" alt="Hi-Tech Industries services covering consultancy, projects, machinery and equipment supply" width={1600} height={973} sizes="(max-width: 1228px) calc(100vw - 48px), 1180px" />
            <figcaption>Our core capabilities at a glance</figcaption>
          </figure>
        </div>
      </section>

      <section className="process section">
        <div className="site-shell">
          <div className="section-heading compact"><div><p className="section-kicker">How we work</p><h2>Simple process. Clear responsibility.</h2></div></div>
          <div className="process-grid">
            <div><span>01</span><h3>Understand</h3><p>We begin with your site, product or compliance requirement.</p></div>
            <div><span>02</span><h3>Plan</h3><p>Our team defines a practical scope, timeline and solution.</p></div>
            <div><span>03</span><h3>Deliver</h3><p>We manufacture, supply or execute with accountable support.</p></div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="site-shell contact-grid">
          <div>
            <p className="section-kicker">Let’s talk</p><h2>Tell us what your plant needs.</h2>
            <p>For product enquiries, consultancy or project support, contact our Kanpur team directly.</p>
            <div className="contact-actions"><a className="button button-primary" href="tel:+919955880016">Call us now <ArrowIcon /></a><a className="button button-outline" href={emailComposeUrl} target="_blank" rel="noreferrer">Send an email <ArrowIcon /></a></div>
          </div>
          <address>
            <div><span>Factory address</span><strong>508/37, Ratanpur, Mirzapur,<br />Panki, Kanpur (UP) – 208020</strong></div>
            <div><span>Email</span><a href={emailComposeUrl} target="_blank" rel="noreferrer">hti.kanpur@gmail.com</a></div>
            <div><span>Phone</span><a href="tel:+919955880016">+91 99558 80016</a></div>
          </address>
        </div>
      </section>

      <footer>
        <div className="site-shell footer-grid">
          <div className="brand footer-brand"><span className="brand-mark">HT</span><span><strong>Hi-Tech Industries</strong><small>Manufacturing • Engineering</small></span></div>
          <nav className="footer-links" aria-label="Legal information">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/cancellation-and-refund">Cancellation &amp; Refunds</Link>
          </nav>
          <div className="footer-meta"><p>© 2026 Hi-Tech Industries. All rights reserved.</p><a href="#home">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
