const pesquisaModel = require('../models/pesquisaModel');

const getPesquisas = async (req, res) => {
    try {
        const pesquisas = await pesquisaModel.getAllPesquisas();
        console.log(pesquisas)
        res.json(pesquisas);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar pesquisas', error: err });
    }
};

const createPesquisa = async (req, res) => {
    try {
        const novaPesquisa = req.body;
        const createdPesquisa = await pesquisaModel.addPesquisa(novaPesquisa);
        res.status(201).json(createdPesquisa);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao adicionar pesquisa', error: err });
    }
};

module.exports = {
    getPesquisas, createPesquisa
}