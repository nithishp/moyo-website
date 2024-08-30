import React from 'react'

const Hero = () => {
  return (
    <section className="">
      <div className="max-w-7xl flex flex-col justify-center p-1 md:px-10 mx-auto sm:pt-10 lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left leading-snug">
          <h1 className="text-5xl font-bold leadi sm:text-6xl leading-snug">
            When it's
            <span className="text-rose-600 leading-snug"> MOYO </span>
            then it's Quality{" "}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 leading-snug">
            Quality Products for a Cleaner, Safer Home.
          </p>{" "}
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link href="/inators">
              <Button className="">Get to Know Us</Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
          <Image
            src="/products/MOYO-PINK.png"
            alt=""
            height={500}
            width={500}
            className="rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero