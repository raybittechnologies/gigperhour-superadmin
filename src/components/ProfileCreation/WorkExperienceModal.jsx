/* eslint-disable react/prop-types */
import { useState } from "react";
import { X } from "lucide-react";

const WorkExperienceModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    country: "",
    workingHere: false,
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black text-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[630px] h-[580px]">
        <div className="flex justify-between items-center mb-4 mt-[-14px]">
          <h3 className="text-[24px]  font-[400] font-inter">
            Add Work Experience
          </h3>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        {/* <hr className="border-0 border-b border-gray-600 w-full" /> */}

        {/* Company */}
        <label className="block text-[15px] font-[400] font-inter mb-1">
          Company <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 border border-[#555555] rounded mb-2  placeholder:text-[14px] placeholder:font-normal placeholder:text-[#555555] placeholder:font-inter  focus:border-[#E66D3D] focus:outline-none"
          placeholder="Enter Text"
          required
        />

        {/* Role */}
        <label className="block text-[15px] font-[400] font-inter mb-1">
          Role <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 border border-[#555555] rounded mb-2  placeholder:text-[14px] placeholder:font-normal placeholder:text-[#555555] placeholder:font-inter focus:border-[#E66D3D] focus:outline-none"
          placeholder="Enter Text"
          required
        />

        {/* Location */}
        <label className="block text-[15px] font-[400] font-inter mb-1">
          Location
        </label>

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border border-[#555555] rounded mb-2    placeholder:text-[14px] placeholder:font-normal placeholder:text-[#555555] placeholder:font-inter focus:border-[#E66D3D] focus:outline-none"
          placeholder="Enter City"
        />

        {/* Checkbox */}
        <label className="block font-inter font-[400] mt-3 flex items-center">
          <input
            type="checkbox"
            name="workingHere"
            checked={formData.workingHere}
            onChange={handleChange}
            className="mr-2"
          />
          I am currently working in this role
        </label>

        {/* Start & End Dates */}
        <div className="flex gap-4 mt-3">
          <div className="w-1/2">
            <label className="block text-[15px] font-[400] font-inter mb-1">
              Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-2 border border-[#555555] rounded mb-2  text-[#555555] text-[14px] focus:border-[#E66D3D] focus:outline-none"
              required
            />
          </div>

          {!formData.workingHere && (
            <div className="w-1/2">
              <label className="block text-[15px] font-[400] font-inter mb-1">
                End Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full p-2 border border-[#555555] rounded mb-2 text-[#555555] text-[14px] focus:border-[#E66D3D] focus:outline-none"
              />
            </div>
          )}
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

export default WorkExperienceModal;
