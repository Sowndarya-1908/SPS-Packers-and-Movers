import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  useEffect(() => {
    const css = `
/* ================= FOOTER ================= */
.sps-footer{
  background:#7E314B;
  color:#FDFCFC;
  padding:60px 6vw 30px;
  font-family:Inter,system-ui;
}

.sps-footer-grid{
  display:grid;
  grid-template-columns:2fr 1fr 1fr 1fr;
  gap:40px;
}

/* LOGO */
.sps-footer h3{
  font-size:22px;
  font-weight:900;
  margin-bottom:14px;
}

/* TEXT */
.sps-footer p{
  font-size:14px;
  line-height:1.7;
  color:#EED3D6;
}

/* LINKS */
.sps-footer h4{
  font-size:16px;
  margin-bottom:14px;
}

.sps-footer a{
  display:block;
  color:#FDFCFC;
  text-decoration:none;
  font-size:14px;
  margin-bottom:8px;
}

.sps-footer a:hover{
  color:#D79DAB;
}

/* BOTTOM */
.sps-footer-bottom{
  margin-top:40px;
  padding-top:20px;
  border-top:1px solid rgba(255,255,255,0.25);
  text-align:center;
  font-size:13px;
  color:#EED3D6;
}

/* MOBILE */
@media(max-width:900px){
  .sps-footer-grid{
    grid-template-columns:1fr;
    gap:30px;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <footer className="sps-footer">
      <div className="sps-footer-grid">

        {/* ABOUT */}
        <div>
          <h3>SPS Packers & Movers</h3>
          <p>
            SPS Packers & Movers provides safe, reliable, and professional
            relocation services for homes, offices, and commercial moves
            across India.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SERVICES */}
        <div>
          <h4>Services</h4>
          <a>House Shifting</a>
          <a>Office Shifting</a>
          <a>Transportation</a>
          <a>Commercial Moves</a>
        </div>

        {/* CONTACT */}
        <div>
          <h4>Contact</h4>
          <p>📞 93610 46387</p>
          <p>📧 info@spspackers.com</p>
          <p>📍 India</p>
        </div>

      </div>

      <div className="sps-footer-bottom">
        © {new Date().getFullYear()} SPS Packers & Movers. All rights reserved.
      </div>
    </footer>
  );
}
