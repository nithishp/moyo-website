'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Features = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  const HomeImages = [
    "/products/TISSUE-BOX-RED.png",
    "/products/TISSUE-BOX-BLUE.png",
    "/products/TISSUE-BOX-WHITE.png",
    
  ];

  const KitchenImages = [
    "/products/ALUMINIUM-FOIL.png",
    
  ];

  const HygieneImages = [
   
    "/products/DISPOSAL-BAG.png",
  ];

  const [currentHomeIndex, setCurrentHomeIndex] = useState(0);
  const [currentKitchenIndex, setCurrentKitchenIndex] = useState(0);
  const [currentHygieneIndex, setCurrentHygieneIndex] = useState(0);

  useEffect(() => {
    const homeInterval = setInterval(() => {
      setCurrentHomeIndex((prevIndex) => (prevIndex + 1) % HomeImages.length);
    }, 3000);
    return () => clearInterval(homeInterval);
  }, []);

  useEffect(() => {
    const kitchenInterval = setInterval(() => {
      setCurrentKitchenIndex(
        (prevIndex) => (prevIndex + 1) % KitchenImages.length
      );
    }, 3000);
    return () => clearInterval(kitchenInterval);
  }, []);

  useEffect(() => {
    const hygieneInterval = setInterval(() => {
      setCurrentHygieneIndex(
        (prevIndex) => (prevIndex + 1) % HygieneImages.length
      );
    }, 3000);
    return () => clearInterval(hygieneInterval);
  }, []);

  return (
    <div>
      <section className="" id="features">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          {/* HEADING */}
          <div>
            <h2 className="text-3xl font-bold tracki text-center sm:text-5xl ">
              Take a Look at our products
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
              We try to bring you the best quality home products.
            </p>
          </div>

          {/* FEATURE 1: Tissue Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:gap-8 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                Tissue Box
              </h3>
              <p className="mt-3 text-lg ">
                MOYO’s tissue boxes offer soft and strong tissues for daily use,
                perfect for sensitive skin, quick clean-ups, and household
                needs.
              </p>
              {/* Feature Description */}
              <div className="mt-12 space-y-12">
                {[
                  {
                    title: "Soft and Absorbent Tissues",
                    description:
                      "Experience ultra-soft tissues that are gentle on the skin while offering superior absorbency for quick cleanup.",
                  },
                  {
                    title: "Elegant Box Design",
                    description:
                      "Stylish, compact box design that complements any room décor and is easy to place anywhere.",
                  },
                  {
                    title: "Environmentally Friendly Materials",
                    description:
                      "Made from eco-friendly, recyclable materials to minimize environmental impact without compromising quality.",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={featureVariants}
                    className="flex"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-rose-600 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        {feature.title}
                      </h4>
                      <p className="mt-2 ">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHomeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={HomeImages[currentHomeIndex]}
                    alt={`MOYO product ${currentHomeIndex}`}
                    height={500}
                    width={800}
                    className="mx-auto rounded-lg object-top object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* FEATURE 2: Aluminum Foil */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:gap-8 lg:grid-cols-2 lg:items-center"
          >
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                Aluminum Foil
              </h3>
              <p className="mt-3 text-lg ">
                Versatile and Durable Kitchen Essential
              </p>
              <div className="mt-12 space-y-12">
                {[
                  {
                    title: "Heavy-Duty Strength",
                    description:
                      "Durable and tear-resistant foil for covering, wrapping, and storing food securely.",
                  },
                  {
                    title: "Heat and Cold Resistant",
                    description:
                      "Perfect for cooking, grilling, and freezing, withstanding both high heat and extreme cold without breaking down.",
                  },
                  {
                    title: "Multi-Purpose Use",
                    description:
                      "Ideal for food preservation, baking, and even household tasks like lining trays or cleaning pots.",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={featureVariants}
                    className="flex"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-rose-600 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        {feature.title}
                      </h4>
                      <p className="mt-2 ">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div
              aria-hidden="true"
              className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentKitchenIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={KitchenImages[currentKitchenIndex]}
                    alt={`MOYO product ${currentKitchenIndex}`}
                    height={500}
                    width={800}
                    className="mx-auto rounded-lg object-top object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* FEATURE 3: Disposable Bags */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:gap-8 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                Disposable Bags
              </h3>
              <p className="mt-3 text-lg ">
                Dispose of waste conveniently and hygienically with MOYO’s
                premium disposable bags.
              </p>
              <div className="mt-12 space-y-12">
                {[
                  {
                    title: "Leak-Proof Design",
                    description:
                      "Our disposable bags are designed to be leak-proof and tear-resistant for maximum cleanliness.",
                  },
                  {
                    title: "Odor Control",
                    description:
                      "Effectively seals in odors, keeping your space fresh and hygienic even when storing waste.",
                  },
                  {
                    title: "Easy to Use",
                    description:
                      "Quickly and easily seal bags to dispose of waste without any mess or hassle.",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={featureVariants}
                    className="flex"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-rose-600 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        {feature.title}
                      </h4>
                      <p className="mt-2 ">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHygieneIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={HygieneImages[currentHygieneIndex]}
                    alt={`MOYO product ${currentHygieneIndex}`}
                    height={500}
                    width={800}
                    className="mx-auto rounded-lg object-top object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;
