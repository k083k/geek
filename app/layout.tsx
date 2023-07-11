import { Footer, Navbar } from "../components/layout";
import "../styles/globals.css";
import localFont from "next/font/local";
import { Work_Sans } from "next/font/google";
import React from "react";

const neuebit = localFont({
  src: [
    {
      path: "../public/assets/fonts/PPNeueBit-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/PPNeueBit-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neuebit",
});

const mondwest = localFont({
  src: [
    {
      path: "../public/assets/fonts/PPMondwest-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/PPMondwest-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mondwest",
});

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Turntabl",
  description: "Software Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${neuebit.variable} ${mondwest.variable} ${workSans.className} min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
