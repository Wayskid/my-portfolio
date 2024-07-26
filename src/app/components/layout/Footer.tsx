import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import WaysLogo from "../../assets/images/logo.png";

export default function Footer() {
  return (
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
  );
}
