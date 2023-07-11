'use client';

import React from "react";
import Lottie from "lottie-react";
import { ServiceEffect } from "@/public/assets/json";

const Hero = () => {
    return (
        <div className="min-h-[calc(99vh-3.5rem)] flex flex-col justify-center items-center p-12 text-4xl font-bold text-center bg-black bg-cover">
            <div className="grid items-center grid-cols-1 gap-4 py-5 md:grid-cols-2">
                <div>
                    <h2 className="px-5 font-bold text-white font-neuebit text-7xl text-start" style={{ lineHeight: "0.7" }}>
                        All the <span className="text-disruption">Services</span> <br /> you need
                    </h2>
                    <p className="px-5 text-sm font-light text-white xl:text-2xl text-start">
                        <br />
                        From strategic consulting to cutting-edge technology solutions, we have you covered. Whether you need
                        assistance with software development, IT infrastructure, project management, digital marketing, or any other
                        aspect of your business, we have the capabilities to provide it. With our diverse expertise and commitment to
                        excellence, we strive to be a one-stop destination for all your business requirements.
                    </p>
                </div>
                <div className="p-2">
                    <div id="animation-container">
                        <Lottie onComplete={() => {}} animationData={ServiceEffect} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
