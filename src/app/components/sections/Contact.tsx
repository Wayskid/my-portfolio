"use client";

import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div id="contact" className="py-10 md:py-16">
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 mb-10 grid gap-5 text-center justify-items-center">
        <p className="w-[min(40rem,100%)] text-3xl md:text-4xl font-medium justify-self-center text-center">
          Ready to{" "}
          <span className="italic mr-3 text-primary">Get Started?</span> Contact
          me
        </p>
        <p className="w-[min(34rem,100%)] justify-self-center text-center">
          {`You know about me, let's talk about you. Shoot your message`}
        </p>
      </div>
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 grid items-center gap-8">
        <div className="grid gap-3 sm:grid-cols-2 sm:justify-items-center w-[min(40rem,100%)] mx-auto">
          <div className="flex gap-3">
            <div className="p-4 rounded-sm bg-sub">
              <FaLocationDot className="text-2xl" />
            </div>
            <div className="">
              <p className="text-lg font-semibold">Location</p>
              <p className="text-semibold">England, UK</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="p-4 rounded-sm bg-sub">
              <MdEmail className="text-2xl" />
            </div>
            <div className="">
              <p className="text-lg font-semibold">Email</p>
              <p className="text-semibold">wayskid02@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="grid gap-5 *:rounded-sm w-[min(40rem,100%)] mx-auto">
          <input
            type="text"
            className="p-3 outline-none border focus:border-primary bg-transparent"
            placeholder="Name"
          />
          <input
            type="text"
            className="p-3 outline-none border focus:border-primary bg-transparent"
            placeholder="Email"
          />
          <textarea
            rows={5}
            className="p-3 outline-none border focus:border-primary bg-transparent"
            placeholder="Your message"
          />
          <button className="bg-sub py-3">Send message</button>
        </div>
      </div>
    </div>
  );
}
