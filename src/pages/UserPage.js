import React, { useState } from 'react';

const initialParticipants = [
    { id: 1, name: 'Иван Иванов', active: true },
    { id: 2, name: 'Вася Васильев', active: false },
    { id: 3, name: 'Петр Петров', active: true },
];

const UserPage = () => {
    const [participants, setParticipants] = useState(initialParticipants);
    const [newParticipant, setNewParticipant] = useState('');

    const handleAddParticipant = () => {
        if (!newParticipant) return;

        const newParticipantObj = {
            id: participants.length + 1,
            name: newParticipant,
            active: false, // По умолчанию новые участники не активные
        };

        setParticipants([...participants, newParticipantObj]);
        setNewParticipant('');
    };

    const activeParticipants = participants.filter(participant => participant.active);
    const queue = participants.filter(participant => !participant.active);

    return (
        <div>
            <h2>Активные участники</h2>
            <ul className="participant-list">
                {activeParticipants.map(participant => (
                    <li key={participant.id} className="participant-item">{participant.name}</li>
                ))}
            </ul>

            <h2>Очередь</h2>
            <ul className="queue-list">
                {queue.map(participant => (
                    <li key={participant.id} className="queue-item">{participant.name}</li>
                ))}
            </ul>

            <input
                type="text"
                value={newParticipant}
                onChange={(e) => setNewParticipant(e.target.value)}
                placeholder="Введите имя"
            />
            <button onClick={handleAddParticipant}>Записаться в очередь</button>
        </div>
    );
};

export default UserPage;
