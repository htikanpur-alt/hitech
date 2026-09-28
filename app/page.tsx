import Image from "next/image";
import Link from "next/link";
import SiteNavigation from "./site-navigation";

const featuredMachines = [
  "Double Cone Blender", "High Speed Mixer", "Ribbon Blender", "Rotary Vacuum Dryer",
  "Planetary Mixer", "Rotary Airlock Valve", "Vibro Screen", "High Speed Stirrer Vessel",
];

const chemicals = [
  "Detergent Needles", "Colour Salt Speckles", "Industrial Fragrance", "Hand Wash Liquid",
  "Dish Wash Gel", "Toilet Cleaner", "Floor Cleaner", "Tiles Cleaner", "Glass Cleaner",
  "Sanitary Cleaner", "Liquid Detergent", "White Phenyl", "Black Phenyl", "Bleaching Powder",
  "Hydrochloric Acid (HCl)", "Sodium Hypochlorite (HYPO)", "DM Water",
];

const services = [
  "HSE Consultancy", "Technical Documentation", "Technical & Fire Safety Audits",
  "Factory Licensing & Layout Approval", "Testing & Certification", "HAZOP Study",
  "Risk Assessment & Hazard Identification", "On-Site & Off-Site Emergency Plans",
  "Fire Fighting System Installation", "Piping & Utility Installation",
  "Structural Fabrication & Erection", "Industrial Plant Installation & Modification",
];

const materialHandling = [
  "Belt Conveyor", "Screw Conveyor", "Roller Conveyor", "Chain Conveyor",
  "Bucket Conveyor", "Inclined Conveyor", "Bucket Elevator", "Material / Goods Lift",
];

const engineeringProducts = [
  "Mixing Machinery", "Grinding & Screening Machinery", "Liquid Mixing Machinery",
  "Formulation Plant Machinery", "Material Handling Machinery", "Pharmaceutical Machinery",
  "Conveyors & Bucket Elevators", "Material Lifts & Goods Lifts", "Industrial Trolleys",
  "Conveyor Belts", "Fire Extinguishers", "Safety Equipment", "Industrial Tools", "Lab Equipment",
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

const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=hti.kanpur%40gmail.com&su=Website%20Enquiry%20%E2%80%93%20Hi-Tech%20Industries";
const whatsappUrl = "https://wa.me/919955880016?text=Hello%20Hi-Tech%20Industries%2C%20I%20have%20an%20industrial%20requirement.";
function Arrow() { return <span aria-hidden="true">→</span>; }

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#home">Skip to main content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <div className="notice-bar"><div className="site-shell notice-inner"><a href="tel:+919955880016">HELP LINE : +91 99558 80016</a><p>Welcome to Hi-Tech Industries &amp; Engineering, Kanpur</p></div></div>

      <header className="masthead">
        <div className="site-shell masthead-inner">
          <a className="masthead-brand" href="#home" aria-label="Hi-Tech Industries home"><Image src="/hitech-logo.jpeg" alt="Hi-Tech Industries and Engineering" width={900} height={288} priority /></a>
          <div className="masthead-promise"><span>ONE STOP INDUSTRIAL SOLUTION</span><strong>Manufacturing • Engineering • Safety</strong></div>
          <div className="masthead-contact"><span>Need a quotation?</span><a href="tel:+919955880016">+91 99558 80016</a><a href={emailUrl} target="_blank" rel="noreferrer">hti.kanpur@gmail.com</a></div>
        </div>
      </header>

      <SiteNavigation />

      <section className="hero" id="home" tabIndex={-1}>
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">One stop solution provider</p>
            <h1>Industrial machinery, chemicals and safety support.</h1>
            <p>Practical equipment, formulations and engineering services for chemical, food, pharmaceutical and general manufacturing plants.</p>
            <div className="hero-actions"><a className="button button-orange" href="#products">View Products <Arrow /></a><a className="button button-light" href="#contact">Get Free Enquiry <Arrow /></a></div>
          </div>
          <div className="hero-visual"><Image src="/hitech-services.jpeg" alt="Hi-Tech Industries industrial services and machinery capabilities" width={1600} height={973} sizes="(max-width: 800px) 100vw, 48vw" /></div>
        </div>
        <a className="hero-side-tab side-blue" href="#services">Safety Audit</a><a className="hero-side-tab side-orange" href="#contact">Enquiry</a>
      </section>

      <section className="division-band" aria-label="Core divisions"><div className="site-shell"><h2>Our Core Divisions</h2><div className="division-list">
        <a href="#machinery"><span>⚙</span><strong>Machinery</strong></a><a href="#chemicals"><span>◆</span><strong>Chemicals</strong></a><a href="#material-handling"><span>⇄</span><strong>Material Handling</strong></a><a href="#services"><span>✓</span><strong>HSE &amp; Projects</strong></a>
      </div></div></section>

      <section className="quick-actions" aria-label="Quick links"><div className="site-shell action-grid">
        <a href="#products"><span>⌕</span><h3>FIND PRODUCT</h3><p>Browse our industrial range</p></a><a href="#machinery"><span>⚙</span><h3>VIEW MACHINERY</h3><p>Mixing, grinding and handling</p></a><a href="#services"><span>▣</span><h3>BOOK CONSULTANCY</h3><p>Safety, audit and compliance</p></a><a href="#contact"><span>✆</span><h3>GET QUOTATION</h3><p>Speak with our Kanpur team</p></a>
      </div></section>

      <section className="about-section section" id="about"><div className="site-shell about-grid">
        <div className="about-copy"><p className="section-kicker">ABOUT HI-TECH INDUSTRIES</p><h2>Complete industrial support under one roof.</h2><p>Hi-Tech Industries is a Kanpur-based manufacturing and engineering company serving factories with machinery, chemical products, equipment supply and technical consultancy. Our focus is simple: practical solutions, clear coordination and dependable support.</p><p>We provide standard as well as requirement-based solutions for mixing, grinding, screening, liquid processing, material handling, plant installation and industrial safety.</p><a className="text-button" href="/about-us">READ OUR STORY <Arrow /></a></div>
        <div className="about-board"><div><span>01</span><h3>VISION</h3><p>To provide integrated industrial solutions that improve productivity, safety and plant reliability.</p></div><div><span>02</span><h3>MISSION</h3><p>To deliver suitable products and engineering support with honest communication and timely service.</p></div><div><span>03</span><h3>VALUES</h3><p>Integrity, ownership, innovation, adaptability, teamwork and customer responsibility.</p></div></div>
      </div></section>

      <section className="catalogue-section section" id="products"><div className="site-shell">
        <div className="section-title-row"><div><p className="section-kicker">OUR PRODUCT RANGE</p><h2>Two specialized product divisions.</h2></div><a href="#contact">All Enquiries <Arrow /></a></div>
        <div className="product-partitions">
          <article className="partition-card partition-chemical">
            <div className="partition-heading"><span>01</span><div><p>HI-TECH INDUSTRIES</p><h3>Chemical Products</h3></div></div>
            <p className="partition-intro">Detergent, cleaning, home-care and process chemical products manufactured for institutional and industrial requirements.</p>
            <ul>{chemicals.map((item) => <li key={item}>{item}</li>)}</ul>
            <a href="#chemicals">View Chemical Range <Arrow /></a>
          </article>
          <article className="partition-card partition-engineering">
            <div className="partition-heading"><span>02</span><div><p>HI-TECH ENGINEERING</p><h3>Engineering Products</h3></div></div>
            <p className="partition-intro">Machinery, material handling equipment, factory essentials and customized engineering solutions for production plants.</p>
            <ul>{engineeringProducts.map((item) => <li key={item}>{item}</li>)}</ul>
            <a href="#machinery">View Engineering Range <Arrow /></a>
          </article>
        </div>
      </div></section>

      <section className="machines-section section" id="machinery"><div className="site-shell">
        <div className="center-heading"><p className="section-kicker">FEATURED MACHINERY</p><h2>Popular industrial equipment.</h2></div>
        <div className="machine-grid">{featuredMachines.map((machine, index) => <article key={machine}><div className={`machine-icon machine-icon-${(index % 4) + 1}`}><span>⚙</span><b>{String(index + 1).padStart(2, "0")}</b></div><h3>{machine}</h3><p>Industrial-grade solution available for project-specific requirements.</p><a href="#contact">GET DETAILS <Arrow /></a></article>)}</div>
      </div></section>

      <section className="numbers-band" aria-label="Company capabilities"><div className="site-shell numbers-grid"><div><strong>06</strong><span>Machinery Categories</span></div><div><strong>17</strong><span>Chemical Products</span></div><div><strong>12</strong><span>Technical Services</span></div><div><strong>01</strong><span>Responsible Team</span></div></div></section>

      <section className="details-section section"><div className="site-shell details-grid">
        <article className="detail-panel chemical-panel" id="chemicals"><p className="section-kicker">CHEMICAL MANUFACTURING</p><h2>Cleaning and process chemicals.</h2><ul>{chemicals.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article className="detail-panel handling-panel" id="material-handling"><p className="section-kicker">MATERIAL HANDLING</p><h2>Move material safely and efficiently.</h2><ul>{materialHandling.map((item) => <li key={item}>{item}</li>)}</ul><div className="supply-note"><strong>Also supplied:</strong> conveyor belts, industrial trolleys, lab equipment, fire extinguishers, safety equipment and industrial tools.</div></article>
      </div></section>

      <section className="services-section section" id="services"><div className="site-shell services-grid">
        <div className="services-intro"><p className="section-kicker light">ENGINEERING &amp; SAFETY SERVICES</p><h2>Technical support from planning to compliance.</h2><p>Clear documentation, site-level support and practical implementation for industrial projects.</p><a className="button button-orange" href="#contact">Request Consultancy <Arrow /></a></div>
        <div className="services-list">{services.map((service, index) => <div key={service}><span>{String(index + 1).padStart(2, "0")}</span><strong>{service}</strong></div>)}</div>
      </div></section>

      <section className="why-section section"><div className="site-shell why-grid">
        <div><p className="section-kicker">WHY HI-TECH INDUSTRIES</p><h2>Built around factory requirements.</h2><p>Our product and service mix helps industrial buyers reduce coordination between multiple vendors.</p></div>
        <div className="why-cards"><article><span>01</span><h3>Industry Focused</h3><p>Solutions selected around plant conditions and production needs.</p></article><article><span>02</span><h3>Custom Support</h3><p>Standard and requirement-based machinery and project work.</p></article><article><span>03</span><h3>Multiple Capabilities</h3><p>Products, installation, audits and safety support from one team.</p></article></div>
      </div></section>

      <section className="contact-section section" id="contact"><div className="site-shell contact-grid">
        <div><p className="section-kicker">CONTACT US</p><h2>Tell us what your plant needs.</h2><p>For machinery, chemicals, consultancy or project support, contact our Kanpur factory team.</p></div>
        <address><div><span>FACTORY ADDRESS</span><strong>508/37, Ratanpur, Mirzapur,<br />Panki, Kanpur (UP) – 208020</strong></div><div><span>PHONE</span><a href="tel:+919955880016">+91 99558 80016</a></div><div><span>EMAIL</span><a href={emailUrl} target="_blank" rel="noreferrer">hti.kanpur@gmail.com</a></div></address>
        <div className="contact-buttons"><a className="button button-orange" href="tel:+919955880016">Call Now <Arrow /></a><a className="button button-blue" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a><a className="button button-outline" href={emailUrl} target="_blank" rel="noreferrer">Send Email <Arrow /></a></div>
      </div></section>

      <footer><div className="site-shell footer-grid">
        <div className="footer-about"><Image src="/hitech-logo.jpeg" alt="Hi-Tech Industries" width={900} height={288} /><p>Manufacturing, engineering, material handling and industrial safety solutions from Kanpur.</p></div>
        <div><h3>Quick Links</h3><nav><a href="#home">Home</a><a href="/about-us">About Us</a><a href="#products">Products</a><a href="#services">Services</a><a href="#contact">Contact</a></nav></div>
        <div><h3>Product Groups</h3><nav><a href="#machinery">Mixing Machinery</a><a href="#machinery">Grinding Machinery</a><a href="#material-handling">Material Handling</a><a href="#chemicals">Chemical Products</a></nav></div>
        <div><h3>Legal</h3><nav><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link><Link href="/disclaimer">Disclaimer</Link><Link href="/cancellation-and-refund">Cancellation &amp; Refunds</Link></nav></div>
      </div><div className="footer-bottom"><div className="site-shell"><p>© 2026 Hi-Tech Industries. All rights reserved.</p><a href="#home">Back to top ↑</a></div></div></footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Hi-Tech Industries on WhatsApp">WhatsApp Us</a>
    </main>
  );
}
