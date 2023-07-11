'use client'
import React from 'react'
import { DisplayInfoProps } from '@/core/shared/interface';
import Link from 'next/link';
import { ModalWrapper } from './';


const DisplayInfo = (Props: DisplayInfoProps) => {
  return (
    <ModalWrapper isOpen={Props.isOpen} closeModal={Props.closeModal}>
      <div className="w-full mt-2">
        <h1 className="text-3xl ">{Props.info?.name}</h1>
        <p>{Props.info?.position}</p>
        <div className="w-full mt-4 border-[0.5px] border-software-grey" />
        <div className="mt-5 " />
        <p>{Props.info?.content}</p>
        <div className="mt-4" />
        <div className="flex items-center justify-center gap-2 ">
          {
            Props.info?.links.map(link => (
              <Link
                href={link.url}
                key={link.url}
                className='hover:text-inspiration'
                target='_blank'
              >
                {link.icon}
              </Link>
            ))
          }
        </div>
      </div>
    </ModalWrapper>

  )
}

export default DisplayInfo