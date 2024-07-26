"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  DocumentData,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/app/firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "./../../globals.css";
import Skeleton from "react-loading-skeleton";

export default function LandingPage() {
  const [list, setList] = useState<DocumentData[]>([
    {
      title: "",
      description: "",
      tags: [],
      tech_stack: [],
      demo_link: "",
      code_link: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getList() {
      setLoading(true);
      const docRef = collection(db, "Portfolio_List");
      const q = query(docRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const arr: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        arr.push({ image: doc.data().image, title: doc.data().title });
      });
      setList([...arr, ...arr, ...arr, ...arr, ...arr, ...arr, ...arr]);
      setLoading(false);
    }
    getList();
  }, []);

  return (
    <div className="py-10 md:py-16 ">
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 mb-16 grid gap-5 text-center justify-items-center">
        <p className="w-[min(53rem,100%)] text-4xl md:text-5xl font-semibold">
          <span className="text-primary">Richard</span> - Web Developer, Digital
          Creator, and Technology Enthusiast
        </p>
        <p className="w-[min(55rem,100%)]">
          Delivering high-quality digital products and exceptional user
          experiences. With expertise in web development, I help clients achieve
          their online goals and drive business success
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
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1.3,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {list.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.image}
                  alt={item.title + "_image"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
