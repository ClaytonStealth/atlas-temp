import React from "react";
import atlas_w_nobg from "./assets/atlas-white-nobg-bgr.png";

const TopBar = () => {
  return (
    <div className="flex fixed justify-start px-4 py-2 w-full z-[2]">
      <div className="flex items-center">
        <img
          src={atlas_w_nobg}
          alt="/"
          className="text-white h-14 w-14 sm:h-20 sm:w-20"
        />
      </div>
    </div>
  );
};

export default TopBar;
