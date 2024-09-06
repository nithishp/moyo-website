"use client";

import * as React from "react";
import Link from "next/link";
import { Flower2, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
export default function MainNav() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/#products" },
    { title: "Reviews", path: "/#testimonials" },
  ];
  const components = [
    {
      title: "Tissue Box",
      href: "/product-details/1",
      description: "Experience ultra-soft tissues that are gentle on the skin ",
    },
    {
      title: "Aluminium Foil",
      href: "/product-details/2",
      description:
        "Durable and tear-resistant foil for covering, wrapping, and storing food ",
    },
    {
      title: "Grabage Bage",
      href: "/product-details/3",
      description:
        "Try MOYO garbage bags for home and office use.",
    },
    {
      title: "Disposal Bage",
      href: "/product-details/3",
      description:
        "Dispose of waste conveniently and hygienically with MOYO premium disposable bags",
    },
  ];
 

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <button
        className="pr-2 absolute md:hidden right-0 top-4"
        title="menu"
        onClick={() => setState(!state)}
      >
        <Menu className={`${state && "text-white"}`} />
      </button>
      <header
        className={`px-4 py-3 flex justify-start items-center ${
          state ? "bg-black" : "bg-white"
        }  sm:bg-white`}
      >
        {!state ? (
          <Link
            href="/"
            aria-label="Back to homepage"
            className=" flex md:justify-center justify-start items-center gap-3"
          >
            <Image
              src="/brand/moyo-logo-black.png"
              alt="Moyo logo"
              width={100}
              height={80}
            />
          </Link>
        ) : null}
        <div className="flex justify-between">
          <div className="flex ">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block ${
                state ? "max-sm:text-white" : "max-sm:text-black"
              } md:pb-0 md:mt-0 ${state ? "block" : "hidden"}`}
            >
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Our story</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        className={`grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ${
                          state ? "text-white bg-black" : "text-black bg-white"
                        }`}
                      >
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <Image
                                src="/brand/moyo-logo-black.png"
                                height={25}
                                width={25}
                                alt="Moyo logo"
                              />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                shadcn/ui
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Beautifully designed components that you can
                                copy and paste into your apps. Accessible.
                                Customizable. Open Source.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/docs" title="Introduction">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                        <ListItem
                          href="/docs/installation"
                          title="Installation"
                        >
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/typography"
                          title="Typography"
                        >
                          Styles for headings, paragraphs, lists...etc
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        className={`grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ${
                          state ? "text-white bg-black" : "text-black bg-white"
                        }`}
                      >
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/#contact" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Contact Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-md font-semibold text-amber-200 md:text-rose-500  leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";