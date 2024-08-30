import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div>
      <section className="">
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
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            {/* FEATURE 1  */}
            <div>
              <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                Tissue Box
              </h3>
              <p className="mt-3 text-lg ">
                MOYO’s tissue boxes offer soft and strong tissues for daily use,
                perfect for sensitive skin, quick clean-ups, and household
                needs.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
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
                      Hypoallergenic and gentle on skin
                    </h4>
                    <p className="mt-2 ">
                      Our tissues are made with soft fibers that are safe for
                      even the most sensitive skin. Whether for facial care or
                      cleaning up spills, they provide comfort without
                      irritation.
                    </p>
                  </div>
                </div>
                <div className="flex">
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
                      Made from sustainable, recyclable materials
                    </h4>
                    <p className="mt-2 ">
                      We care about the environment, which is why our tissue
                      boxes are made from recycled and eco-friendly materials
                      that are gentle on the planet.
                    </p>
                  </div>
                </div>
                <div className="flex">
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
                      Strong and absorbent
                    </h4>
                    <p className="mt-2 ">
                      Designed to handle everything from a runny nose to
                      unexpected messes, these tissues are durable yet soft,
                      making them perfect for all occasions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <Image
                height={500}
                width={800}
                src="/products/TISSUE-BOX-RED.png"
                alt=""
                className="mx-auto rounded-lg object-top object-contain"
              />
            </div>
          </div>
          {/* FEATURE 2  */}
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                  Aluminum Foil
                </h3>
                <p className="mt-3 text-lg ">
                  Our aluminum foil is durable and versatile, ideal for cooking,
                  storing, and preserving food at high temperatures.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
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
                        Heavy-duty and tear-resistant
                      </h4>
                      <p className="mt-2 ">
                        This aluminum foil is engineered to be extra thick and
                        durable, ensuring it won’t rip or tear during use, even
                        with tough kitchen tasks like grilling or wrapping food.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
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
                        Heatproof for cooking
                      </h4>
                      <p className="mt-2 ">
                        Whether you are baking in the oven or grilling on
                        high heat, our foil withstands high temperatures without
                        compromising its integrity, making it ideal for cooking,
                        reheating, and food preservation.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
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
                        Easy to mold and wrap
                      </h4>
                      <p className="mt-2 ">
                        With its flexible and malleable design, this foil easily
                        conforms to the shape of any food or container,
                        providing a secure wrap that keeps food fresh and
                        protected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <Image
                  height={500}
                  width={800}
                  src="/products/ALUMINIUM-FOIL.png"
                  alt=""
                  className="mx-auto rounded-lg  object-top object-contain"
                />
              </div>
            </div>
          </div>
          {/* FEATURE 3  */}
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                Ad vix debet docendi
              </h3>
              <p className="mt-3 text-lg ">
                Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
                etiam regione ut, persius eripuit quo id. Sit te euismod
                tacimates.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
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
                      Per ei quaeque sensibus
                    </h4>
                    <p className="mt-2 ">
                      Ex usu illum iudico molestie. Pro ne agam facete
                      mediocritatem, ridens labore facete mea ei. Pro id
                      apeirian dignissim.
                    </p>
                  </div>
                </div>
                <div className="flex">
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
                      Cu imperdiet posidonium sed
                    </h4>
                    <p className="mt-2 ">
                      Amet utinam aliquando ut mea, malis admodum ocurreret nec
                      et, elit tibique cu nec. Nec ex maluisset inciderint, ex
                      quis.
                    </p>
                  </div>
                </div>
                <div className="flex">
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
                      Nulla omittam sadipscing mel ne
                    </h4>
                    <p className="mt-2 ">
                      At sed possim oporteat probatus, justo graece ne nec,
                      minim commodo legimus ut vix. Ut eos iudico quando soleat,
                      nam modus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <Image
                height={500}
                width={800}
                src="/products/TISSUE-PACK.png"
                alt=""
                className="mx-auto rounded-lg object-top object-contain"
              />
            </div>
          </div>
          {/* FEATURE 4  */}
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                  Eam nibh gloriatur ex
                </h3>
                <p className="mt-3 text-lg ">
                  Per odio fabellas consulatu cu. Utroque detracto mel ea, quo
                  te latine theophrastus. Ea his tale nibh dissentias, mei
                  exerci tamquam euripidis cu.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
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
                        Cibo augue offendit has ad
                      </h4>
                      <p className="mt-2 ">
                        An per velit appellantur, ut utinam minimum nominavi
                        sit, odio nostro habemus ne nec. Ne sonet regione
                        contentiones est.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
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
                        At eum ferri luptatum lobortis
                      </h4>
                      <p className="mt-2 ">
                        Te per quidam maiorum ocurreret, etiam delicatissimi usu
                        ad. Ne has quod periculis. Te sit primis iisque
                        efficiantur.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
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
                        Dicunt verterem evertitur eu sea
                      </h4>
                      <p className="mt-2 ">
                        Audire principes rationibus eam an, autem nominavi
                        luptatum per te. Sumo fabulas vim eu, sonet saperet
                        eleifend ut vix.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <Image
                  height={500}
                  width={800}
                  src="/products/GARBAGE-BAG.png"
                  alt=""
                  className="mx-auto rounded-lg  object-top object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
