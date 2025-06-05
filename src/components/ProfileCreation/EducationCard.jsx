/* eslint-disable react/prop-types */
import { Pencil, Trash2 } from "lucide-react";

const EducationCard = ({ qualification }) => {
  return (
    <div className="w-[362px] min-h-[176px] sm:min-w-[362px] [@media(max-width:420px)]:w-[300px] bg-white text-black shadow-sm rounded-lg p-4 border border-gray-300 flex flex-col gap-2">
      {/* Header: School Name & Dates */}
      <div className="flex flex-wrap justify-between   ">
        <div className="flex items-center gap-2">
          <span className="text-lg">
            <img src="src/assets/university.svg" alt="Education Icon" />
          </span>
          <h3 className="text-lg font-semibold">
            {qualification?.school || "Unknown School"}
          </h3>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {qualification?.startDate
            ? new Date(qualification.startDate).toLocaleString("default", {
                month: "short",
                year: "numeric",
              })
            : "Unknown"}{" "}
          -{" "}
          {qualification?.endDate
            ? new Date(qualification.endDate).toLocaleString("default", {
                month: "short",
                year: "numeric",
              })
            : "Ongoing"}
        </p>
      </div>

      {/* Degree & Field of Study */}
      <p className="text-gray-700 text-sm font-medium">
        {qualification?.degree || "No Degree"} in{" "}
        {qualification?.fieldOfStudy || "Unknown Field"}
      </p>

      {/* Description */}
      <p className="text-gray-600 text-sm">{qualification?.description}</p>

      {/* Action Icons */}
      <div className="flex gap-3 mt-2 text-gray-500">
        <Pencil size={16} className="cursor-pointer hover:text-gray-700" />
        <Trash2 size={16} className="cursor-pointer hover:text-gray-700" />
      </div>
    </div>
  );
};

export default EducationCard;
