import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { employees, companies } from "../apis/apiRoutes";
import BannerImage from "../components/bannerImage";
import Header from "../components/header";
import "./raw.style.css";

class Surfboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
      employees: [],
    };
  }

  componentDidMount() {
    axios.get(companies).then((response) => {
      let companyInfo = response.data.filter((c) => c.name === "Surfboard");
      this.setState({
        company: companyInfo[0],
      });
    });

    axios.get(employees).then((response) => {
      this.setState({
        employees: [...response.data].filter((e) => e.company === "Surfboard"),
      });
    });
  }

  render() {
    return (
      <div>
        .
        <Header logo={this.state.company.logo} />
        <div className="banner">
          <BannerImage bannerImg={this.state.company.imageUrl} />
          <h1> {this.state.company.name}</h1>
          <h3> {this.state.company.description}</h3>
        </div>
        <div className="site-content">
          <h4>
            {" "}
            <Link
              to={{
                pathname: `${this.props.match.url}/employeeList`,
                state: {
                  employees: [...this.state.employees], // send array bro
                  logo: this.state.company.logo, // for team page logo
                },
              }}
            >
              {" "}
              Our Team{" "}
            </Link>
          </h4>
        </div>
      </div>
    );
  }
}

export default Surfboard;

// import React from "react";
// import Header from "../components/header";
// class Surfboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees: [],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <h1> Surfboard </h1>
//       </div>
//     );
//   }
// }
