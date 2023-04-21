import React, { useEffect } from "react";
import Image from "next/image";
import FooterCover from "./FooterCover";
import Button from "@/elements/Button";

export default function Cover() {
  // max-[410px]:mt-0
  return (
    <div className="overflow-x-hidden">
      {/* <style
        global
        jsx
      >{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style> */}
      <div className=" flex flex-col bg-cover-bg bg-cover bg-center h-screen ">
        <div className="relative mt-44 ">
          <Image
            className="absolute left-16"
            src="/images/&.svg"
            alt="Picture of the author"
            width={300}
            height={300}
          />
          <div className="relative left-24 top-10">
            <p className="font-kapakana text-[102px] absolute text-white opacity-75">
              Itmam
            </p>
            <p className="font-kapakana text-[102px] absolute text-white opacity-75 top-16 left-20">
              Iis
            </p>
          </div>
        </div>
        <div className=" self-center mt-auto mb-[53px] z-0">
          <Button
            type="link"
            href="/Invitation"
            isOutline
            isBase
            className="border-white text-white"
          >
            Open Invitation
          </Button>
        </div>
        <footer>
          <FooterCover />
        </footer>
      </div>
    </div>
  );
}
