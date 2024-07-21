"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "@/app/firebase";

export default function Portfolio() {
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
  useEffect(() => {
    async function getList() {
      const querySnapshot = await getDocs(collection(db, "Portfolio_List"));
      const arr: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
      setList([...arr, ...arr, ...arr, ...arr, ...arr, ...arr]);
    }
    getList();
  }, []);

  return (
    <div id="portfolio" className="grid gap-10 md:gap-14 py-10 md:py-16">
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 grid gap-5">
        <p className="w-[min(40rem,100%)] text-3xl md:text-4xl font-medium justify-self-center text-center">
          Explore My <span className="italic mr-3 text-primary">Portfolio</span>
        </p>
        <p className="w-[min(34rem,100%)] justify-self-center text-center">
          Discover my range of web development projects, from sleek websites to
          robust applications.
        </p>
        <div className="flex flex-col-reverse flex-wrap sm:flex-row-reverse mx-auto gap-7 mt-5">
          {list.length > 1 &&
            list?.map((item, index) => (
              <div
                key={index}
                className="grid gap-3 w-full sm:w-[calc((100%-28px)/2)] xl:w-[calc((100%-56px)/3)] shrink-0"
              >
                <Image
                  src={item.image}
                  alt=""
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
                <div className="grid gap-2">
                  <p className="text-2xl font-semibold">{item.title}</p>
                  <p className="text-sm">{item.description}</p>
                  <div className="flex gap-x-2 flex-wrap">
                    {item.tech_stack.map((lang: string, index: number) => (
                      <p
                        key={index}
                        className="uppercase text-sm font-semibold"
                      >
                        {lang}
                      </p>
                    ))}
                  </div>
                  <div className="flex gap-x-1 flex-wrap">
                    {item.tags.map((tag: string, index: number) => (
                      <p key={index} className="uppercase text-sm">
                        {tag}
                        {index + 1 < item.tags.length && " |"}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
