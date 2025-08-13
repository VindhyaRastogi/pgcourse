import React from "react";
import updatedbrochure_pdf from "./updated_brochure.pdf";
export default function Brochure() {
  return (
    <a href={updatedbrochure_pdf} target="_blank">
      <div className="z-20 -translate-x-[3.6rem] fixed top-1/4 left-0 rotate-[90deg] translate-y-[110%] p-4 rounded-t-lg bg-teal-500 text-white ">
        Download Brochure
      </div>
    </a>
  );
}
