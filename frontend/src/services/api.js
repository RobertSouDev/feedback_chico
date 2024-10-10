import axios from 'axios';

const API_URL = 'https://p5zqaemgax.us-east-2.awsapprunner.com/api/pesquisa'; // Substitua pela sua URL de backend

export const enviarFeedback = async (dados) => {
    try {
        const response = await axios.post(API_URL, dados);
        return response.data;
    } catch (error) {
        console.error('Erro ao enviar feedback', error);
        throw error;
    }
};
