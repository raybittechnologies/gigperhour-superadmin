import { useEffect, useState } from "react";
import { getWorkCategories } from "../../utils/api";
import SubWorkCategories from "../../components/SubWorkCategories";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [subCat, setSubCat] = useState();

  useEffect(() => {
    getWorkCategories().then(
      (data) => {
        setCategories(data.data.data);
      },
      () => {}
    );
  }, []);

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-1/4 p-4 bg-gray-100 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              onClick={() => setSubCat(category.id)}
              key={category.id}
              className="bg-white p-3 rounded-lg shadow hover:bg-gray-200 transition duration-200 cursor-pointer"
            >
              <span className="text-gray-800 font-medium">
                {category.title}
              </span>
              <ul className="ml-4 mt-2 text-sm text-gray-600">
                {category.specialities?.map((speciality) => (
                  <li key={speciality.id} className="py-1">
                    - {speciality.label}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Sidebar */}
      {subCat ? (
        <SubWorkCategories id={subCat} />
      ) : (
        <p>Click on a category to view sub cats</p>
      )}
    </div>
  );
};

export default Categories;
