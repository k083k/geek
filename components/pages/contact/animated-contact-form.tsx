"use client";
import FormSection from "./form-section";
import Image from 'next/image';
import { ContactUsBg } from '../../../public/assets/img';
import { motion } from 'framer-motion';
import { slideIn } from '../../../core/utils/motion';
import { withAnimate } from '../../hoc';
import { IoLocationSharp } from 'react-icons/io5'
import { ImPhone } from 'react-icons/im';


const AnimatedContactFormSection = () => {

  return (
    <div className="min-h-[calc(100vh-3.5rem)] w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="h-[50vh] w-full -z-10 relative">
        <Image priority src={ContactUsBg} alt="contact-us" fill className="object-cover " />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
      </div>
      <div className="max-w-[100rem]">
        <div className="z-10 -mt-36">
          <div className="flex flex-col-reverse gap-10 md:grid md:grid-cols-2 padding-x padding-y">
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="w-full px-6 text-white bg-black rounded-lg shadow-lg sm:px-12 padding-y">
              <h1>Get in touch</h1>
              <div className="mt-5" />
              <p>Use our contact form for all information requests or contact us directly using the contact information below.</p>
              <div className="mt-5" />
              <p>Talking is free, and who knows what we might achieve together</p>
              <div className="w-full mt-4 border border-disruption" />
              <div className="mt-5" />
              <div className="flex items-start justify-start gap-5">
                <IoLocationSharp size={50} className='text-disruption' />
                <div>
                  <h6 className="font-bold">Our Office Locations</h6>

                  <p>5th floor, Advantage Place
                    Mayor Road
                    Ridge West, Accra</p>
                  <p>Sonnidom House, Mile 7, Achimota, Accra, GH</p>
                </div>
              </div>
              <div className="mt-5" />
              <div className="flex items-start justify-start gap-4">
                <ImPhone size={40} className='text-disruption' />
                <div>
                  <h6 className="font-bold">Phone (Landline)</h6>

                  <p>+447478930565</p>
                  <p></p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='w-full bg-white rounded-lg shadow-lg'>
              <h6 className="py-4 font-bold text-center font-mondwest">Ready to
                <span className=" text-inspiration"> reinvent the status quo</span> together?</h6>
              <FormSection />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAnimate(AnimatedContactFormSection);