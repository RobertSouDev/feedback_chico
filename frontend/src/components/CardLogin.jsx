import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CardLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState(null);
    const navigate = useNavigate(); // Hook para redirecionamento

    useEffect(() => {
        if (token) {
            // Armazena o token no localStorage apenas quando o token for definido
            localStorage.setItem('token', token);
            alert('Login realizado com sucesso!');
            navigate('/home'); // Redireciona para a página home
        }
    }, [token, navigate]); // O useEffect será executado apenas quando o token mudar

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                username: username,
                password: password
            });

            // Verifica se a resposta contém o token
            if (response.data && response.data.token) {
                setToken(response.data.token); // Define o token e dispara o useEffect
            } else {
                setError('Token não encontrado na resposta.');
            }
        } catch (error) {
            setError('Erro ao realizar login. Verifique suas credenciais.');
        }
    };

    return (
        <div className="bg-white min-w-16 w-96 h-80 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-center text-gray-800">Logo</h2>
            <form className="w-[80%] h-[80%] flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <div className="mb-6 w-full">
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6 w-full">
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Entrar</button>
            </form>
        </div>
    );
}
