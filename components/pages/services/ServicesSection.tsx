"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/core/utils/motion";
import { ModalWrapper } from "../../utils";
import {
  ServiceSection,
  sectionContent,
} from "@/core/shared/constants/services";

const ServicesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");

  const openModal = (section: string) => {
    setIsOpen(true);
    setContent(sectionContent[section as keyof ServiceSection]);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="container py-8 mx-auto">
        <div className="mb-4 text-center">
          <h1 className="text-5xl font-bold font-neuebit text-shadow text-pixel-black">
            OUR SERVICES
          </h1>
        </div>

        <div className="p-6 mb-2 bg-transparent serv-sec">
          <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("center", "tween", 0, 0.8)}
              >
                <Image
                  className="rounded-xl"
                  src="/assets/img/tt2.jpeg"
                  width={650}
                  height={650}
                  priority
                  alt="Two Developers Working"
                />
              </motion.div>
            </div>
            <div>
              <h3 className="text-5xl font-bold font-neuebit text-pixel-black">
                Development
              </h3>
              <p className="text-pixel-black">
                At Turntabl, we specialize in delivering cutting-edge software
                solutions tailored to meet the unique needs and challenges of
                modern businesses. With our deep expertise, agile methodologies,
                and customer-centric approach, we empower organizations to
                harness the power of technology and drive innovation through our
                comprehensive Software Development services.
                <br />
                We understand that every business has distinct requirements and
                goals. That&apos;s why our Software Development services are
                highly customizable to ensure a perfect fit for your
                organization. Our personnel are adaptable and resourceful. We
                chew through JIRAs just as easily as we develop your UX or next
                generation micro-service layer.
              </p>
              <br />
              <p
                className="py-2 text-xl font-extrabold cursor-pointer learn-more-link font-mondwest text-dark-grey"
                onClick={() => openModal("development")}
              >
                Learn More <span className="arrow">&#8594;</span>
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full my-4 border-gray-300" />

        <div className="p-6 mb-2 bg-transparent serv-sec">
          <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-5xl font-bold font-neuebit text-pixel-black">
                Project Management
              </h3>
              <p className="text-pixel-black">
                In today&apos;s dynamic business environment, effective project
                management plays a pivotal role in driving organizational
                success. At Turntabl, we understand the complexities and
                challenges associated with managing projects.
                <br />
                We cooperate with you throughout the project life-cycle in
                small, committed teams. From inception and definition to
                delivery, production and maintenance - our style is clean lines,
                efficient code, empowered users. With our expertise, proven
                methodologies, and dedicated professionals, we empower
                businesses to streamline their projects, achieve objectives, and
                exceed stakeholders&apos; expectations.
              </p>
              <br />
              <p
                className="py-2 text-xl font-extrabold cursor-pointer learn-more-link font-mondwest text-dark-grey"
                onClick={() => openModal("projectManagement")}
              >
                Learn More <span className="arrow">&#8594;</span>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("center", "tween", 0, 0.8)}
              >
                <Image
                  className="rounded-xl"
                  src="/assets/img/tt11.jpeg"
                  width={650}
                  height={650}
                  priority
                  alt="Several Team members in a Meeting"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <hr className="w-full my-4 border-gray-300" />

        <div className="p-6 mb-2 bg-transparent">
          <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("center", "tween", 0, 0.8)}
              >
                <Image
                  className="rounded-xl"
                  src="/assets/img/tt1.jpeg"
                  width={650}
                  height={650}
                  priority
                  alt="Team Photo"
                />
              </motion.div>
            </div>
            <div>
              <h3 className="text-5xl font-bold font-neuebit text-pixel-black">
                Partnerships
              </h3>
              <p className="text-pixel-black">
                In today&apos;s fast-paced and interconnected business
                landscape, successful companies understand the power of
                collaboration and strategic partnerships. At Turntabl, we have
                reimagined the concept of partnership and developed a unique
                approach known as
                <strong> &ldquo;Partnership as a Service.&rdquo;</strong>
                <br />
                Our Partnership as a Service offering goes beyond the
                traditional vendor-client relationship, aiming to foster
                mutually beneficial and long-lasting collaborations that drive
                innovation, growth, and shared success. Partner with Turntabl
                today and design low-cost, high-quality technology ethically and
                sustainably.
              </p>
              <br />
              <p
                className="py-2 text-xl font-extrabold cursor-pointer learn-more-link font-mondwest text-dark-grey"
                onClick={() => openModal("partnership")}
              >
                Learn More <span className="arrow">&#8594;</span>
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full my-4 border-gray-300" />

        <div className="p-5 mb-2 bg-transparent serv-sec">
          <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-5xl font-bold font-neuebit text-pixel-black">
                Software Consultancy
              </h3>
              <p className="text-pixel-black">
                At Turntabl, we understand that businesses face unique
                challenges and require tailored solutions to thrive in
                today&apos;s dynamic digital landscape. That&apos;s why we offer
                comprehensive Software Consultancy services designed to empower
                organizations and drive their success.
                <br />
                We take a client-centric approach, carefully listening to your
                needs, challenges, and goals. By gaining a thorough
                understanding of your business, we can provide strategic
                guidance and industry-leading customized solutions that align
                with your objectives.
              </p>
              <br />
              <p
                className="py-2 text-xl font-extrabold cursor-pointer learn-more-link font-mondwest text-dark-grey"
                onClick={() => openModal("softwareConsultancy")}
              >
                Learn More <span className="arrow">&#8594;</span>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("center", "tween", 0, 0.8)}
              >
                <Image
                  className="rounded-xl"
                  src="/assets/img/tt4.jpeg"
                  width={650}
                  height={650}
                  priority
                  alt="Pair Reveiwing code together"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <ModalWrapper
        isOpen={isOpen}
        closeModal={closeModal}
        containerStyles=" max-w-xl"
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </ModalWrapper>
    </>
  );
};

export default ServicesSection;
