// this becomes the home page.
import React from "react";
import Axios from "axios";
import { companies } from "./apis/apiRoutes";
// import { withRouter } from "react-router-dom";
import Company from "./components/company";
import "./App.style.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
    };
  }
  navigateCompany({ history, company }) {
    console.log("navigate company", history, company);
    history.push(`${company.homeUrl}`);
  }

  componentDidMount() {
    Axios.get(companies).then((response) => {
      this.setState({
        companies: [...response.data],
      });
      console.log(response.data);
    });
  }

  render() {
    console.log("inside app", this.props);
    return (
      <div>
        {" "}
        <h1> Home Page </h1>
        <div className="company-card">
          {this.state.companies.map((company) => (
            <Company
              company={{ ...company }}
              key={company.id}
              onClick={this.navigateCompany}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
