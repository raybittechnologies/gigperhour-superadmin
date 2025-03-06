/* eslint-disable react/prop-types */
const BottomNav = ({ onNext, onBack }) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={onBack}
        className="border border-[#E66D3D]  px-6 py-2 rounded-[5px] w-[120px]"
      >
        Back
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
