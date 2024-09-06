"use client";
import { useState } from "react";
import Image from "next/image";
import { ProductData } from "@/data";
import ProductNotFound from "@/app/_components/ProductNotFound";
import { Lens } from "@/components/ui/lens";

const ProductDetails = ({ params }) => {
  const [hovering, setHovering] = useState(false);
  const product = ProductData.find((item) => item.id === parseInt(params.id));

  // Use useState hook outside conditional block
  const [selectedVariant, setSelectedVariant] = useState(
    product ? product.variants[0] : null
  );

  if (!product) {
    return <ProductNotFound />;
  }

  const handleVariantChange = (e) => {
    const variantId = parseInt(e.target.value);
    const variant = product.variants.find((v) => v.id === variantId);
    setSelectedVariant(variant);
  };

  return (
    <div>
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Lens hovering={hovering} setHovering={setHovering} zoomFactor={2}>
            
            <Image
              height={500}
              width={500}
              alt="product"
              className="lg:w-[23vw] w-full lg:h-auto h-[50vh] object-cover object-center rounded"
              src={selectedVariant?.image || product.img}
            />
            </Lens>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font tracking-widest">
                {product.category}
              </h2>
              <h1 className="text-3xl  text-rose-500 title-font font-semibold mb-1">
                {product.name}
              </h1>
              <p className="leading-relaxed">{product.description}</p>

              {/* Variant Selection */}
              <div className="flex mt-6 items-center pb-5 mb-5">
                <div className="flex items-center">
                  <span className="mr-3 text-rose-500 font-medium">
                    Variants
                  </span>
                  <div className="relative">
                    <select
                      className="rounded border appearance-none py-2 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 text-base pl-3 pr-10"
                      value={selectedVariant?.id || ""}
                      onChange={handleVariantChange}
                    >
                      {product.variants.map((variant) => (
                        <option key={variant.id} value={variant.id}>
                          {variant.variant}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Display selected variant attributes */}
              <div className="border-b mb-3">
                {product.attributes.map((item, i) => (
                  <div key={i} className="flex border-t  py-2">
                    <span className="text-rose-500 font-medium">
                      {item.name}
                    </span>
                    <span className="ml-auto">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex">
                <span className="title-font font-medium text-2xl">
                  {selectedVariant?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <h2 className="mb-8 text-4xl font-bold text-center">
              What makes this Best
            </h2>
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {product.advantages.map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-rose-600"
                  >
                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
