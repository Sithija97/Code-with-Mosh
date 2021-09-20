import React, { Component } from "react";
import UserContext from "./userContext";
import MoviePage from "./moviePage";

export default class MovieList extends Component {
  static contextType = UserContext;
  componentDidMount() {
    console.log("context", this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            MovieList {userContext.name} <MoviePage />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
