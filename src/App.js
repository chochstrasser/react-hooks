import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navigation";
import Home from "./components/home";
import UseCallback from "./components/useCallback";
import UseMemo from "./components/useMemo";
import UseState from "./components/useState";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/usecallback" component={UseCallback} />
          <Route path="/usememo" component={UseMemo} />
          <Route path="/usestate" component={UseState} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
