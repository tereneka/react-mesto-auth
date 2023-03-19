import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";

export default function RouterApp({
  loggedIn,
  setLoggedIn,
  setTooltipState,
  setCurrentUserEmail,
  cards,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            element={Main}
            loggedIn={loggedIn}
            cards={cards}
            onEditAvatar={onEditAvatar}
            onEditProfile={onEditProfile}
            onAddPlace={onAddPlace}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        }
      />

      <Route
        path="/sign-up"
        element={
          <Register
            setTooltipState={setTooltipState}
          />
        }
      />

      <Route
        path="/sign-in"
        element={
          <Login
            setLoggedIn={setLoggedIn}
            setTooltipState={setTooltipState}
            setCurrentUserEmail={
              setCurrentUserEmail
            }
          />
        }
      />
    </Routes>
  );
}
