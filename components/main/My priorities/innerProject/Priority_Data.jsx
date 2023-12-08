import React from "react";


export default function Prioritie_Data({data}) {

  return (
  <div className="w-[100%] flex items-center ">
  <div className="flex w-[100%] lg:py-5 md:py-5 sm:py-5 lg:px-6 md:px-6 sm:px-6 px-4 py-3 items-center justify-between ">
  <div className="flex">
    <img src="/Group.png" className="h-4 w-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 ml-4"/>
    <h1 className="px-2 lg:text-sm md:text-sm sm:text-sm text-[9px]">{data?data.Feedback:'undefined'}</h1>
  </div>
  <div className="flex">
    <div className="bg-primary flex justify-center items-center lg:w-24 md:w-24 sm:w-24 w-16 lg:mx-3 md:mx-3 sm:mx-3 mx-3 h-4 rounded-lg ">
      <p className="text-white lg:text-sm md:text-sm sm:text-sm text-[10px]">{data?data.Name:'undefined'}</p>
    </div>
    <div className="text-primary items-center w-16 text-[10px]">{data?data.Date:'undefined'}</div>
  </div>
</div>
</div>
  );
}
