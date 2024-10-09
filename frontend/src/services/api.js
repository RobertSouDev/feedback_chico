import axios from 'axios';

const API_URL = 'http://localhost:3000/api/pesquisa'; // Substitua pela sua URL de backend

export const enviarFeedback = async (dados) => {
    try {
        const response = await axios.post(API_URL, dados);
        return response.data;
    } catch (error) {
        console.error('Erro ao enviar feedback', error);
        throw error;
    }
};
