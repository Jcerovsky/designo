import React, { ReactNode } from "react";

interface IProps {
  heading: string;
  children: ReactNode;
}

function LocationContainer({ heading, children }: IProps) {
  return (
    <div
      style={{
        backgroundImage:
          'url("/assets/shared/desktop/bg-pattern-call-to-action.svg")',
      }}
      className="text-center bg-[#fdf4f2] text-neutral-800 sm:rounded-b-xl  mb-[4rem]
          desktop:rounded-xl desktop:text-left desktop:mb-0 desktop:w-full"
    >
      <div className="text-center py-[5rem] px-[3.125rem] desktop:px-[4.5rem] whitespace-nowrap	">
        <h2 className="text-peach text-3xl mb-6 sm:text-left">{heading}</h2>
        {children}
      </div>
    </div>
  );
}

export default LocationContainer;
