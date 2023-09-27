import React from "react";

function MainHeroCard() {
  return (
    <section
      className="bg-peach text-white text-center overflow-hidden bg-no-repeat custom-img-bg-main md:m-6 md:rounded-xl
      sm:rounded-xl
      "
      style={{
        backgroundImage:
          "url(/assets/home/desktop/bg-pattern-hero-home.svg), url(/assets/home/desktop/image-hero-phone.png)",
      }}
    >
      <div
        className="max-w-[31.25rem] md:flex md:flex-col justify-center items-center p-10 pb-[28rem]
      desktop:pb-[10rem] max-desktop:ml-auto max-desktop:mr-auto "
      >
        <h1 className="text-4xl mt-2">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="my-10">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <a
          href="/about"
          className="bg-white rounded-md text-black py-4 px-6 tracking-widest"
        >
          LEARN MORE
        </a>
      </div>
    </section>
  );
}

export default MainHeroCard;
