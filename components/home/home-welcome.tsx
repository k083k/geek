import { values } from "@/core/shared/constants";
import ValueCard from "@/components/home/value-card";
import Link from "next/link";

export default function HomeWelcome() {
  return (
    <section className="home-welcome bg-pixel-black items-center justify-center flex flex-col">
      <div className="container mx-auto padding-x py-20 flex-center max-[1016px]:flex-col flex-row gap-x-5">
        <div className="home-welcome-text text-white flex-1 self-start max-[1016px]:self-center max-[1016px]:mb-12">
          <div className="w-[410px] max-[600px]:w-[350px] mx-auto">
            <h1 className="text-[96px] max-[1023px]:text-[75px] max-[456px]:text-[60px] max-[280px]:text-[45px] font-neuebit leading-9">
              We&apos;re <span className="text-disruption">turntabl</span>
            </h1>
            <p className="my-5 mt-12">
              From our offices in Ghana and London, we build best-in-class
              software for the world&apos;s biggest enterprises.
            </p>
            <p className="my-5 text-disruption">
              Let&apos;s disrupt the status quo together...
            </p>
            <Link href={"/contact"} className="text-white">
              Get in touch with us &#10230;
            </Link>
          </div>
        </div>
        <div className="home-welcome-values md:flex-1 flex-none text-white max-[1016px]:self-center">
          <div className="grid max-[600px]:grid-cols-1 grid-cols-[auto_auto] grid-rows-2 w-[657px] max-[1137px]:w-[550px] max-[600px]:w-[300px] gap-5">
            {values.map((value) => ValueCard(value))}
          </div>
        </div>
      </div>
    </section>
  );
}
