import Nav from "./W12MNav";

const W12MHeader: React.FC = () => (
  <header
    data-testid="headerid"
    className="header has-background-primary is-flex is-align-items-center is-justify-content-center"
  >
    <h1 className="title">FakeLandia Justice Department</h1>
    <Nav />
  </header>
);

export default W12MHeader;
