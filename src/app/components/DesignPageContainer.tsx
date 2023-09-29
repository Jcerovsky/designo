import React from "react";

interface IProps {
  imgSource: string;
  heading: string;
  text: string;
}

function DesignPageContainer({ imgSource, heading, text }: IProps) {
  return (
    <div
      className="mb-6 grid grid-cols-[repeat(auto-fit,minmax(min(18.75rem,100%),1fr))] hover:scale-105 duration-300
    bg-[#fdf4f2] hover:bg-peach rounded-xl text-peach hover:text-white "
    >
      <img
        src={`/assets/${imgSource}`}
        alt="shipping-img"
        className="rounded-t-xl min-[640px]:rounded-r-none min-[640px]:rounded-l-xl h-full hover:saturate-200
        min-[747px]:rounded-l-xl min-[747px]:rounded-r-none min-[771px]:rounded-t-xl min-[771px]:rounded-b-none"
      />
      <div
        className="flex flex-col hover:text-white duration-300 text-center
       p-8 rounded-b-xl min-[640px]:rounded-l-none min-[640px]:rounded-r-xl sm:place-items-center justify-center min-h-[8rem]
       min-[747px]:rounded-r-xl min-[747px]:rounded-l-none min-[771px]:rounded-b-xl min-[771px]:rounded-t-none"
      >
        <h1 className="mb-4 text-2xl tracking-[0.25rem]">{heading}</h1>
        <p className=" text-black desktop:ml-0 tracking-[0.25rem]">{text}</p>
      </div>
    </div>
  );
}

export default DesignPageContainer;
