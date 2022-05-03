import { Routes, Route } from "react-router-dom";
import W12MForm from "./components/W12MForm";
import W12MHomeForm from "./components/W12MHomeForm";
import W12MMisdeamForm from "./components/W12MMisdeamForm";
import W12MConfessionForm from "./components/W12MConfessionForm";

const Router = () => (
  <Routes>
    <Route path="/" element={<W12MForm />}>
      <Route index element={<W12MHomeForm />} />
      <Route path="misdeamnour" element={<W12MMisdeamForm />} />
      <Route path="confession" element={<W12MConfessionForm />} />
      <Route path="*" element={<p>Page 404</p>} />
    </Route>
  </Routes>
);

export default Router;
