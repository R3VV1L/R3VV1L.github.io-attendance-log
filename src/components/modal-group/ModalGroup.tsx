import { useState } from "react";
import "./ModalGroup.css";
import { Button } from "../Button/Button.tsx";

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
      <Button title="Добавить" size="page-fill" onClick={handleOpenModal} />
      <Button title="Редактировать" size="page-empty" onClick={() => {}} />
      <Button title="Удалить" size="page-empty" onClick={() => {}} />
      {showModal && (
        <div className="modal-group">
          <div className="modal-group-content">
            <div className="close" onClick={handleCloseModal}></div>
            <div className="title">Добавление преподавателя</div>
            <Button title="Добавить" size="modal" onClick={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
};
