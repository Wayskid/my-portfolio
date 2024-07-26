"use client";
import LandingPage from "./components/sections/LandingPage";
import Service from "./components/sections/Service";
import Portfolio from "./components/sections/Portfolio";
import Testimonial from "./components/sections/Testimonial";
import Contact from "./components/sections/Contact";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="text-white">
      <Nav />
      <div className="mt-[87px] grid">
        <LandingPage />
        <Service />
        <Portfolio />
        <Testimonial />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
