import { useState } from 'react';
import './EditModal.css';
import { Button } from '../../Button/Button';
import { Input } from '../../input/Input';
import { Select } from '../../select/Select';

// @ts-ignore
export const EditModal = ({ onClose }) => {
    // @ts-ignore
    const [showModal, setShowModal] = useState(false);
    const [fio, setFio] = useState('');
    const [mail, setMail] = useState('');
    const [log, setLog] = useState('');
    const [pass, setPass] = useState('');
    const optionsPosition = [
        'Зав. кафедрой',
        'Старший преподаватель',
        'к.т.н.',
    ];

    const optionsDepartment = ['ИТиМ', 'ПиД', 'СПФ'];

    // @ts-ignore
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseEditModal = () => {
        setShowModal(false);
        onClose();
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Действия, которые нужно выполнить при нажатии клавиши "Enter"
            event.currentTarget.blur(); // Убираем курсор с инпута
        }
    };

    return (
        <section className="edit-modal-group">
            <h1 className="edit-modal-title">Редактирование записи</h1>
            <div className="edit-modal-content">
                <h2 className="edit-modal-subtitle">ФИО</h2>
                <div className="edit-modal-input">
                    <Input
                        placeholder="Не заполнено"
                        type="text"
                        name="name"
                        required={false}
                        value={fio}
                        onChange={(event) => setFio(event.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <h2 className="edit-modal-subtitle">Должность</h2>
                <div className="edit-modal-input">
                    <Select options={['Не выбрано', ...optionsPosition]} />
                </div>
                <h2 className="edit-modal-subtitle">Кафедра</h2>
                <div className="edit-modal-input">
                    <Select options={['Не выбрано', ...optionsDepartment]} />
                </div>
                <h2 className="edit-modal-subtitle">Эл. адрес</h2>
                <div className="edit-modal-input">
                    <Input
                        placeholder="Не заполнено"
                        type="text"
                        name="name"
                        required={false}
                        value={mail}
                        onChange={(event) => setMail(event.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <h2 className="edit-modal-subtitle">Логин</h2>
                <div className="edit-modal-input">
                    <Input
                        placeholder="Не заполнено"
                        type="text"
                        name="name"
                        required={false}
                        value={log}
                        onChange={(event) => setLog(event.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <h2 className="edit-modal-subtitle">Пароль</h2>
                <div className="edit-modal-input">
                    <Input
                        placeholder="Не заполнено"
                        type="text"
                        name="name"
                        required={false}
                        value={pass}
                        onChange={(event) => setPass(event.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>
            </div>
            <section className="edit-modal-control">
                <Button
                    title="Отмена"
                    type="cancel"
                    onClick={handleCloseEditModal}
                />
                <Button
                    title="Редактировать"
                    type="edit"
                    onClick={handleCloseEditModal}
                />
            </section>
        </section>
    );
};
