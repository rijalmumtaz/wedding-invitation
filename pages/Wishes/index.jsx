import React from "react";

import { wishes } from "@/json/wishesPage";
import Card from "@/elements/Card";

export default function WishesPage() {
  return (
    <div className="flex flex-col items-center bg-cover-bg bg-cover">
      <h1 className="text-3xl bg-white-bg w-full text-center py-3 font-rozha-one fixed shadow-xl">
        Ucapan dan Doa
      </h1>
      <div className="flex flex-col items-center px-5 pb-5 gap-4 mt-20">
        {wishes.map((wish, index) => {
          return (
            <Card
              data={wish}
              key={`wish-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}
