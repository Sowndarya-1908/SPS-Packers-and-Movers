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

    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {

    /* ===== SCROLL ANIMATION ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-service-visible");
        }
      });
    }, { threshold: 0.2 });

    sectionRef.current.forEach(el => el && observer.observe(el));

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== SECTION ===== */
.sps-service-wrap{
  padding: 6vw;
  padding-top: 20px;
  font-family:Inter,system-ui;
  // background:#FDFCFC;
}

/* ===== ROW ===== */
.sps-service-row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:70px;
  align-items:center;
  margin-bottom:120px;
  opacity:0;
  transform:translateY(60px);
  transition:all .9s cubic-bezier(.22,.61,.36,1);
}

.sps-service-visible{
  opacity:1;
  transform:translateY(0);
}

/* Alternate layout */
.sps-service-row:nth-child(even) .sps-service-img{
  order:2;
}
.sps-service-row:nth-child(even) .sps-service-content{
  order:1;
}

/* ===== IMAGE ===== */
.sps-service-img{
  overflow:hidden;
  border-radius:22px;
}

.sps-service-img img{
  width:100%;
  height:100%;
  max-height:480px;
  object-fit:cover;
  border-radius:22px;
  transition:transform .7s ease;
}

.sps-service-row:hover .sps-service-img img{
  transform:scale(1.08);
}

/* ===== CONTENT ===== */
.sps-service-content h3{
  font-size:38px;
  font-weight:900;
  color:#062242;
  margin-bottom:18px;
}

.sps-service-content p{
  font-size:16.5px;
  line-height:1.8;
  color:#062242;
  max-width:520px;
}

/* ===== BUTTONS ===== */
.sps-btns{
  display:flex;
  gap:18px;
  margin-top:30px;
  flex-wrap:wrap;
}

.sps-btn{
  padding:15px 30px;
  font-size:15px;
  font-weight:800;
  border-radius:12px;
  border:none;
  cursor:pointer;
  transition:all .3s ease;
}

/* Primary */
.sps-btn-primary{
  background:linear-gradient(90deg,#062242,#3F6C87);
  color:#fff;
}

.sps-btn-primary:hover{
  transform:translateY(-3px);
  box-shadow:0 12px 25px rgba(6,34,66,0.35);
}

/* WhatsApp */
.sps-btn-whatsapp{
  background:#25D366;
  color:#fff;
}

.sps-btn-whatsapp:hover{
  transform:translateY(-3px);
  box-shadow:0 12px 25px rgba(37,211,102,0.4);
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .sps-service-row{
    gap:40px;
  }

  .sps-service-content h3{
    font-size:30px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:768px){

  .sps-service-row{
    grid-template-columns:1fr;
    margin-bottom:80px;
  }

  .sps-service-content h3{
    font-size:26px;
  }

  .sps-service-content p{
    font-size:15px;
  }

  .sps-service-img img{
    max-height:300px;
  }

  .sps-btn{
    width:100%;
    text-align:center;
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
      desc: "We make home relocation seamless and stress-free using high-quality packing materials and modern equipment."
    },
    {
      title: "Office Shifting",
      img: "/images/bgserv/offs.png",
      desc: "Professional office relocation ensuring minimal downtime and safe IT equipment handling."
    },
    {
      title: "Transportation",
      img: "/images/bgserv/transmini.png",
      desc: "Fast and reliable GPS-enabled transportation for safe and timely delivery."
    },
    {
      title: "AC Installation",
      img: "/images/bgserv/bgacmini.png",
      desc: "Expert AC dismantling, shifting and re-installation with complete safety."
    },
    {
      title: "Godown Shifting",
      img: "/images/bgserv/godownmin.png",
      desc: "Complete warehouse and inventory relocation with heavy equipment handling."
    },
    {
      title: "Commercial Moves",
      img: "/images/bgserv/bgcommmini.png",
      desc: "End-to-end commercial relocation solutions for businesses and industries."
    }
  ];

  return (
    <section className="sps-service-wrap">

      {services.map((service, index) => (
        <div
          className="sps-service-row"
          key={index}
          ref={(el) => (sectionRef.current[index] = el)}
        >
          <div className="sps-service-img">
            <img src={service.img} alt={service.title} />
          </div>

          <div className="sps-service-content">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

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
            Discover our complete moving solutions at CHENNAI LAL Packers & Movers.
            From local to long-distance moves, packing, unpacking, and storage
            options, we ensure smooth and secure relocation tailored to your needs.
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
  min-height:90vh;
  padding:0px 6vw;
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
          Delivering Excellence <br />
          <span>Across India.</span>
        </h1>
      </section>

      <ServicesIntro />
      <ServicesShowcase />
      <SkillSection />
      <TamilNaduCitySearch />
    </>
  );
}