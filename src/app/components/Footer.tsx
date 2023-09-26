"use client";

import React, { useContext } from "react";
import { Context } from "@/app/context/Context";

function Footer() {
  const { theme } = useContext(Context)!;
  return (
    <footer className="text-center relative">
      <img
        src={`/assets/shared/desktop/logo-${
          theme === "light" ? "dark" : "light"
        }.png`}
        alt="designo-logo"
        className="w-[12.625rem] cursor-pointer"
      />
      <hr className="w-[95%] " />
      <div className="text-white">
        <a href="/">OUR COMPANY</a>
        <a href="/">LOCATIONS</a>
        <a href="/">CONTACT</a>
      </div>
      <div className="text-slate-500 flex flex-col">
        <span className="font-bold">Designo Central Office</span>
        <span>3886 Wellington Street</span>
        <span>Toronto, Ontario M9C 3J5</span>
      </div>
      <div className="text-slate-500 flex flex-col">
        <span className="font-bold">Contact Us (Central Office)</span>
        <span>P : +1 253-863-8967</span>
        <span>M : jcerovsky8@gmail.com</span>
      </div>
      <div className="flex gap-2">
        <a href="/assets/shared/desktop/icon-facebook.svg" />
        <a href="/assets/shared/desktop/icon-youtube.svg" />
        <a href="/assets/shared/desktop/icon-twitter.svg" />
        <a href="/assets/shared/desktop/icon-pinterest.svg" />
        <a href="/assets/shared/desktop/icon-instagram.svg" />
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
