import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummyName",
        location: "dummyLocation",
      },
    };
  }
  async componentDidMount() {
    const getData = await fetch("https://api.github.com/users/Munavar-ahmed-M");
    const json = await getData.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;
    return (
      <div className="user-card">
        <img
          src={avatar_url}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        ></img>
        <UserContext.Consumer>
          {({ loggedInUser }) => {
            return (
              <>
                <div>Logged User Name : {loggedInUser}</div>
              </>
            );
          }}
        </UserContext.Consumer>
        <div>Name : {name}</div>
        <div>bio : {bio}</div>
        <div>Location : {location}</div>
        <div>Contact : munavar@xyz.com</div>
      </div>
    );
  }
}

export default UserClass;
