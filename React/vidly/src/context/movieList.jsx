import React, { Component } from "react";
import UserContext from "./context/userContext";

export default class MovieList extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => <div>MovieList {userContext.name}</div>}
      </UserContext.Consumer>
    );
  }
}
