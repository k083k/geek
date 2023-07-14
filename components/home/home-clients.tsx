"use client";

import {
  fidelityLogo,
  finosLogo,
  msLogo,
  secondStaxLogo,
} from "../../public/assets/img";
import Image from "next/image";
import { Swiper } from "swiper";

// Import Swiper styles
import { clientReview } from "@/core/shared/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import { partners } from "@/core/shared/constants/home";

export default function HomeClients() {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    setSwiper(swiper);
  }, []);
  return (
    <section className="home-client bg-inspiration padding-x py-7" id="clients">
      <div className="h-[10rem] scrollbar-hide w-full flex items-center scroll-smooth overflow-x-scroll gap-20 ">
        <ul className="flex items-center gap-96 animate-slide hover:pause">
          {partners
            .concat(partners)
            .concat(partners)
            .map((image, index) => (
              <ul key={index} className="flex items-center gap-20 ">
                <li className="w-[10rem]">
                  <Image
                    src={image}
                    alt={image.src}
                    priority
                    draggable={false}
                  />
                </li>
              </ul>
            ))}
        </ul>
      </div>

      <div className="home-client-reviews py-20 max-[1024px]:py-10 flex-center max-[1024px]:flex-col container padding-x mx-auto gap-x-10 gap-y-5">
        <div className="home-client-reviews-text self-start max-[1024px]:text-center w-full">
          <h3 className="leading-none">What our clients say about us</h3>
          <p className="py-5 text-white">
            Here it straight from our clients. Real stories, real results.
          </p>
        </div>
        <div className="home-client-reviews-carousel max-w-[750px] w-full max-[1280px]:w-3/5 max-[1024px]:w-full">
          <div className="relative swiper">
            <div className="swiper-wrapper">
              {clientReview.map((review, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <p className="font-medium text-[32px] max-[1024px]:text-[25px]">
                      <q>{review.review}</q>
                    </p>
                    <div className="flex items-center py-5">
                      <Image priority
                        src={review.image}
                        width={52}
                        height={52}
                        className="inline-block p-2 bg-white rounded-full "
                        alt="Client image or default icon"
                      />
                      <div className="ml-3">
                        <p className="font-medium">{review.name}</p>
                        <p className="text-[12px] font-medium">
                          {review.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="absolute bottom-[10%] right-12 z-40">
              <FontAwesomeIcon
                icon={faCircleLeft}
                onClick={() => swiper!.slidePrev()}
                size="2xl"
                className="cursor-pointer hover:text-insightful"
              />
            </div>
            <div className="absolute bottom-[10%] right-2 z-40">
              <FontAwesomeIcon
                icon={faCircleRight}
                onClick={() => swiper!.slideNext()}
                size="2xl"
                className="cursor-pointer hover:text-insightful"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
