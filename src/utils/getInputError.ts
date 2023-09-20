export default function getInputError(inputType: string, value: string) {
  let errorMessage: string;
  let pattern: RegExp;
  switch (inputType) {
    case "email":
      pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      errorMessage =
        "Invalid email format. Please enter a valid email address e.g example@gmail.com";
      break;
    case "password":
      pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
      errorMessage =
        "Password must contain at least one lowercase letter, one uppercase letter, and one digit with a minimum of 6 characters.";
      break;
    default:
      pattern = /^[A-Za-z]+$/;
      errorMessage = "Please enter a name";
  }

  return { isValid: pattern.test(value), errorMessage };
}
