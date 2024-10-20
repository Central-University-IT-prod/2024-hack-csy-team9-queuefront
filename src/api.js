// api.js
const API_URL = 'http://127.0.0.1:8000 ' ; // Замените на ваш URL бэкенда

export const fetchParticipants = async () => {
    try {
        const response = await fetch(`${API_URL}/participants`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching participants:', error);
        return [];
    }
};

export const removeParticipant = async (participantId) => {
    try {
        const response = await fetch(`${API_URL}/participants/${participantId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete participant');
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting participant:', error);
    }
};
