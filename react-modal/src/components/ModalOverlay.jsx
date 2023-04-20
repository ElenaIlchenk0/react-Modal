import React from "react";
import "./styles.css";

const ModalOverlay = ({ onClose }) => {
    return <div onClick={onClose} className="modalOverlay"></div>;
};

export default ModalOverlay;
