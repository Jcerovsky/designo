import React from "react";

interface IProps {
  imgSource: string;
  heading: string;
  text: string;
}

function Features({ imgSource, heading, text }: IProps) {
  return (
    <div className="flex flex-col md:flex-row text-center items-center">
      <div
        style={{
          backgroundImage:
            'url("assets/home/desktop/bg-pattern-hero-home.svg")',
          backgroundSize: "cover",
        }}
      >
        <img
          src={`/assets/home/desktop/illustration-${imgSource}.svg`}
          alt="feature-img"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl tracking-[.25rem] my-8">{heading}</h2>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
}

export default Features;
