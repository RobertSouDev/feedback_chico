require('dotenv').config();

console.log('Usuário do banco de dados:', process.env.DB_USER);

const express = require('express');
const cors = require('cors');
const pesquisaRoutes = require('./routes/pesquisaRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', pesquisaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
