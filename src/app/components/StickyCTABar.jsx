import React from "react";
import CTAButton from "./CTAButton";

const StickyCTABar = () => (
  <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-[#181818] border-t border-[#222] flex justify-center items-center py-3 px-4 shadow-lg">
    <CTAButton>Book Free Strategy Call</CTAButton>
  </div>
);

export default StickyCTABar;
