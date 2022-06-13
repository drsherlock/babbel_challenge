import { render } from "@testing-library/react";

import EmailGuess from "./";

test("renders EmailGuess", () => {
  const emailGuess = { email: "test@mail.com" };

  const { getByText } = render(<EmailGuess emailGuess={emailGuess} />);

  expect(getByText(emailGuess.email)).toBeInTheDocument();
});
