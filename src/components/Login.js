import React from "react";
import RegisterForm from "./RegisterForm";

export default function Login() {
  return (
    <div className="register">
      <RegisterForm
        title="Вход"
        formName="login"
        btnText="Войти"
      />
    </div>
  );
}
