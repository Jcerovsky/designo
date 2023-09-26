import React from "react";

interface IProps {
  imgSource: string;
  heading: string;
  text: string;
}

function Features({ imgSource, heading, text }: IProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5 text-center items-center">
      <img
        src={`/assets/home/desktop/illustration-${imgSource}.svg`}
        alt="feature-img"
      />
      <div className="flex flex-col">
        <h2 className="text-2xl tracking-widest mb-5">{heading}</h2>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
}

export default Features;
