import Button from "@/elements/Button";
import React, { useEffect } from "react";
import { Howl, Howler } from "howler";

export default function Music() {
  const sound = new Howl({
    src: ["/audios/Rey Mbayang  Di Sepertiga Malam.mp3"],
    // autoplay: true,
    volume: 0.3,
    onend: function () {
      console.log("Finished!");
    },
  });

  const togglePlay = () => {
    return sound.playing() ? sound.pause() : sound.play();
  };
  return (
    <div className="relative">
      <Button
        type="button"
        isBase
        isPrimary
        className="bg-brown h-16 w-16 rounded-[50%] fixed z-20 bottom-5 right-5"
        onClick={togglePlay}
      ></Button>
    </div>
  );
}
