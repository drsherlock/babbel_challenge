import { render, fireEvent } from "@testing-library/react";

import GuessButton from "./";

test("renders GuessButton", () => {
  const handleGuessClick = jest.fn(() => {});

  const { getByText } = render(
    <GuessButton handleGuessClick={handleGuessClick} />
  );

  expect(getByText("Guess")).toBeInTheDocument();
});

test("updates on input change", () => {
  const handleGuessClick = jest.fn(() => {});

  const { getByTestId } = render(
    <GuessButton handleGuessClick={handleGuessClick} />
  );
  const buttonElement = getByTestId("guess-button-testid");
  fireEvent.click(buttonElement);

  expect(handleGuessClick).toHaveBeenCalledTimes(1);
});
