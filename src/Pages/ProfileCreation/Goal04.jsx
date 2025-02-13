
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../utils/api";

const Goal = () => {
  const navigate = useNavigate();
  const [freelanceGoals, setfreelanceGoal] = useState(null);

  const handleSelection = (e) => {
    setfreelanceGoal(e.target.dataset.level);
  };

  const handleSubmit = () => {
    if (!freelanceGoals) return;
    updateProfile({ freelanceGoals, profile_step: 2 }).then(
      () => {
        navigate("/work-preference");
      },
      (err) => {
        console.error(err);
      }
    );
  };
  return (
    <div className="flex flex-col space-y-3">
      <p>2/10</p>
      {[
        { label: "Primary", value: "primary" },
        { label: "Side", value: "side" },
        { label: "Learning", value: "learning" },
        { label: "Exploring", value: "exploring" },
      ].map((card, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            onChange={handleSelection}
            data-level={card.value}
            type="radio"
            name="experience"
            value={card.value}
            className="w-5 h-5 text-blue-500 focus:ring-blue-500"
          />
          <span className="text-gray-700">{card.label}</span>
        </label>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Goal;
