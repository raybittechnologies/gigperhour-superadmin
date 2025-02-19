/* eslint-disable react/prop-types */
const BottomNav = ({ onNext, onBack }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-between bg-gray-800 text-white p-4">
      <button
        onClick={onBack}
        className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700"
      >
        Back
      </button>
      <button
        onClick={onNext}
        className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default BottomNav;
