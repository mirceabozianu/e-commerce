import { useState } from "react";

export const useInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const onChange = (event) => {
    setEnteredValue(event.target.value);
  };
  const onBlur = () => {
    setIsTouched(true);
  };
  return {
    value: enteredValue,
    isTouched,
    onChange,
    onBlur,
  };
};
