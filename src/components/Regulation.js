import React from "react";
import regulations_pdf from "./Regulations.pdf";
export default function Regulation() {
  return (
    <a href={regulations_pdf} target="_blank">
      <div className="z-20 -translate-x-[3.6rem] fixed top-1/4 left-6 rotate-[90deg] translate-y-1/2 p-4 rounded-t-lg bg-teal-500 text-white ">
        Regulations
      </div>
    </a>
  );
}
