import React, { useState } from "react";

import "./styles.css";

const mes = ["Eat", "Sleep", "Code"];

export default function App() {
  const [step, setstep] = useState(1);

  const next = () => {
    if (step < 3) {
      setstep((s) => s + 1);
    }
  };

  const previous = () => {
    if (step > 1) {
      setstep((s) => s - 1);
    }
  };
  return (
    <>
      <div className="container">
        <div className="step">
          <div className="numbers">
            <div className={step >= 1 ? "target numb" : " numb"}>1</div>
            <div className={step >= 2 ? "target numb" : " numb"}>2</div>
            <div className={step >= 3 ? "target numb" : " numb"}>3</div>
          </div>

          <div className="message">
            Step{step} : {mes[step - 1]}
          </div>

          <div className="buttons">
            <button className="previous" onClick={previous}>
              previous
            </button>
            <button className="next" onClick={next}>
              next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
