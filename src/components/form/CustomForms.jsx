import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Button } from "../ui/button";

// Define schema for validation using Zod
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number is required"),
});

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
    },
    mode: "onBlur", // Trigger validation on blur (when the user leaves the field)
  });

  const onSubmit = (data) => {
    setFormData(data);
    setStep(4); // Go to the summary step after submission
  };

  const handleNext = async () => {
    // Validate current step before proceeding
    const isValid = await form.trigger(["name", "email", "address", "phone"][step - 1]);
    if (isValid) {
      if (step < 3) {
        setStep(step + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Multi-Step Form */}
      {step < 4 ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Name and Email */}
            {step === 1 && (
              <>
                <FormItem>
                  <FormControl>
                    <Input {...form.register("name")} placeholder="Enter your name" />
                  </FormControl>
                  <FormMessage className="text-red-500">
                    {form.formState.errors.name?.message}
                  </FormMessage>
                </FormItem>

                <FormItem>
                  <FormControl>
                    <Input
                      {...form.register("email")}
                      type="email"
                      placeholder="Enter your email"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500">
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>

                <Button type="button" variant="default" size="default" className="w-full" onClick={handleNext}>
                  Next
                </Button>
              </>
            )}

            {/* Step 2: Address */}
            {step === 2 && (
              <>
                <FormItem>
                  <FormControl>
                    <Input
                      {...form.register("address")}
                      placeholder="Enter your address"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500">
                    {form.formState.errors.address?.message}
                  </FormMessage>
                </FormItem>

                <Button type="button" variant="default" size="default" onClick={handlePrevious}>
                  Previous
                </Button>
                <Button type="button" variant="default" size="default" onClick={handleNext}>
                  Next
                </Button>
              </>
            )}

            {/* Step 3: Phone Number */}
            {step === 3 && (
              <>
                <FormItem>
                  <FormControl>
                    <Input
                      {...form.register("phone")}
                      placeholder="Enter your phone number"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500">
                    {form.formState.errors.phone?.message}
                  </FormMessage>
                </FormItem>

                <Button type="button" variant="default" size="default" onClick={handlePrevious}>
                  Previous
                </Button>
                <Button type="submit" variant="default" size="default" className="w-full">
                  Submit
                </Button>
              </>
            )}
          </form>
        </Form>
      ) : (
        // Summary Step: Show entered data
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Form Summary</h2>
          <div className="border p-4 rounded-md">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
          </div>

          <Button type="button" variant="default" size="default" className="w-full" onClick={() => setStep(1)}>
            Restart
          </Button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
