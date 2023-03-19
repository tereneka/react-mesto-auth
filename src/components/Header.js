import React from "react";
import {
  Link,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../images/logo-white.svg";

export default function Header() {
  return (
    <header className="header">
      <a href="#">
        <img
          className="logo"
          src={logo}
          alt="Место"
        />
      </a>

      <Routes>
        <Route
          path="/sign-up"
          element={
            <Link
              className="header__link"
              to={"/sign-in"}>
              Войти
            </Link>
          }
        />

        <Route
          path="/sign-in"
          element={
            <Link
              className="header__link"
              to={"/sign-up"}>
              Регистрация
            </Link>
          }
        />
      </Routes>
    </header>
  );
}
