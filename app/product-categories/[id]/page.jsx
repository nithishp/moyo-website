"use client";

import { use } from "react";
import { ProductData } from "@/data";
import ProductNotFound from "@/app/_components/ProductNotFound";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProductCategories = ({ params }) => {
  const { id } = use(params);
  const products = ProductData.filter((item) => item.productType === id);

  if (!products || products.length === 0) {
    return <ProductNotFound />;
  }

  const categoryName = products[0].category;

  return (
    <main
      style={{
        backgroundColor: "#FAF7F2",
        minHeight: "100vh",
        paddingTop: "7rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C41230",
              marginBottom: "0.75rem",
            }}
          >
            Collection
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 400,
              color: "#1A1510",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            {categoryName}
          </h1>

          <div
            style={{
              width: "48px",
              height: "2px",
              backgroundColor: "#C41230",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "1rem",
              color: "#786E63",
              marginTop: "1.25rem",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            Explore the full MOYO {categoryName} range — quality crafted for
            every home.
          </p>
        </motion.div>

        {/* Product grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1px",
            backgroundColor: "#E0D8CC",
          }}
        >
          {products.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={`/product-details/${item.id}`}
                style={{
                  display: "block",
                  backgroundColor: "#FAF7F2",
                  padding: "2rem",
                  transition: "background-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F2EDE4";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FAF7F2";
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    marginBottom: "1.5rem",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                {/* Meta */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#786E63",
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.category}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.35rem",
                    fontWeight: 500,
                    color: "#1A1510",
                    lineHeight: 1.3,
                  }}
                >
                  {item.name}
                </h2>

                {/* View link */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#C41230",
                  }}
                >
                  View details
                  <span style={{ fontSize: "1rem" }}>→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductCategories;
