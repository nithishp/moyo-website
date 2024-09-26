import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainNav from "@/components/mainNav";
import MainFooter from "@/components/mainFooter";
import { Toaster } from "sonner";
import Head from "next/head";
import Footer from './_components/Footer'
import {NavigationBar} from './_components/NavigationBar';  
import './global.css'

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
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <NavigationBar>
          <div className="min-h-screen w-screen mt-16">{children}</div>
        </NavigationBar>
        <div>
          
          <Toaster />
        </div>
      </body>
    </html>
  );
}
