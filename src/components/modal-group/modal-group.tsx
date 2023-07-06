import { useState } from "react";
import "./modal-group.css";

export const ModalGroup = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Добавить</button>
      {showModal && (
        <div className="modal-group">
          <div className="modal-group-content">
            <div className="close" onClick={handleCloseModal}></div>
            <div className="title">Добавление преподавателя</div>
          </div>
        </div>
      )}
    </>
  );
};
