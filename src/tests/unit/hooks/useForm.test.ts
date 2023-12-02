import { render, fireEvent, renderHook, act } from "@testing-library/react";
import useForm from "../../../hooks/useForm";

describe("useForm", () => {
  it("should update form data on input change", () => {
    const { result } = renderHook(() =>
      useForm({ title: "", description: "", selectedDate: "", status: "todo" })
    );

    const mockEvent = {
      target: { name: "title", value: "New Title" },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(mockEvent);
    });

    expect(result.current.formData.title).toBe("New Title");
  });

  it("should validate form and update errors", () => {
    const { result } = renderHook(() =>
      useForm({ title: "", description: "", selectedDate: "", status: "todo" })
    );

    act(() => {
      result.current.validateForm();
    });

    expect(result.current.formErrors.title).toBe(
      "Title is required and should be less than 12 characters"
    );
    expect(result.current.formErrors.description).toBe(
      "Description is required and should be less than 40 characters"
    );
    expect(result.current.formErrors.selectedDate).toBe("Please select a date");
  });
});
