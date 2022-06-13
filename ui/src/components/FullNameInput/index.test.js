import { render, fireEvent } from "@testing-library/react";

import FullNameInput from "./";

test("renders FullNameInput", () => {
  const fullName = "";
  const handleFullNameChange = jest.fn(() => {});

  const { getByPlaceholderText } = render(
    <FullNameInput
      fullName={fullName}
      handleFullNameChange={handleFullNameChange}
    />
  );

  expect(getByPlaceholderText("Full Name")).toBeInTheDocument();
});

test("updates on input change", () => {
  let fullName = "";
  const handleFullNameChange = jest.fn((e) => {
    fullName = e.target.value;
  });

  const { getByTestId } = render(
    <FullNameInput
      fullName={fullName}
      handleFullNameChange={handleFullNameChange}
    />
  );
  const inputElement = getByTestId("full-name-testid");
  const newFullName = "new full name";
  fireEvent.change(inputElement, { target: { value: newFullName } });

  expect(handleFullNameChange).toHaveBeenCalledTimes(1);
  expect(fullName).toBe(newFullName);
});
