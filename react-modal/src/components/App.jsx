import { useEffect, useState } from "react";
import "./styles.css";
import Modal from "./Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (!isModalOpen && isConfirmed) {
      setTimeout(() => {
        alertFunc();
      }, 0);
    }
  }, [isModalOpen, isConfirmed]);

  const handleButtonClick = () => {
    if (!isConfirmed) handleOpenModal();
    else alertFunc();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (value) => {
    setIsModalOpen(false);
    if (value) setConfirmed(true);
  };

  const alertFunc = () => {
    alert("Действие выполнено");
  };

  return (
    <div className="App">
      <h1>Click Button</h1>
      <button className="btn" onClick={handleButtonClick}>Perform action</button>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
