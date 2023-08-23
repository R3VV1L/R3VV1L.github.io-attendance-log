import { useState } from 'react';
import './EditModal.css';
import { Button } from '../../button/Button';

export const EditModal = ({ onClose }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseEditModal = () => {
        setShowModal(false);
        onClose();
    };

    return (
        <div className="edit-modal-group">
            <div className="edit-modal-content">
                <div className="edit-modal-title">Добавление преподавателя</div>
                <div className="edit-modal-name">
                    <label className="edit-modal-subtitle">ФИО</label>
                    <input className="input-name" placeholder="Не заполнено" />
                </div>
                <div className="edit-modal-name">
                    <label className="edit-modal-subtitle">Должность</label>
                    <select className="input-name">
                        <option value="" disabled selected hidden>
                            Не выбрано
                        </option>
                        <option value="option1">Зав. кафедрой</option>
                        <option value="option2">Старший преподаватель</option>
                        <option value="option3">Старший преподаватель</option>
                    </select>
                </div>
                <div className="edit-modal-name">
                    <label className="edit-modal-subtitle">Кафедра</label>
                    <select className="input-name">
                        <option value="" disabled selected hidden>
                            Не выбрано
                        </option>
                        <option value="option4">ИТиМ</option>
                        <option value="option5">ПиД</option>
                        <option value="option6">СПФ</option>
                    </select>
                </div>
                <div className="edit-modal-name">
                    <label className="edit-modal-subtitle">Эл. адрес</label>
                    <input className="input-name" placeholder="Не заполнено" />
                </div>
                <div className="edit-modal-name">
                    <label className="edit-modal-subtitle">Логин</label>
                    <input className="input-name" placeholder="Не заполнено" />
                </div>
                <div className="edit-modal-name">
                    <label className="edit-modal-subtitle">Пароль</label>
                    <input className="input-name" placeholder="Не заполнено" />
                </div>
                <Button
                    title="Отмена"
                    size="empty"
                    onClick={handleCloseEditModal}
                />
                <div>
                    <Button
                        title="Добавить"
                        size="fill"
                        onClick={handleCloseEditModal}
                    />
                </div>
            </div>
        </div>
    );
};
