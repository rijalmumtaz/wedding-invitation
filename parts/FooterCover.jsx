import React from "react";
import line from "../public/images/Line 1.svg";

export default function FooterCover() {
  return (
    <div className="bg-white-bg pt-[27px] pb-[40px]">
      <div className="flex justify-evenly">
        {/* left */}
        <div className="flex flex-col justify-items-center items-center font-rozha-one text-3xl">
          <p>18</p>
          <p>MAY</p>
        </div>
        {/* left */}
        <div className="flex justify-items-center">
          <img src="/images/Line 1.svg" />
        </div>
        {/* right */}
        <div className="flex flex-col justify-items-center items-center font-rozha-one text-3xl">
          <p>9.00</p>
          <p>AM</p>
        </div>
        {/* right */}
      </div>
    </div>
  );
}
