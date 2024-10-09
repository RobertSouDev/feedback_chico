const express = require('express');
const router = express.Router();
const pesquisaController = require('../controllers/pesquisaController');

router.get('/', (req, res) => {
    res.json({ message: 'API está funcionando!' });
});


router.get('/pesquisa', pesquisaController.getPesquisas);
router.post('/pesquisa', pesquisaController.createPesquisa);

module.exports = router;
