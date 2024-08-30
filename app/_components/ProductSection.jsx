'use client'
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import {ProductData} from '@/data'
import Link from "next/link";

const Productbasic = () => {

   
 
  return (
    <div className="w-full">
      <section className=" body-font" id="products">
        <div className="container px-10 py-24 mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracki text-center sm:text-5xl ">
              Take a Look at our products
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
              We try to bring you the best quality home products.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {ProductData.map((item) => (
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
                  <h2 className=" title-font text-lg font-medium">
                    {item.name}
                  </h2>
                  <p className="mt-1">{item.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productbasic;
