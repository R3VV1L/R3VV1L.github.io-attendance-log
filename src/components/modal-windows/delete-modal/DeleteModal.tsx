import { useState } from 'react';
import './DeleteModal.css';
import { Button } from '../../Button/Button';
// @ts-ignore
export const DeleteModal = ({ onClose }) => {
    // @ts-ignore
    const [showModal, setShowModal] = useState(false);
    // @ts-ignore
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowModal(false);
        onClose();
    };

    return (
        <div className="delete-modal-group">
            <div className="delete-modal-content">
                <div className="delete-modal-title">Подтверждение удаления</div>
                <div className="delete-modal-subtitle">
                    Вы действительно хотите удалить эти объекты?
                </div>
                <div className="del-button">
                    <Button
                        title="удалить"
                        size="fill"
                        onClick={handleCloseDeleteModal}
                    />
                </div>
                <div className="cancel-button">
                    <Button
                        title="Отмена"
                        size="empty"
                        onClick={handleCloseDeleteModal}
                    />
                </div>
            </div>
        </div>
    );
};
