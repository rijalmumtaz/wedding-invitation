import Invitation from "@/parts/Invitation";
import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { giveWish } from "@/store/actions/wish";

function InvitationPage(props) {
  const [data, setData] = useState({
    nickname: "",
    wish: "",
    date: Date(),
  });

  const [message, setMessage] = useState(false);

  console.log(data.date);

  const { wish } = props;

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

  const _Sumbit = () => {
    const payload = new URLSearchParams();

    payload.append("name", data.nickname);
    payload.append("wish", data.wish);
    payload.append("date", data.date);

    props.giveWish(payload).then(() => {
      setMessage(true);
    });
  };

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
      onClick={() => _Sumbit()}
      message={message}
    ></Invitation>
  );
}

const mapStateToProps = (state) => ({
  wish: state.wish,
});

export default connect(mapStateToProps, { giveWish })(InvitationPage);
