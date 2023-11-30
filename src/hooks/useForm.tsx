import { useState, ChangeEvent } from 'react';

interface FormData {
  title: string;
  description: string;
  selectedDate: string;
  status: string;
}

interface FormErrors {
  title: string;
  description: string;
  selectedDate: string;
}

interface FormHook {
  formData: FormData;
  formErrors: FormErrors;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  validateForm: () => boolean;
}

const useForm = (initialState: FormData): FormHook => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    title: '',
    description: '',
    selectedDate: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: FormErrors = { title: '', description: '', selectedDate: '' };

    if (formData.title.trim() === '' || formData.title.length > 15) {
      newErrors.title = 'Title is required and should be less than 15 characters';
      valid = false;
    }

    if (formData.description.trim() === '' || formData.description.length > 80) {
      newErrors.description = 'Description is required and should be less than 80 characters';
      valid = false;
    }

    if (!formData.selectedDate) {
      newErrors.selectedDate = 'Please select a date';
      valid = false;
    }

    setFormErrors(newErrors);

    return valid;
  };

  return {
    formData,
    formErrors,
    handleChange,
    validateForm,
  };
};

export default useForm;