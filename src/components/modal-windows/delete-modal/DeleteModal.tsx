import { useState } from 'react';
import './DeleteModal.css';
import { Button } from '../../Button/Button';

interface EditModalProps {
    onClose: () => void;
}

export const DeleteModal: React.FC<EditModalProps> = ({ onClose }) => {
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
        <section className="delete-modal-group">
            <h1 className="delete-modal-title">Удаление записи</h1>
            <h2 className="delete-modal-subtitle">
                Вы действительно хотите удалить эти записи?
            </h2>
            <section className="add-modal-control">
                <Button
                    title="Отмена"
                    type="cancel"
                    onClick={handleCloseDeleteModal}
                />
                <Button
                    title="Удалить"
                    type="delete"
                    onClick={handleCloseDeleteModal}
                />
            </section>
        </section>
    );
};
