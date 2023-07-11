import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { withAnimate } from '../hoc';
import { InfoProps, TeamsCardProps } from '../../core/shared/interface';
import { truncateString } from '../../core/utils/basicFunc';
import { fadeIn } from '../../core/utils/motion';
import { CustomButton, DisplayInfo } from '../utils';

const TeamsCard = ({ Props, index }: { Props: TeamsCardProps, index: number }) => {
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
      <motion.div
        variants={fadeIn("up", "teen", index * 0.5, 0.75)} key={Props.info.name}
        className="rounded-lg break-inside-avoid"
      >
        <div className={`lg:h-[${Props.image.height}] w-[${Props.image.width}] border-2 rounded-lg duration-200 hover:scale-105 shadow-2xl relative group ease-in-out`}>
          <div className="absolute top-0 left-0 hidden w-full h-full rounded-lg bg-black/60 lg:group-hover:block " />
          <Image src={Props.image.url} alt={Props.info.name} height={Props.image.height} priority width={Props.image.width} className={' object-cover rounded-lg rounded-b-none lg:rounded-lg'} />
          <CustomButton containerStyles='py-2 bg-inspiration hidden lg:group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-200 ease-in-out' title="View Bio" textStyles=' font-bold text-software-grey hover:text-white' handleClick={() => openModal(Props.info)} />
          <div className="w-full rounded-b-lg padding-y padding-x lg:hidden bg-pixel-black">
            <h1 className="text-3xl ">{Props.info.name}</h1>
            <p>{Props.info.position}</p>
            <div className="w-full mt-4 border-[0.5px] border-disruption" />
            <div className="mt-5 " />
            <p>{truncateString(Props.info.content, 100)}</p>
            <div className="mt-5 " />
            <CustomButton containerStyles='py-2 bg-disruption   hover:scale-105 duration-200 ease-in-out' title="View Bio" textStyles=' font-bold text-pixel-black' handleClick={() => openModal(Props.info)} />
          </div>
        </div>
      </motion.div>
      <DisplayInfo isOpen={isOpen} closeModal={closeModal} info={selected} />
    </>
  )
}

export default withAnimate(TeamsCard)