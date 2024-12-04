import React from "react";
import { useSelector } from "react-redux";

const ThirdSection = ({ onPrev }) => {
  const formData = useSelector((state) => state.form);

  return (
    <div >
      <h2 className="text-center text-xl font-bold">Summary</h2>
      <ul className="mt-4 space-y-2">
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
      <button
        onClick={onPrev}
        className="mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        Back
      </button>
    </div>
  );
};

export default ThirdSection;
