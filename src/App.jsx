import React from "react";
import ClientLogoSection from "./components/ClientLogoSection";
import ProductSection from "./components/ProductSection";
import MainSection from "./components/MainSection";
import AboutUsSection from "./components/AboutUsSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Team from "./components/Team";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="flex flex-col bg-[linear-gradient(0deg,#FFF_0%,#FFF_100%,#FFF)]">
      <Header />
      <main>
        <MainSection />
        <AboutUsSection />
        <ClientLogoSection />
        <ProductSection />
        <ServicesSection />
        <Team />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
