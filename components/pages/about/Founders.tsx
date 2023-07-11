"use client"
import { motion } from 'framer-motion'
import withAnimate from '../../hoc/WithAnimate';
import { textVariant } from '@/core/utils/motion';
import { founders } from '@/core/shared/constants';
import { FoundersCard } from '../../cards';

const Founders = () => {
  return (
    <div className="max-w-[100rem] mx-auto padding-x padding-y bg-center">
      <motion.div variants={textVariant(0.1)}>
        <p className="text-2xl">Executives</p>
        <h1>Founders</h1>
      </motion.div>
      <div className='hidden sm:flex h-[10rem] mt-2 w-full bg-white rounded-lg  items-center justify-center shadow-2xl'>
        <div className="w-[90%] h-[90%]" style={{ backgroundImage: 'url("https://www.webdew.com/hubfs/dotted-bg.svg")', backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: 'contain' }} />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-10 lg:gap-20 sm:-mt-24 md:flex-row lg:padding-x">
        {founders.map((founder, index) => (
          <FoundersCard key={founder.info.name} index={index} Props={{ info: founder.info, image: founder.image }} />
        ))}
      </div>
    </div>
  );
}

export default withAnimate(Founders)