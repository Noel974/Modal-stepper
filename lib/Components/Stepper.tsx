import React, { ReactNode } from 'react';

interface Step {
  label: string;
  content: ReactNode;
}

interface StepperProps {
  steps: Step[];
  activeStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => {
  return (
    <div>
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className={`step ${index <= activeStep ? 'active' : ''}`}>
            {step.label}
          </div>
        ))}
      </div>
      <div className="step-content">
        {steps[activeStep].content}
      </div>
    </div>
  );
};

export default Stepper;
