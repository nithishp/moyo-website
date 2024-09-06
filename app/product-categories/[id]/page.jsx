"use client";
import { useState } from "react";
import { ProductData } from "@/data";
import ProductNotFound from "@/app/_components/ProductNotFound";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image"; // <-- Add this line

const ProductCategories = ({ params }) => {
  const products = ProductData.filter((item) => item.productType === params.id);

  if (!products || products.length === 0) {
    return <ProductNotFound />;
  }

  console.log(products);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            {products[0].category}
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Check out the vast range of MOYO {products[0].category} products.
          </p>
        </header>

        <div className="flex mt-10 flex-wrap gap-6 justify-center">
          {products.map((item) => (
            <Card key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <Link
                href={`/product-details/${item.id}`}
                className="block relative h-48 rounded overflow-hidden cursor-pointer"
              >
                <Image
                  height={500}
                  width={500}
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={item.img}
                />
              </Link>
              <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                  {item.category}
                </h3>
                <h2 className=" title-font text-lg font-medium">{item.name}</h2>
                <p className="mt-1">{item.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
