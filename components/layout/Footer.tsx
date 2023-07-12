'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { logo } from '../../public/assets/img'
import { footerLinks } from '@/core/shared/constants'
import { motion } from 'framer-motion'
import { slideIn } from '@/core/utils/motion'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { withAnimate } from '../hoc'


const Footer = () => {
  return (
    <footer className='flex flex-col text-white bg-pixel-black'>
      <div className="w-[100%] mx-auto">
        <div className='flex flex-wrap justify-between gap-5 py-10 max-md:flex-col'>
          {/* left content */}
          <div className='flex flex-col items-start justify-start gap-6'>
            <motion.div
              variants={slideIn("left", "spring", 0, 2)}
              className='w-[50%] h-10 padding-x bg-disruption flex items-center justify-center rounded-r-sm'
            >
              <Image src={logo} alt='logo' width={118} height={18} className='object-contain' />
            </motion.div>
            <div className='padding-x'>
              <p>Next Revolution in Software Engineering</p>
              <div className="flex flex-wrap justify-between gap-8 mt-10 text-disruption">
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2 icon" />
                    <a href="mailto:info@turntabl.io" className="font-bold">Email us<br />info@turntabl.io</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <FaPhone className="mr-2 icon fa-flip-horizontal" />
                    <a href="tel:+447478930565" className="font-bold">Call us<br />+447478930565</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right content */}
          <div className='flex flex-wrap flex-1 w-full gap-5 xsm:gap-20 padding-x md:justify-end max-md:mt-10'>
            {footerLinks.map((link) => (
              <div key={link.title} className='flex flex-col gap-2 min-w-[170px]'>
                <h3 className='font-bold'>{link.title}</h3>
                {link.title === 'Socials' ? (
                  <div className='flex gap-2'>
                    {link.links.map((item) => (
                      <a
                        href={item.url}
                        key={item.title}
                        className='hover:text-inspiration'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                ) : (
                  link.links.map((item) => (
                    <Link href={item.url} key={item.title} className='hover:text-inspiration'>
                      {item.title}
                    </Link>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
        {/* copyright */}
        <div className='flex flex-wrap items-center justify-between py-10 mt-10 border-t border-gray-100 padding-x'>
          <p>&copy;2023 Turntabl. All Rights Reserved</p>
          <div className='flex justify-center flex-1 gap-10 sm:justify-end max-sm:mt-4'>
            <Link href={"/privacy"} className='hover:text-inspiration'>
              Privacy Policy
            </Link>
            <Link href={"/terms"} className='hover:text-inspiration'>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default withAnimate(Footer)
