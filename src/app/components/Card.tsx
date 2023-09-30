"use client";

import React, { useContext } from "react";
import { Context } from "@/app/context/Context";

interface IProps {
  imgSource: string;
  heading: string;
  customStyle?: string;
  linkTo: string;
}

function Card({ imgSource, heading, customStyle, linkTo }: IProps) {
  const { screenSize } = useContext(Context)!;

  const style = {
    backgroundImage: `url(/assets/home/${screenSize}/${imgSource})`,
    backgroundSize: "cover",
  };

  return (
    <a
      href={linkTo}
      className={`text-white rounded-xl py-[5.265rem] mx-5 text-center cursor-pointer hover:contrast-125 duration-200
         ${customStyle} flex flex-col justify-center items-center`}
      style={style}
    >
      <h2 className="mb-5 text-3xl">{heading}</h2>
      <p className="tracking-widest">VIEW PROJECT</p>
    </a>
  );
}

export default Card;
