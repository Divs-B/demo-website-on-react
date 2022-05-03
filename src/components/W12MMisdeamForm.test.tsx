import { render, screen } from "@testing-library/react";
import Misdeamnour from "./W12MMisdeamForm";

test("renders Misdeamnour-form texts test", () => {
  render(<Misdeamnour />);
  const someMisdeamText = screen.getByText(/Citizen ID/i);
  expect(someMisdeamText).toBeInTheDocument();
});
