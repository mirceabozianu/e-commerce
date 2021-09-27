import { useState } from "react";

export const useInput = (validators = []) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [errors, setErrors] = useState([]);

  const runValidators = () => {
    const errors = validators
      .map(
        (validator) =>
          typeof validator === "function" && validator(enteredValue)
      )
      .filter(Boolean);
    setErrors(errors);
  };

  const onChange = (event) => {
    setEnteredValue(event.target.value);
    runValidators();
  };
  const onBlur = () => {
    setIsTouched(true);
    runValidators();
  };
  const resetInput = () => {
    setEnteredValue("");
  };
  return {
    value: enteredValue,
    isTouched,
    onChange,
    onBlur,
    resetInput,
    errors,
  };
};
