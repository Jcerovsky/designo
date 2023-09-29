import React from "react";
import DesignBox from "@/app/components/DesignBox";
import Card from "@/app/components/Card";
import DesignPageContainer from "@/app/components/DesignPageContainer";

function Page() {
  return (
    <div className="pb-[10rem]">
      <DesignBox style="mb-[5rem] sm:mx-5">
        <h1 className="mb-6 text-4xl">Graphic design</h1>
        <p className="mx-[4.25rem] desktop:ml-0">
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </DesignBox>
      <div className=" max-w-[72.375rem] gap-[1.875rem] mx-5 grid grid-cols-[repeat(auto-fit,minmax(min(21.875rem,100%),1fr))]">
        <DesignPageContainer
          imgSource={"graphic-design/desktop/image-change.jpg"}
          heading={"TIM BROWN "}
          text={"A book cover designed for Tim Brown’s new release, ‘Change’"}
        />
        <DesignPageContainer
          imgSource={"graphic-design/desktop/image-boxed-water.jpg"}
          heading={"BOXED WATER"}
          text={"A simple packaging concept made for Boxed Water"}
        />
        <DesignPageContainer
          imgSource={"graphic-design/desktop/image-science.jpg"}
          heading={"SCIENCE"}
          text={"A poster made in collaboration with the Federal Art Project"}
        />
      </div>

      <section className="mb-[2rem] mt-[7rem] flex flex-col gap-5 lap desktop:grid grid-cols-2 desktop:gap-8  ">
        <Card
          imgSource={"/image-app-design.jpg"}
          heading={"APP DESIGN"}
          linkTo={"/app-design"}
        />
        <Card
          imgSource={"/image-graphic-design.jpg"}
          heading={"WEB DESIGN"}
          linkTo={"/web-design"}
        />
      </section>
    </div>
  );
}

export default Page;
