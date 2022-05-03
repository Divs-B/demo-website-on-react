import TableStruct from "../data/table-struct";

const TableItem: React.FC<TableStruct> = ({
  citizenId,
  misdemeanour,
  date,
  imagesrc,
}: TableStruct) => {
  return (
    <tr>
      <td>
        <h5>{citizenId}</h5>
      </td>
      <td>
        <h5>{misdemeanour}</h5>
      </td>
      <td>
        <h5>{date}</h5>
      </td>
      <td>
        <img src={imagesrc} alt="picsum image showing punishment" />
      </td>
    </tr>
  );
};

export default TableItem;
