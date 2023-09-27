"use client";

import React, { useEffect, useState } from "react";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";

function Header() {
  const [isSmallerScreen, setIsSmallerScreen] = useState<boolean | undefined>(
    undefined,
  );

  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmallerScreen(window.innerWidth <= 747);
      const handleResize = () => {
        setIsSmallerScreen(window.innerWidth <= 747);
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <header className="px-6 ">
      <div className="flex items-center px-6 py-12">
        <img
          src="/assets/shared/desktop/logo-dark.png"
          alt="designo-logo"
          className="w-[12.625rem] cursor-pointer"
          onClick={() => router.push("/")}
        />
        <img
          src={`/assets/shared/mobile/icon-${
            isMenuShown ? "close" : "hamburger"
          }.svg`}
          alt="hamburger-menu"
          className={`ml-auto  ${!isSmallerScreen && "hidden"}`}
          onClick={() => setIsMenuShown((prev) => !prev)}
        />
        {!isSmallerScreen && (
          <Menu
            style={"flex gap-6 ml-auto font-xl tracking-widest font-light"}
          />
        )}
      </div>
      {isMenuShown && isSmallerScreen && <Menu style={"bg-slate-600"} />}
    </header>
  );
}

export default Header;
