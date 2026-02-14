import { useNavigate } from "react-router-dom";


import { useEffect, useState } from "react";

export default function MasonryBlog() {
const navigate = useNavigate();
  const [selectedBlog, setSelectedBlog] = useState(null);

  /* ================= BLOG DATA (ID BASED) ================= */

  const blogs = [
    {
      id: "id1",
      title: "Best Packers and Movers in Chennai – Chennai Lal Packers & Movers",
      image: "/images/blog221.png",
      date : "5 Jan 2026",
      content: `
      <h2>Best Packers and Movers in Chennai – Chennai Lal Packers & Movers</h2>

      <p>When it comes to relocating your home or office in Chennai, choosing the right packers and movers makes all the difference. At Chennai Lal Packers & Movers, we take pride in being one of the most trusted and efficient relocation service providers in the city.</p>

      <p>Our services include home shifting, office relocation, vehicle transport, loading and unloading, and safe warehousing solutions. Every item is packed using high-quality materials and delivered on time.</p>


      <h2>Top Vehicle Shifting & Office Shifting Services in Chennai</h2>

      <p>Relocation is one of the most stressful tasks. Chennai Lal Packers & Movers stands out as a trusted name offering premium vehicle shifting and office shifting services tailored to customer needs.</p>

     

      <h3>Why Choose Chennai Lal Packers & Movers?</h3>
      <ul>
        <li>Experienced Professionals</li>
        <li>High-Quality Packing Materials</li>
        <li>Affordable & Transparent Pricing</li>
        <li>Door-to-Door Relocation Support</li>
        <li>GPS Tracking Facility</li>
        <li>On-Time Delivery Commitment</li>
        <li>Customer-Centric Service</li>
      </ul>

   

      <h3>Vehicle Shifting Services in Chennai</h3>
      <p>We ensure safe and efficient vehicle shifting for two-wheelers and four-wheelers.</p>

      <h4>Safe & Professional Packaging</h4>
      <ul>
        <li>High-quality wrapping sheets</li>
        <li>Foam padding</li>
        <li>Protective covers</li>
        <li>Tyre blocks & wheel locks</li>
        <li>Rope and belt fasteners</li>
      </ul>

      <h4>Specialized Vehicle Carriers</h4>
      <ul>
        <li>Enclosed carriers</li>
        <li>Open carriers</li>
        <li>Multi-vehicle carriers</li>
        <li>Premium single-car carriers</li>
      </ul>

      

      <h3>Office Shifting Services in Chennai</h3>
      <p>We provide complete office shifting solutions designed to minimize downtime.</p>

      <ul>
        <li>Initial site survey & asset evaluation</li>
        <li>Customized packing strategy</li>
        <li>Timeline planning & logistics coordination</li>
        <li>Secure IT equipment handling</li>
        <li>Furniture dismantling & reinstallation</li>
      </ul>


      <h2>Conclusion</h2>
      <p>Relocation doesn’t have to be stressful when you choose the right partner. Chennai Lal Packers & Movers delivers professional, reliable, and safe shifting services across Chennai and other cities.</p>
      `
    },

   {
  id: "id2",
  title: "Trusted Home & Office Shifting Services in Chennai – Chennai Lal Packers & Movers",
  image: "/images/blog 2222.png",
  date : "28 Jan 2026",
  content: `
    <h2>Trusted Home & Office Shifting Services in Chennai – Chennai Lal Packers & Movers</h2>

    <p>Relocating your home or office requires proper planning and professional support. Chennai Lal Packers & Movers is a trusted name offering safe, efficient, and reliable shifting services across Chennai.</p>

    <p>From careful packing to secure transportation and timely delivery, our team ensures a smooth and stress-free moving experience for every customer.</p>

    <h2>Complete Relocation Solutions in Chennai</h2>

    <p>We provide end-to-end relocation services designed to meet your specific needs. Our systematic approach ensures safety, transparency, and customer satisfaction at every step.</p>

    <h3>Our Core Strengths</h3>
    <ul>
      <li>Well-trained and professional moving team</li>
      <li>Modern tools and advanced packing techniques</li>
      <li>Transparent pricing with no hidden charges</li>
      <li>Dedicated move coordinator support</li>
      <li>Fast response and customer assistance</li>
    </ul>

    <h3>Residential Relocation Services</h3>
    <p>We make home shifting simple and organized with careful planning and secure handling of all household items.</p>

    <h4>Secure Household Packing Process</h4>
    <ul>
      <li>Premium quality carton boxes</li>
      <li>Bubble wrap for fragile items</li>
      <li>Special packaging for glass and electronics</li>
      <li>Systematic labeling for easy unpacking</li>
      <li>Safe loading and unloading procedures</li>
    </ul>

    <h3>Corporate & Commercial Moving Services</h3>
    <p>Our office relocation services ensure minimal disruption to your business operations.</p>

    <ul>
      <li>Pre-move consultation and site inspection</li>
      <li>Organized document and file handling</li>
      <li>Secure packing of IT systems and servers</li>
      <li>Workstation dismantling and reinstallation</li>
      <li>Timely transport and setup support</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Chennai Lal Packers & Movers is committed to delivering trusted, safe, and efficient home and office shifting services in Chennai. Choose us for a smooth relocation experience backed by professionalism and customer satisfaction.</p>
  `
},

    {
  id: "id3",
  title: "Affordable & Secure Shifting Services in Chennai – Chennai Lal Packers & Movers",
  image: "/images/blog123.png",
  date : "14 Feb 2026",
  content: `
    <h2>Affordable & Secure Shifting Services in Chennai – Chennai Lal Packers & Movers</h2>

    <p>When it comes to relocating your home or office in Chennai, choosing affordable & secure shifting services makes all the difference. At Chennai Lal Packers & Movers, we take pride in being one of the most trusted and efficient relocation service providers in the city.</p>

    <p>Our services include home shifting, office relocation, vehicle transport, loading and unloading, and safe warehousing solutions. Every item is packed using high-quality materials and delivered safely and on time, ensuring complete peace of mind.</p>

    <h2>Top Home, Vehicle & Office Shifting Services in Chennai</h2>

    <p>Relocation can be stressful, but with the right moving partner, it becomes simple and hassle-free. Chennai Lal Packers & Movers stands out as a reliable name offering professional and secure shifting services tailored to customer needs and budgets.</p>

    <h3>Why Choose Chennai Lal Packers & Movers?</h3>
    <ul>
      <li>Experienced Professionals</li>
      <li>High-Quality Packing Materials</li>
      <li>Affordable & Transparent Pricing</li>
      <li>Door-to-Door Relocation Support</li>
      <li>GPS Tracking Facility</li>
      <li>On-Time Delivery Commitment</li>
      <li>Customer-Centric Service</li>
    </ul>

    <h3>Vehicle Shifting Services in Chennai</h3>
    <p>We ensure safe and efficient vehicle shifting for two-wheelers and four-wheelers across Chennai and other cities.</p>

    <h4>Safe & Professional Packaging</h4>
    <ul>
      <li>High-quality wrapping sheets</li>
      <li>Foam padding</li>
      <li>Protective covers</li>
      <li>Tyre blocks & wheel locks</li>
      <li>Rope and belt fasteners</li>
    </ul>

    <h4>Specialized Vehicle Carriers</h4>
    <ul>
      <li>Enclosed carriers</li>
      <li>Open carriers</li>
      <li>Multi-vehicle carriers</li>
      <li>Premium single-car carriers</li>
    </ul>

    <h3>Office Shifting Services in Chennai</h3>
    <p>We provide complete office shifting solutions designed to minimize downtime and ensure smooth business transitions.</p>

    <ul>
      <li>Initial site survey & asset evaluation</li>
      <li>Customized packing strategy</li>
      <li>Timeline planning & logistics coordination</li>
      <li>Secure IT equipment handling</li>
      <li>Furniture dismantling & reinstallation</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Relocation doesn’t have to be stressful when you choose the right partner. Chennai Lal Packers & Movers delivers professional, affordable, and secure shifting services across Chennai and other cities with a strong commitment to safety and customer satisfaction.</p>
  `
}

  
  
  ];

  /* ================= ANIMATION ================= */

  useEffect(() => {
    
    const cards = document.querySelectorAll(".blog-card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  }, []);

  /* ================= SINGLE BLOG VIEW ================= */

  if (selectedBlog) {
    return (
      <>
        <section className="single-blog-wrapper">
          <div className="single-layout">

            <div className="single-main">
              <button
  className="back-btn"
  onClick={() => navigate("/blog")}
>
  ← Back to Blogs
</button>

              <h1>{selectedBlog.title}</h1>

              <img
                src={selectedBlog.image}
                alt="blog"
                className="featured-image"
              />

              <div
                className="single-content"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
            </div>

           <aside className="single-sidebar">

  <div className="sidebar-cta">
    <h2>Get Free Moving Quote</h2>
    <p>Safe, Fast & Affordable Relocation Services</p>
    <button className="contact-btn">Call Now</button>
  </div>

  <div className="sidebar-box">
    <h3>Why Customers Trust Us</h3>
    <ul>
      <li>✔ 5000+ Successful Moves</li>
      <li>✔ 10+ Years Experience</li>
      <li>✔ GPS Tracking Available</li>
      <li>✔ 100% Safe Handling</li>
    </ul>
  </div>

  <div className="sidebar-box highlight-sidebar">
    <h3>Need Urgent Shifting?</h3>
    <p>We offer same-day relocation services.</p>
    <button className="contact-btn light-btn">Book Today</button>
  </div>

</aside>


          </div>
        </section>

        <style>{styles}</style>
      </>
    );
  }

  /* ================= GRID VIEW ================= */

  return (
    <>
      <section className="blog-section">
        <div className="blog-container">

          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`blog-card ${index === 1 ? "tall" : index === 2 ? "medium" : ""}`}
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="card-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <h2>{blog.title}</h2>
                <h1>{blog.date}</h1>
              </div>
            </div>
          ))}

        </div>
      </section>

      <style>{styles}</style>
    </>
  );
}

/* ================= CSS ================= */

const styles = `
.blog-section{
  padding:100px 0;
  // background:#fafafa;
}

.blog-container{
  width:85%;
  margin:auto;
  column-count:2;
  column-gap:120px;
}

.blog-card{
  break-inside:avoid;
  margin-bottom:120px;
  display:inline-block;
  width:100%;
  background:#fff;
  box-shadow:0 20px 40px rgba(0,0,0,0.08);
  transition:all 0.6s ease;
  opacity:0;
  transform:translateY(60px);
  border-radius:6px;
  overflow:hidden;
  cursor:pointer;
}

.blog-card.show{
  opacity:1;
  transform:translateY(0);
}

.blog-card:hover{
  transform:translateY(-12px);
  box-shadow:0 35px 70px rgba(0,0,0,0.15);
}

.blog-card.tall{
  margin-top:60px;
}

.blog-card.medium{
  margin-top:120px;
}

.card-image img{
  width:100%;
  height:auto;          /* ✅ remove fixed height */
  display:block;
  object-fit:cover;
}
.blog-content{
  padding:35px 40px 45px;
}

.blog-content h2{
  font-size:22px;
  font-weight:700;
}

.blog-content h1{
  font-size:15px;
  font-weight:500;
}
.single-layout{
  width:85%;
  margin:auto;
  display:flex;
  gap:60px;
}

.single-sidebar{
  flex:1;
  position:sticky;
  top:100px;
}

.featured-image{
  width:100%;
  max-width:100%;
  height:auto;
  display:block;
  margin:30px 0;
  border-radius:8px;
}

.single-content{
  font-size:18px;
  line-height:1.8;
}

@media(max-width:992px){
  .blog-container{
    column-count:1;
  }
  .single-layout{
    flex-direction:column;
  }
}

/* ===== SIDEBAR FIXED WIDTH ===== */

.single-sidebar{
  flex: 0 0 340px;   /* fixed proper width */
  position: sticky;
  top: 100px;
  align-self: flex-start;
}

/* ===== MAIN CTA ===== */

.sidebar-cta{
  background: linear-gradient(135deg,#0f172a,#1e293b);
  color:#fff;
  padding:35px;
  border-radius:12px;
  margin-bottom:30px;
  text-align:center;
  box-shadow:0 20px 40px rgba(0,0,0,0.15);
}

.sidebar-cta h2{
  font-size:28px;
  font-weight:700;
  margin-bottom:15px;
  line-height:1.3;
}

.sidebar-cta p{
  font-size:15px;
  margin-bottom:20px;
  opacity:0.9;
}

/* ===== BUTTON ===== */

.contact-btn{
  padding:12px 28px;
  background:#ffffff;
  color:#0f172a;
  border:none;
  font-weight:600;
  border-radius:6px;
  cursor:pointer;
  transition:0.3s ease;
}

.contact-btn:hover{
  transform:translateY(-3px);
}

.light-btn{
  background:#fff;
  color:#0f172a;
}

/* ===== NORMAL SIDEBAR BOX ===== */

.sidebar-box{
  padding:25px;
  background:#f5f5f5;
  border-radius:10px;
  margin-bottom:30px;
}

.sidebar-box h3{
  margin-bottom:15px;
}

.sidebar-box ul{
  padding-left:18px;
  line-height:1.8;
}

/* ===== HIGHLIGHT BOX ===== */

.highlight-sidebar{
  background:#0f172a;
  color:#fff;
}

.highlight-sidebar .contact-btn{
  background:#fff;
  color:#0f172a;
}

/* ===== RESPONSIVE ===== */

@media(max-width:992px){
  .single-layout{
    flex-direction:column;
  }

  .single-sidebar{
    flex: 1;
    position:relative;
    top:0;
  }
}

/* ================= MOBILE IMPROVEMENTS ================= */

@media(max-width:768px){

  .blog-section{
    padding:60px 0;
  }

  .blog-container{
    width:92%;
    column-count:1;
    column-gap:0;
  }

  .blog-card{
    margin-bottom:10px;
    transform:none;   /* prevent hover shift jump */
  }

  .blog-content{
    padding:25px 20px 30px;
  }

   .blog-container{
    column-count:1;
  }

  .blog-card{
    margin-bottom:35px;
  }

  .blog-content h2{
    font-size:18px;
    line-height:1.4;
  }

  .blog-content h1{
    font-size:13px;
  }

  /* ===== SINGLE BLOG MOBILE ===== */

  .single-layout{
    width:92%;
    gap:30px;
  }

  .single-content{
    font-size:16px;
    line-height:1.7;
  }

  .featured-image{
    margin:20px 0;
  }

  /* ===== SIDEBAR MOBILE ===== */

  .single-sidebar{
    position:relative;
    top:0;
    flex:1;
  }

  .sidebar-cta{
    padding:25px;
  }

  .sidebar-cta h2{
    font-size:20px;
  }

  .sidebar-cta p{
    font-size:14px;
  }

  .sidebar-box{
    padding:20px;
  }

  .contact-btn{
    width:100%;
    padding:12px;
  }
}

/* ================= SMALL MOBILE ================= */

@media(max-width:480px){

  .blog-content{
    padding:20px 18px 5px;
  }

  .blog-content h2{
    font-size:16px;
  }

  .single-content{
    font-size:15px;
  }

  .sidebar-cta h2{
    font-size:18px;
  }
}


`;








