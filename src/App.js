import React from "react";
import Navbar from "./components/navbar";       // ✅ matches navbar.js
import Hero from "./components/hero";           // ✅ matches hero.js
import Box from "./components/box";             // ✅ matches box.js
import Features from "./components/features";   // ✅ matches features.js
import TestimonialCard from "./components/TestimonialCard"; // ✅ matches testimonialcard.js
import PromoSection from "./components/PromoSection";       // ✅ matches promosection.js
import Footer from "./components/Footer";       // ✅ matches footer.js
import GetStarted from "./components/getstarted"; // ✅ matches getstarted.js

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Box />
      <Features />
      <TestimonialCard
        name="Sherri Cronin"
        role="Project Manager at TechCorp"
        quote="Using this website has made my tasks so much easier! I can't imagine my day without it."
        image="image.jpg"
      />
      <PromoSection />
      <Footer />
      <GetStarted />
    </>
  );
}

export default App;