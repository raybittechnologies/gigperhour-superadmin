import { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../../utils/api";

import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();
  const [freelanceExp, setfreelanceExp] = useState(null);

  useEffect(() => {
    getUserProfile("freelanceExp").then(
      (res) => {
        if (res.data.data && res.data.data.freelanceExp) {
          setfreelanceExp(res.data.data.freelanceExp);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);


  const handleSelection = (e) => {
    setfreelanceExp(e.target.dataset.level);
  };

  const handleSubmit = () => {
    if (!freelanceExp) return;

    updateProfile({ freelanceExp, profile_step: 1 }).then(
      () => {
        navigate("/goal");
      },
      (err) => {
        console.error(err);
      }
    );
  };

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg shadow">
      <p>1/10</p>
      {[
        { label: "I am just starting", value: "new" },
        { label: "I know a little bit", value: "intermediate" },
        { label: "I am an expert", value: "expert" },
      ].map((card, index) => (
        <label
          key={index}
          className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:shadow-md"
        >
          <input
            onChange={handleSelection}
            data-level={card.value}
            name="experience"
            type="radio"
            checked={freelanceExp === card.value}
            value={card.label}
            className="w-5 h-5 text-blue-500 focus:ring-blue-500"
          />
          <span className="text-gray-700">{card.label}</span>
        </label>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Experience;
