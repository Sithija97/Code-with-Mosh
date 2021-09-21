import React, { useContext } from "react";
import MovieRow from "./movieRow";
import UserContext from "./userContext";

function MovieList(props) {
  const userContext = useContext(UserContext);
  return (
    <div>
      Movie List {userContext.currentUser ? userContext.currentUser.name : ""}{" "}
      <MovieRow />
    </div>
  );
}

export default MovieList;
