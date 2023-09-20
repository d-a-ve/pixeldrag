import { errorCodes } from "@constants";

export default function getFirebaseErrorMessage(error: any, altError: string) {
  const errorCode = errorCodes.find((e) => e.error === error);
  const errorMessage = errorCode ? errorCode.display : altError;
  return errorMessage;
}
