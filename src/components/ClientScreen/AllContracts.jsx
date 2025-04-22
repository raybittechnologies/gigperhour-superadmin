export const AllContracts = ({ contracts, darkMode }) => {
  return (
    <>
      {contracts.map((c, idx) => (
        <div
          key={idx}
          className=" -mx-6 px-6   border-b-[#555555] space-y-2 border-b border-[#555555] py-4 flex justify-between items-start space-x-6"
        >
          <div className="flex-1 space-y-2">
            <h2 className="font-semibold underline text-lg">{c.title}</h2>
            <div className="flex gap-40 items-center">
              <div className="flex items-center gap-3">
                <img
                  src={c.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p
                    className={`text-[12px] ${
                      darkMode ? "text-white" : "text-[#555555]"
                    }`}
                  >
                    {c.date}
                  </p>
                  <p
                    className={`text-[12px] ${
                      darkMode ? "text-white" : "text-[#555555]"
                    }`}
                  >
                    {c.time}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-[#555555] w-10 h-4 rounded-[2px] flex items-center justify-center text-[10px] text-white">
                    Ended
                  </div>

                  <div className="flex text-[#FCE15A] text-xl">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < c.rating ? "★" : "☆"}</span>
                    ))}
                  </div>

                  <p
                    className={`${darkMode ? "text-white" : "text-black"} ml-1`}
                  >
                    {c.rating.toFixed(1)}
                  </p>
                </div>

                <p className="text-sm  underline">
                  {c.showBudget ? (
                    <span className=" ">{c.budget}</span>
                  ) : (
                    <>
                      Rate: <span className="">{c.rate}</span> ,{"    "}
                      {c.weeklyLimit}
                    </>
                  )}
                </p>
              </div>
            </div>
            <p
              className={`text-sm ${
                darkMode ? "text-white" : "text-[#555555]"
              }`}
            >
              {c.dateRange}
            </p>
          </div>

          <div className="flex items-end gap-6">
            <button className="border border-[#E66D3D] px-8 py-1 rounded">
              Rehire
            </button>
            <button className="w-8 h-8 border border-[#E66D3D] rounded-full text-[#E66D3D] flex items-center justify-center">
              •••
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
