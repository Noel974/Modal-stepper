import React, { ReactNode } from 'react';
interface Step {
    label: string;
    content: ReactNode;
}
interface StepperProps {
    steps: Step[];
    activeStep: number;
}
declare const Stepper: React.FC<StepperProps>;
export default Stepper;
