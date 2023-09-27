"use client";

import React from "react";
import Location from "@/app/components/Location";

function Page() {
  return (
    <div className="sm:mx-5  text-white ">
      <div
        className="bg-peach py-[3.125rem] px-[2.85rem] text-center  sm:rounded-xl mb-[7rem] sm:text-left desktop:flex
       desktop:gap-4 items-center"
      >
        <div className="desktop:flex desktop:flex-col desktop:justify-center">
          <h1 className="text-4xl mb-8">Contact us</h1>
          <p className="mx-[2.5rem] mb-10 sm:ml-0 max-w-[27.8125rem]">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <form className="flex flex-col gap-5 basis-1/2	">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-transparent border-b border-white px-4 pb-2 focus:outline-black placeholder-gray-300"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="bg-transparent border-b border-white px-4 pb-2 focus:outline-black placeholder-gray-300"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="bg-transparent border-b border-white px-4 pb-2 focus:outline-black placeholder-gray-300"
          />
          <textarea
            name="your-message"
            placeholder="Your Message"
            className="bg-transparent border-b border-white px-4 pb-2 focus:outline-black placeholder-gray-300 resize-none h-[6rem]"
          />
          <button className="bg-white rounded-xl px-6 py-4 ml-auto mr-auto text-black sm:mr-0">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-8 mb-[5rem] desktop:flex-row desktop:justify-center desktop:gap-[8rem]">
        <Location imgSource={"canada"} country={"CANADA"} />
        <Location imgSource={"australia"} country={"AUSTRALIA"} />
        <Location imgSource={"united-kingdom"} country={"UNITED KINGDOM"} />
      </div>
    </div>
  );
}

export default Page;
