'use client'
import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 z-50 w-screen h-screen right-full bg-insightful'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      />
      <motion.div className='fixed top-0 bottom-0 z-40 w-screen h-screen right-full bg-disruption'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />

      <motion.div className='fixed top-0 bottom-0 z-30 w-screen h-screen right-full bg-welcoming'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />

    </>
  )
}

export default TransitionEffect