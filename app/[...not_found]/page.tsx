'use client';

import React from 'react';
import Lottie from 'lottie-react';
import {Robot404} from '@/public/assets/json';
import {CustomButton} from '@/components/utils';
import {useRouter} from "next/navigation";
import AnimatePresenceWrapper from "@/components/utils/AnimatePresenceWrapper";

export default function Custom404() {
    const router = useRouter();

    return (
        <AnimatePresenceWrapper>
            <div className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center">
                <Lottie
                    className="min-h-[calc(90vh-3.5rem)] flex flex-col justify-center items-center"
                    animationData={Robot404}
                />
                <CustomButton
                    title="Go Back Home"
                    buttonType="button"
                    handleClick={() => router.push('/')}
                    containerStyles="min-h-[calc(10vh-3.5rem)] bg-insightful rounded-full hover:bg-inspiration"
                ></CustomButton>
            </div>
        </AnimatePresenceWrapper>
    );
}
