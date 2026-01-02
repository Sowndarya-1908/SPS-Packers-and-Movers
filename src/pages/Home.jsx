import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const services = [
  {
    title: "House Shifting",
    img: "/images/services/houseshifting.png",
    desc: "Safe packing & smooth relocation."
  },
  {
    title: "Transportation",
    img: "/images/services/transs.png",
    desc: "Fast & secure logistics services."
  },
  {
    title: "AC Installation",
    img: "/images/services/ac.png",
    desc: "Safe dismantling & re-installation."
  },
  {
    title: "Godown Shifting",
    img: "/images/services/godown.png",
    desc: "Warehouse & inventory relocation."
  },
  {
    title: "Office Shifting",
    img: "/images/services/office.png",
    desc: "Professional office relocation."
  },
  {
    title: "Commercial Moves",
    img: "/images/services/comm.png",
    desc: "End-to-end business moves."
  }
];

 function ServicesSlide() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const css = `
/* ===== COVERFLOW ===== */
.sps-coverflow{
  background:#fff;
  padding:100px 0;
  overflow:hidden;
}

.sps-flow{
  position:relative;
  height:380px;
  display:flex;
  justify-content:center;
  align-items:center;
  perspective:1200px;
}

.sps-card{
  position:absolute;
  width:360px;
  height:360px;
  background:#EED3D6;
  border-radius:16px;

  /* ✅ ADD THIS */
  border:2px solid #7E314B;

  box-shadow:0 25px 60px rgba(0,0,0,0.45);
  transition:transform 0.55s ease, opacity 0.4s;
}

.sps-card img{
  width:100%;
  height:200px;
  object-fit:cover;
}

.sps-card-content{
  padding:10px;
  text-align:center;
}

.sps-card-content h3{
  color:#960546;
  font-weight:900;
//   margin-bottom:8px;
}

.sps-card-content p{
  color:#7E314B;
  font-size:14px;
}

/* POSITIONS */
.sps-center{
  transform:translateX(0) scale(1.2);
  z-index:3;
}

.sps-left{
  transform:translateX(-280px) rotateY(40deg) scale(0.9);
  opacity:0.6;
}

.sps-right{
  transform:translateX(280px) rotateY(-40deg) scale(0.9);
  opacity:0.6;
}

.sps-hide{
  transform:translateX(0) scale(0.6);
  opacity:0;
}

/* CONTROLS */
.sps-controls{
  display:flex;
  justify-content:center;
  gap:20px;
  margin-top:30px;
  color:#D79DAB;
}

.sps-btn{
  background:#D79DAB;
//   color:#fff;
  border:none;
  padding:10px 18px;
  border-radius:50%;
  font-size:20px;
  cursor:pointer;
}
.sps-card{
  text-decoration: none !important;
  color: inherit;
}
  .sps-coverflow a{
  text-decoration: none !important;
}
  .sps-card{
  border:2px solid #7E314B;
  border-radius:16px;
  text-decoration:none !important;
  color:inherit;
}
  .sps-section-head{
  text-align:center;
  margin-bottom:70px;
  font-family:Inter,system-ui;
}

/* TOP LABEL */
.sps-section-head small{
  display:inline-block;
  margin-bottom:14px;
  font-size:13px;
  font-weight:800;
  letter-spacing:0.18em;
  color:#7E314B; /* Dark Rose / Wine */
}

/* MAIN HEADING */
.sps-section-head h2{
  font-size:46px;
  font-weight:900;
  line-height:1.2;
  margin:0;
  color:#1f1b3a;
}

/* HIGHLIGHT WORD */
.sps-section-head h2 span{
  color:#960546; /* Deep Magenta */
}

/* MOBILE */
@media(max-width:900px){
  .sps-section-head h2{
    font-size:32px;
  }
}

/* MOBILE */
@media(max-width:768px){
  .sps-left{ transform:translateX(-180px) rotateY(35deg) scale(0.85); }
  .sps-right{ transform:translateX(180px) rotateY(-35deg) scale(0.85); }
}

.sps-center{
  transform:translateX(0) scale(1.2);
  z-index:3;

  /* optional glow */
  box-shadow:
    0 0 0 2px #7E314B,
    0 30px 70px rgba(126,49,75,0.45);
}


    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  const prev = () => {
    setActive((prev) => (prev - 1 + services.length) % services.length);
  };

  const next = () => {
    setActive((prev) => (prev + 1) % services.length);
  };

  const getClass = (index) => {
    if (index === active) return "sps-card sps-center";
    if (index === active - 1 || (active === 0 && index === services.length - 1))
      return "sps-card sps-left";
    if (index === active + 1 || (active === services.length - 1 && index === 0))
      return "sps-card sps-right";
    return "sps-card sps-hide";
  };

  return (
    <section className="sps-coverflow">
        <div className="sps-section-head">
  {/* <small>OUR WORK PROCESS</small> */}

  <h2>
    Reliable moving services built <br />
    <span>around you</span>
  </h2>
</div>
      <div className="sps-flow">
        {services.map((s, i) => (
          <Link
            to="/services"
            key={i}
            className={getClass(i)}
          >
            <img src={s.img} alt={s.title} />
            <div className="sps-card-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="sps-controls">
        <button className="sps-btn" onClick={prev}>‹</button>
        <button className="sps-btn" onClick={next}>›</button>
      </div>
    </section>
  );
}

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
/* ===== ABOUT SLIDE (SPS PINK THEME) ===== */
.sps-about{
  padding:70px 6vw;
  background:#FDFCFC;
  font-family:Inter,system-ui;
}

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
}

/* CONTENT */
.sps-about-content small{
  display:inline-block;
  font-size:13px;
  font-weight:800;
  letter-spacing:0.08em;
  color:#960546;
  margin-bottom:14px;
}

.sps-about-content h2{
  font-size:42px;
  font-weight:900;
  line-height:1.2;
  margin-bottom:18px;
  color:#7E314B;
}

.sps-about-content h2 span{
  color:#960546;
}

.sps-about-content p{
  font-size:16px;
  line-height:1.75;
  color:#7E314B;
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
  color:#960546;
  margin-bottom:6px;
}

.sps-stat p{
  font-size:14px;
  color:#7E314B;
  max-width:210px;
}

/* BUTTON */
.sps-about-btn{
  display:inline-block;
  padding:14px 30px;
  background:linear-gradient(90deg,#960546,#B95778);
  color:#FDFCFC;
  font-weight:800;
  border-radius:14px;
  text-decoration:none;
  transition:0.3s;
}

.sps-about-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 10px 25px rgba(150,5,70,0.35);
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
            src="/images/about/homepagepacker.png"
            alt="SPS Packers and Movers Team"
          />
        </div>

        {/* CONTENT */}
        <div className="sps-about-content">
          <small>ABOUT SPS PACKERS & MOVERS</small>

          <h2>
            Setting new standards in the <span>moving industry</span>
          </h2>

          <p>
            SPS Packers and Movers is committed to delivering reliable,
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



// function SecondSlide() {
//   useEffect(() => {
//     const css = `
// /* ===== SERVICES SLIDE (PINK BRAND) ===== */
// .sps-services{
//   padding:70px 6vw;
//   background:#FDFCFC;
//   font-family:Inter,system-ui;
// }

// .sps-services-head{
//   text-align:center;
//   margin-bottom:50px;
// }

// .sps-services-head h2{
//   font-size:36px;
//   font-weight:900;
//   color:#7E314B;
//   margin:0;
// }

// .sps-services-head h2 span{
//   color:#960546;
// }

// .sps-services-head p{
//   margin-top:12px;
//   font-size:16px;
//   color:#7E314B;
// }

// /* GRID */
// .sps-services-grid{
//   display:grid;
//   grid-template-columns:repeat(3,1fr);
//   gap:28px;
// }

// /* LINK RESET */
// .sps-service-link{
//   text-decoration:none;
// }

// /* CARD */
// .sps-service-card{
//   background:#EED3D6;
//   border-radius:16px;
//   padding:28px 24px;
//   box-shadow:0 12px 35px rgba(150,5,70,0.18);
//   transition:0.3s;
//   height:100%;
// }

// .sps-service-card:hover{
//   transform:translateY(-6px);
//   box-shadow:0 18px 45px rgba(150,5,70,0.3);
// }

// /* TITLE */
// .sps-service-card h4{
//   font-size:18px;
//   font-weight:800;
//   margin-bottom:10px;
//   color:#960546;
// }

// /* TEXT */
// .sps-service-card p{
//   font-size:14px;
//   color:#7E314B;
//   line-height:1.6;
// }

// /* ===== MOBILE ===== */
// @media(max-width:900px){
//   .sps-services{
//     padding:50px 5vw;
//   }

//   .sps-services-grid{
//     grid-template-columns:1fr;
//   }

//   .sps-services-head h2{
//     font-size:30px;
//   }
// }
//     `;
//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);
//   }, []);

//   return (
//     <section className="sps-services">
//       <div className="sps-services-head">
//         <h2>
//           Our <span>Moving Services</span>
//         </h2>
//         <p>
//           Complete relocation solutions by trusted professionals at
//           SPS Packers and Movers.
//         </p>
//       </div>

//       <div className="sps-services-grid">

//         <Link to="/services" className="sps-service-link">
//           <div className="sps-service-card">
//             <h4>House Shifting</h4>
//             <p>Safe packing and smooth relocation for homes and apartments.</p>
//           </div>
//         </Link>

//         <Link to="/services" className="sps-service-link">
//           <div className="sps-service-card">
//             <h4>Transportation</h4>
//             <p>Secure transport services with timely delivery.</p>
//           </div>
//         </Link>

//         <Link to="/services" className="sps-service-link">
//           <div className="sps-service-card">
//             <h4>AC Uninstallation & Installation</h4>
//             <p>Handled carefully by trained technicians.</p>
//           </div>
//         </Link>

//         <Link to="/services" className="sps-service-link">
//           <div className="sps-service-card">
//             <h4>Godown Shifting</h4>
//             <p>Warehouse and storage shifting with full safety.</p>
//           </div>
//         </Link>

//         <Link to="/services" className="sps-service-link">
//           <div className="sps-service-card">
//             <h4>Office Shifting</h4>
//             <p>Fast and organized office relocation with minimal downtime.</p>
//           </div>
//         </Link>

//         <Link to="/services" className="sps-service-link">
//           <div className="sps-service-card">
//             <h4>Commercial Moves</h4>
//             <p>End-to-end commercial and business relocation services.</p>
//           </div>
//         </Link>

//       </div>
//     </section>
//   );
// }





function WorkProcess() {
  useEffect(() => {
    const css = `
/* ===== WORK PROCESS (BRAND STYLE) ===== */
.sps-process{
  padding:80px 6vw;
  background:
    // radial-gradient(circle at 20% 20%, rgba(183,87,120,0.18), transparent 40%),
    // radial-gradient(circle at 80% 10%, rgba(150,5,70,0.15), transparent 35%),
    // linear-gradient(180deg,#FDFCFC,#EED3D6)
    #fff;
  font-family:Inter,system-ui;
  // color:#7E314B;
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
  color:#7E314B;
  margin-bottom:14px;
}

.sps-process-head h2{
  font-size:42px;
  font-weight:900;
  line-height:1.25;
  margin:0;
  color:#2a1020;
}

.sps-process-head h2 span{
  color:#960546;
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
  border:10px solid rgba(0,0,0,0.25);
  box-shadow:
    inset 0 15px 15px -5px rgba(255,255,255,0.6),
    inset 0 -5px 10px 3px rgba(0,0,0,0.4),
    0 12px 22px rgba(0,0,0,0.35);

  background-color:#960546;
  background-image:
    repeating-radial-gradient(
      rgba(147, 2, 41, 0.55) 0px,
      rgba(150,5,70,0) 60%
    ),
    repeating-radial-gradient(
      rgba(126,49,75,1) 12%,
      rgba(255, 255, 255, 1) 24px
    );

  display:grid;
  place-items:center;
  transform:scale(0.85);
  transition:transform .45s cubic-bezier(.32,0,.15,1);
}

/* DOTTED BORDER */
.sps-step-circle:hover
{
  transform:scale(1);
  cursor:pointer;
   animation:jelly 1.4s cubic-bezier(.1,.4,.9,.6) infinite;
}
/* ICON */
.sps-step-icon{
 font-size:36px;
  color:#ffffff;
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
  background:#FDFCFC;
  color:#960546;
  display:grid;
  place-items:center;
  font-weight:900;
  font-size:14px;
  box-shadow:0 6px 16px rgba(150,5,70,0.35);
  z-index:3;
}
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
  color:#960546;
}

.sps-step p{
  font-size:14px;
  line-height:1.6;
  color:#7E314B;
  max-width:260px;
  margin:0 auto;
}

/* ===== RESPONSIVE ===== */
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
      {/* HEADER */}
      <div className="sps-process-head">
        <small>OUR WORK PROCESS</small>
        <h2>
          Reliable moving services built <br />
          <span>around you</span>
        </h2>
      </div>

      {/* STEPS */}
      <div className="sps-process-steps">
        <div className="sps-step">
          <div className="sps-step-circle">
            <div className="sps-step-icon">📝</div>
            <div className="sps-step-num">1</div>
          </div>
          <h4>Get a Quote</h4>
          <p>
            Contact SPS Packers and Movers for a free, customized
            quote based on your relocation needs.
          </p>
        </div>

        <div className="sps-step">
          <div className="sps-step-circle">
            <div className="sps-step-icon">📅</div>
            <div className="sps-step-num">2</div>
          </div>
          <h4>Plan Your Move</h4>
          <p>
            We plan every detail with you, from packing schedules
            to transport logistics.
          </p>
        </div>

        <div className="sps-step">
          <div className="sps-step-circle">
            <div className="sps-step-icon">🛡️</div>
            <div className="sps-step-num">3</div>
          </div>
          <h4>Safe & Secure Moving</h4>
          <p>
            Your belongings are packed and moved safely using
            high-quality materials and trained staff.
          </p>
        </div>

        <div className="sps-step">
          <div className="sps-step-circle">
            <div className="sps-step-icon">📦</div>
            <div className="sps-step-num">4</div>
          </div>
          <h4>Unpack & Settle In</h4>
          <p>
            We help with unloading and unpacking so you can relax
            and settle comfortably.
          </p>
        </div>
      </div>
    </section>
  );
}



function WhyChooseUs() {
  useEffect(() => {
    const css = `
/* ===== WHY CHOOSE US ===== */
.sps-why{
  padding:80px 6vw;
  background:linear-gradient(180deg,#FDFCFC,#EED3D6);
  font-family:Inter,system-ui;
  color:#7E314B;
}

/* HEADER */
.sps-why-head{
  text-align:center;
  margin-bottom:60px;
}

.sps-why-head small{
  display:block;
  font-size:13px;
  letter-spacing:0.14em;
  font-weight:800;
  color:#B95778;
  margin-bottom:14px;
}


.sps-why-head h2{
  font-size:42px;
  font-weight:900;
  margin:0;
    color:#960546;
}

.sps-why-head h2 span{
   color:#7E314B;
}

/* GRID */
.sps-why-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:32px;
}

/* FLIP CARD */
.sps-flip-card{
  perspective:900px;
}

.sps-flip-inner{
  position:relative;
  width:100%;
  height:100%;
  min-height:260px;
  transition:transform 0.8s cubic-bezier(.32,0,.15,1);
  transform-style:preserve-3d;
}

.sps-flip-card:hover .sps-flip-inner{
  transform:rotateY(180deg);
}

/* FRONT & BACK */
.sps-flip-front,
.sps-flip-back{
  position:absolute;
  inset:0;
  // background:#ffffff;
  border-radius:18px;
  padding:34px 28px;
  // box-shadow:0 14px 36px rgba(79,70,229,0.25);
  backface-visibility:hidden;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

/* FRONT */
.sps-flip-front{
  background:#FFFFFF;
  box-shadow:0 14px 36px rgba(150,5,70,0.22);
}

/* BACK */
.sps-flip-back{
  transform:rotateY(180deg);
  background:linear-gradient(135deg,#960546,#7E314B);
  color:#FDFCFC;
  box-shadow:0 20px 46px rgba(150,5,70,0.45);

/* ICON */
.sps-why-icon{
  width:80px;
  height:80px;
  border-radius:8px;
    background:linear-gradient(135deg,#960546,#B95778);
  color:#fff;
  display:grid;
  place-items:center;
  font-size:22px;
  font-weight:900;
  margin-bottom:18px;
}

/* TEXT */
.sps-flip-front h4{
  font-size:18px;
  font-weight:800;
  margin-bottom:10px;
  color:#960546;
}
.sps-flip-front p{
   font-size:14px;
  color:#7E314B;
}

.sps-flip-back h4{
  font-size:18px;
  font-weight:800;
  margin-bottom:10px;
  color:#FFFFFF;
}

.sps-flip-back p{
  font-size:14px;
  line-height:1.6;
  opacity:0.95;
  color:#FDFCFC;
}
/* ===== RESPONSIVE GRID FIX ===== */

/* Tablets */
@media (max-width: 1000px) {
  .sps-why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile - ONE CARD PER ROW */
@media (max-width: 600px) {
  .sps-why {
    padding: 60px 5vw;
  }

  .sps-why-head h2 {
    font-size: 30px;
    line-height: 1.3;
  }

  .sps-why-grid {
    grid-template-columns: 1fr; /* ✅ ONE CARD PER ROW */
    gap: 24px;
  }

  .sps-flip-inner {
    min-height: 240px;
  }
}

/* ================= FORCE MOBILE ONE COLUMN ================= */
@media (max-width: 600px) {

  /* GRID MUST BE 1 COLUMN */
  .sps-why-grid {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 24px;
  }

  /* RESET CARD POSITIONING */
  .sps-why-card,
  .sps-flip-card,
  .sps-flip-inner {
    position: relative !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 auto !important;
  }

  /* PREVENT OVERFLOW */
  .sps-why {
    overflow-x: hidden;
  }

  /* OPTIONAL: reduce height for mobile */
  .sps-flip-inner {
    min-height: 240px;
  }
}

`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  const cards = [
    {
      icon: "✓",
      title: "Trusted & Experienced Team",
      desc: "Our skilled professionals have years of experience handling household, office, and commercial relocations safely."
    },
    {
      icon: "₹",
      title: "Transparent Pricing",
      desc: "We provide clear and honest pricing with no hidden charges, ensuring complete peace of mind."
    },
    {
      icon: "🛡️",
      title: "Safe & Secure Moving",
      desc: "High-quality packing materials and careful handling ensure your belongings remain safe."
    },
    {
      icon: "⏱️",
      title: "On-Time Delivery",
      desc: "We respect your time and ensure prompt pickup and delivery without delays."
    },
    {
      icon: "📦",
      title: "Complete Moving Solutions",
      desc: "From packing to unpacking, we handle everything end-to-end."
    },
    {
      icon: "📞",
      title: "Dedicated Support",
      desc: "Our customer support team is available at every stage of your relocation."
    }
  ];

  return (
    <section className="sps-why">
      <div className="sps-why-head">
        <small>WHY CHOOSE US</small>
        <h2>
          Why choose <span>SPS Packers & Movers</span>
        </h2>
      </div>

      <div className="sps-why-grid">
        {cards.map((c, i) => (
          <div className="sps-flip-card" key={i}>
            <div className="sps-flip-inner">
              <div className="sps-flip-front">
                <div className="sps-why-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>Hover to learn more</p>
              </div>

              <div className="sps-flip-back">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



// function ServicesSlide() {
//  useEffect(() => {
//   const css = `
// /* ================= GLOBAL / COVERFLOW ================= */
// html, body {
//   position: relative;
//   padding: 0;
//   margin: 0;
//   background: radial-gradient(circle, #333 0%, black 100%);
//   height: 100%;
//   width: 100%;
//   text-align: center;
//   font-family: Inter, system-ui;
// }

// /* COVERFLOW */
// #coverflow {
//   height: 100%;
//   width: 100%;
//   perspective: 600px;
// }

// #coverflow section {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 170px;
//   height: 170px;
//   margin-left: -90px;
//   margin-top: -90px;
//   background-color: white;
//   background-size: cover;
//   transform-style: preserve-3d;
//   transition: all 300ms ease-in;
//   -webkit-box-reflect: below 0
//     linear-gradient(transparent 0%, transparent 30%, rgba(255,255,255,0.4));
// }

// /* CONTROLS */
// #controls {
//   position: absolute;
//   width: 100%;
//   bottom: 10%;
//   z-index: 1;
//   user-select: none;
//   color: #999;
//   font-size: 18px;
// }

// #controls a {
//   color: white;
//   cursor: pointer;
// }

// #controls a:hover {
//   color: #66FFFF;
// }

// /* ================= SERVICES SLIDE (PINK BRAND) ================= */
// .sps-services{
//   padding:80px 6vw;
//   background:#FDFCFC;
//   font-family:Inter,system-ui;
// }

// .sps-services-grid{
//   display:grid;
//   grid-template-columns:repeat(3,1fr);
//   gap:34px;
// }

// .sps-service-link{
//   text-decoration:none;
//   height:100%;
// }

// .sps-service-card{
//   background:#EED3D6;
//   border-radius:14px;
//   overflow:hidden;
//   box-shadow:0 15px 40px rgba(150,5,70,0.18);
//   display:flex;
//   flex-direction:column;
//   transition:0.35s ease;
//   position:relative;
//   height:100%;
// }

// .sps-service-card:hover{
//   transform:translateY(-6px);
//   box-shadow:0 22px 50px rgba(150,5,70,0.32);
// }

// .sps-service-img img{
//   width:100%;
//   height:220px;
//   object-fit:cover;
// }

// .sps-service-content{
//   padding:26px 22px 34px;
//   text-align:center;
// }

// .sps-service-content h3{
//   font-size:22px;
//   font-weight:800;
//   margin-bottom:14px;
//   color:#960546;
// }

// .sps-service-content p{
//   font-size:15px;
//   line-height:1.75;
//   color:#7E314B;
// }

// .sps-service-bar{
//   position:absolute;
//   bottom:0;
//   left:0;
//   width:100%;
//   height:5px;
//   background:#B95778;
// }

// @media(max-width:900px){
//   .sps-services{
//     padding:60px 5vw;
//   }

//   .sps-services-grid{
//     grid-template-columns:1fr;
//     gap:26px;
//   }

//   .sps-service-img img{
//     height:200px;
//   }
// }
//   `;

//   const style = document.createElement("style");
//   style.innerHTML = css;
//   document.head.appendChild(style);
// }, []);


//   return (
//     <section className="sps-services">
//       <div className="sps-services-grid">

//         <Link to="/services" className="sps-service-link">
//           <div className="sps-service-card">
//             <div className="sps-service-img">
//               <img src="/images/services/houseshifting.png" alt="House Shifting" />
//             </div>
//             <div className="sps-service-content">
//               <h3>House Shifting</h3>
//               <p>
//                 We provide safe and reliable house shifting services for families
//                 and individuals. Our trained professionals ensure careful packing,
//                 secure loading, and timely delivery of your household belongings.
//               </p>
//             </div>
//             <div className="sps-service-bar"></div>
//           </div>
//         </Link>

//         <Link to="/services" className="sps-service-link">
//           <div className="sps-service-card">
//             <div className="sps-service-img">
//               <img src="/images/services/transs.png" alt="Transportation Services" />
//             </div>
//             <div className="sps-service-content">
//               <h3>Transportation</h3>
//               <p>
//                 Our transportation services ensure fast, safe, and efficient
//                 movement of goods across cities and states. We use well-maintained
//                 vehicles for smooth and hassle-free logistics.
//               </p>
//             </div>
//             <div className="sps-service-bar"></div>
//           </div>
//         </Link>

//         <Link to="/services" className="sps-service-link">
//           <div className="sps-service-card">
//             <div className="sps-service-img">
//               <img src="/images/services/ac.png" alt="AC Uninstallation and Installation" />
//             </div>
//             <div className="sps-service-content">
//               <h3>AC Uninstallation & Installation</h3>
//               <p>
//                 Our technicians handle AC uninstallation and installation with
//                 precision and care. We ensure safe dismantling, transport, and
//                 reinstallation without damage.
//               </p>
//             </div>
//             <div className="sps-service-bar"></div>
//           </div>
//         </Link>

//         <Link to="/services" className="sps-service-link">
//           <div className="sps-service-card">
//             <div className="sps-service-img">
//               <img src="/images/services/godown.png" alt="Godown Shifting" />
//             </div>
//             <div className="sps-service-content">
//               <h3>Godown Shifting</h3>
//               <p>
//                 We offer professional godown shifting services for warehouses and
//                 storage units. Our team manages inventory handling, packing, and
//                 transportation efficiently.
//               </p>
//             </div>
//             <div className="sps-service-bar"></div>
//           </div>
//         </Link>

//         <Link to="/services" className="sps-service-link">
//           <div className="sps-service-card">
//             <div className="sps-service-img">
//               <img src="/images/services/office.png" alt="Office Shifting" />
//             </div>
//             <div className="sps-service-content">
//               <h3>Office Shifting</h3>
//               <p>
//                 Our office shifting services are designed to minimize downtime.
//                 From IT equipment to furniture, we handle complete office
//                 relocations smoothly and professionally.
//               </p>
//             </div>
//             <div className="sps-service-bar"></div>
//           </div>
//         </Link>

//         <Link to="/services" className="sps-service-link">
//           <div className="sps-service-card">
//             <div className="sps-service-img">
//               <img src="/images/services/comm.png" alt="Commercial Moves" />
//             </div>
//             <div className="sps-service-content">
//               <h3>Commercial Moves</h3>
//               <p>
//                 We provide end-to-end commercial moving solutions for factories,
//                 retail stores, and businesses. Our structured approach ensures
//                 safe handling and timely execution.
//               </p>
//             </div>
//             <div className="sps-service-bar"></div>
//           </div>
//         </Link>

//       </div>
//     </section>
//   );
// }


export default function Home() {
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
New Moving Enquiry

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

    // Trigger immediately on visit
setTimeout(() => {
  heroLeftRef.current?.classList.add("show");
  cardRef.current?.classList.add("show");

  featureRefs.current.forEach((el, i) => {
    if (el) {
      setTimeout(() => el.classList.add("show"), i * 150);
    }
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

/* ================= HERO SECTION WITH IMAGE BG ================= */
.heroq-section{
  min-height:100vh;

  /* IMAGE + BRAND OVERLAY (like screenshot) */
  background:
    linear-gradient(
      rgba(30,20,40,0.70),
      rgba(30,20,40,0.70)
    ),
    linear-gradient(
      120deg,
      rgba(150,5,70,0.55),
      rgba(126,49,75,0.55)
    ),
    url("/images/truck.png") center/cover no-repeat;

  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  align-items:center;
  padding:80px 6vw 40px;
  gap:40px;
  font-family:Inter,system-ui;
}

/* ===== ANIMATION ===== */
.fade-left,.fade-right,.fade-up{
  opacity:0;
  transform:translateY(40px);
  transition:all 0.9s cubic-bezier(.22,.61,.36,1);
}
.fade-left{   opacity:0;
  transform:translateX(-80px);}
.fade-right{ opacity:0;
  transform:translateX(80px); }
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

/* ===== CARD (UNCHANGED STYLE) ===== */
.heroq-card{
  // background:#ffffff;
    // background: rgba(255, 255, 255, 0.55);   glass
     backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px); /* glass */
  border-radius:22px;
  padding:28px;
  max-width:520px;
  width:100%;
  justify-self:end;
  // box-shadow:0 22px 50px rgba(0,0,0,0.35);
  border: 1.5px solid rgba(183, 87, 120, 0.35); /* soft rose border */

  box-shadow:
    0 30px 60px rgba(150, 5, 70, 0.25),
    inset 0 1px 0 rgba(81, 4, 67, 0.55);

  transition: all 0.35s ease;
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

.heroq-card input:focus,
.heroq-card select:focus{
  outline:none;
  border-color:#B95778;
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
  transition:all .25s ease;
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
          Reliable Packers & Movers <span>Across India</span>
        </h1>

        <p className="sub">
          Safe, affordable, and professional relocation services you can trust.
        </p>

        <div className="heroq-features">
          {[
            ["₹", "Free Quotes", "No hidden charges"],
            ["✓", "Verified Experts", "Trained professionals"],
            ["★", "On-Time Delivery", "Damage-free shifting"]
          ].map((item, i) => (
            <div
              key={i}
              className="heroq-feature fade-up"
              ref={(el) => (featureRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.15}s` }}
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
        <h3>Get Free Moving Quote</h3>

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

          <button className="heroq-btn">Get Free Quote</button>
        </form>
      </div>
    </section>


 <AboutSlide /> 
 <ServicesSlide /> 
  {/* <SecondSlide />  */}
  <WorkProcess />
<WhyChooseUs /> 

</>
  );
}


