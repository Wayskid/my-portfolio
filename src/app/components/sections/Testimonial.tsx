"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "./../../globals.css";
import { FaQuoteRight } from "react-icons/fa";
import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/app/firebase";

export default function Testimonial() {
  const [testimonies, setTestimonies] = useState<DocumentData[]>([
    {
      title: "",
      content: "",
      name: "",
      image: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getList() {
      setLoading(true);
      const docRef = collection(db, "Testimonials");
      const q = query(docRef);
      const querySnapshot = await getDocs(q);
      const arr: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
      setTestimonies([
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
        ...arr,
      ]);
      setLoading(false);
    }
    getList();
  }, []);

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
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
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
                  <p className="">{item.content}</p>
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
                      <p className="">{item.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
