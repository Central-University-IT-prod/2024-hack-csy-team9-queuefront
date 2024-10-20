// src/components/UserView.js
import React from 'react';
import '{{sensitive data}}/queue-app_r/src/App.css';

const UserView = ({ activeParticipants, queue }) => {
    return (
        <div classname="ActiveParticText" style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <h2 > Активные участники</h2>
                <ul>
                    {activeParticipants.map((participant, index) => (
                        <li key={index}>{participant}</li>
                    ))}
                </ul>
            </div>
            <div style={{ flex: 1 }}>
                <h2>Очередь</h2>
                <ul>
                    {queue.map((participant, index) => (
                        <li key={index}>{participant}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserView;
