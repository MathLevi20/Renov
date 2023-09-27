
import Coments from "@/components/LandingPage/Coments";
import Contact from "@/components/LandingPage/Contact";
import Features from "@/components/LandingPage/Feature";
import SmallCentered from "@/components/LandingPage/Footer";
import LargeWithNewsletter from "@/components/LandingPage/Footer";
import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/LandingPage/Header";
import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";
import Carousel1 from "@/components/LandingPage/carousel";
import Head from "next/head";
import React from "react";

function LandingPage() {
  return (
    <div className="">
      <Navbar />

      <Hero />
      <Carousel1 />
      <Features />
      <Coments />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
