import { errorCodes } from "@constants";

export default function getAppwriteErrorMessage(error: any, altError: string) {
  const errorCode = errorCodes.find((e) => e.description === error);
  const errorMessage = errorCode ? errorCode.view : altError;
  return errorMessage;
}
