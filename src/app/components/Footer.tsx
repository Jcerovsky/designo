"use client";

import React, { useContext } from "react";
import { Context } from "@/app/context/Context";

function Footer() {
  const { theme } = useContext(Context)!;
  return (
    <footer className="text-center relative bg-neutral-900 pt-[15rem] pb-[4.5rem] desktop:pb-[2rem]	">
      <div className="desktop:flex items-center desktop:border-b border-gray-800 desktop:mx-5 desktop:pb-8">
        <img
          src={`/assets/shared/desktop/logo-${
            theme === "light" ? "light" : "dark"
          }.png`}
          alt="designo-logo"
          className="w-[12.625rem] cursor-pointer ml-auto mr-auto desktop:ml-0 mb-5 mt-10 sm:mt-5 desktop:mb-0"
        />
        <div
          className="text-white flex flex-col desktop:flex-row desktop:self-center  gap-10
        tracking-widest mb-10 desktop:mb-0 border-t border-gray-800 mx-5 pt-5 desktop:border-none desktop:mx-0"
        >
          <a
            href="/about"
            className="cursor-pointer hover:underline hover:scale-95 delay-200"
          >
            OUR COMPANY
          </a>
          <a
            href="/locations"
            className="cursor-pointer hover:underline hover:scale-95 delay-200"
          >
            LOCATIONS
          </a>
          <a
            href="/contact"
            className="cursor-pointer hover:underline hover:scale-95 delay-200"
          >
            CONTACT
          </a>
        </div>
      </div>

      <div className="desktop:flex items-center desktop:p-8">
        <div className="flex flex-col gap-10 mb-10 desktop:flex-row desktop:gap-[10rem] desktop:mb-0">
          <div className="text-gray-500 flex flex-col">
            <span className="font-bold">Designo Central Office</span>
            <span>3886 Wellington Street</span>
            <span>Toronto, Ontario M9C 3J5</span>
          </div>
          <div className="text-gray-500 flex flex-col font-bold">
            <span>Contact Us (Central Office)</span>
            <span>P : +1 253-863-8967</span>
            <span>M : jcerovsky8@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-2 justify-center gap-4 desktop:ml-auto desktop:self-end">
          <img
            src="/assets/shared/desktop/icon-facebook.svg"
            alt="facebook-logo"
            className="cursor-pointer hover:opacity-80"
          />
          <img
            src="/assets/shared/desktop/icon-youtube.svg"
            alt="youtube-logo"
            className="cursor-pointer hover:opacity-80"
          />
          <img
            src="/assets/shared/desktop/icon-twitter.svg"
            alt="twitter-logo"
            className="cursor-pointer hover:opacity-80"
          />
          <img
            src="/assets/shared/desktop/icon-pinterest.svg"
            alt="pinterest-logo"
            className="cursor-pointer hover:opacity-80"
          />
          <img
            src="/assets/shared/desktop/icon-instagram.svg"
            alt="instagram-logo"
            className="cursor-pointer hover:opacity-80"
          />
        </div>
        <div
          className="m-5 absolute text-white bg-peach py-[3.65rem] px-[2.625rem] rounded-xl top-[-18%] desktop:flex justify-between
        items-center gap-[10rem] desktop:p-[4rem] min-w-[18.56rem] max-h-[25rem]"
          style={{
            backgroundImage:
              'url("/assets/shared/desktop/bg-pattern-call-to-action.svg")',
          }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl mb-4 mx-[15%] md:mx-[20%] tracking-wide desktop:text-left desktop:ml-0">
              Let’s talk about your project
            </h2>
            <p className="mb-8 sm:mx-10 desktop:text-left desktop:mx-0">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block py-4 px-6 bg-white rounded-xl text-black tracking-widest hover:bg-light-peach
          hover:text-white  duration-200 cursor-pointer desktop:whitespace-nowrap	"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
