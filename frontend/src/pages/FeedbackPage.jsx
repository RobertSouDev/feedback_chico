import React, { useState } from 'react';
import RatingSelection from '../components/RatingSelection';
import Button from '../components/Button';
import { enviarFeedback } from '../services/api';
import Logo from '../components/Logo';

const FeedbackPage = () => {
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRatingChange = (question, rating) => {
        setFormData({
            ...formData,
            [question]: rating
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            setFormData(initialFormState);  

            window.location.reload();

        } catch (error) {
            alert('Erro ao enviar feedback. Tente novamente.');
        }
    };

    return (
        <div className="  mx-auto px-4 flex flex-col items-center justify-center bg-[url('../src/assets/fundo2.avif')] bg-cover bg-center ">
            <div className='w-{30rem}  items-center p-3'>
                <Logo>  </Logo>
                <div>
                <h1 className="text-2xl font-bold mb-4 ">Queremos Saber Sua <br /> Opinião!</h1>

                </div>
                <div  className='w-72 '>
            <p className='text-sm'>Ajude-nos a melhorar sua experiência na Barraca Chico do Caranguejo! Avalie nossos serviços e diga
                 o que podemos fazer para tornar seu próximo 
                 dia de praia ainda melhor.</p>
            
            </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border bg-gray-200 rounded-md focus:outline-none focus:ring-0 border-none "
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
                        className="w-full p-2 border bg-gray-200 rounded-md focus:outline-none focus:ring-0 border-none"
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
                        className="w-full p-2 border bg-gray-200 rounded-md focus:outline-none focus:ring-0 border-none"
                        required
                    />
                </div>




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

                
                <div className="mt-4">
                    <label htmlFor="critica" className="block text-sm font-medium">Sugestões e Melhorias (opcional):</label>
                    <textarea
                        id="critica"
                        name="critica"
                        value={formData.critica}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 b rounded-md focus:outline-none focus:ring-0 border-none placeholder:text-[0.8rem]"
                        placeholder="Mais alguma coisa que você gostaria de acrescentar?"
                    />
                </div>

                <div className="mb-6">
                    <Button text="Enviar" />
                </div>
            </form>
        </div>
    );
};

export default FeedbackPage;
