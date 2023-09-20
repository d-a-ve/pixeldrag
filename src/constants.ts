export const errorCodes = [
  {
    code: "400",
    type: "user_password_mismatch",
    description:
      "Passwords do not match. Please check the password and confirm password.",
    view: "Your passwords do not match. Please ensure they match.",
  },
  {
    code: "401",
    type: "user_blocked",
    description:
      "The current user has been blocked. You can unblock the user by making a request to the User API's 'Update User Status' endpoint or in the Appwrite Console's Auth section.",
    view: "This user is currently blocked. To unblock, use the 'Update User Status' feature in the Appwrite Console or contact support.",
  },
  {
    code: "401",
    type: "user_invalid_credentials",
    description: "Invalid credentials. Please check the email and password.",
    view: "Your email or password is incorrect. Please double-check them.",
  },
  {
    code: "404",
    type: "user_not_found",
    description: "User with the requested ID could not be found.",
    view: "The user with the specified ID could not be found.",
  },
  {
    code: "409",
    type: "user_already_exists",
    description:
      "A user with the same id, email, or phone already exists in this project.",
    view: "A user with the same ID, email, or phone number already exists in this project.",
  },
  {
    code: "409",
    type: "user_email_already_exists",
    description:
      "A user with the same email already exists in the current project.",
    view: "A user with the same email already exists in this project.",
  },
  {
    code: "409",
    type: "user_phone_already_exists",
    description:
      "A user with the same phone number already exists in the current project.",
    view: "A user with the same phone number already exists in this project.",
  },
  {
    code: "429",
    type: "general_rate_limit_exceeded",
    description:
      "Rate limit for the current endpoint has been exceeded. Please try again after some time.",
    view: "You've reached the rate limit for this action. Please wait a moment and try again.",
  },
  {
    code: "500",
    type: "general_server_error",
    description: "An internal server error occurred.",
    view: "Oops! Something went wrong on our end. Please try again later.",
  },
];
