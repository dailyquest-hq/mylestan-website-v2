import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Homepage from "./app/page";
import AboutPage from "./app/about/page";
import ServicesPage from "./app/services/page";
import ContactPage from "./app/contact/page";
import BlogsPage from "./app/blogs/page";
import MediaSpeakingPage from "./app/media-speaking/page";
import FAQsPage from "./app/faqs/page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/media-speaking" element={<MediaSpeakingPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
      </Routes>
    </Router>
  );
}
