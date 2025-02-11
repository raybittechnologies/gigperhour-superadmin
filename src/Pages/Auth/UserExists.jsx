import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserExists = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, [navigate]);

  return <div>Account Exists</div>;
};

export default UserExists;
