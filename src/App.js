import React, { useState } from 'react';
import Steptwo from './components/Step-two';
import Stepthree from './components/Step-three';
import Stepfour from './components/Step-four';
import Stepone from './components/step-one';
import './App.css';
function MultiStepForm() {

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleBackStep = () => {
    setCurrentStep(currentStep - 1);
  };
  switch (currentStep) {
    case 1:
      return <Stepone handleNextStep={handleNextStep}  />;
    case 2:
      return <Steptwo handleNextStep={handleNextStep} handleBackStep={handleBackStep}  />;
    case 3:
      return <Stepthree handleNextStep={handleNextStep} handleBackStep={handleBackStep}  />;
    case 4:
      return <Stepfour handleBackStep={handleBackStep}  />;
    default:
      return null;
  }
}

export default MultiStepForm;