import { HTMLInputTypeAttribute, useState } from "react";
import getInputError from "@utils/getInputError";

import InputError from "./InputError";

type TInputProps = {
  labelText: string;
  inputType: HTMLInputTypeAttribute;
  labelFor: string;
  required: boolean;
  placeholder?: string;
};

const Input = ({
  labelText,
  inputType,
  labelFor,
  required,
  placeholder,
}: TInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [touched, setTouched] = useState(false);
  const { isValid, errorMessage } = getInputError(labelFor, inputValue);
  const displayError = touched && !isValid;
  const passwordType =
    inputType === "password" && isPasswordShown ? "text" : "password";

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label className="input-label" htmlFor={`${labelFor}-input`}>
          {labelText}
        </label>
      )}

      <div className="relative h-full w-full">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setTouched(true)}
          name={labelFor}
          className="input"
          type={inputType !== "password" ? inputType : passwordType}
          id={`${labelFor}-input`}
          required={required}
          value={inputValue}
          placeholder={placeholder}
        />
        {/* display icon to toggle between password visibility */}
        {inputType === "password" && (
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-black focus:outline-primary-500"
            onClick={() => setIsPasswordShown((prev) => !prev)}
            title={isPasswordShown ? "Password shown" : "Password hidden"}
          >
            <img
              src={`/assets/svg/${
                isPasswordShown ? "eyeIcon" : "eyeSlashedIcon"
              }.svg`}
              alt=""
              className="h-full w-full"
            />
          </span>
        )}
      </div>

      {/* checking for error in inputs */}
      {displayError && (
        <InputError name={labelFor} errorMessage={errorMessage} />
      )}
    </div>
  );
};

export default Input;
