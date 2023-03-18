import React from "react";

export default function RegisterForm({
  title,
  formName,
  btnText,
}) {
  return (
    <>
      <h1 className="register__title">{title}</h1>

      <form
        className="register__form"
        name={formName}>
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
          {btnText}
        </button>
      </form>
    </>
  );
}
