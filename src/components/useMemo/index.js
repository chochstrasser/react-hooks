import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import UseMemoExampleOne from "./examples/example-one.js";
import UseMemoExampleTwo from "./examples/example-two.js";
import UseMemoExampleThree from "./examples/example-three.js";

const UseMemo = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/useMemo/example-one">
            Example one
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/useMemo/example-two">
            Example two
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/useMemo/example-three">
            Example three
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/useMemo/example-one" component={UseMemoExampleOne} />
        <Route path="/useMemo/example-two" component={UseMemoExampleTwo} />
        <Route path="/useMemo/example-three" component={UseMemoExampleThree} />
      </Switch>
    </>
  );
};

export default UseMemo;
