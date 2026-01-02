import React, { useEffect } from "react";

export default function WhatsAppFloat() {
  useEffect(() => {
    const css = `
/* ===== WHATSAPP FLOAT BUTTON ===== */
.sps-whatsapp-float{
  position:fixed;
  bottom:24px;
  right:24px;
  width:58px;
  height:58px;
  background:#25D366;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 10px 25px rgba(0,0,0,0.25);
  z-index:9999;
  cursor:pointer;
  transition:0.3s;
}

.sps-whatsapp-float:hover{
  transform:scale(1.08);
}

.sps-whatsapp-float img{
  width:30px;
  height:30px;
}

/* MOBILE */
@media(max-width:480px){
  .sps-whatsapp-float{
    width:54px;
    height:54px;
    bottom:20px;
    right:20px;
  }

  .sps-whatsapp-float img{
    width:28px;
    height:28px;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  const whatsappNumber = "917550057453"; // 👈 OWNER NUMBER
  const message = "Hi, I want enquiry for packing and moving services.";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="sps-whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
}
