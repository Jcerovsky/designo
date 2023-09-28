import React from "react";
import DesignContainer from "@/app/components/DesignContainer";
import Card from "@/app/components/Card";
import WebDesignContainer from "@/app/web-design/WebDesignContainer";

function Page() {
  return (
    <div className="pb-[10rem]">
      <DesignContainer style="mb-[5rem] sm:mx-5">
        <h1 className="mb-6 text-4xl">Web Design</h1>
        <p className="mx-[4.25rem] desktop:ml-0">
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </DesignContainer>
      <div className=" max-w-[72.375rem] md:gap-8 mx-5 md:grid md:grid-cols-[repeat(auto-fit,minmax(min(21.875rem,100%),1fr))]">
        <WebDesignContainer
          imgName={"express"}
          heading={"EXPRESS"}
          text={"A multi-carrier shipping website for ecommerce businesses"}
        />
        <WebDesignContainer
          imgName={"transfer"}
          heading={"TRANSFER"}
          text={
            "Site for low-cost money transfers and sending money within seconds"
          }
        />
        <WebDesignContainer
          imgName={"photon"}
          heading={"PHOTON"}
          text={
            "A state-of-the-art music player with high-resolution audio and DSP effects"
          }
        />
        <WebDesignContainer
          imgName={"builder"}
          heading={"BUILDER"}
          text={
            "A multi-carrier shipping website for ecommerce businessesConnects users with local contractors based on their location"
          }
        />
        <WebDesignContainer
          imgName={"blogr"}
          heading={"BLOGR"}
          text={
            "Blogr is a platform for creating an online blog or publication"
          }
        />
        <WebDesignContainer
          imgName={"camp"}
          heading={"CAMP"}
          text={
            "Get expert training in coding, data, design, and digital marketing"
          }
        />
      </div>

      <section className="mt-[5rem] mb-[4rem] mt-[7rem] flex flex-col gap-5 lap desktop:grid grid-cols-2 desktop:gap-8  ">
        <Card imgSource={"/image-app-design.jpg"} heading={"APP DESIGN"} />
        <Card
          imgSource={"/image-graphic-design.jpg"}
          heading={"GRAPHIC DESIGN"}
        />
      </section>
    </div>
  );
}

export default Page;
