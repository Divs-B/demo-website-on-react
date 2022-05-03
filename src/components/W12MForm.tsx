import W12MHeader from "./W12MHeader";
import { Outlet } from "react-router";
import W12MFooter from "./W12MFooter";

const W12MForm: React.FC = () => {
  return (
    <>
      <W12MHeader />
      <main className="p-6" style={{ flex: "1" }}>
        <Outlet />
      </main>
      <W12MFooter />
    </>
  );
};

export default W12MForm;
