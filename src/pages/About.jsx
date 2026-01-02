import React, { useEffect, useState, useRef } from "react";

 function CompanyTimeline() {
  const itemRefs = useRef([]);
  const counterRefs = useRef([]);

  useEffect(() => {
    /* ================= INTERSECTION OBSERVER ================= */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");

            // COUNTER ANIMATION
            const counter = entry.target.querySelector("[data-count]");
            if (counter && !counter.classList.contains("counted")) {
              counter.classList.add("counted");
              animateCounter(counter);
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    /* ================= COUNTER FUNCTION ================= */
    const animateCounter = (el) => {
      const target = +el.getAttribute("data-count");
      let current = 0;
      const step = Math.ceil(target / 60);

      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        el.innerText = target >= 1000 ? `${current.toLocaleString()}+` : current;
      }, 25);
    };

    /* ================= STYLES ================= */
    const css = `
/* ===== TIMELINE ===== */
.sps-timeline{
  padding:90px 6vw;
  background:linear-gradient(180deg,#FDFCFC,#EED3D6);
  font-family:Inter,system-ui;
}

/* HEADER */
.sps-timeline-head{
  text-align:center;
  margin-bottom:80px;
}

.sps-timeline-head small{
  display:block;
  font-size:13px;
  letter-spacing:0.18em;
  font-weight:800;
  color:#B95778;
  margin-bottom:14px;
}

.sps-timeline-head h2{
  font-size:44px;
  font-weight:900;
  color:#960546;
}

.sps-timeline-head h2 span{
  color:#7E314B;
}

/* LINE */
.sps-timeline-line{
  position:relative;
  max-width:1000px;
  margin:auto;
}

.sps-timeline-line::before{
  content:"";
  position:absolute;
  left:50%;
  top:0;
  transform:translateX(-50%);
  width:4px;
  height:100%;
  background:linear-gradient(180deg,#960546,#B95778);
}

/* ITEM */
.sps-timeline-item{
  position:relative;
  width:50%;
  padding:30px 50px;
  opacity:0;
  transform:translateY(60px);
  transition:all 0.9s cubic-bezier(.22,.61,.36,1);
}

.sps-timeline-item.show{
  opacity:1;
  transform:translateY(0);
}

.sps-left{ left:0; text-align:right; }
.sps-right{ left:50%; }

/* DOT */
.sps-dot{
  position:absolute;
  top:40px;
  width:18px;
  height:18px;
  background:#960546;
  border-radius:50%;
  border:4px solid #FDFCFC;
}

.sps-left .sps-dot{ right:-9px; }
.sps-right .sps-dot{ left:-9px; }

/* CARD */
.sps-card{
  background:#ffffff;
  border-radius:20px;
  overflow:hidden;
  box-shadow:0 20px 45px rgba(150,5,70,0.25);
}

/* IMAGE */
.sps-card img{
  width:100%;
  height:180px;
  object-fit:cover;
}

/* CONTENT */
.sps-card-content{
  padding:24px;
}

.sps-card-content span{
  font-size:13px;
  font-weight:800;
  color:#B95778;
}

.sps-card-content h4{
  font-size:20px;
  font-weight:900;
  margin:8px 0;
  color:#960546;
}

.sps-card-content p{
  font-size:15px;
  color:#7E314B;
  line-height:1.6;
}

/* COUNTER */
.sps-counter{
  font-size:36px;
  font-weight:900;
  color:#960546;
  margin-top:10px;
}

/* ===== MOBILE ===== */
@media(max-width:900px){
  .sps-timeline-line::before{ left:20px; }

  .sps-timeline-item{
    width:100%;
    padding-left:70px;
    padding-right:20px;
    text-align:left;
  }

  .sps-left,
  .sps-right{ left:0; }

  .sps-dot{ left:11px !important; }

  .sps-timeline-head h2{ font-size:32px; }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      desc: "Started SPS Packers & Movers with a vision to deliver reliable relocations.",
      img: "/images/timeline/founded.jpg"
    },
    {
      year: "2017",
      title: "Service Expansion",
      desc: "Introduced office, godown & commercial relocation services.",
      img: "/images/timeline/services.jpg",
      count: 1200
    },
    {
      year: "2019",
      title: "Pan-India Reach",
      desc: "Expanded operations across major Indian cities.",
      img: "/images/timeline/india.jpg",
      count: 18
    },
    {
      year: "2021",
      title: "50,000+ Moves",
      desc: "Crossed a major milestone of successful relocations.",
      img: "/images/timeline/moves.jpg",
      count: 50000
    },
    {
      year: "2024",
      title: "Trusted Brand",
      desc: "Recognized as a reliable moving partner nationwide.",
      img: "/images/timeline/trusted.jpg"
    }
  ];

  return (
    <section className="sps-timeline">
      <div className="sps-timeline-head">
        <small>OUR JOURNEY</small>
        <h2>
          Growing with <span>trust & excellence</span>
        </h2>
      </div>

      <div className="sps-timeline-line">
        {timeline.map((item, i) => (
          <div
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            className={`sps-timeline-item ${i % 2 === 0 ? "sps-left" : "sps-right"}`}
          >
            <div className="sps-dot"></div>

            <div className="sps-card">
              <img src={item.img} alt={item.title} />

              <div className="sps-card-content">
                <span>{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>

                {item.count && (
                  <div
                    className="sps-counter"
                    data-count={item.count}
                    ref={(el) => counterRefs.current[i] = el}
                  >
                    0
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AwardsStripDark() {
  useEffect(() => {
    const css = `
/* ===== DARK AWARDS STRIP ===== */
.sps-awards-dark{
  padding:80px 0;
  background:
    radial-gradient(circle at top, rgba(150,5,70,0.25), transparent 45%),
    linear-gradient(180deg,#1a0b14,#0e0509);
  font-family:Inter,system-ui;
  overflow:hidden;
}

/* HEADER */
.sps-awards-dark-head{
  text-align:center;
  margin-bottom:50px;
}

.sps-awards-dark-head small{
  display:block;
  font-size:13px;
  letter-spacing:0.18em;
  font-weight:800;
  color:#B95778;
  margin-bottom:12px;
}

.sps-awards-dark-head h2{
  font-size:38px;
  font-weight:900;
  color:#FDFCFC;
}

.sps-awards-dark-head h2 span{
  color:#EED3D6;
}

/* SLIDER */
.sps-awards-dark-track{
  display:flex;
  align-items:center;
  gap:70px;
  animation:scrollAwardsDark 24s linear infinite;
  width:max-content;
}

.sps-awards-dark-wrapper{
  display:flex;
  gap:70px;
  width:200%;
}

/* CARD */
.sps-award-dark{
  min-width:170px;
  height:110px;
  background:rgba(255,255,255,0.06);
  backdrop-filter:blur(10px);
  -webkit-backdrop-filter:blur(10px);
  border-radius:18px;
  display:grid;
  place-items:center;
  border:1px solid rgba(183,87,120,0.35);
  box-shadow:
    0 14px 30px rgba(0,0,0,0.45),
    inset 0 1px 0 rgba(255,255,255,0.15);
  transition:transform .35s ease, box-shadow .35s ease;
}

.sps-award-dark img{
  max-width:115px;
  max-height:65px;
  object-fit:contain;
  filter:grayscale(100%) brightness(0.85);
  opacity:0.9;
  transition:.35s ease;
}

/* HOVER */
.sps-award-dark:hover{
  transform:translateY(-6px) scale(1.04);
  box-shadow:
    0 22px 50px rgba(150,5,70,0.55),
    inset 0 1px 0 rgba(255,255,255,0.25);
}

.sps-award-dark:hover img{
  filter:grayscale(0%) brightness(1);
  opacity:1;
}

/* PAUSE ON HOVER */
.sps-awards-dark:hover .sps-awards-dark-track{
  animation-play-state:paused;
}

/* ANIMATION */
@keyframes scrollAwardsDark{
  from{ transform:translateX(0); }
  to{ transform:translateX(-50%); }
}

/* MOBILE */
@media(max-width:600px){
  .sps-awards-dark-head h2{
    font-size:30px;
  }

  .sps-award-dark{
    min-width:140px;
    height:95px;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  const awards = [
    { img: "/images/awards/iso.png", alt: "ISO Certified Packers and Movers" },
    { img: "/images/awards/msme.png", alt: "MSME Registered Company" },
    { img: "/images/awards/trusted.png", alt: "Trusted Moving Company" },
    { img: "/images/awards/quality.png", alt: "Quality Service Award" },
    { img: "/images/awards/safety.png", alt: "Safety Compliance Certificate" },
    { img: "/images/awards/5star.png", alt: "5 Star Customer Rating" }
  ];

  return (
    <section className="sps-awards-dark">
      <div className="sps-awards-dark-head">
        <small>AWARDS & CERTIFICATIONS</small>
        <h2>
          Recognized for <span>quality & trust</span>
        </h2>
      </div>

      <div className="sps-awards-dark-track">
        <div className="sps-awards-dark-wrapper">
          {awards.concat(awards).map((award, i) => (
            <div className="sps-award-dark" key={i}>
              <img src={award.img} alt={award.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeyHighlights() {
  useEffect(() => {
    const css = `
/* ===== KEY HIGHLIGHTS ===== */
.sps-highlights{
  padding:90px 6vw;
  background:#FDFCFC;
  font-family:Inter,system-ui;
}

/* HEADER */
.sps-highlights-head{
  text-align:center;
  margin-bottom:70px;
}

.sps-highlights-head h2{
  font-size:42px;
  font-weight:900;
  color:#960546;
  margin-bottom:10px;
}

.sps-highlights-head p{
  font-size:16px;
  color:#7E314B;
}

/* GRID */
.sps-highlights-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:34px;
}

/* CARD */
.sps-highlight-card{
  background:#ffffff;
  border-radius:18px;
  padding:32px 28px;
  box-shadow:0 14px 35px rgba(150,5,70,0.18);
  border:1.5px solid rgba(183,87,120,0.25);
  transition:all .35s ease;
  position:relative;
  overflow:hidden;
}

.sps-highlight-card::before{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(
    120deg,
    rgba(150,5,70,0.08),
    rgba(183,87,120,0.05),
    transparent 60%
  );
  opacity:0;
  transition:.35s ease;
}

.sps-highlight-card:hover::before{
  opacity:1;
}

.sps-highlight-card:hover{
  transform:translateY(-8px);
  box-shadow:0 22px 55px rgba(150,5,70,0.35);
}

/* ICON */
.sps-highlight-icon{
  width:54px;
  height:54px;
  border-radius:14px;
  background:#EED3D6;
  color:#960546;
  display:grid;
  place-items:center;
  font-size:24px;
  margin-bottom:20px;
}

/* TEXT */
.sps-highlight-card h4{
  font-size:20px;
  font-weight:800;
  margin-bottom:12px;
  color:#960546;
}

.sps-highlight-card p{
  font-size:15px;
  line-height:1.7;
  color:#7E314B;
}

/* RESPONSIVE */
@media(max-width:1000px){
  .sps-highlights-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:600px){
  .sps-highlights{
    padding:70px 5vw;
  }

  .sps-highlights-head h2{
    font-size:32px;
  }

  .sps-highlights-grid{
    grid-template-columns:1fr;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sps-highlights">
      {/* HEADER */}
      <div className="sps-highlights-head">
        <h2>Key Highlights</h2>
        <p>What sets us apart in the logistics industry</p>
      </div>

      {/* GRID */}
      <div className="sps-highlights-grid">
        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">🌐</div>
          <h4>Extensive Network</h4>
          <p>
            Serving 500+ destinations across India, with a strong presence
            across major highways and logistics hubs.
          </p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">💻</div>
          <h4>Technology Pioneer</h4>
          <p>
            Among the first movers to digitize operations with modern software,
            tracking systems, and automation.
          </p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">👥</div>
          <h4>Strong Workforce</h4>
          <p>
            Backed by a skilled team of professionals ensuring reliable,
            efficient, and timely service delivery.
          </p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">🚚</div>
          <h4>Robust Fleet</h4>
          <p>
            A well-maintained fleet handling large volumes of cargo daily
            across long and short distances.
          </p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">🏆</div>
          <h4>Industry Recognition</h4>
          <p>
            Recognized by leading institutions and corporate clients for
            quality, reliability, and trust.
          </p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">📈</div>
          <h4>Strategic Growth</h4>
          <p>
            Continuously expanding operations and partnerships to enhance
            reach and service capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}


export default function About() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    service: ""
  });

  const heroLeftRef = useRef(null);
  const cardRef = useRef(null);
  const featureRefs = useRef([]);

  const handleHeroSubmit = (e) => {
    e.preventDefault();

    const message = `
About Page Enquiry – SPS Packers & Movers

Name: ${form.name}
Phone: ${form.phone}
From City: ${form.from}
To City: ${form.to}
Service Type: ${form.service}
    `;

    const ownerNumber = "917550057453";
    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.25 }
    );

    setTimeout(() => {
      heroLeftRef.current?.classList.add("show");
      cardRef.current?.classList.add("show");

      featureRefs.current.forEach((el, i) => {
        if (el) setTimeout(() => el.classList.add("show"), i * 150);
      });
    }, 200);

    featureRefs.current.forEach((el) => el && observer.observe(el));

    const css = `
*{ box-sizing:border-box; }
html,body{
  margin:0;
  padding:0;
  overflow-x:hidden;
  background:#FDFCFC;
}

/* ================= HERO SECTION ================= */
.heroq-section{
  min-height:100vh;
  background:
    linear-gradient(rgba(30,20,40,0.70), rgba(30,20,40,0.70)),
    linear-gradient(120deg, rgba(150,5,70,0.55), rgba(126,49,75,0.55)),
    url("/images/truck.png") center/cover no-repeat;

  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  align-items:center;
  padding:80px 6vw 40px;
  gap:40px;
  font-family:Inter,system-ui;
}

/* ===== ANIMATIONS ===== */
.fade-left,.fade-right,.fade-up{
  opacity:0;
  transform:translateY(40px);
  transition:all 0.9s cubic-bezier(.22,.61,.36,1);
}
.fade-left{ transform:translateX(-80px); }
.fade-right{ transform:translateX(80px); }
.show{ opacity:1; transform:translate(0); }

/* ===== LEFT CONTENT ===== */
.heroq-left h1{
  font-size:46px;
  font-weight:900;
  line-height:1.2;
  color:#ffffff;
}

.heroq-left h1 span{
  color:#EED3D6;
}

.heroq-left p.sub{
  margin:16px 0 26px;
  font-size:17px;
  color:#FDFCFC;
  max-width:520px;
}

.heroq-features{
  display:flex;
  flex-direction:column;
  gap:18px;
}

.heroq-feature{
  display:flex;
  gap:14px;
  color:#fff;
}

.heroq-icon{
  min-width:42px;
  height:42px;
  border-radius:50%;
  background:#960546;
  color:#fff;
  display:grid;
  place-items:center;
  font-weight:800;
}

/* ===== GLASS CARD ===== */
.heroq-card{
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius:22px;
  padding:28px;
  max-width:520px;
  width:100%;
  justify-self:end;
  border:1.5px solid rgba(183,87,120,0.35);
  box-shadow:
    0 30px 60px rgba(150,5,70,0.25),
    inset 0 1px 0 rgba(81,4,67,0.55);
}

.heroq-card h3{
  margin-bottom:16px;
  color:#960546;
}

/* ===== FORM ===== */
.heroq-card form{
  display:flex;
  flex-direction:column;
  gap:14px;
}

.heroq-card input,
.heroq-card select{
  width:100%;
  padding:16px;
  border-radius:12px;
  border:1.5px solid #EED3D6;
  font-size:16px;
  background:#FDFCFC;
}

.heroq-btn{
  margin-top:10px;
  padding:16px;
  border:none;
  border-radius:12px;
  background:linear-gradient(90deg,#960546,#B95778);
  color:#fff;
  font-weight:800;
  font-size:17px;
  cursor:pointer;
}

.heroq-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 12px 25px rgba(150,5,70,0.45);
}

/* ===== MOBILE ===== */
@media(max-width:900px){
  .heroq-section{
    grid-template-columns:1fr;
    padding:90px 5vw 40px;
  }

  .heroq-card{
    max-width:100%;
    margin-top:30px;
  }

  .heroq-left h1{
    font-size:34px;
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
    <section className="heroq-section">
      <div className="heroq-left fade-left" ref={heroLeftRef}>
        <h1>
          About <span>SPS Packers & Movers</span>
        </h1>

        <p className="sub">
          SPS Packers & Movers is a trusted relocation company committed to
          delivering safe, reliable, and professional moving solutions across India.
        </p>

        <div className="heroq-features">
          {[
            ["🏆", "Years of Experience", "Proven expertise in handling relocations"],
            ["🌍", "Nationwide Presence", "Serving homes & businesses across India"],
            ["🤝", "Customer First", "Transparency, care, and commitment"]
          ].map((item, i) => (
            <div
              key={i}
              className="heroq-feature fade-up"
              ref={(el) => (featureRefs.current[i] = el)}
            >
              <div className="heroq-icon">{item[0]}</div>
              <div>
                <h4>{item[1]}</h4>
                <p>{item[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="heroq-card fade-right" ref={cardRef}>
        <h3>Talk to Our Team</h3>

        <form onSubmit={handleHeroSubmit}>
          <input placeholder="Full Name" required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input placeholder="Mobile Number" required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input placeholder="From City" required
            value={form.from}
            onChange={(e) => setForm({ ...form, from: e.target.value })}
          />
          <input placeholder="To City" required
            value={form.to}
            onChange={(e) => setForm({ ...form, to: e.target.value })}
          />

          <select required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option value="">Select Service</option>
            <option>House Shifting</option>
            <option>Office Shifting</option>
            <option>Commercial Moves</option>
          </select>

          <button className="heroq-btn">Contact Us</button>
        </form>
      </div>
    </section>


<CompanyTimeline />
<AwardsStripDark />
<KeyHighlights />
</>
  );
}
