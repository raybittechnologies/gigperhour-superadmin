import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AccountSuccess = () => {
  const [darkMode] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/about"); // Redirect to /about after 3 seconds
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`min-h-screen z-20 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="container text-center">
        <div className="flex justify-center mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/0b16/a4b7/db86a8a9b6520f628506a6b12ea699c6?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s97RoXYvSmm3dZH9gXnNpOazJ5UEjvS0wMTc4yL8wPw6U8-ZGa5s3jQLidrMS8cPAPSoMQKyU3MSjnlsurax~y5l0ou6b~B-ZtB7pIjw1ofVn3ERzguoQE1e66rf~wmxPkBoR45kF8V-8cpOio82qTz6Z6SVZuXyyZXKnTUmQ-ORdh0CCGcsg22~P7Ks~EPWUMosoDZT886Y0UCsEVI-6D92Jz1qDSsydjAfKxF6WUmBO5cjtBSKls2OvQzgxwM2h4wxQk581IYrnEAdct06lgZUgg8sykY0IopjrZsuJOxHRx0OpDwR4CjGDa4Pnyqv9jFY~YOflKprQSLNd4ifwg__"
            alt="Success Animation"
            className="w-[500px] h-[388px]"
          />
        </div>
        <h2 className="text-lg md:text-xl font-semibold">
          Congratulations, your account has been successfully created..!
        </h2>
        <p className="text-sm mt-2">Redirecting you...</p>
      </div>
    </div>
  );
};

export default AccountSuccess;
