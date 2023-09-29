"use client";
import React, { useContext } from "react";
import Location from "@/app/components/Location";
import { Context } from "@/app/context/Context";

function Page() {
  const { screenSize } = useContext(Context)!;

  return (
    <div className="sm:mx-5 pb-[15rem]">
      <div className="desktop:flex flex-row-reverse sm:mb-[5rem]">
        <img
          src={`/assets/about/${screenSize}/image-about-hero.jpg?`}
          alt="about-img"
          className="w-full sm:rounded-t-xl desktop:rounded-r-xl desktop:rounded-l-none desktop:h-auto desktop:mb-5"
        />
        <div
          className="bg-peach sm:rounded-b-xl sm:mb-5 desktop:rounded-l-xl desktop:rounded-r-none"
          style={{
            backgroundImage:
              'url("/assets/shared/desktop/bg-pattern-call-to-action.svg")',
          }}
        >
          <div className="text-center text-white py-[5rem] px-[2.25rem] desktop:px-[4.5rem] desktop:text-left">
            <h1 className="mb-6 text-4xl">About us</h1>
            <p className="mx-[4.25rem] desktop:ml-0">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients` audiences.
            </p>
          </div>
        </div>
      </div>
      <div className="desktop:flex sm:mb-[5rem]">
        <img
          src={`/assets/about/${screenSize}/image-world-class-talent.jpg`}
          alt="talent-img"
          className="w-full sm:rounded-t-xl desktop:h-auto desktop:rounded-l-xl desktop:rounded-r-none"
        />
        <div
          style={{
            backgroundImage:
              'url("/assets/shared/desktop/bg-pattern-call-to-action.svg")',
          }}
          className="text-center bg-[#fdf4f2] py-[5rem] px-[3rem] text-neutral-800 sm:rounded-b-xl mb-[4rem]
          desktop:rounded-r-xl desktop:rounded-l-none desktop:text-left desktop:mb-0"
        >
          <h2 className="text-peach text-3xl mb-6">World-class talent</h2>
          <p className="mb-6 mx-[4.25rem] desktop:ml-0">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="mx-[4.25rem] desktop:ml-0">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 mb-[5rem] desktop:flex-row desktop:justify-center desktop:gap-[8rem]">
        <Location imgSource={"canada"} country={"CANADA"} />
        <Location imgSource={"australia"} country={"AUSTRALIA"} />
        <Location imgSource={"united-kingdom"} country={"UNITED KINGDOM"} />
      </div>
      <div className="desktop:flex flex-row-reverse">
        <img
          src={`/assets/about/${screenSize}/image-real-deal.jpg`}
          alt="poster-wall-img"
          className="w-full sm:rounded-t-xl desktop:rounded-r-xl desktop:rounded-l-none"
        />
        <div
          style={{
            backgroundImage:
              'url("/assets/shared/desktop/bg-pattern-call-to-action.svg")',
          }}
          className="text-center bg-[#fdf4f2] py-[5rem] px-[3rem] text-neutral-800 sm:rounded-b-xl mb-[4rem]
          desktop:rounded-l-xl desktop:rounded-r-none sm:mb-0 desktop:text-left"
        >
          <h2 className="text-peach mb-6 text-4xl ">The real deal</h2>

          <p className="mb-6 mx-[4.25rem] desktop:ml-0">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="mx-[4.25rem] desktop:ml-0">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
