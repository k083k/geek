'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { withAnimate } from '../../hoc'
import { textVariant } from '@/core/utils/motion'
import { ourPeoples } from '@/core/shared/constants'
import { TeamsCard } from '../../cards'

const OurTeam = () => {

  return (

    <div className="text-white bg-gradient-to-tr from-pixel-black to-disruption padding-y hover:bg-gradient-to-br rounded-t-3xl">
      <div className="max-w-[100rem] mx-auto padding-x ">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={textVariant(0.1)}>
          <p className="text-2xl">Meet Our Team</p>
          <h1>Our Team</h1>
        </motion.div>
        <div className='w-full gap-4 space-y-5 padding-y md:columns-2 lg:columns-3 xlg:columns-4'>
          {
            ourPeoples.map((p, index) => (
              <TeamsCard key={p.info.name} Props={{ ...p }} index={index} />
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default withAnimate(OurTeam)