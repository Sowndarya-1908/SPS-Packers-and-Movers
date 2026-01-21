import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";


function AboutSlide() {
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    /* ===== COUNTER FUNCTION ===== */
    const animateCount = (el, target, suffix = "") => {
      let start = 0;
      const duration = 1500;
      const stepTime = 16;
      const increment = target / (duration / stepTime);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          el.innerText = Math.floor(target) + suffix;
          clearInterval(counter);
        } else {
          el.innerText = Math.floor(start) + suffix;
        }
      }, stepTime);
    };

    /* ===== OBSERVER ===== */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            animateCount(stat1Ref.current, 92, "%");
            animateCount(stat2Ref.current, 50000, "+");
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(stat1Ref.current);

    /* ===== STYLES ===== */
const css = `
/* ===== ABOUT SLIDE ===== */
.sps-about{
  padding:70px 6vw;
  background:#F6F1F8; /* NOT CHANGED */
  font-family:Inter,system-ui;
}

/* LAYOUT */
.sps-about-wrap{
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  gap:50px;
}

/* IMAGE */
.sps-about-img img{
  width:100%;
  height:500px;
  border-radius:18px;
  box-shadow:0 12px 30px rgba(21,48,77,0.25);
}

/* CONTENT */
.sps-about-content small{
  display:inline-block;
  font-size:13px;
  font-weight:800;
  letter-spacing:0.08em;
  color:#486C85;  /* blue accent */
  margin-bottom:14px;
}

.sps-about-content h2{
  font-size:42px;
  font-weight:900;
  line-height:1.2;
  margin-bottom:18px;
  color:#15304D; /* dark blue */
}

.sps-about-content h2 span{
  background:linear-gradient(90deg,#15304D,#486C85);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.sps-about-content p{
  font-size:16px;
  line-height:1.75;
  color:#486C85;
  max-width:520px;
}

/* STATS */
.sps-about-stats{
  display:flex;
  gap:46px;
  margin:32px 0 34px;
}

.sps-stat h3{
  font-size:38px;
  font-weight:900;
  background:linear-gradient(90deg,#15304D,#486C85);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  margin-bottom:6px;
}

.sps-stat p{
  font-size:14px;
  color:#486C85;
  max-width:210px;
}

/* BUTTON */
.sps-about-btn{
  display:inline-block;
  padding:14px 30px;
  background:linear-gradient(90deg,#15304D,#486C85);
  color:white;
  font-weight:800;
  border-radius:14px;
  text-decoration:none;
  transition:0.3s;
  border:none;
}

.sps-about-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 12px 30px rgba(72,108,133,0.45);
}

/* MOBILE */
@media(max-width:900px){
  .sps-about{
    padding:50px 5vw;
  }

  .sps-about-wrap{
    grid-template-columns:1fr;
  }

  .sps-about-content h2{
    font-size:32px;
  }

  .sps-about-stats{
    flex-direction:column;
    gap:22px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sps-about">
      <div className="sps-about-wrap">

        {/* IMAGE */}
        <div className="sps-about-img">
          <img
            src="/images/bgserv/setting.png"
            alt="SPS Packers and Movers Team"
          />
        </div>

        {/* CONTENT */}
        <div className="sps-about-content">
          <small>ABOUT CHENNAI LAL PACKERS & MOVERS</small>

          <h2>
            Setting new standards in the <span>moving industry</span>
          </h2>

          <p>
            CHENNAI LAL Packers and Movers is committed to delivering reliable,
            secure, and professional relocation services. With a strong
            focus on customer satisfaction, we handle every move with care,
            precision, and responsibility.
          </p>

          <div className="sps-about-stats">
            <div className="sps-stat">
              <h3 ref={stat1Ref}>0%</h3>
              <p>Customer satisfaction across all relocation services</p>
            </div>

            <div className="sps-stat">
              <h3 ref={stat2Ref}>0+</h3>
              <p>Successful home, office & commercial relocations</p>
            </div>
          </div>

          <a href="/about" className="sps-about-btn">
            Know More About Us
          </a>
        </div>

      </div>
    </section>
  );
}






function Testimonials() {

  const testimonials = [
    {
      name: "Praveen Kumar",
      text: "The service was excellent! My household items were packed neatly and delivered safely without any damage.",
      img: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Sathya Narayanan",
      text: "Professional team, quick shifting, and very polite staff. Highly recommended for home shifting in Tamilnadu!",
      img: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Lakshmi Priya",
      text: "Affordable and reliable packers. My office shifting was done smoothly with zero downtime.",
      img: "https://i.pravatar.cc/150?img=47"
    }
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const css = `
/* ================== WRAPPER ================== */
.sps-testimonial-section {
  padding: 80px 6vw;
  text-align: center;
  font-family: Inter, system-ui;
}

.sps-testimonial-title {
  font-size: 40px;
  font-weight: 900;
  color: #062242; /* BLUE */
  margin-bottom: 40px;
}

.sps-testimonial-slider {
  max-width: 750px;
  margin: auto;
  position: relative;
}

/* ================== CARD ================== */
.sps-testimonial-card {
  border-radius: 18px;
  padding: 50px 35px;
  position: relative;
  color: #062242; /* BLUE TEXT */
  background: white;
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
}

.sps-testimonial-card.active {
  opacity: 1;
  transform: translateY(0);
}

/* bubble shape */
.sps-testimonial-bubble {
  position: absolute;
  inset: 0;
  border-radius: 30px;
  background: linear-gradient(135deg, #062242, #3F6C87); /* BLUE GRADIENT */
  z-index: -1;
  clip-path: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%);
}

/* ================== IMAGE ================== */
.sps-testimonial-img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 4px solid #fff;
  overflow: hidden;
  margin: auto;
  margin-bottom: 20px;
}

.sps-testimonial-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ================== TEXT ================== */
.sps-testimonial-text {
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 20px;
  color: #062242; /* BLUE */
  padding: 0 10px;
  font-weight: 500;
}

.sps-testimonial-name {
  font-size: 18px;
  color: #062242; /* BLUE */
  font-weight: 700;
}

/* ================== SLIDER BUTTONS ================== */
.sps-testimonial-controls {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.sps-testimonial-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg,#062242,#3F6C87); /* BLUE GRADIENT */
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(6,34,66,0.3);
  transition: 0.3s;
}

.sps-testimonial-btn:hover {
  opacity: 0.9;
}

/* ================== MOBILE ================== */
@media(max-width: 600px) {
  .sps-testimonial-title {
    font-size: 32px;
  }
  .sps-testimonial-card {
    padding: 40px 20px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sps-testimonial-section">
      
      <h2 className="sps-testimonial-title">What Our Clients Say</h2>

      <div className="sps-testimonial-slider">

        <div className="sps-testimonial-card active">
          <div
            className="sps-testimonial-bubble"
            style={{ 
              background: "linear-gradient(135deg, #062242, #3F6C87)" 
            }}
          ></div>

          <div className="sps-testimonial-img">
            <img src={testimonials[index].img} alt="client" />
          </div>

          <p className="sps-testimonial-text">“{testimonials[index].text}”</p>
          <div className="sps-testimonial-name">— {testimonials[index].name}</div>
        </div>

        <div className="sps-testimonial-controls">
          <button className="sps-testimonial-btn" onClick={prev}>‹</button>
          <button className="sps-testimonial-btn" onClick={next}>›</button>
        </div>

      </div>
    </section>
  );
}



function WorkProcess() {
  useEffect(() => {
    const css = `
/* ===== WORK PROCESS (IMAGE COLOR BASED) ===== */
.sps-process{
  padding:80px 6vw;
  background:#fff;
  font-family:Inter,system-ui;
  overflow:hidden;
}

/* HEADER */
.sps-process-head{
  text-align:center;
  margin-bottom:70px;
}

.sps-process-head small{
  display:block;
  font-size:13px;
  letter-spacing:0.18em;
  font-weight:800;
  color:#2F5D78;
  margin-bottom:14px;
}

.sps-process-head h2{
  font-size:42px;
  font-weight:900;
  line-height:1.25;
  margin:0;
  color:#102A3A;
}

.sps-process-head h2 span{
  color:#0E2A44;
}

/* STEPS GRID */
.sps-process-steps{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:40px;
}

/* STEP */
.sps-step{
  text-align:center;
}

/* CIRCLE */
.sps-step-circle{
  display:inline-block;
  position:relative;
  width:120px;
  height:120px;
  margin:0 auto 22px;
  border-radius:50%;
  border:10px solid rgba(14,42,68,0.35);

  background-color:#0E2A44;
  background-image:
    repeating-radial-gradient(
      rgba(111,163,200,0.35) 0px,
      rgba(14,42,68,0) 60%
    ),
    repeating-radial-gradient(
      rgba(47,93,120,1) 12%,
      rgba(255,255,255,1) 24px
    );

  box-shadow:
    inset 0 12px 18px rgba(255,255,255,0.25),
    inset 0 -8px 14px rgba(0,0,0,0.45),
    0 14px 30px rgba(14,42,68,0.45);

  display:grid;
  place-items:center;
  transform:scale(0.85);
  transition:transform .45s cubic-bezier(.32,0,.15,1);
}

/* HOVER */
.sps-step-circle:hover{
  transform:scale(1);
  cursor:pointer;
  animation:jelly 1.4s cubic-bezier(.1,.4,.9,.6) infinite;
}

/* ICON */
.sps-step-icon{
  font-size:36px;
  color:#EAF4FA;
  z-index:2;
}

/* NUMBER */
.sps-step-num{
  position:absolute;
  bottom:-14px;
  left:50%;
  transform:translateX(-50%);
  width:34px;
  height:34px;
  border-radius:50%;
  background:#fff;
  color:#0E2A44;
  display:grid;
  place-items:center;
  font-weight:900;
  font-size:14px;
  box-shadow:0 6px 16px rgba(14,42,68,0.45);
  z-index:3;
}

/* JELLY */
@keyframes jelly {
  from {
    background-size:60px 60px, 24px 24px;
  }
  50% {
    background-size:120px 120px, 100px 100px;
  }
  to {
    background-size:24px 24px, 140px 140px;
  }
}

/* TEXT */
.sps-step h4{
  font-size:18px;
  font-weight:800;
  margin-bottom:10px;
  color:#0E2A44;
}

.sps-step p{
  font-size:14px;
  line-height:1.6;
  color:#5F7F96;
  max-width:260px;
  margin:0 auto;
}

/* RESPONSIVE */
@media(max-width:1000px){
  .sps-process-steps{
    grid-template-columns:repeat(2,1fr);
    gap:50px;
  }
}

@media(max-width:600px){
  .sps-process{
    padding:60px 5vw;
  }
  .sps-process-head h2{
    font-size:32px;
  }
  .sps-process-steps{
    grid-template-columns:1fr;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sps-process">
      <div className="sps-process-head">
        <small>OUR WORK PROCESS</small>
        <h2>
          Reliable moving services built <br />
          <span>around you</span>
        </h2>
      </div>

      <div className="sps-process-steps">
        <div className="sps-step">
          <div className="sps-step-circle">
            <div className="sps-step-icon">📝</div>
            <div className="sps-step-num">1</div>
          </div>
          <h4>Get a Quote</h4>
          <p>Contact SPS Packers and Movers for a free customized quote.</p>
        </div>

        <div className="sps-step">
          <div className="sps-step-circle">
            <div className="sps-step-icon">📅</div>
            <div className="sps-step-num">2</div>
          </div>
          <h4>Plan Your Move</h4>
          <p>We plan schedules, packing and transport logistics.</p>
        </div>

        <div className="sps-step">
          <div className="sps-step-circle">
            <div className="sps-step-icon">🛡️</div>
            <div className="sps-step-num">3</div>
          </div>
          <h4>Safe & Secure Moving</h4>
          <p>High-quality packing and trained professionals.</p>
        </div>

        <div className="sps-step">
          <div className="sps-step-circle">
            <div className="sps-step-icon">📦</div>
            <div className="sps-step-num">4</div>
          </div>
          <h4>Unpack & Settle In</h4>
          <p>We help you unload and settle comfortably.</p>
        </div>
      </div>
    </section>
  );
}

function CustomerSatisfactionTimeline() {

  useEffect(() => {
    const css = `

/* ================== SECTION ================== */
.sps-cust3-section {
  padding: 90px 6vw;
  font-family: Inter, system-ui;
  background: #ffffff;
}

.sps-cust3-title {
  text-align: center;
  font-size: 42px;
  font-weight: 900;
  color: #1E1B4B;
  margin-bottom: 25px;
}

.sps-cust3-sub {
  max-width: 780px;
  margin: 0 auto 55px auto;
  text-align: center;
  font-size: 17px;
  color: #555;
  line-height: 1.8;
}

/* ================= TIMELINE ================= */
.sps-cust3-timeline {
  border-left: 5px solid #062242; /* BLUE */
  padding-left: 35px;
  max-width: 780px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* ITEM */
.sps-cust3-item {
  position: relative;
  padding-bottom: 5px;
  animation: fadeSlide 0.7s ease;
}

/* DOT */
.sps-cust3-item::before {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid #062242; /* BLUE OUTLINE */
  background: linear-gradient(90deg, #062242, #3F6C87); /* BLUE GRADIENT */
  position: absolute;
  left: -47px;
  top: 4px;
}

/* TEXT */
.sps-cust3-text {
  font-size: 18px;
  font-weight: 600;
  color: #2a2a2a;
}

/* ANIMATION */
@keyframes fadeSlide {
  from { opacity: 0; transform: translateX(-15px); }
  to { opacity: 1; transform: translateX(0); }
}

/* MOBILE */
@media(max-width: 700px) {
  .sps-cust3-title { font-size: 34px; }
  .sps-cust3-timeline { padding-left: 25px; }
  .sps-cust3-item::before { left: -35px; }
}

    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sps-cust3-section">

      <h2 className="sps-cust3-title">⭐ Customer Satisfaction Guaranteed</h2>

      <p className="sps-cust3-sub">
        We prioritize safety, speed, and service quality, making us one of the 
        most preferred packers and movers in Tamilnadu  
        <br /><br />
        Thousands of customers trust us because of:
      </p>

      <div className="sps-cust3-timeline">

        <div className="sps-cust3-item">
          <div className="sps-cust3-text">Consistent service quality</div>
        </div>

        <div className="sps-cust3-item">
          <div className="sps-cust3-text">Reliable staff</div>
        </div>

        <div className="sps-cust3-item">
          <div className="sps-cust3-text">Transparent pricing</div>
        </div>

        <div className="sps-cust3-item">
          <div className="sps-cust3-text">Fast response</div>
        </div>

        <div className="sps-cust3-item">
          <div className="sps-cust3-text">Excellent Google reviews</div>
        </div>

      </div>

    </section>
  );
}


function PopularServices() {

  const navigate = useNavigate();

  const openService = (path) => {
    navigate(`/services/${path}`);
  };

  useEffect(() => {

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

.popular-wrap{
  width:100%;
  padding:60px 8vw;
  background:#FFFFFF;
}

.popular-wrap h2{
  text-align:center;
  font-size:32px;
  font-weight:900;
  color:#062242; /* UPDATED BLUE */
  margin-bottom:40px;
}

/******** GRID ********/
.popular-grid{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:28px;
}

/******** CARD ********/
.service-card{
  background:#F6F1F8;
  border:1px solid #E7D8EF;
  border-radius:20px;
  overflow:hidden;
  box-shadow:0 10px 26px rgba(0,0,0,0.08);
  cursor:pointer;
  transition:0.25s ease;
}

.service-card:hover{
  transform:translateY(-5px);
  box-shadow:0 16px 32px rgba(0,0,0,0.12);
}

.card-img{
  width:100%;
  height:200px;
  background:#eee;
}
.card-img img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.card-body{
  padding:22px 20px;
}

.card-body h3{
  font-size:20px;
  font-weight:800;
  color:#062242; /* UPDATED BLUE */
  margin-bottom:8px;
}

.card-body p{
  font-size:15px;
  color:#062242; /* UPDATED BLUE */
  line-height:1.4;
  margin-bottom:16px;
}

/******** BUTTON — BLUE GRADIENT ********/
.card-btn{
  padding:10px 20px;
  background:linear-gradient(90deg,#062242,#3F6C87);
  color:white;
  border:none;
  border-radius:10px;
  font-weight:700;
  cursor:pointer;
  font-size:15px;
}

/******** MOBILE ********/
@media(max-width:900px){
  .popular-grid{
    grid-template-columns:1fr 1fr;
  }
}
@media(max-width:600px){
  .popular-grid{
    grid-template-columns:1fr;
  }
  .card-img{
    height:180px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  return (
    <section className="popular-wrap">

      <h2>Popular Moving Services</h2>

      <div className="popular-grid">

        {/* CARD 1 */}
        <div className="service-card" onClick={() => openService("house-shifting")}>
          <div className="card-img">
            <img src="/images/services/house.jpg" alt="House Shifting" />
          </div>
          <div className="card-body">
            <h3>House Shifting</h3>
            <p>Safe & reliable home relocation with premium packing materials.</p>
            <button className="card-btn">Learn More</button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="service-card" onClick={() => openService("office-shifting")}>
          <div className="card-img">
            <img src="/images/services/office.jpg" alt="Office Shifting" />
          </div>
          <div className="card-body">
            <h3>Office Shifting</h3>
            <p>Professional office moves with zero downtime and secure handling.</p>
            <button className="card-btn">Learn More</button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="service-card" onClick={() => openService("transportation")}>
          <div className="card-img">
            <img src="/images/services/transport.jpg" alt="Transportation" />
          </div>
          <div className="card-body">
            <h3>Transportation</h3>
            <p>Fast, safe & affordable vehicle and goods transportation services.</p>
            <button className="card-btn">Learn More</button>
          </div>
        </div>

      </div>

    </section>
  );
}




 function TopServices() {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(`/services/${path}`);
  };

  useEffect(() => {

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ================= SECTION WRAPPER ================= */
.top-services{
  width:100%;
  padding:50px 8vw;
  background:white;
}

.top-services h2{
  text-align:center;
  font-size:32px;
  font-weight:800;
  color:#062242; /* BLUE */
  margin-bottom:30px;
}

/* ================= GRID ================= */
.services-grid{
  display:grid;
  grid-template-columns:repeat(6, 1fr);
  gap:16px;
}

.service-box{
  background:white;
  padding:20px;
  border-radius:18px;
  text-align:center;
  border:1px solid #E7D8EF;
  box-shadow:0 6px 14px rgba(0,0,0,0.06);
  cursor:pointer;
  transition:0.25s ease;
}

.service-box:hover{
  transform:translateY(-4px);
  box-shadow:0 10px 20px rgba(0,0,0,0.10);
}

/* ICON */
.service-icon{
  width:60px;
  height:60px;
  border-radius:14px;
  margin:0 auto 12px;
  display:grid;
  place-items:center;
  font-size:26px;
  font-weight:800;
  color:white;
  background:linear-gradient(135deg,#062242,#3F6C87);
}

/* PARAGRAPH / TEXT */
.service-box p{
  font-size:16px;
  font-weight:600;
  color:#062242; /* BLUE */
}

/* ================= RESPONSIVE ================= */
@media(max-width:1100px){
  .services-grid{
    grid-template-columns:repeat(3, 1fr);
  }
}
@media(max-width:700px){
  .services-grid{
    grid-template-columns:repeat(2, 1fr);
  }
}
@media(max-width:450px){
  .services-grid{
    grid-template-columns:1fr;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  return (
    <section className="top-services">

      <h2>Our Quick Moving Services</h2>

      <div className="services-grid">

        <div className="service-box" onClick={() => goTo("house-shifting")}>
          <div className="service-icon">🏠</div>
          <p>House Shifting</p>
        </div>

        <div className="service-box" onClick={() => goTo("transportation")}>
          <div className="service-icon">🚚</div>
          <p>Transportation</p>
        </div>

        <div className="service-box" onClick={() => goTo("godown-shifting")}>
          <div className="service-icon">📦</div>
          <p>Godown Shifting</p>
        </div>

        <div className="service-box" onClick={() => goTo("ac-installation")}>
          <div className="service-icon">❄️</div>
          <p>AC Installation</p>
        </div>

        <div className="service-box" onClick={() => goTo("office-shifting")}>
          <div className="service-icon">🏢</div>
          <p>Office Shifting</p>
        </div>

        <div className="service-box" onClick={() => goTo("commercial-moves")}>
          <div className="service-icon">🏭</div>
          <p>Commercial Moves</p>
        </div>

      </div>

    </section>
  );
}



function WhyyChooseUs() {
  
  useEffect(() => {

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

.why-wrapper{
  width:100%;
  padding:60px 8vw;
  background:#FFFFFF;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
  align-items:center;
}

/* LEFT CONTENT */
.why-left h2{
  font-size:34px;
  font-weight:900;
  color:#062242; /* UPDATED BLUE */
  margin-bottom:20px;
}

.why-left p.sub{
  font-size:17px;
  color:#062242; /* UPDATED BLUE */
  margin-bottom:26px;
  max-width:480px;
}

.why-list{
  display:flex;
  flex-direction:column;
  gap:18px;
}

/* Each benefit item */
.why-item{
  display:flex;
  gap:14px;
  padding:14px 18px;
  background:#F6F1F8;
  border-radius:14px;
  border:1px solid #E7D8EF;
}

/* ICON UPDATED */
.why-icon{
  min-width:46px;
  height:46px;
  border-radius:14px;
  background:linear-gradient(135deg,#062242,#3F6C87); /* BLUE GRADIENT */
  color:white;
  display:grid;
  place-items:center;
  font-size:22px;
  font-weight:800;
}

/* TEXT UPDATED */
.why-text h4{
  font-size:18px;
  font-weight:700;
  color:#062242; /* UPDATED BLUE */
}

.why-text p{
  font-size:14px;
  color:#062242; /* UPDATED BLUE */
}

/* RIGHT IMAGE */
.why-img{
  display:flex;
  justify-content:center;
}
.why-img img{
  width:100%;
  max-width:500px;
  border-radius:24px;
  box-shadow:0 12px 30px rgba(0,0,0,0.12);
}

/* RESPONSIVE */
@media(max-width:900px){
  .why-wrapper{
    grid-template-columns:1fr;
    text-align:center;
  }
  .why-left h2{
    font-size:28px;
  }
  .why-list{
    align-items:center;
  }
  .why-item{
    max-width:380px;
    text-align:left;
  }
  .why-img img{
    max-width:350px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  return (
    <section className="why-wrapper">

      {/* LEFT CONTENT */}
      <div className="why-left">
        <h2>Why Choose Chennai Lal Packers & Movers?</h2>

        <p className="sub">
          We make every move safe, smooth and stress-free with our professional packing, expert handling and on-time delivery.
        </p>

        <div className="why-list">

          <div className="why-item">
            <div className="why-icon">📦</div>
            <div className="why-text">
              <h4>Professional Packing</h4>
              <p>High-quality packing materials to protect every item.</p>
            </div>
          </div>

          <div className="why-item">
            <div className="why-icon">🚚</div>
            <div className="why-text">
              <h4>On-Time Delivery</h4>
              <p>Fast, safe & secure transportation across India.</p>
            </div>
          </div>

          <div className="why-item">
            <div className="why-icon">🛡️</div>
            <div className="why-text">
              <h4>Insured & Verified</h4>
              <p>Trusted movers and complete insurance support.</p>
            </div>
          </div>

          <div className="why-item">
            <div className="why-icon">💰</div>
            <div className="why-text">
              <h4>Affordable Pricing</h4>
              <p>Clear quotes with no hidden charges.</p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="why-img">
        <img src="/images/bgserv/whymini.png" alt="Why Choose Chennai Lal Packers & Movers" />
      </div>

    </section>
  );
}

function StrengthsSection() {

  useEffect(() => {

    const css = `
* { box-sizing: border-box; margin: 0; padding: 0; }

/* WRAPPER */
.strengths-section {
  width: 100%;
  padding: 70px 6vw;
  background: #F6F1F8;
  text-align: center;
  font-family: Inter, system-ui;
}

/* TITLE */
.strengths-title {
  font-size: 34px;
  font-weight: 900;
  color: #062242; /* UPDATED BLUE */
  margin-bottom: 8px;
}

.strengths-sub {
  font-size: 17px;
  color: #062242; /* UPDATED BLUE */
  margin-bottom: 50px;
}

/* GRID */
.strengths-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px 40px;
}

/* ITEM */
.strength-item h3 {
  font-size: 38px;
  font-weight: 900;
  background: linear-gradient(90deg, #062242, #3F6C87); /* UPDATED BLUE GRADIENT */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 6px;
}

.strength-item h4 {
  font-size: 20px;
  font-weight: 800;
  color: #062242; /* UPDATED BLUE */
  margin-bottom: 6px;
}

.strength-item p {
  font-size: 14px;
  color: #062242; /* UPDATED BLUE */
}

/* RESPONSIVE */
@media(max-width: 900px) {
  .strengths-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
  }
}

@media(max-width: 600px) {
  .strengths-grid {
    grid-template-columns: 1fr;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  return (
    <section className="strengths-section">

      <h2 className="strengths-title">Our Strengths, Which Makes Us</h2>
      <p className="strengths-sub">The Most Preferred Moving Brand</p>

      <div className="strengths-grid">

        <div className="strength-item">
          <h3>10+</h3>
          <h4>Years Of Trust</h4>
          <p>Delivering safe moves since 2025</p>
        </div>

        <div className="strength-item">
          <h3>98+</h3>
          <h4>Moves Annually</h4>
          <p>Across Chennai & all major cities</p>
        </div>

        <div className="strength-item">
          <h3>2+</h3>
          <h4>Million Sq.Ft</h4>
          <p>Secure warehousing space</p>
        </div>

        <div className="strength-item">
          <h3>60+</h3>
          <h4>Trained Manpower</h4>
          <p>Professional team for safe moves</p>
        </div>

        <div className="strength-item">
          <h3>100+</h3>
          <h4>Branches PAN India</h4>
          <p>Serving 100+ locations</p>
        </div>

        <div className="strength-item">
          <h3>100+</h3>
          <h4>Vehicles</h4>
          <p>Fleet for every move requirement</p>
        </div>

      </div>
    </section>
  );
}


 function MovingRoutesStrip() {

  useEffect(() => {

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* WRAPPER */
.routes-strip {
  width:100%;
  background: linear-gradient(90deg, #062242, #3F6C87); /* UPDATED BLUE GRADIENT */
  overflow:hidden;
  padding:12px 0;
  white-space: nowrap;
  position:relative;
}

/* MOVING TEXT */
.routes-track {
  display:inline-block;
  white-space:nowrap;
  animation: scrollText 130s linear infinite; /* SLOW SPEED */
}

.routes-item {
  display:inline-block;
  margin:0 55px;
  font-size:18px;
  font-weight:700;
  color:#ffffff; /* WHITE TEXT (BEST FOR DARK BLUE) */
  text-shadow:0px 1px 3px rgba(0,0,0,0.25);
}

/* SCROLL ANIMATION */
@keyframes scrollText {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

/* MOBILE */
@media(max-width:600px){
  .routes-item {
    font-size:15px;
    margin:0 28px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  const districts = [
    "Chennai","Coimbatore","Salem","Madurai","Tirunelveli","Erode","Dindigul","Tiruppur","Thanjavur",
    "Trichy","Vellore","Kanchipuram","Tiruvallur","Cuddalore","Nagapattinam","Kanyakumari","Ramanathapuram",
    "Thoothukudi","Sivagangai","Virudhunagar","Krishnagiri","Dharmapuri","Karur","Namakkal","Nilgiris",
    "Ariyalur","Perambalur","Pudukkottai","Tiruvarur","Tiruvannamalai","Tenkasi","Ranipet","Chengalpattu",
    "Kallakurichi","Villupuram","Mayiladuthurai","Tirupattur"
  ];

  return (
    <div className="routes-strip">
      <div className="routes-track">

        {districts.map((d, i) => (
          <span key={i} className="routes-item">
            Packers & Movers in {d}
          </span>
        ))}

        {/* Duplicate for infinite scroll */}
        {districts.map((d, i) => (
          <span key={"loop"+i} className="routes-item">
            Packers & Movers in {d}
          </span>
        ))}

      </div>
    </div>
  );
}


function WhatWeProvide() {

  useEffect(() => {
    const css = `
/* ===========================================
   WHAT WE PROVIDE — SECTION
=========================================== */
.services-section {
  padding: 90px 6vw;
  text-align: center;
  background: #ffffff;
}

/* TITLE */
.services-title {
  font-size: 36px;
  font-weight: 900;
  color: #062242;
  margin-bottom: 12px;
}

.services-title span {
  background: linear-gradient(135deg, #062242, #3F6C87);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.services-subtitle {
  max-width: 640px;
  margin: 0 auto 40px auto;
  color: #3F6C87;
  font-size: 16px;
}

/* GRID */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

/* CARD */
.service-card2 {
  position: relative;
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  transition: all 0.4s ease;
}

.service-card2::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(6, 34, 66, 0.78);
  transition: 0.35s ease;
}

.service-card2:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 26px rgba(0,0,0,0.25);
}

.service-card2:hover::before {
  background: rgba(6, 34, 66, 0.55);
}

/* CARD CONTENT */
.service-inner {
  position: absolute;
  z-index: 5;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
}

.service-icon {
  font-size: 38px;
  margin-bottom: 12px;
  color: #ffffff;
}

.service-text {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* RESPONSIVE */
@media(max-width:1100px){
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media(max-width:600px){
  .services-grid {
    grid-template-columns: 1fr;
  }
}

/* ===========================================
   GLOBAL REVEAL ANIMATIONS
=========================================== */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.9s ease;
}
.reveal.show {
  opacity: 1;
  transform: translateY(0);
}

.reveal-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: all 0.9s ease;
}
.reveal-left.show {
  opacity: 1;
  transform: translateX(0);
}

.reveal-right {
  opacity: 0;
  transform: translateX(40px);
  transition: all 0.9s ease;
}
.reveal-right.show {
  opacity: 1;
  transform: translateX(0);
}

.reveal-zoom {
  opacity: 0;
  transform: scale(0.88);
  transition: all 0.9s ease;
}
.reveal-zoom.show {
  opacity: 1;
  transform: scale(1);
}

.reveal-delay-1 { transition-delay: .15s; }
.reveal-delay-2 { transition-delay: .30s; }
.reveal-delay-3 { transition-delay: .45s; }
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    /* GLOBAL OBSERVER FOR REVEAL ANIMATION */
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  const services = [
    { title: "House Shiffting", img: "/images/bgserv/bghousemini.png", icon: "📦" },
    { title: "Transportation", img: "/images/bgserv/transmini.png", icon: "🚚" },
    { title: "Commercial Moves", img: "/images/bgserv/bgcommmini.png", icon: "🏢" },
    { title: "Gowdown Shiffting", img: "/images/bgserv/godownmin.png", icon: "💼" },
    { title: "Office Shiffting", img: "/images/bgserv/offs.png", icon: "🅿️" },
    { title: "AC Installation", img: "/images/bgserv/bgacmini.png", icon: "📦" },

  ];

  return (
    <section className="services-section reveal">

      <h2 className="services-title reveal-left">
        What We <span>Provide</span>
      </h2>

      <p className="services-subtitle reveal">
        We ensure reliable, safe and professional moving solutions for homes,
        offices and businesses with 100% satisfaction.
      </p>

      <div className="services-grid reveal">
        {services.map((s, i) => (
          <div
            key={i}
            className={"service-card2 reveal-zoom reveal-delay-" + ((i % 3) + 1)}
            style={{ backgroundImage: `url(${s.img})` }}
          >
            <div className="service-inner">
              {/* <div className="service-icon">{s.icon}</div> */}
              <div className="service-text">{s.title}</div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}




 function FeaturesDiamond() {

  useEffect(() => {
    const css = `
/* ===========================================
   SECTION WRAPPER
=========================================== */
.features-section {
  width: 100%;
  // padding: 90px ;
  background: #ffffff;
  text-align: center;
  font-family: Inter, system-ui;
}

/* TITLE */
.features-title {
  font-size: 38px;
  font-weight: 900;
  color: #062242;
  margin-bottom: 12px;
}
.features-title span {
  background: linear-gradient(135deg, #062242, #3F6C87);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.features-sub {
  max-width: 650px;
  margin: 0 auto 70px auto;
  font-size: 16px;
  color: #3F6C87;
  line-height: 1.7;
}

/* ===========================================
   GRID WRAPPER (4 in a row)
=========================================== */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  justify-items: center;
}

/* ===========================================
   DIAMOND BOX (SVG Icon)
=========================================== */
.feature-card {
  text-align: center;
  width: 100%;
}

.diamond-box {
  width: 150px;
  height: 150px;
  margin: 0 auto 25px auto;
  transform: rotate(45deg);
  background: linear-gradient(135deg, #062242, #3F6C87);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease;
  box-shadow: 0 12px 26px rgba(0,0,0,0.15);
}

.diamond-box svg {
  width: 70px;
  height: 70px;
  transform: rotate(-45deg);
  fill: #ffffff;
}

/* HOVER EFFECT */
.diamond-box:hover {
  transform: rotate(45deg) translateY(-12px) scale(1.08);
  box-shadow: 0 18px 32px rgba(6,34,66,0.35);
}

/* TEXTS */
.feature-card h3 {
  font-size: 18px;
  font-weight: 800;
  color: #062242;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 14px;
  color: #3F6C87;
  max-width: 260px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ===========================================
   RESPONSIVE
=========================================== */
@media(max-width:1000px){
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 45px;
  }
}
@media(max-width:600px){
  .features-grid {
    grid-template-columns: 1fr;
  }
}

/* ===========================================
   GLOBAL REVEAL ANIMATION
=========================================== */
.reveal { opacity:0; transform:translateY(30px); transition:0.9s ease; }
.reveal.show { opacity:1; transform:translateY(0); }

.reveal-zoom { opacity:0; transform:scale(0.85); transition:0.9s ease; }
.reveal-zoom.show { opacity:1; transform:scale(1); }

.reveal-delay-1 { transition-delay:.15s; }
.reveal-delay-2 { transition-delay:.30s; }
.reveal-delay-3 { transition-delay:.45s; }
.reveal-delay-4 { transition-delay:.60s; }
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    /* GLOBAL OBSERVER */
    const elements = document.querySelectorAll(".reveal, .reveal-zoom");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.15 }
    );
    elements.forEach(el => obs.observe(el));
  }, []);

  const features = [
    {
      title: "Fully Insured",
      desc: "Full insurance coverage for total protection during your move.",
      icon: (
        `<svg viewBox="0 0 24 24"><path d="M12 1l8 4v6c0 5.25-3.75 10-8 12-4.25-2-8-6.75-8-12V5l8-4z"></path></svg>`
      )
    },
    {
      title: "On-Time Delivery",
      desc: "On-time delivery with real-time tracking and planned execution.",
      icon: (
        `<svg viewBox="0 0 24 24"><path d="M12 8V12L15 14M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"></path></svg>`
      )
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock assistance to help you at every stage.",
      icon: (
        `<svg viewBox="0 0 24 24"><path d="M12 1a11 11 0 0111 11 11 11 0 01-11 11A11 11 0 011 12 11 11 0 0112 1zm0 5a2 2 0 100 4 2 2 0 000-4zm0 6c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>`
      )
    },
    {
      title: "Transparent Pricing",
      desc: "Clear, honest quotations with no hidden charges.",
      icon: (
        `<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.25 3.75 10 9 12 5.25-2 9-6.75 9-12V5l-9-4zm1 7h4l-5 5-5-5h4V4h2v4z"></path></svg>`
      )
    }
  ];

  return (
    <section className="features-section reveal">

      <h2 className="features-title reveal">
        Our <span>Features</span>
      </h2>

      <p className="features-sub reveal">
        The most trusted packers & movers services designed for safety, speed, and reliability.
      </p>

      <div className="features-grid reveal">

        {features.map((f, i) => (
          <div key={i} className="feature-card reveal-zoom reveal-delay-1">

            <div
              className="diamond-box"
              dangerouslySetInnerHTML={{ __html: f.icon }}
            />

            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
export default function Home() {

  const navigate = useNavigate();

  useEffect(() => {

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }
body{ font-family:Inter, system-ui; }

/* ================= HERO SECTION ================= */
.hero-container{
  width:100%;
  min-height:90vh;
  padding:70px 8vw;
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  background:#F6F1F8; /* NOT CHANGED */
  gap:40px;
}

/* LEFT IMAGE */
.hero-img{
  display:flex;
  justify-content:center;
  align-items:center;
}
.hero-img img{
  width:100%;
  max-width:520px;
}

/* RIGHT CONTENT */
.hero-content h1{
  font-size:46px;
  font-weight:900;
  color:#15304D;
  line-height:1.2;
  margin-bottom:12px;
}

.hero-content h1 span{
  background:linear-gradient(90deg,#15304D,#486C85);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.hero-content p{
  font-size:17px;
  color:#486C85;
  max-width:480px;
  margin-bottom:22px;
}

/* Buttons */
.hero-btns{
  display:flex;
  gap:14px;
  margin-bottom:24px;
}
.hero-btn{
  padding:12px 24px;
  border-radius:10px;
  font-weight:700;
  cursor:pointer;
  border:none;
  transition:0.3s ease;
}

.hero-primary{
  background:linear-gradient(90deg,#15304D,#486C85);
  color:white;
}

.hero-primary:hover{
  box-shadow:0 0 18px rgba(72,108,133,0.6);
}

.hero-outline{
  background:white;
  border:2px solid #486C85;
  color:#15304D;
}

.hero-outline:hover{
  background:#eef4f8;
}

/* Badges */
.hero-badges{
  display:flex;
  gap:16px;
  flex-wrap:wrap;
}
.hero-badge{
  background:white;
  padding:10px 18px;
  border-radius:30px;
  font-size:14px;
  font-weight:600;
  color:#15304D;
  box-shadow:0 4px 10px rgba(0,0,0,0.08);
  border:1px solid #c7dfff;
}

/* ================= MOBILE ================= */
@media(max-width:900px){
  .hero-container{
    grid-template-columns:1fr;
    text-align:center;
    padding:50px 6vw;
  }

  .hero-img img{
    max-width:340px;
  }

  .hero-btns{
    justify-content:center;
  }

  .hero-badges{
    justify-content:center;
  }

  .hero-content h1{
    font-size:34px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  /* =================== BUTTON ACTIONS ==================== */

  const handleFreeQuote = () => {
    navigate("/contact");
  };

  const handleCallNow = () => {
    window.location.href = "tel:+919176543210";
  };

  return (
    <>
      <section className="hero-container">

        {/* LEFT IMAGE */}
        <div className="hero-img">
          <img src="/images/ggrgl.png" alt="Chennai Lal Packers & Movers" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-content">

          <h1>
            Fast & Safe <span>Relocation Services</span>
          </h1>

          <p>
            Chennai Lal Packers & Movers offers reliable and affordable relocation
            solutions across Chennai & all major cities.
          </p>

          {/* BUTTONS */}
          <div className="hero-btns">
            <button className="hero-btn hero-primary" onClick={handleFreeQuote}>
              Get Free Quote
            </button>

            <button className="hero-btn hero-outline" onClick={handleCallNow}>
              Call Now
            </button>
          </div>

          <div className="hero-badges">
            <div className="hero-badge">✔ Verified Movers</div>
            <div className="hero-badge">🚚 Fast Delivery</div>
            <div className="hero-badge">🛡 Insurance Available</div>
          </div>

        </div>

      </section>

  <AboutSlide /> 
    {/* <TopServices /> */}
    <WhatWeProvide />
  <WorkProcess />
  <WhyyChooseUs />
  {/* <PopularServices /> */}
  <CustomerSatisfactionTimeline />
  <FeaturesDiamond />
 <StrengthsSection />
 <MovingRoutesStrip />
 <Testimonials />


    </>
  );
}



// export default function Home() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     from: "",
//     to: "",
//     service: ""
//   });

//   const heroLeftRef = useRef(null);
//   const cardRef = useRef(null);
//   const featureRefs = useRef([]);

//   const handleHeroSubmit = (e) => {
//     e.preventDefault();

//     const message = `
// New Moving Enquiry

// Name: ${form.name}
// Phone: ${form.phone}
// From City: ${form.from}
// To City: ${form.to}
// Service Type: ${form.service}
//     `;

//     const ownerNumber = "917550057453";
//     const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(
//       message
//     )}`;

//     window.open(whatsappURL, "_blank");
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("show");
//         });
//       },
//       { threshold: 0.25 }
//     );

//     // Trigger immediately on visit
// setTimeout(() => {
//   heroLeftRef.current?.classList.add("show");
//   cardRef.current?.classList.add("show");

//   featureRefs.current.forEach((el, i) => {
//     if (el) {
//       setTimeout(() => el.classList.add("show"), i * 150);
//     }
//   });
// }, 200);

//     featureRefs.current.forEach((el) => el && observer.observe(el));

//     const css = `
// *{ box-sizing:border-box; }
// html,body{
//   margin:0;
//   padding:0;
//   overflow-x:hidden;
//   background:#FDFCFC;
// }

// /* ================= HERO SECTION WITH IMAGE BG ================= */
// .heroq-section{
//   min-height:100vh;

//   /* IMAGE + BRAND OVERLAY (like screenshot) */
//   background:
//     linear-gradient(
//       rgba(30,20,40,0.70),
//       rgba(30,20,40,0.70)
//     ),
//     linear-gradient(
//       120deg,
//       rgba(150,5,70,0.55),
//       rgba(126,49,75,0.55)
//     ),
//     url("/images/truck.png") center/cover no-repeat;

//   display:grid;
//   grid-template-columns:1.1fr 0.9fr;
//   align-items:center;
//   padding:80px 6vw 40px;
//   gap:40px;
//   font-family:Inter,system-ui;
// }

// /* ===== ANIMATION ===== */
// .fade-left,.fade-right,.fade-up{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all 0.9s cubic-bezier(.22,.61,.36,1);
// }
// .fade-left{   opacity:0;
//   transform:translateX(-80px);}
// .fade-right{ opacity:0;
//   transform:translateX(80px); }
// .show{ opacity:1; transform:translate(0); }

// /* ===== LEFT CONTENT ===== */
// .heroq-left h1{
//   font-size:46px;
//   font-weight:900;
//   line-height:1.2;
//   color:#ffffff;
// }

// .heroq-left h1 span{
//   color:#EED3D6;
// }

// .heroq-left p.sub{
//   margin:16px 0 26px;
//   font-size:17px;
//   color:#FDFCFC;
//   max-width:520px;
// }

// .heroq-features{
//   display:flex;
//   flex-direction:column;
//   gap:18px;
// }

// .heroq-feature{
//   display:flex;
//   gap:14px;
//   color:#fff;
// }

// .heroq-icon{
//   min-width:42px;
//   height:42px;
//   border-radius:50%;
//   background:#960546;
//   color:#fff;
//   display:grid;
//   place-items:center;
//   font-weight:800;
// }

// /* ===== CARD (UNCHANGED STYLE) ===== */
// .heroq-card{
//   // background:#ffffff;
//     // background: rgba(255, 255, 255, 0.55);   glass
//      backdrop-filter: blur(18px);
//   -webkit-backdrop-filter: blur(18px); /* glass */
//   border-radius:22px;
//   padding:28px;
//   max-width:520px;
//   width:100%;
//   justify-self:end;
//   // box-shadow:0 22px 50px rgba(0,0,0,0.35);
//   border: 1.5px solid rgba(183, 87, 120, 0.35); /* soft rose border */

//   box-shadow:
//     0 30px 60px rgba(150, 5, 70, 0.25),
//     inset 0 1px 0 rgba(81, 4, 67, 0.55);

//   transition: all 0.35s ease;
// }

// .heroq-card h3{
//   margin-bottom:16px;
//   color:#960546;
// }

// /* ===== FORM ===== */
// .heroq-card form{
//   display:flex;
//   flex-direction:column;
//   gap:14px;
// }

// .heroq-card input,
// .heroq-card select{
//   width:100%;
//   padding:16px;
//   border-radius:12px;
//   border:1.5px solid #EED3D6;
//   font-size:16px;
//   background:#FDFCFC;
// }

// .heroq-card input:focus,
// .heroq-card select:focus{
//   outline:none;
//   border-color:#B95778;
// }

// .heroq-btn{
//   margin-top:10px;
//   padding:16px;
//   border:none;
//   border-radius:12px;
//   background:linear-gradient(90deg,#960546,#B95778);
//   color:#fff;
//   font-weight:800;
//   font-size:17px;
//   cursor:pointer;
//   transition:all .25s ease;
// }

// .heroq-btn:hover{
//   transform:translateY(-2px);
//   box-shadow:0 12px 25px rgba(150,5,70,0.45);
// }

// /* ===== MOBILE ===== */
// @media(max-width:900px){
//   .heroq-section{
//     grid-template-columns:1fr;
//     padding:90px 5vw 40px;
//   }

//   .heroq-card{
//     max-width:100%;
//     margin-top:30px;
//   }

//   .heroq-left h1{
//     font-size:34px;
//   }
// }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     return () => observer.disconnect();
//   }, []);

//   return (

//     <>
//     <section className="heroq-section">
//       <div className="heroq-left fade-left" ref={heroLeftRef}>
//         <h1>
//           Reliable Packers & Movers <span>Across India</span>
//         </h1>

//         <p className="sub">
//           Safe, affordable, and professional relocation services you can trust.
//         </p>

//         <div className="heroq-features">
//           {[
//             ["₹", "Free Quotes", "No hidden charges"],
//             ["✓", "Verified Experts", "Trained professionals"],
//             ["★", "On-Time Delivery", "Damage-free shifting"]
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="heroq-feature fade-up"
//               ref={(el) => (featureRefs.current[i] = el)}
//               style={{ transitionDelay: `${i * 0.15}s` }}
//             >
//               <div className="heroq-icon">{item[0]}</div>
//               <div>
//                 <h4>{item[1]}</h4>
//                 <p>{item[2]}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="heroq-card fade-right" ref={cardRef}>
//         <h3>Get Free Moving Quote</h3>

//         <form onSubmit={handleHeroSubmit}>
//           <input placeholder="Full Name" required
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//           />
//           <input placeholder="Mobile Number" required
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           />
//           <input placeholder="From City" required
//             value={form.from}
//             onChange={(e) => setForm({ ...form, from: e.target.value })}
//           />
//           <input placeholder="To City" required
//             value={form.to}
//             onChange={(e) => setForm({ ...form, to: e.target.value })}
//           />

//           <select required
//             value={form.service}
//             onChange={(e) => setForm({ ...form, service: e.target.value })}
//           >
//             <option value="">Select Service</option>
//             <option>House Shifting</option>
//             <option>Office Shifting</option>
//             <option>Commercial Moves</option>
//           </select>

//           <button className="heroq-btn">Get Free Quote</button>
//         </form>
//       </div>
//     </section>

//  <AboutSlide /> 
//  <ServicesOptions />
//  <StatsWaveStrip />

//  <WorkProcess />
//  <CustomerSatisfactionTimeline />
//  <PeopleShowcase />
// <Testimonials />
// </>
//   );
// }


