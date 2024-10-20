import React, { useState } from 'react';

const initialParticipants = [
    { id: 1, name: 'Иванов Иван' },
    { id: 2, name: 'Петр Петров' },
    { id: 3, name: 'Вася Васильев' },
];

const AdminPage = () => {
    const [participants, setParticipants] = useState(initialParticipants);

    const handleRemove = (id) => {
        setParticipants(participants.filter(participant => participant.id !== id));
    };

    // Отделяем первых двух участников
    const firstTwoParticipants = participants.slice(0, 2);
    const otherParticipants = participants.slice(2);

    return (
        <div className="admin-page">
            <h2>Участники в очереди</h2>

            <h3>Активные участники</h3>
            <ul>
                {firstTwoParticipants.map(participant => (
                    <li key={participant.id}>
                        {participant.name}
                        <button onClick={() => handleRemove(participant.id)}>Удалить</button>
                    </li>
                ))}
            </ul>

            <h3>Очередь</h3>
            <ul>
                {otherParticipants.map(participant => (
                    <li key={participant.id}>
                        {participant.name}
                        <button onClick={() => handleRemove(participant.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;
