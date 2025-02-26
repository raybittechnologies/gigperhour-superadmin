import Navbar from "../../components/Navbar";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
      {/* Hero Section */}
      <div className="flex-grow bg-blue-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Find the perfect freelance services for your business
          </h1>
          <p className="text-xl text-blue-700 mb-8">
            Connect with talented freelancers and get your work done
            efficiently.
          </p>
          <div className="flex justify-center space-x-4">
            <input
              type="text"
              placeholder="What service are you looking for?"
              className="w-1/3 px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Elevance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
