"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { homeHeroIllustration } from "../../public/assets/img";
import CustomButton from "../utils/CustomButton";

export default function HomeHero() {
    const router = useRouter();

    return <section className="home-hero flex-center h-[668px] bg-center p-3">
      <div className="home-hero-text flex-1 flex-center flex-col">
        <h1 className="text-white text-[96px] max-[1023px]:text-[75px] max-[456px]:text-[60px] max-[280px]:text-[45px]">
          <span className="font-neuebit font-bold leading-none">
            The Next
          </span>
          <span className="font-normal leading-none ml-14">Rev¤lution</span>
          <span className="font-neuebit font-bold leading-5">
            in Software
          </span>
          <span className="font-normal ml-14">Engineering</span>
        </h1>
        <div className="home-hero-button-row flex-center">
          <CustomButton
            title="About Us"
            buttonType="button"
            handleClick={() => router.push("/about")}
            containerStyles="bg-insightful rounded-full hover:bg-inspiration w-40"
          ></CustomButton>
          <Link href={"/contact"} className="ml-4 text-white">
            Get in touch &#10230;
          </Link>
        </div>
      </div>
      <div className="home-hero-image flex-1 hidden md:block">
        <Image src={homeHeroIllustration} alt="Home hero image" />
      </div>
    </section>;
}