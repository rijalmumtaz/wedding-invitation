import React, { useEffect } from "react";
import FooterCover from "./FooterCover";
import Button from "@/elements/Button";

export default function Cover({ onClick }) {
  // max-[410px]:mt-0
  return (
    <>
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
      <div className=" flex flex-col bg-cover-bg bg-cover h-full ">
        <div className=" h-full  ">
          <div className="relative mt-52">
            <img
              className="absolute left-24"
              src="/images/&.svg"
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
        </div>
        <div className=" self-center z-0">
          <Button
            type="button"
            isOutline
            isBase
            className="border-white text-white"
            onClick={onClick}
          >
            Open Invitation
          </Button>
        </div>
        {/* <footer className="self-end">
          <FooterCover />
        </footer> */}
      </div>
    </>
  );
}
