"use client";

import React, { useContext } from "react";
import { Context } from "@/app/context/Context";

function Footer() {
  const { theme } = useContext(Context)!;
  return (
    <footer className="text-center relative bg-neutral-900 pt-[15rem] pb-[4.5rem]	">
      <img
        src={`/assets/shared/desktop/logo-${
          theme === "light" ? "light" : "dark"
        }.png`}
        alt="designo-logo"
        className="w-[12.625rem] cursor-pointer ml-auto mr-auto"
      />
      <hr className="my-10 mx-6 border-none" />
      <div className="text-white flex flex-col gap-10 tracking-widest mb-10">
        <a
          href="/about"
          className="cursor-pointer hover:underline hover:scale-95 delay-200"
        >
          OUR COMPANY
        </a>
        <a
          href="locations"
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
      <div className="flex flex-col gap-10 mb-10">
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
      <div className="flex gap-2 justify-center gap-4">
        <img
          src="/assets/shared/desktop/icon-facebook.svg"
          alt="facebook-logo"
        />
        <img src="/assets/shared/desktop/icon-youtube.svg" alt="youtube-logo" />
        <img src="/assets/shared/desktop/icon-twitter.svg" alt="twitter-logo" />
        <img
          src="/assets/shared/desktop/icon-pinterest.svg"
          alt="pinterest-logo"
        />
        <img
          src="/assets/shared/desktop/icon-instagram.svg"
          alt="instagram-logo"
        />
      </div>
      <div
        className="m-5 absolute text-white bg-peach"
        style={{
          backgroundImage:
            'url("/assets/shared/desktop/bg-pattern-call-to-action.svg")',
        }}
      >
        <h2 className="text-2xl">Let’s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <a
          href="/contact"
          className="py-4 px-6 hover:bg-orange-500 cursor-pointer"
        >
          GET IN TOUCH
        </a>
      </div>
    </footer>
  );
}

export default Footer;
