import React from "react";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 z-50">
      <img src="/loading2.gif" />
    </div>
  );
}
