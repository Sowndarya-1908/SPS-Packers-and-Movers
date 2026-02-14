import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";


function MissionVision() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-mv-visible");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== SECTION ===== */
.sps-mv{
  // padding:90px 6vw;
  font-family:Inter,system-ui;
  // background:#ffffff;
  overflow:hidden;
}

/* CONTAINER */
.sps-mv-wrap{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:50px;
  background: linear-gradient(135deg,#062242,#3F6C87);
  border-radius:24px;
  padding:60px 60px;
  box-shadow:0 25px 55px rgba(0,0,0,0.2);
  position:relative;
  overflow:hidden;
}

/* Subtle animated background */
.sps-mv-wrap::before{
  content:"";
  position:absolute;
  width:300%;
  height:300%;
  top:-100%;
  left:-100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 70%);
  animation: rotateBg 20s linear infinite;
}

@keyframes rotateBg{
  from{ transform:rotate(0deg); }
  to{ transform:rotate(360deg); }
}

/* ITEM */
.sps-mv-item{
  display:flex;
  gap:20px;
  align-items:flex-start;
  opacity:0;
  transform:translateY(40px);
  transition:0.9s ease;
  position:relative;
  z-index:2;
}

.sps-mv-visible .sps-mv-item{
  opacity:1;
  transform:translateY(0);
}

/* Stagger */
.sps-mv-visible .sps-mv-item:nth-child(1){ transition-delay:0.3s; }
.sps-mv-visible .sps-mv-item:nth-child(2){ transition-delay:0.6s; }

/* ICON */
.sps-mv-icon{
  min-width:55px;
  height:55px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:#ffffff;
  color:#062242;
  font-size:24px;
  font-weight:900;
  transition:0.4s ease;
}

/* Hover effect */
.sps-mv-item:hover .sps-mv-icon{
  transform:scale(1.15);
}

/* TEXT */
.sps-mv-item h3{
  font-size:24px;
  font-weight:900;
  margin-bottom:12px;
  color:#ffffff;
}

.sps-mv-item p{
  font-size:16px;
  line-height:1.7;
  color:#ffffff;
  max-width:480px;
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .sps-mv-wrap{
    gap:40px;
    padding:50px 40px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:768px){

  .sps-mv{
    padding:70px 5vw;
  }

  .sps-mv-wrap{
    grid-template-columns:1fr;
    padding:40px 25px;
    gap:35px;
  }

  .sps-mv-item{
    flex-direction:column;
    align-items:center;
    text-align:center;
  }

  .sps-mv-item p{
    max-width:100%;
  }

  .sps-mv-icon{
    margin-bottom:10px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="sps-mv" ref={sectionRef}>
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

function ChooseWe() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("choosewe-visible");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ================= SECTION ================= */
.choosewe-hero {
  // padding: 100px 6vw;
  padding-top:10px;
  font-family: Inter, system-ui;
  // background: #ffffff;
  overflow:hidden;
}

/* ================= GRID ================= */
.choosewe-grid {
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* ================= LEFT ================= */
.choosewe-left {
  opacity:0;
  transform:translateX(-60px);
  transition:1s ease;
}

.choosewe-visible .choosewe-left {
  opacity:1;
  transform:translateX(0);
}

.choosewe-left small {
  display: block;
  font-size: 14px;
  color: #062242;
  font-weight: 800;
  letter-spacing: 2px;
}

/* Animated underline */
.choosewe-underline {
  width: 70px;
  height: 4px;
  margin: 14px 0 30px;
  background: linear-gradient(90deg, #062242, #3F6C87);
  border-radius: 3px;
  transform:scaleX(0);
  transform-origin:left;
  transition:0.8s ease 0.4s;
}

.choosewe-visible .choosewe-underline {
  transform:scaleX(1);
}

.choosewe-left h2 {
  font-size: 48px;
  font-weight: 900;
  color: #062242;
  line-height: 1.25;
  margin-bottom: 28px;
}

.choosewe-sub-heading {
  font-size: 22px;
  font-weight: 800;
  color: #062242;
  margin-bottom: 22px;
}

.choosewe-description {
  font-size: 16px;
  line-height: 1.85;
  color: #486C85;
  max-width: 720px;
}

/* ================= RIGHT IMAGE ================= */
.choosewe-right {
  opacity:0;
  transform:translateX(60px);
  transition:1s ease;
}

.choosewe-visible .choosewe-right {
  opacity:1;
  transform:translateX(0);
}

.choosewe-right img {
  width:100%;
  max-width:550px;
  border-radius:24px;
  display:block;
  box-shadow:0 25px 55px rgba(0,0,0,0.15);
  transition:0.5s ease;
  animation:floatImg 5s ease-in-out infinite;
}

/* Floating animation */
@keyframes floatImg {
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-12px); }
  100%{ transform:translateY(0); }
}

/* Hover */
.choosewe-right img:hover {
  transform:scale(1.05);
}

/* ================= TABLET ================= */
@media (max-width:1100px) {
  .choosewe-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .choosewe-left h2 {
    font-size: 36px;
  }

  .choosewe-sub-heading {
    font-size: 20px;
  }

  .choosewe-right img {
    margin:auto;
  }
}

/* ================= MOBILE ================= */
@media (max-width:600px) {

  .choosewe-hero {
    padding:70px 5vw;
  }

  .choosewe-left {
    text-align:center;
  }

  .choosewe-left h2 {
    font-size: 28px;
  }

  .choosewe-description {
    font-size: 15px;
  }

  .choosewe-grid {
    gap:40px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="choosewe-hero" ref={sectionRef}>
      <div className="choosewe-grid">

        {/* LEFT SIDE */}
        <div className="choosewe-left">
          <small>WHY CHOOSE US</small>

          <div className="choosewe-underline"></div>

          <h2>Hire the Best Packers and Movers in India</h2>

          <div className="choosewe-sub-heading">
            We provide the best industrial solutions for our customers to grow for 10+ years.
          </div>

          <p className="choosewe-description">
            CHENNAI LAL Packers & Movers is a renowned service provider for packing and moving 
            households, office furniture, equipment, machinery, industrial goods, and more.
            We are a leader in the relocation industry and serve customers nationwide.
            CHENNAI LAL Packers & Movers is an independent relocation management company ranked among 
            India's leading packers and movers specializing in household & corporate goods 
            transportation with facilities for warehousing and storage.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="choosewe-right">
          <img src="/images/bgserv/hiremini.png" alt="Packers and Movers" />
        </div>

      </div>
    </section>
  );
}

function WhyChooseUsSection() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("why-visible");
        }
      });
    }, { threshold: 0.25 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const styleId = "why-choose-style";

    if (!document.getElementById(styleId)) {

      const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== WRAPPER ===== */
.why-wrap {
  display: grid;
  grid-template-columns: 1fr 1.2fr;   /* TEXT SIDE BIGGER */
  gap: 80px;
  padding: 80px 6vw;
  align-items: center;
  font-family: Inter, sans-serif;
  overflow:hidden;
}

/* ===== LEFT IMAGES ===== */
.why-left {
  position: relative;
  opacity:0;
  transform:translateX(-60px);
  transition:1s ease;
}

.why-visible .why-left{
  opacity:1;
  transform:translateX(0);
}

.why-main-img {
  width:100%;
  border-radius:24px;
  box-shadow:0 30px 60px rgba(0,0,0,0.2);
  transition:0.5s ease;
}

.why-main-img:hover{
  transform:scale(1.03);
}

.why-small-img {
  position:absolute;
  bottom:-60px;
  right:-40px;
  width:65%;
  border-radius:18px;
  box-shadow:0 30px 60px rgba(0,0,0,0.25);
  border:6px solid #fff;
  animation:floatImg 5s ease-in-out infinite;
}

@keyframes floatImg{
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-15px); }
  100%{ transform:translateY(0); }
}

/* ===== RIGHT CONTENT ===== */
.why-right{
  opacity:0;
  transform:translateX(60px);
  transition:1s ease;
}

.why-visible .why-right{
  opacity:1;
  transform:translateX(0);
}

.why-top-text {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: #062242;
  margin-bottom:12px;
}
 
.why-title {
  font-size: 46px;
  font-weight: 900;
  margin-bottom:18px;
  color: #062242;
  line-height:1.25;
}

.why-desc {
  font-size: 16px;
  line-height: 1.7;
  color: #486C85;
}

/* ===== CHECK LIST ===== */
.sps-about-bottom{
  margin-top:30px;
}

.sps-checks{
  display:flex;
  flex-direction:column;
  gap:18px;
}

.sps-check{
  display:flex;
  gap:14px;
  align-items:flex-start;
  font-size:15px;           /* slightly reduced */
  font-weight:600;
  line-height:1.5;          /* better spacing */
  color:#062242;
  max-width:420px;          /* prevents awkward wrap */
  opacity:0;
  transform:translateY(20px);
  transition:0.6s ease;
}

/* Animation Trigger */
.why-visible .sps-check:nth-child(1){ transition-delay:0.3s; opacity:1; transform:translateY(0);}
.why-visible .sps-check:nth-child(2){ transition-delay:0.5s; opacity:1; transform:translateY(0);}
.why-visible .sps-check:nth-child(3){ transition-delay:0.7s; opacity:1; transform:translateY(0);}
.why-visible .sps-check:nth-child(4){ transition-delay:0.9s; opacity:1; transform:translateY(0);}

.sps-check span{
  min-width:24px;
  height:24px;
  border-radius:50%;
  background:#062242;
  color:#fff;
  display:grid;
  place-items:center;
  font-size:14px;
  margin-top:3px;
}

/* ===== TABLET ===== */
@media(max-width:1000px){

  .why-wrap {
    grid-template-columns:1fr;
    gap:60px;
  }

  .why-small-img{
    position:static;
    width:100%;
    margin-top:20px;
  }

  .why-title{
    font-size:34px;
  }

  .sps-check{
    max-width:100%;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){

  .why-wrap{
    padding:70px 5vw;
  }

  .sps-check{
    justify-content:center;
    text-align:left;
  }

  .why-right{
    text-align:center;
  }

  .why-title{
    font-size:28px;
  }
}
`;

      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <section className="why-wrap" ref={sectionRef}>
      
      <div className="why-left">
        <img
          src="/images/ser/house.png"
          alt="Relocation team"
          className="why-main-img"
        />

        <img
          src="/images/truck.png"
          alt="Safe Transportation"
          className="why-small-img"
        />
      </div>

      <div className="why-right">
        <p className="why-top-text">CHENNAI LAL PACKERS & MOVERS</p>

        <h2 className="why-title">
          Reliable Packers And Movers <br /> Solutions Saves Your Time!
        </h2>

        <p className="why-desc">
          CHENNAI LAL Packers & Movers is a leading relocation service provider in
          South India, offering safe, reliable, and cost-effective moving
          solutions.
        </p>

        <div className="sps-about-bottom">
          <div className="sps-checks">
            {[
              "Reliable & Secure Moving",
              "Affordable Service Pricing",
              "Timely & Efficient Service",
              "Expert Packing & Handling"
            ].map((text, i) => (
              <div key={i} className="sps-check">
                <span>✓</span>
                {text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}






function WhyDifferent() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-different-visible");
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== SECTION ===== */
.sps-different{
  font-family:Inter,system-ui;
  // background:white;
  // padding:110px 6vw;
  overflow:hidden;
}

/* HEADER */
.sps-different-head{
  text-align:center;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(40px);
  transition:0.8s ease;
}

.sps-different-visible .sps-different-head{
  opacity:1;
  transform:translateY(0);
}

.sps-different-head h2{
  font-size:46px;
  font-weight:900;
  color:#062242;
}

.sps-different-head h2 span{
  color:#3F6C87;
}

/* GRID */
.sps-different-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:40px;
}

/* CARD */
.sps-diff-card{
  background:#ffffff;
  border-radius:24px;
  padding:40px 30px;
  box-shadow:0 25px 55px rgba(6,34,66,0.12);
  transition:all .4s ease;
  border:1.5px solid rgba(6,34,66,0.15);
  opacity:0;
  transform:translateY(50px);
}

.sps-different-visible .sps-diff-card{
  opacity:1;
  transform:translateY(0);
}

/* Stagger animation */
.sps-different-visible .sps-diff-card:nth-child(1){ transition-delay:0.2s; }
.sps-different-visible .sps-diff-card:nth-child(2){ transition-delay:0.4s; }
.sps-different-visible .sps-diff-card:nth-child(3){ transition-delay:0.6s; }
.sps-different-visible .sps-diff-card:nth-child(4){ transition-delay:0.8s; }
.sps-different-visible .sps-diff-card:nth-child(5){ transition-delay:1s; }

/* Hover */
.sps-diff-card:hover{
  transform:translateY(-10px);
  box-shadow:0 35px 70px rgba(6,34,66,0.25);
}

/* ICON */
.sps-diff-icon{
  width:65px;
  height:65px;
  border-radius:50%;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:#FDFCFC;
  display:grid;
  place-items:center;
  font-size:26px;
  font-weight:900;
  margin-bottom:20px;
  transition:0.4s ease;
}

/* Icon pop on hover */
.sps-diff-card:hover .sps-diff-icon{
  transform:scale(1.15) rotate(8deg);
}

/* TEXT */
.sps-diff-card h4{
  font-size:20px;
  font-weight:800;
  margin-bottom:12px;
  color:#062242;
}

.sps-diff-card p{
  font-size:15px;
  line-height:1.7;
  color:#486C85;
}

/* TABLET */
@media(max-width:1000px){
  .sps-different-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .sps-different-head h2{
    font-size:36px;
  }
}

/* MOBILE */
@media(max-width:600px){
  .sps-different{
    padding:70px 5vw;
  }

  .sps-different-head h2{
    font-size:28px;
  }

  .sps-different-grid{
    grid-template-columns:1fr;
    gap:25px;
  }

  .sps-diff-card{
    padding:30px 20px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="sps-different" ref={sectionRef}>
      
      <div className="sps-different-head">
        <h2>
          ⭐ What Makes <span>Us Different</span>
        </h2>
      </div>

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

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-why-visible");
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== SECTION ===== */
.sps-why{
  // padding:110px 6vw;
  font-family:Inter,system-ui;
  // background:#FFFFFF;
  overflow:hidden;
}

/* HEADER */
.sps-why-head{
  text-align:center;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(40px);
  transition:0.8s ease;
}

.sps-why-visible .sps-why-head{
  opacity:1;
  transform:translateY(0);
}

.sps-why-head h2{
  font-size:46px;
  font-weight:900;
  color:#062242;
}

.sps-why-head h2 span{
  color:#3F6C87;
}

/* GRID */
.sps-why-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:35px;
}

/* CARD */
.sps-why-card{
  background:#ffffff;
  border-radius:22px;
  padding:40px 28px;
  text-align:center;
  box-shadow:0 20px 50px rgba(6,34,66,0.08);
  transition:all .4s ease;
  border:1px solid rgba(6,34,66,0.08);
  opacity:0;
  transform:translateY(50px);
}

.sps-why-visible .sps-why-card{
  opacity:1;
  transform:translateY(0);
}

/* Stagger */
.sps-why-visible .sps-why-card:nth-child(1){ transition-delay:0.2s; }
.sps-why-visible .sps-why-card:nth-child(2){ transition-delay:0.4s; }
.sps-why-visible .sps-why-card:nth-child(3){ transition-delay:0.6s; }
.sps-why-visible .sps-why-card:nth-child(4){ transition-delay:0.8s; }

/* Hover */
.sps-why-card:hover{
  transform:translateY(-10px);
  box-shadow:0 35px 70px rgba(6,34,66,0.25);
}

/* ICON */
.sps-why-icon{
  width:65px;
  height:65px;
  margin:0 auto 20px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:#fff;
  font-size:28px;
  transition:0.4s ease;
}

/* Icon animation on hover */
.sps-why-card:hover .sps-why-icon{
  transform:scale(1.15) rotate(8deg);
}

/* TITLE */
.sps-why-card h4{
  font-size:20px;
  font-weight:800;
  margin-bottom:12px;
  color:#062242;
}

/* TEXT */
.sps-why-card p{
  font-size:15px;
  color:#486C85;
  line-height:1.7;
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .sps-why-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .sps-why-head h2{
    font-size:36px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){

  .sps-why{
    padding:0px 5vw;
  }

  .sps-why-head h2{
    font-size:28px;
  }

  .sps-why-grid{
    grid-template-columns:1fr;
    gap:25px;
  }

  .sps-why-card{
    padding:30px 20px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="sps-why" ref={sectionRef}>
      
      <div className="sps-why-head">
        <h2>
          Our <span>Features</span>
        </h2>
      </div>

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

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-awards-visible");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== SECTION ===== */
.sps-awards-dark{
  padding:0px 6vw;
  background:
    radial-gradient(circle at top, rgba(255,215,0,0.08), transparent 50%),
    linear-gradient(180deg,#0a1624,#05101c);
  font-family:Inter,system-ui;
  overflow:hidden;
  position:relative;
}

/* ===== HEADER ===== */
.sps-awards-dark-head{
  text-align:center;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(40px);
  transition:0.9s ease;
}

.sps-awards-visible .sps-awards-dark-head{
  opacity:1;
  transform:translateY(0);
}

.sps-awards-dark-head small{
  display:block;
  font-size:13px;
  letter-spacing:0.2em;
  font-weight:800;
  color:#d4af37;
  margin-bottom:14px;
}

.sps-awards-dark-head h2{
  font-size:44px;
  font-weight:900;
  color:#ffffff;
}

.sps-awards-dark-head h2 span{
  background:linear-gradient(90deg,#ffd700,#d4af37,#f8e48c);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* ===== TRACK ===== */
.sps-awards-container{
  overflow:hidden;
}

.sps-awards-track{
  display:flex;
  gap:90px;
  width:max-content;
  animation:scrollAwards 55s linear infinite;
}

.sps-awards-dark:hover .sps-awards-track{
  animation-play-state:paused;
}

/* ===== CARD ===== */
.sps-award-dark{
  position:relative;
  min-width:200px;
  height:120px;
  border-radius:22px;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,#ffd700,#d4af37,#f8e48c);
  box-shadow:
    0 15px 35px rgba(255,215,0,0.25),
    inset 0 2px 8px rgba(255,255,255,0.5);
  transition:all .4s ease;
  overflow:hidden;
}

/* Shine effect */
.sps-award-dark::before{
  content:"";
  position:absolute;
  top:-100%;
  left:-100%;
  width:200%;
  height:200%;
  background:linear-gradient(
    120deg,
    transparent 30%,
    rgba(255,255,255,0.5),
    transparent 70%
  );
  transform:rotate(25deg);
  transition:0.8s;
}

.sps-award-dark:hover::before{
  top:100%;
  left:100%;
}

.sps-award-dark span{
  font-weight:900;
  font-size:18px;
  color:#062242;
  letter-spacing:1px;
}

/* Hover */
.sps-award-dark:hover{
  transform:translateY(-10px) scale(1.08);
  box-shadow:
    0 25px 60px rgba(255,215,0,0.5),
    inset 0 2px 8px rgba(255,255,255,0.7);
}

/* ===== ANIMATION ===== */
@keyframes scrollAwards{
  from{ transform:translateX(0); }
  to{ transform:translateX(-50%); }
}

/* ===== MOBILE ===== */
@media(max-width:600px){

  .sps-awards-dark{
    padding:0px 5vw;
  }

  .sps-awards-dark-head h2{
    font-size:30px;
  }

  .sps-award-dark{
    min-width:160px;
    height:100px;
  }

  .sps-awards-track{
    gap:50px;
    animation:scrollAwards 35s linear infinite;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  /* ===== GOLD BADGE TEXT CONTENT ===== */
  const awards = [
    "ISO CERTIFIED",
    "MSME REGISTERED",
    "TRUSTED BRAND",
    "QUALITY AWARD",
    "SAFETY CERTIFIED",
    "★★★★★ RATED"
  ];

  return (
    <section className="sps-awards-dark" ref={sectionRef}>
      
      <div className="sps-awards-dark-head">
        <small>AWARDS & CERTIFICATIONS</small>
        <h2>Recognized for <span>Excellence</span></h2>
      </div>

      <div className="sps-awards-container">
        <div className="sps-awards-track">
          {[...awards, ...awards].map((text, i) => (
            <div className="sps-award-dark" key={i}>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}






function KeyHighlights() {

  const sectionRef = useRef(null);

  useEffect(() => {

    /* ===== SCROLL REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sps-highlights-visible");
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== SECTION ===== */
.sps-highlights{
  padding:0px 6vw;
  // background:white;
  font-family:Inter,system-ui;
  overflow:hidden;
}

/* ===== HEADER ===== */
.sps-highlights-head{
  text-align:center;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(40px);
  transition:0.8s ease;
}

.sps-highlights-visible .sps-highlights-head{
  opacity:1;
  transform:translateY(0);
}

.sps-highlights-head h2{
  font-size:46px;
  font-weight:900;
  color:#062242;
  margin-bottom:12px;
}

.sps-highlights-head p{
  font-size:17px;
  color:#486C85;
}

/* ===== GRID ===== */
.sps-highlights-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:40px;
}

/* ===== CARD ===== */
.sps-highlight-card{
  background:#ffffff;
  border-radius:22px;
  padding:38px 30px;
  box-shadow:0 18px 45px rgba(6,34,66,0.08);
  border:1px solid rgba(6,34,66,0.1);
  transition:all .4s ease;
  opacity:0;
  transform:translateY(50px);
}

/* Reveal Animation */
.sps-highlights-visible .sps-highlight-card{
  opacity:1;
  transform:translateY(0);
}

/* Stagger */
.sps-highlights-visible .sps-highlight-card:nth-child(1){ transition-delay:.2s; }
.sps-highlights-visible .sps-highlight-card:nth-child(2){ transition-delay:.4s; }
.sps-highlights-visible .sps-highlight-card:nth-child(3){ transition-delay:.6s; }
.sps-highlights-visible .sps-highlight-card:nth-child(4){ transition-delay:.8s; }
.sps-highlights-visible .sps-highlight-card:nth-child(5){ transition-delay:1s; }
.sps-highlights-visible .sps-highlight-card:nth-child(6){ transition-delay:1.2s; }

/* Hover */
.sps-highlight-card:hover{
  transform:translateY(-12px);
  box-shadow:0 35px 75px rgba(6,34,66,0.25);
}

/* ===== ICON ===== */
.sps-highlight-icon{
  width:60px;
  height:60px;
  border-radius:16px;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:white;
  display:grid;
  place-items:center;
  font-size:26px;
  margin-bottom:22px;
  transition:all .4s ease;
}

/* Icon animation */
.sps-highlight-card:hover .sps-highlight-icon{
  transform:rotate(8deg) scale(1.12);
}

/* ===== TEXT ===== */
.sps-highlight-card h4{
  font-size:21px;
  font-weight:800;
  margin-bottom:14px;
  color:#062242;
}

.sps-highlight-card p{
  font-size:15.5px;
  line-height:1.75;
  color:#486C85;
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .sps-highlights-grid{
    grid-template-columns:repeat(2,1fr);
    gap:30px;
  }

  .sps-highlights-head h2{
    font-size:36px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){

  .sps-highlights{
    padding:0px 5vw;
  }

  .sps-highlights-head h2{
    font-size:28px;
  }

  .sps-highlights-grid{
    grid-template-columns:1fr;
    gap:25px;
  }

  .sps-highlight-card{
    padding:28px 22px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="sps-highlights" ref={sectionRef}>
      
      <div className="sps-highlights-head">
        <h2>Key Highlights</h2>
        <p>What sets us apart in the logistics industry</p>
      </div>

      <div className="sps-highlights-grid">

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">🌐</div>
          <h4>Extensive Network</h4>
          <p>Serving 500+ destinations across India, with a strong presence across major highways.</p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">💻</div>
          <h4>Technology Pioneer</h4>
          <p>Digitized operations with modern tracking systems and automation.</p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">👥</div>
          <h4>Strong Workforce</h4>
          <p>Skilled professionals ensuring reliable and timely service delivery.</p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">🚚</div>
          <h4>Robust Fleet</h4>
          <p>Large fleet managing daily cargo across long and short distances.</p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">🏆</div>
          <h4>Industry Recognition</h4>
          <p>Recognized for quality, reliability, and trust.</p>
        </div>

        <div className="sps-highlight-card">
          <div className="sps-highlight-icon">📈</div>
          <h4>Strategic Growth</h4>
          <p>Expanding operations and partnerships to boost service capability.</p>
        </div>

      </div>
    </section>
  );
}




function StatsWaveStrip() {

  const refs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {

    /* ===== COUNTER ANIMATION ===== */
    const animateCounter = (el) => {
      const target = +el.dataset.value;
      let current = 0;
      const duration = 2000;
      const increment = target / (duration / 30);

      const counter = setInterval(() => {
        current += increment;

        if (current >= target) {
          current = target;
          clearInterval(counter);
        }

        if (target >= 100) {
          el.innerText = Math.floor(current) + "+";
        } else {
          el.innerText = Math.floor(current) + "%";
        }

      }, 30);
    };

    /* ===== OBSERVER ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          entry.target.classList.add("sps-stats-visible");

          refs.current.forEach((el) => {
            if (el && !el.classList.contains("counted")) {
              el.classList.add("counted");
              animateCounter(el);
            }
          });
        }
      });
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    /* ===== CSS ===== */
    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== SECTION ===== */
.sps-stats{
  position:relative;
  padding:120px 6vw;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:#fff;
  overflow:hidden;
  font-family:Inter,system-ui;
  text-align:center;
}

/* Wave Effect */
.sps-stats::before,
.sps-stats::after{
  content:"";
  position:absolute;
  left:0;
  width:100%;
  height:70px;
  background:#fff;
  z-index:1;
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

/* ===== GRID ===== */
.sps-stats-grid{
  position:relative;
  z-index:2;
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:50px;
}

/* ===== STAT CARD ===== */
.sps-stat{
  opacity:0;
  transform:translateY(40px) scale(0.95);
  transition:0.8s ease;
}

.sps-stats-visible .sps-stat{
  opacity:1;
  transform:translateY(0) scale(1);
}

/* Stagger */
.sps-stats-visible .sps-stat:nth-child(1){ transition-delay:.2s; }
.sps-stats-visible .sps-stat:nth-child(2){ transition-delay:.4s; }
.sps-stats-visible .sps-stat:nth-child(3){ transition-delay:.6s; }
.sps-stats-visible .sps-stat:nth-child(4){ transition-delay:.8s; }

/* ===== ICON ===== */
.sps-stat-icon{
  width:65px;
  height:65px;
  margin:0 auto 18px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:rgba(255,255,255,0.2);
  font-size:28px;
  transition:0.4s ease;
}

/* Floating icon animation */
.sps-stats-visible .sps-stat-icon{
  animation: floatIcon 3s ease-in-out infinite;
}

@keyframes floatIcon{
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-8px); }
  100%{ transform:translateY(0); }
}

/* ===== NUMBER ===== */
.sps-stat-num{
  font-size:48px;
  font-weight:900;
  letter-spacing:1px;
  margin-bottom:8px;
}

/* ===== LABEL ===== */
.sps-stat-label{
  font-size:16px;
  font-weight:600;
  opacity:0.95;
}

/* ===== TABLET ===== */
@media(max-width:900px){
  .sps-stats-grid{
    grid-template-columns:repeat(2,1fr);
    gap:40px;
  }

  .sps-stat-num{
    font-size:38px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:500px){

  .sps-stats{
    padding:90px 5vw;
  }

  .sps-stats-grid{
    grid-template-columns:1fr;
    gap:30px;
  }

  .sps-stat-num{
    font-size:32px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="sps-stats" ref={sectionRef}>
      <div className="sps-stats-grid">

        <div className="sps-stat">
          <div className="sps-stat-icon">📍</div>
          <div className="sps-stat-num" data-value="500" ref={(el) => (refs.current[0] = el)}>0</div>
          <div className="sps-stat-label">Cities Covered</div>
        </div>

        <div className="sps-stat">
          <div className="sps-stat-icon">🏢</div>
          <div className="sps-stat-num" data-value="1000" ref={(el) => (refs.current[1] = el)}>0</div>
          <div className="sps-stat-label">Business Offices Relocated</div>
        </div>

        <div className="sps-stat">
          <div className="sps-stat-icon">🚚</div>
          <div className="sps-stat-num" data-value="100" ref={(el) => (refs.current[2] = el)}>0</div>
          <div className="sps-stat-label">Self-Owned Container Trucks</div>
        </div>

        <div className="sps-stat">
          <div className="sps-stat-icon">😊</div>
          <div className="sps-stat-num" data-value="96" ref={(el) => (refs.current[3] = el)}>0%</div>
          <div className="sps-stat-label">Satisfied Customers</div>
        </div>

      </div>
    </section>
  );
}



function ShiftingProcess() {

  const sectionRef = useRef(null);

  useEffect(() => {

    /* ===== SCROLL REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("shift-visible");
        }
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ====== SECTION ====== */
.shift-wrap {
  padding:0px 6vw;
  font-family: Inter, sans-serif;
  // background:#ffffff;
  overflow:hidden;
}

/* HEADING */
.shift-title {
  text-align: center;
  font-size: 46px;
  line-height: 1.25;
  font-weight: 900;
  color: #062242;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(40px);
  transition:0.8s ease;
}

.shift-visible .shift-title{
  opacity:1;
  transform:translateY(0);
}

.shift-title span {
  color: #3F6C87;
}

/* ===== TIMELINE WRAPPER ===== */
.shift-timeline {
  position: relative;
  padding-left: 90px;
  max-width:1000px;
  margin:auto;
}

/* LINE */
.shift-timeline::before {
  content: "";
  position: absolute;
  left: 40px;
  top: 0;
  width: 6px;
  height: 0;
  border-radius: 20px;
  background: linear-gradient(180deg, #062242, #3F6C87);
  transition:height 1.5s ease;
}

.shift-visible .shift-timeline::before{
  height:100%;
}

/* EACH STEP */
.shift-step {
  display: flex;
  align-items: flex-start;
  gap: 35px;
  margin-bottom: 60px;
  opacity:0;
  transform:translateY(50px);
  transition:0.8s ease;
}

.shift-visible .shift-step{
  opacity:1;
  transform:translateY(0);
}

/* Stagger */
.shift-visible .shift-step:nth-child(1){ transition-delay:.3s; }
.shift-visible .shift-step:nth-child(2){ transition-delay:.6s; }
.shift-visible .shift-step:nth-child(3){ transition-delay:.9s; }
.shift-visible .shift-step:nth-child(4){ transition-delay:1.2s; }

/* ICON */
.shift-icon-box {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 3px solid #062242;
  box-shadow: 0 0 20px rgba(6, 34, 66, 0.25);
  font-size: 30px;
  transition:0.4s ease;
}

/* Icon hover pop */
.shift-step:hover .shift-icon-box{
  transform:scale(1.15) rotate(8deg);
}

/* CARD */
.shift-card {
  background: #ffffff;
  padding: 28px 32px;
  border-radius: 18px;
  width: 100%;
  box-shadow: 0 15px 45px rgba(6, 34, 66, 0.08);
  border:1px solid rgba(6,34,66,0.08);
  transition:0.4s ease;
}

.shift-step:hover .shift-card{
  transform:translateY(-8px);
  box-shadow:0 25px 65px rgba(6,34,66,0.25);
}

.shift-card-title {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #062242, #3F6C87);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.shift-card-text {
  font-size: 16px;
  color: #486C85;
  line-height: 1.7;
}

/* ===== TABLET ===== */
@media(max-width:900px){
  .shift-timeline{
    padding-left:60px;
  }

  .shift-timeline::before{
    left:25px;
  }

  .shift-title{
    font-size:36px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){

  .shift-wrap{
    padding:0px 5vw;
  }

  .shift-title{
    font-size:28px;
    margin-bottom:50px;
  }

  .shift-timeline{
    padding-left:40px;
  }

  .shift-timeline::before{
    left:18px;
  }

  .shift-step{
    gap:18px;
    margin-bottom:40px;
  }

  .shift-icon-box{
    width:50px;
    height:50px;
    font-size:22px;
  }

  .shift-card{
    padding:20px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

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
    <section className="shift-wrap" ref={sectionRef}>
      <h2 className="shift-title">
        Check Out Our <span>Shifting Process</span>
      </h2>

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

  const sectionRef = useRef(null);

  useEffect(() => {

    /* ===== SCROLL REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-visible");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== WRAPPER ===== */
.about-wrap {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  padding: 0px 6vw;
  align-items: center;
  // background: #ffffff;
  font-family: Inter, sans-serif;
  overflow:hidden;
}

/* ===== LEFT IMAGES ===== */
.about-left {
  position: relative;
  opacity:0;
  transform:translateX(-50px);
  transition:1s ease;
}

.about-visible .about-left{
  opacity:1;
  transform:translateX(0);
}

.about-main-img img {
  width: 100%;
  border-radius: 26px;
  height: 520px;
  object-fit:cover;
  box-shadow:0 25px 60px rgba(6,34,66,0.15);
}

.about-small-img {
  position: absolute;
  bottom: -50px;
  right: 20px;
  width: 60%;
  border-radius: 22px;
  border: 6px solid #062242;
  box-shadow:0 25px 60px rgba(6,34,66,0.25);
  animation: floatSmall 4s ease-in-out infinite;
}

.about-small-img img {
  width: 100%;
  border-radius: 18px;
  height: 320px;
  object-fit:cover;
}

@keyframes floatSmall{
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-12px); }
  100%{ transform:translateY(0); }
}

/* ===== RIGHT CONTENT ===== */
.about-right{
  opacity:0;
  transform:translateX(50px);
  transition:1s ease;
}

.about-visible .about-right{
  opacity:1;
  transform:translateX(0);
}

.about-top-text {
  font-size: 15px;
  font-weight: 700;
  color: #062242;
  letter-spacing: 1px;
}

.about-title {
  font-size: 46px;
  font-weight: 900;
  margin: 18px 0;
  color: #062242;
  line-height:1.25;
}

.about-desc {
  font-size: 17px;
  line-height: 1.75;
  margin-bottom: 40px;
  color: #486C85;
}

/* ===== FEATURES ===== */
.about-feature {
  display: flex;
  gap: 18px;
  margin-bottom: 28px;
  align-items: center;
  opacity:0;
  transform:translateY(40px);
  transition:0.8s ease;
}

.about-visible .about-feature{
  opacity:1;
  transform:translateY(0);
}

/* Stagger */
.about-visible .about-feature:nth-child(4){ transition-delay:.3s; }
.about-visible .about-feature:nth-child(5){ transition-delay:.6s; }

.feature-icon-box {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg,#062242,#3F6C87);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #fff;
  transition:0.4s ease;
}

.about-feature:hover .feature-icon-box{
  transform:scale(1.15) rotate(8deg);
}

.feature-title {
  font-size: 21px;
  font-weight: 800;
  color: #062242;
}

.feature-text {
  font-size: 15px;
  color: #486C85;
  margin-top: 6px;
}

/* ===== TABLET ===== */
@media(max-width: 950px) {

  .about-wrap {
    grid-template-columns: 1fr;
    gap:60px;
  }

  .about-left {
    margin-bottom: 40px;
  }

  .about-small-img {
    position: relative;
    width: 70%;
    bottom: -20px;
    right: 0;
    margin: auto;
  }

  .about-title{
    font-size:36px;
  }
}

/* ===== MOBILE ===== */
@media(max-width: 600px) {

  .about-wrap{
    padding:0px 5vw;
  }

  .about-title {
    font-size: 28px;
  }

  .about-desc {
    font-size: 15px;
  }

  .feature-title {
    font-size: 18px;
  }

  .about-main-img img{
    height:380px;
  }

  .about-small-img img{
    height:240px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  return (
    <section className="about-wrap" ref={sectionRef}>
      
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
          At CHENNAI LAL Packers & Movers, we make every move stress-free — whether it’s
          your home, office, or vehicle. With trusted service and trained
          professionals, we ensure your belongings are packed safely, transported
          securely, and delivered on time.
        </p>

        <div className="about-feature">
          <div className="feature-icon-box">📈</div>
          <div>
            <h4 className="feature-title">Expert Relocation Team</h4>
            <p className="feature-text">
              Our trained team ensures every shift is handled with care.
            </p>
          </div>
        </div>

        <div className="about-feature">
          <div className="feature-icon-box">💰</div>
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
  const intervalRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  /* ===== CSS ===== */
  useEffect(() => {
    const css = `
*{ margin:0; padding:0; box-sizing:border-box; }

/* ===== SECTION ===== */
.sps-testimonial-section {
  padding: 0px 6vw;
  text-align: center;
  font-family: Inter, system-ui;
  // background:#ffffff;
}

.sps-testimonial-title {
  font-size: 44px;
  font-weight: 900;
  color: #062242;
  margin-bottom: 60px;
  position:relative;
}

.sps-testimonial-title::after{
  content:"";
  width:80px;
  height:4px;
  background:linear-gradient(90deg,#062242,#3F6C87);
  display:block;
  margin:15px auto 0;
  border-radius:4px;
}

/* ===== SLIDER ===== */
.sps-testimonial-slider {
  max-width: 800px;
  margin: auto;
  position: relative;
}

/* ===== CARD ===== */
.sps-testimonial-card {
  border-radius: 28px;
  padding: 60px 40px;
  position: relative;
  color: #fff;
  box-shadow: 0 25px 60px rgba(6,34,66,0.2);
  background: linear-gradient(135deg, #062242, #3F6C87);
  transition: 0.6s ease;
  animation: fadeInSlide .8s ease;
}

@keyframes fadeInSlide{
  from{
    opacity:0;
    transform:translateY(40px) scale(.96);
  }
  to{
    opacity:1;
    transform:translateY(0) scale(1);
  }
}

/* ===== IMAGE ===== */
.sps-testimonial-img {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;
  margin: auto;
  margin-bottom: 25px;
  box-shadow:0 10px 30px rgba(0,0,0,0.2);
  transition:.4s ease;
}

.sps-testimonial-img:hover{
  transform:scale(1.1);
}

.sps-testimonial-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ===== TEXT ===== */
.sps-testimonial-text {
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 25px;
  padding: 0 10px;
  animation: textFade .8s ease;
}

@keyframes textFade{
  from{opacity:0; transform:translateY(15px);}
  to{opacity:1; transform:translateY(0);}
}

.sps-testimonial-name {
  font-size: 19px;
  font-weight: 700;
  letter-spacing:0.5px;
}

/* ===== CONTROLS ===== */
.sps-testimonial-controls {
  margin-top: 35px;
  display: flex;
  justify-content: center;
  gap: 18px;
}

.sps-testimonial-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: #062242;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  transition: .3s ease;
  box-shadow:0 10px 20px rgba(6,34,66,0.4);
}

.sps-testimonial-btn:hover {
  background: #3F6C87;
  transform: scale(1.1);
}

/* ===== DOTS ===== */
.sps-testimonial-dots{
  margin-top:25px;
  display:flex;
  justify-content:center;
  gap:10px;
}

.sps-dot{
  width:12px;
  height:12px;
  border-radius:50%;
  background:#cbd6df;
  cursor:pointer;
  transition:.3s ease;
}

.sps-dot.active{
  background:#062242;
  transform:scale(1.2);
}

/* ===== RESPONSIVE ===== */
@media(max-width: 768px){

  .sps-testimonial-section{
    padding:0px 5vw;
  }

  .sps-testimonial-title{
    font-size:32px;
  }

  .sps-testimonial-card{
    padding:45px 22px;
  }

  .sps-testimonial-text{
    font-size:15px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section 
      className="sps-testimonial-section"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      
      <h2 className="sps-testimonial-title">What Our Clients Say</h2>

      <div className="sps-testimonial-slider">

        <div className="sps-testimonial-card key={index}">
          
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

        {/* CONTROLS */}
        <div className="sps-testimonial-controls">
          <button className="sps-testimonial-btn" onClick={prev}>‹</button>
          <button className="sps-testimonial-btn" onClick={next}>›</button>
        </div>

        {/* DOTS */}
        <div className="sps-testimonial-dots">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`sps-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}



function KeynoteTeamSection() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{margin:0;padding:0;box-sizing:border-box;}

.sps-team-section{
  padding:0px 6vw;
  padding-top: 10px; 
   padding-bottom: 30px;
    // background:#ffffff;
  font-family:Inter,system-ui;
  text-align:center;
  overflow:hidden;
}

.sps-team-title{
  font-size:48px;
  font-weight:900;
  color:#062242;
  margin-bottom:80px;
}

/* GRID */
.sps-team-grid{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:60px;
  max-width:1200px;
  margin:auto;
}

/* CARD */
.sps-team-card{
  width:320px;
  background:#062242;
  padding:40px 25px 45px;
  border-radius:20px;
  box-shadow:0 25px 60px rgba(6,34,66,0.3);
  transition:all .6s cubic-bezier(.22,.61,.36,1);
  opacity:0;
  transform:translateY(60px);
  color:#ffffff;
}

.sps-team-section.show .sps-team-card{
  opacity:1;
  transform:translateY(0);
}

.sps-team-card:hover{
  transform:translateY(-10px);
}

/* ===== ANGLED CORNER IMAGE ===== */
.sps-team-img{
  width:220px;
  height:220px;
  margin:auto;
  overflow:hidden;

  /* OCTAGON CUT CORNERS */
  clip-path:polygon(
    20% 0%, 80% 0%,
    100% 20%, 100% 80%,
    80% 100%, 20% 100%,
    0% 80%, 0% 20%
  );

  box-shadow:0 25px 50px rgba(0,0,0,0.4);
  transition:transform .5s ease;
}

.sps-team-img img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.sps-team-card:hover .sps-team-img{
  transform:scale(1.05);
}

/* NAME */
.sps-team-name{
  font-size:22px;
  font-weight:900;
  margin-top:28px;
  color:#ffffff;
}

/* ROLE */
.sps-team-role{
  font-size:13px;
  font-weight:700;
  margin:10px 0 15px;
  letter-spacing:2px;
  color:#A7D4EE;
}

/* DESCRIPTION */
.sps-team-desc{
  font-size:14px;
  line-height:1.7;
  color:#ffffff;
  opacity:0.9;
}

/* RESPONSIVE */
@media(max-width:1000px){
  .sps-team-card{
    width:280px;
  }
}

@media(max-width:768px){
  .sps-team-grid{
    flex-direction:column;
    align-items:center;
  }

  .sps-team-card{
    width:100%;
    max-width:350px;
  }

  .sps-team-img{
    width:180px;
    height:180px;
  }

  .sps-team-title{
    font-size:32px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();

  }, []);

  const team = [
    {
      name: "Prasanth V",
      role: "PROJECT MANAGER",
      img: "/images/about/m.jpeg",
      desc: "Managing relocation projects across Tamil Nadu with efficiency and precision."
    },
    {
      name: "Ramya",
      role: "PROJECT MANAGER",
      img: "/images/about/r.jpeg",
      desc: "Ensuring safe packing and damage-free transport every time."
    },
    {
      name: "Sowndarya S",
      role: "WEB DEVELOPER",
      img: "/images/about/s.png",
      desc: "Transparent communication from booking to final delivery."
    },
    {
      name: "Gayathri S",
      role: "TEAM LEAD",
      img: "/images/about/gaya2.jpeg",
      desc: "Overseeing GPS-enabled fleet operations across India."
    },
    {
      name: "Sathish Kumar",
      role: "MANAGEMENT",
      img: "/images/about/sathish.png",
      desc: "Strategic planning and operational excellence leadership."
    }
  ];

  return (
    <section className="sps-team-section" ref={sectionRef}>

      <h2 className="sps-team-title">
        Meet Our Expert Team
      </h2>

      <div className="sps-team-grid">
        {team.map((member, i) => (
          <div key={i} className="sps-team-card">

            <div className="sps-team-img">
              <img src={member.img} alt={member.name} />
            </div>

            <div className="sps-team-name">{member.name}</div>
            <div className="sps-team-role">[ {member.role} ]</div>
            <p className="sps-team-desc">{member.desc}</p>

          </div>
        ))}
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
About Page Enquiry – CHENNAI LAL Packers & Movers

Name: ${form.name}
Phone: ${form.phone}
From City: ${form.from}
To City: ${form.to}
Service Type: ${form.service}
    `;

    const ownerNumber = "917550057453";
    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {

    /* ===== ANIMATION TRIGGER ===== */
    setTimeout(() => {
      heroLeftRef.current?.classList.add("show");
      cardRef.current?.classList.add("show");

      featureRefs.current.forEach((el, i) => {
        if (el) {
          setTimeout(() => el.classList.add("show"), i * 200);
        }
      });
    }, 300);

    /* ===== CSS ===== */
    const css = `
*{ box-sizing:border-box; }

html,body{
  margin:0;
  padding:0;
  overflow-x:hidden;
  background:#FDFCFC;
  font-family:Inter,system-ui;
}

/* ================= HERO SECTION ================= */
.heroq-section{
  min-height:100vh;
  background:
    linear-gradient(rgba(6,34,66,0.75), rgba(6,34,66,0.75)),
    url("/images/truck.png") center/cover no-repeat;

  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  align-items:center;
  padding:100px 6vw 60px;
  gap:50px;
  position:relative;
  animation: zoomBg 18s ease infinite alternate;
}

@keyframes zoomBg{
  from{ background-size:100%; }
  to{ background-size:110%; }
}

/* ===== ANIMATIONS ===== */
.fade-left,.fade-right,.fade-up{
  opacity:0;
  transform:translateY(40px);
  transition:all 0.9s cubic-bezier(.22,.61,.36,1);
}

.fade-left{ transform:translateX(-60px); }
.fade-right{ transform:translateX(60px); }

.show{
  opacity:1;
  transform:translate(0);
}

/* ===== LEFT CONTENT ===== */
.heroq-left h1{
  font-size:48px;
  font-weight:900;
  line-height:1.2;
  color:#ffffff;
}

.heroq-left h1 span{
  color:#dce8f7;
}

.heroq-left p.sub{
  margin:18px 0 30px;
  font-size:18px;
  color:#ffffff;
  max-width:540px;
}

/* FEATURES */
.heroq-features{
  display:flex;
  flex-direction:column;
  gap:20px;
}

.heroq-feature{
  display:flex;
  gap:15px;
  color:#ffffff;
}

.heroq-feature h4{
  font-weight:800;
  margin-bottom:4px;
}

.heroq-icon{
  min-width:45px;
  height:45px;
  border-radius:50%;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:#fff;
  display:grid;
  place-items:center;
  font-size:18px;
}

/* ===== GLASS CARD ===== */
.heroq-card{
  background: rgba(255,255,255,0.95);
  border-radius:24px;
  padding:32px;
  width:100%;
  max-width:520px;
  justify-self:end;
  border:1.5px solid rgba(6,34,66,0.2);
  box-shadow:0 25px 60px rgba(6,34,66,0.25);
  backdrop-filter:blur(12px);
}

.heroq-card h3{
  margin-bottom:18px;
  color:#062242;
  font-weight:900;
}

/* ===== FORM ===== */
.heroq-card form{
  display:flex;
  flex-direction:column;
  gap:16px;
}

.heroq-card input,
.heroq-card select{
  padding:15px;
  border-radius:12px;
  border:1.5px solid #062242;
  font-size:16px;
  background:#ffffff;
  color:#062242;
  transition:0.3s ease;
}

.heroq-card input:focus,
.heroq-card select:focus{
  outline:none;
  border-color:#3F6C87;
  box-shadow:0 0 0 3px rgba(63,108,135,0.2);
}

.heroq-btn{
  margin-top:10px;
  padding:16px;
  border:none;
  border-radius:12px;
  background:linear-gradient(90deg,#062242,#3F6C87);
  color:#fff;
  font-weight:800;
  font-size:17px;
  cursor:pointer;
  transition:0.3s ease;
}

.heroq-btn:hover{
  transform:translateY(-3px);
  box-shadow:0 15px 35px rgba(6,34,66,0.4);
}

.heroq-btn:active{
  transform:scale(0.97);
}

/* ===== TABLET ===== */
@media(max-width:1000px){
  .heroq-section{
    grid-template-columns:1fr;
    padding:120px 5vw 60px;
  }

  .heroq-card{
    justify-self:center;
    margin-top:40px;
  }

  .heroq-left h1{
    font-size:36px;
  }
}

/* ===== MOBILE ===== */
@media(max-width:600px){

  .heroq-section{
    padding:110px 5vw 50px;
  }

  .heroq-left h1{
    font-size:28px;
  }

  .heroq-left p.sub{
    font-size:15px;
  }

  .heroq-card{
    padding:24px;
  }

  .heroq-card input,
  .heroq-card select{
    font-size:15px;
    padding:13px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, []);

  return (
    <>
      <section className="heroq-section">

        <div className="heroq-left fade-left" ref={heroLeftRef}>
          <h1>
            About <span>CHENNAI LAL Packers & Movers</span>
          </h1>

          <p className="sub">
            Trusted relocation company delivering safe, reliable and professional
            moving solutions across India.
          </p>

          <div className="heroq-features">
            {[
              ["🏆", "Years of Experience", "Proven expertise in relocations"],
              ["🌍", "Nationwide Presence", "Serving homes & businesses across India"],
              ["🤝", "Customer First", "Transparency, care and commitment"]
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
                <option>Office Relocation</option>
                <option>Vehicle Transportation</option>
                <option>Godown Shifting</option>
                <option>AC Installation</option>
                <option>Commercial Moves</option>
            </select>

            <button className="heroq-btn">Contact Us</button>
          </form>
        </div>
      </section>

      {/* Other Sections */}
      {/* <AboutHero /> */}
      <WhyChooseUsSection />
      <MissionVision />
      <ChooseWe />
      <WhyDifferent />
      <KeynoteTeamSection />
      <AboutSection />
      <WhyChooseSPS />
      <StatsWaveStrip />
      <AwardsStripDark />
      <ShiftingProcess />
      <KeyHighlights />
      <Testimonials />
    </>
  );
}
