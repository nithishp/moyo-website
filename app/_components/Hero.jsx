"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";

const images = [
  "/products/MOYO-PINK.png",
  "/products/ALUMINIUM-FOIL.png",
  "/products/TISSUE-PACK.png", // Add more image URLs here
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const words = ["Tissue", "Garbagr Bag", "Aluminium Foil", "Disposal Bag"];
  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Pulsating radial gradient background behind the image only */}
      <div className="absolute inset-0 bg-gradient-radial from-rose-500 to-transparent blur-3xl opacity-70 h-full w-full z-0 pointer-events-none lg:w-1/2 right-0" />

      <div className="max-w-7xl flex flex-col justify-center p-1 md:px-10 mx-auto sm:pt-10 lg:flex-row lg:justify-between items-center relative z-10">
        <motion.div
          className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left leading-snug"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={textVariants}
            className="text-5xl font-bold sm:text-6xl leading-snug"
          >
            When it&#39;s <br />
            <span className="text-rose-600 leading-snug">
              {" "}
              <FlipWords words={words} />{" "}
            </span>
            <br />
            then it&#39;s MOYO{" "}
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="mt-6 mb-8 text-lg sm:mb-12 leading-snug  "
          >
            Everyone deserves the best.
          </motion.p>
          <motion.div
            variants={textVariants}
            className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
          >
            <Button className="bg-rose-500 text-white">Get to Know Us</Button>
          </motion.div>
        </motion.div>

        {/* Image Carousel */}
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={images[currentIndex]}
                alt={`MOYO product ${currentIndex}`}
                height={500}
                width={500}
                className="rounded-sm"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
