import React, { useEffect, useState } from "react";
import generateMisdemeanours from "src/generate_misdemeanours";
import Table from "./W12MTable";
//import axios from "axios";
import generateMisdemeanour, {
  MISDEMEANOURS,
  MisdemPropsTypes,
} from "../generate_misdemeanours";

export const PublicConfessionData = React.createContext<
  Array<MisdemPropsTypes>
>([]);
export const PublicConfessionDataUpdate = React.createContext(([]) => {});

const Misdeamnour: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<Array<MisdemPropsTypes>>(
    []
  );
  const [othermisdemeanours, setOthermisdemeanours] = useState<
    Array<MisdemPropsTypes>
  >([]);

  useEffect(() => {
    generateMisdemeanourss();
  }, []);

  const generateMisdemeanourss = async () => {
    const resp = await generateMisdemeanours(10);
    if (!othermisdemeanours) resp.push(othermisdemeanours[0]);
    setMisdemeanours(resp);
  };

  return (
    <>
      <PublicConfessionData.Provider value={othermisdemeanours}>
        <PublicConfessionDataUpdate.Provider value={setOthermisdemeanours}>
          <Table tabledata={misdemeanours} />
        </PublicConfessionDataUpdate.Provider>
      </PublicConfessionData.Provider>
    </>
  );
};

export default Misdeamnour;
