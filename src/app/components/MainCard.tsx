import React from "react";

function MainCard() {
  return (
    <section
      className="bg-peach text-white p-10 pb-[28rem] text-center relative overflow-hidden"
      style={{
        backgroundImage: "url(/assets/home/desktop/bg-pattern-hero-home.svg)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
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
        <img
          src="/assets/home/desktop/image-hero-phone.png"
          alt="phone-frame"
          className="absolute top-[18rem] left-1/2 transform -translate-x-1/2"
        />
      </div>
    </section>
  );
}

export default MainCard;
