/* eslint-disable react/prop-types */
const BottomNav = ({ onNext, onBack }) => {
  return (
    <div className="flex justify-between mt-4">
      <button onClick={onBack} className=" w-[200px]">
        Back
      </button>
      <button
        onClick={onNext}
        className="bg-[#E66D3D] text-white px-6 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default BottomNav;
