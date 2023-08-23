import { useState } from 'react';
import './ModalGroup.css';
import { Button } from '../button/Button.tsx';

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
            <section className="modal-group-section">
                <Button
                    title="Добавить"
                    size="page-fill"
                    onClick={handleOpenModal}
                />
                <Button
                    title="Редактировать"
                    size="page-empty"
                    onClick={() => {}}
                />
                <Button title="Удалить" size="page-empty" onClick={() => {}} />
            </section>

            {showModal && (
                <div className="modal-group">
                    <div className="modal-content">
                        <div
                            className="close-button"
                            onClick={handleCloseModal}
                        >
                            <span className="close-icon" />
                            <span className="close-icon" />
                        </div>
                        <div className="modal-title">
                            Добавление преподавателя
                        </div>
                        <div className="modal-name">
                            <label className="modal-subtitle">ФИО</label>
                            <input
                                className="input-name"
                                placeholder="Не заполнено"
                            />
                        </div>
                        <div className="modal-name">
                            <label className="modal-subtitle">Должность</label>
                            <select className="input-name">
                                <option value="" disabled selected hidden>
                                    Не выбрано
                                </option>
                                <option value="option1">Зав. кафедрой</option>
                                <option value="option2">
                                    Старший преподаватель
                                </option>
                                <option value="option3">
                                    Старший преподаватель
                                </option>
                            </select>
                        </div>
                        <div className="modal-name">
                            <label className="modal-subtitle">Кафедра</label>
                            <select className="input-name">
                                <option value="" disabled selected hidden>
                                    Не выбрано
                                </option>
                                <option value="option4">ИТиМ</option>
                                <option value="option5">ПиД</option>
                                <option value="option6">СПФ</option>
                            </select>
                        </div>
                        <div className="modal-name">
                            <label className="modal-subtitle">Эл. адрес</label>
                            <input
                                className="input-name"
                                placeholder="Не заполнено"
                            />
                        </div>
                        <div className="modal-name">
                            <label className="modal-subtitle">Логин</label>
                            <input
                                className="input-name"
                                placeholder="Не заполнено"
                            />
                        </div>
                        <div className="modal-name">
                            <label className="modal-subtitle">Пароль</label>
                            <input
                                className="input-name"
                                placeholder="Не заполнено"
                            />
                        </div>

                        <Button
                            title="Добавить"
                            size="modal"
                            onClick={handleCloseModal}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
