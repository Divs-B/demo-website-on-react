import { render, screen } from "@testing-library/react";
import W12MFooter from "./W12MFooter";

test("renders footer text test", () => {
  render(<W12MFooter />);
  const someFooterText = screen.getByText(/copyright/i);
  expect(someFooterText).toBeInTheDocument();
});
