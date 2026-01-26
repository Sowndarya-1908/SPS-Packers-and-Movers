import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  /* ===== BLOG DATA ===== */
  const blogs = {
    "1": {
      title: "How to Prepare Your Home Before Relocation",
      date: "October 15, 2024",
      category: "House Shifting",
      image: "/images/blog1.jpg",
      author: "Chennai Lal Team",
      content: `
Moving to a new home requires proper planning and organization.
Start by decluttering unnecessary items and categorizing essentials.

Professional packing ensures fragile items remain protected.
Label boxes clearly to make unpacking easier.

Hiring experienced movers like Chennai Lal Packers & Movers
ensures safe, timely, and stress-free relocation.
      `
    },
    "2": {
      title: "Professional Office Shifting Without Downtime",
      date: "November 23, 2024",
      category: "Office Moving",
      image: "/images/blog2.jpg",
      author: "Operations Manager",
      content: `
Office relocation demands strategic planning.
We ensure minimal business disruption with organized execution.

From IT equipment handling to secure document transfer,
our team guarantees smooth corporate relocation.
      `
    }
  };

  const blog = blogs[id];

  /* ✅ FIXED useEffect — dependency always constant */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    const css = `
*{margin:0;padding:0;box-sizing:border-box;}

.blog-details{
  padding:120px 6vw;
  background:linear-gradient(180deg,#031423,#062242);
  color:#ffffff;
  font-family:Inter,system-ui;
  min-height:100vh;
}

/* HERO */
.blog-hero{
  max-width:1000px;
  margin:auto;
  animation:fadeUp 0.8s ease forwards;
}

.blog-hero h1{
  font-size:46px;
  font-weight:900;
  margin-bottom:20px;
}

.blog-meta{
  color:#A7D4EE;
  font-weight:600;
  margin-bottom:30px;
}

/* IMAGE */
.blog-hero img{
  width:100%;
  border-radius:18px;
  margin-bottom:40px;
  box-shadow:0 30px 60px rgba(0,0,0,0.4);
  transition:transform .6s ease;
}

.blog-hero img:hover{
  transform:scale(1.03);
}

/* CONTENT */
.blog-content{
  max-width:900px;
  margin:auto;
  line-height:1.9;
  font-size:18px;
  color:#DCEBFF;
  animation:fadeUp 1s ease forwards;
}

.blog-content h2{
  font-size:30px;
  margin-top:40px;
  margin-bottom:15px;
}

.blog-content blockquote{
  border-left:4px solid #3F6C87;
  padding-left:20px;
  margin:30px 0;
  font-size:22px;
  font-weight:700;
  color:#ffffff;
}

/* RELATED POSTS */
.related-posts{
  margin-top:100px;
}

.related-title{
  font-size:34px;
  font-weight:900;
  margin-bottom:40px;
  text-align:center;
}

.related-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:40px;
}

.related-card{
  background:#0A304F;
  border-radius:18px;
  overflow:hidden;
  cursor:pointer;
  transition:0.4s ease;
}

.related-card:hover{
  transform:translateY(-8px);
  box-shadow:0 20px 40px rgba(63,108,135,0.4);
}

.related-card img{
  width:100%;
  height:220px;
  object-fit:cover;
}

.related-card-content{
  padding:20px;
}

.related-card-content h4{
  font-size:18px;
  font-weight:800;
}

/* ANIMATION */
@keyframes fadeUp{
  from{opacity:0; transform:translateY(30px);}
  to{opacity:1; transform:translateY(0);}
}

/* RESPONSIVE */
@media(max-width:900px){
  .blog-hero h1{
    font-size:30px;
  }
  .related-grid{
    grid-template-columns:1fr;
  }
}
`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

  }, [id]); // ✅ Always one dependency

  if (!blog) {
    return (
      <div style={{ padding: "150px 6vw", color: "#fff" }}>
        Blog not found
      </div>
    );
  }

  return (
    <section className="blog-details">

      {/* HERO */}
      <div className="blog-hero">
        <h1>{blog.title}</h1>
        <div className="blog-meta">
          {blog.date} • {blog.category} • By {blog.author}
        </div>
        <img src={blog.image} alt={blog.title} />
      </div>

      {/* CONTENT */}
      <div className="blog-content">
        <p style={{ whiteSpace: "pre-line" }}>{blog.content}</p>

        <h2>Why Choose Chennai Lal Packers & Movers?</h2>
        <p>
          We provide safe, reliable and affordable relocation services
          across Tamil Nadu and India. Our expert team ensures
          professional packing, secure loading, and timely delivery.
        </p>

        <blockquote>
          “Safe shifting, secure packing, and complete peace of mind.”
        </blockquote>

        <p>
          From house shifting to corporate relocation,
          we guarantee zero-stress moving experience.
        </p>
      </div>

      {/* RELATED POSTS */}
      <div className="related-posts">
        <div className="related-title">Related Posts</div>

        <div className="related-grid">

          <div
            className="related-card"
            onClick={() => navigate("/blog/1")}
          >
            <img src="/images/blog1.jpg" alt="related" />
            <div className="related-card-content">
              <h4>How to Prepare Your Home Before Relocation</h4>
            </div>
          </div>

          <div
            className="related-card"
            onClick={() => navigate("/blog/2")}
          >
            <img src="/images/blog2.jpg" alt="related" />
            <div className="related-card-content">
              <h4>Professional Office Shifting Without Downtime</h4>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
