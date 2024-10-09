const db = require('../db');  // Importa a conexão do banco de dados

// Função para obter todas as pesquisas
exports.getAllPesquisas = async () => {
    try {
        const result = await db.query('SELECT * FROM feedback');
        return result.rows;
    } catch (err) {
        console.error('Erro ao buscar pesquisas: ', err);
        throw err;
    }
};

// Função para adicionar uma nova pesquisa
exports.addPesquisa = async (pesquisa) => {
    const { name, state, email, question1, question2, question3, critica = null } = pesquisa;
    // 'created_at' será gerado automaticamente
    try {
        const query = `
            INSERT INTO feedback (name, state, email, question1, question2, question3, created_at, critica)
            VALUES ($1, $2, $3, $4, $5, $6, NOW(), $7)
            RETURNING *;
        `;
        const values = [name, state, email, question1, question2, question3, critica];

        const result = await db.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Erro ao adicionar pesquisa: ', err);
        throw err;
    }
};
