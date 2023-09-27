import React from "react";

interface IProps {
  imgSource: string;
  country: string;
}

function Location({ imgSource, country }: IProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex-grow mb-5"
        style={{
          backgroundImage:
            'url("assets/home/desktop/bg-pattern-hero-home.svg")',
          backgroundSize: "cover",
        }}
      >
        <img
          src={`/assets/shared/desktop/illustration-${imgSource}.svg`}
          alt="location-img"
        />
      </div>
      <h2 className="tracking-[0.25rem] mb-5">{country}</h2>
      <a
        href="/locations"
        className="inline-block text-white py-4 px-6 bg-peach rounded-xl hover:bg-light-peach cursor-pointer "
      >
        SEE LOCATION
      </a>
    </div>
  );
}

export default Location;
