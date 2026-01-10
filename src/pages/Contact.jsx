import React, { useEffect, useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    service: ""
  });

  const [success, setSuccess] = useState(false);

  const PHONE_NUMBER = "919361046387"; // your WhatsApp number

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

    const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    // 1️⃣ Show success message immediately
    setSuccess(true);

    // 2️⃣ Clear form
    setForm({
      name: "",
      phone: "",
      from: "",
      to: "",
      service: ""
    });

    // 3️⃣ Redirect to WhatsApp IN SAME TAB (no new tab)
    setTimeout(() => {
      window.location.href = whatsappURL;
    }, 1200);
  };

  useEffect(() => {
    const css = `
/* ===== CONTACT PAGE ===== */
.sps-contact{
  padding:100px 6vw;
  background:linear-gradient(180deg,#FDFCFC,#EED3D6);
  font-family:Inter,system-ui;
}

/* GRID */
.sps-contact-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  gap:60px;
}

/* LEFT */
.sps-contact-left h2{
  font-size:42px;
  font-weight:900;
  color:#960546;
}

.sps-contact-left p{
  font-size:16px;
  color:#7E314B;
  line-height:1.7;
  margin:18px 0;
}

.sps-contact-info{
  display:flex;
  flex-direction:column;
  gap:14px;
  margin-top:22px;
  color:#960546;
  font-weight:600;
}

/* FORM CARD */
.sps-contact-card{
  background:rgba(255,255,255,0.75);
  backdrop-filter:blur(18px);
  border-radius:22px;
  padding:30px;
  border:1.5px solid rgba(150,5,70,.25);
  box-shadow:0 30px 60px rgba(150,5,70,.25);
}

.sps-contact-card h3{
  color:#960546;
  font-weight:900;
  margin-bottom:18px;
}

.sps-contact-card form{
  display:flex;
  flex-direction:column;
  gap:14px;
}

.sps-contact-card input,
.sps-contact-card select{
  padding:15px;
  border-radius:12px;
  border:1.5px solid #EED3D6;
  font-size:15px;
}

.sps-contact-card input:focus,
.sps-contact-card select:focus{
  outline:none;
  border-color:#B95778;
}

/* SUBMIT */
.sps-contact-btn{
  margin-top:8px;
  padding:16px;
  border:none;
  border-radius:14px;
  background:linear-gradient(90deg,#960546,#B95778);
  color:#fff;
  font-weight:900;
  font-size:16px;
  cursor:pointer;
}

/* SUCCESS MESSAGE */
.sps-success{
  position:fixed;
  bottom:30px;
  right:30px;
  background:#960546;
  color:#fff;
  padding:16px 22px;
  border-radius:14px;
  font-weight:800;
  box-shadow:0 12px 30px rgba(150,5,70,.45);
  animation:slideUp .4s ease;
  z-index:9999;
}

@keyframes slideUp{
  from{opacity:0; transform:translateY(20px);}
  to{opacity:1; transform:translateY(0);}
}

/* MOBILE */
@media(max-width:900px){
  .sps-contact-grid{ grid-template-columns:1fr; }
  .sps-contact-left h2{ font-size:32px; }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      <section className="sps-contact">
        <div className="sps-contact-grid">
          {/* LEFT */}
          <div className="sps-contact-left">
            <h2>Contact SPS Packers & Movers</h2>

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
                <option>Storage / Warehousing</option>
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
