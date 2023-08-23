import { useState } from 'react';
import './AddModal.css';
import { Button } from '../../button/Button';

export const AddModal = ({ onClose }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseAddModal = () => {
        setShowModal(false);
        onClose();
    };

    return (
        <div className="add-modal-group">
            <div className="add-modal-content">
                <div className="add-modal-title">Добавление преподавателя</div>
                <div className="add-modal-name">
                    <label className="add-modal-subtitle">ФИО</label>
                    <input className="input-name" placeholder="Не заполнено" />
                </div>
                <div className="add-modal-name">
                    <label className="add-modal-subtitle">Должность</label>
                    <select className="input-name">
                        <option value="">Не выбрано</option>
                        <option value="option1">Зав. кафедрой</option>
                        <option value="option2">Старший преподаватель</option>
                        <option value="option3">Старший преподаватель</option>
                    </select>
                </div>
                <div className="add-modal-name">
                    <label className="add-modal-subtitle">Кафедра</label>
                    <select className="input-name">
                        <option value="">Не выбрано</option>
                        <option value="option4">ИТиМ</option>
                        <option value="option5">ПиД</option>
                        <option value="option6">СПФ</option>
                    </select>
                </div>
                <div className="add-modal-name">
                    <label className="add-modal-subtitle">Эл. адрес</label>
                    <input className="input-name" placeholder="Не заполнено" />
                </div>
                <div className="add-modal-name">
                    <label className="add-modal-subtitle">Логин</label>
                    <input className="input-name" placeholder="Не заполнено" />
                </div>
                <div className="add-modal-name">
                    <label className="add-modal-subtitle">Пароль</label>
                    <input className="input-name" placeholder="Не заполнено" />
                </div>
                <div className="cancel-button">
                    <Button
                        title="Отмена"
                        size="empty"
                        onClick={handleCloseAddModal}
                    />
                </div>
                <div className="add-button">
                    <Button
                        title="Добавить"
                        size="fill"
                        onClick={handleCloseAddModal}
                    />
                </div>
            </div>
        </div>
    );
};
