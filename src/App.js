import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import './App.css';

const initialParticipants = [
    { id: 1, name: 'Участник 1', active: true },
    { id: 2, name: 'Участник 2', active: false },
    { id: 3, name: 'Участник 3', active: true },
];

function App() {
    const [participants, setParticipants] = useState(initialParticipants);
    const [circles, setCircles] = useState([]);

    const generateCircles = () => {
        const newCircles = [];
        const circleCount = 15;

        for (let i = 0; i < circleCount; i++) {
            const radius = Math.random() * (window.innerHeight / 4);
            const color = `rgba(0, ${Math.floor(Math.random() * 256)}, 0, ${Math.random()})`;
            const top = Math.random() * (window.innerHeight - radius);
            const left = Math.random() * (window.innerWidth - radius);

            newCircles.push({ radius, color, top, left });
        }

        setCircles(newCircles);
    };

    useEffect(() => {
        generateCircles(); // Генерация кругов при монтировании компонента
    }, []);

    return (
        <Router>
            <div className="container">
                {circles.map((circle, index) => (
                    <div
                        key={index}
                        className="circle"
                        style={{
                            width: `${circle.radius}px`,
                            height: `${circle.radius}px`,
                            backgroundColor: circle.color,
                            top: `${circle.top}px`,
                            left: `${circle.left}px`,
                            position: 'absolute',
                            borderRadius: '50%',
                            opacity: 0.5,
                            pointerEvents: 'none',
                        }}
                    />
                ))}
                <Routes>
                    <Route path="/" element={<UserPage participants={participants} />} />
                    <Route path="/admin" element={<AdminPage participants={participants} setParticipants={setParticipants} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
