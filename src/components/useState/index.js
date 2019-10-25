import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import UseStateExampleOne from "./examples/example-one.js";

const UseState = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/useMemo/example-one">
            Example one
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/useMemo/example-one" component={UseStateExampleOne} />
      </Switch>
    </>
  );
};

export default UseState;
