import { useState } from 'react';
import './ModalGroup.css';
import { Button } from '../button/Button.tsx';
import { AddModal } from '../modal-windows/add-modal.tsx/AddModal.tsx';
import { EditModal } from '../modal-windows/edit-modal/EditModal.tsx';
import { DeleteModal } from '../modal-windows/delete-modal/DeleteModal.tsx';

export const ModalGroup = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleOpenAddModal = () => {
        setShowAddModal(true);
    };

    const handleCloseAddModal = () => {
        setShowAddModal(false);
    };

    const handleOpenEditModal = () => {
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    const handleOpenDeleteModal = () => {
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    return (
        <>
            <section>
                <div className="modal-button">
                    <Button
                        title="+ Добавить"
                        type="add"
                        onClick={handleOpenAddModal}
                    />
                </div>
                <div className="modal-button">
                    <Button
                        title="Редактировать"
                        type="edit"
                        onClick={handleOpenEditModal}
                    />
                </div>
                <div className="modal-button">
                    <Button
                        title="Удалить"
                        type="delete"
                        onClick={handleOpenDeleteModal}
                    />
                </div>
            </section>

            {showAddModal && (
                <div className="modal-group">
                    <AddModal onClose={handleCloseAddModal} />
                </div>
            )}

            {showEditModal && (
                <div className="modal-group">
                    <EditModal onClose={handleCloseEditModal} />
                </div>
            )}

            {showDeleteModal && (
                <div className="modal-group">
                    <DeleteModal onClose={handleCloseDeleteModal} />
                </div>
            )}
        </>
    );
};
