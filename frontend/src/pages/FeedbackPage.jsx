import React, { useState } from 'react';
import RatingSelection from '../components/RatingSelection';
import Button from '../components/Button';
import { enviarFeedback } from '../services/api';

const FeedbackPage = () => {
    // Estado inicial do formulário
    const initialFormState = {
        name: '',
        state: '',
        email: '',
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
        critica: ''
    };

    const [formData, setFormData] = useState(initialFormState);

    // Função para lidar com inputs de texto (nome, estado, email e crítica)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Função para armazenar as respostas numéricas de 1 a 5
    const handleRatingChange = (question, rating) => {
        setFormData({
            ...formData,
            [question]: rating
        });
    };

    // Função para envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação simples para garantir que todos os campos obrigatórios foram preenchidos
        if (!formData.name || !formData.state || !formData.email) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (!formData.question1 || !formData.question2 || !formData.question3 || !formData.question4 || !formData.question5) {
            alert('Por favor, responda todas as perguntas de avaliação.');
            return;
        }

        try {
            const response = await enviarFeedback(formData); // Chamada da API

            alert('Feedback enviado com sucesso!');
            setFormData(initialFormState);  // Limpa o formulário após o envio bem-sucedido

            // Atualiza a página (opcional: você pode remover isso se não quiser recarregar completamente a página)
            window.location.reload();

        } catch (error) {
            alert('Erro ao enviar feedback. Tente novamente.');
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4 mt-10">Queremos Saber Sua Opinião!</h1>
            <p>Ajude-nos a melhorar sua experiência na Barraca Chico do Caranguejo! Avalie nossos serviços e diga
                 o que podemos fazer para tornar seu próximo 
                 dia de praia ainda melhor.</p>
            
            <form onSubmit={handleSubmit} className="mt-6">
                {/* Campos de nome, estado e email */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="state" className="block text-sm font-medium">Estado:</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Perguntas de avaliação com números de 1 a 5 */}
                <RatingSelection 
                    question="Qualidade do Atendimento" 
                    onChange={(rating) => handleRatingChange('question1', rating)} 
                />
                <RatingSelection 
                    question="Sabor e Qualidade dos Pratos" 
                    onChange={(rating) => handleRatingChange('question2', rating)} 
                />
                <RatingSelection 
                    question="Ambiente e Conforto" 
                    onChange={(rating) => handleRatingChange('question3', rating)} 
                />
                <RatingSelection 
                    question="Rapidez no Atendimento" 
                    onChange={(rating) => handleRatingChange('question4', rating)} 
                />
                <RatingSelection 
                    question="Experiência Geral" 
                    onChange={(rating) => handleRatingChange('question5', rating)} 
                />

                {/* Campo de crítica aberta (opcional) */}
                <div className="mt-4">
                    <label htmlFor="critica" className="block text-sm font-medium">Sugestões e Melhorias (opcional):</label>
                    <textarea
                        id="critica"
                        name="critica"
                        value={formData.critica}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Anything else you'd like to add?"
                    />
                </div>

                {/* Botão de envio */}
                <div className="mt-6">
                    <Button text="Enviar" />
                </div>
            </form>
        </div>
    );
};

export default FeedbackPage;
