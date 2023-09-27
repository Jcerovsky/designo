import React from "react";

interface IProps {
  imgSource: string;
  heading: string;
  text: string;
}

function Features({ imgSource, heading, text }: IProps) {
  return (
    <div
      className="flex flex-col text-center items-center sm:grid sm:grid-cols-[minmax(12.5rem,25%),1fr] sm:items-center sm:text-left sm:gap-2
    desktop:flex-col desktop:flex sm:gap-10 desktop:text-center mx-5"
    >
      <div
        className="flex-grow"
        style={{
          backgroundImage:
            'url("assets/home/desktop/bg-pattern-hero-home.svg")',
          backgroundSize: "cover",
        }}
      >
        <img
          src={`/assets/home/desktop/illustration-${imgSource}.svg`}
          alt="feature-img"
          className=""
        />
      </div>
      <div className="flex flex-col max-w-[27.8rem] ">
        <h2 className="text-xl tracking-[.25rem] my-8 sm:my-0 sm:mb-4">
          {heading}
        </h2>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
}

export default Features;
