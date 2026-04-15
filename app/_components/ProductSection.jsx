"use client";
import Image from "next/image";
import { ProductData } from "@/data";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductSection = () => {
  return (
    <section
      style={{ backgroundColor: "#140F0A" }}
      className="py-24"
      id="products"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6"
        >
          <div>
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C41230",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              Full Range
            </span>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 300,
                color: "#FAF7F2",
                lineHeight: 1.1,
                marginTop: "0.75rem",
              }}
            >
              Our Products
            </h2>
          </div>
          <p
            style={{
              color: "#786E63",
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              maxWidth: "280px",
              lineHeight: 1.7,
              fontSize: "0.9rem",
            }}
            className="lg:text-right"
          >
            Premium home essentials, thoughtfully designed for every household.
          </p>
        </motion.div>

        <div
          style={{
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
          }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {ProductData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <Link
                href={`/product-details/${item.id}`}
                style={{
                  display: "block",
                  backgroundColor: "#140F0A",
                  textDecoration: "none",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1E1915")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#140F0A")
                }
                className="group"
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    backgroundColor: "#1A1510",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    style={{ padding: "2rem" }}
                  />
                </div>
                <div
                  style={{
                    padding: "1rem",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#786E63",
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.category}
                  </p>
                  <h3
                    style={{
                      color: "#FAF7F2",
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                    }}
                    className="group-hover:text-[#C41230] transition-colors duration-200"
                  >
                    {item.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
