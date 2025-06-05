export const AllContracts = ({ contracts, darkMode }) => {
  return (
    <>
      {contracts.map((c, idx) => (
        <div
          key={idx}
          className="md:-mx-6 -mx-3 md:px-6 px-3 border-b border-[#555555] py-4 space-y-2"
        >
          <div className="flex-1 space-y-2">
            {/* Title and action buttons together */}
            <div className="flex flex-wrap justify-between items-start gap-4">
              <h2 className="font-semibold underline text-lg">{c.title}</h2>
              <div className="flex items-center   gap-4 [@media(max-width:601px)]:justify-between [@media(max-width:601px)]:w-full">
                <button className="border border-[#E66D3D] px-8 py-1 rounded">
                  Rehire
                </button>
                <button className="w-8 h-8 border border-[#E66D3D] rounded-full text-[#E66D3D] flex items-center justify-center">
                  •••
                </button>
              </div>
            </div>

            {/* Info and ratings */}
            <div className="flex items-center sm:gap-6 lg:gap-40 flex-wrap [@media(max-width:777px)]:justify-between">
              {/* Avatar and name/date/time */}
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

              {/* Rating and budget */}
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
                    className={`ml-1 ${darkMode ? "text-white" : "text-black"}`}
                  >
                    {c.rating.toFixed(1)}
                  </p>
                </div>

                <p className="text-sm underline">
                  {c.showBudget ? (
                    <span>{c.budget}</span>
                  ) : (
                    <>
                      Rate: <span>{c.rate}</span>, {c.weeklyLimit}
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Date range */}
            <p
              className={`text-sm ${
                darkMode ? "text-white" : "text-[#555555]"
              }`}
            >
              {c.dateRange}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
