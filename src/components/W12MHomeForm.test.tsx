import { render, screen } from "@testing-library/react";
import Home from "./W12MHomeForm";

test("renders home-form text test", () => {
  render(<Home />);
  const someHomeText = screen.getByText(
    /Welcome to the home of the Justice Department of Fakelandia/i
  );
  expect(someHomeText).toBeInTheDocument();
});
