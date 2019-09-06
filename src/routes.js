import React from "react";
import { Route } from "react-router-dom";
import {Login, Cart, Products } from "./pages";

const createRoutes = () => (
  <Route>
    <Route exact path="/" component={Products} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/login" component={Login} />
  </Route>
);

export default createRoutes;
