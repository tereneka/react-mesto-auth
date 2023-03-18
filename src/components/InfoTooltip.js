import React, { useEffect, useRef } from "react";

export default function InfoTooltip({ onClose }) {
  const popupRef = useRef();

  function closePopup(e) {
    if (
      e.target === e.currentTarget ||
      e.target.classList.contains(
        "popup__close-btn"
      )
    ) {
      popupRef.current.classList.add(
        "popup_closed"
      );
      setTimeout(() => {
        onClose();
      }, 300);
    }
  }

  function closePopupByEsc(e) {
    if (e.key === "Escape") {
      popupRef.current.classList.add(
        "popup_closed"
      );
      setTimeout(() => {
        onClose();
      }, 300);
    }
  }

  useEffect(() => {
    document.addEventListener(
      "keydown",
      closePopupByEsc
    );

    return () => {
      document.removeEventListener(
        "keydown",
        closePopupByEsc
      );
    };
  }, []);

  return (
    <div
      className="popup popup_name_tooltip"
      ref={popupRef}
      onClick={closePopup}>
      <div className="popup__container  popup__container_for_form">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="закрытие окна"></button>

        {/* <div className="popup__content-box">
          <form
            className="popup__form"
            onSubmit={onSubmit}
            method="post"
            name={name}>
            {children}
            <button
              className="submit-btn popup__submit-btn"
              type="submit">
              {isLoading
                ? "Сохранение..."
                : "Сохранить"}
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
}
