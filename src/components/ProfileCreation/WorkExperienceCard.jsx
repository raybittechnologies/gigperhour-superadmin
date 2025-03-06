

/* eslint-disable react/prop-types */
import { Pencil, Trash2 } from "lucide-react";

const WorkExperienceCard = ({ experience }) => {
  return (
    <div className="bg-white text-black shadow-sm rounded-lg p-4 border border-gray-300 flex flex-col gap-2 w-[440px] h-[191px]">
      {/* Header: Company Name & Dates */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-lg">
            <img src="src/assets/briefcase.svg" />
          </span>{" "}
          {/* Placeholder for an icon */}
          <h3 className="text-lg font-semibold">{experience.company}</h3>
        </div>
        <p className="text-sm text-gray-500">
          {new Date(experience.startDate).toLocaleString("default", {
            month: "short",
            year: "numeric",
          })}{" "}
          -{" "}
          {experience.workingHere
            ? "Present"
            : new Date(experience.endDate).toLocaleString("default", {
                month: "short",
                year: "numeric",
              })}
        </p>
      </div>

      {/* Job Role */}
      <p className="text-gray-700 text-sm font-medium">UI/UX</p>

      {/* Description */}
      <p className="text-gray-600 text-sm">{experience.description}</p>

      {/* Action Icons */}
      <div className="flex gap-3 mt-2 text-gray-500">
        <Pencil size={16} className="cursor-pointer hover:text-gray-700" />
        <Trash2 size={16} className="cursor-pointer hover:text-gray-700" />
      </div>
    </div>
  );
};

export default WorkExperienceCard;
