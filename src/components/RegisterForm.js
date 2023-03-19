import React from "react";
import { useForm } from "../hooks/useForm";

export default function RegisterForm({
  title,
  formName,
  btnText,
  onSubmit,
}) {
  const { values, handleChange, setValues } =
    useForm({ email: "", password: "" });

  return (
    <>
      <h1 className="register__title">{title}</h1>

      <form
        className="register__form"
        name={formName}
        onSubmit={(e) => onSubmit(e, values)}>
        <input
          className="input register__input"
          value={values.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
          type="email"
          required
        />

        <input
          className="input register__input"
          value={values.password}
          onChange={handleChange}
          name="password"
          placeholder="Пароль"
          type="password"
          required
          minLength={8}
        />

        <button className="submit-btn register__submit-btn">
          {btnText}
        </button>
      </form>
    </>
  );
}
