import React from "react";
import DesignBox from "@/app/components/DesignBox";
import DesignPageContainer from "@/app/components/DesignPageContainer";
import Card from "@/app/components/Card";

function Page() {
  return (
    <div className="pb-[10rem]">
      <DesignBox style="sm:mx-5 mb-[5rem]">
        <h1 className="mb-6 text-4xl">App Design</h1>
        <p className="mx-[4.25rem] desktop:ml-0">
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </DesignBox>
      <div className=" max-w-[72.375rem] gap-[1.875rem] mx-5 grid grid-cols-[repeat(auto-fit,minmax(min(21.875rem,100%),1fr))]">
        <DesignPageContainer
          heading={"AIRFILTER"}
          imgSource={"app-design/desktop/image-airfilter.jpg"}
          text={
            "Solving the problem of poor indoor air quality by filtering the air"
          }
        />
        <DesignPageContainer
          heading={"EYECAM"}
          imgSource={"app-design/desktop/image-eyecam.jpg"}
          text={
            "Product that lets you edit your favorite photos and videos at any time"
          }
        />
        <DesignPageContainer
          heading={"FACEIT"}
          imgSource={"app-design/desktop/image-faceit.jpg"}
          text={
            "Get to meet your favorite internet superstar with the faceit app"
          }
        />
        <DesignPageContainer
          heading={"TODO"}
          imgSource={"app-design/desktop/image-todo.jpg"}
          text={"A todo app that features cloud sync with light and dark mode"}
        />
        <DesignPageContainer
          heading={"LOOPSTUDIOS"}
          imgSource={"app-design/desktop/image-loopstudios.jpg"}
          text={"A VR experience app made for Loopstudios"}
        />
      </div>
      <section className=" mb-[2rem] mt-[7rem] flex flex-col gap-5 lap desktop:grid grid-cols-2 desktop:gap-8  ">
        <Card
          imgSource={"/image-web-design.jpg"}
          heading={"WEB DESIGN"}
          linkTo={"/web-design"}
        />
        <Card
          imgSource={"/image-graphic-design.jpg"}
          heading={"GRAPHIC DESIGN"}
          linkTo={"/graphic-design"}
        />
      </section>
    </div>
  );
}

export default Page;
