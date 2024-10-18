import React, { useState } from 'react';
import RatingSelection from '../components/RatingSelection';
import Button from '../components/Button';
import { enviarFeedback } from '../services/api';
import Logo from '../components/Logo';

export default function FeedbackPage(){
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
    const [showModal, setShowModal] = useState(false);

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
            const response = await enviarFeedback(formData);
    
            setShowModal(true); 
    
            setTimeout(() => {
                window.location.reload(); 
                
            }, 3000);
    
        } catch (error) {
            alert('Erro ao enviar feedback. Tente novamente.');
        }
    };
    

    return (
        <div className="  mx-auto px-4 flex flex-col items-center justify-center bg-[url('../src/assets/fundo2.avif')] bg-cover bg-center ">
            <div className='w-{30rem}  items-center p-3'>
                <Logo />
                <div>
                <h1 className="text-2xl font-bold mb-4 ">Queremos Saber Sua <br /> Opinião!</h1>

                </div>
                <div className='w-72 '>
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
                    <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full p-2 border bg-gray-200 rounded-md focus:outline-none focus:ring-0 border-none"
                        required
                    >
                        <option value="">Selecione seu estado</option>
                        <option value="AC">Acre (AC)</option>
                        <option value="AL">Alagoas (AL)</option>
                        <option value="AP">Amapá (AP)</option>
                        <option value="AM">Amazonas (AM)</option>
                        <option value="BA">Bahia (BA)</option>
                        <option value="CE">Ceará (CE)</option>
                        <option value="DF">Distrito Federal (DF)</option>
                        <option value="ES">Espírito Santo (ES)</option>
                        <option value="GO">Goiás (GO)</option>
                        <option value="MA">Maranhão (MA)</option>
                        <option value="MT">Mato Grosso (MT)</option>
                        <option value="MS">Mato Grosso do Sul (MS)</option>
                        <option value="MG">Minas Gerais (MG)</option>
                        <option value="PA">Pará (PA)</option>
                        <option value="PB">Paraíba (PB)</option>
                        <option value="PR">Paraná (PR)</option>
                        <option value="PE">Pernambuco (PE)</option>
                        <option value="PI">Piauí (PI)</option>
                        <option value="RJ">Rio de Janeiro (RJ)</option>
                        <option value="RN">Rio Grande do Norte (RN)</option>
                        <option value="RS">Rio Grande do Sul (RS)</option>
                        <option value="RO">Rondônia (RO)</option>
                        <option value="RR">Roraima (RR)</option>
                        <option value="SC">Santa Catarina (SC)</option>
                        <option value="SP">São Paulo (SP)</option>
                        <option value="SE">Sergipe (SE)</option>
                        <option value="TO">Tocantins (TO)</option>
                    </select>
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

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  
                        <h2 className="text-2xl font-semibold mb-4">Obrigado por sua avaliação!</h2>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


