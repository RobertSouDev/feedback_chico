const express = require('express');
const router = express.Router();
const pesquisaController = require('../controllers/pesquisaController');

// Rota de status da API
router.get('/', (req, res) => {
    res.json({ message: 'API está funcionando!' });
});

// Definindo as rotas
router.get('/pesquisa', pesquisaController.getPesquisas);
router.post('/pesquisa', pesquisaController.createPesquisa);

module.exports = router;
