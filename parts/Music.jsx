import React, { useEffect, useState } from "react";
import { Howl, Howler } from "howler";
import { RiMusicFill } from "react-icons/ri";

import Button from "@/elements/Button";

export default function Music() {
  const [animation, setAnimation] = useState(true);
  const [sound, setSound] = useState(
    new Howl({
      src: ["/audios/Rey Mbayang  Di Sepertiga Malam.mp3"],
      // autoplay: true,
      volume: 0.3,
      html5: true,
      loop: true,
      onend: function () {
        console.log("Finished!");
      },
    })
  );

  useEffect(() => {
    sound.play();
  }, []);

  const togglePlay = () => {
    if (sound.playing()) {
      sound.pause();
      setAnimation(false);
    } else {
      sound.play();
      setAnimation(true);
    }
  };

  return (
    <div className="relative">
      <Button
        id="audio"
        type="button"
        isBase
        isPrimary
        className={`fixed bg-brown h-14 w-14 rounded-[500%] z-20 bottom-5 right-5 shadow-lg ${
          animation && "animate-spin"
        }`}
        onClick={togglePlay}
      >
        <img
          className="w-6 h-w-6"
          src="/images/music_note.svg"
          alt="music"
        />
      </Button>
    </div>
  );
}
