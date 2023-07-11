"use client"
import Image from 'next/image'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { HistoryCard } from '../../cards'
import { motion } from 'framer-motion';
import { textVariant } from '@/core/utils/motion';
import { histories } from '@/core/shared/constants';
import withAnimate from '../../hoc/WithAnimate';
import 'react-vertical-timeline-component/style.min.css'


const History = () => {
  return (
    <div className="relative min-h-[65vh] text-white bg-black rounded-3xl">
      <div className="max-w-[100rem] mx-auto">
        <div className="absolute top-0 left-0 w-full h-full ">
          <Image src={"https://www.webdew.com/hubfs/wdDotted-bg.svg"} fill alt="dotted-bg" className="z-[0.1px] object-cover opacity-5" />
        </div>
        <div className="w-[100%] padding-x padding-y z-[100]">
          <motion.div variants={textVariant(0.1)}>
            <p className="text-2xl">Company&apos;s History</p>
            <h1>History</h1>
          </motion.div>
          <div className="flex flex-col mt-20">
            <VerticalTimeline >
              {
                histories.map((history) => (
                  <HistoryCard key={history.title} {...history} />
                ))
              }
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAnimate(History);