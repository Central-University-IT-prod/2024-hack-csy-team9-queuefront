import React from 'react';

const AdminView = ({ queue, onRemove, onAdd }) => {
    const [newParticipant, setNewParticipant] = React.useState('');

    const handleAdd = () => {
        onAdd(newParticipant);
        setNewParticipant('');
    };

    return (
        <div>
            <h2>Очередь (Админ)</h2>
            <ul>
                {queue.map((participant, index) => (
                    <li key={index}>
                        {participant.name} <button onClick={() => onRemove(participant.id)}>Исключить</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newParticipant}
                onChange={(e) => setNewParticipant(e.target.value)}
                placeholder="Имя участника"
            />
            <button onClick={handleAdd}>Добавить в очередь</button>
        </div>
    );
};

export default AdminView;
