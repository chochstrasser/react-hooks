import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/useCallback">
          useCallback
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/useMemo">
          useMemo
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
