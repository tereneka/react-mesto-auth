import React from "react";
import { Link } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <div className="register">
      <RegisterForm
        title="Регистрация"
        formName="register"
        btnText="Зарегистрироваться"
      />

      {/* <h1 className="register__title">
        Регистрация
      </h1>

      <form
        className="register__form"
        name="register">
        <input
          className="input register__input"
          name="email"
          placeholder="Email"
          type="email"
          required
        />

        <input
          className="input register__input"
          name="password"
          placeholder="Пароль"
          type="password"
          required
        />

        <button className="submit-btn register__submit-btn">
          Зарегистрироваться
        </button>
      </form> */}

      <Link
        className="register__link"
        to="/sign-in">
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}
