import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/auth";
import RegisterForm from "./RegisterForm";

export default function Login({
  setLoggedIn,
  setTooltipState,
  setCurrentUserEmail,
}) {
  const navigate = useNavigate();

  function handleFormSubmit(e, values) {
    e.preventDefault();

    auth.authorize(values).then((data) => {
      if (data?.token) {
        setLoggedIn(true);
        setCurrentUserEmail(values.email);
        navigate("/");
      } else {
        setTooltipState("error");
      }
    });
  }

  return (
    <div className="register">
      <RegisterForm
        title="Вход"
        formName="login"
        btnText="Войти"
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
