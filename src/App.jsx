// // src/App.jsx
// import { useState } from 'react';
// import { Button } from "@/components/ui/button"

import './App.css';
// import CustomForm from './components/form/CustomForms';
// import LoginForm from './components/form/LoginForm';
// // import { Form } from './components/ui/form';
// // import {ProfileForm} from './components/ui/form/ProfileForm'
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Register on Form</h1>
//         {/* <Button >Click Me</Button> */}
//         {/* <CustomForm/> */}
//         <LoginForm/>
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import FirstSection from "../src/components/form/formparts/FirstSection";
import SecondSection from "../src/components/form/formparts/SecondSection";
import ThirdSection from "../src/components/form/formparts/ThirdSection";
import LoginForm from './components/form/LoginForm';

const App = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  return (
    <Provider store={store}>
      {/* <LoginForm/> */}
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border">
        {step === 1 && <FirstSection onNext={handleNext} />}
        {step === 2 && <SecondSection onNext={handleNext} onPrev={handlePrev} />}
        {step === 3 && <ThirdSection onPrev={handlePrev} />}
      </div>
    </Provider>
  );
};

export default App;
