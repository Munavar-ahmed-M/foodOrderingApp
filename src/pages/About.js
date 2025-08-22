import User from "../components/User";
import UserClass from "../components/UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1
          style={{
            paddingLeft: ".7em",
            paddingBottom: ".5em",
            paddingTop: ".5em",
          }}
        >
          About
        </h1>
        <h3
          style={{
            paddingLeft: "1em",
            paddingBottom: ".5em",
            paddingTop: ".5em",
          }}
        >
          Welcome to our restaurant
        </h3>
        <UserClass
          name={"munavar ahmed (class)"}
          location={"vellore"}
          contact={"munavar@xyz.com"}
          value={1}
        ></UserClass>
      </>
    );
  }
}

export default About;
