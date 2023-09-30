"use client";

import React from "react";
import LocationContainer from "@/app/components/LocationContainer";
import dynamic from "next/dynamic";

function Page() {
  const LeafletMap = dynamic(() => import("../components/Map"), {
    ssr: false,
    loading: () => <p>A map is loading...</p>,
  });

  return (
    <div className="pb-[15rem] sm:mx-5 ">
      <div className="desktop:flex desktop:flex-row-reverse gap-3 ">
        <div
          className="h-[22rem] w-full desktop:w-[25rem] desktop:min-w-[40%] desktop:ml-auto sm:rounded-xl sm:rounded-b-none overflow-hidden
        desktop:rounded-xl"
        >
          <LeafletMap lat={43.782688} lng={-80.132317} />
        </div>
        <LocationContainer heading={"Canada"}>
          <div className="sm:flex sm:text-left gap-[5rem] ">
            <div className="mb-5">
              <p className="font-bold">Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="justify-self-center">
              <p className="font-bold">Contact</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </LocationContainer>
      </div>
      <div className="desktop:flex gap-3 mt-[5rem]  ">
        <div
          className="h-[22rem] w-full desktop:w-[25rem] desktop:min-w-[40%] desktop:mr-auto sm:rounded-xl sm:rounded-b-none overflow-hidden
        desktop:rounded-xl"
        >
          <LeafletMap lat={-27.60643} lng={153.06578} />
        </div>
        <LocationContainer heading={"Australia"}>
          <div className="sm:flex sm:text-left gap-[5rem] ">
            <div className="mb-5">
              <p className="font-bold">Designo AU Office</p>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>
            <div className="justify-self-center">
              <p className="font-bold">Contact</p>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </LocationContainer>
      </div>
      <div className="desktop:flex desktop:flex-row-reverse gap-3 mt-[5rem]  ">
        <div
          className="h-[22rem] w-full desktop:w-[25rem] desktop:min-w-[40%] desktop:ml-auto sm:rounded-xl sm:rounded-b-none overflow-hidden
        desktop:rounded-xl"
        >
          <LeafletMap lat={53.70949} lng={-1.34261} />
        </div>
        <LocationContainer heading={"United Kingdom"}>
          <div className="sm:flex sm:text-left gap-[5rem] ">
            <div className="mb-5">
              <p className="font-bold">Designo UK Office</p>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>
            <div className="justify-self-center">
              <p className="font-bold">Contact</p>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </LocationContainer>
      </div>
    </div>
  );
}

export default Page;
