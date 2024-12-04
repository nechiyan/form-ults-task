import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateField } from "../../../store/store";
import { z } from "zod";
import { Form } from "../form";
import { Button } from "@/components/ui/button";
import { Input } from "../input";
import { Label } from "../label";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
});

const FirstSection = ({ onNext }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validate = () => {
    try {
      schema.parse({ name, email });
      setErrors({});
      return true;
    } catch (err) {
      const formattedErrors = err.errors.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {});
      setErrors(formattedErrors);
      return false;
    }
  };

  const handleNext = () => {
    if (validate()) {
      dispatch(updateField({ field: "name", value: name }));
      dispatch(updateField({ field: "email", value: email }));
      onNext();

      console.log("Name:", name); // Log name value
      console.log("Email:", email);
      console.log("Dispatched updates for name and email.");
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 mb-4 block w-full rounded-md border-gray-300 shadow-sm"
          />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <Button
        onClick={handleNext}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Next
      </Button>
    </Form>
  );
};

export default FirstSection;
