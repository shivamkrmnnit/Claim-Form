import React, { useState } from "react";
import { FaBell, FaUser } from "react-icons/fa";
import "./Header.css";

const steps = [
  { id: 1, label: "01 Preliminary" },
  { id: 2, label: "02 Your Details" },
  { id: 3, label: "03 KYC" },
  { id: 4, label: "04 Parties", time: "Approx 5 Min" },
  { id: 5, label: "05 Claim", time: "Approx 5 Min" },
  { id: 6, label: "06 Review", time: "Approx 5 Min" },
  { id: 7, label: "07 Payment", time: "Approx 5 Min" },
];

const ProgressNavbar = () => {
  const [currentStep, setCurrentStep] = useState(3); // Default current step is 3 for visual consistency

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="progress-navbar" style={{ position: 'relative' }}>
      {/* User and Notification Icons */}
     

      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`step ${currentStep >= step.id ? "active" : ""}`}
          onClick={() => handleStepClick(step.id)}
        >
          <div className="label-top">{step.label}</div>
          <div className={`circle ${currentStep >= step.id ? "completed" : ""}`}></div>
          {step.time && <div className="time">{step.time}</div>}
        </div>
      ))}
      <div
        className="progress-line"
        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressNavbar;
