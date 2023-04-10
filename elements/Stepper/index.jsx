import React from "react";
import propTypes from "prop-types";

export default function Stepper(props) {
  const { steps, intialStep } = props;
  const stepKeys = Object.keys(steps);

  const [currentStep, setCurrentStep] = useState(
    // logic when u fill the intialStep, but if u arent fill it, intialStep has undefined value so indexOf(undefined) = -1
    stepKeys.indexOf(intialStep) > -1 ? intialStep : stepKeys[0]
  );

  const totalStep = stepKeys.length;
  const indexCurrentStep = stepKeys.indexOf(currentStep);

  function prevStep() {
    if (+indexCurrentStep > 0) setCurrentStep(stepKeys[indexCurrentStep - 1]);
  }
  function nextStep() {
    if (+indexCurrentStep < totalStep)
      setCurrentStep(stepKeys[indexCurrentStep + 1]);
  }

  return <>{props.children(currentStep, steps, prevStep, nextStep)}</>;
}

Stepper.propTypes = {
  data: propTypes.object.isRequired,
  intialStep: propTypes.string,
};

export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";
