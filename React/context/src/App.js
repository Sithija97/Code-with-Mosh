import React, { Component } from "react";
import Login from "./context/login";
import MoviePage from "./context/moviePage";
import MovieRow from "./context/movieRow";
import UserContext from "./context/userContext";
import CardContext from "./context/cardContext";

export default class App extends Component {
  state = {
    currentUser: { name: null },
  };

  handleLoggedIn = (username) => {
    console.log("Getting the user:" + username);
    const user = { name: username };
    this.setState({ currentUser: user });
  };
  render() {
    return (
      <CardContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CardContext.Provider>
    );
  }
}
