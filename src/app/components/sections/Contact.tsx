"use client";

import React, { FormEvent, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Contact() {
  //Send email
  const [contactVal, setContactVal] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailSentRes, setEmailSentRes] = useState({} as EmailJSResponseStatus);
  const [loading, setLoading] = useState(false);

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const service = process.env.NEXT_PUBLIC_emailjs_serviceId;
    const template = process.env.NEXT_PUBLIC_emailjs_templateId;
    const key = process.env.NEXT_PUBLIC_emailjs_publicId;
    if (
      Object.values(contactVal).every((val) => val.length > 0) &&
      service &&
      template &&
      key
    ) {
      setLoading(true);
      emailjs
        .send(
          service,
          template,
          {
            ...contactVal,
          },
          key
        )
        .then(
          (result) => {
            console.log(result);
            setEmailSentRes(result);
            setLoading(false);
            setContactVal({
              name: "",
              email: "",
              message: "",
            });
            setTimeout(() => {
              setEmailSentRes({} as EmailJSResponseStatus);
            }, 4000);
          },
          (error) => {
            console.log(error);
            setLoading(false);
          }
        );
    }
  }

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
        <form
          onSubmit={sendEmail}
          className="grid gap-5 *:rounded-sm w-[min(40rem,100%)] mx-auto"
        >
          <input
            type="text"
            className="p-3 outline-none border focus:border-primary bg-transparent"
            placeholder="Name"
            value={contactVal.name}
            onChange={(e) =>
              setContactVal({ ...contactVal, name: e.target.value })
            }
          />
          <input
            type="text"
            className="p-3 outline-none border focus:border-primary bg-transparent"
            placeholder="Email"
            value={contactVal.email}
            onChange={(e) =>
              setContactVal({ ...contactVal, email: e.target.value })
            }
          />
          <textarea
            rows={5}
            className="p-3 outline-none border focus:border-primary bg-transparent"
            placeholder="Your message"
            value={contactVal.message}
            onChange={(e) =>
              setContactVal({ ...contactVal, message: e.target.value })
            }
          />
          {emailSentRes.status === 200 && !loading && (
            <p className="flex gap-1 items-center text-lg">
              <AiFillCheckCircle /> Sent Successfully
            </p>
          )}
          <button
            className="bg-sub py-3 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
}
