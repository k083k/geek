"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import {
  HeroAboutFour,
  HeroAboutOne,
  HeroAboutThree,
  ThumbsUpWelcoming,
} from "@/public/assets/img";
import { ProgrammingEffect } from "@/public/assets/json";
import { textVariant } from '@/core/utils/motion';
import { motion } from 'framer-motion';
import withAnimate from '../../hoc/WithAnimate';

const Hero = () => {
  return (
    <div className='padding-x w-[100%] min-h-[calc(99vh-3.5rem)] bg-white flex justify-center items-center '>
      <div className="max-w-[100rem] mx-auto justify-center items-center flex flex-col md:grid grid-cols-2">
        <motion.div variants={textVariant(0.1)} className='w-[100%] flex justify-center items-center relative'>
          <Lottie onComplete={() => {}} animationData={ProgrammingEffect} />
          <div className='top-0 left-0 flex-col hidden xl:flex xl:absolute'>
            {Array.from([1, 2, 3, 4]).map((i) => (
              <Image
                key={i}
                src={HeroAboutFour}
                alt='hero_one'
                width={50}
                height={50}
                className='m-0'
                priority
              />
            ))}
          </div>
        </motion.div>
        <div className='w-[100%] flex flex-col gap-3 relative mt-10'>
          <motion.div variants={textVariant(0.1)} className='w-[100%] z-10 inset-0'>
            <h1 className={``}>
              We Are Turntabl,
              <br />
              <span className=' text-insightful'>
                {" "}
                Providing Innovative Software
              </span>
              <br />
              Engineering Solutions To Businesses All Over the World <span className="animate-pulse"><Image src={ThumbsUpWelcoming} alt={"thumbsup_welcoming"} width={150} height={150} /></span>
            </h1>
          </motion.div>

          <div
            className='absolute right-0 
          bottom-5 md:bottom-[5rem]'
          >
            <Image
              src={HeroAboutOne}
              alt='hero_one'
              className='h-[15rem] w-[15rem] md:h-[26rem] md:w-[26rem]'
              priority
            />
          </div>
          <div className='-bottom-[5rem] -right-[2rem] absolute md:-bottom-[2rem] md:-right-[4rem]'>
            <Image
              src={HeroAboutThree}
              alt='hero_one'
              className='h-[15rem] w-[15rem] md:h-[27rem] md:w-[26rem]'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAnimate(Hero);
