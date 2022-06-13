import { render } from "@testing-library/react";

import Error from "./";

test("renders Error", () => {
  const error = "Random error!";

  const { getByText } = render(<Error error={error} />);

  expect(getByText(error)).toBeInTheDocument();
});
