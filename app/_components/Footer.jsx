import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <Image
            src="/brand/moyo-logo-black.png"
            alt="Moyo logo"
            className="w-40 "
            width={100}
            height={70}
          />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          We try to provide you the great and greatest home products which
          everyone deserves.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Our Story{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Products{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Contact Us{" "}
            </a>
          </li>
        </ul>

      
        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="flex justify-center">
            <p className="text-xs text-gray-500">
              &copy; 2024. Leal Groups. All rights reserved.
            </p>

            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer