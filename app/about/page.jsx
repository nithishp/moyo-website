'use client'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const VerticalSlideFeatures = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-6 bg-white px-4 py-12 md:flex-row md:gap-12 md:px-8">
      <AnimatePresence mode="wait">
        {FEATURES.map((tab, index) => {
          return selected === index ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              key={index}
              className="w-full"
            >
              <tab.Feature />
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
      <Tabs selected={selected} setSelected={setSelected} />
    </section>
  );
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="w-full shrink-0 overflow-scroll md:w-fit">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

const Tab = ({ selected, title, setSelected, tabNum }) => {
  return (
    <div className="group relative w-full md:w-fit">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full border-l-[6px] border-slate-200 p-4 transition-colors group-hover:border-slate-300 md:flex-col md:border-l-8 md:p-6"
      >
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-xl font-bold transition-colors md:text-2xl ${
            selected
              ? "text-violet-500"
              : "text-slate-400 group-hover:text-slate-500"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-violet-500 md:w-2"
        />
      )}
    </div>
  );
};

export default VerticalSlideFeatures;

const FEATURES = [
  {
    title: "About Us",
    Feature: () => (
      <ExampleFeature
        text="About Us"
        content="MOYO was founded with a simple idea: to make daily household tasks easier and more efficient with quality products that people can trust. From aluminum foil to tissue boxes, garbage bags, toilet rolls, kitchen towels, and more, our diverse range of home essentials is designed to serve the practical needs of every home."
      />
    ),
  },
  {
    title: "Vision",
    Feature: () => (
      <ExampleFeature
        text="Vision"
        content="At MOYO, our vision is to become a household name synonymous with quality, sustainability, and convenience. We strive to provide innovative and eco-friendly solutions for everyday living, enhancing the comfort and well-being of homes worldwide. Our goal is to lead the market in producing premium home essentials that prioritize both functionality and environmental responsibility."
      />
    ),
  },
  {
    title: "Mission",
    Feature: () => (
      <ExampleFeature
        text="Mission"
        content="Our mission at MOYO is to design and deliver high-quality, affordable home products that make everyday life easier and cleaner. We are committed to:

Sustainability: Using environmentally friendly materials and production processes.
Quality: Ensuring each product exceeds customer expectations for reliability and durability.
Innovation: Continuously improving and innovating our product range to meet the changing needs of modern households.
Customer Satisfaction: Providing exceptional service and value through every interaction, helping people create better home environments."
      />
    ),
  },
];

const ExampleFeature = ({ text,content }) => (
  <div className="w-full">
    <div className="relative h-[500px] w-full rounded-xl bg-slate-800 shadow-xl px-6 py-4 overflow-scroll">
        <h1 className="text-3xl font-bold mb-3 text-white">{text}</h1>
        <p className="text-white text-xl font-medium">{content}</p>
    </div>
  </div>
);
