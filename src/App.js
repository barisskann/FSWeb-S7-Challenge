import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Css/Header.css";
import "./Css/Section.css";
import HomePage from "./Components/HomePage";
import { Route, Switch } from "react-router-dom";
import Form from "./Components/Form";
import FormOnay from "./Components/Form/FormOnay";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route path="/form/onay">
          <FormOnay />
        </Route>
        <Route path="/about">
          <HomePage />
        </Route>
        <Route path="/content">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
