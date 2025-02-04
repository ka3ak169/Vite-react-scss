import React, { useEffect } from "react";
import SocialIcons from "./SocialIcons";

const Popup = ({ isPopupOpen, closePopup }) => {
  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isPopupOpen]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      closePopup();
    }
  };

  if (!isPopupOpen) return null;

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup">
        <button className="popup__close" onClick={closePopup}>
          ✖
        </button>
        <h2 className="popup__title">Order via your preferred social media</h2>
        <div className="popup__content">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Popup;
