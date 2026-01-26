import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Blog() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const blogs = [
    {
      id: "1",
      category: "House Shifting",
      date: "October 15, 2024",
      title: "How to Prepare Your Home Before Relocation",
      img: "/images/blog1.jpg",
      author: "Chennai Lal Team",
      authorImg: "/images/team1.jpg"
    },
    {
      id: "2",
      category: "Office Moving",
      date: "November 23, 2024",
      title: "Professional Office Shifting Without Downtime",
      img: "/images/blog2.jpg",
      author: "Operations Manager",
      authorImg: "/images/team2.jpg"
    },
     {
      id: "3",
      category: "House Shifting",
      date: "October 15, 2024",
      title: "How to Prepare Your Home Before Relocation",
      img: "/images/blog1.jpg",
      author: "Chennai Lal Team",
      authorImg: "/images/team1.jpg"
    },
    {
      id: "4",
      category: "Office Moving",
      date: "November 23, 2024",
      title: "Professional Office Shifting Without Downtime",
      img: "/images/blog2.jpg",
      author: "Operations Manager",
      authorImg: "/images/team2.jpg"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    const css = `
*{margin:0;padding:0;box-sizing:border-box;}

.sps-blog-section{
  padding:120px 6vw;
  background:linear-gradient(180deg,#031423,#062242);
  font-family:Inter,system-ui;
  min-height:100vh;
}

/* GRID */
.sps-blog-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:50px;
  max-width:1300px;
  margin:auto;
}

/* CARD */
.sps-blog-card{
  background:#0A1F33;
  border-radius:20px;
  overflow:hidden;
  box-shadow:0 25px 60px rgba(0,0,0,0.45);
  transition:all .4s ease;
  opacity:0;
  transform:translateY(60px);
  cursor:pointer;
}

.sps-blog-section.show .sps-blog-card{
  opacity:1;
  transform:translateY(0);
}

.sps-blog-card:hover{
  transform:translateY(-10px);
  box-shadow:0 35px 80px rgba(6,34,66,0.6);
}

/* IMAGE */
.sps-blog-img{
  position:relative;
  height:280px;
  overflow:hidden;
}

.sps-blog-img img{
  width:100%;
  height:100%;
  object-fit:cover;
  transition:transform .6s ease;
}

.sps-blog-card:hover img{
  transform:scale(1.08);
}

/* CATEGORY BADGE */
.sps-blog-badge{
  position:absolute;
  top:18px;
  left:18px;
  background:linear-gradient(90deg,#062242,#3F6C87);
  padding:7px 14px;
  border-radius:8px;
  font-size:13px;
  font-weight:700;
  color:#fff;
}

/* CONTENT */
.sps-blog-content{
  padding:28px;
  color:#fff;
}

.sps-blog-date{
  font-size:14px;
  color:#A7C9E2;
  margin-bottom:12px;
}

.sps-blog-title{
  font-size:24px;
  font-weight:900;
  line-height:1.3;
  margin-bottom:20px;
}

/* AUTHOR */
.sps-blog-author{
  display:flex;
  align-items:center;
  gap:12px;
  margin-top:15px;
}

.sps-blog-author img{
  width:42px;
  height:42px;
  border-radius:50%;
  object-fit:cover;
  border:2px solid #3F6C87;
}

.sps-blog-author span{
  font-size:14px;
  font-weight:600;
  color:#C8D7E5;
}

/* RESPONSIVE */
@media(max-width:1000px){
  .sps-blog-grid{
    grid-template-columns:1fr;
  }
}

@media(max-width:600px){
  .sps-blog-title{
    font-size:20px;
  }
  .sps-blog-img{
    height:220px;
  }
}
`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sps-blog-section" ref={sectionRef}>
      <div className="sps-blog-grid">
        {blogs.map((blog, i) => (
          <div
            className="sps-blog-card"
            key={i}
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <div className="sps-blog-img">
              <img src={blog.img} alt={blog.title} />
              <div className="sps-blog-badge">{blog.category}</div>
            </div>

            <div className="sps-blog-content">
              <div className="sps-blog-date">{blog.date}</div>
              <div className="sps-blog-title">{blog.title}</div>

              <div className="sps-blog-author">
                <img src={blog.authorImg} alt={blog.author} />
                <span>By {blog.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
