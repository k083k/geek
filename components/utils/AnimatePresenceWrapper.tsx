'use client'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import TransitionEffect from './TransitionEffect'
import { usePathname } from 'next/navigation'

const AnimatePresenceWrapper = ({ children }:
  { children: React.ReactNode }) => {

  const pathName = usePathname();

  return (
    <>
      <AnimatePresence mode='wait'>
        <main key={pathName} className="w-full">
          <TransitionEffect />
          {children}
        </main>
      </AnimatePresence>
    </>
  )
}

export default AnimatePresenceWrapper