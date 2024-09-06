import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { testimonials } from "@/data";

const Testimonialcard = () => {
  return (
    <div className="w-full">
      <section className="" id="testimonials">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">What Our Clients Say</h2>
              <p className="">
                Hear what our satisfied customers are saying about MOYO’s
                exceptional service and high-quality products.
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  {/* Card 1 */}
                  <Card className="p-6 rounded shadow-md">
                    <p>{testimonials[0].feedback}</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                        height={200}
                        width={200}
                        src={testimonials[0].image}
                        alt={testimonials[0].name}
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">
                          {testimonials[0].name}
                        </p>
                        <p className="text-sm">{testimonials[0].title}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Card 2 */}
                  <Card className="p-6 rounded shadow-md">
                    <p>{testimonials[1].feedback}</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                        height={200}
                        width={200}
                        src={testimonials[1].image}
                        alt={testimonials[1].name}
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">
                          {testimonials[1].name}
                        </p>
                        <p className="text-sm">{testimonials[1].title}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid content-center gap-4">
                  {/* Card 3 */}
                  <Card className="p-6 rounded shadow-md">
                    <p>{testimonials[2].feedback}</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                        height={200}
                        width={200}
                        src={testimonials[2].image}
                        alt={testimonials[2].name}
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">
                          {testimonials[2].name}
                        </p>
                        <p className="text-sm">{testimonials[2].title}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Card 4 */}
                  <Card className="p-6 rounded shadow-md">
                    <p>{testimonials[3].feedback}</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                        height={200}
                        width={200}
                        src={testimonials[3].image}
                        alt={testimonials[3].name}
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">
                          {testimonials[3].name}
                        </p>
                        <p className="text-sm">{testimonials[3].title}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonialcard;
