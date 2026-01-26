import React, { useEffect, useState, useRef } from "react";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    service: ""
  });

  const [success, setSuccess] = useState(false);
  const sectionRef = useRef(null);

  const PHONE_NUMBER = "917550057453";

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
📦 *New Moving Enquiry*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📍 From: ${form.from}
🏁 To: ${form.to}
🛠 Service: ${form.service}
    `;

    const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

    setSuccess(true);

    setForm({
      name: "",
      phone: "",
      from: "",
      to: "",
      service: ""
    });

    setTimeout(() => {
      window.location.href = whatsappURL;
    }, 1200);
  };

  useEffect(() => {

    /* ===== SCROLL REVEAL ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.25 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{ box-sizing:border-box; margin:0; padding:0; }

/* ===== CONTACT SECTION ===== */
.sps-contact{
  padding:100px 6vw;
  background:
    linear-gradient(180deg,#FDFCFC,#EED3D6);
  font-family:Inter,system-ui;
  position:relative;
  overflow:hidden;
  opacity:0;
  transform:translateY(60px);
  transition:1s ease;
}

.sps-contact.show{
  opacity:1;
  transform:translateY(0);
}

/* Subtle floating gradient animation */
.sps-contact::before{
  content:"";
  position:absolute;
  width:500px;
  height:500px;
  background:radial-gradient(circle,#06224220,transparent 70%);
  top:-150px;
  right:-150px;
  animation:floatBg 10s ease-in-out infinite alternate;
}

@keyframes floatBg{
  from{ transform:translateY(0); }
  to{ transform:translateY(40px); }
}

/* GRID */
.sps-contact-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  gap:60px;
  align-items:center;
}

/* ===== LEFT ===== */
.sps-contact-left{
  animation:fadeLeft 1s ease forwards;
}

@keyframes fadeLeft{
  from{opacity:0; transform:translateX(-60px);}
  to{opacity:1; transform:translateX(0);}
}

.sps-contact-left h2{
  font-size:42px;
  font-weight:900;
  color:#062242;
}

.sps-contact-left p{
  font-size:16px;
  color:#062242;
  line-height:1.7;
  margin:18px 0;
}

.sps-contact-info{
  display:flex;
  flex-direction:column;
  gap:14px;
  margin-top:22px;
  color:#062242;
  font-weight:700;
}

/* ===== FORM CARD ===== */
.sps-contact-card{
  background:rgba(255,255,255,0.85);
  backdrop-filter:blur(18px);
  border-radius:22px;
  padding:35px;
  border:1.5px solid rgba(6,34,66,0.2);
  box-shadow:0 30px 60px rgba(6,34,66,0.25);
  animation:fadeRight 1s ease forwards;
}

@keyframes fadeRight{
  from{opacity:0; transform:translateX(60px);}
  to{opacity:1; transform:translateX(0);}
}

.sps-contact-card h3{
  color:#062242;
  font-weight:900;
  margin-bottom:18px;
}

.sps-contact-card form{
  display:flex;
  flex-direction:column;
  gap:16px;
}

.sps-contact-card input,
.sps-contact-card select{
  padding:15px;
  border-radius:12px;
  border:1.5px solid #B7C4D3;
  font-size:15px;
  transition:0.3s ease;
}

.sps-contact-card input:focus,
.sps-contact-card select:focus{
  outline:none;
  border-color:#062242;
  box-shadow:0 0 0 3px rgba(6,34,66,0.15);
}

/* BUTTON */
.sps-contact-btn{
  margin-top:8px;
  padding:16px;
  border:none;
  border-radius:14px;
  background:linear-gradient(90deg,#062242,#3F6C87);
  color:#fff;
  font-weight:900;
  font-size:16px;
  cursor:pointer;
  transition:0.3s ease;
}

.sps-contact-btn:hover{
  transform:translateY(-3px);
  box-shadow:0 15px 30px rgba(6,34,66,.35);
}

/* SUCCESS POPUP */
.sps-success{
  position:fixed;
  bottom:30px;
  right:30px;
  background:linear-gradient(135deg,#062242,#3F6C87);
  color:#fff;
  padding:18px 24px;
  border-radius:14px;
  font-weight:800;
  box-shadow:0 15px 35px rgba(6,34,66,.45);
  animation:popup 0.5s ease;
  z-index:9999;
}

@keyframes popup{
  from{opacity:0; transform:translateY(30px) scale(.9);}
  to{opacity:1; transform:translateY(0) scale(1);}
}

/* ===== RESPONSIVE ===== */

/* Tablet */
@media(max-width:900px){
  .sps-contact-grid{
    grid-template-columns:1fr;
    gap:40px;
  }

  .sps-contact-left h2{
    font-size:32px;
  }
}

/* Mobile */
@media(max-width:480px){

  .sps-contact{
    padding:80px 5vw;
  }

  .sps-contact-card{
    padding:25px;
  }

  .sps-success{
    right:15px;
    left:15px;
    bottom:20px;
    text-align:center;
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
      <section className="sps-contact" ref={sectionRef}>
        <div className="sps-contact-grid">

          {/* LEFT */}
          <div className="sps-contact-left">
            <h2>Contact CHENNAI LAL Packers & Movers</h2>

            <p>
              We provide safe, reliable, and affordable packing & moving
              services across India with professional handling and
              transparent pricing.
            </p>

            <div className="sps-contact-info">
              <div>📞 +91 93610 46387</div>
              <div>📍 Pan-India Service</div>
              <div>🕘 Mon – Sun | 8AM – 9PM</div>
            </div>
          </div>

          {/* FORM */}
          <div className="sps-contact-card">
            <h3>Get Free Moving Quote</h3>

            <form onSubmit={handleSubmit}>
              <input
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                placeholder="Mobile Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <input
                placeholder="From City"
                required
                value={form.from}
                onChange={(e) => setForm({ ...form, from: e.target.value })}
              />

              <input
                placeholder="To City"
                required
                value={form.to}
                onChange={(e) => setForm({ ...form, to: e.target.value })}
              />

              <select
                required
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

              <button className="sps-contact-btn">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {success && (
        <div className="sps-success">
          ✅ Enquiry sent successfully!
        </div>
      )}
    </>
  );
}
