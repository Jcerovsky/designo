import React from "react";
import DesignBox from "@/app/components/DesignBox";
import DesignPageContainer from "@/app/components/DesignPageContainer";

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
      <DesignPageContainer heading={"AIRFILTER"} imgName={} />
    </div>
  );
}

export default Page;
