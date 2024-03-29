import "./App.css";
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/common/navBar";
import MovieForm from "./components/movieForm";
import loginForm from "./components/loginForm";
import registerForm from "./components/registerForm";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main role="main" class="container">
        <Switch>
          <Route path="/register" component={registerForm}></Route>
          <Route path="/login" component={loginForm}></Route>
          <Route path="/movies/new" component={MovieForm}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
