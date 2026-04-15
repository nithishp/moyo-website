"use client";
import Hero from "./_components/Hero";
import Stats from "./_components/Stats";
import Features from "./_components/Features";
import ProductSection from "./_components/ProductSection";
import TestimonialCard from "./_components/TestimonialCard";
import ContactSection from "./_components/ContactSection";
import { SplashScreen } from "./_components/SplashScreen/SplashScreen";
import { useState, useEffect } from "react";
import Footer from "./_components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <ProductSection />
      <TestimonialCard />
      <ContactSection />
      <Footer />
    </main>
  );
}
