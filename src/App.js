import { Fragment, useState } from "react";
import "./App.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <Fragment>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              bgColor={"#7950f2"}
              textColor={"#fff"}
              handleClick={handlePrevious}
            >
              👈Previous
            </Button>
            <Button
              handleClick={handleNext}
              bgColor={"#7950f2"}
              textColor={"#fff"}
            >
              Next👉
            </Button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

function Button({ handleClick, bgColor, textColor, children }) {
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}

export default App;
