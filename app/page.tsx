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


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Stats />
      <Features />
      <ProductSection />
      <TestimonialCard />
      <ContactSection/>
    </main>
  );
}
