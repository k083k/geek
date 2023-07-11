import React from "react";
import Hero from "@/components/pages/services/Hero";
import ServicesSection from "@/components/pages/services/ServicesSection";
import AnimatePresenceWrapper from "@/components/utils/AnimatePresenceWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "Turntabl Website",
  title: "Turntabl Service Page",
  description:
    "All the Services you need From strategic consulting to cutting-edge technology solutions, we have you covered. Whether you need assistance with software development, IT infrastructure, project management, digital marketing, or any other aspect of your business, we have the capabilities to provide it. With our diverse expertise and commitment to excellence, we strive to be a one-stop destination for all your business requirements.",
  publisher: "Turntabl",
  authors: [{ name: "Turntabl" }],
  keywords: [
    "Turntabl",
    "Tech",
    "Solution",
    "Technology",
    "Ghana",
    "Finance",
    "Software",
    "Digital",
    "Africa",
    "Service",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#efefef" },
  ],
};

export default function Service() {
  return (
    <AnimatePresenceWrapper>
      <section className="h-full bg-white">
        <Hero />
        <ServicesSection />
      </section>
    </AnimatePresenceWrapper>
  );
}
