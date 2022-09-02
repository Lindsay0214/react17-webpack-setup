import { useReducer } from "react";

// 參考
// https://codesandbox.io/s/staging-pine-1hnw4?file=/src/App.js:1459-1787
const initialInput = {
  value: "",
  isTouched: false
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { isTouched: true, value: state.value };
    case "Reset":
      return { isTouched: false, value: "" };
    default:
      return state;
  }
};

const useInputValidate = (validateValue) => {
  const [input, dispatch] = useReducer(inputReducer, initialInput);

  const valueIsValid = validateValue(input.value);
  const hasError = !valueIsValid && input.isTouched;

  const onChangeValue = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const onBlurValue = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: input.value,
    isValid: valueIsValid,
    hasError,
    onChangeValue,
    onBlurValue,
    reset
  };
};

export default useInputValidate;
