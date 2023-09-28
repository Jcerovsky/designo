import React from "react";
import DesignBox from "@/app/components/DesignBox";
import Card from "@/app/components/Card";
import DesignPageContainer from "@/app/components/DesignPageContainer";

function Page() {
  return (
    <div className="pb-[10rem]">
      <DesignBox style="mb-[5rem] sm:mx-5">
        <h1 className="mb-6 text-4xl">Web Design</h1>
        <p className="mx-[4.25rem] desktop:ml-0">
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </DesignBox>
      <div className=" max-w-[72.375rem] gap-[1.875rem] mx-5 grid grid-cols-[repeat(auto-fit,minmax(min(21.875rem,100%),1fr))]">
        <DesignPageContainer
          imgSource={"web-design/desktop/image-express.jpg"}
          heading={"EXPRESS"}
          text={"A multi-carrier shipping website for ecommerce businesses"}
        />
        <DesignPageContainer
          imgSource={"web-design/desktop/image-transfer.jpg"}
          heading={"TRANSFER"}
          text={
            "Site for low-cost money transfers and sending money within seconds"
          }
        />
        <DesignPageContainer
          imgSource={"web-design/desktop/image-photon.jpg"}
          heading={"PHOTON"}
          text={
            "A state-of-the-art music player with high-resolution audio and DSP effects"
          }
        />
        <DesignPageContainer
          imgSource={"web-design/desktop/image-builder.jpg"}
          heading={"BUILDER"}
          text={
            "A multi-carrier shipping website for ecommerce businessesConnects users with local contractors based on their location"
          }
        />
        <DesignPageContainer
          imgSource={"web-design/desktop/image-blogr.jpg"}
          heading={"BLOGR"}
          text={
            "Blogr is a platform for creating an online blog or publication"
          }
        />
        <DesignPageContainer
          imgSource={"web-design/desktop/image-camp.jpg"}
          heading={"CAMP"}
          text={
            "Get expert training in coding, data, design, and digital marketing"
          }
        />
      </div>

      <section className="mt-[5rem] mb-[4rem] mt-[7rem] flex flex-col gap-5 lap desktop:grid grid-cols-2 desktop:gap-8  ">
        <Card
          imgSource={"/image-app-design.jpg"}
          heading={"APP DESIGN"}
          linkTo={"/app-design"}
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
