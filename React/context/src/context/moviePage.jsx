import React, { Component } from "react";
import MovieList from "./movieList";
import MovieRow from "./movieRow";

export default class MoviePage extends Component {
  render() {
    return (
      <div>
        <MovieList />
      </div>
    );
  }
}
