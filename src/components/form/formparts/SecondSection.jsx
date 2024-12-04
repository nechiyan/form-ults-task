import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../../../store/store";
import { Form } from "../form";
import { Label } from "../label";
import { Input } from "../input";

const SecondSection = ({ onNext, onPrev }) => {
  const { name } = useSelector((state) => state.form);
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(updateField({ field: "gender", value: gender }));
    dispatch(updateField({ field: "location", value: location }));
    onNext();
  };

  return (
    <div >
      <p className="text-center text-lg">Hello, {name}!</p>
      <Form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <Label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </Label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <Label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </Label>
          <Input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={onPrev}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SecondSection;
