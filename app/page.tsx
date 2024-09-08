'use client'
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hero from "./_components/Hero";
import Stats from "./_components/Stats";
import Features from "./_components/Features";
import Banner from "./_components/Banner";
import TestimonialCard from "./_components/TestimonialCard";
import ProductSection from './_components/ProductSection'
import  ContactSection from "./_components/ContactSection";
import {SplashScreen} from './_components/SplashScreen/SplashScreen'
import { useState, useEffect } from "react";
import Footer from "./_components/Footer";
export default function Home() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     const timer = setTimeout(() => {
       setLoading(false);
     }, 4000); // Duration of the splash screen (4 seconds in this case)
     return () => clearTimeout(timer);
   }, []);

   if (loading) {
     return <SplashScreen />;
   }
  return (
    <main className="">
      <Hero />
      <Stats />
      <Features />
      <ProductSection />
      <TestimonialCard />
      <ContactSection />
      <Footer/>
    </main>
  );
}
