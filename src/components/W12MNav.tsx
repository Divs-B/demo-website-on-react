import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  const activeStyle = {
    textDecoration: "underline",
    color: "blue",
  };
  const normalStyle = {
    color: "purple",
  };

  const activeClassName = "underline";

  return (
    <nav
      className="is-flex is-flex-grow-1 is-align-items-center"
      style={{ width: "100%" }}
    >
      <ul
        style={{ width: "100%" }}
        className="is-flex is-flex-direction-row is-justify-content-space-evenly is-justify-content-space-evenly"
      >
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/misdeamnour"
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            Misdemeanours
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/confession"
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            Confess To Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
