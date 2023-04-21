import Invitation from "@/parts/Invitation";
import React, { useState, useEffect } from "react";

export default function InvitationPage() {
  const [data, setData] = useState({
    nickname: "",
    wish: "",
  });

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

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Invitation
      data={data}
      onChange={onChange}
    ></Invitation>
  );
}
