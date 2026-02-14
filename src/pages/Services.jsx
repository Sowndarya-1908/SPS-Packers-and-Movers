import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Link } from "react-router-dom";




function ServicesShowcase() {

  const navigate = useNavigate();
  const sectionRef = useRef([]);

  const openWhatsApp = (service) => {
    const ownerNumber = "917550057453";
    const message = `Hello SPS Packers & Movers 👋

I am interested in ${service}.
Please contact me with details.`;

    window.open(
      `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sps-service-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRef.current.forEach(el => el && observer.observe(el));

    const css = `
/* ===== RESET ===== */
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== SECTION ===== */
.sps-service-wrap{
  padding: 4vw 6vw;
  font-family: Inter, system-ui;
}

/* ===== ROW ===== */
.sps-service-row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:50px;
  align-items:center;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(40px);
  transition:all .7s ease;
}

.sps-service-visible{
  opacity:1;
  transform:translateY(0);
}

/* Alternate layout */
.sps-service-row:nth-child(even) .sps-service-img{ order:2; }
.sps-service-row:nth-child(even) .sps-service-content{ order:1; }

/* ===== IMAGE ===== */
.sps-service-img{
  border-radius:18px;
  overflow:hidden;
}

.sps-service-img img{
  width:100%;
  max-height:360px;
  object-fit:cover;
  border-radius:18px;
}

/* ===== CONTENT ===== */
.sps-service-content{
  display:flex;
  flex-direction:column;
}

.sps-service-content h3{
  font-size:42px;
  font-weight:900;
  color:#062242;
  margin-bottom:12px;
}

.sps-service-content p{
  font-size:18px;
  line-height:1.7;
  color:#062242;
  max-width:560px;
}

/* ===== FEATURES ===== */
.sps-service-features{
  margin-top:16px;
}

.sps-service-features li{
  list-style:none;
  font-size:17px;
  margin-bottom:7px;
  padding-left:24px;
  position:relative;
  color:#062242;
}

.sps-service-features li::before{
  content:"✔";
  position:absolute;
  left:0;
  color:#25D366;
  font-weight:900;
}

/* ===== BUTTONS ===== */
.sps-btns{
  display:flex;
  gap:16px;
  margin-top:22px;
  flex-wrap:wrap;
}

.sps-btn{
  padding:14px 28px;
  font-size:16px;
  font-weight:800;
  border-radius:12px;
  border:none;
  cursor:pointer;
  transition:.25s ease;
}

.sps-btn-primary{
  background:linear-gradient(90deg,#062242,#3F6C87);
  color:#fff;
}

.sps-btn-whatsapp{
  background:#25D366;
  color:#fff;
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .sps-service-row{
    grid-template-columns:1fr;
    gap:30px;
  }

  .sps-service-content h3{
    font-size:34px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){
  .sps-service-wrap{
    padding:40px 18px;
  }

  .sps-service-row{
    margin-bottom:55px;
  }

  .sps-service-content h3{
    font-size:28px;
  }

  .sps-service-content p{
    font-size:16px;
  }

  .sps-service-features li{
    font-size:15.5px;
  }

  .sps-btn{
    width:100%;
    text-align:center;
  }

  .sps-service-img img{
    max-height:260px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

   const services = [
    {
      title: "House Shifting",
      img: "/images/bgserv/bghousemini.png",
      desc: "We make home relocation seamless and stress-free using high-quality packing materials and modern equipment.",
      features: [
        "Pre-move survey and planning",
        "Safe packing and unpacking of household items",
        "Careful handling of furniture and fragile goods",
        "Loading, transportation, and unloading",
        "Door-to-door relocation support"
      ]
    },
    {
      title: "Office Shifting",
      img: "/images/bgserv/offs.png",
      desc: "Professional office relocation ensuring minimal downtime and safe IT equipment handling.",
      features: [
        "Minimal business disruption during relocation",
        "IT equipment and electronics handling",
        "Furniture disassembly and reassembly",
        "Secure document transportation",
        "Weekend and after-hours moving options"
      ]
    },
    {
      title: "Transportation",
      img: "/images/bgserv/transmini.png",
      desc: "Fast and reliable GPS-enabled transportation for safe and timely delivery.",
      features: [
        "Dedicated fleet of modern vehicles",
        "GPS-enabled trucks for real-time tracking",
        "Climate-controlled transport options",
        "Insurance-covered transportation",
        "Pan-India and international network"
      ]
    },
    {
      title: "AC Installation",
      img: "/images/bgserv/bgacmini.png",
      desc: "Expert AC dismantling, shifting and re-installation with complete safety.",
      features: [
        "New AC installation (Split & Window AC)",
        "AC uninstallation and reinstallation",
        "Proper indoor & outdoor unit mounting",
        "Gas leak check and performance testing",
        "Clean, safe, and professional setup"
      ]
    },
    {
      title: "Godown Shifting",
      img: "/images/bgserv/godownmin.png",
      desc: "Complete warehouse and inventory relocation with heavy equipment handling.",
      features: [
        "Inventory assessment and planning",
        "Heavy machinery transportation",
        "Storage solutions during transition",
        "Climate-controlled moving options",
        "Logistics management"
      ]
    },
    {
      title: "Commercial Moves",
      img: "/images/bgserv/bgcommmini.png",
      desc: "End-to-end commercial relocation solutions for businesses and industries.",
      features: [
        "Retail store relocations",
        "Warehouse transfers",
        "Factory equipment moving",
        "Inventory management during transition",
        "Business continuity planning"
      ]
    }
  ];

  return (
    <section className="sps-service-wrap">
      {services.map((service, index) => (
        <div
          className="sps-service-row"
          key={index}
          ref={el => (sectionRef.current[index] = el)}
        >
          <div className="sps-service-img">
            <img src={service.img} alt={service.title} />
          </div>

          <div className="sps-service-content">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <ul className="sps-service-features">
              {service.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="sps-btns">
              <button
                className="sps-btn sps-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>

              <button
                className="sps-btn sps-btn-whatsapp"
                onClick={() => openWhatsApp(service.title)}
              >
                WhatsApp Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}







function ServicesIntro() {

  const sectionRef = useRef(null);

  useEffect(() => {

    /* ===== SCROLL REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-services-visible");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== SECTION ===== */
.sps-services-intro{
  padding:20px 6vw;
  // background:#FDFCFC;
  font-family:Inter,system-ui;
  overflow:hidden;
}

/* GRID */
.sps-services-wrap{
  max-width:1300px;
  margin:auto;
  display:grid;
  grid-template-columns:1.05fr 0.95fr;
  gap:70px;
  align-items:center;
}

/* ===== IMAGE SIDE ===== */
.sps-services-image{
  position:relative;
  opacity:0;
  transform:translateX(-60px);
  transition:all .9s cubic-bezier(.22,.61,.36,1);
}

.sps-services-visible .sps-services-image{
  opacity:1;
  transform:translateX(0);
}

.sps-services-image img{
  width:100%;
  border-radius:22px;
  box-shadow:0 30px 60px rgba(0,0,0,0.18);
  transition:transform .8s ease;
}

.sps-services-image:hover img{
  transform:scale(1.05);
}

/* EXPERIENCE BADGE */
.sps-exp-badge{
  position:absolute;
  top:-30px;
  left:-30px;
  background:#ffffff;
  border-radius:16px;
  padding-top: 30px;          
  padding:50px 26px;
  box-shadow:0 25px 50px rgba(6,34,66,0.25);
  text-align:center;
  animation:floatBadge 4s ease-in-out infinite;
}

@keyframes floatBadge{
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-10px); }
  100%{ transform:translateY(0); }
}

.sps-exp-badge h3{
  font-size:44px;
  font-weight:900;
  color:#062242;
  line-height:1;
}

.sps-exp-badge p{
  font-size:14px;
  font-weight:700;
  color:#062242;
  margin-top:6px;
}

/* ===== CONTENT SIDE ===== */
.sps-services-content{
  opacity:0;
  transform:translateX(60px);
  transition:all .9s cubic-bezier(.22,.61,.36,1);
}

.sps-services-visible .sps-services-content{
  opacity:1;
  transform:translateX(0);
}

.sps-services-content small{
  display:block;
  font-size:13px;
  letter-spacing:0.18em;
  font-weight:800;
  color:#062242;
  margin-bottom:14px;
}

.sps-services-content h2{
  font-size:42px;
  font-weight:900;
  color:#062242;
  line-height:1.25;
  margin-bottom:18px;
}

.sps-services-content p{
  font-size:16px;
  color:#062242;
  line-height:1.75;
  margin-bottom:30px;
}

/* ===== SERVICES LIST ===== */
.sps-services-list{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:16px 30px;
}

.sps-service-item{
  display:flex;
  align-items:center;
  gap:12px;
  font-size:15px;
  font-weight:600;
  color:#062242;
  opacity:0;
  transform:translateY(20px);
  transition:all .6s ease;
}

.sps-services-visible .sps-service-item{
  opacity:1;
  transform:translateY(0);
}

/* Stagger animation */
.sps-services-visible .sps-service-item:nth-child(1){ transition-delay:.2s; }
.sps-services-visible .sps-service-item:nth-child(2){ transition-delay:.3s; }
.sps-services-visible .sps-service-item:nth-child(3){ transition-delay:.4s; }
.sps-services-visible .sps-service-item:nth-child(4){ transition-delay:.5s; }
.sps-services-visible .sps-service-item:nth-child(5){ transition-delay:.6s; }
.sps-services-visible .sps-service-item:nth-child(6){ transition-delay:.7s; }

.sps-service-icon{
  width:24px;
  height:24px;
  border-radius:50%;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:#fff;
  display:grid;
  place-items:center;
  font-size:13px;
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .sps-services-wrap{
    grid-template-columns:1fr;
    gap:50px;
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

/* ===== MOBILE ===== */
@media(max-width:600px){
  .sps-services-intro{
    padding:0px 5vw;
  }

  .sps-services-content h2{
    font-size:26px;
  }

  .sps-services-content p{
    font-size:15px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="sps-services-intro" ref={sectionRef}>
      <div className="sps-services-wrap">

        {/* LEFT IMAGE */}
        <div className="sps-services-image">
          <div className="sps-exp-badge">
            <h3>5</h3>
            <p>Years Experience</p>
          </div>

          <img
            src="/images/ser/twopersons.jpg"
            alt="Professional Moving Services"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="sps-services-content">
          <small>Welcome to Chennai Lal Packers & Movers</small>

          <h2>
            Your Trusted <br />
            Moving <span>Partners</span>
          </h2>


          <p>
           At Chennai Lal Packers & Movers, we transform the stressful experience of moving into a smooth, efficient, and hassle-free journey. With years of expertise in professional packing and relocation services, we handle your belongings with the care they deserve while ensuring timely and secure delivery to your new destination.
          </p>

          <div className="sps-services-list">
            {[
              "House Relocations",
              "Corporate Relocations",
              "AC Installtion",
              "Warehousing Shifting",
              "Transportation",
              "Commercial Moves"
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





function SkillSection() {

  const sectionRef = useRef(null);
  const navigate = useNavigate();   // ✅ navigation added

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          const fills = entry.target.querySelectorAll(".progress-fill");
          fills.forEach((bar) => {
            const width = bar.dataset.width;
            bar.style.width = width;
          });
        }
      });
    }, { threshold: 0.25 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ================================ WRAPPER ================================ */
.skill-section {
  padding: 0px 6vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: center;
  font-family: Inter, system-ui;
  overflow:hidden;
}

/* LEFT IMAGES */
.skill-images {
  position: relative;
  opacity:0;
  transform:translateX(-60px);
  transition: all 0.9s cubic-bezier(.22,.61,.36,1);
}

.skill-section.show .skill-images {
  opacity:1;
  transform:translateX(0);
}

.skill-img-1 {
  width: 100%;
  border-radius: 22px;
  box-shadow: 0 20px 45px rgba(0,0,0,0.18);
  transition: transform .8s ease;
}

.skill-images:hover .skill-img-1 {
  transform: scale(1.05);
}

/* RIGHT CONTENT */
.skill-content {
  opacity:0;
  transform:translateX(60px);
  transition: all 0.9s cubic-bezier(.22,.61,.36,1);
}

.skill-section.show .skill-content {
  opacity:1;
  transform:translateX(0);
}

.skill-tag {
  font-size: 14px;
  font-weight: 700;
  color: #3F6C87;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.skill-title {
  font-size: 42px;
  font-weight: 900;
  color: #062242;
  line-height: 1.3;
  margin-bottom: 20px;
}

.skill-title span {
  background: linear-gradient(135deg, #062242, #3F6C87);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skill-desc {
  font-size: 16px;
  color: #3F6C87;
  line-height: 1.8;
  margin-bottom: 35px;
}

/* PROGRESS BARS */
.progress-box { margin-bottom: 24px; }

.progress-title {
  font-size: 14px;
  font-weight: 700;
  color: #062242;
  margin-bottom: 6px;
}

.progress-track {
  width: 100%;
  height: 10px;
  background: #e6eef3;
  border-radius: 8px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(135deg, #062242, #3F6C87);
  border-radius: 8px;
  transition: width 1.6s cubic-bezier(.22,.61,.36,1);
}

/* BUTTON */
.skill-btn {
  margin-top: 25px;
  background: linear-gradient(135deg, #062242, #3F6C87);
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
}

.skill-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(6,34,66,0.35);
}

/* RESPONSIVE */
@media(max-width: 950px) {
  .skill-section {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .skill-title { font-size: 32px; }
}

@media(max-width: 600px){
  .skill-section{ padding:0px 5vw; }
  .skill-title{ font-size:26px; }
  .skill-desc{ font-size:15px; }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="skill-section" ref={sectionRef}>

      {/* LEFT */}
      <div className="skill-images">
        <img src="/images/expr.png" className="skill-img-1" alt="Packing Process" />
      </div>

      {/* RIGHT */}
      <div className="skill-content">

        <div className="skill-tag">Our Expertise</div>

        <h2 className="skill-title">
          Experienced movers with a passion <span>for perfection</span>
        </h2>

        <p className="skill-desc">
          At Chennai Lal Packers & Movers, we combine decades of moving experience  
          with professional precision. Whether it’s household shifting, commercial  
          relocation, or long-distance moves — we ensure every task is handled with  
          care and responsibility.
        </p>

        <div className="progress-box">
          <div className="progress-title">Real-Time Tracking</div>
          <div className="progress-track">
            <div className="progress-fill" data-width="85%"></div>
          </div>
        </div>

        <div className="progress-box">
          <div className="progress-title">Specialized Handling</div>
          <div className="progress-track">
            <div className="progress-fill" data-width="92%"></div>
          </div>
        </div>

        <div className="progress-box">
          <div className="progress-title">Customer-First Approach</div>
          <div className="progress-track">
            <div className="progress-fill" data-width="95%"></div>
          </div>
        </div>

        {/* ✅ BUTTON NAVIGATION ADDED */}
        <button 
          className="skill-btn"
          onClick={() => navigate("/contact")}
        >
          Book Your Move Now →
        </button>

      </div>
    </section>
  );
}




function WhyChooseUs() {

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".step").forEach((el) => {
      observer.observe(el);
    });

    const style = document.createElement("style");
    style.innerHTML = `

body{
  margin:0;
  font-family:'Segoe UI',sans-serif;
  background:#f3f6fa;
}

.section{
  padding:60px 5%;
}

.title{
  text-align:center;
  font-size:26px;
  font-weight:700;
  color:#0b2c4d;
  margin-bottom:50px;
}

/* ================= DESKTOP ================= */

.step{
  position:relative;
  background:#0b2c4d;
  border-radius:60px;
  padding:30px 40px;
  margin:35px auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  color:white;
  min-height:160px;
  max-width:850px;
  width:90%;
  box-shadow:0 10px 25px rgba(0,0,0,0.15);

  opacity:0;
  transform:translateY(40px);
  transition:all 0.6s ease;
}

.step.show{
  opacity:1;
  transform:translateY(0);
}

.step.reverse{
  flex-direction:row-reverse;
}

.circle{
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  width:110px;
  height:110px;
  background:white;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:28px;
  font-weight:800;
  color:#0b2c4d;
  box-shadow:0 15px 30px rgba(0,0,0,0.25);
}

.content{
  width:42%;
}

.content h3{
  margin:5px 0 10px 0;
  font-size:16px;
}

.content ul{
  padding-left:18px;
  margin:0;
}

.content li{
  font-size:13px;
  line-height:1.5;
  margin-bottom:6px;
}

.icon{
  width:48px;
  height:48px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.icon svg{
  width:40px;
  height:40px;
  fill:white;
}

/* ================= MOBILE ================= */

@media(max-width:900px){

  .step{
    display:flex;
    flex-direction:column !important;
    align-items:center;
    text-align:center;
    padding:40px 25px;
    max-width:420px;
    width:100%;
    min-height:520px;
    border-radius:25px;
  }

  .step.reverse{
    flex-direction:column !important;
  }

  .content{
    width:100%;
    order:1;
  }

  .content h3{
    font-size:18px;
    margin-bottom:15px;
  }

  .content ul{
    padding-left:0;
    list-style-position:inside;
  }

  .content li{
    margin-bottom:10px;
    font-size:15px;
  }

  .circle{
    position:relative;
    left:auto;
    transform:none;
    margin:30px 0 20px 0;
    width:150px;
    height:150px;
    font-size:32px;
    order:2;
  }

  .icon{
    margin-top:10px;
    order:3;
  }

  .icon svg{
    width:48px;
    height:48px;
  }

}

`;
    document.head.appendChild(style);

  }, []);

  return (
    <section className="section">

      <h2 className="title">
        Why Choose Chennai Lal Packers and Movers?
      </h2>

      {/* 01 */}
      <div className="step">
        <div className="content">
          <h3>Professional Excellence</h3>
          <ul>
            <li>Trained and verified moving professionals</li>
            <li>Systematic approach to every relocation</li>
            <li>Quality assured services</li>
          </ul>
        </div>
        <div className="circle">01</div>
        <div className="icon">
          <svg viewBox="0 0 24 24">
            <path d="M9 16.2l-3.5-3.5L4 14.2l5 5L20 8.2l-1.5-1.4z"/>
          </svg>
        </div>
      </div>

      {/* 02 */}
      <div className="step reverse">
        <div className="content">
          <h3>Safety & Security</h3>
          <ul>
            <li>100% insured services</li>
            <li>GPS-tracked shipments</li>
            <li>Secure packing materials</li>
            <li>Background-checked staff</li>
          </ul>
        </div>
        <div className="circle">02</div>
        <div className="icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4z"/>
          </svg>
        </div>
      </div>

      {/* 03 */}
      <div className="step">
        <div className="content">
          <h3>Punctuality & Efficiency</h3>
          <ul>
            <li>On-time pickup and delivery</li>
            <li>Real-time shipment tracking</li>
            <li>Dedicated project managers</li>
          </ul>
        </div>
        <div className="circle">03</div>
        <div className="icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 8v5l3 3 1.5-1.5-2.5-2.5V8z"/>
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
          </svg>
        </div>
      </div>

      {/* 04 */}
      <div className="step reverse">
        <div className="content">
          <h3>Transparent Pricing</h3>
          <ul>
            <li>No hidden charges</li>
            <li>Free estimates and consultations</li>
            <li>Competitive pricing packages</li>
          </ul>
        </div>
        <div className="circle">04</div>
        <div className="icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 1C7 1 4 4 4 7c0 5 8 10 8 10s8-5 8-10c0-3-3-6-8-6z"/>
          </svg>
        </div>
      </div>

      {/* 05 */}
      <div className="step">
        <div className="content">
          <h3>Customer-Centric Approach</h3>
          <ul>
            <li>24/7 customer support</li>
            <li>Customized relocation plans</li>
            <li>Post-move follow-up</li>
          </ul>
        </div>
        <div className="circle">05</div>
        <div className="icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 21l-8-7h5V3h6v11h5l-8 7z"/>
          </svg>
        </div>
      </div>

    </section>
  );
}







function ProcessTimelineFixed() {

  const stepRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ===== ACTIVE STEP ON SCROLL (SAFE) ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.3 }
    );

    stepRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ===== CSS ===== */
  useEffect(() => {
    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

.sps-timeline-wrap{
  padding:4vw 6vw;
  font-family:Inter,system-ui;
  background:#fff;
  overflow:hidden;
}

/* ===== HEADER ===== */
.sps-timeline-head{
  text-align:center;
  margin-bottom:50px;
}

.sps-timeline-head h2{
  font-size:40px;
  font-weight:900;
  color:#062242;
}

/* ===== TIMELINE ===== */
.sps-timeline{
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
}

/* ===== SVG ===== */
.sps-svg{
  position:absolute;
  top:44px;
  left:0;
  width:100%;
  height:120px;
  z-index:0;
}

/* ===== STEP ===== */
.sps-step{
  width:150px;
  text-align:center;
  position:relative;
  z-index:2;
}

/* ===== CIRCLE ===== */
.sps-step-circle{
  width:72px;
  height:72px;
  border-radius:50%;
  background:#fff;
  border:4px solid currentColor;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  margin:0 auto;
  transition:.35s ease;
}

/* ===== ACTIVE + HOVER ===== */
.sps-step:hover .sps-step-circle,
.sps-step.active .sps-step-circle{
  box-shadow:0 0 25px currentColor;
  transform:scale(1.08);
}

/* ===== TEXT ===== */
.sps-step h4{
  margin-top:14px;
  font-size:16px;
  font-weight:800;
  color:#062242;
}

.sps-step p{
  font-size:14px;
  margin-top:6px;
  color:#555;
  line-height:1.5;
}

/* ===== COLORS ===== */
.green{ color:#2DBE60; }
.blue{ color:#2D8CFF; }
.orange{ color:#F5A623; }
.red{ color:#E94E4E; }
.purple{ color:#8E44AD; }
.teal{ color:#1ABC9C; }
.gray{ color:#6c757d; }

/* ===== MOBILE ===== */
@media(max-width:900px){
  .sps-timeline{
    flex-direction:column;
    gap:40px;
  }

  .sps-svg{
    display:none;
  }

  .sps-step{
    width:100%;
  }
}
`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  /* ===== UPDATED CONTENT (YOUR STEPS) ===== */
  const steps = [
    {
      title: "Free Consultation",
      desc: "Get a personalized quote",
      icon: "💬",
      color: "green"
    },
    {
      title: "Pre-Move Survey",
      desc: "Detailed assessment of your needs",
      icon: "📋",
      color: "blue"
    },
    {
      title: "Customized Plan",
      desc: "Tailored moving strategy",
      icon: "🧩",
      color: "orange"
    },
    {
      title: "Professional Packing",
      desc: "Careful handling of all items",
      icon: "📦",
      color: "red"
    },
    {
      title: "Safe Transportation",
      desc: "Insured and tracked movement",
      icon: "🚚",
      color: "purple"
    },
    {
      title: "Unpacking & Setup",
      desc: "Settling into your new space",
      icon: "🏠",
      color: "teal"
    },
    {
      title: "Feedback & Support",
      desc: "Ensuring complete satisfaction",
      icon: "🤝",
      color: "gray"
    }
  ];

  return (
    <section className="sps-timeline-wrap">
      <div className="sps-timeline-head">
        <h2>Our Moving Process</h2>
      </div>

      <div className="sps-timeline">

        {/* CURVED LINE + MOVING DOT */}
        <svg className="sps-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C200,20 400,100 600,60 800,20 1000,100 1200,60"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="4"
          />
          <circle r="6" fill="url(#grad)">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M0,60 C200,20 400,100 600,60 800,20 1000,100 1200,60"
            />
          </circle>
          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#2DBE60"/>
              <stop offset="50%" stopColor="#2D8CFF"/>
              <stop offset="100%" stopColor="#E94E4E"/>
            </linearGradient>
          </defs>
        </svg>

        {steps.map((step, i) => (
          <div
            key={i}
            ref={el => (stepRefs.current[i] = el)}
            data-index={i}
            className={`sps-step ${step.color} ${activeIndex === i ? "active" : ""}`}
          >
            <div className="sps-step-circle">{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}


function SpecialOffersPremium() {

  const navigate = useNavigate();

  /* ================= LOOPING 2-HOUR COUNTDOWN ================= */
  const TWO_HOURS = 2 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(TWO_HOURS);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return TWO_HOURS; // reset automatically
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const goToContact = () => {
    navigate("/contact");
  };

  /* ================= CSS ================= */
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `

body{
  margin:0;
  font-family:'Segoe UI',sans-serif;
  background:white;
}

/* SECTION */
.offers-section{
  padding:70px 6%;
  text-align:center;
}

/* TIMER */
.timer-banner{
  background:#0b2c4d;
  color:white;
  padding:18px;
  border-radius:12px;
  margin-bottom:50px;
  font-weight:600;
  font-size:18px;
  box-shadow:0 10px 25px rgba(0,0,0,0.2);
}

/* GRID */
.offers-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:30px;
}

/* CARD */
.offer-card{
  position:relative;
  background:linear-gradient(160deg,#0b2c4d,#163e6d);
  color:white;
  padding:50px 25px 40px;
  border-radius:25px;
  min-height:420px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  overflow:hidden;
  transition:0.4s ease;
}

.offer-card:hover{
  transform:translateY(-12px);
  box-shadow:0 20px 45px rgba(11,44,77,0.5);
}

/* SHINE SWIPE EFFECT */
.offer-card::after{
  content:"";
  position:absolute;
  top:-100%;
  left:-50%;
  width:200%;
  height:300%;
  background:linear-gradient(
    120deg,
    transparent 30%,
    rgba(255,255,255,0.25),
    transparent 70%
  );
  transform:rotate(25deg);
  animation:shine 6s infinite;
}

@keyframes shine{
  0%{ top:-120%; }
  100%{ top:120%; }
}

/* RIBBON */
.ribbon{
  position:absolute;
  top:25px;
  left:-55px;
  background:white;
  color:#0b2c4d;
  padding:8px 65px;
  font-size:13px;
  font-weight:bold;
  transform:rotate(-42deg);
  box-shadow:0 0 15px rgba(255,255,255,0.8);
  animation:glowRibbon 2s infinite alternate;
}

/* Ribbon glow animation */
@keyframes glowRibbon{
  from{
    box-shadow:0 0 10px rgba(255,255,255,0.6);
  }
  to{
    box-shadow:0 0 25px rgba(255,255,255,1);
  }
}

/* CONTENT */
.offer-card h3{
  font-size:22px;
  margin-top:40px;
  line-height:1.4;
}

.offer-card p{
  font-size:15px;
  margin-top:15px;
  line-height:1.6;
}

/* BUTTON */
.offer-btn{
  margin-top:25px;
  background:white;
  color:#0b2c4d;
  border:none;
  padding:12px;
  border-radius:30px;
  font-weight:600;
  cursor:pointer;
  transition:0.3s;
}

.offer-btn:hover{
  background:#f2f2f2;
}

/* TABLET */
@media(max-width:1024px){
  .offers-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

/* MOBILE */
@media(max-width:600px){
  .offers-grid{
    grid-template-columns:repeat(2,1fr);
    gap:20px;
  }

  .offer-card{
    padding:35px 15px 25px;
    min-height:360px;
  }

  .offer-card h3{
    font-size:18px;
  }

  .offer-card p{
    font-size:14px;
  }
}

`;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="offers-section">

      <div className="timer-banner">
        🔥 Limited Time Offer Ends In: {formatTime(timeLeft)}
      </div>

      <div className="offers-grid">

        <div className="offer-card">
          <div className="ribbon">15% OFF</div>
          <h3>Family Relocation Package</h3>
          <p>15% off on complete home shifting.</p>
          <button className="offer-btn" onClick={goToContact}>
            Claim Now
          </button>
        </div>

        <div className="offer-card">
          <div className="ribbon">Bulk Deal</div>
          <h3>Corporate Client Discount</h3>
          <p>Special rates for bulk business relocations.</p>
          <button className="offer-btn" onClick={goToContact}>
            Get Quote
          </button>
        </div>

        <div className="offer-card">
          <div className="ribbon">10% OFF</div>
          <h3>First-Time Customer Offer</h3>
          <p>10% discount on your first move.</p>
          <button className="offer-btn" onClick={goToContact}>
            Book Today
          </button>
        </div>

        <div className="offer-card">
          <div className="ribbon">Seasonal</div>
          <h3>Seasonal Discount</h3>
          <p>Check our current promotions.</p>
          <button className="offer-btn" onClick={goToContact}>
            View Details
          </button>
        </div>

      </div>

    </section>
  );
}









function IndustriesWeServeBalanced() {

  useEffect(() => {
    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

.sps-industry-wrap{
  padding:70px 20px;
  font-family:Inter,system-ui;
  display:flex;
  justify-content:center;
}

/* ===== CIRCLE WRAPPER ===== */
.sps-industry-circle{
  position:relative;
  width:620px;
  height:620px;
}

/* ===== CENTER ===== */
.sps-industry-center{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:190px;
  height:190px;
  border-radius:50%;
  background:#fff;
  box-shadow:
    0 20px 55px rgba(0,0,0,.15),
    inset 0 0 0 6px rgba(6,34,66,.04);
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:20px;
  font-size:24px;
  font-weight:900;
  line-height:1.25;
  color:#062242;
  z-index:3;
}

/* ===== ITEM ===== */
.sps-industry-item{
  position:absolute;
  width:130px;
  height:130px;
  border-radius:50%;
  background:#fff;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  font-size:13px;
  font-weight:800;
  color:#062242;
  box-shadow:0 14px 34px rgba(0,0,0,.12);
  animation:pulseGlow 3.5s ease-in-out infinite;
}

/* ===== ICON ===== */
.sps-industry-icon{
  width:56px;
  height:56px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:24px;
  color:#fff;
  margin-bottom:6px;
}

/* ===== GLOW ===== */
@keyframes pulseGlow{
  0%{ box-shadow:0 14px 34px rgba(0,0,0,.12); }
  50%{ box-shadow:0 0 26px currentColor; }
  100%{ box-shadow:0 14px 34px rgba(0,0,0,.12); }
}

/* ===== COLORS ===== */
.c1{ color:#4CAF50; } .bg1{ background:#4CAF50; }
.c2{ color:#1976D2; } .bg2{ background:#1976D2; }
.c3{ color:#FF9800; } .bg3{ background:#FF9800; }
.c4{ color:#9C27B0; } .bg4{ background:#9C27B0; }
.c5{ color:#E53935; } .bg5{ background:#E53935; }
.c6{ color:#546E7A; } .bg6{ background:#546E7A; }
.c7{ color:#6D4C41; } .bg7{ background:#6D4C41; }
.c8{ color:#00897B; } .bg8{ background:#00897B; }

/* ===== PERFECT POSITIONS ===== */
.p1{ top:0%; left:50%; transform:translate(-50%,0); }
.p2{ top:18%; left:82%; transform:translate(-50%,-50%); }
.p3{ top:50%; left:100%; transform:translate(-100%,-50%); }
.p4{ top:82%; left:82%; transform:translate(-50%,-50%); }
.p5{ top:100%; left:50%; transform:translate(-50%,-100%); }
.p6{ top:82%; left:18%; transform:translate(-50%,-50%); }
.p7{ top:50%; left:0%; transform:translate(0,-50%); }
.p8{ top:18%; left:18%; transform:translate(-50%,-50%); }

/* ===== RESPONSIVE – SCALE DOWN BUT KEEP CIRCLE ===== */
@media(max-width:900px){
  .sps-industry-circle{
    width:420px;
    height:420px;
  }

  .sps-industry-center{
    width:140px;
    height:140px;
    font-size:18px;
  }

  .sps-industry-item{
    width:95px;
    height:95px;
    font-size:11px;
  }

  .sps-industry-icon{
    width:40px;
    height:40px;
    font-size:18px;
  }
}

@media(max-width:500px){
  .sps-industry-circle{
    width:320px;
    height:320px;
  }

  .sps-industry-center{
    width:110px;
    height:110px;
    font-size:14px;
  }

  .sps-industry-item{
    width:75px;
    height:75px;
    font-size:9px;
  }

  .sps-industry-icon{
    width:30px;
    height:30px;
    font-size:14px;
  }
}
`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  const industries = [
    { name:"Residential Communities", icon:"🏠", color:"c1", bg:"bg1", pos:"p1" },
    { name:"Corporate Offices", icon:"🏢", color:"c2", bg:"bg2", pos:"p2" },
    { name:"Retail Establishments", icon:"🏬", color:"c3", bg:"bg3", pos:"p3" },
    { name:"Educational Institutions", icon:"🎓", color:"c4", bg:"bg4", pos:"p4" },
    { name:"Healthcare Facilities", icon:"🏥", color:"c5", bg:"bg5", pos:"p5" },
    { name:"Government Organizations", icon:"🏛️", color:"c6", bg:"bg6", pos:"p6" },
    { name:"Manufacturing Units", icon:"🏭", color:"c7", bg:"bg7", pos:"p7" },
    { name:"IT Companies", icon:"💻", color:"c8", bg:"bg8", pos:"p8" }
  ];

  return (
    <section className="sps-industry-wrap">
      <div className="sps-industry-circle">

        <div className="sps-industry-center">
          Industries<br />We Serve
        </div>

        {industries.map((item,i)=>(
          <div
            key={i}
            className={`sps-industry-item ${item.color} ${item.pos}`}
            style={{ animationDelay:`${i * 0.25}s` }}
          >
            <div className={`sps-industry-icon ${item.bg}`}>
              {item.icon}
            </div>
            {item.name}
          </div>
        ))}

      </div>
    </section>
  );
}



function TamilNaduCitySearch() {

  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const goContact = () => navigate("/contact");
  const [search, setSearch] = useState("");

  useEffect(() => {

    /* ===== SCROLL REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          // stagger animation for city boxes
          const boxes = entry.target.querySelectorAll(".city-box");
          boxes.forEach((box, i) => {
            setTimeout(() => box.classList.add("show"), i * 120);
          });
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===============================
   SECTION
================================ */
.tn-city-section {
  width: 100%;
  padding: 0px 5vw;
  background: linear-gradient(135deg,#062242,#0A304F);
  font-family: Inter, system-ui;
  color: white;
  text-align: center;
  overflow:hidden;
  opacity:0;
  transform:translateY(50px);
  transition:0.9s cubic-bezier(.22,.61,.36,1);
}

.tn-city-section.show{
  opacity:1;
  transform:translateY(0);
}

/* TITLE */
.tn-title {
  font-size: 34px;
  font-weight: 900;
  margin-bottom: 35px;
}

/* ===============================
   SEARCH BAR
================================ */
.city-search {
  width: 55%;
  max-width: 600px;
  min-width: 260px;
  margin: 0 auto 50px auto;
  padding: 15px 20px;
  border-radius: 14px;
  border: none;
  font-size: 16px;
  outline: none;
  color: #062242;
  background: #ffffff;
  transition: 0.4s ease;
  box-shadow: 0 12px 28px rgba(0,0,0,0.2);
}

.city-search:focus {
  transform: scale(1.03);
  box-shadow: 0 18px 40px rgba(255,255,255,0.25);
}

/* ===============================
   GRID
================================ */
.city-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

/* ===============================
   CITY BOX
================================ */
.city-box {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 18px;
  padding: 30px 25px;
  text-align: left;
  backdrop-filter: blur(10px);
  transition: all .4s ease;
  opacity:0;
  transform:translateY(40px);
}

.city-box.show{
  opacity:1;
  transform:translateY(0);
}

.city-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 45px rgba(0,0,0,0.35);
}

/* ===============================
   TITLE INSIDE BOX
================================ */
.city-title {
  font-size: 18px;
  font-weight: 800;
  color: #A7D4EE;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding-bottom: 8px;
}

/* ===============================
   CITY ITEMS
================================ */
.city-item {
  margin-bottom: 10px;
  font-size: 15px;
  cursor: pointer;
  color: #DCEBFF;
  transition: 0.3s ease;
  padding: 6px 0;
}

.city-item:hover {
  color: #A7D4EE;
  padding-left: 8px;
  text-decoration: underline;
}

.city-highlight {
  color: #FFD166;
  font-weight: 800;
}

/* ===============================
   RESPONSIVE
================================ */

/* Tablet */
@media(max-width:1000px){
  .city-grid{
    grid-template-columns: repeat(2,1fr);
  }
  .city-search{
    width:75%;
  }
}

/* Mobile */
@media(max-width:650px){

  .tn-city-section{
    padding:0px 5vw;
  }

  .tn-title{
    font-size:24px;
  }

  .city-search{
    width:100%;
    margin-bottom:35px;
  }

  .city-grid{
    grid-template-columns:1fr;
    gap:25px;
  }

  .city-box{
    padding:22px 20px;
  }

  .city-item{
    font-size:14px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  /* ====== CITY LISTS ====== */
  const cities = {
    "Major Cities": [
      "Chennai","Coimbatore","Madurai","Trichy","Salem",
      "Tirunelveli","Erode","Tiruppur","Vellore",
      "Thanjavur","Kanchipuram","Thiruvarur"
    ],
    "Tier 2 & Tier 3 Cities": [
      "Dindigul","Karur","Namakkal","Ariyalur","Nagapattinam",
      "Ramanathapuram","Cuddalore","Thoothukudi","Sivagangai",
      "Virudhunagar","Krishnagiri","Dharmapuri"
    ],
    "All Tamil Nadu Service": [
      "Kanyakumari","Tenkasi","Nilgiris","Ranipet",
      "Chengalpattu","Kallakurichi","Villupuram",
      "Mayiladuthurai","Perambalur","Tiruvannamalai","Tirupattur"
    ]
  };

  const highlight = (text) => {
    if (!search) return text;
    const regex = new RegExp(search, "gi");
    return text.replace(regex, match => 
      `<span class="city-highlight">${match}</span>`
    );
  };

  const filterCities = (list) =>
    list.filter(city =>
      city.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <section className="tn-city-section" ref={sectionRef}>
      
      <h2 className="tn-title">
        Citywise Services — Chennai Lal Packers & Movers
      </h2>

      <input
        type="text"
        className="city-search"
        placeholder="Search your city — Chennai, Coimbatore, Salem..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="city-grid">
        {Object.keys(cities).map((group, index) => (
          <div key={index} className="city-box">
            <div className="city-title">{group}</div>

            {filterCities(cities[group]).map((city, i) => (
              <div
                key={i}
                className="city-item"
                onClick={goContact}
                dangerouslySetInnerHTML={{
                  __html: `Packers and Movers in ${highlight(city)}`
                }}
              />
            ))}

            {filterCities(cities[group]).length === 0 && (
              <div style={{ color: "#A7C9E2", marginTop: "10px" }}>
                No matching cities
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}

export default function Services() {

  const heroRef = useRef(null);

  useEffect(() => {

    /* ===== HERO REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });

    if (heroRef.current) observer.observe(heroRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== EXCELLENCE HERO ===== */
.sps-excellence {
  min-height:40vh;
  padding:0px 3vw;
  position:relative;
  overflow:hidden;

  background:
    radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%),
    radial-gradient(circle at 80% 80%, rgba(6,34,66,0.45), transparent 50%),
    linear-gradient(135deg, rgba(6,34,66,0.92), rgba(63,108,135,0.92)),
    url("/images/truck.png") center/cover no-repeat;

  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  font-family:Inter,system-ui;

  opacity:0;
  transform:translateY(60px);
  transition:1s cubic-bezier(.22,.61,.36,1);
}

/* Reveal */
.sps-excellence.show{
  opacity:1;
  transform:translateY(0);
}

/* Subtle background zoom */
.sps-excellence::before{
  content:"";
  position:absolute;
  inset:0;
  background:url("/images/truck.png") center/cover no-repeat;
  opacity:0.08;
  animation: zoomBg 20s ease-in-out infinite alternate;
}

@keyframes zoomBg{
  from{ transform:scale(1); }
  to{ transform:scale(1.08); }
}

/* MAIN TITLE */
.sps-excellence h1 {
  font-size:64px;
  font-weight:900;
  color:#ffffff;
  letter-spacing:-0.02em;
  position:relative;
  z-index:2;
  animation: fadeUp 1s ease forwards;
}

@keyframes fadeUp{
  from{ opacity:0; transform:translateY(40px); }
  to{ opacity:1; transform:translateY(0); }
}

/* Highlight word */
.sps-excellence h1 span {
  background: linear-gradient(90deg,#ffffff,#A7D4EE,#ffffff);
  background-size:200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 4s linear infinite;
}

/* Animated shimmer */
@keyframes shimmer{
  from{ background-position:0% center; }
  to{ background-position:200% center; }
}

/* ===== RESPONSIVE ===== */

/* Tablet */
@media(max-width:900px){

  .sps-excellence{
    padding:90px 5vw;
    min-height:70vh;
  }

  .sps-excellence h1{
    font-size:42px;
  }
}

/* Mobile */
@media(max-width:480px){

  .sps-excellence{
    padding:80px 6vw;
    min-height:60vh;
  }

  .sps-excellence h1{
    font-size:32px;
    line-height:1.3;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <>
      <section className="sps-excellence" ref={heroRef}>
        <h1>
          Professional Packers & Movers <br />
          <span>Complete Relocation Solutions.</span>
          
        </h1>
      </section>

      <ServicesIntro />
      <ServicesShowcase />
      <WhyChooseUs />
      <SkillSection />
      <ProcessTimelineFixed />
      <IndustriesWeServeBalanced />
   <SpecialOffersPremium />
      <TamilNaduCitySearch />
    </>
  );
}