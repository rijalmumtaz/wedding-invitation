import Head from "next/head";

import Cover from "@/parts/Cover";
import Invitation from "@/parts/Invitation";
import Test from "@/parts/Test";

import Stepper, { Controller, MainContent } from "@/elements/Stepper";
import Button from "@/elements/Button";
import React, { useEffect, useState } from "react";

export default function Home(props) {
  const [data, setData] = useState({
    nickname: "",
    wish: "",
  });

  // function requestFullScreen(element) {
  //   // Supports most browsers and their versions.
  //   var requestMethod =
  //     element.requestFullScreen ||
  //     element.webkitRequestFullScreen ||
  //     element.mozRequestFullScreen ||
  //     element.msRequestFullScreen;

  //   if (requestMethod) {
  //     // Native full screen.
  //     requestMethod.call(element);
  //   } else if (typeof window.ActiveXObject !== "undefined") {
  //     // Older IE.
  //     var wscript = new ActiveXObject("WScript.Shell");
  //     if (wscript !== null) {
  //       wscript.SendKeys("{F11}");
  //     }
  //   }
  // }

  // useEffect(() => {
  //   var elem = document.documentElement;
  //   requestFullScreen(elem);
  // });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const steps = {
    main: {
      content: (
        <Invitation
          data={data}
          onChange={onChange}
        ></Invitation>
      ),
    },
    cover: {
      content: <Test></Test>,
    },
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Stepper steps={steps}>
        {(currentStep, steps, prevStep, nextStep) => (
          <>
            <MainContent
              data={steps}
              current={currentStep}
            />
          </>
        )}
      </Stepper>
    </>
  );
}
