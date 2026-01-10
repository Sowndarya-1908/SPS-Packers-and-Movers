import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

 function ServicesShowcase() {
  const navigate = useNavigate();

  const openWhatsApp = (service) => {
    const ownerNumber = "917550057453";
    const message = `Hello SPS Packers & Movers 👋

I am interested in ${service}.
Please contact me with details.`;

    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const css = `
/* ===== SERVICES OFFER ===== */
.sps-service-wrap{
  padding:90px 6vw;
  font-family:Inter,system-ui;
  background:#FDFCFC;
}

/* ROW */
.sps-service-row{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:60px;
  align-items:center;
  margin-bottom:90px;
}
/* IMAGE */
.sps-service-img img{
  width:100%;
  border-radius:22px;
  box-shadow:0 25px 60px rgba(150,5,70,0.25);
}
.sps-service-row.reverse{
  direction: rtl;
}

.sps-service-row.reverse > *{
  direction: ltr;
}

/* CONTENT */
.sps-service-content h3{
  font-size:36px;
  font-weight:900;
  color:#960546;
  margin-bottom:16px;
}

.sps-service-content p{
  font-size:16px;
  line-height:1.75;
  color:#7E314B;
  max-width:520px;
}

/* BUTTONS */
.sps-btns{
  display:flex;
  gap:18px;
  margin-top:28px;
}

.sps-btn{
  padding:14px 28px;
  font-size:16px;
  font-weight:800;
  border-radius:10px;
  border:none;
  cursor:pointer;
  transition:all .25s ease;
}

.sps-btn-primary{
  background:#960546;
  color:#fff;
}

.sps-btn-primary:hover{
  background:#7E314B;
}

.sps-btn-whatsapp{
  background:#25D366;
  color:#fff;
}

.sps-btn-whatsapp:hover{
  background:#1ebe5d;
}

/* REVERSE ROW */
.sps-reverse{
  grid-template-columns:0.9fr 1.1fr;
}
.sps-reverse .sps-service-img{
  order:2;
}

/* MOBILE */
@media(max-width:900px){
  .sps-service-row,
  .sps-service-row.reverse{
    grid-template-columns:1fr;
  }

  .sps-service-row.reverse{
    direction:ltr;
  }
}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
   <section className="sps-service-wrap">

  {/* ================= HOUSE SHIFTING ================= */}
  <div className="sps-service-row">
    <div className="sps-service-img">
      <img src="/images/services/houseshifting.png" alt="House Shifting" />
    </div>

    <div className="sps-service-content">
      <h3>House Shifting</h3>
      <p>
        We make home relocation seamless and stress-free. Our team uses high-quality
        packing materials and modern equipment to safely move furniture, appliances,
        kitchen items, and valuables with utmost care.
      </p>

      <div className="sps-btns">
        <button className="sps-btn sps-btn-primary" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
        <button className="sps-btn sps-btn-whatsapp" onClick={() => openWhatsApp("House Shifting")}>
          WhatsApp Now
        </button>
      </div>
    </div>
  </div>

  {/* ================= OFFICE SHIFTING ================= */}
  <div className="sps-service-row">

    <div className="sps-service-content">
      <h3>Office Shifting</h3>
      <p>
        Our office relocation services ensure minimal downtime. We handle workstations,
        computers, files, furniture, and IT equipment with professional planning and 
        timely execution.
      </p>

      <div className="sps-btns">
        <button className="sps-btn sps-btn-primary" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
        <button className="sps-btn sps-btn-whatsapp" onClick={() => openWhatsApp("Office Shifting")}>
          WhatsApp Now
        </button>
      </div>
    </div>

    <div className="sps-service-img">
      <img src="/images/services/office.png" alt="Office Shifting" />
    </div>
  </div>

  {/* ================= TRANSPORTATION ================= */}
  <div className="sps-service-row">
    <div className="sps-service-img">
      <img src="/images/services/transs.png" alt="Transportation" />
    </div>

    <div className="sps-service-content">
      <h3>Transportation</h3>
      <p>
        We provide fast and reliable transportation services with GPS-enabled vehicles. 
        Whether it’s local or long-distance movement, your goods reach the destination 
        safely and on time.
      </p>

      <div className="sps-btns">
        <button className="sps-btn sps-btn-primary" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
        <button className="sps-btn sps-btn-whatsapp" onClick={() => openWhatsApp("Transportation")}>
          WhatsApp Now
        </button>
      </div>
    </div>
  </div>

  {/* ================= AC INSTALLATION ================= */}
  <div className="sps-service-row">

    <div className="sps-service-content">
      <h3>AC Installation</h3>
      <p>
        Our trained technicians professionally handle AC dismantling, packing, shifting, 
        and re-installation. We ensure 100% damage-free handling of pipes, units, and wiring.
      </p>

      <div className="sps-btns">
        <button className="sps-btn sps-btn-primary" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
        <button className="sps-btn sps-btn-whatsapp" onClick={() => openWhatsApp("AC Installation")}>
          WhatsApp Now
        </button>
      </div>
    </div>

    <div className="sps-service-img">
      <img src="/images/services/ac.png" alt="AC Installation" />
    </div>
  </div>

  {/* ================= GODOWN SHIFTING ================= */}
  <div className="sps-service-row">
    <div className="sps-service-img">
      <img src="/images/services/godown.png" alt="Godown Shifting" />
    </div>

    <div className="sps-service-content">
      <h3>Godown Shifting</h3>
      <p>
        We specialize in warehouse and godown relocation with proper inventory handling,
        pallet movement, heavy equipment shifting, and organized loading/unloading.
      </p>

      <div className="sps-btns">
        <button className="sps-btn sps-btn-primary" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
        <button className="sps-btn sps-btn-whatsapp" onClick={() => openWhatsApp("Godown Shifting")}>
          WhatsApp Now
        </button>
      </div>
    </div>
  </div>

  {/* ================= COMMERCIAL MOVES ================= */}
  <div className="sps-service-row">

    <div className="sps-service-content">
      <h3>Commercial Moves</h3>
      <p>
        From small businesses to large industries, we provide complete commercial relocation 
        solutions including machinery shifting, inventory movement, and industrial packing.
      </p>

      <div className="sps-btns">
        <button className="sps-btn sps-btn-primary" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
        <button className="sps-btn sps-btn-whatsapp" onClick={() => openWhatsApp("Commercial Moves")}>
          WhatsApp Now
        </button>
      </div>
    </div>

    <div className="sps-service-img">
      <img src="/images/services/comm.png" alt="Commercial Moves" />
    </div>
  </div>

</section>


  );
}

 function ServicesIntro() {
  useEffect(() => {
    const css = `
/* ===== SERVICES INTRO ===== */
.sps-services-intro{
  padding:90px 6vw;
  background:#FDFCFC;
  font-family:Inter,system-ui;
}

/* GRID */
.sps-services-wrap{
  max-width:1300px;
  margin:auto;
  display:grid;
  grid-template-columns:1.05fr 0.95fr;
  gap:60px;
  align-items:center;
}

/* IMAGE SIDE */
.sps-services-image{
  position:relative;
}

.sps-services-image img{
  width:100%;
  border-radius:18px;
  box-shadow:0 30px 60px rgba(0,0,0,0.18);
}

/* EXPERIENCE BADGE */
.sps-exp-badge{
  position:absolute;
  top:-30px;
  left:-30px;
  background:#ffffff;
  border-radius:14px;
  padding:18px 22px;
  box-shadow:0 20px 40px rgba(150,5,70,0.25);
  text-align:center;
}

.sps-exp-badge h3{
  font-size:42px;
  font-weight:900;
  color:#960546;
  line-height:1;
}

.sps-exp-badge p{
  font-size:14px;
  font-weight:700;
  color:#7E314B;
  margin-top:6px;
}

/* CONTENT SIDE */
.sps-services-content small{
  display:block;
  font-size:13px;
  letter-spacing:0.18em;
  font-weight:800;
  color:#960546;
  margin-bottom:14px;
}

.sps-services-content h2{
  font-size:42px;
  font-weight:900;
  color:#1f1b3a;
  line-height:1.25;
  margin-bottom:18px;
}

.sps-services-content h2 span{
  color:#960546;
}

.sps-services-content p{
  font-size:16px;
  color:#555;
  line-height:1.75;
  margin-bottom:26px;
}

/* SERVICES LIST */
.sps-services-list{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:14px 28px;
}

.sps-service-item{
  display:flex;
  align-items:center;
  gap:10px;
  font-size:15px;
  font-weight:600;
  color:#1f1b3a;
}

.sps-service-icon{
  width:22px;
  height:22px;
  border-radius:50%;
  background:#960546;
  color:#fff;
  display:grid;
  place-items:center;
  font-size:13px;
}

/* ===== MOBILE ===== */
@media(max-width:1000px){
  .sps-services-wrap{
    grid-template-columns:1fr;
  }

  .sps-exp-badge{
    position:static;
    width:max-content;
    margin-bottom:20px;
  }

  .sps-services-content h2{
    font-size:32px;
  }

  .sps-services-list{
    grid-template-columns:1fr;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sps-services-intro">
      <div className="sps-services-wrap">
        {/* LEFT IMAGE */}
        <div className="sps-services-image">
          <div className="sps-exp-badge">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <img
            src="/images/ser/house.png"
            alt="Professional Moving Services"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="sps-services-content">
          <small>OUR SERVICES</small>

          <h2>
            Explore Our Wide Range <br />
            of <span>Services.</span>
          </h2>

          <p>
            Discover our complete moving solutions at SPS Packers & Movers.
            From local to long-distance moves, packing, unpacking, and storage
            options, we’ve got you covered. Our experienced team ensures a
            smooth relocation process tailored to your needs.
          </p>

          <div className="sps-services-list">
            {[
              "House Relocations",
              "Corporate Relocations",
              "Premium Moving Service",
              "Warehousing / Storage",
              "Car Transportation",
              "Insurance"
            ].map((service, i) => (
              <div key={i} className="sps-service-item">
                <div className="sps-service-icon">➜</div>
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  useEffect(() => {
    const css = `
/* ===== EXCELLENCE HEADING ===== */
.sps-excellence{
 
padding:120px 6vw;
  /* IMAGE + DARK MAGENTA OVERLAY (ENTERPRISE STYLE) */
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(255, 254, 255, 0.35),
      transparent 45%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(150,5,70,0.45),
      transparent 50%
    ),
    linear-gradient(
      135deg,
      rgba(105, 60, 90, 0.92),
      rgba(204, 82, 135, 0.92)
    ),
    url("/images/truck.png") center/cover no-repeat;

  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  align-items:center;
  // padding:80px 6vw 40px;
  gap:40px;
  font-family:Inter,system-ui;
  //   backdrop-filter: blur(22px) saturate(140%);
  // -webkit-backdrop-filter: blur(22px) saturate(140%);
}

/* MAIN TITLE */
.sps-excellence h1{
  font-size:64px;
  font-weight:900;
  margin:0;
  color:#ffffff;
  letter-spacing:-0.02em;
}

/* HIGHLIGHT WORD */
.sps-excellence h1 span{
  color:#960546;
  position:relative;
}

/* SOFT SHADOW LIKE IMAGE */
.sps-excellence h1 span::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-6px;
  width:100%;
  height:6px;
  background:#960546;
  opacity:0.15;
  filter:blur(6px);
}

/* RESPONSIVE */
@media(max-width:900px){
  .sps-excellence{
    padding:90px 5vw;
  }

  .sps-excellence h1{
    font-size:42px;
  }
}

@media(max-width:480px){
  .sps-excellence h1{
    font-size:34px;
    line-height:1.25;
  }
}
  @media(max-width:900px){
  .heroq-section{
    grid-template-columns:1fr;
    padding:90px 5vw 40px;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <>
    <section className="sps-excellence">
      <h1>
        Delivering Excellence <span>Across India.</span>
      </h1>
    </section>
    <ServicesIntro />
    <ServicesShowcase />
    </>
  );
}
