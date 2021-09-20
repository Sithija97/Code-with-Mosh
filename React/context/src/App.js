import React, { Component } from "react";
import MoviePage from "./context/moviePage";
import MovieRow from "./context/movieRow";
import UserContext from "./context/userContext";

export default class App extends Component {
  state = {
    currentUser: { name: "Sithija" },
  };
  render() {
    return (
      // <UserContext.Provider value={this.state.currentUser}>
      //   <div>
      //     <MoviePage />
      //   </div>
      // </UserContext.Provider>
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MovieRow />
        </div>
      </UserContext.Provider>
    );
  }
}
