import React from "react";

interface IProps {
  imgSource: string;
  heading: string;
  customStyle?: string;
}

function Card({ imgSource, heading, customStyle }: IProps) {
  const style = {
    backgroundImage: `url(/assets/home/mobile/${imgSource})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className={`text-white rounded-xl py-[5.265rem] mx-5 text-center opacity-50 cursor-pointer
        hover:opacity-100 ${customStyle} flex flex-col justify-center items-center`}
      style={style}
    >
      <h2 className="mb-5 text-3xl">{heading}</h2>
      <p className="tracking-widest">VIEW PROJECT</p>
    </div>
  );
}

export default Card;
