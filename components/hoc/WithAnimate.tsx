import { motion } from 'framer-motion';
import React, { ComponentType } from 'react';
import { staggerContainer } from '@/core/utils/motion';



const withAnimate = <P extends object>(Component: ComponentType<P>) => (
  class WithAnimate extends React.Component<P>{
    render() {
      return (
        <motion.div
          variants={staggerContainer()}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.25 }}
          className='relative w-full'
        >
          <Component {...this.props as P} />
        </motion.div>
      )
    }
  }
)

export default withAnimate;