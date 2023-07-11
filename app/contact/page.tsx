import AnimatedContactFormSection from "@/components/pages/contact/animated-contact-form";
import AnimatePresenceWrapper from "@/components/utils/AnimatePresenceWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "Turntabl Website",
  title: "Turntabl Contact Page",
  description:
    "Contact Turntabl to help realize your organizations Technical needs",
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
    "Contact",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#efefef" },
  ],
};

export default function Contact() {
  return (
    <>
      <AnimatePresenceWrapper>
        <AnimatedContactFormSection />
      </AnimatePresenceWrapper>
    </>
  );
}
