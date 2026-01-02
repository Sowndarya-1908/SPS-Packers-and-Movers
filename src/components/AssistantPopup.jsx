import { useEffect, useState } from "react";

export default function AssistantPopupDark() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000); // show after 3s

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <>
      <div className="assistant-dark-wrap">
        {/* CHARACTER IMAGE */}
        <div className="assistant-dark-avatar">
          <img
            src="/images/assistant/hiimage.png"
            alt="Assistant"
          />
        </div>

        {/* SPEECH BUBBLE */}
        <div className="assistant-dark-bubble">
          <p>
            Hi friend! 👋 <br />
            Need help with packing or moving?
          </p>

          <div className="assistant-dark-actions">
            <button
              className="yes"
              onClick={() =>
                window.open(
                  "https://wa.me/919361046387?text=Hi%20I%20need%20packers%20and%20movers",
                  "_blank"
                )
              }
            >
              Sure!
            </button>

            <button className="no" onClick={() => setShow(false)}>
              No thanks
            </button>
          </div>
        </div>
      </div>

      <style>{`
/* ================= DARK ASSISTANT ================= */
.assistant-dark-wrap{
  position:fixed;
  bottom:26px;
  left:26px;
  display:flex;
  align-items:flex-end;
  gap:16px;
  z-index:9999;
  animation:darkSlideIn 0.6s ease forwards;
}

/* AVATAR */
.assistant-dark-avatar img{
  width:70px;
  height:auto;
  filter:drop-shadow(0 20px 40px rgba(0,0,0,0.45));
}

/* BUBBLE */
.assistant-dark-bubble{
  background:linear-gradient(180deg,#111827,#020617);
  color:#e5e7eb;
  padding:18px 20px;
  border-radius:18px;
  max-width:260px;
  box-shadow:0 25px 60px rgba(0,0,0,0.6);
  position:relative;
  animation:darkPop 0.4s ease forwards;
}

/* BUBBLE TAIL */
.assistant-dark-bubble::before{
  content:"";
  position:absolute;
  left:-8px;
  bottom:20px;
  width:16px;
  height:16px;
  background:#020617;
  transform:rotate(45deg);
}

/* TEXT */
.assistant-dark-bubble p{
  margin:0 0 14px;
  font-size:14px;
  line-height:1.6;
  color:#e5e7eb;
}

/* ACTIONS */
.assistant-dark-actions{
  display:flex;
  gap:16px;
}

.assistant-dark-actions button{
  border:none;
  background:none;
  font-weight:700;
  cursor:pointer;
  font-size:14px;
}

.assistant-dark-actions .yes{
  color:#22c55e;
}

.assistant-dark-actions .no{
  color:#9ca3af;
}

/* ANIMATIONS */
@keyframes darkSlideIn{
  from{
    transform:translateY(40px);
    opacity:0;
  }
  to{
    transform:translateY(0);
    opacity:1;
  }
}

@keyframes darkPop{
  from{
    transform:scale(0.85);
    opacity:0;
  }
  to{
    transform:scale(1);
    opacity:1;
  }
}

/* MOBILE */
@media(max-width:600px){
  .assistant-dark-wrap{
    left:16px;
    right:16px;
  }

  .assistant-dark-bubble{
    max-width:220px;
  }

  .assistant-dark-avatar img{
    width:60px;
  }
}
      `}</style>
    </>
  );
}
