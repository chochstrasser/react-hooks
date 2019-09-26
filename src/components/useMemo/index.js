import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import UseMemoExampleOne from "./examples/example-one.js";

const UseMemo = () => {
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
        <Route path="/useMemo/example-one" component={UseMemoExampleOne} />
      </Switch>
    </>
  );
};

export default UseMemo;
