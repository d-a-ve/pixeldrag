import { toast } from "react-toastify";

export function toastError(errorMessage: string) {
  toast.error(errorMessage);
}

export function toastSuccess(errorMessage: string) {
  toast.success(errorMessage);
}
