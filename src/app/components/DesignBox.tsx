import React, { ReactNode } from "react";

function DesignBox({
  children,
  style,
}: {
  children: ReactNode;
  style?: string;
}) {
  return (
    <div
      className={`bg-peach text-center sm:rounded-xl text-white py-[5rem] px-[2.25rem] desktop:px-[4.5rem] ${style}`}
      style={{
        backgroundImage:
          'url("assets/shared/desktop/bg-pattern-call-to-action.svg")',
        backgroundRepeat: "repeat-y",
        backgroundPosition: "100%",
      }}
    >
      {children}
    </div>
  );
}

export default DesignBox;
