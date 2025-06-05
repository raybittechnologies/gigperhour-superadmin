/* eslint-disable react/prop-types */

import { IoIosArrowDropleft } from "react-icons/io";
const BottomNav = ({ onNext, onBack }) => {
  return (
    <div className="flex justify-between mt-4">
      <button onClick={onBack}>
        {/* Mobile (icon) */}
        <span className="sm:hidden">
          <IoIosArrowDropleft className="text-3xl mt-1 text-[#E66D3D]" />
        </span>
        {/* Small screens and up (text) */}
        <span className="hidden sm:inline  border border-[#E66D3D]  px-6 py-2 rounded-[5px] w-[120px]">
          Back
        </span>
      </button>
      <button
        onClick={onNext}
        className="bg-[#E66D3D] text-white px-6 py-2 rounded-[5px] w-[120px]"
      >
        Next
      </button>
    </div>
  );
};

export default BottomNav;
