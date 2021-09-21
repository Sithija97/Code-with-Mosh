import React, { useContext } from "react";
import CardContext from "./cardContext";
import MovieRow from "./movieRow";
import UserContext from "./userContext";

function MovieList(props) {
  const userContext = useContext(UserContext);
  const cardContext = useContext(CardContext);

  console.log(cardContext);
  return (
    <div>
      Movie List {userContext.currentUser ? userContext.currentUser.name : ""}{" "}
      <MovieRow />
    </div>
  );
}

export default MovieList;
