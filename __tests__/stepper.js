import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "@/elements/Button";
import Stepper, { Controller, MainContent } from "@/elements/Stepper";

export default function StepperTest() {
  const steps = {
    cover: {
      content: <p aria-label="cover">cover</p>,
    },
    main: {
      content: <p aria-label="main">isi</p>,
    },
  };
  return (
    <Stepper steps={steps}>
      {(currentStep, steps, prevStep, nextStep) => (
        <>
          <MainContent
            data={steps}
            current={currentStep}
          />

          {currentStep === "cover" && (
            <Controller>
              <Button
                type="button"
                isBase
                isOutline
                onClick={nextStep}
              >
                next
              </Button>
            </Controller>
          )}
        </>
      )}
    </Stepper>
  );
}

const setup = () => {
  const utils = render(<StepperTest></StepperTest>);
  const button = utils.getByLabelText("button");

  return { ...utils, utils, button };
};

test("should go to next step", () => {
  const { button, utils } = setup();

  screen.debug();
  fireEvent.click(button, { button: 1 });
  const currentstep = utils.getByLabelText("main");
  screen.debug();

  expect(currentstep).toBeInTheDocument();
});
