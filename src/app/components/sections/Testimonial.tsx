"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "./../../globals.css";
import { FaQuoteRight } from "react-icons/fa";

export default function Testimonial() {
  const testimonies = [
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
    {
      test: "Exceptional to work with and brilliant at problem solving. Richard kept constant communication with me and always kept me updated. He delivered exactly what I wanted and even improved it! He is everything he advertises to be and more. Truly, I am grateful for his hard work and dedication to my project.",
      name: "James Tavita",
      job_title: "CEO of Glo-raise",
      image:
        "https://res.cloudinary.com/diiohnshc/image/upload/v1721583760/Ways%20Portfolio/1633122048850_a9vecx.jpg",
    },
  ];

  return (
    <div id="testimonial" className="py-10 md:py-16">
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 mb-10 grid gap-5 text-center justify-items-center">
        <p className="w-[min(40rem,100%)] text-3xl md:text-4xl font-medium justify-self-center text-center">
          What my Previous{" "}
          <span className="italic mr-3 text-primary">Clients</span> have to say
        </p>
        <p className="w-[min(34rem,100%)] justify-self-center text-center">
          Here are some testimonials from some clients I have previously worked
          with.
        </p>
      </div>
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 grid">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 2.3,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="mySwiper"
        >
          {testimonies.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid gap-4 bg-sub text-white p-5">
                <FaQuoteRight className="text-4xl" />
                <p className="font-semibold">{item.test}</p>
                <div className="flex gap-2 mr-auto items-center">
                  <Image
                    src={item.image}
                    alt={item.name + "_image"}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div className="text-sm shrink-0">
                    <p className="font-semibold">{item.name}</p>
                    <p className="">{item.job_title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
