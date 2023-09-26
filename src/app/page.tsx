import MainHeroCard from "@/app/components/MainHeroCard";
import Card from "@/app/components/Card";

export default function Home() {
  return (
    <>
      <MainHeroCard />
      <div className="m-5 mt-[7rem] flex flex-col gap-5 lap desktop:grid grid-cols-2 ">
        <Card
          imgSource={"/image-web-design.jpg"}
          heading={"WEB DESIGN"}
          customStyle={"row-span-2"}
        />
        <Card imgSource={"/image-app-design.jpg"} heading={"APP DESIGN"} />
        <Card
          imgSource={"/image-graphic-design.jpg"}
          heading={"GRAPHIC DESIGN"}
        />
      </div>
    </>
  );
}
