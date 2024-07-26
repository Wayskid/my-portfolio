import Image from "next/image";
import React from "react";
import MyImage from "./../../assets/images/MyImage.png";
import { LuCode2, LuFrame } from "react-icons/lu";
import { TbCodeDots } from "react-icons/tb";
import { BiCertification, BiTrophy } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { SiPolymerproject } from "react-icons/si";

export default function Service() {
  return (
    <div id="service" className="grid  gap-10 md:gap-14 py-10 md:py-16">
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 mb-16 grid gap-5">
        <p className="w-[min(40rem,100%)] text-3xl md:text-4xl font-medium justify-self-center text-center">
          Comprehensive Modern{" "}
          <span className="italic mr-3 text-primary">Web Development</span>
          Services
        </p>
        <p className="w-[min(34rem,100%)] justify-self-center text-center">
          Leveraging the latest technologies and trends to craft robust,
          scalable, and secure web applications.
        </p>
        <div className="grid md:grid-cols-[0.6fr,1fr] mx-auto gap-5 *:rounded-sm mt-5">
          <div className="grid sm:grid-cols-2 border-2 border-sub p-5 items-center gap-3 md:grid-cols-1 md:row-span-2">
            <Image
              src={MyImage}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="max-w-[400px] object-contain justify-self-center w-full h-auto"
            />
            <div className="grid">
              <p className="text-2xl md:text-3xl font-medium mb-1">About me</p>
              <p className="text-sm">
                {`As a passionate and driven self-taught web developer, I've
                always been fascinated by the endless possibilities of the
                digital world. Through dedication and perseverance, I've
                cultivated a strong foundation in web development, leveraging
                online resources, coding challenges, and real-world projects to
                hone my skills.`}
              </p>
            </div>
          </div>
          <div className="grid border-2 border-sub p-6 grid-cols-2 justify-items-center *:grid *:justify-items-center gap-6">
            <div className="">
              <FiClock className="text-4xl text-primary" />
              <p className="text-xl">Work Hours</p>
              <p className="text-4xl font-semibold">21678</p>
            </div>
            <div className="">
              <SiPolymerproject className="text-4xl text-primary" />
              <p className="text-xl">Projects</p>
              <p className="text-4xl font-semibold">74</p>
            </div>
            <div className="">
              <BiCertification className="text-4xl text-primary" />
              <p className="text-xl">Certifications</p>
              <p className="text-4xl font-semibold">7</p>
            </div>
            <div className="">
              <BiTrophy className="text-4xl text-primary" />
              <p className="text-xl">Awards</p>
              <p className="text-4xl font-semibold">2</p>
            </div>
          </div>
          <div className="grid border-2 border-sub p-5 text-xl font-semibold place-items-center text-center">
            Web Development | Responsive Design | Front-end Development |
            Back-end Development | Website Maintenance | E-commerce Solutions |
            Website Redesign | Website Optimization | Custom Solutions
          </div>
        </div>
      </div>
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 grid gap-5">
        <p className="w-[min(40rem,100%)] text-3xl md:text-4xl font-medium justify-self-center text-center">
          Full Stack Services:{" "}
          <span className="italic mr-3 text-primary">
            From Front-end to Back-end
          </span>
        </p>
        <p className="w-[min(34rem,100%)] justify-self-center text-center">
          Comprehensive web development services covering client-side,
          server-side, database integration, and API connectivity.
        </p>
        <div className="mt-5 grid sm:grid-cols-3 mx-auto gap-5 *:rounded-sm *:border-2 *:border-sub *:justify-center">
          <div className="grid gap-3 p-8 text-center justify-items-center">
            <LuCode2 className="text-4xl text-primary" />
            <div className="space-y-2">
              <p className="text-3xl font-medium">Languages</p>
              <p className="">
                JavaScript, TypeScript, Python, SQL (Postgres), HTML/CSS
              </p>
            </div>
          </div>
          <div className="grid gap-3 p-8 text-center justify-items-center">
            <LuFrame className="text-4xl text-primary" />
            <div className="space-y-2">
              <p className="text-3xl font-medium">Frameworks</p>
              <p className="">
                React.js, Node.js (Express), Mongoose, Flask, Next.js, Tailwind
                CSS, Material-UI, SASS (SCSS), Unit Testing (Jest), Angular
              </p>
            </div>
          </div>
          <div className="grid gap-3 p-8 text-center justify-items-center">
            <TbCodeDots className="text-4xl text-primary" />
            <div className="space-y-2">
              <p className="text-3xl font-medium">Others</p>
              <p className="">
                Git, Docker, Figma, AWS, VS Code, MongoDB, Firebase, Agile,
                Scrum, Data Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
