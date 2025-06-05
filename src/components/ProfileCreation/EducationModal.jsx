/* eslint-disable react/prop-types */
import { useState } from "react";
import { X } from "lucide-react";

const EducationModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    school: "",
    fieldOfStudy: "",
    degree: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black text-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[630px] max-h-[85vh] overflow-y-auto mt-12 hide-scrollbar text-[#333333]">
        <div className="flex justify-between items-center mb-4 mt-[-14px]">
          <h3 className="text-[24px]  font-[400] font-inter">
            Add Education History
          </h3>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        {/* <hr className="border-0 border-b border-gray-600 w-full" /> */}

        {/* School*/}
        <label className="block text-[15px] font-[400] font-inter mb-1">
          School <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          name="school"
          placeholder="School Name"
          value={formData.school}
          onChange={handleChange}
          className="w-full p-2 border border-[#555555] rounded mb-2  placeholder:text-[14px] placeholder:font-normal placeholder:text-[#555555] placeholder:font-inter  focus:border-[#E66D3D] focus:outline-none"
        />

        {/* Degree*/}
        <label className="block text-[15px] font-[400] font-inter mb-1">
          Degree
        </label>

        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={handleChange}
          className="w-full p-2 border border-[#555555] rounded mb-2    placeholder:text-[14px] placeholder:font-normal placeholder:text-[#555555] placeholder:font-inter focus:border-[#E66D3D] focus:outline-none"
        />

        {/* field */}
        <label className="block text-[15px] font-[400] font-inter mb-1">
          Field Of Study <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          name="fieldOfStudy"
          placeholder="Field of Study"
          value={formData.fieldOfStudy}
          onChange={handleChange}
          className="w-full p-2 border border-[#555555] rounded mb-2  placeholder:text-[14px] placeholder:font-normal placeholder:text-[#555555] placeholder:font-inter focus:border-[#E66D3D] focus:outline-none"
        />

        {/* Start & End Dates */}
        <div className="flex flex-col md:flex-row gap-4 mt-3 sm:pb-0 pb-3">
          <div className="w-full md:w-1/2">
            <label className="block text-[15px] font-[400] font-inter mb-1">
              Start Year <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="block w-full max-w-full appearance-none h-[42px] px-3 py-2 border border-[#555555] rounded text-[#555555] text-[15px] focus:border-[#E66D3D] focus:outline-none bg-white"
              required
            />
          </div>

          <div className="w-full md:w-1/2">
            <label className="block text-[15px] font-[400] font-inter mb-1">
              End Year <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="block w-full max-w-full appearance-none h-[42px] px-3 py-2 border border-[#555555] rounded text-[#555555] text-[15px] focus:border-[#E66D3D] focus:outline-none bg-white"
            />
          </div>
        </div>

        {/* Description */}
        <label className="block text-[15px] font-[400] font-inter mb-1">
          Enter Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-[#555555] rounded mt-1    placeholder:text-[14px] placeholder:font-normal placeholder:text-[#555555] placeholder:font-inter focus:border-[#E66D3D] focus:outline-none"
          placeholder="Enter text here..."
          required
        />

        {/* Buttons */}
        <div className="flex justify-end mt-2">
          <button onClick={onClose} className="text-black font-[600] mr-[30px]">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-[#E66D3D] w-[112px] text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationModal;
