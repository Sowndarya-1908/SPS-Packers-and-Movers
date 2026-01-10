import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

// const services = [
//   {
//     title: "House Shifting",
//     img: "/images/services/houseshifting.png",
//     desc: "Safe packing & smooth relocation."
//   },
//   {
//     title: "Transportation",
//     img: "/images/services/transs.png",
//     desc: "Fast & secure logistics services."
//   },
//   {
//     title: "AC Installation",
//     img: "/images/services/ac.png",
//     desc: "Safe dismantling & re-installation."
//   },
//   {
//     title: "Godown Shifting",
//     img: "/images/services/godown.png",
//     desc: "Warehouse & inventory relocation."
//   },
//   {
//     title: "Office Shifting",
//     img: "/images/services/office.png",
//     desc: "Professional office relocation."
//   },
//   {
//     title: "Commercial Moves",
//     img: "/images/services/comm.png",
//     desc: "End-to-end business moves."
//   }
// ];

// function ServicesSlide() {
//   const [active, setActive] = useState(2);

//   useEffect(() => {
//     const css = `
// /* ================== SECTION ================== */
// .sps-coverflow{
//   background:#fff;
//   padding:100px 0;
//   overflow:hidden;
// }

// .sps-section-head{
//   text-align:center;
//   margin-bottom:70px;
//   font-family:Inter,system-ui;
// }

// .sps-section-head h2{
//   font-size:46px;
//   font-weight:900;
//   color:#1f1b3a;
//   margin:0;
// }

// .sps-section-head span{
//   color:#960546;
// }

// /* ================== COVERFLOW ================== */
// .sps-flow{
//   position:relative;
//   height:240px;
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   perspective:1200px;
// }

// /* ================== CARD OUTER ================== */
// .sps-card{
//   width:420px;
//   height:150px;
//   background:rgba(255,255,255,0.12);
//   backdrop-filter:blur(8px);
//   border-radius:16px;
//   padding:0;
//   position:absolute;
//   text-decoration:none;
//   transition:transform 0.5s, opacity 0.4s;
//   display:flex;
//   align-items:center;
// }

// /* ================== INNER CONTENT ================== */
// .sps-card-inner{
//   display:flex;
//   align-items:center;
//   width:100%;
//   height:100%;
//   padding:15px 18px;
// }

// /* ================== ICON BADGE ================== */
// .sps-card-icon{
//   width:85px;
//   height:85px;
//   border-radius:14px;
//   display:flex;
//   flex-direction:column;
//   align-items:center;
//   justify-content:center;
//   color:#fff;
//   margin-right:20px;
//   box-shadow:0 10px 25px rgba(0,0,0,0.25);
// }

// .sps-card-icon img{
//   width:42px;
//   height:42px;
//   object-fit:contain;
//   margin-bottom:4px;
// }

// .sps-card-icon span{
//   font-size:11px;
//   font-weight:700;
// }

// /* ================== GRADIENTS PER CARD ================== */
// .sps-0{ background:linear-gradient(135deg,#8b00ff,#ff00c8); }
// .sps-1{ background:linear-gradient(135deg,#ff7a00,#ff1f00); }
// .sps-2{ background:linear-gradient(135deg,#007bff,#00e0ff); }
// .sps-3{ background:linear-gradient(135deg,#ff00c8,#ff7a00); }
// .sps-4{ background:linear-gradient(135deg,#7b2cff,#14ffe9); }
// .sps-5{ background:linear-gradient(135deg,#00c2ff,#0066ff); }

// /* ================== TEXT ================== */
// .sps-card-text h3{
//   font-size:20px;
//   font-weight:900;
//   color:#fff;
//   margin:0 0 6px 0;
// }

// .sps-card-text p{
//   font-size:14px;
//   color:#f1f1f1;
//   line-height:1.45;
//   margin:0;
// }

// /* ================== COVERFLOW POSITIONS ================== */
// .sps-center{
//   transform:translateX(0) scale(1.15);
//   z-index:3;
//   box-shadow:
//     0 0 0 3px rgba(255,255,255,0.2),
//     0 25px 65px rgba(0,0,0,0.45),
//     0 0 30px rgba(255,255,255,0.25);
// }

// .sps-left{
//   transform:translateX(-280px) rotateY(40deg) scale(0.9);
//   opacity:0.5;
// }

// .sps-right{
//   transform:translateX(280px) rotateY(-40deg) scale(0.9);
//   opacity:0.5;
// }

// .sps-hide{
//   transform:scale(0.65);
//   opacity:0;
// }

// /* ================== CONTROLS ================== */
// .sps-controls{
//   display:flex;
//   justify-content:center;
//   gap:20px;
//   margin-top:40px;
// }

// .sps-btn{
//   background:#960546;
//   color:#fff;
//   border:none;
//   width:45px;
//   height:45px;
//   border-radius:50%;
//   font-size:22px;
//   cursor:pointer;
//   box-shadow:0 5px 15px rgba(0,0,0,0.25);
// }

// /* ================== MOBILE ================== */
// @media(max-width:900px){
//   .sps-left{ transform:translateX(-180px) rotateY(35deg) scale(0.85); }
//   .sps-right{ transform:translateX(180px) rotateY(-35deg) scale(0.85); }
//   .sps-section-head h2{ font-size:32px; }
// }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);
//   }, []);

//   const prev = () => {
//     setActive((prev) => (prev - 1 + services.length) % services.length);
//   };

//   const next = () => {
//     setActive((prev) => (prev + 1) % services.length);
//   };

//   const getClass = (index) => {
//     if (index === active) return "sps-card sps-center";
//     if (index === active - 1 || (active === 0 && index === services.length - 1))
//       return "sps-card sps-left";
//     if (index === active + 1 || (active === services.length - 1 && index === 0))
//       return "sps-card sps-right";
//     return "sps-card sps-hide";
//   };

//   return (
//     <section className="sps-coverflow">

//       <div className="sps-section-head">
//         <h2>
//           Reliable moving services built <br />
//           <span>around you</span>
//         </h2>
//       </div>

//       <div className="sps-flow">
//         {services.map((s, i) => (
//           <Link to="/services" key={i} className={getClass(i)}>
//             <div className="sps-card-inner">

//               <div className={`sps-card-icon sps-${i}`}>
//                 <img src={s.img} alt={s.title} />
//                 <span>OPTION</span>
//               </div>

//               <div className="sps-card-text">
//                 <h3>{s.title}</h3>
//                 <p>{s.desc}</p>
//               </div>

//             </div>
//           </Link>
//         ))}
//       </div>

//       <div className="sps-controls">
//         <button className="sps-btn" onClick={prev}>‹</button>
//         <button className="sps-btn" onClick={next}>›</button>
//       </div>

//     </section>
//   );
// }

//  function ServicesOptions() {

//   const services = [
//     {
//       title: "House Shifting",
//       desc: "Safe packing & smooth relocation.",
//       color: "linear-gradient(135deg, #9b00ff, #ff00b4)"
//     },
//     {
//       title: "Transportation",
//       desc: "Fast & secure logistics services.",
//       color: "linear-gradient(135deg, #ff7a00, #ff1f00)"
//     },
//     {
//       title: "AC Installation",
//       desc: "Safe dismantling & re-installation.",
//       color: "linear-gradient(135deg, #007bff, #00e0ff)"
//     },
//     {
//       title: "Godown Shifting",
//       desc: "Warehouse & inventory relocation.",
//       color: "linear-gradient(135deg, #ff00b4, #ff7a00)"
//     },
//     {
//       title: "Office Shifting",
//       desc: "Professional office relocation.",
//       color: "linear-gradient(135deg, #7b2cff, #14ffe9)"
//     },
//     {
//       title: "Commercial Moves",
//       desc: "End-to-end business moves.",
//       color: "linear-gradient(135deg, #00c2ff, #0066ff)"
//     }
//   ];

//   /* ADD CSS */
//   useEffect(() => {
//     const css = `
// /* ================== WRAPPER ================== */
// .sps-services-list {
//   width: 100%;
//   max-width: 900px;
//   margin: 80px auto;
//   display: flex;
//   flex-direction: column;
//   gap: 40px;
//   font-family: Inter, system-ui;
// }

// /* ================== CARD BOX ================== */
// .sps-service-card {
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   padding: 18px 25px;
//   background: #ffffff10;
//   border-radius: 18px;
//   box-shadow: 0 10px 30px rgba(0,0,0,0.25);
//   backdrop-filter: blur(8px);
//   color: #fff;
//   position: relative;
//   overflow: hidden;
// }

// /* angled shape (like image) */
// .sps-service-card::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   border-radius: 18px;
//   padding: 3px;
//   background: var(--grad);
//   -webkit-mask:
//     linear-gradient(#fff 0 0) content-box,
//     linear-gradient(#fff 0 0);
//   -webkit-mask-composite: xor;
//           mask-composite: exclude;
// }

// /* ================== ICON ================== */
// .sps-icon-box {
//   width: 80px;
//   height: 80px;
//   background: var(--grad);
//   border-radius: 14px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: 13px;
//   font-weight: 700;
//   color: #fff;
//   text-align: center;
//   padding: 10px;
// }

// .sps-icon-box img {
//   width: 38px;
//   height: 38px;
//   margin-bottom: 4px;
// }

// /* ================== TEXT ================== */
// .sps-card-text h3 {
//   font-size: 22px;
//   font-weight: 900;
//   margin: 0 0 5px 0;
//   color: #fff;
// }

// .sps-card-text p {
//   margin: 0;
//   font-size: 14px;
//   color: #eeeeee;
// }

// /* ================== MOBILE ================== */
// @media (max-width: 600px) {
//   .sps-service-card {
//     flex-direction: column;
//     text-align: center;
//   }
// }
// `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);
//   }, []);

//   return (
//     <div className="sps-services-list">

//       {services.map((s, i) => (
//         <div
//           key={i}
//           className="sps-service-card"
//           style={{ "--grad": s.color }}
//         >
//           <div className="sps-icon-box">
//             <img src="/images/services/icon.png" alt="icon" />
//             OPTION
//           </div>

//           <div className="sps-card-text">
//             <h3>{s.title}</h3>
//             <p>{s.desc}</p>
//           </div>
//         </div>
//       ))}

//     </div>
//   );
// }



 function ServicesOptions() {
  
  const services = [
    {
      title: "House Shifting",
      desc: "Safe packing & smooth relocation.",
      icon: "/images/services/houseshifting.png",
      color: "linear-gradient(135deg, #960546, #B95778)"
    },
    {
      title: "Transportation",
      desc: "Fast & secure logistics services.",
      icon: "/images/services/transs.png",
      color: "linear-gradient(135deg, #B95778, #7E314B)"
    },
    {
      title: "AC Installation",
      desc: "Safe dismantling & re-installation.",
      icon: "/images/services/ac.png",
      color: "linear-gradient(135deg, #960546, #7E314B)"
    },
    {
      title: "Godown Shifting",
      desc: "Warehouse & inventory relocation.",
      icon: "/images/services/godown.png",
      color: "linear-gradient(135deg, #7E314B, #B95778)"
    },
    {
      title: "Office Shifting",
      desc: "Professional office relocation.",
      icon: "/images/services/office.png",
      color: "linear-gradient(135deg, #960546, #B95778)"
    },
    {
      title: "Commercial Moves",
      desc: "End-to-end business moves.",
      icon: "/images/services/comm.png",
      color: "linear-gradient(135deg, #B95778, #7E314B)"
    }
  ];

  useEffect(() => {
    const css = `
/* ================= SECTION ================= */
.sps-services-section {
  width: 100%;
  padding: 80px 0;
  font-family: Inter, system-ui;
}

.sps-services-heading {
  text-align: center;
  margin-bottom: 55px;
}

.sps-services-heading h2 {
  font-size: 42px;
  font-weight: 900;
  color: #1E1B4B;
}

/* ================= LIST ================= */
.sps-services-list {
  width: 100%;
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 45px;
}

/* ================= CARD ================= */
.sps-service-card {
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 22px 28px;
  background: #ffffffdf;
  border-radius: 18px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.15);
  backdrop-filter: blur(10px);
  color: #000;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transform: translateX(-40px);
  opacity: 0;
  animation: slideIn 0.7s forwards;
}

/* SLIDE-IN ANIMATION */
@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* border gradient */
.sps-service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 18px;
  padding: 3px;
  background: var(--grad);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
}

/* ================= HOVER EFFECT ================= */
.sps-service-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 18px 35px rgba(150,5,70,0.25);
}

.sps-service-card:hover .sps-icon-box {
  transform: rotate(-3deg) scale(1.08);
}

.sps-service-card:hover .sps-number {
  transform: translateX(6px);
}

/* ================= NUMBER ================= */
.sps-number {
  position: absolute;
  top: 12px;
  right: 20px;
  font-size: 32px;
  font-weight: 900;
  color: #960546;
  opacity: 0.15;
  transition: 0.3s;
}

/* ================= ICON ================= */
.sps-icon-box {
  width: 85px;
  height: 85px;
  background: var(--grad);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  transition: 0.3s;
}

.sps-icon-box img {
  width: 42px;
  height: 42px;
  margin-bottom: 4px;
}

/* ================= TEXT ================= */
.sps-card-text h3 {
  font-size: 22px;
  font-weight: 900;
  margin: 0 0 6px 0;
  color: #1E1B4B;
}

.sps-card-text p {
  margin: 0;
  font-size: 15px;
  color: #444;
  line-height: 1.5;
}

/* ================= MOBILE ================= */
@media(max-width: 650px) {
  .sps-service-card {
    flex-direction: column;
    text-align: center;
    padding: 30px;
  }
  .sps-number { right: 10px; font-size: 26px; }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sps-services-section">
      
      {/* HEADING */}
      <div className="sps-services-heading">
        <h2>Our Services</h2>
      </div>

      {/* LIST */}
      <div className="sps-services-list">
        {services.map((s, i) => (
          <Link
            to="/services"  // 👈 All cards go to Services page
            key={i}
            className="sps-service-card"
            style={{ "--grad": s.color }}
          >
            <div className="sps-icon-box">
              <img src={s.icon} alt={s.title} />
              OPTION
            </div>

            <div className="sps-card-text">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>

            <div className="sps-number">
              {String(i + 1).padStart(2, "0")}
            </div>

          </Link>
        ))}
      </div>

    </section>
  );
}


//  function ServicesOptions() {

//   const services = [
//     {
//       title: "House Shifting",
//       desc: "Safe packing & smooth relocation.",
//       icon: "/images/services/houseshifting.png",
//       color: "linear-gradient(135deg, #9b00ff, #ff00b4)"
//     },
//     {
//       title: "Transportation",
//       desc: "Fast & secure logistics services.",
//       icon: "/images/services/transs.png",
//       color: "linear-gradient(135deg, #ff7a00, #ff1f00)"
//     },
//     {
//       title: "AC Installation",
//       desc: "Safe dismantling & re-installation.",
//       icon: "/images/services/ac.png",
//       color: "linear-gradient(135deg, #007bff, #00e0ff)"
//     },
//     {
//       title: "Godown Shifting",
//       desc: "Warehouse & inventory relocation.",
//       icon: "/images/services/godown.png",
//       color: "linear-gradient(135deg, #ff00b4, #ff7a00)"
//     },
//     {
//       title: "Office Shifting",
//       desc: "Professional office relocation.",
//       icon: "/images/services/office.png",
//       color: "linear-gradient(135deg, #7b2cff, #14ffe9)"
//     },
//     {
//       title: "Commercial Moves",
//       desc: "End-to-end business moves.",
//       icon: "/images/services/comm.png",
//       color: "linear-gradient(135deg, #00c2ff, #0066ff)"
//     }
//   ];

//   /* ADD CSS */
//   useEffect(() => {
//     const css = `
// /* ================== WRAPPER ================== */
// .sps-services-section {
//   width: 100%;
//   padding: 80px 0;
//   font-family: Inter, system-ui;
// }

// .sps-services-heading {
//   text-align: center;
//   margin-bottom: 50px;
// }

// .sps-services-heading h2 {
//   font-size: 42px;
//   font-weight: 900;
//   color: #1f1b3a;
// }

// .sps-services-list {
//   width: 100%;
//   max-width: 900px;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   gap: 40px;
// }

// /* ================== CARD BOX ================== */
// .sps-service-card {
//   display: flex;
//   align-items: center;
//   gap: 22px;
//   padding: 20px 28px;
//   background: rgba(255,255,255,0.2);
//   border-radius: 18px;
//   box-shadow: 0 10px 25px rgba(0,0,0,0.25);
//   backdrop-filter: blur(10px);
//   color: #000;
//   position: relative;
//   overflow: hidden;
// }

// /* angled gradient outline */
// .sps-service-card::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   border-radius: 18px;
//   padding: 3px;
//   background: var(--grad);
//   -webkit-mask:
//     linear-gradient(#fff 0 0) content-box,
//     linear-gradient(#fff 0 0);
//   -webkit-mask-composite: xor;
//           mask-composite: exclude;
// }

// /* ================== ICON ================== */
// .sps-icon-box {
//   width: 85px;
//   height: 85px;
//   background: var(--grad);
//   border-radius: 16px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   font-size: 12px;
//   font-weight: 700;
// }

// .sps-icon-box img {
//   width: 42px;
//   height: 42px;
//   margin-bottom: 4px;
// }

// /* ================== TEXT ================== */
// .sps-card-text h3 {
//   font-size: 22px;
//   font-weight: 900;
//   margin: 0 0 6px 0;
//   color: #222;
// }

// .sps-card-text p {
//   margin: 0;
//   font-size: 15px;
//   color: #444;
//   line-height: 1.5;
// }

// /* ================== MOBILE ================== */
// @media (max-width: 650px) {
//   .sps-service-card {
//     flex-direction: column;
//     text-align: center;
//     padding: 25px;
//   }

//   .sps-card-text h3 {
//     font-size: 20px;
//   }
// }
// `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);
//   }, []);


//   return (
//     <section className="sps-services-section">

//       {/* HEADING */}
//       <div className="sps-services-heading">
//         <h2>Our Services</h2>
//       </div>

//       {/* SERVICES LIST */}
//       <div className="sps-services-list">
//         {services.map((s, i) => (
//           <div
//             key={i}
//             className="sps-service-card"
//             style={{ "--grad": s.color }}
//           >
//             <div className="sps-icon-box">
//               <img src={s.icon} alt={s.title} />
//               OPTION
//             </div>

//             <div className="sps-card-text">
//               <h3>{s.title}</h3>
//               <p>{s.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//     </section>
//   );
// }


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

function GeometricHero() {
  useEffect(() => {
    const css = `
/* ================== HERO WRAPPER ================== */
.geo-hero {
  width: 100%;
  height: 100vh;
  padding: 0 6vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #ff0080, #7928ca, #2afadf, #4c83ff);
  background-size: 400% 400%;
  animation: geoBG 12s ease infinite;
  color: #fff;
  overflow: hidden;
  position: relative;
  font-family: 'Inter', sans-serif;
}

/* BACKGROUND ANIMATION */
@keyframes geoBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* LEFT COLUMN */
.geo-left {
  max-width: 480px;
  z-index: 10;
}

.geo-title {
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 10px;
}

.geo-sub {
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 20px;
}

.geo-desc {
  font-size: 16px;
  line-height: 1.7;
  opacity: 0.85;
  margin-bottom: 28px;
}

.geo-btn {
  display: inline-block;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 30px;
  background: linear-gradient(90deg, #14ffe9, #ff00e0);
  border: none;
  cursor: pointer;
  color: #fff;
  transition: 0.3s;
}

.geo-btn:hover {
  opacity: 0.85;
}

/* ================== GEOMETRIC SHAPES ================== */
.geo-shapes {
  position: absolute;
  right: -80px;
  bottom: -50px;
  width: 60%;
  height: 100%;
  pointer-events: none;
}

.shape-box {
  position: absolute;
  width: 130px;
  height: 130px;
  background: linear-gradient(135deg, #ffec00, #ff00c8);
  transform: rotate(25deg);
  border-radius: 12px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.4);
}

.shape-box.small {
  width: 80px;
  height: 80px;
}

.shape-box.tiny {
  width: 55px;
  height: 55px;
}

/* shape positions */
.shape1 { top: 12%; right: 22%; }
.shape2 { top: 40%; right: 10%; }
.shape3 { top: 65%; right: 28%; }
.shape4.small { top: 22%; right: 42%; }
.shape5.tiny { top: 75%; right: 15%; }

/* ================== RESPONSIVE ================== */
@media (max-width: 900px) {
  .geo-hero {
    flex-direction: column;
    text-align: center;
    height: auto;
    padding-top: 120px;
    padding-bottom: 160px;
  }

  .geo-left {
    max-width: 100%;
  }

  .geo-shapes {
    width: 100%;
    right: 0;
    bottom: 0;
  }

  .shape-box {
    opacity: 0.7;
  }
}

@media (max-width: 600px) {
  .geo-title { font-size: 34px; }
  .geo-sub { font-size: 18px; }
  .geo-desc { font-size: 14px; }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="geo-hero">

      {/* LEFT CONTENT */}
      <div className="geo-left">
        <h1 className="geo-title">GEOMETRIC</h1>
        <h3 className="geo-sub">Landing Page</h3>
        <p className="geo-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          suscipit tellus vitae purus dignissim, nec tincidunt neque condimentum.
        </p>
        <button className="geo-btn">Learn More</button>
      </div>

      {/* GEOMETRIC SHAPES */}
      <div className="geo-shapes">
        <div className="shape-box shape1"></div>
        <div className="shape-box shape2"></div>
        <div className="shape-box shape3"></div>
        <div className="shape-box small shape4"></div>
        <div className="shape-box tiny shape5"></div>
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
  border-left: 5px solid #960546;
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
  border: 4px solid #960546;
  background: #fff;
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
 <ServicesOptions />
 <StatsWaveStrip />

 <WorkProcess />
 <CustomerSatisfactionTimeline />
<Testimonials />
</>
  );
}


