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
  {/* ROW 1 — IMAGE LEFT | CONTENT RIGHT */}
  <div className="sps-service-row">
    
    <div className="sps-service-img">
      <img
         src="/images/ser/house.png"
        alt="House Shifting"
      />
    </div>

    <div className="sps-service-content">
      <h3>House Shifting</h3>
      <p>
        With a dedicated team of professionals, we offer timely and
        well-planned household relocation services ensuring safe packing,
        secure transport, and careful handling of every item.
      </p>

      <div className="sps-btns">
        <button
          className="sps-btn sps-btn-primary"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

        <button
          className="sps-btn sps-btn-whatsapp"
          onClick={() => openWhatsApp("House Shifting")}
        >
          WhatsApp Now
        </button>
      </div>
    </div>

  </div>

  {/* ================= OFFICE SHIFTING ================= */}
  {/* ROW 2 — CONTENT LEFT | IMAGE RIGHT */}
  <div className="sps-service-row">

    <div className="sps-service-content">
      <h3>Office Shifting</h3>
      <p>
        Our office shifting services ensure minimal downtime. From IT
        equipment to furniture, we manage every aspect with precision and
        professional care.
      </p>

      <div className="sps-btns">
        <button
          className="sps-btn sps-btn-primary"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

        <button
          className="sps-btn sps-btn-whatsapp"
          onClick={() => openWhatsApp("Office Shifting")}
        >
          WhatsApp Now
        </button>
      </div>
    </div>

    <div className="sps-service-img">
      <img
        src="/images/ser/house.png"
        alt="Office Shifting"
      />
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
    <ServicesShowcase />
    </>
  );
}
