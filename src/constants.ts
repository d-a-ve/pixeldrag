export const errorCodes = [
  {
    code: "INVALID_LOGIN_CREDENTIALS",
    error: "auth/invalid-login-credentials",
    display:
      "Your login credentials are invalid. Please double-check your email and password and try again.",
  },
  {
    code: "CREDENTIAL_ALREADY_IN_USE",
    error: "auth/credential-already-in-use",
    display:
      "This credential is already in use. Please choose a different one.",
  },
  {
    code: "CREDENTIAL_MISMATCH",
    error: "auth/custom-token-mismatch",
    display: "There is an issue with the provided token. Please try again.",
  },
  {
    code: "EMAIL_EXISTS",
    error: "auth/email-already-in-use",
    display: "This email is already registered. Please use a different email.",
  },
  {
    code: "INTERNAL_ERROR",
    error: "auth/internal-error",
    display: "An internal error occurred. Please try again later",
  },
  {
    code: "INVALID_APP_CREDENTIAL",
    error: "auth/invalid-app-credential",
    display:
      "The app's credential is invalid. Please check your app configuration.",
  },
  {
    code: "INVALID_AUTH",
    error: "auth/invalid-user-token",
    display: "Invalid user token. Please sign in again.",
  },
  {
    code: "INVALID_AUTH_EVENT",
    error: "auth/invalid-auth-event",
    display: "Invalid authentication event. Please try again.",
  },
  {
    code: "INVALID_EMAIL",
    error: "auth/invalid-email",
    display: "The provided email is invalid. Please enter a valid email.",
  },
  {
    code: "INVALID_IDP_RESPONSE",
    error: "auth/invalid-credential",
    display: "Invalid identity provider response. Please try again.",
  },
  {
    code: "INVALID_PASSWORD",
    error: "auth/wrong-password",
    display: "Incorrect password. Please check and try again.",
  },
  {
    code: "NEED_CONFIRMATION",
    error: "auth/account-exists-with-different-credential",
    display:
      "An account with this email already exists with a different sign-in method.",
  },
  {
    code: "NETWORK_REQUEST_FAILED",
    error: "auth/network-request-failed",
    display: "Network request failed. Please check your internet connection.",
  },
  {
    code: "REJECTED_CREDENTIAL",
    error: "auth/rejected-credential",
    display: "The provided credential is rejected. Please try again.",
  },
  {
    code: "TENANT_ID_MISMATCH",
    error: "auth/tenant-id-mismatch",
    display: "Tenant ID mismatch. Please check your configuration.",
  },
  {
    code: "TIMEOUT",
    error: "auth/timeout",
    display: "Request timed out. Please try again later.",
  },
  {
    code: "TOKEN_EXPIRED",
    error: "auth/user-token-expired",
    display: "Your session has expired. Please sign in again.",
  },
  {
    code: "TOO_MANY_ATTEMPTS_TRY_LATER",
    error: "auth/too-many-requests",
    display: "Too many sign-in attempts. Please try again later.",
  },
  {
    code: "USER_DELETED",
    error: "auth/user-not-found",
    display: "User not found. Please check your credentials.",
  },
  {
    code: "USER_DISABLED",
    error: "auth/user-disabled",
    display: "This account has been disabled. Please contact support.",
  },
  {
    code: "USER_MISMATCH",
    error: "auth/user-mismatch",
    display: "User mismatch error. Please sign in again.",
  },
  {
    code: "USER_SIGNED_OUT",
    error: "auth/user-signed-out",
    display: "You have been signed out. Please sign in again.",
  },
  {
    code: "WEAK_PASSWORD",
    error: "auth/weak-password",
    display: "Your password is too weak. Please choose a stronger password.",
  },
];
