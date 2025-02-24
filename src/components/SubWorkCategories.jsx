/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getSpecialitiesByCategory, updateProfile } from "../utils/api";
import BottomNav from "./BottomNav";
import { useNavigate } from "react-router-dom";

const SubWorkCategories = ({ id, alreadySelected }) => {
  const [subCats, setSubCats] = useState([]);
  const [selectedSubCats, setSelectedSubCats] = useState(alreadySelected[0]);
  const navigate = useNavigate();

  useEffect(() => {
    getSpecialitiesByCategory(id).then(
      (res) => {
        setSubCats(res.data.data.specialities);
      },
      () => {}
    );
  }, [id]);

  const handleSubCatSelect = (e) => {
    const subCat = e.target.value;
    if (e.target.checked) {
      if (selectedSubCats.length >= 3) return;
      setSelectedSubCats((state) => {
        let tempState = [...state];

        return [...tempState, subCat];
      });
    }
    if (!e.target.checked) {
      if (selectedSubCats.includes(subCat)) {
        setSelectedSubCats((state) => {
          let tempState = [...state];
          tempState = tempState.filter((el) => el !== subCat);
          return tempState;
        });
      }
    }
  };

  const handleSubmit = () => {
    updateProfile({
      services: { [id]: selectedSubCats },
      profile_step: 4,
    }).then(
      () => {
        navigate("/skills");
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
            checked={selectedSubCats && selectedSubCats.includes(el.id)}
            onChange={handleSubCatSelect}
          />
          <span>{el.label}</span>
        </label>
      ))}

      <BottomNav onNext={handleSubmit} />
    </div>
  );
};

export default SubWorkCategories;
