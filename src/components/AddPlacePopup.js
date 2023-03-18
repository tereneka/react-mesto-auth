import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({
  isOpen,
  isLoading,
  onClose,
  onAddPlace,
}) {
  // мы ещё не проходили тему кастомных хуков
  const { values, handleChange, setValues } =
    useForm({ name: "", link: "" });

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(values);
  }

  useEffect(() => {
    if (isOpen) {
      setValues({ name: "", link: "" });
    }
  }, []);

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      isLoading={isLoading}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_data_card-name"
        value={values.name}
        onChange={handleChange}
        id="card-name-input"
        placeholder="Название"
        type="text"
        name="name"
        autoFocus
        required
        minLength="2"
        maxLength="30"
      />
      <span className="popup__input-error card-name-input-error"></span>
      <input
        className="popup__input popup__input_data_card-link"
        value={values.link}
        onChange={handleChange}
        id="card-link-input"
        placeholder="Ссылка на картинку"
        type="url"
        name="link"
        required
      />
      <span className="popup__input-error card-link-input-error"></span>
    </PopupWithForm>
  );
}
