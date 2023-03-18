import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";

export default function RouterApp({ loggedIn }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            element={Main}
            loggedIn={loggedIn}
          />
        }
      />

      <Route
        path="/sign-up"
        element={<Register />}
      />

      <Route
        path="/sign-in"
        element={<Login />}
      />
    </Routes>
  );
}
