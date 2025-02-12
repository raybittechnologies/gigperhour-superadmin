/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getSpecialitiesByCategory, updateProfile } from "../utils/api";

const SubWorkCategories = ({ id }) => {
  const [subCats, setSubCats] = useState([]);
  const [selctedSubCats, setSelectedSubCats] = useState([]);

  useEffect(() => {
    getSpecialitiesByCategory(id).then(
      (res) => {
        setSubCats(res.data.data.specialities);
      },
      () => {}
    );
  }, [id]);

  const handleSubCatSelect = (e) => {
    if (selctedSubCats.length >= 3 && e.target.checked) return;
    const subCat = e.target.value;
    if (e.target.checked)
      setSelectedSubCats((state) =>
        state.includes(subCat)
          ? state.filter((el) => el !== subCat)
          : [...state, subCat]
      );
  };

  const handleSubmit = () => {
    updateProfile(selctedSubCats).then(
      () => {
        console.log("data saved");
      },
      (err) => {
        console.error(err);
      }
    );
  };

  if (subCats.length < 1)
    return (
      <div className="w-3/4 p-4 bg-gray-200 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Details</h2>
        <p className="text-gray-600">No Sub Cat found</p>
      </div>
    );

  return (
    <div className="w-3/4 p-4 bg-gray-200 shadow-lg">
      {subCats.map((el) => (
        <label key={el.id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            value={el.id}
            className="form-checkbox"
            onChange={handleSubCatSelect}
          />
          <span>{el.label}</span>
        </label>
      ))}
    </div>
  );
};

export default SubWorkCategories;
