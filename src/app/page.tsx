"use client";
import Image from "next/image";
import Link from "next/link";
import WaysLogo from "./assets/images/logo.png";
import { GrMenu } from "react-icons/gr";
import LandingPage from "./components/sections/LandingPage";
import Service from "./components/sections/Service";
import Portfolio from "./components/sections/Portfolio";
import Testimonial from "./components/sections/Testimonial";
import Contact from "./components/sections/Contact";
import { BsGithub } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { PiX } from "react-icons/pi";

export default function Home() {
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  function matchRoute(route: string) {
    if (pathname === route) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <main className="text-white">
      <nav id="home" className="fixed z-40 top-0 w-full">
        <div className="flex items-center w-[min(92rem,100%)] mx-auto relative z-40 px-4 md:px-12 lg:px-32 py-3 justify-between">
          <Link href="#home" className="-ml-5">
            <Image src={WaysLogo} alt="" width={80} />
          </Link>
          <div className="gap-5 md:gap-10 hidden md:flex backdrop-blur-sm bg-white/10 py-3 text-sm px-8 rounded-sm text-gray-400">
            <Link href="#home" className="text-gray-300 font-semibold">
              Home
            </Link>
            <Link href="#service">Service</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#testimonial">Testimonial</Link>
          </div>
          <Link
            href="#contact"
            className="hidden md:flex px-4 py-2 font-bold bg-primary rounded-sm"
          >
            Contact
          </Link>
          <button
            className="md:hidden text-4xl transition duration-1000 ml-5 lg:ml-8"
            onClick={() => setMobileMenuShown(!mobileMenuShown)}
          >
            {mobileMenuShown ? (
              <PiX className="transition duration-1000 text-primary" />
            ) : (
              <GrMenu className="transition duration-1000 text-primary" />
            )}
          </button>
        </div>
        <div
          className={`fixed bg-secondary top-0 w-full h-full md:hidden transition-opacity z-30 pt-[87px] ${
            !mobileMenuShown
              ? "-translate-y-[200%] opacity-0"
              : "translate-y-[0] opacity-100"
          }
        `}
        >
          <div className="grid *:grid *:items-center h-full text-center text-4xl *:border-b">
            <Link
              href="#home"
              className={`${matchRoute("/home") && "font-bold"}`}
              onClick={() => setMobileMenuShown(false)}
            >
              Home
            </Link>
            <Link
              href="#service"
              className={`${matchRoute("service") && "font-bold"}`}
              onClick={() => setMobileMenuShown(false)}
            >
              Service
            </Link>
            <Link
              href="#portfolio"
              className={`${matchRoute("portfolio") && "font-bold"}`}
              onClick={() => setMobileMenuShown(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#testimonial"
              className={`${matchRoute("testimonial") && "font-bold"}`}
              onClick={() => setMobileMenuShown(false)}
            >
              Testimonial
            </Link>
            <Link
              href="#contact"
              className={`${
                matchRoute("#contact") && "font-bold"
              } border-transparent`}
              onClick={() => setMobileMenuShown(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div className="mt-[87px] grid">
        <LandingPage />
        <Service />
        <Portfolio />
        <Testimonial />
        <Contact />
      </div>
      <footer className="bg-black">
        <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 py-10 md:py-16 grid gap-3">
          <div className="flex items-center gap-5 justify-between">
            <Link href="#home" className="-ml-5">
              <Image src={WaysLogo} alt="" width={90} />
            </Link>
            <div className="flex gap-5">
              <div className="w-12 h-12 grid place-items-center rounded-sm bg-sub">
                <FiGithub className="text-2xl" />
              </div>
              <div className="w-12 h-12 grid place-items-center rounded-sm bg-sub">
                <SlSocialLinkedin className="text-2xl" />
              </div>
              <div className="w-12 h-12 grid place-items-center rounded-sm bg-sub">
                <SlSocialTwitter className="text-2xl" />
              </div>
            </div>
          </div>
          <p className="ml-auto">
            &copy; <span className="text-primary">2022</span> Richard
          </p>
        </div>
      </footer>
    </main>
  );
}
