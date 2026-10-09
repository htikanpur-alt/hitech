export default function AddressSection() {
  const emailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=hti.kanpur%40gmail.com&su=Website%20Enquiry%20%E2%80%93%20Hi-Tech%20Industries";
const whatsappUrl =
  "https://wa.me/919955880016?text=Hello%20Hi-Tech%20Industries%2C%20I%20have%20an%20industrial%20requirement.";
function Arrow() {
  return <span aria-hidden="true">→</span>;
}
return ( <section className="contact-section section" id="contact">
        <div className="site-shell about-contact-grid">
          {/* <div>
            <p className="section-kicker">CONTACT US</p>
            <h2>Tell us what your plant needs.</h2>
            <p>
              For machinery, chemicals, consultancy or project support, contact
              our Kanpur factory team.
            </p>
          </div> */}
          <div>
            <div className="flex space-between">
              <address className="w-[100%] h-1/2">
                <span>RAGISTERED OFFICE</span>
                <strong>
                  Hi-Tech Group <br />
                  36/1550, Ratanpur
                  <br />
                  Panki, Kanpur
                  <br />
                  Uttar Pradesh (India) <br />
                  PIN- 208020
                </strong>
                <div>
                  <a href="tel:+919955880016">Contact No. 99558 80016</a>
                  <br />
                  <a href={emailUrl} target="_blank" rel="noreferrer">
                    Email: hti.kanpur@gmail.com
                  </a>
                </div>
              </address>
              <address className="w-[100%] h-1/4">
                <span>FACTORY ADDRESS</span>
                <strong>
                  Hi-Tech Engineering <br />
                  Plot No. 47, E-Block <br /> Ispat Nagar, Kanpur
                  <br />
                  Uttar Pradesh (India) <br /> PIN- 208020
                </strong>
                <div>
                  <a href="tel:+919955880016">Contact No. 9897882518</a>
                  <br />
                  <a href={emailUrl} target="_blank" rel="noreferrer">
                    Email: hte.kanpur@gmail.com
                  </a>
                </div>
              </address>
              <address className="w-[100%] h-1/2">
                <span>FACTORY ADDRESS</span>
                <strong>
                  Hi-Tech Industries <br />
                  508/37, Ratanpur
                  <br /> 
                  Panki, Kanpur 
                  <br />
                  Uttar Pradesh (India)
                  <br />
                  PIN– 208020
                </strong>
                <div>
                  <a href="tel:+919955880016">Contact No. 99558 80016</a>̦
                  <br />
                  <a href={emailUrl} target="_blank" rel="noreferrer">
                  Email: hti.kanpur@gmail.com
                  </a>
                </div>
              </address>
            </div>
          </div>
          <div className="contact-buttons w-[37%]">
            <a className="button button-orange" href="tel:+919955880016">
              Call Now <Arrow />
            </a>
            <a
              className="button button-blue"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp <Arrow />
            </a>
            <a
              className="button button-outline"
              href={emailUrl}
              target="_blank"
              rel="noreferrer"
            >
              Send Email <Arrow />
            </a>
          </div>
        </div>
      </section>)}