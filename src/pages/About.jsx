import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

function MissionVision() {
  useEffect(() => {
    const css = `
/* ===== MISSION & VISION ===== */
.sps-mv{
  // padding:70px 6vw;
  // background:#FDFCFC;
  padding-bottom:30px;
  font-family:Inter,system-ui;
}

/* CONTAINER */
.sps-mv-wrap{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
  background:#ffffff;
  border-radius:18px;
  padding:40px 46px;
  box-shadow:0 18px 45px rgba(150,5,70,0.12);
}

/* ITEM */
.sps-mv-item{
  display:flex;
  gap:18px;
  align-items:flex-start;
}

/* ICON */
.sps-mv-icon{
  min-width:44px;
  height:44px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,#960546,#B95778);
  color:#fff;
  font-size:20px;
}

/* TEXT */
.sps-mv-item h3{
  font-size:22px;
  font-weight:900;
  margin-bottom:10px;
  color:#1f1b3a;
}

.sps-mv-item p{
  font-size:15.5px;
  line-height:1.7;
  color:#7E314B;
}

/* ===== RESPONSIVE ===== */
@media(max-width:900px){
  .sps-mv-wrap{
    grid-template-columns:1fr;
    padding:32px 26px;
  }
}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sps-mv">
      <div className="sps-mv-wrap">
        {/* MISSION */}
        <div className="sps-mv-item">
          <div className="sps-mv-icon">🎯</div>
          <div>
            <h3>Our Mission</h3>
            <p>
              To provide stress-free, reliable, and efficient packing and moving
              services that exceed customer expectations through
              professionalism, innovation, and care for every item we handle.
            </p>
          </div>
        </div>

        {/* VISION */}
        <div className="sps-mv-item">
          <div className="sps-mv-icon">👁️</div>
          <div>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted and preferred packing and moving service
              provider nationwide, setting industry standards for safety,
              reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// function UniqueFactsTimeline() {
//   const itemRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           }
//         });
//       },
//       { threshold: 0.25 }
//     );

//     itemRefs.current.forEach((el) => el && observer.observe(el));

//     const css = `
// /* ===== UNIQUE FACTS TIMELINE ===== */
// .sps-facts{
//   padding:120px 6vw;
//   background:linear-gradient(180deg,#FDFCFC,#EED3D6);
//   font-family:Inter,system-ui;
// }

// /* HEADER */
// .sps-facts-head{
//   text-align:center;
//   margin-bottom:90px;
// }

// .sps-facts-head h2{
//   font-size:42px;
//   font-weight:900;
//   color:#960546;
// }

// /* WRAPPER */
// .sps-facts-line{
//   position:relative;
//   max-width:1100px;
//   margin:auto;
// }

// /* CENTER LINE */
// .sps-facts-line::before{
//   content:"";
//   position:absolute;
//   left:50%;
//   top:0;
//   transform:translateX(-50%);
//   width:4px;
//   height:100%;
//   background:#B95778;
// }

// /* ITEM */
// .sps-fact-item{
//   position:relative;
//   width:50%;
//   padding:30px 50px;
//   opacity:0;
//   transform:translateY(50px);
//   transition:all .8s cubic-bezier(.22,.61,.36,1);
// }

// .sps-fact-item.show{
//   opacity:1;
//   transform:translateY(0);
// }

// .sps-left{ left:0; text-align:right; }
// .sps-right{ left:50%; }

// /* DOT */
// .sps-fact-dot{
//   position:absolute;
//   top:50%;
//   transform:translateY(-50%);
//   width:18px;
//   height:18px;
//   background:#960546;
//   border-radius:50%;
//   border:4px solid #FDFCFC;
//   z-index:2;
// }

// .sps-left .sps-fact-dot{ right:-9px; }
// .sps-right .sps-fact-dot{ left:-9px; }

// /* CARD */
// .sps-fact-card{
//   background:#ffffff;
//   border-radius:22px;
//   padding:36px 34px;
//   box-shadow:0 25px 60px rgba(150,5,70,0.25);
// }

// /* NUMBER */
// .sps-fact-num{
//   font-size:42px;
//   font-weight:900;
//   color:rgba(150,5,70,0.25);
//   margin-bottom:10px;
// }

// /* TITLE */
// .sps-fact-card h4{
//   font-size:20px;
//   font-weight:900;
//   color:#960546;
//   margin-bottom:12px;
// }

// /* TEXT */
// .sps-fact-card p{
//   font-size:15px;
//   line-height:1.7;
//   color:#7E314B;
// }

// /* ===== MOBILE ===== */
// @media(max-width:900px){
//   .sps-facts{
//     padding:90px 5vw;
//   }

//   .sps-facts-line::before{
//     left:18px;
//   }

//   .sps-fact-item{
//     width:100%;
//     padding-left:60px;
//     padding-right:20px;
//     text-align:left;
//   }

//   .sps-left,
//   .sps-right{
//     left:0;
//   }

//   .sps-fact-dot{
//     left:9px !important;
//   }

//   .sps-facts-head h2{
//     font-size:32px;
//   }
// }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     return () => observer.disconnect();
//   }, []);

//   const facts = [
//     {
//       title: "Trusted Packers & Movers in India",
//       desc:
//         "SPS Packers & Movers is recognized for reliable, safe, and professional relocation services across India, built on years of customer trust."
//     },
//     {
//       title: "High-Quality Relocation Standards",
//       desc:
//         "We follow strict packing, handling, and transportation standards to ensure every move is smooth and damage-free."
//     },
//     {
//       title: "Comprehensive Range of Services",
//       desc:
//         "From house shifting and office relocation to vehicle transport and storage solutions, we offer end-to-end moving services."
//     },
//     {
//       title: "Pan-India Network",
//       desc:
//         "Our strong network allows us to serve customers efficiently across major cities and regions nationwide."
//     }
//   ];

//   return (
//     <section className="sps-facts">
//       <div className="sps-facts-head">
//         <h2>What Makes SPS Different</h2>
//       </div>

//       <div className="sps-facts-line">
//         {facts.map((item, i) => (
//           <div
//             key={i}
//             ref={(el) => (itemRefs.current[i] = el)}
//             className={`sps-fact-item ${i % 2 === 0 ? "sps-left" : "sps-right"}`}
//           >
//             <div className="sps-fact-dot"></div>

//             <div className="sps-fact-card">
//               <div className="sps-fact-num">
//                 {String(i + 1).padStart(2, "0")}
//               </div>
//               <h4>{item.title}</h4>
//               <p>{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

function ChooseWe() {
  useEffect(() => {
    const css = `
/* ================= SECTION WRAPPER ================= */
.choosewe-hero {
  // padding: 90px 6vw;
  padding-top:20px;
  // background: #ffffff;
  font-family: Inter, system-ui;
}

/* ================= GRID ================= */
.choosewe-grid {
  max-width: 1350px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 70px;
  align-items: start;
}

/* ================= LEFT CONTENT ================= */
.choosewe-left small {
  display: block;
  font-size: 15px;
  color: #0B0E3F;
  font-weight: 700;
  letter-spacing: 1px;
}

/* EXACT UNDERLINE */
.choosewe-underline {
  width: 65px;
  height: 4px;
  margin: 10px 0 25px;
  background: linear-gradient(90deg, #C30458 50%, #FF1F00 50%);
  border-radius: 3px;
}

.choosewe-left h2 {
  font-size: 46px;
  font-weight: 900;
  color: #0B0E3F;
  line-height: 1.25;
  margin-bottom: 28px;
}

.choosewe-sub-heading {
  font-size: 22px;
  font-weight: 800;
  color: #0B0E3F;
  margin-bottom: 20px;
}

.choosewe-description {
  font-size: 16px;
  line-height: 1.85;
  color: #7A1C38;
  max-width: 720px;
}

/* ================= RIGHT IMAGE ================= */
.choosewe-right img {
  width: 100%;
  border-radius: 0px;
  display: block;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 1100px) {
  .choosewe-grid {
    grid-template-columns: 1fr;
    gap: 55px;
  }

  .choosewe-left h2 {
    font-size: 36px;
  }

  .choosewe-sub-heading {
    font-size: 20px;
  }

  .choosewe-right img {
    max-width: 600px;
    margin: auto;
  }
}

@media (max-width: 600px) {
  .choosewe-left h2 {
    font-size: 30px;
  }

  .choosewe-description {
    font-size: 15px;
  }
}
`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);


  return (
    <section className="choosewe-hero">
      <div className="choosewe-grid">

        {/* LEFT SIDE CONTENT */}
        <div className="choosewe-left">
          <small>WHY CHOOSE US</small>

          <div className="choosewe-underline"></div>

          <h2>Hire the Best Packers and Movers in India</h2>

          <div className="choosewe-sub-heading">
            We provide the best industrial solutions for our customers to grow for 25+ years.
          </div>

          <p className="choosewe-description">
            SPS Packers & Movers is a renowned service provider for packing and moving of 
            households, office furniture, equipment, machinery, industrial goods, and more.
            We are a leader in the relocation industry and serve customers nationwide.
            SPS Packers & Movers is an independent relocation management company ranked among 
            India's leading packers and movers specializing in household & corporate goods 
            transportation with facilities for warehousing and storage.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="choosewe-right">
          <img src="/images/services/transs.png" alt="Packers and Movers" />
        </div>

      </div>
    </section>
  );
}



function AboutHero() {
  useEffect(() => {
    const css = `
/* ===== ABOUT HERO ===== */
.sps-about-hero{
padding-top:20px;
padding-bottom:30px;
  // padding:90px 6vw;
  // background:#FDFCFC;
  font-family:Inter,system-ui;
}

/* GRID */
.sps-about-wrap{
  max-width:1300px;
  margin:auto;
  display:grid;
  grid-template-columns:1fr 1.1fr;
  gap:60px;
  align-items:center;
}

/* LEFT IMAGES */
.sps-about-images{
  position:relative;
}

.sps-about-img-main{
  width:100%;
  border-radius:18px;
  box-shadow:0 25px 55px rgba(0,0,0,0.18);
}

.sps-about-img-float{
  position:absolute;
  bottom:-60px;
  right:-40px;
  width:65%;
  border-radius:16px;
  box-shadow:0 25px 55px rgba(0,0,0,0.2);
  border:6px solid #fff;
}

/* RIGHT CONTENT */
.sps-about-content small{
  display:block;
  font-size:13px;
  letter-spacing:0.14em;
  font-weight:800;
  color:#960546;
  margin-bottom:12px;
}

.sps-about-content h1{
  font-size:42px;
  line-height:1.25;
  font-weight:900;
  color:#1f1b3a;
  margin-bottom:16px;
}

.sps-about-content h1 span{
  color:#960546;
}

.sps-about-content p.sub{
  font-size:18px;
  color:#555;
  margin-bottom:22px;
}

.sps-about-content p{
  font-size:16px;
  color:#666;
  line-height:1.7;
  margin-bottom:26px;
}

/* LIST + STATS */
.sps-about-bottom{
  display:grid;
  grid-template-columns:1fr 300px;
  gap:30px;
  margin-top:20px;
}

/* CHECK LIST */
.sps-checks{
  display:flex;
  flex-direction:column;
  gap:14px;
}

.sps-check{
  display:flex;
  gap:12px;
  align-items:center;
  font-size:16px;
  font-weight:600;
  color:#1f1b3a;
}

.sps-check span{
  width:22px;
  height:22px;
  border-radius:50%;
  background:#960546;
  color:#fff;
  display:grid;
  place-items:center;
  font-size:14px;
}

/* EXPERIENCE CARD */
.sps-exp-card{
  background:linear-gradient(135deg,#960546,#7E314B);
  border-radius:18px;
  padding:26px;
  color:#fff;
  box-shadow:0 25px 55px rgba(150,5,70,0.45);
}

.sps-exp-card h3{
  font-size:20px;
  margin-bottom:14px;
}

.sps-exp-number{
  font-size:42px;
  font-weight:900;
  margin-top:10px;
}

/* ===== MOBILE ===== */
@media(max-width:1000px){
  .sps-about-wrap{
    grid-template-columns:1fr;
  }

  .sps-about-img-float{
    position:static;
    width:100%;
    margin-top:20px;
  }

  .sps-about-bottom{
    grid-template-columns:1fr;
  }

  .sps-about-content h1{
    font-size:32px;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sps-about-hero">
      <div className="sps-about-wrap">
        {/* LEFT */}
        <div className="sps-about-images">
          <img
            src="/images/ser/house.png"
            alt="Professional Packers"
            className="sps-about-img-main"
          />
          <img
            src="/images/truck.png"
            alt="Safe Transportation"
            className="sps-about-img-float"
          />
        </div>

        {/* RIGHT */}
        <div className="sps-about-content">
          <small>SPS PACKERS & MOVERS</small>

          <h1>
            Reliable Packers And Movers <span>Solutions Saves Your Time!</span>
          </h1>

          <p className="sub">
            Trusted Relocation Experts For A Hassle-Free Moving Experience.
          </p>

          <p>
            SPS Packers & Movers is a leading relocation service provider in
            South India, offering safe, reliable, and cost-effective moving
            solutions. With years of industry experience, we specialize in home
            shifting, office relocation, vehicle transportation, and storage
            solutions.
          </p>

          <div className="sps-about-bottom">
            {/* FEATURES */}
            <div className="sps-checks">
              {[
                "Reliable & Secure Moving",
                "Affordable Service Pricing",
                "Timely & Efficient Service",
                "Expert Packing & Handling"
              ].map((text, i) => (
                <div key={i} className="sps-check">
                  <span>✓</span> {text}
                </div>
              ))}
            </div>

            {/* EXPERIENCE */}
            <div className="sps-exp-card">
              <h3>Flexible, Improved & Accelerated Solutions!</h3>
              <div className="sps-exp-number">10+</div>
              <p>Years Of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  useEffect(() => {
    const css = `
/* ===== HOW WE WORK ===== */
.sps-work{
  padding:90px 6vw;
  background:#FDFCFC;
  font-family:Inter,system-ui;
}

/* HEADER */
.sps-work-head{
  text-align:center;
  margin-bottom:70px;
}

.sps-work-head h2{
  font-size:44px;
  font-weight:900;
  color:#1f1b3a;
}

.sps-work-head h2 span{
  color:#960546;
}

.sps-work-head p{
  margin-top:14px;
  color:#7E314B;
  font-size:16px;
}

/* LAYOUT */
.sps-work-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  gap:60px;
  align-items:center;
}

/* LEFT STEPS */
.sps-steps{
  position:relative;
  padding-left:40px;
}

/* VERTICAL LINE */
.sps-steps::before{
  content:"";
  position:absolute;
  left:16px;
  top:0;
  bottom:0;
  width:3px;
  background:linear-gradient(180deg,#960546,#B95778);
  border-radius:3px;
}

/* STEP */
.sps-step{
  display:flex;
  gap:24px;
  margin-bottom:36px;
  align-items:flex-start;
}

/* NUMBER */
.sps-step-num{
  width:38px;
  height:38px;
  border-radius:50%;
  background:linear-gradient(135deg,#960546,#B95778);
  color:#fff;
  font-weight:900;
  display:grid;
  place-items:center;
  flex-shrink:0;
  box-shadow:0 8px 18px rgba(150,5,70,0.35);
}

/* TEXT */
.sps-step h4{
  font-size:20px;
  font-weight:800;
  margin-bottom:6px;
  color:#1f1b3a;
}

.sps-step p{
  font-size:15px;
  color:#7E314B;
  line-height:1.6;
}

/* RIGHT IMAGE */
.sps-work-image{
  border-radius:20px;
  overflow:hidden;
  box-shadow:0 25px 60px rgba(0,0,0,0.25);
}

.sps-work-image img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

/* ===== MOBILE ===== */
@media(max-width:900px){
  .sps-work-grid{
    grid-template-columns:1fr;
    gap:40px;
  }

  .sps-steps{
    padding-left:30px;
  }

  .sps-work-head h2{
    font-size:32px;
  }
}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sps-work">
      {/* HEADER */}
      <div className="sps-work-head">
        <h2>
          How We <span>Work</span>
        </h2>
        <p>Our streamlined 5-step process ensures a smooth moving experience</p>
      </div>

      {/* CONTENT */}
      <div className="sps-work-grid">
        {/* LEFT */}
        <div className="sps-steps">
          <div className="sps-step">
            <div className="sps-step-num">1</div>
            <div>
              <h4>Free Consultation</h4>
              <p>We assess your needs and provide a detailed quotation.</p>
            </div>
          </div>

          <div className="sps-step">
            <div className="sps-step-num">2</div>
            <div>
              <h4>Planning & Scheduling</h4>
              <p>Customized moving plan with a clear timeline.</p>
            </div>
          </div>

          <div className="sps-step">
            <div className="sps-step-num">3</div>
            <div>
              <h4>Packing & Loading</h4>
              <p>Professional packing using high-quality materials.</p>
            </div>
          </div>

          <div className="sps-step">
            <div className="sps-step-num">4</div>
            <div>
              <h4>Transportation</h4>
              <p>Safe and secure transport with GPS tracking.</p>
            </div>
          </div>

          <div className="sps-step">
            <div className="sps-step-num">5</div>
            <div>
              <h4>Unpacking & Setup</h4>
              <p>Unpacking and arranging everything at your new location.</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="sps-work-image">
          <img src="/images/ser/house.png" alt="Packing process" />
        </div>
      </div>
    </section>
  );
}

 function WhyDifferent() {
  useEffect(() => {
    const css = `
/* ===== WHY DIFFERENT ===== */
.sps-different{
  // padding:90px 6vw;
  // background:linear-gradient(180deg,#FDFCFC,#EED3D6);
  font-family:Inter,system-ui;
}

/* HEADER */
.sps-different-head{
  text-align:center;
  margin-bottom:50px;
}

.sps-different-head h2{
  font-size:42px;
  font-weight:900;
  color:#960546;
}

.sps-different-head h2 span{
  color:#7E314B;
}

/* GRID */
.sps-different-grid{
  max-width:1100px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;
}

/* CARD */
.sps-diff-card{
  background:#ffffff;
  border-radius:22px;
  padding:34px 28px;
  box-shadow:0 20px 45px rgba(150,5,70,0.25);
  transition:all .35s ease;
  border:1.5px solid rgba(183,87,120,0.35);
}

.sps-diff-card:hover{
  transform:translateY(-8px);
  box-shadow:0 30px 60px rgba(150,5,70,0.35);
}

/* ICON */
.sps-diff-icon{
  width:58px;
  height:58px;
  border-radius:50%;
  background:linear-gradient(135deg,#960546,#B95778);
  color:#FDFCFC;
  display:grid;
  place-items:center;
  font-size:22px;
  font-weight:900;
  margin-bottom:18px;
}

/* TEXT */
.sps-diff-card h4{
  font-size:19px;
  font-weight:800;
  margin-bottom:10px;
  color:#960546;
}

.sps-diff-card p{
  font-size:15px;
  line-height:1.65;
  color:#7E314B;
}

/* RESPONSIVE */
@media(max-width:1000px){
  .sps-different-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:600px){
  .sps-different{
    padding:70px 5vw;
  }

  .sps-different-head h2{
    font-size:32px;
  }

  .sps-different-grid{
    grid-template-columns:1fr;
  }
}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sps-different">
      {/* HEADER */}
      <div className="sps-different-head">
        <h2>
          ⭐ What Makes <span>Us Different</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="sps-different-grid">
        <div className="sps-diff-card">
          <div className="sps-diff-icon">👷</div>
          <h4>Experienced Team</h4>
          <p>
            Skilled movers trained in safe packing, handling, and transportation
            techniques to ensure damage-free relocation.
          </p>
        </div>

        <div className="sps-diff-card">
          <div className="sps-diff-icon">🌍</div>
          <h4>Pan-India Coverage</h4>
          <p>
            Serving homes and businesses across major cities and regions with
            reliable logistics support.
          </p>
        </div>

        <div className="sps-diff-card">
          <div className="sps-diff-icon">📦</div>
          <h4>Quality Packing Materials</h4>
          <p>
            Premium materials used to protect your valuables during every stage
            of the move.
          </p>
        </div>

        <div className="sps-diff-card">
          <div className="sps-diff-icon">⏱️</div>
          <h4>On-Time Delivery</h4>
          <p>
            We respect your time and ensure timely pickup and delivery without
            unnecessary delays.
          </p>
        </div>

        <div className="sps-diff-card">
          <div className="sps-diff-icon">₹</div>
          <h4>Transparent Pricing</h4>
          <p>
            Clear quotations with no hidden charges, giving you complete peace
            of mind.
          </p>
        </div>
      </div>
    </section>
  );
}


 function WhyChooseSPS() {
  useEffect(() => {
    const css = `
/* ===== WHY CHOOSE SPS ===== */
.sps-why{
  // padding:90px 6vw;
  // background:#FDFCFC;
  padding-bottom:20px;
  font-family:Inter,system-ui;
}

/* HEADER */
.sps-why-head{
  text-align:center;
  margin-bottom:60px;
}

.sps-why-head h2{
  font-size:42px;
  font-weight:900;
  color:#1f1b3a;
}

.sps-why-head h2 span{
  color:#960546;
}

/* GRID */
.sps-why-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:28px;
}

/* CARD */
.sps-why-card{
  background:#ffffff;
  border-radius:18px;
  padding:36px 26px;
  text-align:center;
  box-shadow:0 18px 45px rgba(0,0,0,0.08);
  transition:transform .35s ease, box-shadow .35s ease;
}

.sps-why-card:hover{
  transform:translateY(-8px);
  box-shadow:0 28px 60px rgba(150,5,70,0.25);
}

/* ICON */
.sps-why-icon{
  width:56px;
  height:56px;
  margin:0 auto 18px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,#960546,#B95778);
  color:#fff;
  font-size:26px;
}

/* TITLE */
.sps-why-card h4{
  font-size:20px;
  font-weight:800;
  margin-bottom:10px;
  color:#1f1b3a;
}

/* TEXT */
.sps-why-card p{
  font-size:15px;
  color:#7E314B;
  line-height:1.6;
}

/* ===== RESPONSIVE ===== */
@media(max-width:1000px){
  .sps-why-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:600px){
  .sps-why-grid{
    grid-template-columns:1fr;
  }

  .sps-why-head h2{
    font-size:30px;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sps-why">
      {/* HEADER */}
      <div className="sps-why-head">
        <h2>
          Our <span>Features</span>
        </h2>
      </div>

      {/* CARDS */}
      <div className="sps-why-grid">
        <div className="sps-why-card">
          <div className="sps-why-icon">🛡️</div>
          <h4>Fully Insured</h4>
          <p>
            Comprehensive insurance coverage for complete peace of mind during
            relocation.
          </p>
        </div>

        <div className="sps-why-card">
          <div className="sps-why-icon">⏱️</div>
          <h4>On-Time Delivery</h4>
          <p>
            Proven on-time delivery with careful planning and real-time tracking.
          </p>
        </div>

        <div className="sps-why-card">
          <div className="sps-why-icon">🎧</div>
          <h4>24/7 Support</h4>
          <p>
            Round-the-clock customer support to assist you at every stage.
          </p>
        </div>

        <div className="sps-why-card">
          <div className="sps-why-icon">💰</div>
          <h4>Transparent Pricing</h4>
          <p>
            No hidden charges. Clear quotations with honest and competitive
            pricing.
          </p>
        </div>
      </div>
    </section>
  );
}


 function AwardsStripDark() {
  useEffect(() => {
    const css = `
/* ===== DARK AWARDS STRIP ===== */
.sps-awards-dark{
  padding:50px 0;
  background:
    radial-gradient(circle at top, rgba(150,5,70,0.25), transparent 45%),
    linear-gradient(180deg,#1a0b14,#0e0509);
  font-family:Inter,system-ui;
  overflow:hidden;
}

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

  /* ================================================
     EMBEDDED BASE64 AWARD LOGOS (NO FILES NEEDED)
     ================================================ */
  const awards = [
    {
      alt: "ISO Certified",
      img: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZmZmIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48dGV4dCB4PSI2IiB5PSIxNiIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSI3Ij5JU088L3RleHQ+PC9zdmc+"
    },
    {
      alt: "MSME Registered",
      img: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZmZmIj48cmVjdCB4PSIzIiB5PSI1IiB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHJ4PSI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjx0ZXh0IHg9IjQiIHk9IjE2IiBmaWxsPSIjZmZmIiBmb250LXNpemU9IjciPk1TTUU8L3RleHQ+PC9zdmc+"
    },
    {
      alt: "Trusted Company",
      img: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIgMiBsOSA0djZoLTl6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMiAyTDQgNiB2Nmw4IDR2LTYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+"
    },
    {
      alt: "Quality Award",
      img: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZmZmIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHJlY3Qg eT0iMTQiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHg9IjgiIHJ4PSIyIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="
    },
    {
      alt: "Safety Certificate",
      img: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIgMiBsOCA0djhjMCA1LjUtMy41IDgtOCA4cy04LTIuNS04LTh2LTggbDgtNHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+"
    },
    {
      alt: "5 Star Rated",
      img: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIgMiBsMi45IDUuOSA2LjUgLjk0LTQuNyA0LjYgMS4xIDYuNDQtNS44LTMuMDQtNS44IDMuMDQgMS4xLTYuNDQtNC43LTQuNiA2LjUtLjk1eiIvPjwvc3ZnPg=="
    }
  ];

  return (
    <section className="sps-awards-dark">
      <div className="sps-awards-dark-head">
        <small>AWARDS & CERTIFICATIONS</small>
        <h2>Recognized for <span>quality & trust</span></h2>
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
  padding:6vw;
  // background:#FDFCFC;
  // padding-bottom:20px;
  font-family:Inter,system-ui;
}

/* HEADER */
.sps-highlights-head{
  text-align:center;
  // margin-bottom:70px;
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

function StatsWaveStrip() {
  const refs = useRef([]);

  useEffect(() => {
    const animateCounter = (el) => {
      const target = +el.dataset.value;
      let current = 0;
      const step = Math.ceil(target / 60);

      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        el.innerText =
          target >= 100 ? `${current}+` : `${current}%`;
      }, 25);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("done")) {
            entry.target.classList.add("done");
            animateCounter(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    const css = `
/* ===== STATS WAVE STRIP ===== */
.sps-stats{
  position:relative;
  padding:90px 6vw;
  background:linear-gradient(135deg,#960546,#B95778);
  color:#fff;
  overflow:hidden;
  font-family:Inter,system-ui;
}

/* TOP & BOTTOM WAVES */
.sps-stats::before,
.sps-stats::after{
  content:"";
  position:absolute;
  left:0;
  width:100%;
  height:50px;
  background:#FDFCFC;
}

.sps-stats::before{
  top:-1px;
  border-bottom-left-radius:100% 60%;
  border-bottom-right-radius:100% 60%;
}

.sps-stats::after{
  bottom:-1px;
  border-top-left-radius:100% 60%;
  border-top-right-radius:100% 60%;
}

/* GRID */
.sps-stats-grid{
  position:relative;
  z-index:2;
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:40px;
  text-align:center;
}

/* ITEM */
.sps-stat{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
}

/* ICON */
.sps-stat-icon{
  width:52px;
  height:52px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:rgba(255,255,255,0.18);
  font-size:26px;
}

/* NUMBER */
.sps-stat-num{
  font-size:40px;
  font-weight:900;
  letter-spacing:1px;
}

/* LABEL */
.sps-stat-label{
  font-size:15px;
  font-weight:600;
  opacity:0.95;
}

/* ===== MOBILE ===== */
@media(max-width:900px){
  .sps-stats-grid{
    grid-template-columns:repeat(2,1fr);
    gap:30px;
  }
}

@media(max-width:500px){
  .sps-stats-grid{
    grid-template-columns:1fr;
  }
}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sps-stats">
      <div className="sps-stats-grid">
        <div className="sps-stat">
          <div className="sps-stat-icon">📍</div>
          <div
            className="sps-stat-num"
            data-value="500"
            ref={(el) => (refs.current[0] = el)}
          >
            0
          </div>
          <div className="sps-stat-label">Cities Covered</div>
        </div>

        <div className="sps-stat">
          <div className="sps-stat-icon">🏢</div>
          <div
            className="sps-stat-num"
            data-value="1000"
            ref={(el) => (refs.current[1] = el)}
          >
            0
          </div>
          <div className="sps-stat-label">Business Offices Relocated</div>
        </div>

        <div className="sps-stat">
          <div className="sps-stat-icon">🚚</div>
          <div
            className="sps-stat-num"
            data-value="100"
            ref={(el) => (refs.current[2] = el)}
          >
            0
          </div>
          <div className="sps-stat-label">Self-Owned Container Trucks</div>
        </div>

        <div className="sps-stat">
          <div className="sps-stat-icon">😊</div>
          <div
            className="sps-stat-num"
            data-value="96"
            ref={(el) => (refs.current[3] = el)}
          >
            0%
          </div>
          <div className="sps-stat-label">Satisfied Customers</div>
        </div>
      </div>
    </section>
  );
}

 function ShiftingProcess() {
  useEffect(() => {
    const css = `
/* ====== GLOBAL ====== */
.shift-wrap {
  padding:  6vw;
  padding-top:0px;

  // background: #FFF6F9;
  font-family: Inter, sans-serif;
}

/* HEADING */
.shift-title {
  text-align: center;
  font-size:42px;
  line-height:1.25;
  font-weight:900;
  color:#1f1b3a;
  // margin-bottom:16px;
}
  .shift-title h2 span{
  color:#960546;
}

//   .sps-about-content h1{
//   font-size:42px;
//   line-height:1.25;
//   font-weight:900;
//   color:#1f1b3a;
//   margin-bottom:16px;
// }


/* TIMELINE WRAPPER */
.shift-timeline {
  position: relative;
  padding-left: 70px;
}

/* LINE */
.shift-timeline::before {
  content: "";
  position: absolute;
  left: 35px;
  top: 0;
  bottom: 0;
  width: 6px;
  border-radius: 20px;
  background: linear-gradient(180deg, #C30458, #9F0052);
}

/* EACH STEP */
.shift-step {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  margin-bottom: 50px;
}

.shift-icon-box {
  width: 65px;
  height: 65px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 3px solid #C30458;
  box-shadow: 0 0 15px rgba(195, 4, 88, 0.25);
  font-size: 28px;
}

/* CARD */
.shift-card {
  background: #ffffff;
  padding: 22px 28px;
  border-radius: 16px;
  width: 100%;
  box-shadow: 0 8px 30px rgba(195, 4, 88, 0.10);
}

.shift-card-title {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 8px;
  background: linear-gradient(90deg, #C30458, #9F0052);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.shift-card-text {
  font-size: 16px;
  color: #7A1C38;
  line-height: 1.6;
}

/* MOBILE */
@media(max-width:700px){
  .shift-timeline { padding-left: 40px; }
  .shift-timeline::before { left: 18px; }
  .shift-step { gap: 20px; }
  .shift-icon-box { width: 50px; height: 50px; font-size: 22px; }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  const steps = [
    {
      icon: "📋",
      title: "Assign Us Service",
      desc: "Once you approve our quotation, we schedule your shifting service immediately."
    },
    {
      icon: "📦",
      title: "Loading and Packing",
      desc: "We carefully pack and load your belongings with premium packing materials."
    },
    {
      icon: "🚚",
      title: "Transportation Service",
      desc: "Your items are transported safely to the destination with GPS-enabled vehicles."
    },
    {
      icon: "📬",
      title: "Unpacking & Unloading",
      desc: "We unload, unpack, and help arrange your essentials at the new location."
    },
  ];

  return (
    <section className="shift-wrap">
      <h2 className="shift-title">Check Out Our <span>
Shifting Process</span></h2>

      <div className="shift-timeline">
        {steps.map((s, i) => (
          <div className="shift-step" key={i}>
            <div className="shift-icon-box">{s.icon}</div>

            <div className="shift-card">
              <div className="shift-card-title">{s.title}</div>
              <div className="shift-card-text">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  useEffect(() => {
    const css = `
/* ===== WRAPPER ===== */
.about-wrap {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  padding: 100px 6vw;
  align-items: center;
  background: #ffffff;
  font-family: Inter, sans-serif;
}

/* LEFT IMAGES */
.about-left {
  position: relative;
}

.about-main-img img {
  width: 90%;
  border-radius: 26px;
  height:500px;
}

.about-small-img {
  position: absolute;
  bottom: -40px;
  right: 20px;
  width: 55%;
  border-radius: 22px;
  border: 6px solid #C30458; /* Brand primary */
}

.about-small-img img {
  width: 100%;
  border-radius: 18px;
  height:305px;
}

/* RIGHT CONTENT */
.about-top-text {
  font-size: 15px;
  font-weight: 700;
  color: #0B0E3F; /* Dark brand color */
  letter-spacing: 1px;
}

.about-title {
  font-size: 42px;
  font-weight: 900;
  margin: 15px 0;
  color: #0B0E3F;
}

.about-desc {
  font-size: 17px;
  line-height: 1.7;
  margin-bottom: 35px;
  color: #7A1C38;
}

/* FEATURES */
.about-feature {
  display: flex;
  gap: 18px;
  margin-bottom: 25px;
  align-items: center;
}

.feature-icon-box {
  width: 55px;
  height: 55px;
  background: #FFF1F7;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
}

.feature-title {
  font-size: 20px;
  font-weight: 800;
  color: #0B0E3F;
}

.feature-text {
  font-size: 15px;
  color: #7A1C38;
  margin-top: 4px;
}

/* RESPONSIVE */
@media(max-width: 950px) {
  .about-wrap {
    grid-template-columns: 1fr;
  }

  .about-left {
    margin-bottom: 60px;
  }

  .about-small-img {
    position: relative;
    width: 70%;
    bottom: -20px;
    right: 0;
    margin: auto;
  }
}

@media(max-width: 600px) {
  .about-title {
    font-size: 32px;
  }

  .about-desc {
    font-size: 16px;
  }

  .feature-title {
    font-size: 18px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="about-wrap">
      
      {/* LEFT SIDE IMAGES */}
      <div className="about-left">
        <div className="about-main-img">
          <img
            src="https://images.pexels.com/photos/4246110/pexels-photo-4246110.jpeg"
            alt="Relocation team"
          />
        </div>

        <div className="about-small-img">
          <img
            src="https://images.pexels.com/photos/7464660/pexels-photo-7464660.jpeg"
            alt="Packing service"
          />
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="about-right">
        <p className="about-top-text">WHY WE ARE THE BEST</p>

        <h2 className="about-title">
          We Simplify Relocation <br /> with Experience & Care
        </h2>

        <p className="about-desc">
          At SPS Packers & Movers, we make every move stress-free — whether it’s
          your home, office, or vehicle. With trusted service and trained
          professionals, we ensure your belongings are packed safely, transported
          securely, and delivered on time.
        </p>

        <div className="about-feature">
          <div className="feature-icon-box"><span>📈</span></div>
          <div>
            <h4 className="feature-title">Expert Relocation Team</h4>
            <p className="feature-text">
              Our trained team ensures every shift is handled with care.
            </p>
          </div>
        </div>

        <div className="about-feature">
          <div className="feature-icon-box"><span>💰</span></div>
          <div>
            <h4 className="feature-title">Affordable Pricing</h4>
            <p className="feature-text">
              Enjoy smooth relocation without stretching your budget.
            </p>
          </div>
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
  color: #1E1B4B;
  margin-bottom: 40px;
}

.sps-testimonial-slider {
  max-width: 750px;
  margin: auto;
  position: relative;
}

/* ================== CARD ================== */
.sps-testimonial-card {
  // background: #ffffff;
  border-radius: 18px;
  padding: 50px 35px;
  position: relative;
  color: #1E1B4B;
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
  background: linear-gradient(135deg, #960546, #B95778);
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
  color: #fff;
  padding: 0 10px;
}

.sps-testimonial-name {
  font-size: 18px;
  color: #fff;
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
  background: #960546;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(150,5,70,0.3);
  transition: 0.3s;
}

.sps-testimonial-btn:hover {
  background: #7E314B;
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
              background: "linear-gradient(135deg, #960546, #B95778)" 
            }}
          ></div>

          {/* CLIENT IMAGE */}
          <div className="sps-testimonial-img">
            <img src={testimonials[index].img} alt="client" />
          </div>

          {/* TEXT */}
          <p className="sps-testimonial-text">“{testimonials[index].text}”</p>
          <div className="sps-testimonial-name">— {testimonials[index].name}</div>
        </div>

        {/* CONTROLS */}
        <div className="sps-testimonial-controls">
          <button className="sps-testimonial-btn" onClick={prev}>‹</button>
          <button className="sps-testimonial-btn" onClick={next}>›</button>
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


<AboutHero />

<MissionVision />
<ChooseWe /> 
<WhyDifferent /> 
 <AboutSection />
 

<WhyChooseSPS />

<StatsWaveStrip />
{/* <HowWeWork /> */}
{/* <UniqueFactsTimeline /> */}
{/* <CompanyTimeline /> */}
<AwardsStripDark />

<ShiftingProcess />
<KeyHighlights />
<Testimonials />
</>
  );
}
