import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";



function AboutSlide() {
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const sectionRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    /* ===== COUNTER ANIMATION (SMOOTHER) ===== */
    const animateCount = (el, target, suffix = "") => {
      let start = 0;
      const duration = 1800;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        el.innerText = value + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    };

    /* ===== INTERSECTION OBSERVER ===== */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;

            sectionRef.current.classList.add("sps-visible");

            animateCount(stat1Ref.current, 92, "%");
            animateCount(stat2Ref.current, 50000, "+");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    /* ===== STYLES ===== */
    const css = `
/* ===== SECTION ===== */
.sps-about {
  padding: 0px 6vw;
  // background: #F6F1F8;
  font-family: Inter, system-ui;
  overflow: hidden;
}

/* ANIMATION BASE */
.sps-about-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  opacity: 0;
  transform: translateY(60px);
  transition: all 1s ease;
}

.sps-visible .sps-about-wrap {
  opacity: 1;
  transform: translateY(0);
}

/* IMAGE */
.sps-about-img img {
  width: 100%;
  max-height: 520px;
  object-fit: cover;
  border-radius: 22px;
  box-shadow: 0 20px 50px rgba(21, 48, 77, 0.25);
  transition: transform 0.6s ease;
}

.sps-about-img img:hover {
  transform: scale(1.05);
}

/* CONTENT */
.sps-about-content small {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #486C85;
  display: inline-block;
  margin-bottom: 18px;
}

.sps-about-content h2 {
  font-size: 44px;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #15304D;
}

.sps-about-content h2 span {
  background: linear-gradient(90deg,#15304D,#486C85);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sps-about-content p {
  font-size: 17px;
  line-height: 1.8;
  color: #486C85;
  max-width: 540px;
}

/* STATS */
.sps-about-stats {
  display: flex;
  gap: 50px;
  margin: 40px 0;
  flex-wrap: wrap;
}

.sps-stat h3 {
  font-size: 40px;
  font-weight: 900;
  background: linear-gradient(90deg,#15304D,#486C85);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 6px;
}

.sps-stat p {
  font-size: 14px;
  color: #486C85;
  max-width: 220px;
}

/* BUTTON */
.sps-about-btn {
  display: inline-block;
  padding: 15px 34px;
  background: linear-gradient(90deg,#15304D,#486C85);
  color: white;
  font-weight: 800;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.4s ease;
}

.sps-about-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(72,108,133,0.4);
}

/* ===== TABLET ===== */
@media (max-width: 1024px) {
  .sps-about-wrap {
    gap: 40px;
  }

  .sps-about-content h2 {
    font-size: 36px;
  }
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .sps-about {
    padding: 60px 5vw;
  }

  .sps-about-wrap {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .sps-about-content p {
    margin: 0 auto;
  }

  .sps-about-stats {
    justify-content: center;
  }

  .sps-about-content h2 {
    font-size: 28px;
  }

  .sps-about-img img {
    max-height: 380px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sps-about" ref={sectionRef}>
      <div className="sps-about-wrap">

        <div className="sps-about-img">
          <img
            src="/images/bgserv/setting.png"
            alt="Chennai Lal Packers and Movers Team"
          />
        </div>

        <div className="sps-about-content">
          <small>ABOUT CHENNAI LAL PACKERS & MOVERS</small>

          <h2>
            Setting new standards in the <span>moving industry</span>
          </h2>

          <p>
            CHENNAI LAL Packers and Movers is committed to delivering reliable,
            secure, and professional relocation services. With a strong focus
            on customer satisfaction, we handle every move with care,
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
  const intervalRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  /* ===== CSS ===== */
  useEffect(() => {
    const css = `
/* ================= SECTION ================= */
.sps-testimonial-section {
  // padding: 90px 6vw;
  font-family: Inter, system-ui;
  // background: #f8fbff;
  text-align: center;
  overflow: hidden;
}

.sps-testimonial-title {
  font-size: 44px;
  font-weight: 900;
  color: #062242;
  margin-bottom: 60px;
}

/* ================= SLIDER ================= */
.sps-testimonial-slider {
  max-width: 800px;
  margin: auto;
  position: relative;
}

/* ================= CARD ================= */
.sps-testimonial-card {
  position: relative;
  background: white;
  border-radius: 24px;
  padding: 60px 40px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.08);
  transition: all 0.6s ease;
  animation: fadeSlide 0.7s ease;
}

@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* QUOTE ICON BACKGROUND */
.sps-testimonial-card::before {
  content: "“";
  position: absolute;
  font-size: 120px;
  color: rgba(6,34,66,0.05);
  top: 20px;
  left: 30px;
  font-weight: 900;
}

/* ================= IMAGE ================= */
.sps-testimonial-img {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
  margin-bottom: 25px;
  border: 5px solid #062242;
  transition: transform 0.4s ease;
}

.sps-testimonial-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sps-testimonial-img:hover {
  transform: scale(1.1);
}

/* ================= TEXT ================= */
.sps-testimonial-text {
  font-size: 17px;
  line-height: 1.8;
  color: #062242;
  margin-bottom: 25px;
  padding: 0 10px;
  font-weight: 500;
}

.sps-testimonial-name {
  font-size: 18px;
  font-weight: 800;
  color: #062242;
}

/* ================= CONTROLS ================= */
.sps-testimonial-controls {
  margin-top: 35px;
  display: flex;
  justify-content: center;
  gap: 25px;
}

.sps-testimonial-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 22px;
  color: white;
  background: linear-gradient(135deg,#062242,#3F6C87);
  box-shadow: 0 12px 25px rgba(6,34,66,0.3);
  transition: all 0.3s ease;
}

.sps-testimonial-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 35px rgba(6,34,66,0.4);
}

/* ================= TABLET ================= */
@media (max-width: 992px) {
  .sps-testimonial-title {
    font-size: 36px;
  }

  .sps-testimonial-card {
    padding: 50px 30px;
  }
}

/* ================= MOBILE ================= */
@media (max-width: 600px) {
  .sps-testimonial-section {
    padding: 60px 5vw;
  }

  .sps-testimonial-title {
    font-size: 28px;
    margin-bottom: 40px;
  }

  .sps-testimonial-card {
    padding: 40px 20px;
  }

  .sps-testimonial-text {
    font-size: 15px;
  }

  .sps-testimonial-btn {
    width: 42px;
    height: 42px;
    font-size: 18px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sps-testimonial-section">

      <h2 className="sps-testimonial-title">
        What Our Clients Say
      </h2>

      <div className="sps-testimonial-slider">

        <div className="sps-testimonial-card" key={index}>
          <div className="sps-testimonial-img">
            <img src={testimonials[index].img} alt="client" />
          </div>

          <p className="sps-testimonial-text">
            “{testimonials[index].text}”
          </p>

          <div className="sps-testimonial-name">
            — {testimonials[index].name}
          </div>
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

/* JELLY ANIMATION */
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
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sps-cust3-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const css = `

/* ================== SECTION ================== */
.sps-cust3-section {
  // padding: 100px 6vw;
  font-family: Inter, system-ui;
  // background: #ffffff;
  overflow: hidden;
}

/* TITLE */
.sps-cust3-title {
  text-align: center;
  font-size: 44px;
  font-weight: 900;
  color: #1E1B4B;
  margin-bottom: 25px;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}

.sps-cust3-visible .sps-cust3-title {
  opacity: 1;
  transform: translateY(0);
}

.sps-cust3-sub {
  max-width: 780px;
  margin: 0 auto 70px auto;
  text-align: center;
  font-size: 17px;
  color: #555;
  line-height: 1.8;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease 0.2s;
}

.sps-cust3-visible .sps-cust3-sub {
  opacity: 1;
  transform: translateY(0);
}

/* ================= TIMELINE ================= */
.sps-cust3-timeline {
  position: relative;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding-left: 45px;
}

/* ANIMATED LINE */
.sps-cust3-timeline::before {
  content: "";
  position: absolute;
  left: 12px;
  top: 0;
  width: 4px;
  height: 0;
  background: linear-gradient(to bottom,#062242,#3F6C87);
  transition: height 1.2s ease;
}

.sps-cust3-visible .sps-cust3-timeline::before {
  height: 100%;
}

/* ITEM */
.sps-cust3-item {
  position: relative;
  opacity: 0;
  transform: translateX(-40px);
  transition: 0.7s ease;
}

.sps-cust3-visible .sps-cust3-item {
  opacity: 1;
  transform: translateX(0);
}

/* STAGGER */
.sps-cust3-visible .sps-cust3-item:nth-child(1){ transition-delay:0.3s; }
.sps-cust3-visible .sps-cust3-item:nth-child(2){ transition-delay:0.5s; }
.sps-cust3-visible .sps-cust3-item:nth-child(3){ transition-delay:0.7s; }
.sps-cust3-visible .sps-cust3-item:nth-child(4){ transition-delay:0.9s; }
.sps-cust3-visible .sps-cust3-item:nth-child(5){ transition-delay:1.1s; }

/* DOT */
.sps-cust3-item::before {
  content: "";
  width: 22px;
  height: 22px;
  border-radius: 50%;
  position: absolute;
  left: -33px;
  top: 5px;
  background: linear-gradient(135deg,#062242,#3F6C87);
  box-shadow: 0 0 0 6px rgba(6,34,66,0.1);
  transition: 0.3s ease;
}

.sps-cust3-item:hover::before {
  transform: scale(1.2);
}

/* TEXT CARD */
.sps-cust3-text {
  font-size: 18px;
  font-weight: 600;
  color: #2a2a2a;
  background: #f9fbff;
  padding: 18px 22px;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  transition: 0.3s ease;
}

.sps-cust3-item:hover .sps-cust3-text {
  transform: translateX(6px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
}

/* ================= TABLET ================= */
@media(max-width:900px){
  .sps-cust3-title {
    font-size: 36px;
  }
}

/* ================= MOBILE ================= */
@media(max-width:600px){
  .sps-cust3-section {
    padding: 70px 5vw;
  }

  .sps-cust3-title {
    font-size: 28px;
  }

  .sps-cust3-sub {
    font-size: 15px;
  }

  .sps-cust3-timeline {
    padding-left: 35px;
    gap: 35px;
  }

  .sps-cust3-item::before {
    left: -28px;
  }

  .sps-cust3-text {
    font-size: 15px;
  }
}

    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sps-cust3-section" ref={sectionRef}>

      <h2 className="sps-cust3-title">
        ⭐ Customer Satisfaction Guaranteed
      </h2>

      <p className="sps-cust3-sub">
        We prioritize safety, speed, and service quality, making us one of the
        most preferred packers and movers in Tamilnadu.
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






function WhyyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("why-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== SECTION ===== */
.why-wrapper{
  width:100%;
  padding:0px 8vw;
  // background:#FFFFFF;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:60px;
  align-items:center;
  overflow:hidden;
}

/* LEFT CONTENT */
.why-left{
  opacity:0;
  transform:translateX(-60px);
  transition:0.9s ease;
}

.why-visible .why-left{
  opacity:1;
  transform:translateX(0);
}

.why-left h2{
  font-size:40px;
  font-weight:900;
  color:#062242;
  margin-bottom:24px;
  line-height:1.3;
}

.why-left p.sub{
  font-size:18px;
  color:#3F6C87;
  margin-bottom:36px;
  max-width:520px;
  line-height:1.7;
}

/* BENEFITS LIST */
.why-list{
  display:flex;
  flex-direction:column;
  gap:22px;
}

/* EACH ITEM */
.why-item{
  display:flex;
  gap:18px;
  padding:18px 22px;
  background:#F6F1F8;
  border-radius:16px;
  border:1px solid #E7D8EF;
  transition:all 0.4s ease;
  opacity:0;
  transform:translateY(40px);
}

.why-visible .why-item{
  opacity:1;
  transform:translateY(0);
}

/* STAGGER */
.why-visible .why-item:nth-child(1){ transition-delay:0.2s; }
.why-visible .why-item:nth-child(2){ transition-delay:0.4s; }
.why-visible .why-item:nth-child(3){ transition-delay:0.6s; }
.why-visible .why-item:nth-child(4){ transition-delay:0.8s; }

/* HOVER EFFECT */
.why-item:hover{
  transform:translateY(-6px);
  box-shadow:0 18px 35px rgba(6,34,66,0.15);
}

/* ICON */
.why-icon{
  min-width:50px;
  height:50px;
  border-radius:14px;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:white;
  display:grid;
  place-items:center;
  font-size:22px;
  font-weight:800;
  transition:0.3s;
}

.why-item:hover .why-icon{
  transform:scale(1.1);
}

/* TEXT */
.why-text h4{
  font-size:18px;
  font-weight:800;
  color:#062242;
  margin-bottom:4px;
}

.why-text p{
  font-size:14px;
  color:#486C85;
  line-height:1.6;
}

/* RIGHT IMAGE */
.why-img{
  display:flex;
  justify-content:center;
  opacity:0;
  transform:translateX(60px);
  transition:0.9s ease;
}

.why-visible .why-img{
  opacity:1;
  transform:translateX(0);
}

.why-img img{
  width:100%;
  max-width:520px;
  border-radius:28px;
  box-shadow:0 25px 50px rgba(0,0,0,0.12);
  transition:transform 0.5s ease;
}

.why-img img:hover{
  transform:scale(1.05);
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .why-wrapper{
    gap:40px;
  }

  .why-left h2{
    font-size:32px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:768px){
  .why-wrapper{
    grid-template-columns:1fr;
    padding:0px 5vw;
    text-align:center;
  }

  .why-left{
    transform:translateY(40px);
  }

  .why-visible .why-left{
    transform:translateY(0);
  }

  .why-img{
    transform:translateY(40px);
  }

  .why-visible .why-img{
    transform:translateY(0);
  }

  .why-left h2{
    font-size:26px;
  }

  .why-left p.sub{
    font-size:16px;
    margin:auto;
    margin-bottom:30px;
  }

  .why-list{
    align-items:center;
  }

  .why-item{
    max-width:420px;
    text-align:left;
  }

  .why-img img{
    max-width:360px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-wrapper" ref={sectionRef}>

      <div className="why-left">
        <h2>Why Choose Chennai Lal Packers & Movers?</h2>

        <p className="sub">
          We make every move safe, smooth and stress-free with our professional 
          packing, expert handling and on-time delivery.
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

      <div className="why-img">
        <img 
          src="/images/bgserv/whymini.png" 
          alt="Why Choose Chennai Lal Packers & Movers" 
        />
      </div>

    </section>
  );
}




function StrengthsSection() {

  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {

    const animateCount = (el, target) => {
      let start = 0;
      const duration = 1800;
      const startTime = performance.now();

      const update = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        el.innerText = value + "+";

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          entry.target.classList.add("strengths-visible");

          numberRefs.current.forEach((el) => {
            const value = parseInt(el.getAttribute("data-target"));
            animateCount(el, value);
          });

          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const css = `
* { box-sizing: border-box; margin: 0; padding: 0; }

/* ===== SECTION ===== */
.strengths-section {
  width: 100%;
  // padding: 100px 6vw;
  // background: #F6F1F8;
  text-align: center;
  font-family: Inter, system-ui;
  overflow: hidden;
}

/* TITLE */
.strengths-title {
  font-size: 40px;
  font-weight: 900;
  color: #062242;
  margin-bottom: 10px;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}

.strengths-sub {
  font-size: 18px;
  color: #486C85;
  margin-bottom: 70px;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease 0.2s;
}

.strengths-visible .strengths-title,
.strengths-visible .strengths-sub {
  opacity: 1;
  transform: translateY(0);
}

/* GRID */
.strengths-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px 40px;
}

/* CARD ITEM */
.strength-item {
  background: #fff;
  padding: 35px 20px;
  border-radius: 18px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
  transition: 0.4s ease;
  opacity: 0;
  transform: translateY(40px);
}

.strengths-visible .strength-item {
  opacity: 1;
  transform: translateY(0);
}

/* STAGGER */
.strengths-visible .strength-item:nth-child(1){ transition-delay:0.2s; }
.strengths-visible .strength-item:nth-child(2){ transition-delay:0.4s; }
.strengths-visible .strength-item:nth-child(3){ transition-delay:0.6s; }
.strengths-visible .strength-item:nth-child(4){ transition-delay:0.8s; }
.strengths-visible .strength-item:nth-child(5){ transition-delay:1s; }
.strengths-visible .strength-item:nth-child(6){ transition-delay:1.2s; }

/* HOVER */
.strength-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 45px rgba(6,34,66,0.15);
}

/* NUMBER */
.strength-item h3 {
  font-size: 42px;
  font-weight: 900;
  background: linear-gradient(90deg, #062242, #3F6C87);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

/* TITLE */
.strength-item h4 {
  font-size: 20px;
  font-weight: 800;
  color: #062242;
  margin-bottom: 6px;
}

.strength-item p {
  font-size: 14px;
  color: #486C85;
}

/* ===== TABLET ===== */
@media(max-width: 900px) {
  .strengths-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 25px;
  }
}

/* ===== MOBILE ===== */
@media(max-width: 600px) {

  .strengths-section {
    padding: 0px 5vw;
  }

  .strengths-title {
    font-size: 28px;
  }

  .strengths-sub {
    font-size: 15px;
    margin-bottom: 40px;
  }

  .strengths-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .strength-item {
    padding: 25px 15px;
  }

  .strength-item h3 {
    font-size: 34px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  return (
    <section className="strengths-section" ref={sectionRef}>

      <h2 className="strengths-title">Our Strengths, Which Makes Us</h2>
      <p className="strengths-sub">The Most Preferred Moving Brand</p>

      <div className="strengths-grid">

        {[
          { num: 10, title: "Years Of Trust", desc: "Delivering safe moves since 2025" },
          { num: 98, title: "Moves Annually", desc: "Across Chennai & all major cities" },
          { num: 2, title: "Million Sq.Ft", desc: "Secure warehousing space" },
          { num: 60, title: "Trained Manpower", desc: "Professional team for safe moves" },
          { num: 100, title: "Branches PAN India", desc: "Serving 100+ locations" },
          { num: 100, title: "Vehicles", desc: "Fleet for every move requirement" },
        ].map((item, i) => (
          <div className="strength-item" key={i}>
            <h3
              ref={el => numberRefs.current[i] = el}
              data-target={item.num}
            >
              0+
            </h3>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}



function MovingRoutesStrip() {

  const stripRef = useRef(null);

  useEffect(() => {

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== WRAPPER ===== */
.routes-strip {
  width:100%;
  background: linear-gradient(90deg, #062242, #3F6C87);
  overflow:hidden;
  padding:16px 0;
  position:relative;
}

/* FADE EDGES (Premium Look) */
.routes-strip::before,
.routes-strip::after {
  content:"";
  position:absolute;
  top:0;
  width:80px;
  height:100%;
  z-index:2;
  pointer-events:none;
}

.routes-strip::before {
  left:0;
  background:linear-gradient(to right,#062242,transparent);
}

.routes-strip::after {
  right:0;
  background:linear-gradient(to left,#3F6C87,transparent);
}

/* TRACK */
.routes-track {
  display:flex;
  width:max-content;
  animation: scrollLeft 120s linear infinite;
}

/* PAUSE ON HOVER */
.routes-strip:hover .routes-track {
  animation-play-state: paused;
}

/* ITEM */
.routes-item {
  flex-shrink:0;
  margin:0 45px;
  font-size:18px;
  font-weight:700;
  color:#ffffff;
  letter-spacing:0.5px;
  transition: transform 0.3s ease;
}

/* HOVER EFFECT */
.routes-item:hover {
  transform: scale(1.1);
}

/* ANIMATION */
@keyframes scrollLeft {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ===== TABLET ===== */
@media(max-width:900px){
  .routes-track {
    animation: scrollLeft 45s linear infinite;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){
  .routes-item {
    font-size:15px;
    margin:0 25px;
  }

  .routes-track {
    animation: scrollLeft 120s linear infinite;
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
    <div className="routes-strip" ref={stripRef}>
      <div className="routes-track">

        {[...districts, ...districts].map((d, i) => (
          <span key={i} className="routes-item">
            Packers & Movers in {d}
          </span>
        ))}

      </div>
    </div>
  );
}



function WhatWeProvide() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("services-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const css = `
* { box-sizing:border-box; margin:0; padding:0; }

/* ================= SECTION ================= */
.services-section {
  padding: 6vw;
  padding-top:10px;
  text-align: center;
  // background: #ffffff;
  overflow: hidden;
}

/* TITLE */
.services-title {
  font-size: 42px;
  font-weight: 900;
  color: #062242;
  margin-bottom: 14px;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}

.services-title span {
  background: linear-gradient(135deg, #062242, #3F6C87);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.services-subtitle {
  max-width: 680px;
  margin: 0 auto 60px auto;
  color: #486C85;
  font-size: 17px;
  line-height: 1.7;
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease 0.2s;
}

.services-visible .services-title,
.services-visible .services-subtitle {
  opacity: 1;
  transform: translateY(0);
}

/* GRID */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

/* CARD */
.service-card2 {
  position: relative;
  height: 260px;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  transition: 0.5s ease;
  opacity: 0;
  transform: translateY(40px);
}

.services-visible .service-card2 {
  opacity: 1;
  transform: translateY(0);
}

/* ACTIVE (MOBILE TOUCH FEEDBACK) */
.service-card2:active {
  transform: scale(0.98);
}

/* STAGGER */
.services-visible .service-card2:nth-child(1){ transition-delay:0.2s; }
.services-visible .service-card2:nth-child(2){ transition-delay:0.4s; }
.services-visible .service-card2:nth-child(3){ transition-delay:0.6s; }
.services-visible .service-card2:nth-child(4){ transition-delay:0.8s; }
.services-visible .service-card2:nth-child(5){ transition-delay:1s; }
.services-visible .service-card2:nth-child(6){ transition-delay:1.2s; }

/* OVERLAY */
.service-card2::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(6,34,66,0.75);
  transition: 0.4s ease;
}

.service-card2:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 20px 45px rgba(0,0,0,0.25);
}

.service-card2:hover::before {
  background: rgba(6,34,66,0.5);
}

/* INNER CONTENT */
.service-inner {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
}

.service-text {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.5px;
}

/* TABLET */
@media(max-width:1100px){
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-title {
    font-size: 34px;
  }
}

/* MOBILE */
@media(max-width:600px){

  .services-section {
    padding: 0px 5vw;
  }

  .services-title {
    font-size: 26px;
  }

  .services-subtitle {
    font-size: 15px;
    margin-bottom: 40px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .service-card2 {
    height: 220px;
  }

  .service-text {
    font-size: 18px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  const services = [
    { title: "House Shifting", img: "/images/bgserv/bghousemini.png" },
    { title: "Transportation", img: "/images/bgserv/transmini.png" },
    { title: "Commercial Moves", img: "/images/bgserv/bgcommmini.png" },
    { title: "Godown Shifting", img: "/images/bgserv/godownmin.png" },
    { title: "Office Shifting", img: "/images/bgserv/offs.png" },
    { title: "AC Installation", img: "/images/bgserv/bgacmini.png" },
  ];

  /* 🔥 Navigate Function */
  const handleNavigate = () => {
    navigate("/services"); // Change this if your route is different
  };

  return (
    <section className="services-section" ref={sectionRef}>

      <h2 className="services-title">
        What We <span>Provide</span>
      </h2>

      <p className="services-subtitle">
        We ensure reliable, safe and professional moving solutions for homes,
        offices and businesses with 100% satisfaction.
      </p>

      <div className="services-grid">
        {services.map((s, i) => (
          <div
            key={i}
            className="service-card2"
            style={{ backgroundImage: `url(${s.img})` }}
            onClick={handleNavigate}
          >
            <div className="service-inner">
              <div className="service-text">{s.title}</div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

function FeaturesDiamond() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("features-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const css = `
* { box-sizing:border-box; margin:0; padding:0; }

/* ================= SECTION ================= */
.features-section {
  width: 100%;
  // padding: 110px 6vw;
  // background: #ffffff;
   padding-bottom:10px;
  text-align: center;
  font-family: Inter, system-ui;
  overflow:hidden;
}

/* TITLE */
.features-title {
  font-size: 42px;
  font-weight: 900;
  color: #062242;
  margin-bottom: 14px;
  opacity:0;
  transform:translateY(40px);
  transition:0.8s ease;
}

.features-title span {
  background: linear-gradient(135deg, #062242, #3F6C87);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.features-sub {
  max-width: 700px;
  margin: 0 auto 70px auto;
  font-size: 17px;
  color: #486C85;
  line-height: 1.7;
  opacity:0;
  transform:translateY(40px);
  transition:0.8s ease 0.2s;
}

.features-visible .features-title,
.features-visible .features-sub {
  opacity:1;
  transform:translateY(0);
}

/* ================= GRID ================= */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
}

/* CARD */
.feature-card {
  text-align: center;
  opacity:0;
  transform:translateY(50px);
  transition:0.8s ease;
}

.features-visible .feature-card {
  opacity:1;
  transform:translateY(0);
}

/* STAGGER */
.features-visible .feature-card:nth-child(1){ transition-delay:0.2s; }
.features-visible .feature-card:nth-child(2){ transition-delay:0.4s; }
.features-visible .feature-card:nth-child(3){ transition-delay:0.6s; }
.features-visible .feature-card:nth-child(4){ transition-delay:0.8s; }

/* ================= DIAMOND ================= */
.diamond-box {
  width: 150px;
  height: 150px;
  margin: 0 auto 25px auto;
  transform: rotate(45deg);
  background: linear-gradient(135deg, #062242, #3F6C87);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  animation: float 4s ease-in-out infinite;
}

.diamond-box svg {
  width: 70px;
  height: 70px;
  transform: rotate(-45deg);
  fill: #ffffff;
}

/* FLOAT ANIMATION */
@keyframes float {
  0% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(-10px); }
  100% { transform: rotate(45deg) translateY(0); }
}

/* HOVER */
.diamond-box:hover {
  transform: rotate(45deg) translateY(-14px) scale(1.1);
  box-shadow: 0 30px 55px rgba(6,34,66,0.4);
}

/* TEXT */
.feature-card h3 {
  font-size: 20px;
  font-weight: 800;
  color: #062242;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 15px;
  color: #486C85;
  max-width: 260px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ================= TABLET ================= */
@media(max-width:1000px){
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
}

/* ================= MOBILE ================= */
@media(max-width:600px){

  .features-section {
    // padding: 70px 5vw;
    padding-bottom:10px;
  }

  .features-title {
    font-size: 28px;
  }

  .features-sub {
    font-size: 15px;
    margin-bottom: 40px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .diamond-box {
    width: 120px;
    height: 120px;
  }

  .diamond-box svg {
    width: 55px;
    height: 55px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  const features = [
    {
      title: "Fully Insured",
      desc: "Full insurance coverage for total protection during your move.",
      icon: `<svg viewBox="0 0 24 24"><path d="M12 1l8 4v6c0 5.25-3.75 10-8 12-4.25-2-8-6.75-8-12V5l8-4z"/></svg>`
    },
    {
      title: "On-Time Delivery",
      desc: "On-time delivery with real-time tracking and planned execution.",
      icon: `<svg viewBox="0 0 24 24"><path d="M12 8V12L15 14M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/></svg>`
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock assistance to help you at every stage.",
      icon: `<svg viewBox="0 0 24 24"><path d="M12 1a11 11 0 0111 11 11 11 0 01-11 11A11 11 0 011 12 11 11 0 0112 1z"/></svg>`
    },
    {
      title: "Transparent Pricing",
      desc: "Clear, honest quotations with no hidden charges.",
      icon: `<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.25 3.75 10 9 12 5.25-2 9-6.75 9-12V5l-9-4z"/></svg>`
    }
  ];

  return (
    <section className="features-section" ref={sectionRef}>

      <h2 className="features-title">
        Our <span>Features</span>
      </h2>

      <p className="features-sub">
        The most trusted packers & movers services designed for safety, speed, and reliability.
      </p>

      <div className="features-grid">

        {features.map((f, i) => (
          <div key={i} className="feature-card">
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
  const heroRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("hero-visible");
        }
      });
    }, { threshold: 0.2 });

    if (heroRef.current) observer.observe(heroRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }
body{ font-family:Inter, system-ui; }

/* ================= HERO SECTION ================= */
.hero-container{
  width:100%;
  min-height:95vh;
  padding:100px 8vw;
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  background:linear-gradient(180deg,#F6F1F8,#ffffff);
  gap:60px;
  overflow:hidden;
}

/* LEFT IMAGE */
.hero-img{
  display:flex;
  justify-content:center;
  align-items:center;
  opacity:0;
  transform:translateX(-60px);
  transition:1s ease;
   border-radius:20px;
}

.hero-visible .hero-img{
  opacity:1;
  transform:translateX(0);
}

.hero-img img{
  width:100%;
  max-width:520px;
  animation: floatHero 4s ease-in-out infinite;
   border-radius:20px;
}

/* FLOAT */
@keyframes floatHero{
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-15px); }
  100%{ transform:translateY(0); }
}

/* RIGHT CONTENT */
.hero-content{
  opacity:0;
  transform:translateX(60px);
  transition:1s ease;
}

.hero-visible .hero-content{
  opacity:1;
  transform:translateX(0);
}

.hero-content h1{
  font-size:52px;
  font-weight:900;
  color:#15304D;
  line-height:1.2;
  margin-bottom:18px;
}

.hero-content h1 span{
  background:linear-gradient(90deg,#15304D,#486C85);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.hero-content p{
  font-size:18px;
  color:#486C85;
  max-width:520px;
  margin-bottom:28px;
}

/* BUTTONS */
.hero-btns{
  display:flex;
  gap:18px;
  margin-bottom:30px;
}

.hero-btn{
  padding:14px 28px;
  border-radius:12px;
  font-weight:700;
  cursor:pointer;
  border:none;
  transition:all 0.3s ease;
  font-size:15px;
}

.hero-primary{
  background:linear-gradient(90deg,#15304D,#486C85);
  color:white;
}

.hero-primary:hover{
  transform:translateY(-4px);
  box-shadow:0 15px 30px rgba(72,108,133,0.5);
}

.hero-outline{
  // background:white;
  padding-top:10px;
  border:2px solid #486C85;
  // color:#15304D;
}

.hero-outline:hover{
  background:#eef4f8;
  transform:translateY(-4px);
}

/* BADGES */
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
  box-shadow:0 8px 18px rgba(0,0,0,0.08);
  border:1px solid #d6e4f2;
  transition:0.3s ease;
}

.hero-badge:hover{
  transform:translateY(-3px);
}

/* ================= TABLET ================= */
@media(max-width:1000px){
  .hero-content h1{
    font-size:42px;
  }
}

/* ================= MOBILE ================= */
@media(max-width:900px){
  .hero-container{
    grid-template-columns:1fr;
    text-align:center;
    padding:70px 6vw;
    gap:40px;
  }

  .hero-img{
    transform:translateY(40px);
  }

  .hero-visible .hero-img{
    transform:translateY(0);
  }

  .hero-content{
    transform:translateY(40px);
  }

  .hero-visible .hero-content{
    transform:translateY(0);
  }

  .hero-content h1{
    font-size:30px;
  }

  .hero-content p{
    font-size:16px;
    margin:auto;
    margin-bottom:22px;
  }

  .hero-btns{
    justify-content:center;
  }

  .hero-badges{
    justify-content:center;
  }

  .hero-img img{
    max-width:340px;
    border-radius:20px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  const handleFreeQuote = () => {
    navigate("/contact");
  };

  const handleCallNow = () => {
    window.location.href = "tel:+919176543210";
  };

  return (
    <>
      <section className="hero-container" ref={heroRef}>

        <div className="hero-img">
          <img src="/images/ggrgll.png" alt="Chennai Lal Packers & Movers" />
        </div>

        <div className="hero-content">

          <h1>
            Fast & Safe <span>Relocation Services</span>
          </h1>

          <p>
            Chennai Lal Packers & Movers offers reliable and affordable relocation
            solutions across Chennai & all major cities.
          </p>

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
      <WhatWeProvide />
      <WorkProcess />
      <WhyyChooseUs />
      <CustomerSatisfactionTimeline />
      <FeaturesDiamond />
      <StrengthsSection />
      <MovingRoutesStrip />
      <Testimonials />
    </>
  );
}
