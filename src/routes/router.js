import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Raw from "../pages/raw";
import Surfboard from "../pages/surfboard";
import Contentstack from "../pages/contentstack";
import TeamMembers from "../container/teamMembers";
// import EmployeeCard from "../components/employeeCard";
const Router = (props) => {
  //create routes for the app
  console.log(props);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/raw" component={Raw} />

        {/* the route for surfboard and contentstack should be lazy loaded */}
        <Route exact path="/surfboard" component={Surfboard} />
        <Route exact path="/contentstack" component={Contentstack} />
        {/* <Route
          exact
          path={`${props.match.url}/employeelist`}
          render={() => <h1> Employee list component</h1>}
        /> */}
        <Route
          exact
          path="/raw/employeelist"
          render={(props) => <TeamMembers {...props} />}
        />

        <Route
          exact
          path="/surfboard/employeelist"
          render={(props) => <TeamMembers {...props} />}
        />

        <Route
          exact
          path="/contentstack/employeelist"
          render={(props) => <TeamMembers {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
