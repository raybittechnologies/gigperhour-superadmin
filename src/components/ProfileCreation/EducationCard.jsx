/* eslint-disable react/prop-types */
const EducationCard = ({ qualification }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">
        {qualification.school}
      </h3>
      <p className="text-sm text-gray-600">
        {qualification.degree} in {qualification.fieldOfStudy}
      </p>

      <div className="mt-2 text-sm text-gray-700">
        <p>
          <span className="font-medium">Start Date:</span>{" "}
          {new Date(qualification.startDate).toLocaleDateString()}
        </p>
        <p>
          <span className="font-medium">End Date:</span>{" "}
          {qualification.endDate
            ? new Date(qualification.endDate).toLocaleDateString()
            : "Ongoing"}
        </p>
        <p>
          <span className="font-medium">Description:</span>{" "}
          {qualification.description}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
