import React from "react";
import Image from "next/image";

export default function Test() {
  return (
    <>
      <div className="relative mt-52">
        <Image
          className="absolute mt-28"
          src="/images/&.svg"
          alt="Picture of the author"
          width={300}
          height={300}
        />
        <div className="relative left-24">
          <p className="font-kapakana text-[102px] absolute text-white opacity-75">
            Itmam
          </p>
          <p className="font-kapakana text-[102px] absolute text-white opacity-75 top-16 left-20">
            Iis
          </p>
        </div>
      </div>
    </>
  );
}
