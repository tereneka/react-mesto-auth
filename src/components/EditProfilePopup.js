import React, {
  useContext,
  useEffect,
} from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useForm } from "../hooks/useForm";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({
  isOpen,
  isLoading,
  onClose,
  onUpdateUser,
}) {
  const currentUser = useContext(
    CurrentUserContext
  );

  const { values, handleChange, setValues } =
    useForm({ name: "", about: "" });

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  useEffect(() => {
    if (isOpen) {
      setValues({
        name: currentUser.name,
        about: currentUser.about,
      });
    }
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isLoading={isLoading}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_data_user-name"
        value={values.name}
        onChange={handleChange}
        id="user-name-input"
        type="text"
        name="name"
        autoFocus
        required
        minLength="2"
        maxLength="40"
        placeholder="Имя"
      />
      <span className="popup__input-error user-name-input-error"></span>
      <input
        className="popup__input popup__input_data_user-about"
        value={values.about}
        onChange={handleChange}
        id="user-about-input"
        type="text"
        name="about"
        required
        minLength="2"
        maxLength="200"
        placeholder="О себе"
      />
      <span className="popup__input-error user-about-input-error"></span>
    </PopupWithForm>
  );
}
