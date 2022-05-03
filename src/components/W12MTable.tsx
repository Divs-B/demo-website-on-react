import React from "react";
import TableItem from "./W12MTableItem";
import TableStruct from "../data/table-struct";
import Misdeamnour from "./W12MMisdeamForm";

interface TableProps {
  tabledata: Array<TableStruct>;
}

export const Table: React.FC<TableProps> = ({ tabledata }: TableProps) => {
  return (
    <div className="table__container">
      <table>
        <tbody>
          <tr className="table__header">
            <td>
              <h4>Citizen ID</h4>
            </td>
            <td>
              <h4>Misdemeanour</h4>
            </td>
            <td>
              <h4>Date</h4>
            </td>
            <td>
              <h4>Punishment Idea</h4>
            </td>
          </tr>
          {tabledata.map((item) => {
            return (
              <TableItem
                citizenId={item.citizenId}
                date={item.date}
                misdemeanour={item.misdemeanour}
                imagesrc={item.imagesrc}
              ></TableItem>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
