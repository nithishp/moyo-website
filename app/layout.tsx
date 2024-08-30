import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/mainNav";
import MainFooter from "@/components/mainFooter";
import { Toaster } from "sonner";
import Head from "next/head";
import Footer from './_components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOYO",
  description:
    "Check out Our MOYO store",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <MainNav />
        </div>

        <div className="min-h-screen mt-16">{children}</div>

        <div>
          <Footer/>
        </div>
      
      </body>
    </html>
  );
}
