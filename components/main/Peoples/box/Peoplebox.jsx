import React, { useEffect } from "react";

export default function Peoplebox({ data, index }) {
  return (
    <div className="border rounded-[8px] h-[250px] text-center w-[187px] bg-secondary cursor-move">
      <div className="flex justify-center py-2 mt-10">
        <div className="border-primary border-2 mb-2 rounded-full text-center h-[65px] w-[65px] bg-white">
          <img src={data.img} className="h-13 rounded-full" />
        </div>
      </div>
      <div>
        <p className="text-gray-50 px-4">
          See updates from your team keep work on track
        </p>
      </div>
    </div>
  );
}
