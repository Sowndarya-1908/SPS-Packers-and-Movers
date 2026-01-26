import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import AssistantPopup from "./components/AssistantPopup";
import ScrollToTop from "./components/ScrollToTop";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
       <ScrollToTop />
       <AssistantPopup />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
        <WhatsAppFloat />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
