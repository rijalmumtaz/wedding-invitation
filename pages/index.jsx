import Head from "next/head";

import Cover from "@/parts/Cover";
import Invitation from "@/parts/Invitation";

import React, { useEffect, useState } from "react";

export default function Home(props) {
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod =
      element.requestFullScreen ||
      element.webkitRequestFullScreen ||
      element.mozRequestFullScreen ||
      element.msRequestFullScreen;

    if (requestMethod) {
      // Native full screen.
      requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {
      // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
  }

  useEffect(() => {
    var elem = document.documentElement;
    requestFullScreen(elem);
  });

  return (
    <>
      <Head>
        <title>Undangan Pernikahan - Itmam dan Iis</title>
        <meta
          name="description"
          content="Kamis, 18 Mei 2023 - Pernikahan - Itmam dan Iis"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="./images/wedding-day-svgrepo-com.svg"
        />
      </Head>
      <Cover></Cover>
    </>
  );
}
