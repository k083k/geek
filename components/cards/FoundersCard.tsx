import React, { useState } from 'react'
import { FoundersCardProps, InfoProps } from '@/core/shared/interface'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { fadeIn } from '@/core/utils/motion'
import Image from 'next/image'
import { CustomButton, DisplayInfo } from '../utils'
import { truncateString } from '@/core/utils/basicFunc'


const FoundersCard = ({ Props, index }: { Props: FoundersCardProps, index: number }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<InfoProps>()

  const closeModal = () => {
    setIsOpen(false);
  }

  const openModal = (info: InfoProps) => {
    setSelected(info);
    setIsOpen(true);
  }

  return (
    <>
      <motion.div variants={fadeIn("up", "teen", index * 0.1, 0.3)} className=" md:w-[50%] w-full">
        <Tilt
          transitionSpeed={8000}
          className="w-full p-4 border shadow-lg bg-disruption group rounded-2xl border-t-welcoming border-r-inspiration border-l-white border-b-disruption">
          {/* <div className="absolute top-0 -z-[5] -right-3 w-[101%] h-[103%] rounded-[2rem] bg-pixel-black rounded-br-3xl" /> */}
          <div className="w-full">
            <div className='relative w-full h-[400px]'>
              <div className='absolute top-0 left-0 z-10 hidden w-full h-full rounded-md group-hover:block bg-pixel-black/60' />
              {/* image */}
              <Image src={Props.image} alt="founders_img" fill className="object-cover rounded-md" priority />
              {/* content */}
              <div
                className=" group-hover:z-20 group-hover:h-[10rem] duration-300 ease-in-out hidden md:block absolute -z-20 h-[0rem] transform bg-white/80 bottom-0 left-0 w-full border rounded-b-md p-2">
                <div className="invisible group-hover:delay-200 group-hover:visible">
                  <p className="font-bold">{Props.info.name}</p>
                  <h1 className="text-3xl">{Props.info.position}</h1>
                  <p>{truncateString(Props.info.content, 50)}</p>
                  <CustomButton containerStyles={'bg-inspiration rounded-md mt-2 ease-in-out  py-2 hover:scale-105 hover:text-white text-software-grey font-bold'} title="Read More" handleClick={() => openModal(Props.info)} />
                </div>
              </div>
            </div>
            <div className=" md:hidden">
              <p className="font-bold">{Props.info.name}</p>
              <h1 className="text-3xl">{Props.info.position}</h1>
              <p>{truncateString(Props.info.content, 50)}</p>
              <CustomButton containerStyles={'bg-inspiration mt-2 ease-in-out  py-2 hover:scale-105 hover:text-white text-software-grey font-bold'} title="Read More" handleClick={() => openModal(Props.info)} />
            </div>
          </div>
        </Tilt>
      </motion.div>
      <DisplayInfo isOpen={isOpen} closeModal={closeModal} info={selected} />
    </>
  )
}

export default FoundersCard