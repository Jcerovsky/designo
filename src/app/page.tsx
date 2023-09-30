import MainHeroCard from "@/app/components/MainHeroCard";
import Card from "@/app/components/Card";
import Features from "@/app/components/Features";

export default function Home() {
  return (
    <div>
      <MainHeroCard />
      <section className=" mb-[7rem] mt-[7rem] flex flex-col gap-5 lap desktop:grid grid-cols-2 desktop:gap-8  ">
        <Card
          imgSource={"/image-web-design.jpg"}
          heading={"WEB DESIGN"}
          customStyle={"row-span-2"}
          linkTo={"/web-design"}
        />
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
      <section className="flex flex-col gap-[5rem] desktop:flex-row desktop:items-center pb-[20rem]">
        <Features
          imgSource={"passionate"}
          heading={"PASSIONATE"}
          text={
            "Each project starts with in-depth brand research to ensure we only create products that serve a purpose." +
            " We merge art, design and technology into exciting new solutions."
          }
        />
        <Features
          imgSource={"resourceful"}
          heading={"RESOURCEFUL"}
          text={
            "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value " +
            "customer collaboration. It guarantees superior results that fulfill our clients' needs."
          }
        />
        <Features
          imgSource={"friendly"}
          heading={"FRIENDLY"}
          text={
            "We are a group of enthusiastic developers who know how to put people first. Our success depends on our customers" +
            " and we strive to give them the best experience a company can provide."
          }
        />
      </section>
    </div>
  );
}
