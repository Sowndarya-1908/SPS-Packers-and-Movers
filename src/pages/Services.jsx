import { useEffect, useState } from "react";
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
  width:550px;
  height:500px;
  // border-radius:22px;
  // box-shadow:0 25px 60px rgba(6,34,66,0.25); /* BLUE SHADOW */
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
  color:#062242; /* BLUE */
  margin-bottom:16px;
}

.sps-service-content p{
  font-size:16px;
  line-height:1.75;
  color:#062242; /* BLUE */
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

/* PRIMARY BLUE BUTTON */
.sps-btn-primary{
  background:linear-gradient(90deg,#062242,#3F6C87); /* BLUE GRADIENT */
  color:#fff;
}

.sps-btn-primary:hover{
  background:linear-gradient(90deg,#04172e,#34556f);
}

/* WHATSAPP BUTTON */
.sps-btn-whatsapp{
  background:#25D366;
  color:#fff;
}

.sps-btn-whatsapp:hover{
  background:#1ebe5d;
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

  {/* HOUSE SHIFTING */}
  <div className="sps-service-row">
    <div className="sps-service-img">
      <img src="/images/bgserv/bghousemini.png" alt="House Shifting" />
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

  {/* OFFICE SHIFTING */}
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
      <img src="/images/bgserv/offs.png" alt="Office Shifting" />
    </div>
  </div>

  {/* TRANSPORTATION */}
  <div className="sps-service-row">
    <div className="sps-service-img">
      <img src="/images/bgserv/transmini.png" alt="Transportation" />
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

  {/* AC INSTALLATION */}
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
      <img src="/images/bgserv/bgacmini.png" alt="AC Installation" />
    </div>
  </div>

  {/* GODOWN SHIFTING */}
  <div className="sps-service-row">
    <div className="sps-service-img">
      <img src="/images/bgserv/godownmin.png" alt="Godown Shifting" />
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

  {/* COMMERCIAL MOVES */}
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
      <img src="/images/bgserv/bgcommmini.png" alt="Commercial Moves" />
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
  box-shadow:0 20px 40px rgba(6,34,66,0.25); /* BLUE SHADOW */
  text-align:center;
}

.sps-exp-badge h3{
  font-size:42px;
  font-weight:900;
  color:#062242; /* BLUE */
  line-height:1;
}

.sps-exp-badge p{
  font-size:14px;
  font-weight:700;
  color:#062242; /* BLUE */
  margin-top:6px;
}

/* CONTENT SIDE */
.sps-services-content small{
  display:block;
  font-size:13px;
  letter-spacing:0.18em;
  font-weight:800;
  color:#062242; /* BLUE */
  margin-bottom:14px;
}

.sps-services-content h2{
  font-size:42px;
  font-weight:900;
  color:#062242; /* BLUE */
  line-height:1.25;
  margin-bottom:18px;
}

.sps-services-content h2 span{
  color:#062242; /* BLUE */
}

.sps-services-content p{
  font-size:16px;
  color:#062242; /* BLUE */
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
  color:#062242; /* BLUE */
}

.sps-service-icon{
  width:22px;
  height:22px;
  border-radius:50%;
  background:linear-gradient(135deg,#062242,#3F6C87); /* BLUE GRADIENT */
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
            Discover our complete moving solutions at CHENNAI LAL Packers & Movers.
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
 

function SkillSection() {
  useEffect(() => {
    const css = `
/* ================================
   WRAPPER
================================ */
.skill-section {
  padding: 80px 6vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  background: #ffffff;
  font-family: Inter, system-ui;
}

/* ================================
   LEFT IMAGES
================================ */
.skill-images {
  position: relative;
}

.skill-img-1 {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

.skill-img-2 {
  width: 70%;
  position: absolute;
  bottom: -40px;
  left: 40px;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.2);
}

/* Floating circle badge */
.skill-badge {
  position: absolute;
  left: -20px;
  bottom: 60px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(135deg, #062242, #3F6C87);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  transform: rotate(-15deg);
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}

/* ================================
   RIGHT CONTENT
================================ */
.skill-tag {
  font-size: 14px;
  font-weight: 700;
  color: #3F6C87;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.skill-title {
  font-size: 40px;
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
  margin-bottom: 30px;
}

/* ================================
   PROGRESS BARS
================================ */
.progress-box {
  margin-bottom: 22px;
}

.progress-title {
  font-size: 14px;
  font-weight: 700;
  color: #062242;
  margin-bottom: 5px;
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
  background: linear-gradient(135deg, #062242, #3F6C87);
  border-radius: 8px;
}

/* ================================
   BUTTON
================================ */
.skill-btn {
  margin-top: 20px;
  background: linear-gradient(135deg, #062242, #3F6C87);
  padding: 14px 28px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
}

.skill-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgba(6,34,66,0.3);
}

/* =============================
   ANIMATIONS
============================== */
.reveal { opacity:0; transform:translateY(40px); transition:0.8s ease; }
.reveal.show { opacity:1; transform:translateY(0); }

/* =============================
   RESPONSIVE
============================== */
@media(max-width: 950px) {
  .skill-section {
    grid-template-columns: 1fr;
  }
  .skill-img-2 {
    display: none;
  }
  .skill-badge {
    left: 10px;
    bottom: 10px;
    width: 90px;
    height: 90px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.2 }
    );

    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
  }, []);

  return (
    <section className="skill-section">

      {/* LEFT IMAGES */}
      <div className="skill-images reveal">
        <img src="/images/truck.png" className="skill-img-1" alt="Packing Process" />
        <img src="/images/truck.png" className="skill-img-2" alt="Safe Handling" />
        <div className="skill-badge">🚚</div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="skill-content reveal">

        <div className="skill-tag">Our Expertise</div>

        <h2 className="skill-title">
          Experienced movers with a passion <span>for perfection</span>
        </h2>

        <p className="skill-desc">
          At Chennai Lal Packers & Movers, we combine decades of moving experience  
          with professional precision. Whether it’s household shifting, commercial  
          relocation, or long-distance moves — we ensure every task is handled with  
          care, planning, and complete responsibility.
        </p>

        {/* PROGRESS BARS */}
        <div className="progress-box">
          <div className="progress-title">Real-Time Tracking</div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "85%" }}></div>
          </div>
        </div>

        <div className="progress-box">
          <div className="progress-title">Specialized Handling</div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "92%" }}></div>
          </div>
        </div>

        <div className="progress-box">
          <div className="progress-title">Customer-First Approach</div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "95%" }}></div>
          </div>
        </div>

        <button className="skill-btn">Book Your Move Now →</button>

      </div>
    </section>
  );
}


 function TamilNaduCitySearch() {

  const navigate = useNavigate();
  const goContact = () => navigate("/contact");

  const [search, setSearch] = useState("");

  useEffect(() => {
    const css = `
/* ===============================
   SECTION
================================ */
.tn-city-section {
  width: 100%;
  padding: 70px 5vw;
  background: #062242;
  font-family: Inter, system-ui;
  color: white;
  text-align: center;
}

/* TITLE */
.tn-title {
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
}

/* ===============================
   SEARCH BAR
================================ */
.city-search {
  width: 55%;
  max-width: 600px;
  min-width: 260px;
  margin: 0 auto 40px auto;
  padding: 14px 18px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  outline: none;
  color: #062242;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.city-search:focus {
  box-shadow: 0 12px 26px rgba(255,255,255,0.25);
}

/* ===============================
   GRID (Desktop = 3 columns)
================================ */
.city-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

/* ===============================
   CITY BOX
================================ */
.city-box {
  background: #0A304F;
  border: 2px solid #3F6C87;
  border-radius: 16px;
  padding: 30px 25px;
  text-align: left;
  transition: 0.35s ease;
}

.city-box:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 26px rgba(63,108,135,0.35);
}

/* ===============================
   TITLE INSIDE BOX
================================ */
.city-title {
  font-size: 18px;
  font-weight: 800;
  color: #A7D4EE;
  margin-bottom: 14px;
  border-bottom: 1px solid #3F6C87;
  padding-bottom: 6px;
}

/* ===============================
   CITY ITEMS
================================ */
.city-item {
  margin-bottom: 10px;
  font-size: 15px;
  cursor: pointer;
  color: #DCEBFF;
  transition: 0.25s ease;
  padding: 4px 0;
}

.city-item:hover {
  color: #A7D4EE;
  padding-left: 6px;
  text-decoration: underline;
}

/* Highlight for search results */
.city-highlight {
  color: #A7D4EE;
  font-weight: 800;
}

/* ===============================
      RESPONSIVE BREAKPOINTS
================================ */

/* TABLET — 2 Columns */
@media(max-width: 1000px) {
  .city-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .city-search {
    width: 75%;
  }
}

/* MOBILE — Perfectly Responsive Fix */
@media(max-width: 650px) {

  html, body {
    overflow-x: hidden !important;
  }

  .tn-city-section {
    padding: 50px 4vw;
  }

  .tn-title {
    font-size: 24px;
    margin-bottom: 25px;
    padding: 0 10px;
  }

  .city-search {
    width: 100%;
    padding: 14px 16px;
    margin-bottom: 30px;
    box-sizing: border-box;
  }

  .city-grid {
    grid-template-columns: 1fr;   /* Single column */
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .city-box {
    width: 100%;
    padding: 22px 18px;
    border-radius: 14px;
    box-sizing: border-box;        /* Prevent overflow */
  }

  .city-title {
    font-size: 16px;
    padding-bottom: 6px;
  }

  .city-item {
    font-size: 14px;
    padding: 6px 0;
  }
}

`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
  }, []);

  /* ====== CITY LISTS ====== */
  const cities = {
    "Major Cities": [
      "Chennai", "Coimbatore", "Madurai", "Trichy", "Salem",
      "Tirunelveli", "Erode", "Tiruppur", "Vellore",
      "Thanjavur", "Kanchipuram", "Thiruvarur"
    ],
    "Tier 2 & Tier 3 Cities": [
      "Dindigul", "Karur", "Namakkal", "Ariyalur", "Nagapattinam",
      "Ramanathapuram", "Cuddalore", "Thoothukudi", "Sivagangai",
      "Virudhunagar", "Krishnagiri", "Dharmapuri"
    ],
    "All Tamil Nadu Service": [
      "Kanyakumari", "Tenkasi", "Nilgiris", "Ranipet",
      "Chengalpattu", "Kallakurichi", "Villupuram",
      "Mayiladuthurai", "Perambalur", "Tiruvannamalai", "Tirupattur"
    ]
  };

  /* ====== SEARCH MATCH HIGHLIGHT ====== */
  const highlight = (text) => {
    if (!search) return text;
    const regex = new RegExp(search, "gi");
    return text.replace(regex, match => `<span class="city-highlight">${match}</span>`);
  };

  /* ====== SEARCH FILTER ====== */
  const filterCities = (list) =>
    list.filter((city) => city.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="tn-city-section reveal">
      
      <h2 className="tn-title">Citywise Services — Chennai Lal Packers & Movers</h2>

      {/* SEARCH BAR */}
      <input
        type="text"
        className="city-search"
        placeholder="Search your city — Chennai, Coimbatore, Salem..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="city-grid reveal">
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
  useEffect(() => {
    const css = `
/* ===== EXCELLENCE HEADING ===== */
.sps-excellence {
  padding:120px 6vw;
  
  /* KEEP SAME BACKGROUND IMAGE */
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(255, 254, 255, 0.35),
      transparent 45%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(6,34,66,0.45),     /* UPDATED BLUE SHADE */
      transparent 50%
    ),
    linear-gradient(
      135deg,
      rgba(6,34,66,0.92),     /* BLUE */
      rgba(63,108,135,0.92)   /* BLUE LIGHT */
    ),
    url("/images/truck.png") center/cover no-repeat;

  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  align-items:center;
  gap:40px;
  font-family:Inter,system-ui;
}

/* MAIN TITLE UPDATED TO BLUE */
.sps-excellence h1 {
  font-size:64px;
  font-weight:900;
  margin:0;
  color:#062242; /* BLUE TEXT */
  letter-spacing:-0.02em;
}

/* HIGHLIGHT WORD UPDATED */
.sps-excellence h1 span {
  background: linear-gradient(135deg,#062242,#3F6C87); /* BLUE GRADIENT */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position:relative;
}

/* SOFT SHADOW UPDATED BLUE */
.sps-excellence h1 span::after {
  content:"";
  position:absolute;
  left:0;
  bottom:-6px;
  width:100%;
  height:6px;
  background:#062242;
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

{/* <FeaturesDiamond /> */}
      <ServicesIntro />
      <ServicesShowcase />
      <SkillSection />
      <TamilNaduCitySearch />
    </>
  );
}
