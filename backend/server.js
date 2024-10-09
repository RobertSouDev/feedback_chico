require('dotenv').config();

console.log('Usuário do banco de dados:', process.env.DB_USER);  // Para verificar se o dotenv está funcionando

const express = require('express');
const cors = require('cors');
const pesquisaRoutes = require('./routes/pesquisaRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', pesquisaRoutes);

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
