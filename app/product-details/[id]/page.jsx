"use client";

import { useState, use } from "react";
import Image from "next/image";
import { ProductData } from "@/data";
import ProductNotFound from "@/app/_components/ProductNotFound";
import { motion } from "framer-motion";

const ProductDetails = ({ params }) => {
  const { id } = use(params);
  const product = ProductData.find((item) => item.id === parseInt(id));

  const [selectedVariant, setSelectedVariant] = useState(
    product ? product.variants[0] : null,
  );

  if (!product) {
    return <ProductNotFound />;
  }

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
        {/* Breadcrumb */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#786E63",
            marginBottom: "3rem",
          }}
        >
          Products / {product.category} /{" "}
          <span style={{ color: "#1A1510" }}>{product.name}</span>
        </p>

        {/* Main split layout */}
        <div
          style={{
            gap: "4rem",
            alignItems: "start",
          }}
          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left â€” Image with offset shadow */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative" }}
          >
            {/* Offset shadow box */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                transform: "translate(18px, 18px)",
                border: "1px solid #E0D8CC",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                backgroundColor: "#F2EDE4",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <Image
                src={selectedVariant?.image || product.img}
                alt={product.name}
                fill
                style={{ objectFit: "contain", padding: "1.25rem" }}
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </motion.div>

          {/* Right â€” Product details */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Category */}
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C41230",
                marginBottom: "0.75rem",
              }}
            >
              {product.category}
            </p>

            {/* Product name */}
            <h1
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "#1A1510",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              {product.name}
            </h1>

            {/* Divider */}
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "#C41230",
                marginBottom: "1.5rem",
              }}
            />

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1rem",
                color: "#786E63",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#786E63",
                  marginBottom: "0.75rem",
                }}
              >
                Variants
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {product.variants.map((variant) => {
                  const isSelected = selectedVariant?.id === variant.id;
                  return (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      style={{
                        padding: "0.4rem 1rem",
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.8rem",
                        border: isSelected
                          ? "1px solid #C41230"
                          : "1px solid #E0D8CC",
                        backgroundColor: isSelected ? "#C41230" : "transparent",
                        color: isSelected ? "#fff" : "#786E63",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {variant.variant}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Attributes */}
            <div
              style={{
                borderTop: "1px solid #E0D8CC",
                marginBottom: "2rem",
              }}
            >
              {product.attributes.map((attr, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid #E0D8CC",
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.875rem",
                  }}
                >
                  <span
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontSize: "0.7rem",
                      color: "#786E63",
                    }}
                  >
                    {attr.name}
                  </span>
                  <span style={{ color: "#1A1510" }}>{attr.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Advantages section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: "6rem" }}
        >
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
            Why Choose This
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "#1A1510",
              marginBottom: "2.5rem",
            }}
          >
            What makes this the best
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1px",
              backgroundColor: "#E0D8CC",
            }}
          >
            {product.advantages.map((adv, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FAF7F2",
                  padding: "1.75rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "#C41230",
                    fontSize: "1.2rem",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  â€”
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.9rem",
                    color: "#1A1510",
                    lineHeight: 1.6,
                  }}
                >
                  {adv}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ProductDetails;
