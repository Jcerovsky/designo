import React from "react";
import DesignBox from "@/app/components/DesignBox";
import DesignPageContainer from "@/app/components/DesignPageContainer";
import Card from "@/app/components/Card";

function Page() {
  return (
    <div>
      <DesignBox>
        <h1 className="mb-6 text-4xl">App Design</h1>
        <p className="mx-[4.25rem] desktop:ml-0">
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </DesignBox>
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
      <section className="mt-[5rem] mb-[4rem] mt-[7rem] flex flex-col gap-5 lap desktop:grid grid-cols-2 desktop:gap-8  ">
        <Card imgSource={"/image-web-design.jpg"} heading={"WEB DESIGN"} />
        <Card
          imgSource={"/image-graphic-design.jpg"}
          heading={"GRAPHIC DESIGN"}
        />
      </section>
    </div>
  );
}

export default Page;
