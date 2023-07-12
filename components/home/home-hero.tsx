"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { homeHeroIllustration } from "../../public/assets/img";
import CustomButton from "../utils/CustomButton";
import { withAnimate } from '../hoc';
import { motion } from 'framer-motion'
import { scale } from '../../core/utils/motion';

const HomeHero = () => {
  const router = useRouter();

  return (<section className="home-hero flex-center h-[95vh] bg-center p-3">
    <motion.div variants={scale()} className="flex-col flex-1 home-hero-text flex-center">
      <h1 className="text-white text-[96px] max-[1023px]:text-[75px] max-[456px]:text-[60px] max-[280px]:text-[45px]">
        <span className="font-bold leading-none font-neuebit">
          The Next
        </span>
        <span className="font-normal leading-none ml-14">Rev¤lution</span>
        <span className="font-bold leading-5 font-neuebit">
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
    </motion.div>
    <div className="flex-1 hidden home-hero-image md:block">
      <Image src={homeHeroIllustration} alt="Home hero image" />
    </div>
  </section>);

}

export default withAnimate(HomeHero);