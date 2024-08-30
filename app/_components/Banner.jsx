import Link from 'next/link';
import React from 'react'
import { Button } from "@/components/ui/button";
const Banner = () => {
  return (
    <section className="py-6 bg-rose-600 text-gray-50 mt-14">
      <div className="container justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-around lg:flex lg:flex-row">
        <div className="flex flex-col space-y-2 text-center lg:text-left">
          <h2 className="text-3xl font-bold leading-none">
            Follow on github for more project updates
          </h2>
          <p className="px-4 text-lg lg:px-0">
            {" "}
            When I add something new, you will be the first to know{" "}
          </p>
        </div>
        <div className="flex flex-row items-center self-center justify-center flex-shrink-0 lg:justify-end">
          <Link href="https://github.com/siddhartha-up80">
            <Button
              variant="outline"
              size="lg"
              className="text-black dark:text-white"
            >
              Github
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner