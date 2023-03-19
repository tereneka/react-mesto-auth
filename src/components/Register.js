import React from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { auth } from "../utils/auth";
import RegisterForm from "./RegisterForm";

export default function Register({
  setTooltipState,
}) {
  const navigate = useNavigate();

  function handleFormSubmit(e, values) {
    e.preventDefault();

    auth.register(values).then((res) => {
      if (res.data) {
        setTooltipState("success");
        navigate("/sign-in");
      } else {
        setTooltipState("error");
      }
    });
  }

  return (
    <div className="register">
      <RegisterForm
        title="Регистрация"
        formName="register"
        btnText="Зарегистрироваться"
        onSubmit={handleFormSubmit}
      />

      <Link
        className="register__link"
        to="/sign-in">
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}
