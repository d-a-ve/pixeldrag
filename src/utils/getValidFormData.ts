import { FormEvent } from "react";
import getInputError from "./getInputError";

export default function getValidFormData(e: FormEvent<HTMLFormElement>) {
  const formData = new FormData(e.currentTarget);
  const formFieldValuesObj = Object.fromEntries(formData.entries());
  const formFieldvaluesArr = Object.entries(formFieldValuesObj);
  const isFormValid = formFieldvaluesArr
    .map((field) => getInputError(field[0], field[1] as string))
    .every((value) => value.isValid);
  return {
    formData: formFieldvaluesArr,
    isFormValid,
  };
}
