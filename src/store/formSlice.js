import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  age: "",
  gender: "",
  address: "",
  mobileNumber: "",
  step: 1,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    nextStep: (state) => {
      if (state.step < 3) state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, nextStep, prevStep, resetForm } = formSlice.actions;

export default formSlice.reducer;
