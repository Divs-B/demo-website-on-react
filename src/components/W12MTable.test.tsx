import { render, screen } from "@testing-library/react";
import Table from "./W12MTable";
import TableStruct from "../data/table-struct";

test("renders table-data test", () => {
  const misdemeanour: Array<TableStruct> = [];
  misdemeanour.push({
    citizenId: 0,
    misdemeanour: "lift",
    date: new Date().toLocaleDateString(),
    imagesrc: "https://picsum.photos/50/50",
  });

  const misdemeanours = {
    tabledata: misdemeanour,
  };

  render(<Table {...misdemeanours} />);
  const misdeam = screen.getByText("lift");
  expect(misdeam).toBeInTheDocument();
});
