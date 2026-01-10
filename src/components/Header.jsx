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
  background:#960546;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 6vw;
  font-family:Inter,system-ui;
  z-index:9999;
}

/* LOGO */
.sps-logo{
  font-size:20px;
  font-weight:900;
  color:#FDFCFC;
  text-decoration:none;
  z-index:10001;
}

/* DESKTOP NAV */
.sps-nav{
  display:flex;
  gap:32px;
}

.sps-nav a{
  text-decoration:none;
  font-weight:600;
  color:#FDFCFC;
  font-size:15px;
  position:relative;
}

/* ACTIVE LINK */
.sps-nav a.active{
  color:#EED3D6;
}

.sps-nav a.active::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-6px;
  width:100%;
  height:3px;
  background:#B95778;
  border-radius:2px;
}

/* RIGHT SECTION */
.sps-right{
  display:flex;
  align-items:center;
  gap:18px;
  z-index:10001;
}

/* CTA */
.sps-cta{
  background:#B95778;
  color:#FDFCFC;
  padding:10px 18px;
  border-radius:8px;
  font-weight:700;
  text-decoration:none;
  font-size:14px;
}

/* HAMBURGER DEFAULT (DESKTOP HIDDEN) */
.sps-hamburger{
  display:none;
  font-size:32px;
  color:#FFFFFF;
  cursor:pointer;
}

/* ================= MOBILE ================= */
@media(max-width:900px){

  /* MOBILE NAV MENU */
  .sps-nav{
    position:fixed;
    top:90px;
    left:0;
    width:100%;
    background:#FDFCFC;
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
    color:#960546;
    font-size:18px;
  }

  /* HAMBURGER ALWAYS ON TOP RIGHT */
  .sps-hamburger{
    display:block;
    position:absolute;
    right:20px;
    top:28px;
    font-size:32px;
    color:#fff;
    z-index:10005;
  }

  /* HIDE CTA ON MOBILE */
  .sps-right{
    display:none;
  }
}

/* PAGE CONTENT OFFSET */
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

      {/* LOGO */}
      <Link to="/" className="sps-logo">
        SPS Packers & Movers
      </Link>

      {/* NAVIGATION */}
      <nav className={`sps-nav ${open ? "open" : ""}`}>
        <Link to="/" className={isActive("/") ? "active" : ""} onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={() => setOpen(false)}>About</Link>
        <Link to="/services" className={isActive("/services") ? "active" : ""} onClick={() => setOpen(false)}>Services</Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={() => setOpen(false)}>Contact</Link>
      </nav>

      {/* DESKTOP RIGHT BUTTON */}
      <div className="sps-right">
        <a href="tel:9361046387" className="sps-cta">Call Now</a>
      </div>

      {/* MOBILE HAMBURGER */}
      <div className="sps-hamburger" onClick={() => setOpen(!open)}>☰</div>
    </header>
  );
}
