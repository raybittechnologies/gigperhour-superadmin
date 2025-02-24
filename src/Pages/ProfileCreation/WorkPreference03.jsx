import { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../../utils/api";

import { useNavigate } from "react-router-dom";

const WorkPreference = () => {
  const navigate = useNavigate();
  const [modeOfWork, setModeOfWork] = useState({});

  useEffect(() => {
    getUserProfile("modeOfWork").then(
      (res) => {
        if (res.data.data && res.data.data.modeOfWork) {
          setModeOfWork(res.data.data.modeOfWork);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  const handleCheck = (e) => {
    const checked = e.target.value;
    setModeOfWork((state) => {
      let prevState = { ...state };
      prevState[checked]
        ? delete prevState[checked]
        : (prevState[checked] = true);
      return { ...prevState };
    });
  };


  const handleSubmit = () => {
    if (Object.keys(modeOfWork).length < 1) return;
    updateProfile({ modeOfWork, profile_step: 3 }).then(
      () => {
        navigate("/categories");
      },
      () => {}
    );
  };

  return (
    <div className="flex flex-col space-y-2">
      <p>3/10</p>
      {[
        { label: "Find", value: "find" },
        { label: "Sell", value: "sell" },
      ].map((item, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            onChange={handleCheck}
            type="checkbox"
            checked={modeOfWork?.[item.value] || false}

            name={item.value}
            value={item.value}
            className="w-5 h-5 text-green-500 focus:ring-green-500"
          />
          <span className="text-gray-700">{item.label}</span>
        </label>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default WorkPreference;
