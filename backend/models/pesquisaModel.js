const db = require('../db');  

exports.getAllPesquisas = async () => {
    try {
        const result = await db.query('SELECT * FROM feedback');
        return result.rows;
    } catch (err) {
        console.error('Erro ao buscar pesquisas: ', err);
        throw err;
    }
};

exports.addPesquisa = async (pesquisa) => {
    const { name, state, email, question1, question2, question3, question4, question5, critica = null } = pesquisa;
    try {
        const query = `
            INSERT INTO feedback (name, state, email, question1, question2, question3, question4, question5, created_at, critica)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), $9)
            RETURNING *;
        `;
        const values = [name, state, email, question1, question2, question3, question4, question5, critica];

        const result = await db.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Erro ao adicionar pesquisa: ', err);
        throw err;
    }
};
