import React, { Suspense } from "react"; // for lazy loading
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Raw from "../pages/raw";
import Surfboard from "../pages/surfboard";
import Contentstack from "../pages/contentstack";

// // using React.lazy( ) to lazy load components
// const Surfboard = React.lazy(() => import("../pages/surfboard"));
// const Contentstack = React.lazy(() => import("../pages/contentstack"));

import TeamMembers from "../container/teamMembers";
// import EmployeeCard from "../components/employeeCard";
const Router = (props) => {
  //create routes for the app
  console.log(props);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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

        {/* <Route
          exact
          path="/surfboard/employeelist"
          render={(props) => <TeamMembers {...props} />}
        />

        <Route
          exact
          path="/contentstack/employeelist"
          render={(props) => <TeamMembers {...props} />}
        /> */}

        {/* Lazy loading the following components  */}
        <Route
          exact
          path="/surfboard/employeelist"
          render={(props) => (
            <Suspense fallback={<h1>Loading </h1>}>
              <TeamMembers {...props} />
            </Suspense>
          )}
        />

        <Route
          exact
          path="/contentstack/employeelist"
          render={(props) => (
            <Suspense fallback={<h1>Loading </h1>}>
              <TeamMembers {...props} />
            </Suspense>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
