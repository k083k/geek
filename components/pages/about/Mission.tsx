'use client'
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '@/core/utils/motion';
import withAnimate from '../../hoc/WithAnimate';
import { ImageSlider } from '../../utils';
import { about_slider } from '@/core/shared/constants';

const Mission = () => {
    return (
        <div
            className="max-w-[100rem] items-start mx-auto flex flex-col md:grid md:grid-cols-2 padding-x padding-y gap-10 mb-4">
            <div>
                <motion.div variants={textVariant(0.1)}>
                    <p className="text-2xl">Company&apos;s</p>
                    <h1>Mission</h1>
                </motion.div>
                <motion.div variants={fadeIn("up", "", 0.1, 1)}>
                    <p>
                        Our mission is to make a difference in the world of digital technology, specifically in Ghana and
                        the emerging skills of a digitally enabled workforce. We are building an organization that
                        offers high-quality learning, applied skills, and fulfilling careers. Our ultimate goal is to
                        create a sustainable enterprise that garners admiration and respect from people.</p>
                </motion.div>
            </div>
            <div className={'bg-white h-[25rem] w-[100%] rounded-2xl'}>
                <ImageSlider images={about_slider} />
            </div>
        </div>
    )
}

export default withAnimate(Mission);