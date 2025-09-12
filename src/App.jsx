// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";

import About from "./pages/About";

import ServicesLayout2 from "./pages/ServicesLayout2.jsx";
import ServiceDetails from "./pages/ServiceDetails";

import Team from "./pages/Team";
import TeamMemberDetails from "./pages/TeamMemberDetails";

import Blog from "./pages/Blog.jsx";

import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  // loader har page refresh pe chale
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        {/* Home pages */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Services */}
        <Route path="/services" element={<ServicesLayout2 />} />
        <Route path="/services/:id" element={<ServiceDetails />} />

        {/* Team */}
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamMemberDetails />} />


        {/* Blog */}
        <Route path="/blog" element={<Blog />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
