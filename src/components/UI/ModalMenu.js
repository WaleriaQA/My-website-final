import React, { useEffect, useCallback } from "react";
import "./ModalMenu.css";

const ModalMenu = ({ show, onClose, children }) => {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (show) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [show, handleKeyDown]);

  return (
    <div
      className={`modal-menu-backdrop ${show ? "show" : ""}`}
      onClick={onClose}
    >
      <div className="modal-menu-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalMenu;
