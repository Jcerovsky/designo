import React from "react";

interface IProps {
  imgSource: string;
  heading: string;
  text: string;
}

function DesignPageContainer({ imgSource, heading, text }: IProps) {
  return (
    <div className="mb-6 grid grid-cols-[repeat(auto-fit,minmax(min(21.875rem,100%),1fr))] ">
      <img
        src={`/assets/${imgSource}`}
        alt="shipping-img"
        className="rounded-t-xl sm:rounded-r-none sm:rounded-l-xl md:rounded-b-none md:rounded-t-xl h-full "
      />
      <div
        className="flex flex-col bg-[#fdf4f2] text-peach hover:bg-peach hover:text-white text-black duration-300 text-center rounded-b-xl p-8
        sm:rounded-l-none sm:rounded-r-xl sm:place-items-center justify-center md:rounded-t-none md:rounded-b-xl min-h-[8rem]
        grid grid-cols-[repeat(auto-fit,minmax(min(21.875rem,100%),1fr))] "
      >
        <h1 className="mb-4 text-2xl tracking-[0.25rem]">{heading}</h1>
        <p className="mx-[4.25rem] sm:mx-[2rem] md:mx-0 text-black desktop:ml-0 tracking-[0.25rem]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default DesignPageContainer;
