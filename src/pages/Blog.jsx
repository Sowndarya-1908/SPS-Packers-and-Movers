


import { useEffect, useState } from "react";

export default function MasonryBlog() {

  const [selectedBlog, setSelectedBlog] = useState(null);

  /* ================= BLOG DATA (ID BASED) ================= */

  const blogs = [
    {
      id: "id1",
      title: "Best Packers and Movers in Chennai – Chennai Lal Packers & Movers",
      image: "/images/blog11.jpg",
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
    }
    // {
    //   id: "id2",
    //   title: "AI-Powered Functionality in Google's SEO Tools",
    //   image: "/images/bgserv/hiremini.png",
    //   content: `
    //     <h2>AI-Powered Functionality in Google's SEO Tools</h2>
    //     <p>Artificial Intelligence is transforming SEO and digital marketing strategies.</p>
    //     <ul>
    //       <li>AI keyword clustering</li>
    //       <li>Search intent prediction</li>
    //       <li>Automated content suggestions</li>
    //       <li>Performance forecasting</li>
    //     </ul>
    //     <p>Businesses leveraging AI tools gain a competitive edge.</p>
    //   `
    // },
    // {
    //   id: "id3",
    //   title: "Discord as an Engagement and Digital PR Platform",
    //   image: "/images/bgserv/hiremini.png",
    //   content: `
    //     <h2>Discord as an Engagement Platform</h2>
    //     <p>Discord is evolving beyond gaming into a powerful community platform.</p>
    //     <ul>
    //       <li>Community building</li>
    //       <li>Real-time engagement</li>
    //       <li>Brand loyalty growth</li>
    //     </ul>
    //   `
    // },
    // {
    //   id: "id4",
    //   title: "What Is Google AI Mode and How Does It Work?",
    //   image: "/images/bgserv/hiremini.png",
    //   content: `
    //     <h2>What Is Google AI Mode?</h2>
    //     <p>Google AI Mode enhances search results using generative intelligence.</p>
    //     <ul>
    //       <li>Context-aware answers</li>
    //       <li>Conversational search</li>
    //       <li>Predictive results</li>
    //     </ul>
    //   `
    // }
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
                onClick={() => setSelectedBlog(null)}
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
  background:#fafafa;
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

`;

// import { useEffect, useState } from "react";

// export default function MasonryBlog() {

//   const [selectedBlog, setSelectedBlog] = useState(null);

//   useEffect(() => {
//     const cards = document.querySelectorAll(".blog-card");

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       });
//     }, { threshold: 0.2 });

//     cards.forEach(card => observer.observe(card));
//   }, []);

//   /* ================= SINGLE BLOG VIEW ================= */

//   if (selectedBlog) {
//     return (
//       <>
//         <section className="single-blog-wrapper">
//           <div className="single-layout">

//             {/* LEFT CONTENT */}
//             <div className="single-main">

//               <button
//                 className="back-btn"
//                 onClick={() => setSelectedBlog(null)}
//               >
//                 ← Back to Blogs
//               </button>

//               <h1>{selectedBlog.title}</h1>

//               <img
//                 src={selectedBlog.image}
//                 alt="blog"
//                 className="featured-image"
//               />

// <div
//   className="single-content"
//   dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
// ></div>

//             </div>

//             {/* RIGHT SIDEBAR */}
//            <aside className="single-sidebar">

//   {/* Sticky CTA */}
//   <div className="sidebar-box">
//     <h3>Get Free Moving Quote</h3>
//     <p>Safe, Fast & Affordable Relocation Services</p>
//     <button className="contact-btn">Call Now</button>
//   </div>

//   {/* Trust Box */}
//   <div className="sidebar-box trust-sidebar">
//     <h3>Why Customers Trust Us</h3>
//     <ul>
//       <li>✔ 5000+ Successful Moves</li>
//       <li>✔ 10+ Years Experience</li>
//       <li>✔ GPS Tracking Available</li>
//       <li>✔ 100% Safe Handling</li>
//     </ul>
//   </div>

//   {/* Services List */}
//   <div className="sidebar-box">
//     <h3>Our Services</h3>
//     <ul>
//       <li>Home Shifting</li>
//       <li>Office Relocation</li>
//       <li>Vehicle Transport</li>
//       <li>Warehousing</li>
//       <li>Loading & Unloading</li>
//     </ul>
//   </div>

//   {/* Emergency Contact */}
//   <div className="sidebar-box highlight-sidebar">
//     <h3>Need Urgent Shifting?</h3>
//     <p>We offer same-day relocation services.</p>
//     <button className="contact-btn">Book Today</button>
//   </div>

// </aside>


//           </div>
//         </section>

//         <style>{styles}</style>
//       </>
//     );
//   }

//   /* ================= MASONRY GRID VIEW ================= */

//   return (
//     <>
//       <section className="blog-section">
//         <div className="blog-container">

//           {/* Card 1 */}
//          {/* Card 1 */}
// <div
//   className="blog-card"
//   onClick={() =>
//     setSelectedBlog({
//       title: "Best Packers and Movers in Chennai – Chennai Lal Packers & Movers",
//       image: "/images/bgserv/hiremini.png",
//       content: `
//       <h2>Best Packers and Movers in Chennai – Chennai Lal Packers & Movers</h2>

//       <p>When it comes to relocating your home or office in Chennai, choosing the right packers and movers makes all the difference. At Chennai Lal Packers & Movers, we take pride in being one of the most trusted and efficient relocation service providers in the city.</p>

//       <p>Our services include home shifting, office relocation, vehicle transport, loading and unloading, and safe warehousing solutions. Every item is packed using high-quality materials and delivered on time.</p>

//       <hr/>

//       <h2>Top Vehicle Shifting & Office Shifting Services in Chennai</h2>

//       <p>Relocation is one of the most stressful tasks. Chennai Lal Packers & Movers stands out as a trusted name offering premium vehicle shifting and office shifting services tailored to customer needs.</p>

//       <hr/>

//       <h3>Why Choose Chennai Lal Packers & Movers?</h3>
//       <ul>
//         <li>Experienced Professionals</li>
//         <li>High-Quality Packing Materials</li>
//         <li>Affordable & Transparent Pricing</li>
//         <li>Door-to-Door Relocation Support</li>
//         <li>GPS Tracking Facility</li>
//         <li>On-Time Delivery Commitment</li>
//         <li>Customer-Centric Service</li>
//       </ul>

//       <hr/>

//       <h3>Vehicle Shifting Services in Chennai</h3>
//       <p>We ensure safe and efficient vehicle shifting for two-wheelers and four-wheelers.</p>

//       <h4>Safe & Professional Packaging</h4>
//       <ul>
//         <li>High-quality wrapping sheets</li>
//         <li>Foam padding</li>
//         <li>Protective covers</li>
//         <li>Tyre blocks & wheel locks</li>
//         <li>Rope and belt fasteners</li>
//       </ul>

//       <h4>Specialized Vehicle Carriers</h4>
//       <ul>
//         <li>Enclosed carriers</li>
//         <li>Open carriers</li>
//         <li>Multi-vehicle carriers</li>
//         <li>Premium single-car carriers</li>
//       </ul>

//       <hr/>

//       <h3>Office Shifting Services in Chennai</h3>
//       <p>We provide complete office shifting solutions designed to minimize downtime.</p>

//       <ul>
//         <li>Initial site survey & asset evaluation</li>
//         <li>Customized packing strategy</li>
//         <li>Timeline planning & logistics coordination</li>
//         <li>Secure IT equipment handling</li>
//         <li>Furniture dismantling & reinstallation</li>
//       </ul>

//       <hr/>

//       <h2>Conclusion</h2>
//       <p>Relocation doesn’t have to be stressful when you choose the right partner. Chennai Lal Packers & Movers delivers professional, reliable, and safe shifting services across Chennai and other cities.</p>
//       `
//     })
//   }
// >

//             <div className="card-image">
//               <img src="/images/bgserv/hiremini.png" alt="Blog 1" />
//             </div>
//             <div className="blog-content">
//               <h2>Best Packers and Movers in Chennai</h2>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div
//             className="blog-card tall"
//             onClick={() =>
//               setSelectedBlog({
//                 title: "AI-Powered Functionality in Google's SEO Tools",
//                 image: "/images/bgserv/hiremini.png"
//               })
//             }
//           >
//             <div className="card-image">
//               <img src="/images/bgserv/hiremini.png" alt="Blog 2" />
//             </div>
//             <div className="blog-content">
//               <h2>AI-Powered Functionality in Google's SEO Tools</h2>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div
//             className="blog-card medium"
//             onClick={() =>
//               setSelectedBlog({
//                 title: "Discord as an Engagement and Digital PR Platform",
//                 image: "/images/bgserv/hiremini.png"
//               })
//             }
//           >
//             <div className="card-image">
//               <img src="/images/bgserv/hiremini.png" alt="Blog 3" />
//             </div>
//             <div className="blog-content">
//               <h2>Discord as an Engagement and Digital PR Platform</h2>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div
//             className="blog-card"
//             onClick={() =>
//               setSelectedBlog({
//                 title: "What Is Google AI Mode and How Does It Work?",
//                 image: "/images/bgserv/hiremini.png"
//               })
//             }
//           >
//             <div className="card-image">
//               <img src="/images/bgserv/hiremini.png" alt="Blog 4" />
//             </div>
//             <div className="blog-content">
//               <h2>What Is Google AI Mode and How Does It Work?</h2>
//             </div>
//           </div>

//         </div>
//       </section>

//       <style>{styles}</style>
//     </>
//   );
// }


// /* ================= CSS ================= */

// const styles = `

// .blog-section{
//   padding:100px 0;
//   background:#fafafa;
// }

// .blog-container{
//   width:85%;
//   margin:auto;
//   column-count:2;
//   column-gap:120px;
// }

// /* ===== CARD ===== */

// .blog-card{
//   break-inside:avoid;
//   margin-bottom:120px;
//   display:inline-block;
//   width:100%;
//   background:#fff;
//   box-shadow:0 20px 40px rgba(0,0,0,0.08);
//   transition:all 0.6s ease;
//   opacity:0;
//   transform:translateY(60px);
//   border-radius:6px;
//   overflow:hidden;
//   cursor:pointer;
// }

// .blog-card.show{
//   opacity:1;
//   transform:translateY(0);
// }

// .blog-card:hover{
//   transform:translateY(-12px);
//   box-shadow:0 35px 70px rgba(0,0,0,0.15);
// }

// .blog-card.tall{
//   margin-top:60px;
// }

// .blog-card.medium{
//   margin-top:120px;
// }

// .card-image img{
//   width:100%;
//   height:300px;
//   display:block;
//   object-fit:cover;
// }

// .blog-content{
//   padding:35px 40px 45px;
// }

// .blog-content h2{
//   font-size:26px;
//   line-height:1.4;
//   font-weight:700;
//   color:#0f172a;
// }

// /* ===== SINGLE BLOG ===== */

// .single-blog-wrapper{
//   padding:100px 0;
//   background:#fff;
// }

// .single-layout{
//   width:85%;
//   margin:auto;
//   display:flex;
//   gap:60px;
// }

// .single-main{
//   flex:2;
// }

// .single-sidebar{
//   flex:1;
//   position:sticky;
//   top:100px;
//   align-self:flex-start;
// }

// .featured-image{
//   width:100%;
//   margin:30px 0;
//   border-radius:8px;
// }

// .single-main h1{
//   font-size:32px;
// }

// .single-content{
//   font-size:18px;
//   line-height:1.8;
// }

// .single-content h2,
// .single-content h3{
//   margin-top:30px;
// }

// .single-content ul{
//   margin-left:20px;
// }

// .sidebar-box{
//   padding:30px;
//   background:#f5f5f5;
//   border-radius:8px;
//   margin-bottom:30px;
// }

// .contact-btn{
//   margin-top:15px;
//   padding:10px 20px;
//   background:#0f172a;
//   color:#fff;
//   border:none;
//   cursor:pointer;
// }

// .back-btn{
//   margin-bottom:20px;
//   padding:8px 16px;
//   border:none;
//   background:#eee;
//   cursor:pointer;
// }

// /* ===== MOBILE ===== */

// @media(max-width:992px){
//   .blog-container{
//     column-count:1;
//     column-gap:0;
//   }

//   .blog-card{
//     margin-bottom:60px;
//   }

//   .single-layout{
//     flex-direction:column;
//   }
// }


// /* ===== Highlight Box ===== */

// .highlight-box{
//   background:#f1f5f9;
//   padding:25px;
//   border-left:4px solid #0f172a;
//   margin:30px 0;
//   border-radius:6px;
// }

// /* ===== Trust Section ===== */

// .trust-section{
//   display:flex;
//   gap:20px;
//   margin:40px 0;
// }

// .trust-box{
//   flex:1;
//   background:#f8fafc;
//   padding:25px;
//   text-align:center;
//   border-radius:8px;
//   box-shadow:0 5px 15px rgba(0,0,0,0.05);
// }

// .trust-box h3{
//   font-size:24px;
//   margin-bottom:5px;
//   color:#0f172a;
// }

// /* ===== Sticky Sidebar ===== */

// .sticky-cta{
//   position:sticky;
//   top:100px;
// }
// .sidebar-box{
//   padding:25px;
//   background:#f5f5f5;
//   border-radius:8px;
//   margin-bottom:30px;
// }

// .sidebar-box h3{
//   margin-bottom:15px;
// }

// .sidebar-box ul{
//   padding-left:18px;
//   line-height:1.8;
// }

// .trust-sidebar{
//   background:#eef2ff;
// }

// .highlight-sidebar{
//   background:#0f172a;
//   color:#fff;
// }

// .highlight-sidebar button{
//   background:#fff;
//   color:#0f172a;
// }


// `;
