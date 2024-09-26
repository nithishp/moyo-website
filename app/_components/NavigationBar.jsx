'use client'
import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export const NavigationBar = ({ children }) => {
  return (
    <div className="bg-neutral-950">
      <RoundedDrawerNav
        links={[
          {
            title: "About Us",
            href: "/about",
          },
          {
            title: "Home",
            href: "/home",
            sublinks: [
              { title: "Facial Tissue Box", href: "#" },
              { title: "Napkin Tissues", href: "#" },
              { title: "Napkin", href: "#" },
            ],
          },
          {
            title: "Hygiene",
            href: "/hygiene",
            sublinks: [
              { title: "Garbage Bag", href: "#" },
              { title: "Napkin Disposal Bag", href: "#" },
            ],
          },
          {
            title: "Kitchen",
            href: "/kitchen",
            sublinks: [
              { title: "Aluminium Foil", href: "#" },
              { title: "Kitchen Towel", href: "#" },
            ],
          },
          {
            title: "Institutions",
            href: "/institutions",
            sublinks: [
              { title: "Jumbo Toilet Roll", href: "#" },
              { title: "Printed Tissue Napkins", href: "#" },
              { title: "V-fold Tissues", href: "#" },
            ],
          },
          {
            title: "Contact Us",
            href: "/contact",
            sublinks: [
              { title: "Customer Enquiry", href: "#" },
              { title: "Business Enquiry", href: "#" },
            ],
          },
        ]}
        navBackground="bg-black"
        bodyBackground="bg-white"
      >
        <div className="flex flex-col items-center justify-center px-12 py-32">
          {children}
        </div>
      </RoundedDrawerNav>
    </div>
  );
};

const RoundedDrawerNav = ({
  children,
  navBackground,
  bodyBackground,
  links,
}) => {
  const [hovered, setHovered] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const activeSublinks = useMemo(() => {
    if (!hovered) return [];
    const link = links.find((l) => l.title === hovered);

    return link ? link.sublinks : [];
  }, [hovered]);

  return (
    <>
      <nav onMouseLeave={() => setHovered(null)} className={`${navBackground} p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <Link href="/">
              <img
                src="/brand/moyo-logo-white.png"
                alt="Moyo LOGO"
                className="w-20 aspect-auto"
              />
            </Link>
            <DesktopLinks
              links={links}
              setHovered={setHovered}
              hovered={hovered}
              activeSublinks={activeSublinks}
            />
          </div>

          <button
            onClick={() => setMobileNavOpen((pv) => !pv)}
            className="mt-0.5 block text-2xl text-neutral-50 md:hidden"
          >
            <FiMenu />
          </button>
        </div>
        <MobileLinks links={links} open={mobileNavOpen} />
      </nav>
      <motion.main layout className={`bg-blue-600 px-2 pb-2`}>
        <div className={`${bodyBackground} rounded-3xl`}>{children}</div>
      </motion.main>
    </>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-neutral-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const DesktopLinks = ({ links, setHovered, hovered, activeSublinks }) => {
  return (
    <div className="ml-9 mt-0.5 hidden md:block">
      <div className="flex gap-6">
        {links.map((l) => (
          <a
            href={l.sublinks?.length ? undefined : l.href} // Navigate if no sublinks
            key={l.title}
            onMouseEnter={() => l.sublinks?.length && setHovered(l.title)} // Only set hover if there are sublinks
            className="cursor-pointer text-neutral-50 transition-colors hover:text-neutral-400"
          >
            {l.title}
          </a>
        ))}
      </div>
      <AnimatePresence mode="popLayout">
        {hovered && activeSublinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4 py-6"
          >
            {activeSublinks.map((l) => (
              <a
                className="block text-2xl font-semibold text-neutral-50 transition-colors hover:text-neutral-400"
                href={l.href}
                key={l.title}
              >
                {l.title}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileLinks = ({ links, open }) => {
  return (
    <AnimatePresence mode="popLayout">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-2 gap-6 py-6 md:hidden"
        >
          {links.map((l) => (
            <div key={l.title} className="space-y-1.5">
              <a
                href={l.sublinks?.length ? undefined : l.href} // Navigate if no sublinks
                className="text-md block font-semibold text-neutral-50"
              >
                {l.title}
              </a>
              {l.sublinks?.map((sl) => (
                <a
                  className="text-md block text-neutral-300"
                  href={sl.href}
                  key={sl.title}
                >
                  {sl.title}
                </a>
              ))}
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TopLink = ({ children, setHovered, title }) => (
  <span
    onMouseEnter={() => setHovered(title)}
    className="cursor-pointer text-neutral-50 transition-colors hover:text-neutral-400"
  >
    {children}
  </span>
);
