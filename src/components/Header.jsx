import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const css = `
/* ================= HEADER ================= */
.sps-header{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:90px;
  background: linear-gradient(90deg, #15304D 0%, #486C85 100%);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 6vw;
  font-family:Inter,system-ui;
  z-index:9999;
  box-shadow:0 10px 30px rgba(21,48,77,0.35);
}

/* ================= LOGO WRAPPER ================= */
.sps-logo{
  display:flex;
  align-items:center;
  gap:12px;
  text-decoration:none;
  z-index:10001;
}

/* LOGO IMAGE */
.sps-logo img{
  height:55px;
  width:auto;
  object-fit:contain;
}

/* LOGO TEXT */
.sps-logo-text{
  font-size:18px;
  font-weight:900;
  background:linear-gradient(90deg,#ffffff,#c7dfff);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* DESKTOP NAV */
.sps-nav{
  display:flex;
  gap:32px;
}

.sps-nav a{
  text-decoration:none;
  font-weight:600;
  color:#ffffff;
  font-size:15px;
  position:relative;
  transition:0.3s ease;
}

/* HOVER */
.sps-nav a:hover{
  color:#c7dfff;
}

/* ACTIVE LINK */
.sps-nav a.active{
  color:#c7dfff;
}

/* ACTIVE UNDERLINE */
.sps-nav a.active::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-6px;
  width:100%;
  height:3px;
  border-radius:2px;
  background:linear-gradient(90deg,#ffffff,#c7dfff);
  box-shadow:0 0 10px rgba(199,223,255,0.6);
}

/* RIGHT SECTION */
.sps-right{
  display:flex;
  align-items:center;
  gap:18px;
  z-index:10001;
}

/* CTA BUTTON */
.sps-cta{
  background: linear-gradient(90deg, #ffffff, #c7dfff);
  color:#15304D;
  padding:10px 18px;
  border-radius:10px;
  font-weight:800;
  text-decoration:none;
  font-size:14px;
  transition:0.3s ease;
  border:none;
}

.sps-cta:hover{
  box-shadow:0 0 18px rgba(199,223,255,0.8);
}

/* HAMBURGER */
.sps-hamburger{
  display:none;
  font-size:32px;
  color:#ffffff;
  cursor:pointer;
}

/* ================= MOBILE ================= */
@media(max-width:900px){

  .sps-logo img{
    height:45px;
  }

  .sps-logo-text{
    font-size:14px;
  }

  .sps-nav{
    position:fixed;
    top:90px;
    left:0;
    width:100%;
    background: linear-gradient(180deg, #15304D, #486C85);
    flex-direction:column;
    align-items:center;
    gap:22px;
    padding:30px 0;
    display:none;
    z-index:10000;
  }

  .sps-nav.open{
    display:flex;
  }

  .sps-nav a{
    font-size:18px;
  }

  .sps-hamburger{
    display:block;
    position:absolute;
    right:20px;
    top:28px;
  }

  .sps-right{
    display:none;
  }
}

/* PAGE OFFSET */
.page{
  padding-top:90px;
}
`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sps-header">

      {/* LOGO + TEXT */}
      <Link to="/" className="sps-logo">
        <img src="/images/loo.png" alt="Chennai Lal Packers & Movers Logo" />
        <div className="sps-logo-text">
          CHENNAI LAL
        </div>
      </Link>

      {/* NAVIGATION */}
      <nav className={`sps-nav ${open ? "open" : ""}`}>
        <Link to="/" className={isActive("/") ? "active" : ""} onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={() => setOpen(false)}>About</Link>
        <Link to="/services" className={isActive("/services") ? "active" : ""} onClick={() => setOpen(false)}>Services</Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/blog" className={isActive("/blog") ? "active" : ""} onClick={() => setOpen(false)}>Blog</Link>
      </nav>

      {/* CTA */}
      <div className="sps-right">
        <a href="tel:9361046387" className="sps-cta">Call Now</a>
      </div>

      {/* MOBILE MENU ICON */}
      <div className="sps-hamburger" onClick={() => setOpen(!open)}>☰</div>

    </header>
  );
}
