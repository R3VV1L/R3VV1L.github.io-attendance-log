import { useState } from 'react';
import './ModalGroup.css';
import { Button } from '../Button/Button.tsx';

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
            {showModal && (
                <div className="modal-group">
                    <div className="modal-group-content">
                        <div className="close" onClick={handleCloseModal}>
                            <span className='close-icon' />
                            <span className='close-icon' />
                        </div>
                        <div className="title">Добавление преподавателя</div>
                        <div className="modal-name">
                            <p className="subtitle">ФИО</p>
                            <input 
                                className="input-name"
                                placeholder='Не заполнено'
                            />
                        </div>
                        <div className="modal-name">
                            <p className="subtitle">Должность</p>
                            <input 
                                className="input-name"
                                placeholder='Не выбрано'
                            />
                        </div>
                        <div className="modal-name">
                            <p className="subtitle">Кафедра</p>
                            <input 
                                className="input-name"
                                placeholder='Не выбрано'
                            />
                        </div>
                        <div className="modal-name">
                            <p className="subtitle">E-mail</p>
                            <input 
                                className="input-name"
                                placeholder='Не заполнено'
                            />
                        </div>
                        <div className="modal-name">
                            <p className="subtitle">Логин</p> 
                            <input 
                                className="input-name"
                                placeholder='Не заполнено'
                            />
                        </div>
                        <div className="modal-name">
                            <p className="subtitle">Пароль</p>
                            <input 
                                className="input-name" 
                                placeholder='Не заполнено'
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
