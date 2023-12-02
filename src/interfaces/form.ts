import { ChangeEvent } from "react";

export interface FormData {
  title: string;
  description: string;
  selectedDate: string;
  status: "todo" | "completed" | "in progress";
}

export interface FormErrors {
  title: string;
  description: string;
  selectedDate: string;
}

export interface FormHook {
  formData: FormData;
  formErrors: FormErrors;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  validateForm: () => boolean;
}
